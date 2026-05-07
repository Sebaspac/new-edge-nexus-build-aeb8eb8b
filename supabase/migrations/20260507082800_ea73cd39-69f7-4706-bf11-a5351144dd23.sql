CREATE TABLE public.contact_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  position text,
  message text NOT NULL,
  ip text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No public select on contact_leads" ON public.contact_leads FOR SELECT TO anon, authenticated USING (false);
CREATE POLICY "No public insert on contact_leads" ON public.contact_leads FOR INSERT TO anon, authenticated WITH CHECK (false);
CREATE POLICY "No public update on contact_leads" ON public.contact_leads FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);
CREATE POLICY "No public delete on contact_leads" ON public.contact_leads FOR DELETE TO anon, authenticated USING (false);

CREATE INDEX idx_contact_leads_created_at ON public.contact_leads (created_at DESC);