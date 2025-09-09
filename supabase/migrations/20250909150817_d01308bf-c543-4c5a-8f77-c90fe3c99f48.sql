-- Create the missing trigger to auto-set user_id
drop trigger if exists trg_set_user_id on public.customers;
create trigger trg_set_user_id
before insert on public.customers
for each row
execute function public.set_user_id();