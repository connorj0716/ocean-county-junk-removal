import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import JobForm from "../_components/JobForm";
import { createJobAction } from "../_actions";

export const dynamic = "force-dynamic";

export default function NewJobPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/dashboard/jobs"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 mb-4"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to jobs
      </Link>
      <h1 className="text-2xl font-semibold tracking-tight">Add a new job</h1>
      <p className="text-sm text-slate-500 mt-1">
        Log a completed pickup or schedule an upcoming one. It'll appear on the dashboard immediately.
      </p>

      <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <JobForm action={createJobAction} submitLabel="Create job" />
      </div>
    </div>
  );
}
