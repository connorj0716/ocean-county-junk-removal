import Link from "next/link";
import {
  DollarSign,
  ClipboardList,
  TrendingUp,
  Calendar,
  Award,
  Truck,
  Plus,
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import JobsBarChart from "@/components/dashboard/JobsBarChart";
import { getStats, formatCurrency, formatDate } from "@/lib/data";
import { fetchJobs } from "@/lib/jobs";

export const dynamic = "force-dynamic";

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Scheduled: "bg-amber-50 text-amber-700 border-amber-200",
    "In Progress": "bg-blue-50 text-blue-700 border-blue-200",
    Invoiced: "bg-violet-50 text-violet-700 border-violet-200",
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

function ChartEmpty() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-sm text-slate-500 py-10">
      <div className="font-medium text-slate-700">No data yet</div>
      <div className="mt-1">Add your first job to start tracking trends.</div>
    </div>
  );
}

export default async function DashboardPage() {
  const jobs = await fetchJobs();
  const stats = getStats(jobs);
  const recent = jobs.slice(0, 12);
  const hasData = stats.monthly.length > 0;

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
          <p className="text-sm text-slate-500">
            Business performance across Ocean County, NJ.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/jobs"
            className="px-3.5 py-2 text-sm font-medium rounded-lg border border-slate-200 bg-white hover:bg-slate-50"
          >
            View all jobs
          </Link>
          <Link
            href="/dashboard/jobs/new"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800"
          >
            <Plus className="h-4 w-4" />
            New Job
          </Link>
        </div>
      </div>

      {/* Primary KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          label="Total Revenue"
          value={formatCurrency(stats.totalRevenue)}
          sub="All-time"
          icon={<DollarSign className="h-4 w-4" />}
        />
        <StatCard
          label="Jobs Completed"
          value={stats.totalJobs.toLocaleString()}
          sub="All-time"
          icon={<ClipboardList className="h-4 w-4" />}
        />
        <StatCard
          label="Revenue This Month"
          value={formatCurrency(stats.thisMonthRevenue)}
          sub={
            stats.lastMonthRevenue > 0
              ? `vs ${formatCurrency(stats.lastMonthRevenue)} last month`
              : "No prior month yet"
          }
          trend={stats.lastMonthRevenue > 0 ? stats.momChange : undefined}
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <StatCard
          label="Avg Job Value"
          value={formatCurrency(stats.avgJobValue)}
          sub="Per completed job"
          icon={<Truck className="h-4 w-4" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-sm font-medium text-slate-500">
                Revenue over time
              </div>
              <div className="text-lg font-semibold">Monthly revenue</div>
            </div>
            <div className="text-xs text-slate-500">Last 14 months</div>
          </div>
          {hasData ? <RevenueChart data={stats.monthly} /> : <ChartEmpty />}
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="mb-2">
            <div className="text-sm font-medium text-slate-500">
              Jobs per month
            </div>
            <div className="text-lg font-semibold">Volume</div>
          </div>
          {hasData ? <JobsBarChart data={stats.monthly} /> : <ChartEmpty />}
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          label="Jobs This Week"
          value={stats.jobsThisWeek.toString()}
          sub="Last 7 days"
          icon={<Calendar className="h-4 w-4" />}
        />
        <StatCard
          label="Best Month"
          value={stats.bestMonth.revenue > 0 ? stats.bestMonth.month : "—"}
          sub={
            stats.bestMonth.revenue > 0
              ? `${formatCurrency(stats.bestMonth.revenue)} in revenue`
              : "Awaiting first month of data"
          }
          icon={<Award className="h-4 w-4" />}
        />
        <StatCard
          label="Scheduled Jobs"
          value={jobs.filter((j) => j.status === "Scheduled").length.toString()}
          sub="Upcoming"
          icon={<ClipboardList className="h-4 w-4" />}
        />
      </div>

      {/* Recent jobs table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <div>
            <div className="text-lg font-semibold">Recent jobs</div>
            <div className="text-sm text-slate-500">
              Latest pickups across Ocean County, NJ.
            </div>
          </div>
          <Link
            href="/dashboard/jobs"
            className="text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-500 bg-slate-50">
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Job Type</th>
                <th className="px-5 py-3 font-medium">Location</th>
                <th className="px-5 py-3 font-medium text-right">Price</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recent.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center">
                    <div className="text-slate-700 font-medium">No jobs yet</div>
                    <div className="text-sm text-slate-500 mt-1">
                      Add your first job and the dashboard fills in automatically.
                    </div>
                    <Link
                      href="/dashboard/jobs/new"
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-brand-500 hover:bg-brand-400 text-white shadow"
                    >
                      <Plus className="h-4 w-4" />
                      Add your first job
                    </Link>
                  </td>
                </tr>
              )}
              {recent.map((j) => (
                <tr key={j.id} className="hover:bg-slate-50">
                  <td className="px-5 py-3 text-slate-600 whitespace-nowrap">
                    {formatDate(j.date)}
                  </td>
                  <td className="px-5 py-3 font-medium text-slate-900">
                    {j.customer}
                  </td>
                  <td className="px-5 py-3 text-slate-600">{j.type}</td>
                  <td className="px-5 py-3 text-slate-600">{j.location}</td>
                  <td className="px-5 py-3 text-right font-medium">
                    {formatCurrency(j.price)}
                  </td>
                  <td className="px-5 py-3">
                    <StatusBadge status={j.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
