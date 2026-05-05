import "server-only";
import { getSupabaseAdmin } from "@/lib/supabase";

export type EstimateStatus = "Draft" | "Sent" | "Won" | "Lost";

export type Estimate = {
  id: number;
  number: string; // e.g. "EST-1042"
  status: EstimateStatus;
  customer_name: string;
  customer_phone: string | null;
  customer_email: string | null;
  customer_address: string | null;
  job_date: string | null; // YYYY-MM-DD
  job_type: string | null;
  notes: string | null;
  gas_cost: number;
  dump_fee: number;
  trailer_percent: number;
  trailer_full_rate: number;
  taxable: boolean;
  tax_rate: number;
  converted_job_id: number | null;
  created_at: string;
  updated_at: string;
};

export type EstimateInput = {
  status: EstimateStatus;
  customer_name: string;
  customer_phone: string | null;
  customer_email: string | null;
  customer_address: string | null;
  job_date: string | null;
  job_type: string | null;
  notes: string | null;
  gas_cost: number;
  dump_fee: number;
  trailer_percent: number;
  trailer_full_rate: number;
  taxable: boolean;
  tax_rate: number;
};

type EstimateRow = Omit<Estimate, "number">;

function n(v: unknown): number {
  if (typeof v === "number") return Number.isFinite(v) ? v : 0;
  if (typeof v === "string") {
    const x = parseFloat(v);
    return Number.isFinite(x) ? x : 0;
  }
  return 0;
}

function rowToEstimate(r: EstimateRow): Estimate {
  return {
    ...r,
    gas_cost: n(r.gas_cost),
    dump_fee: n(r.dump_fee),
    trailer_percent: n(r.trailer_percent),
    trailer_full_rate: n(r.trailer_full_rate),
    tax_rate: n(r.tax_rate),
    number: formatEstimateNumber(r.id),
  };
}

export function formatEstimateNumber(id: number): string {
  return `EST-${1000 + id}`;
}

export async function fetchEstimates(): Promise<Estimate[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("estimates")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("fetchEstimates error:", error);
    return [];
  }
  return (data as EstimateRow[]).map(rowToEstimate);
}

export async function fetchEstimateById(id: number): Promise<Estimate | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("estimates")
    .select("*")
    .eq("id", id)
    .single();
  if (error || !data) return null;
  return rowToEstimate(data as EstimateRow);
}

export async function createEstimate(
  input: EstimateInput
): Promise<{ ok: true; id: number } | { ok: false; error: string }> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("estimates")
    .insert(input)
    .select("id")
    .single();
  if (error || !data) {
    console.error("createEstimate error:", error);
    return { ok: false, error: error?.message ?? "Insert failed." };
  }
  return { ok: true, id: data.id as number };
}

export async function updateEstimate(
  id: number,
  input: EstimateInput
): Promise<{ ok: true } | { ok: false; error: string }> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("estimates").update(input).eq("id", id);
  if (error) {
    console.error("updateEstimate error:", error);
    return { ok: false, error: error.message };
  }
  return { ok: true };
}

export async function deleteEstimate(
  id: number
): Promise<{ ok: true } | { ok: false; error: string }> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("estimates").delete().eq("id", id);
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

export async function setEstimateStatus(
  id: number,
  status: EstimateStatus,
  convertedJobId: number | null = null
): Promise<{ ok: true } | { ok: false; error: string }> {
  const supabase = getSupabaseAdmin();
  const update: Record<string, unknown> = { status };
  if (convertedJobId !== null) update.converted_job_id = convertedJobId;
  const { error } = await supabase.from("estimates").update(update).eq("id", id);
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
