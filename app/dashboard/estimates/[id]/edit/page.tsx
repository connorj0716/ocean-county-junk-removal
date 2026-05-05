import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import EstimateForm from "../../_components/EstimateForm";
import { updateEstimateAction } from "../../_actions";
import { fetchEstimateById } from "@/lib/estimates";

export const dynamic = "force-dynamic";

export default async function EditEstimatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = parseInt(id, 10);
  if (!Number.isFinite(numericId)) notFound();

  const estimate = await fetchEstimateById(numericId);
  if (!estimate) notFound();

  const boundAction = updateEstimateAction.bind(null, numericId);

  return (
    <div className="max-w-6xl mx-auto">
      <Link
        href={`/dashboard/estimates/${numericId}`}
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 mb-4"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to estimate
      </Link>
      <h1 className="text-2xl font-semibold tracking-tight">Edit {estimate.number}</h1>

      <div className="mt-6">
        <EstimateForm
          action={boundAction}
          submitLabel="Save changes"
          initial={{
            status: estimate.status,
            customer_name: estimate.customer_name,
            customer_phone: estimate.customer_phone,
            customer_email: estimate.customer_email,
            customer_address: estimate.customer_address,
            job_date: estimate.job_date,
            job_type: estimate.job_type,
            notes: estimate.notes,
            gas_cost: estimate.gas_cost,
            dump_fee: estimate.dump_fee,
            trailer_percent: estimate.trailer_percent,
            trailer_full_rate: estimate.trailer_full_rate,
            taxable: estimate.taxable,
            tax_rate: estimate.tax_rate,
          }}
        />
      </div>
    </div>
  );
}
