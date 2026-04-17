export interface DownloadItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "Reviews" | "Offertes" | "Website" | "Lead-opvolging" | "Planning" | "Scripts";
  pages: number;
  format: "PDF" | "Word + PDF" | "Excel + PDF";
  whatYouGet: string[];
  whoIsItFor: string[];
  filePath: string | null;
  status: "live" | "soon";
  relatedArticleSlugs?: string[];
  relatedServiceHrefs?: string[];
}

export const downloads: DownloadItem[] = [
  {
    slug: "google-review-scripts-aannemer",
    title: "50 Google review aanvraag-scripts voor aannemers",
    tagline: "Klaar-voor-kopieren scripts voor WhatsApp, sms en e-mail",
    description:
      "Een van de snelste manieren om meer leads te krijgen: je Google review score omhoog. Maar hoe vraag je netjes om een review zonder geforceerd te klinken? In deze PDF krijg je 50 kant-en-klare scripts die echt werken bij klanten in de bouw.",
    category: "Reviews",
    pages: 18,
    format: "PDF",
    whatYouGet: [
      "20 WhatsApp/sms-scripts voor verschillende werkmomenten",
      "20 e-mailscripts (korte en uitgebreide versies)",
      "10 gespreksopeningen voor als je de klant persoonlijk spreekt",
      "Timing-guide: wanneer je het beste om een review vraagt",
      "Wat te doen als een klant een negatieve review plaatst",
    ],
    whoIsItFor: [
      "Aannemers die van 0-20 reviews naar 50+ willen",
      "ZZP'ers die niet weten hoe ze moeten beginnen",
      "Bedrijven die al reviews vragen maar lage response krijgen",
    ],
    filePath: null,
    status: "soon",
    relatedArticleSlugs: ["meer-google-reviews-aannemer", "google-bedrijfsprofiel-optimaliseren"],
    relatedServiceHrefs: ["/diensten/review-systeem"],
  },
  {
    slug: "offerte-template-aannemer",
    title: "Offerte-template voor aannemers",
    tagline: "Bewezen template die offertes tot 35% vaker laat scoren",
    description:
      "De meeste aannemer-offertes zijn saaie tabellen met bedragen. Deze template is anders: hij positioneert jou als de beste keuze voordat de klant bij de prijs aankomt. Met uitleg waarom elk onderdeel werkt.",
    category: "Offertes",
    pages: 12,
    format: "Word + PDF",
    whatYouGet: [
      "Bewerkbare Word-template die je direct kunt gebruiken",
      "Voorbeeld-offerte met ingevulde bedragen (verbouwing)",
      "Checklist: 12 dingen die in elke offerte horen",
      "3 varianten: spoedwerk, verbouwing, onderhoud",
      "Follow-up-email-script voor na het versturen",
    ],
    whoIsItFor: [
      "Aannemers die offertes sturen maar te weinig opdrachten scoren",
      "Bedrijven die nog op basic Word-templates werken",
      "Iedereen die zijn conversie van offerte naar opdracht wil verhogen",
    ],
    filePath: null,
    status: "soon",
    relatedArticleSlugs: ["offerte-maken-aannemer-tips"],
    relatedServiceHrefs: ["/diensten/offerte-systeem"],
  },
  {
    slug: "website-audit-checklist-aannemer",
    title: "Website-audit checklist: 21 checks die je zelf kunt doen",
    tagline: "Zelf je website checken voordat je marketing inzet",
    description:
      "Voordat je 500 euro per maand in Google Ads stopt: check eerst of je website klaar is. Deze checklist loopt je in 30 minuten door 21 punten die het verschil maken tussen een website die leads genereert en een die bezoekers laat afhaken.",
    category: "Website",
    pages: 14,
    format: "PDF",
    whatYouGet: [
      "21-punten audit met uitleg per check",
      "Zelf-test: hoeveel leads laat je nu liggen?",
      "Mobiel-test in 5 minuten",
      "Vertrouwenssignalen die aannemers vaak vergeten",
      "Prioriteitsmatrix: wat eerst fixen?",
    ],
    whoIsItFor: [
      "Aannemers met een bestaande website die twijfelen aan de kwaliteit",
      "Bedrijven die binnenkort een nieuwe website laten bouwen",
      "Iedereen die zonder webdesigner zelf checks wil doen",
    ],
    filePath: null,
    status: "soon",
    relatedArticleSlugs: ["website-laten-maken-aannemer-kosten"],
    relatedServiceHrefs: ["/websites-voor-aannemers"],
  },
  {
    slug: "lead-opvolging-playbook-aannemer",
    title: "Lead-opvolging playbook voor aannemers",
    tagline: "Wat te doen in de eerste 5 minuten na een aanvraag",
    description:
      "Onderzoek laat zien: wie binnen 5 minuten reageert op een lead heeft 4x meer kans om de opdracht te scoren. Maar in de bouw sta je vaak op een steiger. Deze playbook geeft je een systeem zodat leads nooit meer koud worden.",
    category: "Lead-opvolging",
    pages: 22,
    format: "PDF",
    whatYouGet: [
      "5-minuten-regel: hoe je het ook als 1-mans-bedrijf waarmaakt",
      "E-mail- en WhatsApp-scripts voor de eerste reactie",
      "Kwalificatievragen: sorteer goede leads van tijd-verspillers",
      "Automatische opvolg-sequenties (sms + e-mail)",
      "Wat te doen als een lead 3 dagen stil is",
    ],
    whoIsItFor: [
      "Aannemers die regelmatig aanvragen krijgen maar te weinig scoren",
      "Bedrijven met meerdere kanalen (telefoon, formulier, WhatsApp)",
      "ZZP'ers die overdag op de bouw staan en 's avonds opvolgen",
    ],
    filePath: null,
    status: "soon",
    relatedArticleSlugs: ["snelle-opvolging-aannemer"],
    relatedServiceHrefs: ["/diensten/lead-follow-up", "/systemen/lead-follow-up"],
  },
];
