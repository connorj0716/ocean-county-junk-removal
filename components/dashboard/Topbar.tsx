"use client";

import { useRouter, usePathname } from "next/navigation";
import { Search, Bell, LogOut } from "lucide-react";

function crumbFromPath(pathname: string): string {
  if (pathname === "/dashboard") return "Overview";
  if (pathname === "/dashboard/jobs") return "Jobs";
  if (pathname === "/dashboard/jobs/new") return "Jobs / New";
  if (/^\/dashboard\/jobs\/[^/]+\/edit$/.test(pathname)) return "Jobs / Edit";
  if (pathname === "/dashboard/estimates") return "Estimates";
  if (pathname === "/dashboard/estimates/new") return "Estimates / New";
  if (/^\/dashboard\/estimates\/[^/]+\/edit$/.test(pathname)) return "Estimates / Edit";
  if (/^\/dashboard\/estimates\/[^/]+\/print$/.test(pathname)) return "Estimates / Print";
  if (/^\/dashboard\/estimates\/[^/]+$/.test(pathname)) return "Estimates";
  return "Overview";
}

export default function Topbar({ user }: { user: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const crumb = crumbFromPath(pathname);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-3 text-sm text-slate-500">
        <span className="font-medium text-slate-700">Dashboard</span>
        <span>/</span>
        <span>{crumb}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-500 w-72">
          <Search className="h-4 w-4" />
          <input
            placeholder="Search jobs, customers…"
            className="bg-transparent outline-none w-full placeholder:text-slate-400 text-slate-700"
          />
        </div>
        <button className="h-9 w-9 grid place-items-center rounded-lg hover:bg-slate-100 text-slate-500">
          <Bell className="h-4 w-4" />
        </button>
        <div className="h-9 flex items-center gap-2 pl-2 pr-1 rounded-lg border border-slate-200">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center text-white text-xs font-bold">
            {user.slice(0, 1).toUpperCase()}
          </div>
          <span className="text-sm font-medium">{user}</span>
          <button
            onClick={logout}
            className="ml-1 h-7 w-7 grid place-items-center rounded-md hover:bg-slate-100 text-slate-500"
            title="Sign out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
