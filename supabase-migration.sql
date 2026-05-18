-- Run this once in your Supabase SQL editor:
-- https://supabase.com/dashboard/project/mqnpghpxmyulfjhuthfu/sql

CREATE TABLE IF NOT EXISTS public.site_content (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  updated_by TEXT
);

ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read" ON public.site_content
  FOR SELECT USING (true);

CREATE POLICY "Public write" ON public.site_content
  FOR ALL USING (true);
