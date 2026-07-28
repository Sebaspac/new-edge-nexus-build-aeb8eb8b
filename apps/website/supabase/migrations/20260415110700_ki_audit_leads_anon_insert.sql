-- Allow anonymous users to insert leads (public form)
CREATE POLICY "anon_insert_ki_audit_leads"
  ON public.ki_audit_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
