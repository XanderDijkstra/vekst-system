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
  slug: "malere",
  singular: "maler",
  plural: "malere",
  bedrijf: "malerfirma",
  metaTitle: "Nettside og markedsføring for malere | Flere kunder - Vekst Systemet",
  metaDescription: "Spesielt for malerfirmaer: en profesjonell nettside, automatiske anmeldelser og lokal SEO. Vi hjelper malere å få flere kunder uten styr.",
  hero: {
    badge: "Spesielt for malerfirmaer",
    headline: "Flere kunder som maler - uten markedsføringsstyr",
    subheadline: "Vi lager hele det digitale systemet slik at huseiere finner deg, stoler på deg og ringer. Du maler. Vi ordner resten.",
    stats: [
      { value: "78%", label: "av kundene søker etter en maler på nett" },
      { value: "3x", label: "flere henvendelser med en god Google-posisjon" },
      { value: "7", label: "dager og den nye nettsiden din er live" },
    ],
  },
  problems: {
    sectionTitle: "Kjenner du deg igjen som maler?",
    items: [
      { title: "Jungeltelegrafen avtar", description: "I årevis har du levd av anbefalinger, men nye kunder finner deg ikke på nett. Konkurrenter med en bedre nettside stjeler oppdragene dine." },
      { title: "Ingen tid til markedsføring", description: "Etter en dag på stillaset har du ikke energi til å holde på med nettsider, sosiale medier eller Google. Markedsføring føles som en ekstrajobb." },
      { title: "Dyre byråer, lite resultat", description: "Du har betalt for en nettside eller annonser tidligere, men det ga ingenting. Du vet ikke om det var byråets feil eller tilnærmingen." },
      { title: "Det er ubehagelig å be om anmeldelser", description: "Du vet at Google-anmeldelser er viktige, men du glemmer å spørre eller synes det er vanskelig. Imens har konkurrenten 50 flere." },
    ],
  },
  solution: {
    sectionTitle: "Slik får vi malerfirmaer til å vokse",
    intro: "Systemet vårt er spesielt laget for malere. Ingen standardmal - men en tilnærming som fungerer for din type kunde og din region.",
    items: [
      { title: "En nettside som selger", description: "Ikke bare et fint bilde. En nettside med tydelige tjenester (innvendig malerarbeid, utvendig malerarbeid, råteskade-reparasjon, tapetsering), arbeidsområdet ditt, og en enkel måte å ta kontakt på. Optimalisert slik at 'maler + [din by]' finner deg.", keywords: ["innvendig malerarbeid", "utvendig malerarbeid", "råteskade-reparasjon", "tapetsering"] },
      { title: "Lokal SEO som fungerer", description: "Vi optimaliserer Google Bedriftsprofil, skriver sider for hver tjeneste og sørger for at du blir funnet i din region. Ikke #1 i dag - men strukturell vekst i Google-søkeresultatene.", keywords: ["google bedriftsprofil", "lokal seo", "synlighet"] },
      { title: "Automatiske 5-stjerners anmeldelser", description: "Etter hver jobb sender vi automatisk en anmeldelsesforespørsel til kunden. Fornøyd? Rett til Google. Ikke fornøyd? Først til deg. Slik vokser poengsummen din uten at du trenger å tenke på det.", keywords: ["google-anmeldelser", "nettomdømme", "vurderinger"] },
      { title: "Tapt anrop? Automatisk melding tilbake", description: "Står du på stigen og kan ikke ta telefonen? Vi sender umiddelbart en SMS tilbake: 'Takk for at du ringte, jeg ringer deg tilbake så snart som mulig.' Slik mister du aldri en lead.", keywords: ["lead-oppfølging", "tapt anrop", "sms-automatisering"] },
    ],
  },
  industryContent: {
    sectionTitle: "Markedsføring for malere: hva fungerer i 2026?",
    paragraphs: [
      "Malerbransjen i Norge er konkurranseutsatt. Det er tusenvis av malerfirmaer aktive, og de fleste kundene starter søket på nett. Enten noen søker etter 'maler i nærheten', 'utvendig malerarbeid tilbud' eller 'få reparert råteskade' - hvis du ikke er synlig, går oppdraget til en konkurrent.",
      "Mange malere investerer i Mittanbud eller lignende plattformer. Der betaler du per lead, uansett om den leaden faktisk blir en kunde. Med egen nettside og lokal synlighet trekker du til deg kunder som spesifikt leter etter deg - gratis, hver måned på nytt.",
      "Google Bedriftsprofil er den viktigste markedsføringskanalen for malere. Når noen søker etter 'maler [by]', viser Google først kartresultatene. Firmaer med flere og bedre anmeldelser, en fullstendig profil og en koblet nettside rangerer høyere her. Dette er nettopp det systemet vårt automatiserer.",
      "I tillegg ser vi at malerfirmaer som regelmessig deler før/etter-bilder av prosjekter - på nettsiden og på Google Bedriftsprofil - rangerer betydelig bedre. Det viser håndverk og gir Google ferskt innhold å indeksere.",
    ],
  },
  comparison: {
    sectionTitle: "Hvorfor ikke bare Mittanbud eller et dyrt byrå?",
    rows: [
      { aspect: "Kostnad per lead", werkspot: "200-600 kr per lead, uavhengig av kvalitet", bureau: "6 000-22 000 kr/måned + oppstartskostnader", groeisysteem: "2 990 kr/måned fast, ubegrenset leads" },
      { aspect: "Eierskap til nettside", werkspot: "Ingen egen nettside", bureau: "Ofte låst i kontrakt", groeisysteem: "Din nettside, alltid tilgjengelig" },
      { aspect: "Automatisering av anmeldelser", werkspot: "Ikke tilgjengelig", bureau: "Sjelden inkludert", groeisysteem: "Helt automatisk" },
      { aspect: "Lokal SEO", werkspot: "Du konkurrerer med andre malere på plattformen", bureau: "Ofte ekstrakostnader", groeisysteem: "Inkludert og optimalisert" },
      { aspect: "Oppsettstid", werkspot: "Umiddelbart, men du har ingen kontroll", bureau: "4-12 uker", groeisysteem: "Live innen 7 dager" },
    ],
  },
  results: {
    sectionTitle: "Resultater for malerfirmaer",
    items: [
      { metric: "Fra 3 til 47 Google-anmeldelser", description: "På 4 måneder, helt automatisk" },
      { metric: "Side 1 i Google", description: "For 'maler [by]' innen 3 måneder" },
      { metric: "8 nye henvendelser per måned", description: "Via nettsiden, uten annonsekostnader" },
    ],
  },
  faqs: [
    { question: "Hvor mye koster en nettside for et malerfirma?", answer: "Hos Vekst Systemet betaler du 2 990 kr per måned for en komplett nettside inkludert hosting, vedlikehold, lokal SEO og markedsføringsautomatiseringer. Det er ingen oppstartskostnader eller utviklingskostnader. Nettsiden din er live innen 7 dager. Hos tradisjonelle byråer betaler du ofte 35 000-90 000 kr for en nettside, pluss månedlige hostingkostnader." },
    { question: "Hvordan får jeg flere kunder som maler via internett?", answer: "De tre viktigste stegene: (1) Sørg for en profesjonell nettside som er optimalisert for lokale søk som 'maler [din by]'. (2) Jobb aktivt med Google-anmeldelser - firmaer med 20+ anmeldelser og score over 4,5 får betydelig flere klikk. (3) Optimaliser Google Bedriftsprofil med bilder, tjenester og arbeidsområdet ditt. Systemet vårt automatiserer alle disse tre stegene." },
    { question: "Fungerer SEO virkelig for malerfirmaer?", answer: "Ja, og det er en av de mest kostnadseffektive måtene å skaffe kunder på. Når noen søker etter 'utvendig malerarbeid tilbud' eller 'maler i nærheten', har den personen et direkte behov for tjenesten din. I motsetning til sosiale medier eller flyers når du med SEO folk i det øyeblikket de leter etter en maler. Det tar 2-6 måneder å se resultater, men deretter er det en jevn strøm av gratis henvendelser." },
    { question: "Hva er forskjellen mellom Vekst Systemet og Mittanbud?", answer: "På Mittanbud betaler du per lead og konkurrerer direkte med andre malere om den samme kunden. Hos Vekst Systemet investerer du i din egen digitale tilstedeværelse. Kunder som kommer inn via nettsiden din har allerede valgt deg - de har lest anmeldelsene dine, sett arbeidet ditt og ringer akkurat deg. Konverteringsraten er derfor mye høyere og kostnaden per kunde lavere på lang sikt." },
    { question: "Hvor lang tid tar det før malerfirmaet mitt blir funnet i Google?", answer: "Dette avhenger av din nåværende digitale tilstedeværelse, konkurransen i regionen din og Google-anmeldelsespoengsummen din. I snitt ser kundene våre forbedring i lokale søkeresultater innen 2-4 måneder. For mindre konkurranseutsatte regioner kan det gå raskere. Google Bedriftsprofil-kartresultatet reagerer ofte allerede innen uker på optimaliseringer og nye anmeldelser." },
    { question: "Må jeg gjøre noe selv, eller ordnes alt for meg?", answer: "Vi ordner 95 % - nettsiden, SEO-en, automatiseringene og det tekniske vedlikeholdet. Det eneste vi ber om fra deg: send oss bilder av arbeidet ditt (før/etter), og bruk appen til å sende en anmeldelsesforespørsel etter en jobb med ett klikk. Det er bokstavelig talt to trykk på telefonen." },
  ],
  relatedTrades: [
    { label: "Takleggere", slug: "takleggere" },
    { label: "Pussere", slug: "pussere" },
    { label: "Altmuligfirmaer", slug: "altmuligmenn" },
    { label: "Gartnere", slug: "gartnere" },
  ],
  cta: {
    headline: "Klar til å hente inn flere malerjobber?",
    subheadline: "Bestill en gratis samtale, så viser vi hvordan systemet fungerer for malerfirmaer i din region.",
    buttonText: "Bestill en demo",
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
  malere: schildersData,
  takleggere: {
    slug: "takleggere",
    singular: "taktekker",
    plural: "takleggere",
    bedrijf: "takleggerfirma",
    metaTitle: "Nettside og markedsføring for takleggere | Flere kunder som taktekker - Vekst Systemet",
    metaDescription: "Profesjonell nettside og markedsføringssystem for takleggerfirmaer. Mer lokal synlighet, automatiske anmeldelser og leads. Live innen 7 dager.",
    hero: {
      badge: "Spesielt for takleggerfirmaer",
      headline: "Hente inn flere takjobber - uten å annonsere selv",
      subheadline: "Huseiere med tak som lekker, leter etter en taktekker nå. Vi sørger for at de finner deg, stoler på deg og ringer direkte.",
      stats: [
        { value: "92%", label: "av akuttsøk starter i Google" },
        { value: "28 000+ kr", label: "gjennomsnittlig oppdragsverdi takarbeid" },
        { value: "7", label: "dager og hele systemet ditt går" },
      ],
    },
    problems: {
      sectionTitle: "Kjenner du deg igjen som taktekker?",
      items: [
        { title: "Sesongtopper og -bunner", description: "I stormsesongen har du for mye arbeid, men i rolige perioder stilner telefonen. Du mister en jevn strøm av henvendelser fordi du ikke er synlig når folk faktisk søker." },
        { title: "Mittanbud spiser opp marginen din", description: "Du betaler 250-450 kr per lead på plattformer, og halvparten svarer ikke engang. Imens byr du mot tre andre takleggere på samme jobb. Plattformkostnadene stiger raskt." },
        { title: "Intet profesjonelt digitalt uttrykk", description: "Kunder med større prosjekter - takutskifting, isolasjon, solceller - vil se et firma med nettside, anmeldelser og portefølje. En Facebook-side er ikke nok for oppdrag på 55 000+ kr." },
        { title: "Akuttkunder ringer den første de finner", description: "Ved en lekkasje ringer noen den første taktekkeren som dukker opp i Google. Hvis det ikke er deg, er den kunden borte - selv om du er den bedre fagmannen." },
      ],
    },
    solution: {
      sectionTitle: "Slik får vi takleggerfirmaer til å vokse",
      intro: "Takarbeid haster. Kundene søker raskt og bestemmer seg raskt. Systemet vårt er designet for å vise deg som den første, og for å omdanne leaden direkte til en samtale.",
      items: [
        { title: "Nettside med alle tjenester fremhevet", description: "Egne sider for takleksjon-reparasjon, takrenovering, flatt tak, pannetak, takrenner, takisolasjon og solceller på tak. Hver side er optimalisert for søkeordet kundene bruker. Inkludert portefølje med før/etter-bilder av takprosjektene dine.", keywords: ["takleksjon-reparasjon", "takrenovering", "flatt tak", "pannetak", "takisolasjon"] },
        { title: "Akutt-synlig i Google Maps", description: "Vi optimaliserer Google Bedriftsprofil slik at du vises ved 'taktekker i nærheten' og 'taktekker akutt [by]'. Inkludert korrekte kategorier, arbeidsområde, tjenester og ukentlige oppdateringer med bilder av prosjektene dine.", keywords: ["taktekker i nærheten", "taktekker akutt", "google maps"] },
        { title: "Automatiske anmeldelser etter hver jobb", description: "Etter et takprosjekt sender vi automatisk en anmeldelsesforespørsel. Ved takarbeid er kundetilfredsheten høy - de anmeldelsene trenger du bare å fange opp. Systemet vårt gjør det for deg, på autopilot.", keywords: ["taktekker-anmeldelser", "kundetilfredshet", "google-anmeldelser"] },
        { title: "Direkte kontakt ved tapt anrop", description: "Står du på taket og kan ikke ta telefonen? Innen sekunder mottar den som ringer en SMS: 'Takk for at du ringte. Jeg står på en jobb akkurat nå og ringer deg tilbake snart.' Den leaden er bevart.", keywords: ["tapt anrop", "sms", "bevare lead"] },
      ],
    },
    industryContent: {
      sectionTitle: "Digital markedsføring for takleggere: slik fungerer det i 2026",
      paragraphs: [
        "Takleggerbransjen i Norge vokser, blant annet på grunn av strengere isolasjonskrav, bærekraft og at tak fra 60-80-tallet nå er gamle. Samtidig har konkurransen økt betraktelig - på Mittanbud står det iblant 20+ takleggere per region som kjemper om de samme leadsene.",
        "Det mange takleggere ikke skjønner: mesteparten av kundene som søker via Google, klikker på de tre første resultatene i kartboksen (Google Maps). Firmaer med 30+ anmeldelser, en fullstendig profilbeskrivelse og en koblet nettside dominerer denne posisjonen - uansett hvor lenge de har eksistert.",
        "Akuttreparasjoner (takleksjon, stormskade, ødelagte takrenner) er de mest verdifulle søkene. Noen med et tak som lekker, søker ikke på tre plattformer - de ringer den første pålitelige taktekkeren de finner. Med en optimalisert nettside og sterke anmeldelser er det deg.",
        "For større prosjekter som takrenovering, isolasjon eller solceller ser vi at kundene i snitt besøker 3-4 nettsider før de tar kontakt. En profesjonell nettside med portefølje, tydelige prisindikasjoner og kundeanmeldelser utgjør forskjellen på å bli ringt eller ikke.",
      ],
    },
    comparison: {
      sectionTitle: "Vekst Systemet vs. alternativer for takleggere",
      rows: [
        { aspect: "Kostnad per lead", werkspot: "250-450 kr per lead, mange no-shows", bureau: "9 000-28 000 kr/måned + oppstart", groeisysteem: "2 990 kr/måned, ubegrenset leads" },
        { aspect: "Akutt-synlighet", werkspot: "Ingen prioritet ved presserende søk", bureau: "Avhengig av deres SEO-innsats", groeisysteem: "Google Maps-optimalisering inkludert" },
        { aspect: "Portefølje / prosjektbilder", werkspot: "Begrensede muligheter", bureau: "Ofte ekstrakostnader for oppdateringer", groeisysteem: "Ubegrenset, enkelt å legge til selv" },
        { aspect: "Automatisering av anmeldelser", werkspot: "Plattformens egne anmeldelser", bureau: "Vanligvis ikke inkludert", groeisysteem: "Helt automatisk til Google" },
        { aspect: "Oppsettstid", werkspot: "Umiddelbart, men ingen egen kontroll", bureau: "4-12 uker", groeisysteem: "Live innen 7 dager" },
      ],
    },
    results: {
      sectionTitle: "Resultater for takleggerfirmaer",
      items: [
        { metric: "#1 i Google Maps", description: "For 'taktekker [by]' innen 10 uker" },
        { metric: "Fra 5 til 62 anmeldelser", description: "På 6 måneder, automatisk samlet inn" },
        { metric: "12 nye henvendelser/måned", description: "Organisk, uten annonsekostnader" },
      ],
    },
    faqs: [
      { question: "Hvor mye koster en nettside for et takleggerfirma?", answer: "Hos Vekst Systemet betaler du 2 990 kr/måned for en komplett nettside med alle tjenester fremhevet, portefølje, lokal SEO, automatisering av anmeldelser og lead-oppfølging. Ingen oppstarts- eller utviklingskostnader. Tradisjonelle byråer tar 45 000-110 000 kr for en tilsvarende nettside, pluss månedlige kostnader." },
      { question: "Hvor raskt blir jeg funnet som taktekker i Google?", answer: "Google Maps-resultater reagerer ofte allerede innen 2-4 uker på optimaliseringer og nye anmeldelser. De organiske søkeresultatene (under kartet) tar i snitt 2-4 måneder. For akuttrelaterte søkeord som 'takleksjon-reparasjon' kan det gå raskere fordi det er mindre konkurranse på disse spesifikke ordene." },
      { question: "Fungerer dette også for en enkeltmanns-taktekker?", answer: "Spesielt da. Som enkeltmannsforetak har du ingen markedsavdeling og et begrenset budsjett. Systemet vårt er designet for å oppnå maksimalt resultat med minimal tidsbruk (5 minutter om dagen). De automatiske anmeldelsene, oppfølging av tapte anrop og lokal SEO kjører i bakgrunnen mens du står på taket." },
      { question: "Kan jeg målrette flere arbeidsområder?", answer: "Ja. Vi optimaliserer nettsiden og Google-profilen for hele arbeidsområdet ditt - ikke bare stedet du er registrert. For en taktekker i Oslo betyr det også synlighet i Bærum, Lillestrøm, Drammen og andre omkringliggende kommuner." },
      { question: "Hva hvis jeg allerede har en nettside?", answer: "Da vurderer vi først den nåværende nettsiden på hastighet, SEO og konvertering. Ofte er det mer effektivt å lage en ny nettside i systemet vårt, fordi alt da er direkte koblet til automatisering av anmeldelser, lead-oppfølging og analyse. Det eksisterende domenet ditt tar vi bare over." },
      { question: "Hvordan skiller dette seg fra en Mittanbud-profil?", answer: "På Mittanbud betaler du per lead og konkurrerer med andre takleggere om den samme kunden. Med Vekst Systemet jobber du med ditt eget digitale merke. Kunder som kommer til nettsiden din via Google, har allerede valgt deg basert på anmeldelser, portefølje og nettside. Konverteringen er høyere og kostnaden per kunde lavere." },
    ],
    relatedTrades: [
      { label: "Malere", slug: "malere" },
      { label: "Rørleggere", slug: "rorleggere" },
      { label: "Isolasjonsfirmaer", slug: "isolering" },
      { label: "Altmuligfirmaer", slug: "altmuligmenn" },
    ],
    cta: {
      headline: "Klar til å være den første taktekkeren de ringer?",
      subheadline: "Planlegg en gratis samtale, så viser vi hvordan systemet fungerer for takleggerfirmaer i din region.",
      buttonText: "Bestill en demo",
      buttonUrl: "/demo",
    },
  },
  rorleggere: {
    slug: "rorleggere",
    singular: "rørlegger",
    plural: "rørleggere",
    bedrijf: "rørleggerfirma",
    metaTitle: "Nettside og markedsføring for rørleggere | Flere kunder som rørlegger - Vekst Systemet",
    metaDescription: "Komplett markedsføringssystem for rørleggerfirmaer: profesjonell nettside, lokal SEO, automatiske anmeldelser. Start innen 7 dager. Fra 2 990 kr/måned.",
    hero: {
      badge: "Spesielt for rørleggerfirmaer",
      headline: "Flere oppdrag som rørlegger - fra akutt til oppussing",
      subheadline: "Lekkasje, tett avløp eller nytt bad - kundene søker på nett. Vi sørger for at de finner deg og tar kontakt direkte.",
      stats: [
        { value: "85%", label: "av akuttoppdrag starter med et Google-søk" },
        { value: "4,7+", label: "anmeldelsespoeng nødvendig for å konkurrere" },
        { value: "2 990 kr", label: "per måned, alt inkludert" },
      ],
    },
    problems: {
      sectionTitle: "Kjenner du deg igjen som rørlegger?",
      items: [
        { title: "Bare akutt, lite planlagt arbeid", description: "Du lever av telefoner om lekkasjer og tette avløp. Men de større jobbene - baderomsrenoveringer, kjele-installasjoner, nybygg - går til firmaer som er bedre synlige på nett." },
        { title: "Telefoner du mister på jobb", description: "Som rørlegger står du med hendene i rørene. Å ta telefonen er ikke alltid mulig. Hvert tapte anrop er potensielt en kunde på 6 000+ kr som går til konkurrenten." },
        { title: "Konkurranse fra plattformer øker", description: "Mittanbud og til og med Finn.no tilbyr rørleggertjenester. Du betaler per lead eller jobber for en margin som ikke er verdt det. Imens bygger du ikke opp noe for deg selv." },
        { title: "Ingen tid til å samle anmeldelser", description: "Du vet at anmeldelser er avgjørende - en rørlegger med 50 anmeldelser slår alltid en med 3. Men etter en jobb vil du videre til neste, ikke jage anmeldelser." },
      ],
    },
    solution: {
      sectionTitle: "Slik får vi rørleggerfirmaer til å vokse",
      intro: "Rørleggerarbeid er 50 % akutt, 50 % planlagt. Systemet vårt fanger begge: du blir den første som blir funnet ved nød, og proffen kundene velger til oppussingen sin.",
      items: [
        { title: "Nettside optimalisert per tjeneste", description: "Egne sider for lekkasje, åpning av avløp, baderomsrenovering, kjele-vedlikehold, legging av vannledning og montering av sanitær. Hver side rangerer separat i Google, slik at du blir funnet for hvert spesifikke søk.", keywords: ["utbedre lekkasje", "åpne avløp", "baderomsrenovering", "kjele-vedlikehold"] },
        { title: "24/7 synlig for akutt", description: "Ved 'rørlegger akutt' eller 'utbedre lekkasje [by]' må du ligge på topp. Vi optimaliserer Google-profilen din for akuttsøk, inkludert åpningstider, direkte ringe-knapp og akuttpriser.", keywords: ["rørlegger akutt", "24/7 rørlegger", "nødstilfelle"] },
        { title: "Automatisk anmeldelsesforespørsel etter hver jobb", description: "Hjulpet kunde med en lekkasje? Innen 2 timer mottar vedkommende en vennlig forespørsel om å legge igjen en anmeldelse. Fornøyde kunder (og det er de fleste ved akutt) legger gjerne igjen en anmeldelse hvis du gjør det enkelt.", keywords: ["google-anmeldelser rørlegger", "nettomdømme"] },
        { title: "Ingen flere tapte leads", description: "Tapt anrop? Automatisk SMS tilbake. Skjema utfylt på nettsiden din? Umiddelbar varsling på telefonen pluss automatisk oppfølgingsmelding. Kunden føler seg hørt, du mister ikke omsetning.", keywords: ["lead-oppfølging", "sms tilbakeringing", "automatisering"] },
      ],
    },
    industryContent: {
      sectionTitle: "Markedsføring for rørleggere: hva fungerer i 2026?",
      paragraphs: [
        "Rørleggerbransjen i Norge har en unik fordel: det er etterspørsel hele året rundt. Fra frosne rør om vinteren til baderomsrenoveringer om våren - det er alltid arbeid. Problemet er ikke etterspørselen, men synligheten.",
        "Undersøkelser viser at 85 % av forbrukerne ved et rørleggerproblem griper til Google først. 'Rørlegger i nærheten' er en av de mest søkte lokale tjenestene. Likevel har flertallet av rørleggere ingen egen nettside eller en utdatert side som ikke er synlig.",
        "Kartresultatet i Google ('Local Pack') er det viktigste slagmarkt for rørleggere. Her vises topp 3-firmaene med anmeldelser, avstand og en direkte ringe-knapp. Firmaer med 30+ anmeldelser, en fullstendig profil og jevnlig aktivitet dominerer disse posisjonene.",
        "En voksende trend er at kundene for større prosjekter (baderomsrenovering, komplette sanitærledninger) besøker 4-5 nettsider før de tar kontakt. Porteføljer med bilder av tidligere arbeid, tydelige prisindikasjoner og sterke anmeldelser er avgjørende.",
      ],
    },
    comparison: {
      sectionTitle: "Vekst Systemet vs. alternativer for rørleggere",
      rows: [
        { aspect: "Kostnad", werkspot: "200-400 kr per lead", bureau: "7 000-22 000 kr/måned", groeisysteem: "2 990 kr/måned fast" },
        { aspect: "Akutt-synlighet", werkspot: "Du er én av mange", bureau: "Mulig, men ekstra kostnad", groeisysteem: "Google Maps akutt-optimalisering inkludert" },
        { aspect: "Lead-kvalitet", werkspot: "Delt med konkurrenter", bureau: "Eksklusivt, men dyrt", groeisysteem: "Eksklusivt, kunden velger deg" },
        { aspect: "Anmeldelser", werkspot: "På plattformen, ikke på Google", bureau: "Ikke standard", groeisysteem: "Automatisk til Google" },
        { aspect: "Oppsettstid", werkspot: "Umiddelbart", bureau: "6-12 uker", groeisysteem: "7 dager" },
      ],
    },
    results: {
      sectionTitle: "Resultater for rørleggerfirmaer",
      items: [
        { metric: "Fra 8 til 74 anmeldelser", description: "På 5 måneder, helt automatisk" },
        { metric: "#1 for 'rørlegger [by]'", description: "I Google Maps innen 8 uker" },
        { metric: "15+ henvendelser per måned", description: "Blanding av akutt og planlagt arbeid" },
      ],
    },
    faqs: [
      { question: "Hvor mye koster digital markedsføring for et rørleggerfirma?", answer: "Hos Vekst Systemet betaler du 2 990 kr/måned for alt: nettside, lokal SEO, automatisering av anmeldelser og lead-oppfølging. Ingen oppstartskostnader eller ekstrakostnader. Sammenlign det med Mittanbud hvor du betaler 200-400 kr per lead - ved 10 leads per måned er du allerede dyrere ute, med mindre kontroll." },
      { question: "Hvordan blir jeg funnet som rørlegger ved akuttoppdrag?", answer: "Det viktigste er Google Bedriftsprofil. Vi optimaliserer denne for akuttrelaterte søkeord, setter 24/7 tilgjengeligheten din, og sørger for at ringe-knappen din er direkte synlig. Kombinert med sterke anmeldelser dukker du opp i Google Maps-kartboksen ved akuttsøk." },
      { question: "Jeg har allerede en Mittanbud-profil. Trenger jeg dette?", answer: "Mittanbud kan fint eksistere ved siden av systemet vårt. Forskjellen: på Mittanbud konkurrerer du på pris med andre rørleggere om den samme leaden. Via egen nettside kommer kunder som allerede stoler på deg basert på anmeldelser og portefølje. Konverteringsraten er 3-5x høyere." },
      { question: "Kan jeg som enkeltmannsforetak konkurrere med større rørleggerfirmaer?", answer: "Absolutt. I lokale søkeresultater teller ikke firmastørrelsen din - men anmeldelsespoengsummen, profilkvaliteten og relevansen for søket gjør det. Et enkeltmannsforetak med 40 anmeldelser og en god nettside slår et stort firma med 5 anmeldelser og en utdatert side." },
      { question: "Hva hvis jeg ikke har bilder av arbeidet mitt?", answer: "Vi hjelper deg på vei. Begynn enkelt: ta et før/etter-bilde med telefonen ved hver jobb. Selv enkle bilder av en reparert lekkasje eller en ny kran utgjør forskjell. Vi sørger for at disse kommer riktig på nettsiden og Google-profilen din." },
      { question: "Hvor lang tid tar det før jeg ser resultater?", answer: "Google Maps-resultatene forbedrer seg ofte allerede innen 2-4 uker etter optimalisering og første omgang anmeldelser. Organiske søkeresultater tar 2-4 måneder. Tapt-anrop-SMS og automatisering av anmeldelser fungerer fra dag 1." },
    ],
    relatedTrades: [
      { label: "Takleggere", slug: "takleggere" },
      { label: "Elektrikere", slug: "elektrikere" },
      { label: "Altmuligfirmaer", slug: "altmuligmenn" },
      { label: "Baderomsrenovering", slug: "baderomsrenovering" },
    ],
    cta: {
      headline: "Klar til å bli rørleggeren de ringer først?",
      subheadline: "Planlegg en gratis samtale, så viser vi hvordan systemet vårt fungerer for rørleggerfirmaer i din region.",
      buttonText: "Bestill en demo",
      buttonUrl: "/demo",
    },
  },
  pussere: {
    slug: "pussere",
    singular: "pusser",
    plural: "pussere",
    bedrijf: "pusser-firma",
    metaTitle: "Nettside og markedsføring for pussere | Flere kunder som pusser - Vekst Systemet",
    metaDescription: "Markedsføringssystem for pusser-firmaer: profesjonell nettside, lokal SEO og automatiske anmeldelser. Bli pusseren kundene velger.",
    hero: {
      badge: "Spesielt for pusser-firmaer",
      headline: "Flere pusse-jobber - gjennom digital synlighet",
      subheadline: "Fra dekorpuss til å glatte vegger: kundene søker etter en pusser på nett. Vi sørger for at firmaet ditt ligger på topp.",
      stats: [
        { value: "70%", label: "av pussere har ingen eller en utdatert nettside" },
        { value: "20 000 kr", label: "gjennomsnittlig verdi på en pusse-jobb" },
        { value: "7", label: "dager og hele systemet ditt er live" },
      ],
    },
    problems: {
      sectionTitle: "Kjenner du deg igjen som pusser?",
      items: [
        { title: "Avhengig av underentreprise", description: "Du jobber mye som underentreprenør for andre håndverkere, men vil ha flere egne kunder. Privatpersoner som henvender seg direkte til deg, betaler bedre og er hyggeligere å jobbe med." },
        { title: "Arbeidet ditt taler for seg selv, men ingen ser det", description: "Du leverer nydelig pussearbeid, men har ingen portefølje på nett. Potensielle kunder kan ikke se hva du kan før de tar kontakt." },
        { title: "Uklart hva markedsføring koster og gir", description: "Du har hørt om SEO, Google Ads og sosiale medier, men vet ikke hvor du skal begynne. Det føles som å kaste penger i et bunnløst hull." },
        { title: "Å be om anmeldelser ved pussearbeid er vanskelig", description: "Ved pussearbeid er du ofte del av et større prosjekt. Kunden ser sluttresultatet først uker senere når alt er malt. Da er øyeblikket for en anmeldelse allerede forbi." },
      ],
    },
    solution: {
      sectionTitle: "Slik får vi pusser-firmaer til å vokse",
      intro: "Pussearbeid er visuelt. Kundene vil se hva du kan. Systemet vårt gjør det enkelt å vise arbeidet ditt og å bli funnet av riktige kunder.",
      items: [
        { title: "Portefølje-nettside som viser håndverket ditt", description: "En nettside med sider per tjeneste: sprøytesparkling, dekorpuss, betonglook, glatt puss, renovasjonsfiberduk og sprekkreparasjon. Med en visuell portefølje du enkelt kan oppdatere fra telefonen med nye prosjektbilder.", keywords: ["sprøytesparkling", "dekorpuss", "betonglook", "glatt puss", "renovasjonsfiberduk"] },
        { title: "Synlig for pusser-søk", description: "Vi optimaliserer synligheten din for 'pusser [by]', 'få pusset vegger', 'påføre dekorpuss' og lignende ord. Pluss Google Bedriftsprofil med de rette kategoriene og tjenestene.", keywords: ["søke pusser", "pusse vegger", "google bedriftsprofil"] },
        { title: "Anmeldelser på rett tidspunkt", description: "Vi sender anmeldelsesforespørselen i det øyeblikket du angir at jobben er ferdig - ikke automatisk etter et fast antall dager. Slik ber du om tilbakemelding når kunden nettopp har sett resultatet og er entusiastisk.", keywords: ["anmeldelsestiming", "kundetilfredshet", "google-anmeldelser pusser"] },
        { title: "Framstå profesjonelt for privatkunder", description: "Privatkunder vil ha trygghet. En profesjonell nettside med anmeldelser, portefølje og tydelige kontaktmuligheter gir den tilliten. Slik vinner du jobben framfor konkurrenten som bare har et telefonnummer.", keywords: ["profesjonelt uttrykk", "tillit", "privatkunder"] },
      ],
    },
    industryContent: {
      sectionTitle: "Digital markedsføring for pussere: mulighetene i 2026",
      paragraphs: [
        "Pusserbransjen er et av de minst digitaliserte fagområdene. Det høres ut som en ulempe, men er nettopp en enorm mulighet: konkurransen på nett er lav. Med en god nettside og 20 Google-anmeldelser er du i mange byer allerede den best synlige pusseren.",
        "Søkevolumer for pusser-relaterte ord vokser. 'Pusser i nærheten', 'få glattet vegger', 'dekorpuss kostnad' - dette er alle søk fra folk som aktivt leter etter en fagmann. Og fordi få pussere investerer i digital markedsføring, er konkurransen en brøkdel av det malere eller rørleggere opplever.",
        "En spesiell mulighet ligger i trendy overflatebehandlinger som betonglook, mikrosement og kalkpuss. Disse ordene søkes stadig oftere av huseiere som har fått inspirasjon på Pinterest eller Instagram. En nettside med fine porteføljebilder av denne typen arbeid trekker til seg akkurat de kundene som er villige til å betale mer for kvalitet.",
        "For pussere som nå hovedsakelig jobber som underentreprenør, er en egen nettside det første steget mot flere direkte privatkunder. Gjennomsnittsprosjektet for en privatperson (pusse hele boligen) ligger raskt over 25 000 kr - noen ekstra kunder per måned utgjør en betydelig forskjell.",
      ],
    },
    comparison: {
      sectionTitle: "Vekst Systemet vs. alternativer for pussere",
      rows: [
        { aspect: "Kostnad", werkspot: "130-300 kr per lead", bureau: "6 000-17 000 kr/måned", groeisysteem: "2 990 kr/måned fast" },
        { aspect: "Portefølje-muligheter", werkspot: "Begrenset, ingen egen nettside", bureau: "Skreddersydd nettside, men dyrt", groeisysteem: "Visuell portefølje, enkel å oppdatere" },
        { aspect: "Synlig for nisje-overflater", werkspot: "Ingen kontroll over kategorier", bureau: "Mulig, avhenger av byrå", groeisysteem: "Side per overflate (betonglook, dekorpuss, osv.)" },
        { aspect: "Anmeldelser", werkspot: "Plattformens egne anmeldelser, ikke Google", bureau: "Ikke standard", groeisysteem: "Automatisk, fleksibel timing" },
        { aspect: "Oppsettstid", werkspot: "Umiddelbart", bureau: "4-8 uker", groeisysteem: "7 dager" },
      ],
    },
    results: {
      sectionTitle: "Resultater for pusser-firmaer",
      items: [
        { metric: "Side 1 innen 6 uker", description: "For 'pusser [by]' i Google Maps" },
        { metric: "Fra 0 til 28 anmeldelser", description: "På 3 måneder, bygget opp fra null" },
        { metric: "5 direkte privatkunder/måned", description: "Uten Mittanbud eller underentreprise" },
      ],
    },
    faqs: [
      { question: "Er digital markedsføring nyttig for pussere?", answer: "Svært nyttig. Nettopp fordi få pussere investerer i digital markedsføring, er konkurransen lav. I mange byer er det færre enn 5 pussere med en god nettside og Google-anmeldelser. Med systemet vårt ligger du innen uker på side 1 for 'pusser [din by]'." },
      { question: "Jeg jobber hovedsakelig som underentreprenør. Hjelper dette meg?", answer: "Ja. Egen nettside og Google-profil trekker til seg privatkunder som vil jobbe direkte med deg. Marginen er høyere, og du er ikke avhengig av én oppdragsgiver. Du kan fint kombinere underentreprise og direkte kunder." },
      { question: "Hvor mye koster en nettside for et pusser-firma?", answer: "Hos oss 2 990 kr/måned, alt inkludert. Ingen oppstartskostnader. En pusser-nettside hos et tradisjonelt byrå koster 28 000-67 000 kr engangsbeløp pluss 550-1 100 kr/måned i hosting. I tillegg har du da fortsatt ingen automatisering av anmeldelser eller SEO." },
      { question: "Hvor viktige er porteføljebilder for pussere?", answer: "Avgjørende. Pussearbeid er visuelt - kundene vil se resultatet før de velger. Gode før/etter-bilder av glatt puss, dekorpuss eller betongluk-prosjekter overbeviser mer enn noen tekst. Systemet vårt gjør det enkelt å legge til bilder fra telefonen." },
      { question: "Fungerer dette også for spesialiserte overflatebehandlinger?", answer: "Nettopp for det. Vi lager egne sider for betonglook, mikrosement, kalkpuss, dekorpuss og andre nisje-overflater. Disse sidene rangerer ofte raskt fordi det knapt er konkurranse på dem, og trekker til seg kunder som er villige til å betale mer for kvalitet." },
    ],
    relatedTrades: [
      { label: "Malere", slug: "malere" },
      { label: "Flisleggere", slug: "flisleggere" },
      { label: "Altmuligfirmaer", slug: "altmuligmenn" },
      { label: "Baderomsrenovering", slug: "baderomsrenovering" },
    ],
    cta: {
      headline: "Klar til å hente inn flere private pusse-jobber?",
      subheadline: "Planlegg en gratis samtale, og oppdag hvordan systemet vårt hjelper pusser-firmaer med å vokse.",
      buttonText: "Bestill en demo",
      buttonUrl: "/demo",
    },
  },
  gartnere: {
    slug: "gartnere",
    singular: "gartner",
    plural: "gartnere",
    bedrijf: "gartnerfirma",
    metaTitle: "Nettside og markedsføring for gartnere | Flere kunder som gartner - Vekst Systemet",
    metaDescription: "Markedsføringssystem for gartnerfirmaer: profesjonell nettside med portefølje, lokal SEO og automatiske anmeldelser. Hent inn flere hagekunder.",
    hero: {
      badge: "Spesielt for gartnerfirmaer",
      headline: "Hente inn flere hagejobber - hele året",
      subheadline: "Hageanlegg, vedlikehold eller komplett redesign: huseiere søker etter en gartner på nett. Vi sørger for at de ser arbeidet ditt og ringer deg.",
      stats: [
        { value: "50 000+ kr", label: "gjennomsnittlig verdi på hageanlegg-prosjekt" },
        { value: "3-5", label: "nettsider en kunde besøker før valg" },
        { value: "7", label: "dager og hele systemet ditt er live" },
      ],
    },
    problems: {
      sectionTitle: "Kjenner du deg igjen som gartner?",
      items: [
        { title: "Våren er travel, vinteren er stille", description: "Kalenderen flommer over i april-september, men i vintermånedene kommer det knapt noen henvendelser. En jevn digital tilstedeværelse gir henvendelser hele året - også for vinterjobber som beskjæring og brolegging." },
        { title: "Kundene sammenligner grundig", description: "Ved hageprosjekter på 35 000+ kr besøker kundene flere nettsider. Hvis den digitale presentasjonen din er svakere enn konkurrentens, mister du oppdraget - selv om du leverer bedre arbeid." },
        { title: "Å holde porteføljen oppdatert tar tid", description: "Du lager nydelige hager, men å dokumentere og legge bilder ut på nett blir stadig til overs. Imens går du glipp av sjansen til å overbevise nye kunder med tidligere arbeid." },
        { title: "Sosiale medier koster mer enn det gir", description: "Du legger ut noe på Instagram eller Facebook iblant, men det gir knapt kunder. Folkene du når, leter ikke etter en gartner - de scroller bare forbi." },
      ],
    },
    solution: {
      sectionTitle: "Slik får vi gartnerfirmaer til å vokse",
      intro: "Gartnere lever av visuelt arbeid. Systemet vårt handler om å vise håndverket ditt til folk som aktivt leter etter en gartner - ikke til tilfeldige følgere på sosiale medier.",
      items: [
        { title: "Visuell nettside med prosjektgalleri", description: "En nettside med plass til hagedesign, hageanlegg, hagevedlikehold, brolegging, gjerder, dammer og beplantning. Store før/etter-bilder som viser håndverket ditt. Optimalisert for 'gartner [by]' og tjenestespesifikke søkeord.", keywords: ["hageanlegg", "hagevedlikehold", "brolegging", "gjerder", "hagedesign"] },
        { title: "Lokal SEO for sesong og lavsesong", description: "Om våren søker folk etter 'hageanlegg'. Om høsten etter 'gjøre hagen vinterklar' og 'beskjæring'. Vi optimaliserer synligheten din hele året, slik at kalenderen blir fylt også i rolige måneder.", keywords: ["få anlagt hage", "hage vinterklar", "gartner i nærheten"] },
        { title: "Anmeldelser som utgjør forskjellen", description: "Ved gartneroppdrag teller anmeldelser tungt - kundene lar noen jobbe i hagen som de stoler på. Vårt automatiske anmeldelsessystem sender en forespørsel etter ferdigstillelse. Fornøyde kunder deler gjerne et bilde av den nye hagen i tillegg.", keywords: ["gartner-anmeldelser", "kundeerfaringer", "google-vurdering"] },
        { title: "Sesongbaserte markedsføringskampanjer", description: "Med ett klikk aktiverer du kampanjer for våren ('få anlagt en ny hage?'), sommeren ('hagevedlikehold-abonnement') eller høsten ('hage vinterklar'). Vi lager kampanjene for deg, du klikker på start.", keywords: ["sesongmarkedsføring", "hagevedlikehold-abonnement", "markedsføringskampanjer"] },
      ],
    },
    industryContent: {
      sectionTitle: "Markedsføring for gartnere: hva fungerer i 2026?",
      paragraphs: [
        "Gartnerbransjen vokser i Norge. Stadig flere huseiere investerer i hagen - ikke bare som uteareal, men som en forlengelse av stua. Gjennomsnittlig prosjektverdi stiger, og det samme gjør kundenes forventninger.",
        "Gartnere som har en profesjonell nettside med en sterk visuell portefølje, vinner konsekvent flere tilbud enn kolleger uten. Ved prosjekter over 35 000 kr besøker kundene i snitt 3-5 nettsider. Gartneren med de flotteste prosjektbildene og de beste anmeldelsene får de tre første telefonsamtalene.",
        "En underutnyttet kanal for gartnere er Google Bilder. Når noen søker etter 'små hage-ideer' eller 'brolegging hage moderne', viser Google ofte bilder fra gartner-nettsider. Gode prosjektbilder med alt-tekster trekker til seg kunder i inspirasjonsfasen - før de aktivt leter etter en gartner.",
        "Sesongmarkedsføring er avgjørende. De fleste gartnere er kun synlige når det er travelt (vår/sommer). Men vintermånedene er nettopp perioden der kundene legger planer for neste sesong. Ved å publisere innhold hele året bygger du autoritet som omsettes i vår-oppdrag.",
      ],
    },
    comparison: {
      sectionTitle: "Vekst Systemet vs. alternativer for gartnere",
      rows: [
        { aspect: "Kostnad", werkspot: "200-350 kr per lead", bureau: "9 000-28 000 kr/måned", groeisysteem: "2 990 kr/måned fast" },
        { aspect: "Visuell portefølje", werkspot: "Begrenset, ingen egen nettside", bureau: "Skreddersydd, men statisk", groeisysteem: "Visuelt galleri, oppdater selv" },
        { aspect: "Sesongmarkedsføring", werkspot: "Ikke tilgjengelig", bureau: "Egen ekstrakostnad", groeisysteem: "Sesongkampanjer med ett klikk" },
        { aspect: "Anmeldelser", werkspot: "Plattformens egne", bureau: "Ikke standard", groeisysteem: "Automatisk til Google" },
        { aspect: "Oppsettstid", werkspot: "Umiddelbart", bureau: "6-12 uker", groeisysteem: "7 dager" },
      ],
    },
    results: {
      sectionTitle: "Resultater for gartnerfirmaer",
      items: [
        { metric: "32 nye henvendelser om våren", description: "Via nettside, uten annonsekostnader" },
        { metric: "Fra 6 til 45 anmeldelser", description: "På 5 måneder, automatisk samlet inn" },
        { metric: "Også vinterarbeid hentet inn", description: "Gjennom sesongrettet SEO-innhold" },
      ],
    },
    faqs: [
      { question: "Er en nettside for gartnere virkelig nødvendig ved siden av Instagram?", answer: "Ja. Instagram er bra for inspirasjon og merkekjennskap, men når hovedsakelig folk som ikke aktivt leter etter en gartner. En nettside når folk i det øyeblikket de googler 'gartner [by]' - det er kunder med en konkret plan og et budsjett. Konverteringsraten er 10-20x høyere." },
      { question: "Hvordan tiltrekker jeg meg kunder som gartner om vinteren?", answer: "Ved å være synlig hele året. Vi optimaliserer nettsiden din for vinterrelaterte søkeord: 'gjøre hagen vinterklar', 'beskjære trær vinter', 'hagevedlikehold-abonnement'. I tillegg aktiverer du med ett klikk sesongkampanjer til eksisterende kunder for vinterarbeid." },
      { question: "Hvor mye koster en profesjonell gartner-nettside?", answer: "Hos oss 2 990 kr/måned, alt inkludert: nettside, portefølje, SEO, anmeldelser og markedsføringsverktøy. En skreddersydd gartner-nettside hos et byrå koster 35 000-90 000 kr pluss månedlige kostnader." },
      { question: "Hvor viktige er før/etter-bilder for gartnere?", answer: "De er det viktigste overbevisningsmiddelet du har. Et godt gjennomført før/etter-prosjekt forteller mer enn tusen ord. Ta et 'før'-bilde ved starten av hver jobb og et 'etter'-bilde ved ferdigstillelse. Systemet vårt gjør det enkelt å legge dem til." },
      { question: "Kan jeg også fylle opp hagevedlikehold-abonnementer med dette?", answer: "Ja. En egen side for 'hagevedlikehold-abonnement' eller 'gartner fast avtale' trekker til seg kunder med strukturelt behov. Kombinert med sesongkampanjer til den eksisterende kundebasen din fyller du vedlikeholdskapasiteten uten ekstra annonsekostnader." },
    ],
    relatedTrades: [
      { label: "Malere", slug: "malere" },
      { label: "Altmuligfirmaer", slug: "altmuligmenn" },
      { label: "Flisleggere", slug: "flisleggere" },
      { label: "Rengjøringsfirmaer", slug: "rengjoringsfirma" },
    ],
    cta: {
      headline: "Klar til å hente inn flere hageprosjekter?",
      subheadline: "Planlegg en gratis samtale, og oppdag hvordan systemet vårt hjelper gartnerfirmaer med å vokse - hele året.",
      buttonText: "Bestill en demo",
      buttonUrl: "/demo",
    },
  },
  // ━━ KLUSBEDRIJVEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  altmuligmenn: KLUSBEDRIJVEN_DATA,
  // ━━ TEGELZETTERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  flisleggere: TEGELZETTERS_DATA,
  // ━━ ELEKTRICIENS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  elektrikere: ELEKTRICIENS_DATA,
  // ━━ TIMMERLIEDEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  tomrere: TIMMERLIEDEN_DATA,
  // ━━ SCHOONMAAKBEDRIJVEN ━━━━━━━━━━━━━━━━━━━━━━━━━━
  rengjoringsfirma: SCHOONMAAKBEDRIJVEN_DATA,
  // ━━ GLAZENWASSERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  vindusvaskere: GLAZENWASSERS_DATA,
  // ━━ KEUKENMONTEURS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  kjokkenmontorer: KEUKENMONTEURS_DATA,
  // ━━ BADKAMERRENOVATIE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  baderomsrenovering: BADKAMERRENOVATIE_DATA,
  // ━━ ISOLATIEBEDRIJVEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  isolering: ISOLATIEBEDRIJVEN_DATA,
  // ━━ VERHUISBEDRIJVEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  flyttefirma: VERHUISBEDRIJVEN_DATA,
  // ━━ HVAC ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "vvs-klima": HVAC_DATA,
  // ━━ AANNEMERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  entreprenorer: AANNEMERS_DATA,
  // ━━ GEVELREINIGING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  fasaderens: GEVELREINIGING_DATA,
  // ━━ PARKETVLOEREN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  parkett: PARKETVLOEREN_DATA,
  // ━━ BEGLAZING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  glassarbeid: BEGLAZING_DATA,
  // ━━ HEKWERK & POORTEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "gjerder-porter": HEKWERK_POORTEN_DATA,
  // ━━ RIOOLSERVICE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  avlopstjeneste: RIOOLSERVICE_DATA,
  // ━━ BESTRATING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  belegning: BESTRATING_DATA,
  // ━━ INTERIEURONTWERP ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  interiordesign: INTERIEURONTWERP_DATA,
  // ━━ ROLLUIKEN & ZONWERING ━━━━━━━━━━━━━━━━━━━━━━━
  "persienner-solskjerming": ROLLUIKEN_ZONWERING_DATA,
  // ━━ BETON & CEMENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "betong-sement": BETON_CEMENT_DATA,
  // ━━ KOZIJNEN & RAMEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "karmer-vinduer": KOZIJNEN_RAMEN_DATA,
  // ━━ VLOERLEGGER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  gulvlegger: VLOERLEGGER_DATA,
  // ━━ CV-KETEL MONTAGE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "fyrmontering": CV_KETEL_MONTAGE_DATA,
  // ━━ METSELWERK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  murerarbeid: METSELWERK_DATA,
  // ━━ VOEGWERK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  fugearbeid: VOEGWERK_DATA,
  // ━━ DAKGOTEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  takrenner: DAKGOTEN_DATA,
  // ━━ ONTRUIMING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  rydding: ONTRUIMING_DATA,
  // ━━ WARMTEPOMP INSTALLATIE ━━━━━━━━━━━━━━━━━━━━━━
  "varmepumpe-installasjon": WARMTEPOMP_INSTALLATIE_DATA,
  // ━━ DOMOTICA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  smarthus: DOMOTICA_DATA,
  // ━━ OPRUIMSERVICE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ryddetjeneste: OPRUIMSERVICE_DATA,
  // ━━ ZONNEPANELEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  solcellepaneler: ZONNEPANELEN_DATA,
  // ━━ DAKKAPELLEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  takark: DAKKAPELLEN_DATA,
  // ━━ AIRCO INSTALLATEURS ━━━━━━━━━━━━━━━━━━━━━━━━━
  "klimaanlegg-installatorer": AIRCO_INSTALLATEURS_DATA,
  // ━━ ASBESTSANERING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  asbestsanering: ASBESTSANERING_DATA,
  // ━━ VOCHTBESTRIJDING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  fuktbekjempelse: VOCHTBESTRIJDING_DATA,
  // ━━ SCHOORSTEENVEGERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  feiere: SCHOORSTEENVEGERS_DATA,
  // ━━ MEUBELMAKERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  mobelsnekkere: MEUBELMAKERS_DATA,
  // ━━ ZWEMBADBOUWERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "svommebasseng-byggere": ZWEMBADBOUWERS_DATA,
  // ━━ SERREBOUWERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  vinterhagebyggere: SERREBOUWERS_DATA,
  // ━━ BINNENHUISARCHITECTEN ━━━━━━━━━━━━━━━━━━━━━━━
  interiorarkitekter: BINNENHUISARCHITECTEN_DATA,
  // ━━ KELDERBOUW ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  kjellerbygging: KELDERBOUW_DATA,
  // ━━ GARAGEDEUREN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  garasjeporter: GARAGEDEUREN_DATA,
  // ━━ BEVEILIGINGSINSTALLATEURS ━━━━━━━━━━━━━━━━━━━
  sikkerhetsinstallatorer: BEVEILIGINGSINSTALLATEURS_DATA,
  // ━━ RIETDEKKERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  stratekkere: RIETDEKKERS_DATA,
  // ━━ AANBOUW & UITBOUW ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "tilbygg-paabygg": AANBOUW_UITBOUW_DATA,
  // ━━ LAADPAAL INSTALLATEURS ━━━━━━━━━━━━━━━━━━━━━━
  "ladestasjon-installatorer": LAADPAAL_INSTALLATEURS_DATA,
  // ━━ FUNDERINGSHERSTEL ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  fundamentreparasjon: FUNDERINGSHERSTEL_DATA,
  // ━━ TRAPLIFTEN & THUISLIFTEN ━━━━━━━━━━━━━━━━━━━━
  "trappeheis-hjemmeheis": TRAPLIFTEN_THUISLIFTEN_DATA,
  // ━━ GIETVLOEREN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  stopegulv: GIETVLOEREN_DATA,
};

export const TRADE_SLUGS = Object.keys(TRADE_PAGES);
