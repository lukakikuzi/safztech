-- SAFZTECH leads: every Contact Us, Free Audit and Referral submission.
-- Run this once in Supabase: SQL Editor -> New query -> paste -> Run.

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),

  type        text not null check (type in ('contact', 'free_audit', 'referral')),
  name        text not null check (char_length(name) between 1 and 160),
  email       text not null check (char_length(email) between 3 and 254),
  phone       text check (char_length(phone) <= 40),
  website     text check (char_length(website) <= 500),
  service     text check (char_length(service) <= 200),
  message     text check (char_length(message) <= 5000),

  -- Free audit only: the PageSpeed result the visitor saw (scores, metrics, top issues).
  audit       jsonb,

  -- Admin panel
  status      text not null default 'new' check (status in ('new', 'contacted', 'won', 'lost')),
  notes       text check (char_length(notes) <= 5000)
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_type_idx on public.leads (type);
create index if not exists leads_status_idx on public.leads (status);

-- Nobody can touch this table from the browser. Only the website's server
-- (using the service role key) reads and writes it, so no policies are added.
alter table public.leads enable row level security;
revoke all on public.leads from anon, authenticated;
