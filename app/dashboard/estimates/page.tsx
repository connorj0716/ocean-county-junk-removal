import Link from "next/link";
import { Plus, FileText } from "lucide-react";
import { fetchEstimates } from "@/lib/estimates";
import { computeEstimate } from "@/lib/estimateMath";
import { formatCurrency, formatDate } from "@/lib/data";
import EstimateStatusBadge from "./_components/StatusBadge";

export const dynamic = "force-dynamic";

export default async function EstimatesPage() {
  const estimates = await fetchEstimates();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Estimates</h1>
          <p className="text-sm text-slate-500">
            Build, send, and convert quotes into jobs.
          </p>
        </div>
        <Link
          href="/dashboard/estimates/new"
          className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold rounded-lg bg-brand-500 hover:bg-brand-400 text-white shadow"
        >
          <Plus className="h-4 w-4" />
          New estimate
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-500 bg-slate-50">
                <th className="px-5 py-3 font-medium">Number</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Service</th>
                <th className="px-5 py-3 font-medium">Created</th>
                <th className="px-5 py-3 font-medium text-right">Total</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {estimates.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center">
                    <div className="mx-auto h-12 w-12 rounded-xl bg-slate-100 grid place-items-center text-slate-500">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="mt-3 text-slate-700 font-medium">No estimates yet</div>
                    <div className="text-sm text-slate-500 mt-1">
                      Create your first quote — gas + dump + trailer % = total in seconds.
                    </div>
                    <Link
                      href="/dashboard/estimates/new"
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-brand-500 hover:bg-brand-400 text-white shadow"
                    >
                      <Plus className="h-4 w-4" />
                      Create your first estimate
                    </Link>
                  </td>
                </tr>
              )}
              {estimates.map((e) => {
                const totals = computeEstimate({
                  gas_cost: e.gas_cost,
                  dump_fee: e.dump_fee,
                  trailer_percent: e.trailer_percent,
                  trailer_full_rate: e.trailer_full_rate,
                  taxable: e.taxable,
                  tax_rate: e.tax_rate,
                });
                return (
                  <tr key={e.id} className="hover:bg-slate-50">
                    <td className="px-5 py-3 whitespace-nowrap">
                      <Link
                        href={`/dashboard/estimates/${e.id}`}
                        className="font-medium text-brand-700 hover:text-brand-800"
                      >
                        {e.number}
                      </Link>
                    </td>
                    <td className="px-5 py-3 font-medium text-slate-900">
                      {e.customer_name}
                    </td>
                    <td className="px-5 py-3 text-slate-600">{e.job_type ?? "—"}</td>
                    <td className="px-5 py-3 text-slate-600 whitespace-nowrap">
                      {formatDate(e.created_at)}
                    </td>
                    <td className="px-5 py-3 text-right font-medium tabular-nums">
                      {formatCurrency(totals.total)}
                    </td>
                    <td className="px-5 py-3">
                      <EstimateStatusBadge status={e.status} />
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
