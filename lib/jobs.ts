import "server-only";
import { getSupabaseAdmin } from "@/lib/supabase";
import type { Job, JobStatus } from "@/lib/data";

type JobRow = {
  id: number;
  job_date: string;
  customer: string;
  job_type: string;
  location: string;
  price: number | string;
  status: JobStatus;
  notes?: string | null;
};

function rowToJob(r: JobRow): Job {
  return {
    id: `J-${r.id}`,
    date: r.job_date,
    customer: r.customer,
    type: r.job_type,
    location: r.location,
    price: typeof r.price === "string" ? parseFloat(r.price) : r.price,
    status: r.status,
  };
}

export async function fetchJobs(): Promise<Job[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("jobs")
    .select("id, job_date, customer, job_type, location, price, status")
    .order("job_date", { ascending: false });

  if (error) {
    console.error("fetchJobs error:", error);
    return [];
  }
  return (data as JobRow[]).map(rowToJob);
}

export async function fetchJobById(id: number): Promise<
  | (Job & { notes: string | null; rawId: number })
  | null
> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("jobs")
    .select("id, job_date, customer, job_type, location, price, status, notes")
    .eq("id", id)
    .single();
  if (error || !data) return null;
  const row = data as JobRow;
  return { ...rowToJob(row), notes: row.notes ?? null, rawId: row.id };
}

export type JobInput = {
  job_date: string; // ISO
  customer: string;
  job_type: string;
  location: string;
  price: number;
  status: JobStatus;
  notes?: string | null;
};

export async function createJob(input: JobInput): Promise<{ ok: true } | { ok: false; error: string }> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("jobs").insert(input);
  if (error) {
    console.error("createJob error:", error);
    return { ok: false, error: error.message };
  }
  return { ok: true };
}

export async function updateJob(id: number, input: JobInput): Promise<{ ok: true } | { ok: false; error: string }> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("jobs").update(input).eq("id", id);
  if (error) {
    console.error("updateJob error:", error);
    return { ok: false, error: error.message };
  }
  return { ok: true };
}

export async function deleteJob(id: number): Promise<{ ok: true } | { ok: false; error: string }> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("jobs").delete().eq("id", id);
  if (error) {
    console.error("deleteJob error:", error);
    return { ok: false, error: error.message };
  }
  return { ok: true };
}
