import Link from "next/link";
import { ArrowLeft, Pencil, Printer, CheckCircle2, XCircle, Send } from "lucide-react";
import { notFound } from "next/navigation";
import { fetchEstimateById } from "@/lib/estimates";
import EstimateDocument from "../_components/EstimateDocument";
import EstimateStatusBadge from "../_components/StatusBadge";
import DeleteEstimateButton from "../_components/DeleteEstimateButton";
import { changeStatusAction, convertToJobAction } from "../_actions";

export const dynamic = "force-dynamic";

export default async function ViewEstimatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = parseInt(id, 10);
  if (!Number.isFinite(numericId)) notFound();
  const estimate = await fetchEstimateById(numericId);
  if (!estimate) notFound();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link
        href="/dashboard/estimates"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to estimates
      </Link>

      {/* Action bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">{estimate.number}</h1>
          <EstimateStatusBadge status={estimate.status} />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/dashboard/estimates/${numericId}/edit`}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg border border-slate-200 bg-white hover:bg-slate-50"
          >
            <Pencil className="h-3.5 w-3.5" />
            Edit
          </Link>
          <Link
            href={`/dashboard/estimates/${numericId}/print`}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg border border-slate-200 bg-white hover:bg-slate-50"
          >
            <Printer className="h-3.5 w-3.5" />
            Print / PDF
          </Link>

          {estimate.status === "Draft" && (
            <form action={changeStatusAction}>
              <input type="hidden" name="id" value={numericId} />
              <input type="hidden" name="status" value="Sent" />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700"
              >
                <Send className="h-3.5 w-3.5" />
                Mark as Sent
              </button>
            </form>
          )}

          {(estimate.status === "Draft" || estimate.status === "Sent") && (
            <>
              <form action={convertToJobAction}>
                <input type="hidden" name="id" value={numericId} />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Won — convert to job
                </button>
              </form>
              <form action={changeStatusAction}>
                <input type="hidden" name="id" value={numericId} />
                <input type="hidden" name="status" value="Lost" />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg border border-rose-200 bg-white hover:bg-rose-50 text-rose-700"
                >
                  <XCircle className="h-3.5 w-3.5" />
                  Mark Lost
                </button>
              </form>
            </>
          )}

          <DeleteEstimateButton id={numericId} customer={estimate.customer_name} />
        </div>
      </div>

      {/* Document preview */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 sm:p-12">
        <EstimateDocument estimate={estimate} />
      </div>
    </div>
  );
}
