-- Estimates / invoices for Ocean County Junk Removal
-- Run this in Supabase Studio → SQL editor.

create table if not exists public.estimates (
  id                bigint generated always as identity primary key,
  status            text not null default 'Draft'
                      check (status in ('Draft','Sent','Won','Lost')),

  -- Customer info
  customer_name     text not null,
  customer_phone    text,
  customer_email    text,
  customer_address  text,

  -- Job details
  job_date          date,
  job_type          text,
  notes             text,

  -- Calculator inputs
  gas_cost          numeric(10,2) not null default 0  check (gas_cost >= 0),
  dump_fee          numeric(10,2) not null default 0  check (dump_fee >= 0),
  trailer_percent   numeric(5,2)  not null default 0
                      check (trailer_percent >= 0 and trailer_percent <= 100),
  trailer_full_rate numeric(10,2) not null default 2000
                      check (trailer_full_rate >= 0),

  -- Tax
  taxable           boolean       not null default false,
  tax_rate          numeric(5,3)  not null default 6.625,

  -- Conversion to a real job
  converted_job_id  bigint references public.jobs(id) on delete set null,

  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create index if not exists estimates_created_at_idx on public.estimates (created_at desc);
create index if not exists estimates_status_idx     on public.estimates (status);

alter table public.estimates enable row level security;

drop trigger if exists estimates_set_updated_at on public.estimates;
create trigger estimates_set_updated_at
  before update on public.estimates
  for each row execute function public.set_updated_at();
