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
];

const TOWNS = [
  "Toms River",
  "Manahawkin",
  "Brick",
  "Lacey",
  "Stafford",
  "Barnegat",
  "Beach Haven (LBI)",
  "Surf City (LBI)",
  "Ship Bottom (LBI)",
  "Point Pleasant",
  "Jackson",
  "Forked River",
  "Waretown",
  "Tuckerton",
  "Little Egg Harbor",
  "Lakewood",
  "Berkeley Twp",
];

const FIRST_NAMES = [
  "Michael",
  "Jennifer",
  "Robert",
  "Susan",
  "James",
  "Patricia",
  "David",
  "Linda",
  "John",
  "Karen",
  "Anthony",
  "Maria",
  "Thomas",
  "Nancy",
  "Joseph",
  "Donna",
  "Frank",
  "Lisa",
  "Ryan",
  "Kimberly",
  "Brian",
  "Amanda",
  "Kevin",
  "Jessica",
  "Matthew",
  "Michelle",
];

const LAST_NAMES = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Clark",
];

// Seeded pseudo-random so data is stable across renders.
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function getJobs(): Job[] {
  const rand = mulberry32(42);
  const pick = <T,>(arr: T[]) => arr[Math.floor(rand() * arr.length)];

  // Reference date for stable generation — today.
  const today = new Date();
  const jobs: Job[] = [];

  // Generate ~14 months of jobs
  for (let monthsAgo = 13; monthsAgo >= 0; monthsAgo--) {
    // More recent months = more jobs (growing business).
    const base = 14 - monthsAgo * 0.4;
    const count = Math.round(base + rand() * 6);
    for (let i = 0; i < count; i++) {
      const d = new Date(today.getFullYear(), today.getMonth() - monthsAgo, 1);
      const daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
      const day = Math.min(
        daysInMonth,
        Math.max(1, Math.floor(rand() * daysInMonth) + 1)
      );
      const date = new Date(d.getFullYear(), d.getMonth(), day);
      const priceBuckets = [175, 225, 275, 350, 425, 500, 625, 750, 900, 1100, 1400, 1750];
      const price = pick(priceBuckets) + Math.floor(rand() * 50);

      const isFuture = date > today;
      const status: JobStatus = isFuture
        ? "Scheduled"
        : rand() < 0.08
        ? "Invoiced"
        : "Completed";

      jobs.push({
        id: `J-${10000 + jobs.length}`,
        date: date.toISOString(),
        customer: `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`,
        type: pick(JOB_TYPES),
        location: `${pick(TOWNS)}, NJ`,
        price,
        status,
      });
    }
  }

  // Add a handful of upcoming scheduled jobs
  for (let i = 1; i <= 4; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i * 2);
    jobs.push({
      id: `J-${10000 + jobs.length}`,
      date: date.toISOString(),
      customer: `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`,
      type: pick(JOB_TYPES),
      location: `${pick(TOWNS)}, NJ`,
      price: 275 + Math.floor(rand() * 600),
      status: "Scheduled",
    });
  }

  jobs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return jobs;
}

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
      ? 100
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
