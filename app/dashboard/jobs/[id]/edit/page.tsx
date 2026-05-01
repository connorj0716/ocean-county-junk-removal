import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import JobForm from "../../_components/JobForm";
import { updateJobAction } from "../../_actions";
import { fetchJobById } from "@/lib/jobs";

export const dynamic = "force-dynamic";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = parseInt(id, 10);
  if (!Number.isFinite(numericId)) notFound();

  const job = await fetchJobById(numericId);
  if (!job) notFound();

  // bind the id to the action
  const boundAction = updateJobAction.bind(null, numericId);

  const dateOnly = new Date(job.date).toISOString().slice(0, 10);

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/dashboard/jobs"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 mb-4"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to jobs
      </Link>
      <h1 className="text-2xl font-semibold tracking-tight">Edit job</h1>
      <p className="text-sm text-slate-500 mt-1">Job ID: {job.id}</p>

      <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <JobForm
          action={boundAction}
          submitLabel="Save changes"
          initial={{
            date: dateOnly,
            customer: job.customer,
            job_type: job.type,
            location: job.location,
            price: job.price,
            status: job.status,
            notes: job.notes,
          }}
        />
      </div>
    </div>
  );
}
