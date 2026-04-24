import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function StatCard({
  label,
  value,
  sub,
  trend,
  icon,
}: {
  label: string;
  value: string;
  sub?: string;
  trend?: number;
  icon?: React.ReactNode;
}) {
  const positive = (trend ?? 0) >= 0;
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-medium text-slate-500">{label}</div>
        {icon && (
          <div className="h-8 w-8 rounded-lg bg-brand-50 text-brand-600 grid place-items-center">
            {icon}
          </div>
        )}
      </div>
      <div className="text-2xl font-semibold text-slate-900">{value}</div>
      <div className="mt-2 flex items-center gap-2 text-xs">
        {typeof trend === "number" && (
          <span
            className={`inline-flex items-center gap-0.5 font-medium px-1.5 py-0.5 rounded ${
              positive
                ? "text-emerald-700 bg-emerald-50"
                : "text-red-700 bg-red-50"
            }`}
          >
            {positive ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}
            {Math.abs(trend).toFixed(1)}%
          </span>
        )}
        {sub && <span className="text-slate-500">{sub}</span>}
      </div>
    </div>
  );
}
