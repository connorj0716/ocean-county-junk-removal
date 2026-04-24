-- Ocean County Junk Removal — initial schema
-- Run this in the Supabase SQL editor (or via `supabase db push` if using the CLI).

-- ============================================================
-- JOBS: completed / scheduled jobs shown in the dashboard
-- ============================================================
create table if not exists public.jobs (
  id             bigint generated always as identity primary key,
  job_date       timestamptz  not null,
  customer       text         not null,
  job_type       text         not null,
  location       text         not null,
  price          numeric(10,2) not null check (price >= 0),
  status         text         not null
                 check (status in ('Completed','Scheduled','In Progress','Invoiced')),
  notes          text,
  created_at     timestamptz  not null default now(),
  updated_at     timestamptz  not null default now()
);

create index if not exists jobs_job_date_idx on public.jobs (job_date desc);
create index if not exists jobs_status_idx   on public.jobs (status);

-- ============================================================
-- LEADS: contact-form submissions from the public website
-- ============================================================
create table if not exists public.leads (
  id             bigint generated always as identity primary key,
  name           text         not null,
  phone          text         not null,
  email          text,
  town           text,
  service        text,
  message        text,
  source         text         default 'website',
  handled        boolean      not null default false,
  created_at     timestamptz  not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- ============================================================
-- Row Level Security
-- Both tables are locked down. The Next.js server talks to
-- Supabase using the SERVICE_ROLE key, which bypasses RLS.
-- Nothing is reachable from the browser with the anon key.
-- ============================================================
alter table public.jobs  enable row level security;
alter table public.leads enable row level security;

-- updated_at trigger for jobs
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists jobs_set_updated_at on public.jobs;
create trigger jobs_set_updated_at
  before update on public.jobs
  for each row execute function public.set_updated_at();
