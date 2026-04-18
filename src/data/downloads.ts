export interface DownloadItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "Anmeldelser" | "Tilbud" | "Nettside" | "Lead-oppfølging" | "Planlegging" | "Skript";
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
    slug: "google-anmeldelsesskript-handverkere",
    title: "50 skript for Google-anmeldelsesforespørsler for håndverkere",
    tagline: "Ferdige klipp-og-lim-skript for WhatsApp, SMS og e-post",
    description:
      "En av de raskeste måtene å få flere leads på: hev Google-anmeldelsesscoren din. Men hvordan ber du pent om en anmeldelse uten å høres anstrengt ut? I denne PDF-en får du 50 ferdige skript som faktisk virker på kunder i byggebransjen.",
    category: "Anmeldelser",
    pages: 18,
    format: "PDF",
    whatYouGet: [
      "20 WhatsApp-/SMS-skript for ulike stadier i jobben",
      "20 e-postskript (korte og lengre versjoner)",
      "10 samtaleåpninger for når du snakker med kunden ansikt til ansikt",
      "Timing-guide: når er det best å be om en anmeldelse",
      "Hva du gjør hvis en kunde legger ut en negativ anmeldelse",
    ],
    whoIsItFor: [
      "Håndverkere som vil gå fra 0-20 anmeldelser til 50+",
      "Selvstendig næringsdrivende som ikke vet hvor de skal begynne",
      "Bedrifter som allerede spør om anmeldelser men får lav respons",
    ],
    filePath: null,
    status: "soon",
    relatedArticleSlugs: ["meer-google-reviews-aannemer", "google-bedrijfsprofiel-optimaliseren"],
    relatedServiceHrefs: ["/tjenester/anmeldelsessystem"],
  },
  {
    slug: "tilbudsmal-handverkere",
    title: "Tilbudsmal for håndverkere",
    tagline: "Bevist mal som øker tilbudstreffraten med inntil 35 %",
    description:
      "De fleste håndverkertilbud er kjedelige tabeller med beløp. Denne malen er annerledes: den posisjonerer deg som det beste valget før kunden er framme ved prisen. Med forklaring på hvorfor hver del fungerer.",
    category: "Tilbud",
    pages: 12,
    format: "Word + PDF",
    whatYouGet: [
      "Redigerbar Word-mal du kan bruke umiddelbart",
      "Eksempeltilbud med utfylte beløp (oppussing)",
      "Sjekkliste: 12 ting som hører hjemme i ethvert tilbud",
      "3 varianter: akuttjobb, oppussing, vedlikehold",
      "Oppfølgings-e-post-skript for etter utsendelse",
    ],
    whoIsItFor: [
      "Håndverkere som sender tilbud men får for få oppdrag",
      "Bedrifter som fortsatt jobber med enkle Word-maler",
      "Alle som vil øke konverteringen fra tilbud til oppdrag",
    ],
    filePath: null,
    status: "soon",
    relatedArticleSlugs: ["offerte-maken-aannemer-tips"],
    relatedServiceHrefs: ["/tjenester/tilbudssystem"],
  },
  {
    slug: "nettside-audit-sjekkliste",
    title: "Nettside-audit-sjekkliste: 21 sjekker du kan gjøre selv",
    tagline: "Sjekk nettsiden selv før du setter i gang med markedsføring",
    description:
      "Før du bruker 6 000 kr i måneden på Google Ads: sjekk først om nettsiden din er klar. Denne sjekklisten tar deg gjennom 21 punkter på 30 minutter som er forskjellen mellom en nettside som genererer leads og en som mister besøkende.",
    category: "Nettside",
    pages: 14,
    format: "PDF",
    whatYouGet: [
      "21-punkts audit med forklaring per sjekk",
      "Selvtest: hvor mange leads mister du akkurat nå?",
      "Mobil-test på 5 minutter",
      "Tillitssignaler som håndverkere ofte glemmer",
      "Prioriteringsmatrise: hva bør fikses først?",
    ],
    whoIsItFor: [
      "Håndverkere med eksisterende nettside som tviler på kvaliteten",
      "Bedrifter som snart skal bygge ny nettside",
      "Alle som vil gjøre egen sjekk uten å leie inn designer",
    ],
    filePath: null,
    status: "soon",
    relatedArticleSlugs: ["website-laten-maken-aannemer-kosten"],
    relatedServiceHrefs: ["/websites-voor-aannemers"],
  },
  {
    slug: "lead-oppfolging-playbook",
    title: "Lead-oppfølgingsplaybook for håndverkere",
    tagline: "Hva du gjør de første 5 minuttene etter en forespørsel",
    description:
      "Undersøkelser viser: den som svarer innen 5 minutter på en lead har 4x så stor sjanse til å vinne oppdraget. Men i byggebransjen står du ofte i stillas. Denne playbooken gir deg et system så leads aldri blir kalde igjen.",
    category: "Lead-oppfølging",
    pages: 22,
    format: "PDF",
    whatYouGet: [
      "5-minutters-regelen: slik får du det til også som enmannsbedrift",
      "E-post- og WhatsApp-skript for første respons",
      "Kvalifiseringsspørsmål: sorter gode leads fra tidstyver",
      "Automatiske oppfølgingssekvenser (SMS + e-post)",
      "Hva du gjør hvis en lead er stille i 3 dager",
    ],
    whoIsItFor: [
      "Håndverkere som får jevnlig forespørsler men vinner for få",
      "Bedrifter med flere kanaler (telefon, skjema, WhatsApp)",
      "Selvstendig næringsdrivende som er på byggeplass dagtid og følger opp om kvelden",
    ],
    filePath: null,
    status: "soon",
    relatedArticleSlugs: ["snelle-opvolging-aannemer"],
    relatedServiceHrefs: ["/tjenester/lead-oppfolging", "/systemen/lead-follow-up"],
  },
];
