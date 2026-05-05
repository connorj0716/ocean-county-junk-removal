"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { computeEstimate } from "@/lib/estimateMath";

const JOB_TYPES = [
  "Full Home Cleanout",
  "Furniture Removal",
  "Appliance Removal",
  "Garage Cleanout",
  "Construction Debris",
  "Estate Cleanout",
  "Yard Waste Removal",
  "Single Item Pickup",
  "Basement Cleanout",
  "Shed Demolition",
  "Hot Tub Removal",
  "Mattress Removal",
  "Other",
];

const STATUSES = ["Draft", "Sent", "Won", "Lost"] as const;

export type EstimateFormInitial = {
  status?: string;
  customer_name?: string;
  customer_phone?: string | null;
  customer_email?: string | null;
  customer_address?: string | null;
  job_date?: string | null;
  job_type?: string | null;
  notes?: string | null;
  gas_cost?: number;
  dump_fee?: number;
  trailer_percent?: number;
  trailer_full_rate?: number;
  taxable?: boolean;
  tax_rate?: number;
};

type ActionState = { error?: string } | undefined;

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

export default function EstimateForm({
  action,
  initial,
  submitLabel,
}: {
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  initial?: EstimateFormInitial;
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(action, undefined);

  // Live calculator state
  const [gas, setGas] = useState<string>(String(initial?.gas_cost ?? ""));
  const [dump, setDump] = useState<string>(String(initial?.dump_fee ?? ""));
  const [percent, setPercent] = useState<number>(initial?.trailer_percent ?? 0);
  const [fullRate, setFullRate] = useState<string>(String(initial?.trailer_full_rate ?? 2000));
  const [taxable, setTaxable] = useState<boolean>(initial?.taxable ?? false);
  const [taxRate, setTaxRate] = useState<string>(String(initial?.tax_rate ?? 6.625));

  const num = (s: string) => {
    const x = parseFloat(s);
    return Number.isFinite(x) ? x : 0;
  };

  const totals = computeEstimate({
    gas_cost: num(gas),
    dump_fee: num(dump),
    trailer_percent: percent,
    trailer_full_rate: num(fullRate),
    taxable,
    tax_rate: num(taxRate),
  });

  return (
    <form action={formAction} className="grid lg:grid-cols-3 gap-6">
      {/* Left: form fields */}
      <div className="lg:col-span-2 space-y-6">
        {/* Customer */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Customer</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name" required>
              <input
                name="customer_name"
                required
                defaultValue={initial?.customer_name ?? ""}
                placeholder="Jane Smith"
                className={inputCls}
              />
            </Field>
            <Field label="Phone">
              <input
                name="customer_phone"
                type="tel"
                defaultValue={initial?.customer_phone ?? ""}
                placeholder="(609) 555-0123"
                className={inputCls}
              />
            </Field>
            <Field label="Email">
              <input
                name="customer_email"
                type="email"
                defaultValue={initial?.customer_email ?? ""}
                placeholder="jane@email.com"
                className={inputCls}
              />
            </Field>
            <Field label="Address">
              <input
                name="customer_address"
                defaultValue={initial?.customer_address ?? ""}
                placeholder="123 Main St, Toms River, NJ"
                className={inputCls}
              />
            </Field>
          </div>
        </section>

        {/* Job */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Job</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Estimated date">
              <input
                type="date"
                name="job_date"
                defaultValue={initial?.job_date ?? ""}
                className={inputCls}
              />
            </Field>
            <Field label="Status">
              <select
                name="status"
                defaultValue={initial?.status ?? "Draft"}
                className={inputCls}
              >
                {STATUSES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
            <Field label="Job type" className="sm:col-span-2">
              <select
                name="job_type"
                defaultValue={initial?.job_type ?? "Furniture Removal"}
                className={inputCls}
              >
                {JOB_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
            <Field label="Notes" className="sm:col-span-2">
              <textarea
                name="notes"
                rows={3}
                defaultValue={initial?.notes ?? ""}
                placeholder="Anything we should remember? Access notes, payment terms, special items…"
                className={inputCls}
              />
            </Field>
          </div>
        </section>

        {/* Calculator */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-base font-semibold text-slate-900">Calculator</h2>
          <p className="text-sm text-slate-500 mb-4">
            Total = Gas + Dump Fee + (Trailer % × Full Trailer Rate) + Tax (if applicable).
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Gas / fuel cost (your estimate)">
              <CurrencyInput
                name="gas_cost"
                value={gas}
                onChange={setGas}
                placeholder="40.00"
              />
            </Field>
            <Field label="Junk dump fee">
              <CurrencyInput
                name="dump_fee"
                value={dump}
                onChange={setDump}
                placeholder="85.00"
              />
            </Field>
          </div>

          <div className="mt-5">
            <div className="flex items-end justify-between gap-4">
              <label className="block text-sm font-medium text-slate-700">
                Trailer space used
                <span className="ml-2 text-slate-500 text-xs">(0% – 100%)</span>
              </label>
              <div className="text-2xl font-semibold tabular-nums">{percent}%</div>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={percent}
              onChange={(e) => setPercent(parseInt(e.target.value, 10) || 0)}
              className="w-full mt-2 accent-brand-500"
            />
            <input type="hidden" name="trailer_percent" value={percent} />
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <Field label="Or enter percent">
                <div className="relative">
                  <input
                    type="number"
                    min={0}
                    max={100}
                    step={1}
                    value={percent}
                    onChange={(e) =>
                      setPercent(Math.max(0, Math.min(100, parseInt(e.target.value, 10) || 0)))
                    }
                    className={inputCls + " pr-7"}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                    %
                  </span>
                </div>
              </Field>
              <Field label="Full trailer rate">
                <CurrencyInput
                  name="trailer_full_rate"
                  value={fullRate}
                  onChange={setFullRate}
                  placeholder="2000.00"
                />
              </Field>
            </div>
          </div>

          <div className="mt-5 border-t border-slate-100 pt-5">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="taxable"
                checked={taxable}
                onChange={(e) => setTaxable(e.target.checked)}
                className="h-4 w-4 accent-brand-500"
              />
              Apply NJ sales tax
            </label>
            {taxable && (
              <div className="mt-3 max-w-xs">
                <Field label="Tax rate (%)">
                  <input
                    type="number"
                    name="tax_rate"
                    min={0}
                    max={20}
                    step={0.001}
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    className={inputCls}
                  />
                </Field>
              </div>
            )}
            {!taxable && <input type="hidden" name="tax_rate" value={taxRate} />}
          </div>
        </section>

        {state?.error && (
          <div className="rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm px-3 py-2">
            {state.error}
          </div>
        )}

        <div className="flex items-center justify-end gap-2">
          <Link
            href="/dashboard/estimates"
            className="px-4 py-2.5 text-sm font-medium rounded-lg border border-slate-200 bg-white hover:bg-slate-50"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={pending}
            className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-brand-500 hover:bg-brand-400 text-white disabled:opacity-60 shadow"
          >
            {pending ? "Saving…" : submitLabel}
          </button>
        </div>
      </div>

      {/* Right: live preview */}
      <aside className="lg:col-span-1">
        <div className="lg:sticky lg:top-6 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="text-sm font-medium text-slate-500">Live preview</div>
          <div className="mt-1 text-lg font-semibold text-slate-900">Estimate total</div>

          <dl className="mt-4 space-y-2.5 text-sm">
            <Row label="Gas / fuel" value={fmt(num(gas))} />
            <Row label="Dump fee" value={fmt(num(dump))} />
            <Row
              label={
                <span>
                  Trailer{" "}
                  <span className="text-slate-400">
                    ({percent}% of {fmt(num(fullRate))})
                  </span>
                </span>
              }
              value={fmt(totals.trailer_cost)}
            />
            <div className="border-t border-slate-100 my-2" />
            <Row label="Subtotal" value={fmt(totals.subtotal)} bold />
            {taxable && (
              <Row
                label={`NJ Sales Tax (${num(taxRate).toFixed(3)}%)`}
                value={fmt(totals.tax_amount)}
              />
            )}
            <div className="border-t border-slate-200 my-2" />
            <div className="flex items-baseline justify-between">
              <span className="text-base font-semibold text-slate-900">Total</span>
              <span className="text-2xl font-bold text-slate-900 tabular-nums">
                {fmt(totals.total)}
              </span>
            </div>
          </dl>

          <p className="mt-5 text-xs text-slate-500">
            Updates live as you change inputs. Save the estimate to lock in this snapshot.
          </p>
        </div>
      </aside>
    </form>
  );
}

const inputCls =
  "w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500";

function Field({
  label,
  children,
  required,
  className,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function CurrencyInput({
  name,
  value,
  onChange,
  placeholder,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
      <input
        name={name}
        type="number"
        min={0}
        step={0.01}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputCls + " pl-7"}
      />
    </div>
  );
}

function Row({
  label,
  value,
  bold,
}: {
  label: React.ReactNode;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className={bold ? "text-slate-900 font-medium" : "text-slate-600"}>{label}</span>
      <span className={`tabular-nums ${bold ? "text-slate-900 font-semibold" : "text-slate-900"}`}>
        {value}
      </span>
    </div>
  );
}
