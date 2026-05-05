// Pure functions usable from both client (form preview) and server (validation, render).

export type EstimateMathInput = {
  gas_cost: number;
  dump_fee: number;
  trailer_percent: number; // 0-100
  trailer_full_rate: number; // dollars for a full trailer
  taxable: boolean;
  tax_rate: number; // percent, e.g. 6.625
};

export type EstimateMathOutput = {
  trailer_cost: number;
  subtotal: number;
  tax_amount: number;
  total: number;
};

export function computeEstimate(i: EstimateMathInput): EstimateMathOutput {
  const trailer_cost = (clamp(i.trailer_percent, 0, 100) / 100) * Math.max(0, i.trailer_full_rate);
  const subtotal = Math.max(0, i.gas_cost) + Math.max(0, i.dump_fee) + trailer_cost;
  const tax_amount = i.taxable ? subtotal * (Math.max(0, i.tax_rate) / 100) : 0;
  return {
    trailer_cost: round2(trailer_cost),
    subtotal: round2(subtotal),
    tax_amount: round2(tax_amount),
    total: round2(subtotal + tax_amount),
  };
}

export function clamp(v: number, min: number, max: number): number {
  if (!Number.isFinite(v)) return min;
  return Math.max(min, Math.min(max, v));
}

export function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function toNumber(v: FormDataEntryValue | string | number | undefined | null): number {
  if (v === null || v === undefined) return 0;
  if (typeof v === "number") return Number.isFinite(v) ? v : 0;
  const x = parseFloat(String(v));
  return Number.isFinite(x) ? x : 0;
}
