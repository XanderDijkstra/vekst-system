-- ============================================
-- Braindumps table for content idea capture
-- Run this in your new Supabase project's SQL Editor
-- ============================================

CREATE TABLE public.braindumps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL DEFAULT 'Nieuw idee',
  content TEXT NOT NULL DEFAULT '',
  tags TEXT[] NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'new',
  -- status values: 'new' (unprocessed), 'processed' (turned into an article), 'archived' (discarded)
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Auto-update updated_at on row updates
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER braindumps_touch_updated_at
  BEFORE UPDATE ON public.braindumps
  FOR EACH ROW
  EXECUTE FUNCTION public.touch_updated_at();

-- RLS
ALTER TABLE public.braindumps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read braindumps"
  ON public.braindumps FOR SELECT
  TO anon, authenticated USING (true);

CREATE POLICY "Anyone can insert braindumps"
  ON public.braindumps FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can update braindumps"
  ON public.braindumps FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Anyone can delete braindumps"
  ON public.braindumps FOR DELETE
  TO anon, authenticated USING (true);
