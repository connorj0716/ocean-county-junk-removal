import Link from "next/link";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Receipt,
  BarChart3,
  Settings,
  Truck,
} from "lucide-react";

const NAV = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard, active: true },
  { href: "/dashboard", label: "Jobs", icon: ClipboardList },
  { href: "/dashboard", label: "Customers", icon: Users },
  { href: "/dashboard", label: "Invoices", icon: Receipt },
  { href: "/dashboard", label: "Reports", icon: BarChart3 },
  { href: "/dashboard", label: "Settings", icon: Settings },
];

export default function Sidebar() {
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
          {NAV.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={i}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    item.active
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
      </nav>

      <div className="p-4 border-t border-slate-900 text-xs text-slate-500">
        <div>v1.0.0 • Ocean County NJ</div>
      </div>
    </aside>
  );
}
