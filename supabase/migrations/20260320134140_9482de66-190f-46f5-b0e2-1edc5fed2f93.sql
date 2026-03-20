
CREATE TABLE public.configurator_features (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  individual_price NUMERIC(10,2) NOT NULL DEFAULT 0,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.configurator_features ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read active features"
  ON public.configurator_features FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can update features via admin"
  ON public.configurator_features FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can insert features"
  ON public.configurator_features FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can delete features"
  ON public.configurator_features FOR DELETE
  TO anon, authenticated
  USING (true);

-- Seed default features
INSERT INTO public.configurator_features (slug, title, description, individual_price, sort_order) VALUES
  ('website', 'Professionele Website', 'Een op maat gemaakte, SEO-geoptimaliseerde website met 10-20 pagina''s. Inclusief hosting en onderhoud.', 150, 1),
  ('crm', 'CRM Systeem', 'Beheer al je klantgegevens, offertes en projecten op één plek. Zie in één oogopslag welke leads warm zijn en welke klanten aandacht nodig hebben.', 50, 2),
  ('phone-number', 'Eigen Zakelijk Telefoonnummer', 'Een professioneel vast nummer voor je bedrijf. Alle oproepen worden gelogd en gemiste oproepen automatisch opgevolgd via SMS.', 30, 3),
  ('automations', 'Automatiseringen', 'Automatische lead follow-up, gemiste oproep → SMS, afspraakherinneringen en meer. Bespaar uren per week op handmatig werk.', 80, 4),
  ('inbox', 'All-in-One Inbox', 'Al je berichten van WhatsApp, e-mail, SMS en social media in één overzicht. Nooit meer een bericht missen.', 40, 5),
  ('reviews', 'Review Systeem', 'Automatisch tevreden klanten om Google reviews vragen. Bouw een sterke online reputatie zonder er zelf aan te denken.', 30, 6);

-- Store the bundle price
CREATE TABLE public.configurator_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.configurator_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read settings"
  ON public.configurator_settings FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Anyone can update settings"
  ON public.configurator_settings FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Anyone can insert settings"
  ON public.configurator_settings FOR INSERT TO anon, authenticated WITH CHECK (true);

INSERT INTO public.configurator_settings (key, value) VALUES
  ('bundle_price', '279'),
  ('bundle_label', 'Compleet Pakket');
