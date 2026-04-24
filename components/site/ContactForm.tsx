"use client";

import { useState } from "react";

const SERVICES = [
  "Junk Removal",
  "Furniture Removal",
  "Appliance Removal",
  "Home / Estate Cleanout",
  "Construction Debris",
  "Yard Waste / Storm Debris",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate request
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5 text-emerald-900">
        <div className="font-semibold">Thanks — we got your request.</div>
        <p className="mt-1 text-sm">
          A member of our Ocean County crew will reach out shortly with pricing and the next available pickup window.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Full name
          </label>
          <input
            required
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone
          </label>
          <input
            required
            type="tel"
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            placeholder="(609) 703-2115"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email
          </label>
          <input
            type="email"
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Town in Ocean County
          </label>
          <input
            required
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            placeholder="Toms River, Manahawkin, LBI…"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Service
        </label>
        <select
          required
          defaultValue=""
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        >
          <option value="" disabled>
            Select a service…
          </option>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          What needs to go?
        </label>
        <textarea
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          placeholder="e.g. Full garage cleanout, old fridge, couch, 2 mattresses…"
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="w-full rounded-lg bg-accent-500 hover:bg-accent-600 disabled:opacity-60 text-white font-semibold py-3 text-base shadow"
      >
        {loading ? "Sending…" : "Get my free quote"}
      </button>
      <p className="text-xs text-slate-500 text-center">
        By submitting, you agree to be contacted by Ocean County Junk Removal. We never share your info.
      </p>
    </form>
  );
}
