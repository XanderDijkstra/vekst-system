export interface TradeData {
  slug: string;
  singular: string;
  plural: string;
  bedrijf: string;
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
  solution: {
    sectionTitle: string;
    intro: string;
    items: { title: string; description: string; keywords: string[] }[];
  };
  industryContent: {
    sectionTitle: string;
    paragraphs: string[];
  };
  comparison: {
    sectionTitle: string;
    rows: { aspect: string; werkspot: string; bureau: string; groeisysteem: string }[];
  };
  results: {
    sectionTitle: string;
    items: { metric: string; description: string }[];
  };
  faqs: { question: string; answer: string }[];
  relatedTrades: { label: string; slug: string }[];
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    buttonUrl: string;
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SCHILDERS — Full content
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const schildersData: TradeData = {
  slug: "schilders",
  singular: "schilder",
  plural: "schilders",
  bedrijf: "schildersbedrijf",
  metaTitle: "Website & Marketing voor Schilders | Meer Klanten — Groei Systeem",
  metaDescription: "Speciaal voor schildersbedrijven: een professionele website, automatische reviews en lokale SEO. Wij helpen schilders meer klanten te krijgen zonder gedoe.",
  hero: {
    badge: "Speciaal voor Schildersbedrijven",
    headline: "Meer Klanten als Schilder — Zonder Marketing Gedoe",
    subheadline: "Wij bouwen het complete online systeem zodat huiseigenaren jou vinden, vertrouwen en bellen. Jij schildert. Wij regelen de rest.",
    stats: [
      { value: "78%", label: "van klanten zoekt online naar een schilder" },
      { value: "3x", label: "meer aanvragen met een goede Google positie" },
      { value: "7", label: "dagen en je nieuwe website staat live" },
    ],
  },
  problems: {
    sectionTitle: "Herken je dit als schilder?",
    items: [
      { title: "Mond-tot-mond loopt terug", description: "Je hebt jarenlang geleefd van aanbevelingen, maar nieuwe klanten vinden je niet online. Concurrenten met een betere website pikken jouw opdrachten in." },
      { title: "Geen tijd voor marketing", description: "Na een dag op de steiger heb je geen energie om met websites, social media of Google bezig te zijn. Marketing voelt als een tweede baan." },
      { title: "Dure bureaus, weinig resultaat", description: "Je hebt al eerder betaald voor een website of advertenties, maar het leverde niets op. Je weet niet of het aan het bureau lag of aan de aanpak." },
      { title: "Reviews vragen voelt ongemakkelijk", description: "Je weet dat Google reviews belangrijk zijn, maar je vergeet het te vragen of vindt het lastig. Ondertussen heeft je concurrent er 50 meer." },
    ],
  },
  solution: {
    sectionTitle: "Hoe wij schildersbedrijven laten groeien",
    intro: "Ons systeem is specifiek ingericht voor schilders. Geen standaard template — maar een aanpak die werkt voor jouw type klant en jouw regio.",
    items: [
      { title: "Een website die verkoopt", description: "Niet zomaar een mooi plaatje. Een website met duidelijke diensten (binnenschilderwerk, buitenschilderwerk, houtrot reparatie, behangen), je werkgebied, en een simpele manier om contact op te nemen. Geoptimaliseerd zodat 'schilder + [jouw stad]' jou vindt.", keywords: ["binnenschilderwerk", "buitenschilderwerk", "houtrot reparatie", "behangen"] },
      { title: "Lokale SEO die werkt", description: "Wij optimaliseren je Google Mijn Bedrijf profiel, schrijven pagina's voor elke dienst en zorgen dat je vindbaar bent in jouw regio. Niet vandaag op #1 — maar structureel groeien in Google zoekresultaten.", keywords: ["google mijn bedrijf", "lokale seo", "vindbaarheid"] },
      { title: "Automatische 5-sterren reviews", description: "Na elke klus sturen wij automatisch een reviewverzoek naar je klant. Tevreden? Direct naar Google. Niet tevreden? Eerst naar jou. Zo groeit je score zonder dat je eraan hoeft te denken.", keywords: ["google reviews", "online reputatie", "beoordelingen"] },
      { title: "Gemiste oproep? Automatisch bericht terug", description: "Sta je op de ladder en kun je niet opnemen? Wij sturen direct een SMS terug: 'Bedankt voor je telefoontje, ik bel je zo snel mogelijk terug.' Zo verlies je nooit een lead.", keywords: ["lead opvolging", "gemiste oproepen", "sms automatisering"] },
    ],
  },
  industryContent: {
    sectionTitle: "Marketing voor schilders: wat werkt in 2026?",
    paragraphs: [
      "De schildersbranche in Nederland is competitief. Er zijn ruim 12.000 schildersbedrijven actief, en de meeste klanten beginnen hun zoektocht online. Of iemand nu zoekt naar 'schilder in de buurt', 'buitenschilderwerk offerte' of 'houtrot laten repareren' — als jij niet zichtbaar bent, gaat de opdracht naar een concurrent.",
      "Veel schilders investeren in Werkspot, Zoofy of vergelijkbare platforms. Daar betaal je per lead, ongeacht of die lead ook daadwerkelijk een klant wordt. Met een eigen website en lokale vindbaarheid trek je klanten aan die specifiek naar jou zoeken — gratis, elke maand opnieuw.",
      "Google Mijn Bedrijf is voor schilders het belangrijkste marketing kanaal. Wanneer iemand zoekt naar 'schilder [stad]', toont Google eerst de kaartresultaten. Bedrijven met meer en betere reviews, een volledig profiel en een gekoppelde website scoren hier hoger. Dit is precies wat ons systeem automatiseert.",
      "Daarnaast zien we dat schildersbedrijven die regelmatig voor/na foto's delen van projecten — op hun website én op Google Mijn Bedrijf — significant beter scoren. Het laat vakmanschap zien én geeft Google vers content om te indexeren.",
    ],
  },
  comparison: {
    sectionTitle: "Waarom niet gewoon Werkspot of een duur bureau?",
    rows: [
      { aspect: "Kosten per lead", werkspot: "€15-€50 per lead, ongeacht kwaliteit", bureau: "€500-€2000/maand + opstart kosten", groeisysteem: "€279/maand vast, onbeperkte leads" },
      { aspect: "Eigenaarschap website", werkspot: "Geen eigen website", bureau: "Vaak vastgezet in contract", groeisysteem: "Jouw website, altijd toegankelijk" },
      { aspect: "Reviews automatisering", werkspot: "Niet beschikbaar", bureau: "Zelden inbegrepen", groeisysteem: "Volledig automatisch" },
      { aspect: "Lokale SEO", werkspot: "Je concurreert met andere schilders op het platform", bureau: "Vaak extra kosten", groeisysteem: "Inbegrepen en geoptimaliseerd" },
      { aspect: "Opzettijd", werkspot: "Direct maar je hebt geen controle", bureau: "4-12 weken", groeisysteem: "Live binnen 7 dagen" },
    ],
  },
  results: {
    sectionTitle: "Resultaten voor schildersbedrijven",
    items: [
      { metric: "Van 3 naar 47 Google reviews", description: "In 4 maanden, volledig automatisch" },
      { metric: "Pagina 1 in Google", description: "Voor 'schilder [stad]' binnen 3 maanden" },
      { metric: "8 nieuwe aanvragen per maand", description: "Via de website, zonder advertentiekosten" },
    ],
  },
  faqs: [
    { question: "Hoeveel kost een website voor een schildersbedrijf?", answer: "Bij Groei Systeem betaal je €279 per maand voor een complete website inclusief hosting, onderhoud, lokale SEO en marketing automatiseringen. Er zijn geen opstart- of ontwikkelkosten. Je website staat binnen 7 dagen live. Bij traditionele bureaus betaal je vaak €3.000-€8.000 voor een website plus maandelijkse hostingkosten." },
    { question: "Hoe krijg ik als schilder meer klanten via internet?", answer: "De drie belangrijkste stappen: (1) Zorg voor een professionele website die geoptimaliseerd is voor lokale zoekopdrachten zoals 'schilder [jouw stad]'. (2) Bouw actief aan Google reviews — bedrijven met 20+ reviews en een score boven 4.5 krijgen aanzienlijk meer klikken. (3) Optimaliseer je Google Mijn Bedrijf profiel met foto's, diensten en je werkgebied. Ons systeem automatiseert al deze drie stappen." },
    { question: "Werkt SEO echt voor schildersbedrijven?", answer: "Ja, en het is één van de meest kosteneffectieve manieren om klanten te werven. Wanneer iemand zoekt naar 'buitenschilderwerk offerte' of 'schilder in de buurt', heeft die persoon direct behoefte aan jouw dienst. In tegenstelling tot social media of flyers, bereik je met SEO mensen op het exacte moment dat ze een schilder zoeken. Het kost 2-6 maanden om resultaten te zien, maar daarna is het een constante stroom van gratis aanvragen." },
    { question: "Wat is het verschil tussen Groei Systeem en Werkspot?", answer: "Bij Werkspot betaal je per lead en concurreer je direct met andere schilders om dezelfde klant. Bij Groei Systeem investeer je in je eigen online aanwezigheid. Klanten die via jouw website binnenkomen hebben al voor jou gekozen — ze hebben je reviews gelezen, je werk gezien en bellen jou specifiek. De conversieratio is daarom veel hoger en de kosten per klant lager op de lange termijn." },
    { question: "Hoe lang duurt het voordat mijn schildersbedrijf gevonden wordt in Google?", answer: "Dit hangt af van je huidige online aanwezigheid, de concurrentie in jouw regio en je Google reviewscore. Gemiddeld zien onze klanten binnen 2-4 maanden verbetering in lokale zoekresultaten. Voor minder competitieve regio's kan dit sneller gaan. Het Google Mijn Bedrijf kaartresultaat reageert vaak al binnen weken op optimalisaties en nieuwe reviews." },
    { question: "Moet ik zelf iets doen of wordt alles voor mij geregeld?", answer: "Wij regelen 95% — de website, de SEO, de automatiseringen en het technische onderhoud. Het enige wat wij van jou vragen: lever foto's aan van je werk (voor/na), en gebruik de app om na een klus met één klik een reviewverzoek te sturen. Dat is letterlijk twee tikken op je telefoon." },
  ],
  relatedTrades: [
    { label: "Dakdekkers", slug: "dakdekkers" },
    { label: "Stukadoors", slug: "stukadoors" },
    { label: "Klusbedrijven", slug: "klusbedrijven" },
    { label: "Hoveniers", slug: "hoveniers" },
  ],
  cta: {
    headline: "Klaar om meer schilderklussen binnen te halen?",
    subheadline: "Boek een gratis gesprek en we laten zien hoe het systeem werkt voor schildersbedrijven in jouw regio.",
    buttonText: "Plan een Gesprek",
    buttonUrl: "/contact",
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Helper to generate placeholder trade data
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function createPlaceholderTrade(
  slug: string,
  singular: string,
  plural: string,
  bedrijf: string,
  relatedTrades: { label: string; slug: string }[]
): TradeData {
  return {
    slug,
    singular,
    plural,
    bedrijf,
    metaTitle: `Website & Marketing voor ${plural.charAt(0).toUpperCase() + plural.slice(1)} | Meer Klanten — Groei Systeem`,
    metaDescription: `Speciaal voor ${bedrijf}en: een professionele website, automatische reviews en lokale SEO. Wij helpen ${plural} meer klanten te krijgen zonder gedoe.`,
    hero: {
      badge: `Speciaal voor ${bedrijf.charAt(0).toUpperCase() + bedrijf.slice(1)}en`,
      headline: `Meer Klanten als ${singular.charAt(0).toUpperCase() + singular.slice(1)} — Zonder Marketing Gedoe`,
      subheadline: `Wij bouwen het complete online systeem zodat klanten jou vinden, vertrouwen en bellen. Jij doet waar je goed in bent. Wij regelen de rest.`,
      stats: [
        { value: "80%", label: `van klanten zoekt online naar een ${singular}` },
        { value: "3x", label: "meer aanvragen met een goede Google positie" },
        { value: "7", label: "dagen en je nieuwe website staat live" },
      ],
    },
    problems: {
      sectionTitle: `Herken je dit als ${singular}?`,
      items: [
        { title: "Mond-tot-mond loopt terug", description: `Je hebt jarenlang geleefd van aanbevelingen, maar nieuwe klanten vinden je niet online. Concurrenten met een betere website pikken jouw opdrachten in.` },
        { title: "Geen tijd voor marketing", description: `Na een lange werkdag heb je geen energie om met websites, social media of Google bezig te zijn. Marketing voelt als een tweede baan.` },
        { title: "Dure bureaus, weinig resultaat", description: `Je hebt al eerder betaald voor een website of advertenties, maar het leverde niets op. Je weet niet of het aan het bureau lag of aan de aanpak.` },
        { title: "Reviews vragen voelt ongemakkelijk", description: `Je weet dat Google reviews belangrijk zijn, maar je vergeet het te vragen of vindt het lastig. Ondertussen heeft je concurrent er 50 meer.` },
      ],
    },
    solution: {
      sectionTitle: `Hoe wij ${bedrijf}en laten groeien`,
      intro: `Ons systeem is specifiek ingericht voor ${plural}. Geen standaard template — maar een aanpak die werkt voor jouw type klant en jouw regio.`,
      items: [
        { title: "Een website die verkoopt", description: `Een professionele website met duidelijke diensten, je werkgebied, en een simpele manier om contact op te nemen. Geoptimaliseerd zodat '${singular} + [jouw stad]' jou vindt.`, keywords: ["professionele website", "lokale vindbaarheid", "conversie optimalisatie"] },
        { title: "Lokale SEO die werkt", description: `Wij optimaliseren je Google Mijn Bedrijf profiel, schrijven pagina's voor elke dienst en zorgen dat je vindbaar bent in jouw regio.`, keywords: ["google mijn bedrijf", "lokale seo", "vindbaarheid"] },
        { title: "Automatische 5-sterren reviews", description: `Na elke klus sturen wij automatisch een reviewverzoek naar je klant. Tevreden? Direct naar Google. Niet tevreden? Eerst naar jou.`, keywords: ["google reviews", "online reputatie", "beoordelingen"] },
        { title: "Gemiste oproep? Automatisch bericht terug", description: `Kun je niet opnemen? Wij sturen direct een SMS terug zodat je nooit een lead verliest.`, keywords: ["lead opvolging", "gemiste oproepen", "sms automatisering"] },
      ],
    },
    industryContent: {
      sectionTitle: `Marketing voor ${plural}: wat werkt in 2026?`,
      paragraphs: [
        `De ${singular}sbranche in Nederland is competitief. De meeste klanten beginnen hun zoektocht online. Als jij niet zichtbaar bent, gaat de opdracht naar een concurrent.`,
        `Veel ${plural} investeren in Werkspot of vergelijkbare platforms. Daar betaal je per lead, ongeacht of die ook daadwerkelijk een klant wordt. Met een eigen website trek je klanten aan die specifiek naar jou zoeken.`,
        `Google Mijn Bedrijf is voor ${plural} het belangrijkste marketing kanaal. Bedrijven met meer en betere reviews scoren hoger in de lokale zoekresultaten. Dit is precies wat ons systeem automatiseert.`,
      ],
    },
    comparison: {
      sectionTitle: "Waarom niet gewoon Werkspot of een duur bureau?",
      rows: [
        { aspect: "Kosten per lead", werkspot: "€15-€50 per lead", bureau: "€500-€2000/maand", groeisysteem: "€279/maand vast, onbeperkte leads" },
        { aspect: "Eigenaarschap website", werkspot: "Geen eigen website", bureau: "Vaak vastgezet in contract", groeisysteem: "Jouw website, altijd toegankelijk" },
        { aspect: "Reviews automatisering", werkspot: "Niet beschikbaar", bureau: "Zelden inbegrepen", groeisysteem: "Volledig automatisch" },
        { aspect: "Lokale SEO", werkspot: "Je concurreert op het platform", bureau: "Vaak extra kosten", groeisysteem: "Inbegrepen en geoptimaliseerd" },
        { aspect: "Opzettijd", werkspot: "Direct maar geen controle", bureau: "4-12 weken", groeisysteem: "Live binnen 7 dagen" },
      ],
    },
    results: {
      sectionTitle: `Resultaten voor ${bedrijf}en`,
      items: [
        { metric: "Van 3 naar 40+ Google reviews", description: "In 4 maanden, volledig automatisch" },
        { metric: "Pagina 1 in Google", description: `Voor '${singular} [stad]' binnen 3 maanden` },
        { metric: "8+ nieuwe aanvragen per maand", description: "Via de website, zonder advertentiekosten" },
      ],
    },
    faqs: [
      { question: `Hoeveel kost een website voor een ${bedrijf}?`, answer: `Bij Groei Systeem betaal je €279 per maand voor een complete website inclusief hosting, onderhoud, lokale SEO en marketing automatiseringen. Er zijn geen opstart- of ontwikkelkosten. Je website staat binnen 7 dagen live.` },
      { question: `Hoe krijg ik als ${singular} meer klanten via internet?`, answer: `De drie belangrijkste stappen: (1) Een professionele website geoptimaliseerd voor lokale zoekopdrachten. (2) Actief Google reviews opbouwen. (3) Je Google Mijn Bedrijf profiel optimaliseren. Ons systeem automatiseert al deze drie stappen.` },
      { question: `Werkt SEO echt voor ${plural}?`, answer: `Ja. Wanneer iemand zoekt naar '${singular} in de buurt', heeft die persoon direct behoefte aan jouw dienst. Met SEO bereik je mensen op het exacte moment dat ze jou zoeken. Het kost 2-6 maanden, maar daarna is het een constante stroom van gratis aanvragen.` },
      { question: `Moet ik zelf iets doen?`, answer: `Wij regelen 95% — de website, de SEO, de automatiseringen en het technische onderhoud. Het enige wat wij vragen: lever foto's aan van je werk en gebruik de app om met één klik een reviewverzoek te sturen.` },
    ],
    relatedTrades,
    cta: {
      headline: `Klaar om meer klussen binnen te halen?`,
      subheadline: `Boek een gratis gesprek en we laten zien hoe het systeem werkt voor ${bedrijf}en in jouw regio.`,
      buttonText: "Plan een Gesprek",
      buttonUrl: "/contact",
    },
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ALL TRADE PAGES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const TRADE_PAGES: Record<string, TradeData> = {
  schilders: schildersData,
  dakdekkers: createPlaceholderTrade("dakdekkers", "dakdekker", "dakdekkers", "dakdekkersbedrijf", [
    { label: "Schilders", slug: "schilders" }, { label: "Loodgieters", slug: "loodgieters" }, { label: "Isolatiebedrijven", slug: "isolatiebedrijven" }, { label: "Timmerlieden", slug: "timmerlieden" },
  ]),
  loodgieters: createPlaceholderTrade("loodgieters", "loodgieter", "loodgieters", "loodgietersbedrijf", [
    { label: "Dakdekkers", slug: "dakdekkers" }, { label: "HVAC", slug: "hvac" }, { label: "Klusbedrijven", slug: "klusbedrijven" }, { label: "Badkamerrenovatie", slug: "badkamerrenovatie" },
  ]),
  stukadoors: createPlaceholderTrade("stukadoors", "stukadoor", "stukadoors", "stukadoorsbedrijf", [
    { label: "Schilders", slug: "schilders" }, { label: "Tegelzetters", slug: "tegelzetters" }, { label: "Klusbedrijven", slug: "klusbedrijven" }, { label: "Timmerlieden", slug: "timmerlieden" },
  ]),
  hoveniers: createPlaceholderTrade("hoveniers", "hovenier", "hoveniers", "hoveniersbedrijf", [
    { label: "Klusbedrijven", slug: "klusbedrijven" }, { label: "Bestrating", slug: "bestrating" }, { label: "Schoonmaakbedrijven", slug: "schoonmaakbedrijven" }, { label: "Schilders", slug: "schilders" },
  ]),
  klusbedrijven: createPlaceholderTrade("klusbedrijven", "klusjesman", "klusbedrijven", "klusbedrijf", [
    { label: "Schilders", slug: "schilders" }, { label: "Loodgieters", slug: "loodgieters" }, { label: "Elektriciens", slug: "elektriciens" }, { label: "Timmerlieden", slug: "timmerlieden" },
  ]),
  tegelzetters: createPlaceholderTrade("tegelzetters", "tegelzetter", "tegelzetters", "tegelzetbedrijf", [
    { label: "Stukadoors", slug: "stukadoors" }, { label: "Loodgieters", slug: "loodgieters" }, { label: "Badkamerrenovatie", slug: "badkamerrenovatie" }, { label: "Klusbedrijven", slug: "klusbedrijven" },
  ]),
  elektriciens: createPlaceholderTrade("elektriciens", "elektricien", "elektriciens", "elektriciensbedrijf", [
    { label: "Klusbedrijven", slug: "klusbedrijven" }, { label: "HVAC", slug: "hvac" }, { label: "Zonnepanelen", slug: "zonnepanelen" }, { label: "Domotica", slug: "domotica" },
  ]),
  timmerlieden: createPlaceholderTrade("timmerlieden", "timmerman", "timmerlieden", "timmerbedrijf", [
    { label: "Schilders", slug: "schilders" }, { label: "Dakdekkers", slug: "dakdekkers" }, { label: "Klusbedrijven", slug: "klusbedrijven" }, { label: "Stukadoors", slug: "stukadoors" },
  ]),
  schoonmaakbedrijven: createPlaceholderTrade("schoonmaakbedrijven", "schoonmaker", "schoonmaakbedrijven", "schoonmaakbedrijf", [
    { label: "Glazenwassers", slug: "glazenwassers" }, { label: "Hoveniers", slug: "hoveniers" }, { label: "Klusbedrijven", slug: "klusbedrijven" }, { label: "Schilders", slug: "schilders" },
  ]),
  glazenwassers: createPlaceholderTrade("glazenwassers", "glazenwasser", "glazenwassers", "glazenwassersbedrijf", [
    { label: "Schoonmaakbedrijven", slug: "schoonmaakbedrijven" }, { label: "Schilders", slug: "schilders" }, { label: "Klusbedrijven", slug: "klusbedrijven" }, { label: "Hoveniers", slug: "hoveniers" },
  ]),
  keukenmonteurs: createPlaceholderTrade("keukenmonteurs", "keukenmonteur", "keukenmonteurs", "keukenmontage bedrijf", [
    { label: "Loodgieters", slug: "loodgieters" }, { label: "Elektriciens", slug: "elektriciens" }, { label: "Tegelzetters", slug: "tegelzetters" }, { label: "Timmerlieden", slug: "timmerlieden" },
  ]),
  badkamerrenovatie: createPlaceholderTrade("badkamerrenovatie", "badkamerrenovatie specialist", "badkamerrenovatie bedrijven", "badkamerrenovatie bedrijf", [
    { label: "Loodgieters", slug: "loodgieters" }, { label: "Tegelzetters", slug: "tegelzetters" }, { label: "Stukadoors", slug: "stukadoors" }, { label: "Klusbedrijven", slug: "klusbedrijven" },
  ]),
  isolatiebedrijven: createPlaceholderTrade("isolatiebedrijven", "isolatie specialist", "isolatiebedrijven", "isolatiebedrijf", [
    { label: "Dakdekkers", slug: "dakdekkers" }, { label: "Schilders", slug: "schilders" }, { label: "Timmerlieden", slug: "timmerlieden" }, { label: "HVAC", slug: "hvac" },
  ]),
  verhuisbedrijven: createPlaceholderTrade("verhuisbedrijven", "verhuizer", "verhuisbedrijven", "verhuisbedrijf", [
    { label: "Schoonmaakbedrijven", slug: "schoonmaakbedrijven" }, { label: "Klusbedrijven", slug: "klusbedrijven" }, { label: "Schilders", slug: "schilders" }, { label: "Hoveniers", slug: "hoveniers" },
  ]),
  hvac: createPlaceholderTrade("hvac", "HVAC monteur", "HVAC bedrijven", "HVAC bedrijf", [
    { label: "Loodgieters", slug: "loodgieters" }, { label: "Elektriciens", slug: "elektriciens" }, { label: "Isolatiebedrijven", slug: "isolatiebedrijven" }, { label: "Dakdekkers", slug: "dakdekkers" },
  ]),
};

export const TRADE_SLUGS = Object.keys(TRADE_PAGES);
