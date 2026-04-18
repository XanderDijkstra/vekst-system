export interface ServicePageData {
  slug: string;
  trade: string;
  tradeName: string;
  tradeSingular: string;
  tradeBedrijf: string;
  service: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    stats: { value: string; label: string }[];
  };
  problems: {
    sectionTitle: string;
    items: { title: string; description: string }[];
  };
  features: {
    sectionTitle: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  examplePages: {
    sectionTitle: string;
    pages: string[];
  };
  industryContent: {
    sectionTitle: string;
    paragraphs: string[];
  };
  faqs: { question: string; answer: string }[];
  cta: {
    headline: string;
    subheadline: string;
  };
}

export const SERVICE_PAGES: Record<string, ServicePageData> = {};
