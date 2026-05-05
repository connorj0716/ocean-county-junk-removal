"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ClipboardList, FileText, Truck, Plus } from "lucide-react";

const NAV = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/jobs", label: "Jobs", icon: ClipboardList },
  { href: "/dashboard/estimates", label: "Estimates", icon: FileText },
];

export default function Sidebar() {
  const pathname = usePathname();

  function isActive(item: (typeof NAV)[number]) {
    if (item.exact) return pathname === item.href;
    return pathname === item.href || pathname.startsWith(item.href + "/");
  }

  return (
    <aside className="hidden lg:flex lg:w-64 shrink-0 bg-slate-950 text-slate-200 flex-col border-r border-slate-900">
      <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-900">
        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 grid place-items-center text-white font-bold">
          <Truck className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold">Ocean County</div>
          <div className="text-xs text-slate-400">Junk Removal</div>
        </div>
      </div>

      <nav className="flex-1 py-4">
        <ul className="px-3 space-y-0.5">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = isActive(item);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-slate-800 text-white"
                      : "text-slate-400 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 px-3">
          <Link
            href="/dashboard/jobs/new"
            className="flex items-center justify-center gap-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-white text-sm font-semibold px-3 py-2 transition-colors"
          >
            <Plus className="h-4 w-4" />
            New Job
          </Link>
        </div>
      </nav>

      <div className="p-4 border-t border-slate-900 text-xs text-slate-500">
        <div>v1.0.0 • Ocean County NJ</div>
      </div>
    </aside>
  );
}
