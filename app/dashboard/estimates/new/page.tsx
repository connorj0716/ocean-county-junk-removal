import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import EstimateForm from "../_components/EstimateForm";
import { createEstimateAction } from "../_actions";

export const dynamic = "force-dynamic";

export default function NewEstimatePage() {
  return (
    <div className="max-w-6xl mx-auto">
      <Link
        href="/dashboard/estimates"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 mb-4"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to estimates
      </Link>
      <h1 className="text-2xl font-semibold tracking-tight">New estimate</h1>
      <p className="text-sm text-slate-500 mt-1">
        Fill in the customer info and the calculator. Total updates live on the right.
      </p>

      <div className="mt-6">
        <EstimateForm action={createEstimateAction} submitLabel="Create estimate" />
      </div>
    </div>
  );
}
