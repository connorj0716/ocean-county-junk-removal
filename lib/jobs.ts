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
};

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

  return (data as JobRow[]).map((r) => ({
    id: `J-${r.id}`,
    date: r.job_date,
    customer: r.customer,
    type: r.job_type,
    location: r.location,
    price: typeof r.price === "string" ? parseFloat(r.price) : r.price,
    status: r.status,
  }));
}
