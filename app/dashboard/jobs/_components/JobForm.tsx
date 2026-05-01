"use client";

import { useActionState } from "react";
import Link from "next/link";

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

const STATUSES = ["Scheduled", "In Progress", "Completed", "Invoiced"] as const;

type Initial = {
  date?: string; // YYYY-MM-DD
  customer?: string;
  job_type?: string;
  location?: string;
  price?: number | string;
  status?: string;
  notes?: string | null;
};

type ActionState = { error?: string } | undefined;

export default function JobForm({
  action,
  initial,
  submitLabel,
}: {
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  initial?: Initial;
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(action, undefined);

  const today = new Date().toISOString().slice(0, 10);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Date</label>
          <input
            type="date"
            name="date"
            required
            defaultValue={initial?.date ?? today}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Status</label>
          <select
            name="status"
            required
            defaultValue={initial?.status ?? "Scheduled"}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            {STATUSES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Customer name</label>
          <input
            name="customer"
            required
            defaultValue={initial?.customer ?? ""}
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Location</label>
          <input
            name="location"
            required
            defaultValue={initial?.location ?? ""}
            placeholder="Toms River, NJ"
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Job type</label>
          <select
            name="job_type"
            required
            defaultValue={initial?.job_type ?? "Furniture Removal"}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            {JOB_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Price (USD)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
            <input
              name="price"
              type="number"
              min="0"
              step="0.01"
              required
              defaultValue={initial?.price ?? ""}
              placeholder="0.00"
              className="w-full rounded-lg border border-slate-300 pl-7 pr-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Notes (optional)</label>
        <textarea
          name="notes"
          rows={3}
          defaultValue={initial?.notes ?? ""}
          placeholder="Anything worth remembering — gate code, payment method, special access..."
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        />
      </div>

      {state?.error && (
        <div className="rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm px-3 py-2">
          {state.error}
        </div>
      )}

      <div className="flex items-center justify-end gap-2 pt-2">
        <Link
          href="/dashboard/jobs"
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
    </form>
  );
}
