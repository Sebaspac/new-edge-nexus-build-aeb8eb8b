-- Ensure RLS is enabled
ALTER TABLE public.ki_audit_leads ENABLE ROW LEVEL SECURITY;

-- Drop any pre-existing policies to avoid drift
DROP POLICY IF EXISTS "No public select on ki_audit_leads" ON public.ki_audit_leads;
DROP POLICY IF EXISTS "No public insert on ki_audit_leads" ON public.ki_audit_leads;
DROP POLICY IF EXISTS "No public update on ki_audit_leads" ON public.ki_audit_leads;
DROP POLICY IF EXISTS "No public delete on ki_audit_leads" ON public.ki_audit_leads;

-- Deny all access for anon/authenticated; service_role bypasses RLS
CREATE POLICY "No public select on ki_audit_leads"
  ON public.ki_audit_leads FOR SELECT
  TO anon, authenticated
  USING (false);

CREATE POLICY "No public insert on ki_audit_leads"
  ON public.ki_audit_leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (false);

CREATE POLICY "No public update on ki_audit_leads"
  ON public.ki_audit_leads FOR UPDATE
  TO anon, authenticated
  USING (false) WITH CHECK (false);

CREATE POLICY "No public delete on ki_audit_leads"
  ON public.ki_audit_leads FOR DELETE
  TO anon, authenticated
  USING (false);