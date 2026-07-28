-- Fix security issue: Set proper search_path for trigger function
CREATE OR REPLACE FUNCTION public.set_user_id()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF (NEW.user_id IS NULL) THEN
    NEW.user_id := auth.uid();
  END IF;
  RETURN NEW;
END;
$$;