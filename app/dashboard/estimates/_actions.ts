"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AUTH_COOKIE, readSessionUser } from "@/lib/auth";
import {
  createEstimate as dbCreate,
  updateEstimate as dbUpdate,
  deleteEstimate as dbDelete,
  setEstimateStatus,
  fetchEstimateById,
  type EstimateInput,
  type EstimateStatus,
} from "@/lib/estimates";
import { computeEstimate, toNumber, clamp } from "@/lib/estimateMath";
import { createJob } from "@/lib/jobs";

const ALLOWED_STATUS: EstimateStatus[] = ["Draft", "Sent", "Won", "Lost"];

async function requireAuth() {
  const c = await cookies();
  if (!readSessionUser(c.get(AUTH_COOKIE)?.value)) redirect("/login");
}

function nullableStr(v: FormDataEntryValue | null, max = 1000): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  if (!t) return null;
  return t.slice(0, max);
}

function parseEstimateForm(formData: FormData): EstimateInput | { error: string } {
  const customer_name = nullableStr(formData.get("customer_name"), 200);
  if (!customer_name) return { error: "Customer name is required." };

  const status = String(formData.get("status") ?? "Draft") as EstimateStatus;
  if (!ALLOWED_STATUS.includes(status)) return { error: "Invalid status." };

  const taxable = formData.get("taxable") === "on" || formData.get("taxable") === "true";

  const job_date_raw = nullableStr(formData.get("job_date"), 20);
  const job_date = job_date_raw && /^\d{4}-\d{2}-\d{2}$/.test(job_date_raw) ? job_date_raw : null;

  return {
    status,
    customer_name,
    customer_phone: nullableStr(formData.get("customer_phone"), 40),
    customer_email: nullableStr(formData.get("customer_email"), 200),
    customer_address: nullableStr(formData.get("customer_address"), 400),
    job_date,
    job_type: nullableStr(formData.get("job_type"), 120),
    notes: nullableStr(formData.get("notes"), 4000),
    gas_cost: Math.max(0, toNumber(formData.get("gas_cost"))),
    dump_fee: Math.max(0, toNumber(formData.get("dump_fee"))),
    trailer_percent: clamp(toNumber(formData.get("trailer_percent")), 0, 100),
    trailer_full_rate: Math.max(0, toNumber(formData.get("trailer_full_rate"))),
    taxable,
    tax_rate: Math.max(0, toNumber(formData.get("tax_rate"))),
  };
}

export async function createEstimateAction(_prev: unknown, formData: FormData) {
  await requireAuth();
  const parsed = parseEstimateForm(formData);
  if ("error" in parsed) return { error: parsed.error };
  const result = await dbCreate(parsed);
  if (!result.ok) return { error: result.error };
  revalidatePath("/dashboard/estimates");
  redirect(`/dashboard/estimates/${result.id}`);
}

export async function updateEstimateAction(
  id: number,
  _prev: unknown,
  formData: FormData
) {
  await requireAuth();
  const parsed = parseEstimateForm(formData);
  if ("error" in parsed) return { error: parsed.error };
  const result = await dbUpdate(id, parsed);
  if (!result.ok) return { error: result.error };
  revalidatePath("/dashboard/estimates");
  revalidatePath(`/dashboard/estimates/${id}`);
  revalidatePath(`/dashboard/estimates/${id}/edit`);
  revalidatePath(`/dashboard/estimates/${id}/print`);
  redirect(`/dashboard/estimates/${id}`);
}

export async function deleteEstimateAction(formData: FormData) {
  await requireAuth();
  const id = parseInt(String(formData.get("id") ?? ""), 10);
  if (!Number.isFinite(id)) return;
  await dbDelete(id);
  revalidatePath("/dashboard/estimates");
  redirect("/dashboard/estimates");
}

export async function changeStatusAction(formData: FormData) {
  await requireAuth();
  const id = parseInt(String(formData.get("id") ?? ""), 10);
  const status = String(formData.get("status") ?? "") as EstimateStatus;
  if (!Number.isFinite(id) || !ALLOWED_STATUS.includes(status)) return;
  await setEstimateStatus(id, status);
  revalidatePath("/dashboard/estimates");
  revalidatePath(`/dashboard/estimates/${id}`);
}

export async function convertToJobAction(formData: FormData): Promise<void> {
  await requireAuth();
  const id = parseInt(String(formData.get("id") ?? ""), 10);
  if (!Number.isFinite(id)) return;

  const estimate = await fetchEstimateById(id);
  if (!estimate) {
    redirect("/dashboard/estimates");
  }

  const totals = computeEstimate({
    gas_cost: estimate.gas_cost,
    dump_fee: estimate.dump_fee,
    trailer_percent: estimate.trailer_percent,
    trailer_full_rate: estimate.trailer_full_rate,
    taxable: estimate.taxable,
    tax_rate: estimate.tax_rate,
  });

  const jobDateIso = estimate.job_date
    ? new Date(`${estimate.job_date}T12:00:00`).toISOString()
    : new Date().toISOString();

  const created = await createJob({
    job_date: jobDateIso,
    customer: estimate.customer_name,
    job_type: estimate.job_type ?? "Other",
    location: estimate.customer_address ?? "",
    price: totals.total,
    status: "Scheduled",
    notes: `From estimate ${estimate.number}${estimate.notes ? `\n\n${estimate.notes}` : ""}`,
  });

  if (!created.ok) {
    console.error("convertToJobAction: createJob failed:", created.error);
    redirect(`/dashboard/estimates/${id}`);
  }

  await setEstimateStatus(id, "Won");

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/jobs");
  revalidatePath("/dashboard/estimates");
  revalidatePath(`/dashboard/estimates/${id}`);
  redirect("/dashboard/jobs");
}
