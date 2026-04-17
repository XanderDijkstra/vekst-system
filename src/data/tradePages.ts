import { KLUSBEDRIJVEN_DATA } from "./tradeData/klusbedrijven";
import { TEGELZETTERS_DATA } from "./tradeData/tegelzetters";
import { ELEKTRICIENS_DATA } from "./tradeData/elektriciens";
import { TIMMERLIEDEN_DATA } from "./tradeData/timmerlieden";
import { SCHOONMAAKBEDRIJVEN_DATA } from "./tradeData/schoonmaakbedrijven";
import { GLAZENWASSERS_DATA } from "./tradeData/glazenwassers";
import { KEUKENMONTEURS_DATA } from "./tradeData/keukenmonteurs";
import { BADKAMERRENOVATIE_DATA } from "./tradeData/badkamerrenovatie";
import { ISOLATIEBEDRIJVEN_DATA } from "./tradeData/isolatiebedrijven";
import { VERHUISBEDRIJVEN_DATA } from "./tradeData/verhuisbedrijven";
import { HVAC_DATA } from "./tradeData/hvac";
import { AANNEMERS_DATA } from "./tradeData/aannemers";
import { GEVELREINIGING_DATA } from "./tradeData/gevelreiniging";
import { PARKETVLOEREN_DATA } from "./tradeData/parketvloeren";
import { BEGLAZING_DATA } from "./tradeData/beglazing";
import { HEKWERK_POORTEN_DATA } from "./tradeData/hekwerk-poorten";
import { RIOOLSERVICE_DATA } from "./tradeData/rioolservice";
import { BESTRATING_DATA } from "./tradeData/bestrating";
import { INTERIEURONTWERP_DATA } from "./tradeData/interieurontwerp";
import { ROLLUIKEN_ZONWERING_DATA } from "./tradeData/rolluiken-zonwering";
import { BETON_CEMENT_DATA } from "./tradeData/beton-cement";
import { KOZIJNEN_RAMEN_DATA } from "./tradeData/kozijnen-ramen";
import { VLOERLEGGER_DATA } from "./tradeData/vloerlegger";
import { CV_KETEL_MONTAGE_DATA } from "./tradeData/cv-ketel-montage";
import { METSELWERK_DATA } from "./tradeData/metselwerk";
import { VOEGWERK_DATA } from "./tradeData/voegwerk";
import { DAKGOTEN_DATA } from "./tradeData/dakgoten";
import { ONTRUIMING_DATA } from "./tradeData/ontruiming";
import { WARMTEPOMP_INSTALLATIE_DATA } from "./tradeData/warmtepomp-installatie";
import { DOMOTICA_DATA } from "./tradeData/domotica";
import { OPRUIMSERVICE_DATA } from "./tradeData/opruimservice";
import { ZONNEPANELEN_DATA } from "./tradeData/zonnepanelen";
import { DAKKAPELLEN_DATA } from "./tradeData/dakkapellen";
import { AIRCO_INSTALLATEURS_DATA } from "./tradeData/airco-installateurs";
import { ASBESTSANERING_DATA } from "./tradeData/asbestsanering";
import { VOCHTBESTRIJDING_DATA } from "./tradeData/vochtbestrijding";
import { SCHOORSTEENVEGERS_DATA } from "./tradeData/schoorsteenvegers";
import { MEUBELMAKERS_DATA } from "./tradeData/meubelmakers";
import { ZWEMBADBOUWERS_DATA } from "./tradeData/zwembadbouwers";
import { SERREBOUWERS_DATA } from "./tradeData/serrebouwers";
import { BINNENHUISARCHITECTEN_DATA } from "./tradeData/binnenhuisarchitecten";
import { KELDERBOUW_DATA } from "./tradeData/kelderbouw";
import { GARAGEDEUREN_DATA } from "./tradeData/garagedeuren";
import { BEVEILIGINGSINSTALLATEURS_DATA } from "./tradeData/beveiligingsinstallateurs";
import { RIETDEKKERS_DATA } from "./tradeData/rietdekkers";
import { AANBOUW_UITBOUW_DATA } from "./tradeData/aanbouw-uitbouw";
import { LAADPAAL_INSTALLATEURS_DATA } from "./tradeData/laadpaal-installateurs";
import { FUNDERINGSHERSTEL_DATA } from "./tradeData/funderingsherstel";
import { TRAPLIFTEN_THUISLIFTEN_DATA } from "./tradeData/trapliften-thuisliften";
import { GIETVLOEREN_DATA } from "./tradeData/gietvloeren";

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
// SCHILDERS - Full content
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const schildersData: TradeData = {
  slug: "schilders",
  singular: "schilder",
  plural: "schilders",
  bedrijf: "schildersbedrijf",
  metaTitle: "Website & Marketing voor Schilders | Meer Klanten - Aannemer Systeem",
  metaDescription: "Speciaal voor schildersbedrijven: een professionele website, automatische reviews en lokale SEO. Wij helpen schilders meer klanten te krijgen zonder gedoe.",
  hero: {
    badge: "Speciaal voor Schildersbedrijven",
    headline: "Meer Klanten als Schilder - Zonder Marketing Gedoe",
    subheadline: "Wij maken het complete online systeem zodat huiseigenaren jou vinden, vertrouwen en bellen. Jij schildert. Wij regelen de rest.",
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
    intro: "Ons systeem is specifiek ingericht voor schilders. Geen standaard template - maar een aanpak die werkt voor jouw type klant en jouw regio.",
    items: [
      { title: "Een website die verkoopt", description: "Niet zomaar een mooi plaatje. Een website met duidelijke diensten (binnenschilderwerk, buitenschilderwerk, houtrot reparatie, behangen), je werkgebied, en een simpele manier om contact op te nemen. Geoptimaliseerd zodat 'schilder + [jouw stad]' jou vindt.", keywords: ["binnenschilderwerk", "buitenschilderwerk", "houtrot reparatie", "behangen"] },
      { title: "Lokale SEO die werkt", description: "Wij optimaliseren je Google Mijn Bedrijf profiel, schrijven pagina's voor elke dienst en zorgen dat je vindbaar bent in jouw regio. Niet vandaag op #1 - maar structureel groeien in Google zoekresultaten.", keywords: ["google mijn bedrijf", "lokale seo", "vindbaarheid"] },
      { title: "Automatische 5-sterren reviews", description: "Na elke klus sturen wij automatisch een reviewverzoek naar je klant. Tevreden? Direct naar Google. Niet tevreden? Eerst naar jou. Zo groeit je score zonder dat je eraan hoeft te denken.", keywords: ["google reviews", "online reputatie", "beoordelingen"] },
      { title: "Gemiste oproep? Automatisch bericht terug", description: "Sta je op de ladder en kun je niet opnemen? Wij sturen direct een SMS terug: 'Bedankt voor je telefoontje, ik bel je zo snel mogelijk terug.' Zo verlies je nooit een lead.", keywords: ["lead opvolging", "gemiste oproepen", "sms automatisering"] },
    ],
  },
  industryContent: {
    sectionTitle: "Marketing voor schilders: wat werkt in 2026?",
    paragraphs: [
      "De schildersbranche in Nederland is competitief. Er zijn ruim 12.000 schildersbedrijven actief, en de meeste klanten beginnen hun zoektocht online. Of iemand nu zoekt naar 'schilder in de buurt', 'buitenschilderwerk offerte' of 'houtrot laten repareren' - als jij niet zichtbaar bent, gaat de opdracht naar een concurrent.",
      "Veel schilders investeren in Werkspot, Zoofy of vergelijkbare platforms. Daar betaal je per lead, ongeacht of die lead ook daadwerkelijk een klant wordt. Met een eigen website en lokale vindbaarheid trek je klanten aan die specifiek naar jou zoeken - gratis, elke maand opnieuw.",
      "Google Mijn Bedrijf is voor schilders het belangrijkste marketing kanaal. Wanneer iemand zoekt naar 'schilder [stad]', toont Google eerst de kaartresultaten. Bedrijven met meer en betere reviews, een volledig profiel en een gekoppelde website scoren hier hoger. Dit is precies wat ons systeem automatiseert.",
      "Daarnaast zien we dat schildersbedrijven die regelmatig voor/na foto's delen van projecten - op hun website én op Google Mijn Bedrijf - significant beter scoren. Het laat vakmanschap zien én geeft Google vers content om te indexeren.",
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
    { question: "Hoeveel kost een website voor een schildersbedrijf?", answer: "Bij Aannemer Systeem betaal je €279 per maand voor een complete website inclusief hosting, onderhoud, lokale SEO en marketing automatiseringen. Er zijn geen opstart- of ontwikkelkosten. Je website staat binnen 7 dagen live. Bij traditionele bureaus betaal je vaak €3.000-€8.000 voor een website plus maandelijkse hostingkosten." },
    { question: "Hoe krijg ik als schilder meer klanten via internet?", answer: "De drie belangrijkste stappen: (1) Zorg voor een professionele website die geoptimaliseerd is voor lokale zoekopdrachten zoals 'schilder [jouw stad]'. (2) Werk actief aan Google reviews - bedrijven met 20+ reviews en een score boven 4.5 krijgen aanzienlijk meer klikken. (3) Optimaliseer je Google Mijn Bedrijf profiel met foto's, diensten en je werkgebied. Ons systeem automatiseert al deze drie stappen." },
    { question: "Werkt SEO echt voor schildersbedrijven?", answer: "Ja, en het is één van de meest kosteneffectieve manieren om klanten te werven. Wanneer iemand zoekt naar 'buitenschilderwerk offerte' of 'schilder in de buurt', heeft die persoon direct behoefte aan jouw dienst. In tegenstelling tot social media of flyers, bereik je met SEO mensen op het exacte moment dat ze een schilder zoeken. Het kost 2-6 maanden om resultaten te zien, maar daarna is het een constante stroom van gratis aanvragen." },
    { question: "Wat is het verschil tussen Aannemer Systeem en Werkspot?", answer: "Bij Werkspot betaal je per lead en concurreer je direct met andere schilders om dezelfde klant. Bij Aannemer Systeem investeer je in je eigen online aanwezigheid. Klanten die via jouw website binnenkomen hebben al voor jou gekozen - ze hebben je reviews gelezen, je werk gezien en bellen jou specifiek. De conversieratio is daarom veel hoger en de kosten per klant lager op de lange termijn." },
    { question: "Hoe lang duurt het voordat mijn schildersbedrijf gevonden wordt in Google?", answer: "Dit hangt af van je huidige online aanwezigheid, de concurrentie in jouw regio en je Google reviewscore. Gemiddeld zien onze klanten binnen 2-4 maanden verbetering in lokale zoekresultaten. Voor minder competitieve regio's kan dit sneller gaan. Het Google Mijn Bedrijf kaartresultaat reageert vaak al binnen weken op optimalisaties en nieuwe reviews." },
    { question: "Moet ik zelf iets doen of wordt alles voor mij geregeld?", answer: "Wij regelen 95% - de website, de SEO, de automatiseringen en het technische onderhoud. Het enige wat wij van jou vragen: lever foto's aan van je werk (voor/na), en gebruik de app om na een klus met één klik een reviewverzoek te sturen. Dat is letterlijk twee tikken op je telefoon." },
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
    buttonText: "Boek een Demo",
    buttonUrl: "/demo",
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// (placeholder helper removed - all trades now have
//  full custom content below)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ALL TRADE PAGES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const TRADE_PAGES: Record<string, TradeData> = {
  schilders: schildersData,
  dakdekkers: {
    slug: "dakdekkers",
    singular: "dakdekker",
    plural: "dakdekkers",
    bedrijf: "dakdekkersbedrijf",
    metaTitle: "Website & Marketing voor Dakdekkers | Meer Klanten als Dakdekker - Aannemer Systeem",
    metaDescription: "Professionele website en marketing systeem voor dakdekkersbedrijven. Meer lokale vindbaarheid, automatische reviews en leads. Binnen 7 dagen live.",
    hero: {
      badge: "Speciaal voor Dakdekkersbedrijven",
      headline: "Meer Dakklussen Binnenhalen - Zonder Zelf te Adverteren",
      subheadline: "Huiseigenaren met een lekkend dak zoeken nú een dakdekker. Wij zorgen dat ze jou vinden, vertrouwen en direct bellen.",
      stats: [
        { value: "92%", label: "van spoedzoekopdrachten begint in Google" },
        { value: "€2.500+", label: "gemiddelde opdracht waarde dakwerk" },
        { value: "7", label: "dagen en je complete systeem draait" },
      ],
    },
    problems: {
      sectionTitle: "Herken je dit als dakdekker?",
      items: [
        { title: "Seizoenspieken en dalen", description: "In het stormseizoen heb je te veel werk, maar in rustige periodes droogt de telefoon op. Je mist een constante stroom van aanvragen doordat je niet vindbaar bent wanneer mensen wél zoeken." },
        { title: "Werkspot vreet je marge", description: "Je betaalt €20-€40 per lead op platforms, en de helft neemt niet eens op. Ondertussen bied je tegen drie andere dakdekkers op dezelfde klus. De platformkosten lopen snel op." },
        { title: "Geen professionele online uitstraling", description: "Klanten met grotere projecten - dakvervanging, isolatie, zonnepanelen - willen een bedrijf zien met een website, reviews en portfolio. Een Facebook-pagina is niet genoeg voor opdrachten van €5.000+." },
        { title: "Spoedklanten bellen de eerste die ze vinden", description: "Bij een lekkage belt iemand de eerste dakdekker die in Google verschijnt. Als dat niet jij bent, is die klant weg - ook al ben je de betere vakman." },
      ],
    },
    solution: {
      sectionTitle: "Hoe wij dakdekkersbedrijven laten groeien",
      intro: "Dakwerk is urgent. Klanten zoeken snel en beslissen snel. Ons systeem is ontworpen om jou als eerste te tonen én om de lead direct om te zetten in een gesprek.",
      items: [
        { title: "Website met alle diensten uitgelicht", description: "Aparte pagina's voor daklekkage reparatie, dakrenovatie, plat dak, pannendak, dakgoten, dakisolatie en zonnepanelen op dak. Elke pagina is geoptimaliseerd voor de zoekterm die klanten gebruiken. Inclusief portfolio met voor/na foto's van je dakprojecten.", keywords: ["daklekkage reparatie", "dakrenovatie", "plat dak", "pannendak", "dakisolatie"] },
        { title: "Spoed-vindbaar in Google Maps", description: "Wij optimaliseren je Google Mijn Bedrijf profiel zodat je verschijnt bij 'dakdekker in de buurt' en 'dakdekker spoed [stad]'. Inclusief correcte categorieën, werkgebied, diensten en wekelijkse updates met foto's van je projecten.", keywords: ["dakdekker in de buurt", "dakdekker spoed", "google maps"] },
        { title: "Automatische reviews na elke klus", description: "Na afloop van een dakproject sturen wij automatisch een reviewverzoek. Bij dakwerk is klanttevredenheid hoog - die reviews hoef je alleen maar te vangen. Ons systeem doet het voor je, op de automatische piloot.", keywords: ["dakdekker reviews", "klanttevredenheid", "google reviews"] },
        { title: "Direct contact bij gemist telefoontje", description: "Sta je op het dak en kun je niet opnemen? Binnen seconden ontvangt de beller een SMS: 'Bedankt voor je telefoontje. Ik sta op dit moment op een klus en bel je zo terug.' Die lead is bewaard.", keywords: ["gemiste oproep", "sms", "lead bewaren"] },
      ],
    },
    industryContent: {
      sectionTitle: "Online marketing voor dakdekkers: zo werkt het in 2026",
      paragraphs: [
        "De dakdekkerbranche in Nederland groeit, mede door strengere isolatie-eisen, verduurzaming en het ouder worden van daken uit de jaren '60-'80. Tegelijkertijd is de concurrentie flink toegenomen - op Werkspot staan per regio soms 20+ dakdekkers die strijden om dezelfde leads.",
        "Wat veel dakdekkers niet beseffen: het grootste deel van de klanten die via Google zoeken, klikt op de eerste drie resultaten in het kaartblok (Google Maps). Bedrijven met 30+ reviews, een volledige profielbeschrijving en een gekoppelde website domineren deze positie - ongeacht hoe lang ze al bestaan.",
        "Spoedreparaties (daklekkage, stormschade, kapotte dakgoten) zijn de meest waardevolle zoekopdrachten. Iemand met een lekkend dak zoekt niet op drie platforms - die belt de eerste betrouwbare dakdekker die hij vindt. Met een geoptimaliseerde website en sterke reviews ben jij dat.",
        "Voor grotere projecten zoals dakrenovatie, isolatie of zonnepanelen zien we dat klanten gemiddeld 3-4 websites bezoeken voordat ze contact opnemen. Een professionele website met portfolio, duidelijke prijsindicaties en klantreviews maakt hier het verschil tussen wel of niet gebeld worden.",
      ],
    },
    comparison: {
      sectionTitle: "Aannemer Systeem vs. alternatieven voor dakdekkers",
      rows: [
        { aspect: "Kosten per lead", werkspot: "€20-€40 per lead, veel no-shows", bureau: "€800-€2500/maand + opstart", groeisysteem: "€279/maand, onbeperkte leads" },
        { aspect: "Spoed-zichtbaarheid", werkspot: "Geen prioriteit bij urgente zoekopdrachten", bureau: "Afhankelijk van hun SEO-inspanning", groeisysteem: "Google Maps optimalisatie inbegrepen" },
        { aspect: "Portfolio / Projectfoto's", werkspot: "Beperkte mogelijkheden", bureau: "Vaak extra kosten voor updates", groeisysteem: "Onbeperkt, makkelijk zelf toevoegen" },
        { aspect: "Reviews automatisering", werkspot: "Platform-eigen reviews", bureau: "Meestal niet inbegrepen", groeisysteem: "Volledig automatisch naar Google" },
        { aspect: "Opzettijd", werkspot: "Direct maar geen eigen controle", bureau: "4-12 weken", groeisysteem: "Live binnen 7 dagen" },
      ],
    },
    results: {
      sectionTitle: "Resultaten voor dakdekkersbedrijven",
      items: [
        { metric: "#1 in Google Maps", description: "Voor 'dakdekker [stad]' binnen 10 weken" },
        { metric: "Van 5 naar 62 reviews", description: "In 6 maanden, automatisch verzameld" },
        { metric: "12 nieuwe aanvragen/maand", description: "Organisch, zonder advertentiekosten" },
      ],
    },
    faqs: [
      { question: "Hoeveel kost een website voor een dakdekkersbedrijf?", answer: "Bij Aannemer Systeem betaal je €279/maand voor een complete website met alle diensten uitgelicht, portfolio, lokale SEO, reviews automatisering en lead opvolging. Geen opstart- of ontwikkelkosten. Traditionele bureaus rekenen €4.000-€10.000 voor een vergelijkbare website, plus maandelijkse kosten." },
      { question: "Hoe snel word ik gevonden als dakdekker in Google?", answer: "Google Maps resultaten reageren vaak al binnen 2-4 weken op optimalisaties en nieuwe reviews. De organische zoekresultaten (onder de kaart) duren gemiddeld 2-4 maanden. Voor spoed-gerelateerde zoekwoorden zoals 'daklekkage reparatie' kan het sneller gaan omdat er minder concurrentie op deze specifieke termen is." },
      { question: "Werkt dit ook voor een eenmanszaak dakdekker?", answer: "Juist dan. Als eenmanszaak heb je geen marketingafdeling en beperkt budget. Ons systeem is ontworpen om met minimale tijdsinvestering (5 minuten per dag) maximaal resultaat te behalen. De automatische reviews, gemiste oproep-opvolging en lokale SEO draaien op de achtergrond terwijl jij op het dak staat." },
      { question: "Kan ik meerdere werkgebieden targeten?", answer: "Ja. Wij optimaliseren je website en Google profiel voor je volledige werkgebied - niet alleen je vestigingsplaats. Voor een dakdekker in Utrecht betekent dat ook zichtbaarheid in De Bilt, Houten, Nieuwegein en andere omliggende gemeenten." },
      { question: "Wat als ik al een website heb?", answer: "Dan beoordelen we eerst je huidige website op snelheid, SEO en conversie. Vaak is het effectiever om een nieuwe website te maken binnen ons systeem, omdat alles dan direct gekoppeld is aan de reviews automatisering, lead opvolging en analytics. Je bestaande domein nemen we gewoon over." },
      { question: "Hoe verschilt dit van een Werkspot profiel?", answer: "Op Werkspot betaal je per lead en concurreer je met andere dakdekkers om dezelfde klant. Met Aannemer Systeem werk je aan je eigen online merk. Klanten die via Google op jouw website komen, hebben jou al gekozen op basis van je reviews, portfolio en website. De conversie is hoger en de kosten per klant lager." },
    ],
    relatedTrades: [
      { label: "Schilders", slug: "schilders" },
      { label: "Loodgieters", slug: "loodgieters" },
      { label: "Isolatiebedrijven", slug: "isolatiebedrijven" },
      { label: "Klusbedrijven", slug: "klusbedrijven" },
    ],
    cta: {
      headline: "Klaar om de eerste dakdekker te zijn die ze bellen?",
      subheadline: "Plan een gratis gesprek en we laten zien hoe het systeem werkt voor dakdekkersbedrijven in jouw regio.",
      buttonText: "Boek een Demo",
      buttonUrl: "/demo",
    },
  },
  loodgieters: {
    slug: "loodgieters",
    singular: "loodgieter",
    plural: "loodgieters",
    bedrijf: "loodgietersbedrijf",
    metaTitle: "Website & Marketing voor Loodgieters | Meer Klanten als Loodgieter - Aannemer Systeem",
    metaDescription: "Complete marketing systeem voor loodgietersbedrijven: professionele website, lokale SEO, automatische reviews. Start binnen 7 dagen. Vanaf €279/maand.",
    hero: {
      badge: "Speciaal voor Loodgietersbedrijven",
      headline: "Meer Opdrachten als Loodgieter - Van Spoed tot Verbouwing",
      subheadline: "Lekkage, verstopt riool of nieuwe badkamer - klanten zoeken online. Wij zorgen dat ze jou vinden en direct contact opnemen.",
      stats: [
        { value: "85%", label: "van spoedopdrachten start met een Google zoekopdracht" },
        { value: "4.7+", label: "gemiddelde reviewscore nodig om te concurreren" },
        { value: "€279", label: "per maand, alles inbegrepen" },
      ],
    },
    problems: {
      sectionTitle: "Herken je dit als loodgieter?",
      items: [
        { title: "Alleen spoed, weinig gepland werk", description: "Je leeft van telefoontjes voor lekkages en verstoppingen. Maar de grotere klussen - badkamerrenovaties, cv-installaties, nieuwbouw - gaan naar bedrijven die beter vindbaar zijn online." },
        { title: "Telefoontjes die je mist op de klus", description: "Als loodgieter sta je met je handen in de leidingen. Telefoon opnemen is niet altijd mogelijk. Elke gemiste oproep is potentieel een klant van €500+ die naar de concurrent gaat." },
        { title: "Concurrentie van platforms groeit", description: "Zoofy, Werkspot en zelfs Bol.com bieden loodgietersdiensten aan. Je betaalt per lead of werkt voor een marge die niet de moeite waard is. Ondertussen werk je niks op voor jezelf." },
        { title: "Geen tijd om reviews te verzamelen", description: "Je weet dat reviews cruciaal zijn - een loodgieter met 50 reviews wint altijd van eentje met 3. Maar na een klus wil je door naar de volgende, niet achter reviews aanzitten." },
      ],
    },
    solution: {
      sectionTitle: "Hoe wij loodgietersbedrijven laten groeien",
      intro: "Loodgieterswerk is 50% spoed, 50% gepland. Ons systeem vangt beide: je bent de eerste die gevonden wordt bij nood, én de professional die klanten kiezen voor hun verbouwing.",
      items: [
        { title: "Website per dienst geoptimaliseerd", description: "Losse pagina's voor lekkage, riool ontstoppen, badkamer renovatie, cv-ketel onderhoud, waterleiding aanleggen en sanitair plaatsen. Elke pagina rankt apart in Google, zodat je vindbaar bent voor elke specifieke zoekopdracht.", keywords: ["lekkage verhelpen", "riool ontstoppen", "badkamer renovatie", "cv-ketel onderhoud"] },
        { title: "24/7 vindbaar voor spoed", description: "Bij 'loodgieter spoed' of 'lekkage verhelpen [stad]' moet jij bovenaan staan. Wij optimaliseren je Google profiel voor spoedzoekopdrachten, inclusief openingstijden, directe bel-knop en spoedtarieven.", keywords: ["loodgieter spoed", "24/7 loodgieter", "noodgeval"] },
        { title: "Automatisch reviewverzoek na elke klus", description: "Klant geholpen met een lekkage? Binnen 2 uur ontvangt hij een vriendelijk verzoek om een review achter te laten. Tevreden klanten (en dat zijn de meeste bij spoed) laten graag een review achter als je het makkelijk maakt.", keywords: ["google reviews loodgieter", "online reputatie"] },
        { title: "Geen lead meer kwijt", description: "Gemist telefoontje? Automatisch SMS terug. Formulier ingevuld op je website? Direct notificatie op je telefoon plus automatisch opvolgbericht. De klant voelt zich gehoord, jij verliest geen omzet.", keywords: ["lead opvolging", "sms terugbellen", "automatisering"] },
      ],
    },
    industryContent: {
      sectionTitle: "Marketing voor loodgieters: wat werkt in 2026?",
      paragraphs: [
        "De loodgieterbranche in Nederland heeft een uniek voordeel: vraag is er het hele jaar door. Van bevroren leidingen in de winter tot badkamerrenovaties in het voorjaar - er is altijd werk. Het probleem is niet de vraag, maar de vindbaarheid.",
        "Uit onderzoek blijkt dat 85% van de consumenten bij een loodgietersprobleem als eerste naar Google grijpt. 'Loodgieter in de buurt' is één van de meest gezochte lokale diensten. Toch heeft het merendeel van de loodgieters geen eigen website of een verouderde site die niet vindbaar is.",
        "Het kaartresultaat in Google (de 'Local Pack') is voor loodgieters het belangrijkste strijdveld. Hier worden de top 3 bedrijven getoond met reviews, afstand en een directe bel-knop. Bedrijven met 30+ reviews, een volledig profiel en regelmatige activiteit domineren deze posities.",
        "Een groeiende trend is dat klanten voor grotere projecten (badkamerrenovatie, complete sanitairleidingen) 4-5 websites bezoeken voordat ze contact opnemen. Portfolio's met foto's van eerder werk, duidelijke prijsindicaties en sterke reviews zijn doorslaggevend.",
      ],
    },
    comparison: {
      sectionTitle: "Aannemer Systeem vs. alternatieven voor loodgieters",
      rows: [
        { aspect: "Kosten", werkspot: "€15-€35 per lead", bureau: "€600-€2000/maand", groeisysteem: "€279/maand vast" },
        { aspect: "Spoed-zichtbaarheid", werkspot: "Je bent één van velen", bureau: "Kan, maar aparte meerprijs", groeisysteem: "Google Maps spoed-optimalisatie inbegrepen" },
        { aspect: "Lead kwaliteit", werkspot: "Gedeeld met concurrenten", bureau: "Exclusief maar duur", groeisysteem: "Exclusief, klant kiest jou" },
        { aspect: "Reviews", werkspot: "Op platform, niet op Google", bureau: "Niet standaard", groeisysteem: "Automatisch naar Google" },
        { aspect: "Opzettijd", werkspot: "Direct", bureau: "6-12 weken", groeisysteem: "7 dagen" },
      ],
    },
    results: {
      sectionTitle: "Resultaten voor loodgietersbedrijven",
      items: [
        { metric: "Van 8 naar 74 reviews", description: "In 5 maanden, volledig automatisch" },
        { metric: "#1 voor 'loodgieter [stad]'", description: "In Google Maps binnen 8 weken" },
        { metric: "15+ aanvragen per maand", description: "Mix van spoed en gepland werk" },
      ],
    },
    faqs: [
      { question: "Hoeveel kost online marketing voor een loodgietersbedrijf?", answer: "Bij Aannemer Systeem betaal je €279/maand voor alles: website, lokale SEO, reviews automatisering en lead opvolging. Geen opstart- of extra kosten. Vergelijk dat met Werkspot waar je €15-€35 per lead betaalt - bij 10 leads per maand ben je al duurder uit, met minder controle." },
      { question: "Hoe word ik als loodgieter gevonden bij spoedopdrachten?", answer: "Het belangrijkste is je Google Mijn Bedrijf profiel. Wij optimaliseren dit voor spoed-gerelateerde zoekwoorden, stellen je 24/7 beschikbaarheid in, en zorgen dat je bel-knop direct zichtbaar is. Gecombineerd met sterke reviews verschijn je in het Google Maps kaartblok bij spoedzoekopdrachten." },
      { question: "Ik heb al een Werkspot profiel. Heb ik dit nog nodig?", answer: "Werkspot kan prima naast ons systeem bestaan. Het verschil: op Werkspot concurreer je op prijs met andere loodgieters om dezelfde lead. Via je eigen website komen klanten die jou al vertrouwen op basis van je reviews en portfolio. De conversieratio is 3-5x hoger." },
      { question: "Kan ik als eenmanszaak concurreren met grotere loodgietersbedrijven?", answer: "Absoluut. In lokale zoekresultaten telt je bedrijfsgrootte niet - je reviewscore, profielkwaliteit en relevantie voor de zoekopdracht wel. Een eenmanszaak met 40 reviews en een goede website verslaat een groot bedrijf met 5 reviews en een verouderde site." },
      { question: "Wat als ik geen foto's heb van mijn werk?", answer: "We helpen je op weg. Begin simpel: maak met je telefoon een voor/na foto bij elke klus. Zelfs simpele foto's van een gerepareerde lekkage of een nieuwe kraan maken verschil. Wij zorgen dat deze op de juiste manier op je website en Google profiel komen." },
      { question: "Hoe lang duurt het voordat ik resultaten zie?", answer: "Google Maps resultaten verbeteren vaak al binnen 2-4 weken na optimalisatie en de eerste batch reviews. Organische zoekresultaten duren 2-4 maanden. De gemiste-oproep-SMS en review automatisering werken vanaf dag 1." },
    ],
    relatedTrades: [
      { label: "Dakdekkers", slug: "dakdekkers" },
      { label: "Elektriciens", slug: "elektriciens" },
      { label: "Klusbedrijven", slug: "klusbedrijven" },
      { label: "Badkamerrenovatie", slug: "badkamerrenovatie" },
    ],
    cta: {
      headline: "Klaar om de loodgieter te zijn die ze als eerste bellen?",
      subheadline: "Plan een gratis gesprek en we laten zien hoe ons systeem werkt voor loodgietersbedrijven in jouw regio.",
      buttonText: "Boek een Demo",
      buttonUrl: "/demo",
    },
  },
  stukadoors: {
    slug: "stukadoors",
    singular: "stukadoor",
    plural: "stukadoors",
    bedrijf: "stukadoorsbedrijf",
    metaTitle: "Website & Marketing voor Stukadoors | Meer Klanten als Stukadoor - Aannemer Systeem",
    metaDescription: "Marketing systeem voor stukadoorsbedrijven: professionele website, lokale SEO en automatische reviews. Word de stukadoor die klanten kiezen.",
    hero: {
      badge: "Speciaal voor Stukadoorsbedrijven",
      headline: "Meer Stukadoorsklussen - Door Online Zichtbaarheid",
      subheadline: "Van sierpleister tot wanden glad maken: klanten zoeken online naar een stukadoor. Wij zorgen dat jouw bedrijf bovenaan staat.",
      stats: [
        { value: "70%", label: "van stukadoors heeft geen of een verouderde website" },
        { value: "€1.800", label: "gemiddelde waarde van een stukadoorsklus" },
        { value: "7", label: "dagen en je hele systeem is live" },
      ],
    },
    problems: {
      sectionTitle: "Herken je dit als stukadoor?",
      items: [
        { title: "Afhankelijk van onderaanneming", description: "Je werkt veel als onderaannemer voor andere aannemers, maar wilt meer eigen klanten. Particulieren die rechtstreeks bij jou aankloppen betalen beter en zijn leuker werk." },
        { title: "Je werk spreekt voor zich, maar niemand ziet het", description: "Je levert prachtig stucwerk af, maar hebt geen portfolio online. Potentiële klanten kunnen niet zien wat je kunt voordat ze contact opnemen." },
        { title: "Onduidelijk wat marketing kost en oplevert", description: "Je hebt gehoord van SEO, Google Ads en social media maar weet niet waar je moet beginnen. Het voelt als geld in een bodemloze put gooien." },
        { title: "Reviews vragen bij stucwerk is lastig", description: "Bij stukadoorswerk ben je vaak onderdeel van een groter project. De klant ziet het eindresultaat pas weken later als alles geschilderd is. Dan is het moment voor een review al voorbij." },
      ],
    },
    solution: {
      sectionTitle: "Hoe wij stukadoorsbedrijven laten groeien",
      intro: "Stukadoorswerk is visueel. Klanten willen zien wat je kunt. Ons systeem maakt het makkelijk om je werk te tonen én om gevonden te worden door de juiste klanten.",
      items: [
        { title: "Portfolio-website die je vakmanschap toont", description: "Een website met pagina's per dienst: spackspuitwerk, sierpleister, betonlook, stucwerk glad, renovlies en scheurherstel. Met een visueel portfolio dat je makkelijk vanuit je telefoon kunt bijwerken met nieuwe projectfoto's.", keywords: ["spackspuitwerk", "sierpleister", "betonlook", "stucwerk glad", "renovlies"] },
        { title: "Vindbaar voor stukadoor-zoekopdrachten", description: "Wij optimaliseren je vindbaarheid voor 'stukadoor [stad]', 'wanden laten stucen', 'sierpleister aanbrengen' en vergelijkbare termen. Plus je Google Mijn Bedrijf profiel met de juiste categorieën en diensten.", keywords: ["stukadoor zoeken", "wanden stucen", "google mijn bedrijf"] },
        { title: "Reviews op het juiste moment", description: "Wij sturen het reviewverzoek op het moment dat jij aangeeft dat de klus klaar is - niet automatisch na een vast aantal dagen. Zo vraag je om feedback wanneer de klant het resultaat net gezien heeft en enthousiast is.", keywords: ["reviewtiming", "klanttevredenheid", "google reviews stukadoor"] },
        { title: "Professioneel overkomen bij particulieren", description: "Particuliere klanten willen zekerheid. Een professionele website met reviews, portfolio en duidelijke contactmogelijkheden geeft dat vertrouwen. Zo win je de klus boven de concurrent die alleen een telefoonnummer heeft.", keywords: ["professionele uitstraling", "vertrouwen", "particuliere klanten"] },
      ],
    },
    industryContent: {
      sectionTitle: "Online marketing voor stukadoors: de kansen in 2026",
      paragraphs: [
        "De stukadoorsbranche is een van de minst gedigitaliseerde vakgebieden. Dat klinkt als een nadeel, maar het is juist een enorme kans: de concurrentie online is laag. Met een goede website en 20 Google reviews ben je in veel steden al de best vindbare stukadoor.",
        "Zoekvolumes voor stukadoors-gerelateerde termen groeien. 'Stukadoor in de buurt', 'wanden glad laten maken', 'sierpleister kosten' - dit zijn allemaal zoekopdrachten van mensen die actief op zoek zijn naar een vakman. En omdat weinig stukadoors investeren in online marketing, is de concurrentie een fractie van wat schilders of loodgieters ervaren.",
        "Een bijzondere kans ligt in trendy afwerkingen zoals betonlook, microcement en kaleiwerk. Deze termen worden steeds vaker gezocht door huiseigenaren die inspiratie hebben opgedaan op Pinterest of Instagram. Een website met mooie portfolio-foto's van dit type werk trekt precies de klanten aan die bereid zijn meer te betalen voor kwaliteit.",
        "Voor stukadoors die nu voornamelijk als onderaannemer werken, is een eigen website de eerste stap naar meer directe particuliere klanten. Het gemiddelde project voor een particulier (complete woning stucen) ligt al snel boven de €2.000 - een paar extra klanten per maand maakt een significant verschil.",
      ],
    },
    comparison: {
      sectionTitle: "Aannemer Systeem vs. alternatieven voor stukadoors",
      rows: [
        { aspect: "Kosten", werkspot: "€10-€25 per lead", bureau: "€500-€1500/maand", groeisysteem: "€279/maand vast" },
        { aspect: "Portfolio mogelijkheden", werkspot: "Beperkt, geen eigen website", bureau: "Website op maat, wel duur", groeisysteem: "Visuele portfolio, makkelijk bij te werken" },
        { aspect: "Vindbaar voor niche-afwerkingen", werkspot: "Geen controle over categorieën", bureau: "Mogelijk, afhankelijk van bureau", groeisysteem: "Pagina per afwerking (betonlook, sierpleister, etc.)" },
        { aspect: "Reviews", werkspot: "Werkspot-reviews, niet Google", bureau: "Niet standaard", groeisysteem: "Automatisch, flexibele timing" },
        { aspect: "Opzettijd", werkspot: "Direct", bureau: "4-8 weken", groeisysteem: "7 dagen" },
      ],
    },
    results: {
      sectionTitle: "Resultaten voor stukadoorsbedrijven",
      items: [
        { metric: "Pagina 1 binnen 6 weken", description: "Voor 'stukadoor [stad]' in Google Maps" },
        { metric: "Van 0 naar 28 reviews", description: "In 3 maanden, vanaf nul opgebouwd" },
        { metric: "5 directe particuliere klanten/maand", description: "Zonder Werkspot of onderaanneming" },
      ],
    },
    faqs: [
      { question: "Is online marketing zinvol voor stukadoors?", answer: "Zeer zinvol. Juist omdat weinig stukadoors investeren in online marketing, is de concurrentie laag. In veel steden zijn er minder dan 5 stukadoors met een goede website en Google reviews. Met ons systeem sta je binnen weken op pagina 1 voor 'stukadoor [jouw stad]'." },
      { question: "Ik werk voornamelijk als onderaannemer. Helpt dit mij?", answer: "Ja. Een eigen website en Google profiel trekken particuliere klanten aan die direct bij jou willen werken. De marge is hoger en je bent niet afhankelijk van één opdrachtgever. Je kunt onderaanneming en directe klanten prima combineren." },
      { question: "Hoeveel kost een website voor een stukadoorsbedrijf?", answer: "Bij ons €279/maand, alles inbegrepen. Geen opstartkosten. Een stukadoorswebsite bij een traditioneel bureau kost €2.500-€6.000 eenmalig plus €50-€100/maand hosting. Plus dan heb je nog geen reviews automatisering of SEO." },
      { question: "Hoe belangrijk zijn portfolio-foto's voor stukadoors?", answer: "Essentieel. Stukadoorswerk is visueel - klanten willen het resultaat zien voordat ze kiezen. Goede voor/na foto's van glad stucwerk, sierpleister of betonlook projecten overtuigen meer dan elke tekst. Ons systeem maakt het makkelijk om foto's toe te voegen vanaf je telefoon." },
      { question: "Werkt dit ook voor specialistische afwerkingen?", answer: "Juist daarvoor. Wij maken aparte pagina's voor betonlook, microcement, kaleiwerk, sierpleister en andere niche-afwerkingen. Deze pagina's ranken vaak snel omdat er nauwelijks concurrentie op is, en trekken klanten aan die bereid zijn meer te betalen voor kwaliteit." },
    ],
    relatedTrades: [
      { label: "Schilders", slug: "schilders" },
      { label: "Tegelzetters", slug: "tegelzetters" },
      { label: "Klusbedrijven", slug: "klusbedrijven" },
      { label: "Badkamerrenovatie", slug: "badkamerrenovatie" },
    ],
    cta: {
      headline: "Klaar om meer particuliere stukadoorsklussen binnen te halen?",
      subheadline: "Plan een gratis gesprek en ontdek hoe ons systeem stukadoorsbedrijven helpt groeien.",
      buttonText: "Boek een Demo",
      buttonUrl: "/demo",
    },
  },
  hoveniers: {
    slug: "hoveniers",
    singular: "hovenier",
    plural: "hoveniers",
    bedrijf: "hoveniersbedrijf",
    metaTitle: "Website & Marketing voor Hoveniers | Meer Klanten als Hovenier - Aannemer Systeem",
    metaDescription: "Marketing systeem voor hoveniersbedrijven: professionele website met portfolio, lokale SEO en automatische reviews. Meer tuinklanten binnenhalen.",
    hero: {
      badge: "Speciaal voor Hoveniersbedrijven",
      headline: "Meer Tuinklussen Binnenhalen - Het Hele Jaar Door",
      subheadline: "Tuinaanleg, onderhoud of complete redesign: huiseigenaren zoeken online naar een hovenier. Wij zorgen dat ze jouw werk zien en jou bellen.",
      stats: [
        { value: "€4.500+", label: "gemiddelde waarde tuinaanleg project" },
        { value: "3-5", label: "websites die een klant bezoekt voor een keuze" },
        { value: "7", label: "dagen en je complete systeem staat live" },
      ],
    },
    problems: {
      sectionTitle: "Herken je dit als hovenier?",
      items: [
        { title: "Het voorjaar is druk, de winter is stil", description: "Je agenda loopt over in april-september, maar in de wintermaanden komen er nauwelijks aanvragen binnen. Een constante online aanwezigheid zorgt voor aanvragen het hele jaar door - ook voor winterklussen zoals snoeiwerk en bestrating." },
        { title: "Klanten vergelijken uitgebreid", description: "Bij tuinprojecten van €3.000+ bezoeken klanten meerdere websites. Als jouw online presentatie zwakker is dan de concurrent, verlies je de opdracht - ook al lever je beter werk." },
        { title: "Portfolio bijhouden kost tijd", description: "Je maakt prachtige tuinen maar het vastleggen en online zetten van foto's schiet er steeds bij in. Ondertussen mist je de kans om nieuwe klanten te overtuigen met je eerder werk." },
        { title: "Social media kost meer dan het oplevert", description: "Je post af en toe iets op Instagram of Facebook, maar het levert nauwelijks klanten op. De mensen die je bereikt zijn niet op zoek naar een hovenier - ze scrollen gewoon voorbij." },
      ],
    },
    solution: {
      sectionTitle: "Hoe wij hoveniersbedrijven laten groeien",
      intro: "Hoveniers leven van visueel werk. Ons systeem draait om het tonen van je vakmanschap aan mensen die actief op zoek zijn naar een hovenier - niet aan willekeurige social media volgers.",
      items: [
        { title: "Visuele website met projectgalerij", description: "Een website met ruimte voor tuinontwerp, tuinaanleg, tuinonderhoud, bestrating, schuttingen, vijvers en beplanting. Grote voor/na foto's die je vakmanschap laten zien. Geoptimaliseerd voor 'hovenier [stad]' en dienst-specifieke zoektermen.", keywords: ["tuinaanleg", "tuinonderhoud", "bestrating", "schuttingen", "tuinontwerp"] },
        { title: "Lokale SEO voor seizoen én off-season", description: "In het voorjaar zoeken mensen naar 'tuinaanleg'. In het najaar naar 'tuin winterklaar maken' en 'snoeiwerk'. Wij optimaliseren je vindbaarheid voor het hele jaar, zodat je agenda ook in rustige maanden gevuld raakt.", keywords: ["tuinaanleg laten doen", "tuin winterklaar", "hovenier in de buurt"] },
        { title: "Reviews die het verschil maken", description: "Bij hoveniersopdrachten wegen reviews zwaar - klanten laten iemand in hun tuin werken die ze vertrouwen. Ons automatisch reviewsysteem stuurt na oplevering een verzoek. Tevreden klanten delen graag een foto van hun nieuwe tuin erbij.", keywords: ["hovenier reviews", "klantervaringen", "google beoordeling"] },
        { title: "Seizoensgebonden marketing campagnes", description: "Met één klik activeer je campagnes voor het voorjaar ('nieuwe tuin laten aanleggen?'), de zomer ('tuinonderhoud abonnement') of het najaar ('tuin winterklaar'). Wij maken deze campagnes voor je, jij klikt op start.", keywords: ["seizoensmarketing", "tuinonderhoud abonnement", "marketing campagnes"] },
      ],
    },
    industryContent: {
      sectionTitle: "Marketing voor hoveniers: wat werkt in 2026?",
      paragraphs: [
        "De hovenierbranche groeit in Nederland. Steeds meer huiseigenaren investeren in hun tuin - niet alleen als buitenruimte maar als verlengstuk van hun woonkamer. De gemiddelde projectwaarde stijgt, maar daarmee ook de verwachtingen van klanten.",
        "Hoveniers die een professionele website hebben met een sterke visuele portfolio winnen consistent meer offertes dan collega's zonder. Bij projecten boven de €3.000 bezoeken klanten gemiddeld 3-5 websites. De hovenier met de mooiste projectfoto's en de beste reviews krijgt de eerste drie telefoontjes.",
        "Een onderbenut kanaal voor hoveniers is Google Afbeeldingen. Wanneer iemand zoekt naar 'kleine tuin ideeën' of 'bestrating tuin modern', toont Google vaak afbeeldingen van hovenierwebsites. Goede projectfoto's met alt-teksten trekken klanten aan in de inspiratiefase - nog vóórdat ze actief een hovenier zoeken.",
        "Seizoensmarketing is cruciaal. De meeste hoveniers zijn alleen zichtbaar wanneer het druk is (voorjaar/zomer). Maar de wintermaanden zijn juist de periode waarin klanten plannen maken voor het volgende seizoen. Door het hele jaar content te publiceren bouw je autoriteit op die zich vertaalt in voorjaarsopdrachten.",
      ],
    },
    comparison: {
      sectionTitle: "Aannemer Systeem vs. alternatieven voor hoveniers",
      rows: [
        { aspect: "Kosten", werkspot: "€15-€30 per lead", bureau: "€800-€2500/maand", groeisysteem: "€279/maand vast" },
        { aspect: "Visuele portfolio", werkspot: "Beperkt, geen eigen website", bureau: "Op maat maar statisch", groeisysteem: "Visuele galerij, zelf bijwerken" },
        { aspect: "Seizoensmarketing", werkspot: "Niet beschikbaar", bureau: "Aparte meerprijs", groeisysteem: "Seizoenscampagnes met één klik" },
        { aspect: "Reviews", werkspot: "Platform-eigen", bureau: "Niet standaard", groeisysteem: "Automatisch naar Google" },
        { aspect: "Opzettijd", werkspot: "Direct", bureau: "6-12 weken", groeisysteem: "7 dagen" },
      ],
    },
    results: {
      sectionTitle: "Resultaten voor hoveniersbedrijven",
      items: [
        { metric: "32 nieuwe aanvragen in het voorjaar", description: "Via website, zonder advertentiekosten" },
        { metric: "Van 6 naar 45 reviews", description: "In 5 maanden, automatisch verzameld" },
        { metric: "Ook winterwerk binnengehaald", description: "Door seizoensgerichte SEO content" },
      ],
    },
    faqs: [
      { question: "Is een website voor hoveniers echt nodig naast Instagram?", answer: "Ja. Instagram is goed voor inspiratie en naamsbekendheid, maar het bereikt voornamelijk mensen die niet actief zoeken naar een hovenier. Een website bereikt mensen op het moment dat ze 'hovenier [stad]' googelen - dat zijn klanten met een concreet plan en budget. De conversieratio is 10-20x hoger." },
      { question: "Hoe trek ik als hovenier klanten in de winter?", answer: "Door het hele jaar zichtbaar te zijn. Wij optimaliseren je website voor wintergerelateerde zoektermen: 'tuin winterklaar maken', 'bomen snoeien winter', 'tuinonderhoud abonnement'. Daarnaast activeer je met één klik seizoenscampagnes naar je bestaande klanten voor winterwerk." },
      { question: "Hoeveel kost een professionele hovenierwebsite?", answer: "Bij ons €279/maand, alles inbegrepen: website, portfolio, SEO, reviews en marketing tools. Een op maat gemaakte hovenierwebsite bij een bureau kost €3.000-€8.000 plus maandelijkse kosten." },
      { question: "Hoe belangrijk zijn voor/na foto's voor hoveniers?", answer: "Ze zijn het belangrijkste overtuigingsmiddel dat je hebt. Een goed uitgevoerd voor/na project vertelt meer dan duizend woorden tekst. Maak bij elke klus een 'voor' foto aan het begin en een 'na' foto bij oplevering. Ons systeem maakt het makkelijk om deze toe te voegen." },
      { question: "Kan ik hiermee ook tuinonderhoud-abonnementen vullen?", answer: "Ja. Een aparte pagina voor 'tuinonderhoud abonnement' of 'tuinman vaste afspraak' trekt klanten aan die structureel behoefte hebben. Gecombineerd met seizoenscampagnes naar je bestaande klantenbestand vul je je onderhoudscapaciteit zonder extra advertentiekosten." },
    ],
    relatedTrades: [
      { label: "Schilders", slug: "schilders" },
      { label: "Klusbedrijven", slug: "klusbedrijven" },
      { label: "Tegelzetters", slug: "tegelzetters" },
      { label: "Schoonmaakbedrijven", slug: "schoonmaakbedrijven" },
    ],
    cta: {
      headline: "Klaar om meer tuinprojecten binnen te halen?",
      subheadline: "Plan een gratis gesprek en ontdek hoe ons systeem hoveniersbedrijven helpt groeien - het hele jaar door.",
      buttonText: "Boek een Demo",
      buttonUrl: "/demo",
    },
  },
  // ━━ KLUSBEDRIJVEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  klusbedrijven: KLUSBEDRIJVEN_DATA,
  // ━━ TEGELZETTERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  tegelzetters: TEGELZETTERS_DATA,
  // ━━ ELEKTRICIENS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  elektriciens: ELEKTRICIENS_DATA,
  // ━━ TIMMERLIEDEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  timmerlieden: TIMMERLIEDEN_DATA,
  // ━━ SCHOONMAAKBEDRIJVEN ━━━━━━━━━━━━━━━━━━━━━━━━━━
  schoonmaakbedrijven: SCHOONMAAKBEDRIJVEN_DATA,
  // ━━ GLAZENWASSERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  glazenwassers: GLAZENWASSERS_DATA,
  // ━━ KEUKENMONTEURS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  keukenmonteurs: KEUKENMONTEURS_DATA,
  // ━━ BADKAMERRENOVATIE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  badkamerrenovatie: BADKAMERRENOVATIE_DATA,
  // ━━ ISOLATIEBEDRIJVEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  isolatiebedrijven: ISOLATIEBEDRIJVEN_DATA,
  // ━━ VERHUISBEDRIJVEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  verhuisbedrijven: VERHUISBEDRIJVEN_DATA,
  // ━━ HVAC ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  hvac: HVAC_DATA,
  // ━━ AANNEMERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  aannemers: AANNEMERS_DATA,
  // ━━ GEVELREINIGING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  gevelreiniging: GEVELREINIGING_DATA,
  // ━━ PARKETVLOEREN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  parketvloeren: PARKETVLOEREN_DATA,
  // ━━ BEGLAZING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  beglazing: BEGLAZING_DATA,
  // ━━ HEKWERK & POORTEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "hekwerk-poorten": HEKWERK_POORTEN_DATA,
  // ━━ RIOOLSERVICE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  rioolservice: RIOOLSERVICE_DATA,
  // ━━ BESTRATING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  bestrating: BESTRATING_DATA,
  // ━━ INTERIEURONTWERP ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  interieurontwerp: INTERIEURONTWERP_DATA,
  // ━━ ROLLUIKEN & ZONWERING ━━━━━━━━━━━━━━━━━━━━━━━
  "rolluiken-zonwering": ROLLUIKEN_ZONWERING_DATA,
  // ━━ BETON & CEMENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "beton-cement": BETON_CEMENT_DATA,
  // ━━ KOZIJNEN & RAMEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "kozijnen-ramen": KOZIJNEN_RAMEN_DATA,
  // ━━ VLOERLEGGER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  vloerlegger: VLOERLEGGER_DATA,
  // ━━ CV-KETEL MONTAGE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "cv-ketel-montage": CV_KETEL_MONTAGE_DATA,
  // ━━ METSELWERK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  metselwerk: METSELWERK_DATA,
  // ━━ VOEGWERK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  voegwerk: VOEGWERK_DATA,
  // ━━ DAKGOTEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  dakgoten: DAKGOTEN_DATA,
  // ━━ ONTRUIMING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ontruiming: ONTRUIMING_DATA,
  // ━━ WARMTEPOMP INSTALLATIE ━━━━━━━━━━━━━━━━━━━━━━
  "warmtepomp-installatie": WARMTEPOMP_INSTALLATIE_DATA,
  // ━━ DOMOTICA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  domotica: DOMOTICA_DATA,
  // ━━ OPRUIMSERVICE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  opruimservice: OPRUIMSERVICE_DATA,
  // ━━ ZONNEPANELEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  zonnepanelen: ZONNEPANELEN_DATA,
  // ━━ DAKKAPELLEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  dakkapellen: DAKKAPELLEN_DATA,
  // ━━ AIRCO INSTALLATEURS ━━━━━━━━━━━━━━━━━━━━━━━━━
  "airco-installateurs": AIRCO_INSTALLATEURS_DATA,
  // ━━ ASBESTSANERING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  asbestsanering: ASBESTSANERING_DATA,
  // ━━ VOCHTBESTRIJDING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  vochtbestrijding: VOCHTBESTRIJDING_DATA,
  // ━━ SCHOORSTEENVEGERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  schoorsteenvegers: SCHOORSTEENVEGERS_DATA,
  // ━━ MEUBELMAKERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  meubelmakers: MEUBELMAKERS_DATA,
  // ━━ ZWEMBADBOUWERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  zwembadbouwers: ZWEMBADBOUWERS_DATA,
  // ━━ SERREBOUWERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  serrebouwers: SERREBOUWERS_DATA,
  // ━━ BINNENHUISARCHITECTEN ━━━━━━━━━━━━━━━━━━━━━━━
  binnenhuisarchitecten: BINNENHUISARCHITECTEN_DATA,
  // ━━ KELDERBOUW ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  kelderbouw: KELDERBOUW_DATA,
  // ━━ GARAGEDEUREN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  garagedeuren: GARAGEDEUREN_DATA,
  // ━━ BEVEILIGINGSINSTALLATEURS ━━━━━━━━━━━━━━━━━━━
  beveiligingsinstallateurs: BEVEILIGINGSINSTALLATEURS_DATA,
  // ━━ RIETDEKKERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  rietdekkers: RIETDEKKERS_DATA,
  // ━━ AANBOUW & UITBOUW ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "aanbouw-uitbouw": AANBOUW_UITBOUW_DATA,
  // ━━ LAADPAAL INSTALLATEURS ━━━━━━━━━━━━━━━━━━━━━━
  "laadpaal-installateurs": LAADPAAL_INSTALLATEURS_DATA,
  // ━━ FUNDERINGSHERSTEL ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  funderingsherstel: FUNDERINGSHERSTEL_DATA,
  // ━━ TRAPLIFTEN & THUISLIFTEN ━━━━━━━━━━━━━━━━━━━━
  "trapliften-thuisliften": TRAPLIFTEN_THUISLIFTEN_DATA,
  // ━━ GIETVLOEREN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  gietvloeren: GIETVLOEREN_DATA,
};

export const TRADE_SLUGS = Object.keys(TRADE_PAGES);
