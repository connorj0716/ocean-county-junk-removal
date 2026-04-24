// Seed the Supabase `jobs` table with the same mock data the old
// in-memory generator produced. Safe to re-run; it truncates first.
//
// Prereqs: run supabase/migrations/0001_init.sql in Supabase Studio first.
// Usage:   node --env-file=.env.local scripts/seed-jobs.mjs

import { createClient } from "@supabase/supabase-js";

const JOB_TYPES = [
  "Full Home Cleanout","Furniture Removal","Appliance Removal","Garage Cleanout",
  "Construction Debris","Estate Cleanout","Yard Waste Removal","Single Item Pickup",
  "Basement Cleanout","Shed Demolition","Hot Tub Removal","Mattress Removal",
];
const TOWNS = [
  "Toms River","Manahawkin","Brick","Lacey","Stafford","Barnegat",
  "Beach Haven (LBI)","Surf City (LBI)","Ship Bottom (LBI)","Point Pleasant",
  "Jackson","Forked River","Waretown","Tuckerton","Little Egg Harbor","Lakewood","Berkeley Twp",
];
const FIRST_NAMES = [
  "Michael","Jennifer","Robert","Susan","James","Patricia","David","Linda","John","Karen",
  "Anthony","Maria","Thomas","Nancy","Joseph","Donna","Frank","Lisa","Ryan","Kimberly",
  "Brian","Amanda","Kevin","Jessica","Matthew","Michelle",
];
const LAST_NAMES = [
  "Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez",
  "Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin",
  "Lee","Perez","Thompson","White","Harris","Clark",
];

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generate() {
  const rand = mulberry32(42);
  const pick = (arr) => arr[Math.floor(rand() * arr.length)];
  const today = new Date();
  const jobs = [];
  for (let monthsAgo = 13; monthsAgo >= 0; monthsAgo--) {
    const base = 14 - monthsAgo * 0.4;
    const count = Math.round(base + rand() * 6);
    for (let i = 0; i < count; i++) {
      const d = new Date(today.getFullYear(), today.getMonth() - monthsAgo, 1);
      const daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
      const day = Math.min(daysInMonth, Math.max(1, Math.floor(rand() * daysInMonth) + 1));
      const date = new Date(d.getFullYear(), d.getMonth(), day);
      const priceBuckets = [175, 225, 275, 350, 425, 500, 625, 750, 900, 1100, 1400, 1750];
      const price = pick(priceBuckets) + Math.floor(rand() * 50);
      const isFuture = date > today;
      const status = isFuture ? "Scheduled" : rand() < 0.08 ? "Invoiced" : "Completed";
      jobs.push({
        job_date: date.toISOString(),
        customer: `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`,
        job_type: pick(JOB_TYPES),
        location: `${pick(TOWNS)}, NJ`,
        price,
        status,
      });
    }
  }
  for (let i = 1; i <= 4; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i * 2);
    jobs.push({
      job_date: date.toISOString(),
      customer: `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`,
      job_type: pick(JOB_TYPES),
      location: `${pick(TOWNS)}, NJ`,
      price: 275 + Math.floor(rand() * 600),
      status: "Scheduled",
    });
  }
  return jobs;
}

const URL_ = process.env.NEXT_PUBLIC_SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!URL_ || !KEY) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY in env");
  process.exit(1);
}

const supabase = createClient(URL_, KEY, { auth: { persistSession: false } });

const jobs = generate();
console.log(`Generated ${jobs.length} jobs. Clearing existing rows…`);

// Delete all existing rows (can't truncate via the REST API, so delete all).
const del = await supabase.from("jobs").delete().neq("id", -1);
if (del.error) {
  console.error("Clear failed:", del.error);
  process.exit(1);
}

// Insert in batches (Supabase has a payload limit)
const BATCH = 100;
for (let i = 0; i < jobs.length; i += BATCH) {
  const chunk = jobs.slice(i, i + BATCH);
  const { error } = await supabase.from("jobs").insert(chunk);
  if (error) {
    console.error(`Insert batch ${i} failed:`, error);
    process.exit(1);
  }
  console.log(`Inserted ${Math.min(i + BATCH, jobs.length)} / ${jobs.length}`);
}

const { count } = await supabase.from("jobs").select("*", { count: "exact", head: true });
console.log(`Done. jobs table row count: ${count}`);
