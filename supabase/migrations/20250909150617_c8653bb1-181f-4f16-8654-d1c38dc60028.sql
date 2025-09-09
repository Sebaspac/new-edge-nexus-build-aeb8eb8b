-- 1) Konsistenz & Defaults
-- (rename nur, wenn du "Customers" statt "Costumers" willst)
alter table public."Costumers" rename to customers;

alter table public.customers 
  alter column created_at set default timezone('utc'::text, now());

-- 2) user_id ergänzen (Referenz auf auth.users)
alter table public.customers
  add column if not exists user_id uuid;

-- 3) Trigger: setzt user_id automatisch auf auth.uid()
create or replace function public.set_user_id()
returns trigger
language plpgsql
security definer
as $$
begin
  if (new.user_id is null) then
    new.user_id := auth.uid();
  end if;
  return new;
end;
$$;

drop trigger if exists trg_set_user_id on public.customers;
create trigger trg_set_user_id
before insert on public.customers
for each row
execute function public.set_user_id();

-- 4) Index
create index if not exists customers_user_id_idx on public.customers(user_id);

-- 5) RLS aktivieren
alter table public.customers enable row level security;

-- 6) Policies (least privilege)
drop policy if exists customers_select_own on public.customers;
create policy customers_select_own
on public.customers
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists customers_insert_own on public.customers;
create policy customers_insert_own
on public.customers
for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists customers_update_own on public.customers;
create policy customers_update_own
on public.customers
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists customers_delete_own on public.customers;
create policy customers_delete_own
on public.customers
for delete
to authenticated
using (user_id = auth.uid());

-- 7) Rechte härten
revoke all on table public.customers from anon;
grant select, insert, update, delete on table public.customers to authenticated;