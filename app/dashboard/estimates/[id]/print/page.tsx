import { notFound } from "next/navigation";
import { fetchEstimateById } from "@/lib/estimates";
import EstimateDocument from "../../_components/EstimateDocument";
import PrintActions from "../../_components/PrintActions";

export const dynamic = "force-dynamic";

export default async function PrintEstimatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = parseInt(id, 10);
  if (!Number.isFinite(numericId)) notFound();
  const estimate = await fetchEstimateById(numericId);
  if (!estimate) notFound();

  const variant = estimate.status === "Won" ? "invoice" : "estimate";

  return (
    <div className="min-h-screen bg-slate-100 print:bg-white">
      <PrintActions backHref={`/dashboard/estimates/${numericId}`} />

      <div className="max-w-4xl mx-auto px-4 py-8 print:px-0 print:py-0">
        <div className="bg-white shadow-lg print:shadow-none rounded-lg print:rounded-none p-10 sm:p-14 print:p-0">
          <EstimateDocument estimate={estimate} variant={variant} />
        </div>
      </div>
    </div>
  );
}
