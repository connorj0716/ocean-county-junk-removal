"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import {
  createJob as dbCreateJob,
  updateJob as dbUpdateJob,
  deleteJob as dbDeleteJob,
  type JobInput,
} from "@/lib/jobs";
import { AUTH_COOKIE, readSessionUser } from "@/lib/auth";
import type { JobStatus } from "@/lib/data";

const ALLOWED_STATUS: JobStatus[] = ["Completed", "Scheduled", "In Progress", "Invoiced"];

async function requireAuth() {
  const c = await cookies();
  const user = readSessionUser(c.get(AUTH_COOKIE)?.value);
  if (!user) redirect("/login");
}

function parseForm(formData: FormData): JobInput | { error: string } {
  const date = String(formData.get("date") ?? "").trim();
  const customer = String(formData.get("customer") ?? "").trim();
  const job_type = String(formData.get("job_type") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const priceStr = String(formData.get("price") ?? "").trim();
  const status = String(formData.get("status") ?? "").trim() as JobStatus;
  const notesRaw = String(formData.get("notes") ?? "").trim();

  if (!date) return { error: "Date is required." };
  if (!customer) return { error: "Customer name is required." };
  if (!job_type) return { error: "Job type is required." };
  if (!location) return { error: "Location is required." };
  const price = parseFloat(priceStr);
  if (!Number.isFinite(price) || price < 0) return { error: "Price must be a non-negative number." };
  if (!ALLOWED_STATUS.includes(status)) return { error: "Invalid status." };

  // Convert YYYY-MM-DD to ISO at noon local to avoid TZ off-by-one in displays.
  const job_date = /^\d{4}-\d{2}-\d{2}$/.test(date)
    ? new Date(`${date}T12:00:00`).toISOString()
    : new Date(date).toISOString();

  return {
    job_date,
    customer,
    job_type,
    location,
    price,
    status,
    notes: notesRaw ? notesRaw : null,
  };
}

export async function createJobAction(_prev: unknown, formData: FormData) {
  await requireAuth();
  const parsed = parseForm(formData);
  if ("error" in parsed) return { error: parsed.error };
  const result = await dbCreateJob(parsed);
  if (!result.ok) return { error: result.error };
  revalidatePath("/dashboard");
  revalidatePath("/dashboard/jobs");
  redirect("/dashboard/jobs");
}

export async function updateJobAction(id: number, _prev: unknown, formData: FormData) {
  await requireAuth();
  const parsed = parseForm(formData);
  if ("error" in parsed) return { error: parsed.error };
  const result = await dbUpdateJob(id, parsed);
  if (!result.ok) return { error: result.error };
  revalidatePath("/dashboard");
  revalidatePath("/dashboard/jobs");
  revalidatePath(`/dashboard/jobs/${id}/edit`);
  redirect("/dashboard/jobs");
}

export async function deleteJobAction(formData: FormData) {
  await requireAuth();
  const id = parseInt(String(formData.get("id") ?? ""), 10);
  if (!Number.isFinite(id)) return;
  await dbDeleteJob(id);
  revalidatePath("/dashboard");
  revalidatePath("/dashboard/jobs");
}
