export default function EstimateStatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Draft: "bg-slate-100 text-slate-700 border-slate-200",
    Sent: "bg-blue-50 text-blue-700 border-blue-200",
    Won: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Lost: "bg-rose-50 text-rose-700 border-rose-200",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-medium ${
        map[status] ?? "bg-slate-50 text-slate-700 border-slate-200"
      }`}
    >
      {status}
    </span>
  );
}
