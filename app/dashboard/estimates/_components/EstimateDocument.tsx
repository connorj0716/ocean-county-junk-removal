import { Truck } from "lucide-react";
import type { Estimate } from "@/lib/estimates";
import { computeEstimate } from "@/lib/estimateMath";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

const fmtDate = (d: string | null | undefined) => {
  if (!d) return "—";
  const dt = /^\d{4}-\d{2}-\d{2}$/.test(d) ? new Date(`${d}T12:00:00`) : new Date(d);
  return dt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function EstimateDocument({
  estimate,
  variant = "estimate",
}: {
  estimate: Estimate;
  variant?: "estimate" | "invoice";
}) {
  const totals = computeEstimate({
    gas_cost: estimate.gas_cost,
    dump_fee: estimate.dump_fee,
    trailer_percent: estimate.trailer_percent,
    trailer_full_rate: estimate.trailer_full_rate,
    taxable: estimate.taxable,
    tax_rate: estimate.tax_rate,
  });

  return (
    <div className="bg-white text-slate-900">
      {/* Letterhead */}
      <header className="flex items-start justify-between gap-6 pb-6 border-b-2 border-slate-900">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-brand-500 to-brand-800 grid place-items-center text-white">
            <Truck className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <div className="text-xl font-bold tracking-tight">Ocean County</div>
            <div className="text-sm text-slate-600">Junk Removal</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-extrabold tracking-tight uppercase">
            {variant === "invoice" ? "Invoice" : "Estimate"}
          </div>
          <div className="mt-1 text-sm text-slate-600">{estimate.number}</div>
          <div className="text-sm text-slate-600">
            Date: {fmtDate(estimate.created_at)}
          </div>
        </div>
      </header>

      {/* Parties */}
      <section className="grid grid-cols-2 gap-8 mt-6">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
            From
          </div>
          <div className="mt-2 text-sm leading-relaxed">
            <div className="font-semibold">Ocean County Junk Removal</div>
            <div>Manahawkin, NJ 08050</div>
            <div>(609) 703-2115</div>
            <div>info@oceancountyjunkremoval.com</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
            Bill To
          </div>
          <div className="mt-2 text-sm leading-relaxed">
            <div className="font-semibold">{estimate.customer_name}</div>
            {estimate.customer_address && <div>{estimate.customer_address}</div>}
            {estimate.customer_phone && <div>{estimate.customer_phone}</div>}
            {estimate.customer_email && <div>{estimate.customer_email}</div>}
          </div>
        </div>
      </section>

      {/* Job summary */}
      <section className="mt-6 grid grid-cols-2 gap-8 bg-slate-50 border border-slate-200 rounded-lg p-4">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
            Service
          </div>
          <div className="mt-1 text-sm font-medium">{estimate.job_type ?? "—"}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
            Scheduled date
          </div>
          <div className="mt-1 text-sm font-medium">{fmtDate(estimate.job_date)}</div>
        </div>
      </section>

      {/* Line items */}
      <section className="mt-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-slate-500 border-b border-slate-300">
              <th className="py-2.5 font-semibold">Description</th>
              <th className="py-2.5 font-semibold text-right">Detail</th>
              <th className="py-2.5 font-semibold text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="py-3">Gas / fuel surcharge</td>
              <td className="py-3 text-right text-slate-500">—</td>
              <td className="py-3 text-right tabular-nums">{fmt(estimate.gas_cost)}</td>
            </tr>
            <tr>
              <td className="py-3">Disposal / dump fee</td>
              <td className="py-3 text-right text-slate-500">—</td>
              <td className="py-3 text-right tabular-nums">{fmt(estimate.dump_fee)}</td>
            </tr>
            <tr>
              <td className="py-3">
                Trailer space &amp; labor
                <div className="text-xs text-slate-500">
                  {estimate.trailer_percent}% of full trailer ({fmt(estimate.trailer_full_rate)})
                </div>
              </td>
              <td className="py-3 text-right text-slate-500">{estimate.trailer_percent}%</td>
              <td className="py-3 text-right tabular-nums">{fmt(totals.trailer_cost)}</td>
            </tr>
          </tbody>
          <tfoot className="text-sm">
            <tr>
              <td colSpan={2} className="pt-4 text-right text-slate-600">
                Subtotal
              </td>
              <td className="pt-4 text-right tabular-nums font-medium">
                {fmt(totals.subtotal)}
              </td>
            </tr>
            {estimate.taxable && (
              <tr>
                <td colSpan={2} className="pt-1 text-right text-slate-600">
                  NJ Sales Tax ({estimate.tax_rate.toFixed(3)}%)
                </td>
                <td className="pt-1 text-right tabular-nums">
                  {fmt(totals.tax_amount)}
                </td>
              </tr>
            )}
            <tr>
              <td colSpan={2} className="pt-3 text-right border-t-2 border-slate-900">
                <span className="text-base font-bold">Total</span>
              </td>
              <td className="pt-3 text-right border-t-2 border-slate-900">
                <span className="text-2xl font-extrabold tabular-nums">
                  {fmt(totals.total)}
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
      </section>

      {/* Notes */}
      {estimate.notes && (
        <section className="mt-8">
          <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
            Notes
          </div>
          <p className="mt-1.5 text-sm whitespace-pre-line text-slate-700">
            {estimate.notes}
          </p>
        </section>
      )}

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
        <p>
          {variant === "invoice"
            ? "Payment due upon completion of services. We accept cash, check, Venmo, and Zelle."
            : "This estimate is valid for 14 days. Final invoice may vary if scope changes on-site."}{" "}
          Ocean County Junk Removal is fully licensed and insured in the State of New Jersey.
        </p>
        <p className="mt-2">
          Thank you for choosing Ocean County Junk Removal — locally owned and operated, serving
          Toms River, Manahawkin, Brick, Lacey, Stafford, Barnegat, LBI, and all of Ocean County.
        </p>
      </footer>
    </div>
  );
}
