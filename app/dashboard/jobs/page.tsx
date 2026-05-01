import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { fetchJobs } from "@/lib/jobs";
import { formatCurrency, formatDate } from "@/lib/data";
import DeleteJobButton from "./_components/DeleteJobButton";

export const dynamic = "force-dynamic";

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Scheduled: "bg-amber-50 text-amber-700 border-amber-200",
    "In Progress": "bg-blue-50 text-blue-700 border-blue-200",
    Invoiced: "bg-violet-50 text-violet-700 border-violet-200",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-medium ${
        map[status] ?? "bg-slate-50 text-slate-700 border-slate-200"
      }`}
    >
      {status}
    </span>
  );
}

export default async function JobsPage() {
  const jobs = await fetchJobs();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Jobs</h1>
          <p className="text-sm text-slate-500">
            Every pickup, cleanout, and scheduled job. Add, edit, or remove rows below.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/jobs/new"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold rounded-lg bg-brand-500 hover:bg-brand-400 text-white shadow"
          >
            <Plus className="h-4 w-4" />
            New job
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-500 bg-slate-50">
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Job Type</th>
                <th className="px-5 py-3 font-medium">Location</th>
                <th className="px-5 py-3 font-medium text-right">Price</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {jobs.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-16 text-center">
                    <div className="text-slate-700 font-medium">No jobs yet</div>
                    <div className="text-sm text-slate-500 mt-1">
                      Once you log your first pickup, your dashboard fills up.
                    </div>
                    <Link
                      href="/dashboard/jobs/new"
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-brand-500 hover:bg-brand-400 text-white shadow"
                    >
                      <Plus className="h-4 w-4" />
                      Add your first job
                    </Link>
                  </td>
                </tr>
              )}
              {jobs.map((j) => {
                const numericId = j.id.replace(/^J-/, "");
                return (
                  <tr key={j.id} className="hover:bg-slate-50">
                    <td className="px-5 py-3 text-slate-600 whitespace-nowrap">
                      {formatDate(j.date)}
                    </td>
                    <td className="px-5 py-3 font-medium text-slate-900">{j.customer}</td>
                    <td className="px-5 py-3 text-slate-600">{j.type}</td>
                    <td className="px-5 py-3 text-slate-600">{j.location}</td>
                    <td className="px-5 py-3 text-right font-medium">
                      {formatCurrency(j.price)}
                    </td>
                    <td className="px-5 py-3">
                      <StatusBadge status={j.status} />
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/dashboard/jobs/${numericId}/edit`}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border border-slate-200 hover:bg-slate-100 text-slate-700"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                          Edit
                        </Link>
                        <DeleteJobButton id={numericId} customer={j.customer} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
