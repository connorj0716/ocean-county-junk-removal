export type JobStatus = "Completed" | "Scheduled" | "In Progress" | "Invoiced";

export type Job = {
  id: string;
  date: string; // ISO date string
  customer: string;
  type: string;
  location: string;
  price: number;
  status: JobStatus;
};

export type MonthlyRevenue = { month: string; revenue: number; jobs: number };

export function getMonthlyRevenue(jobs: Job[]): MonthlyRevenue[] {
  const map = new Map<string, { revenue: number; jobs: number; date: Date }>();
  for (const j of jobs) {
    if (j.status === "Scheduled") continue;
    const d = new Date(j.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const entry = map.get(key) ?? {
      revenue: 0,
      jobs: 0,
      date: new Date(d.getFullYear(), d.getMonth(), 1),
    };
    entry.revenue += j.price;
    entry.jobs += 1;
    map.set(key, entry);
  }
  const arr = Array.from(map.entries())
    .map(([, v]) => ({
      month: v.date.toLocaleString("en-US", { month: "short", year: "2-digit" }),
      revenue: v.revenue,
      jobs: v.jobs,
      _d: v.date,
    }))
    .sort((a, b) => a._d.getTime() - b._d.getTime())
    .map(({ _d, ...rest }) => rest);
  return arr;
}

export function getStats(jobs: Job[]) {
  const completedJobs = jobs.filter(
    (j) => j.status === "Completed" || j.status === "Invoiced"
  );
  const totalJobs = completedJobs.length;
  const totalRevenue = completedJobs.reduce((sum, j) => sum + j.price, 0);
  const avgJobValue = totalJobs > 0 ? totalRevenue / totalJobs : 0;

  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59);
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - 6);
  startOfWeek.setHours(0, 0, 0, 0);

  const thisMonthRevenue = completedJobs
    .filter((j) => new Date(j.date) >= startOfMonth)
    .reduce((s, j) => s + j.price, 0);
  const lastMonthRevenue = completedJobs
    .filter((j) => {
      const d = new Date(j.date);
      return d >= startOfLastMonth && d <= endOfLastMonth;
    })
    .reduce((s, j) => s + j.price, 0);

  const jobsThisWeek = completedJobs.filter(
    (j) => new Date(j.date) >= startOfWeek
  ).length;

  const monthly = getMonthlyRevenue(jobs);
  const bestMonth = monthly.reduce(
    (best, m) => (m.revenue > best.revenue ? m : best),
    { month: "—", revenue: 0, jobs: 0 }
  );

  const momChange =
    lastMonthRevenue === 0
      ? thisMonthRevenue > 0
        ? 100
        : 0
      : ((thisMonthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100;

  return {
    totalJobs,
    totalRevenue,
    avgJobValue,
    thisMonthRevenue,
    lastMonthRevenue,
    momChange,
    jobsThisWeek,
    bestMonth,
    monthly,
  };
}

export function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function formatDate(d: string): string {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
