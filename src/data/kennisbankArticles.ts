export interface KennisbankArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  sections: { heading: string; body: string }[];
  relatedLinks: { label: string; href: string }[];
}

export const kennisbankArticles: KennisbankArticle[] = [
  {
    slug: "flere-kunder-som-handverker",
    title: "Slik får du flere kunder som håndverker: Komplett guide 2026",
    description:
      "Fra Google Bedriftsprofil og lokal SEO til anmeldelser og automatisk lead-oppfølging. Den praktiske guiden til å bygge en stabil kundestrøm som håndverker i Norge - uten å være avhengig av Mittanbud.",
    category: "Leads",
    readTime: "11 min",
    date: "2026-04-21",
    sections: [
      {
        heading: "Det viktige skiftet: fra å leie leads til å eie dem",
        body:
          "De fleste håndverkere i Norge starter med Mittanbud eller Anbudstorget fordi det gir leads samme dag. Det er ingen dårlig start. Problemet oppstår når plattformene blir den eneste kanalen. Du betaler per lead, konkurrerer med tre-fem andre på pris, og slutter du på plattformen, stopper leadstrømmen på dagen. Du har leid tilgang til kunder - aldri eid dem. Det strategiske skiftet som skiller bedrifter som vokser jevnt fra de som sliter hver måned, er å bygge kanaler du selv eier: egen nettside, lokal synlighet i Google, anmeldelser på din profil, og et system som fanger opp hver forespørsel automatisk. Denne guiden viser hvordan du setter det sammen i riktig rekkefølge.",
      },
      {
        heading: "Google er der alt starter - også for håndverkerjobber",
        body:
          "Rundt 80 % av nordmenn som trenger en rørlegger, elektriker eller maler begynner med et Google-søk. De søker ikke på tre plattformer; de googler \"rørlegger Oslo\" eller \"elektriker i nærheten\" og klikker på de tre første treffene i kartboksen. Lokal SEO handler om å komme inn blant disse tre. For håndverkere betyr det tre ting i praksis: en fullstendig utfylt Google Bedriftsprofil, en nettside som Google forstår, og nok positive anmeldelser til at du fremstår som det trygge valget. Alle disse elementene spiller sammen - du kan ikke rangere på SEO uten profilen, og profilen virker ikke uten anmeldelser.",
      },
      {
        heading: "Egen nettside - grunnmuren du ikke kan leie",
        body:
          "Nettsiden din er det eneste som varer uansett om du skrur av markedsføringen. En god håndverker-nettside gjør tre ting: den viser tydelig hva du leverer, den er rask på mobil, og den konverterer besøk til forespørsler. Det siste er viktigst. En maler, tømrer eller flislegger som får 500 besøk i måneden og bare 5 henvendelser, har en konverteringsrate som ødelegger hele SEO-arbeidet. Nettsiden skal ha tydelige handlingsoppfordringer, telefonnummer synlig øverst, et kort skjema som ikke krever e-post hvis ikke nødvendig, og ett tydelig CTA per side. Bygger du nettsiden selv, bruk en mal som er optimalisert for håndverkere. Leier du ekstern hjelp, sjekk at de leverer en nettside som er optimalisert for konvertering - ikke bare en visuelt fin side.",
      },
      {
        heading: "Anmeldelser - signalet som avgjør valget",
        body:
          "Etter Google-posisjon er anmeldelser den viktigste faktoren for om en kunde velger deg eller konkurrenten. To taktekkere som står ved siden av hverandre i Google Maps - den ene med 5 anmeldelser, den andre med 47 - kjemper ikke i samme vektklasse. Kunden velger nesten alltid den med flest 5-stjerners anmeldelser. Problemet er at fornøyde kunder glemmer å legge igjen anmeldelse, mens misfornøyde kunder løper for å skrive. En anmeldelsesfunnel snur dette: etter hver fullført jobb sendes en kort SMS eller e-post med en direktelink. Systemet gjør det så lettvint at konverteringsraten til ny anmeldelse blir 30-40 % i stedet for 5-10 %. Over ett år betyr det forskjellen på 30 og 200 anmeldelser.",
      },
      {
        heading: "Svar raskt eller tap kunden",
        body:
          "Det finnes en tall-studie som dukker opp i håndverker-sammenheng hele tiden: kunder som ikke får svar innen 5 minutter, ringer neste firma. I byggesesongen gjelder dette særlig akutt-jobber - et tak som lekker, en varmepumpe som stopper, en stikkontakt som gir støt. Du kan ikke ta telefonen når du står på en stige eller bor i en sikringsskap. Men du kan ha et system som gjør det for deg. Tapt anrop → SMS fanger opp misset anrop med en automatisk melding innen sekunder: \"Takk for at du ringte. Jeg er på jobb nå og ringer deg tilbake i løpet av en time.\" Kombinert med automatisk lead-oppfølging på nye skjemaforespørsler sikrer du at ingen lead glipper. For en etablert bedrift utgjør dette ofte 15-30 % flere avtaler per måned.",
      },
      {
        heading: "Mittanbud og Anbudstorget - bruk dem riktig",
        body:
          "Lead-plattformer er ikke fienden. De er et verktøy, og som alle verktøy fungerer de best når de brukes der de hører hjemme. For en nystartet elektriker eller rørlegger som ennå ikke har Google-synlighet gir Mittanbud umiddelbar tilgang til forespørsler mens nettsiden bygges. Problemet oppstår når plattformen er den eneste kanalen. Kostnaden per vunnet jobb ender ofte på 1 500-4 000 kr, og du bygger ingen egen merkevare. Den beste strategien er å bruke Mittanbud eller Anbudstorget som et supplement de første 3-6 månedene mens egen nettside og Google Bedriftsprofil tar fart. Etter det kan du trappe ned plattformbruken - uten å miste leadsstrømmen. Vi har skrevet en egen sammenligning av Mittanbud og Anbudstorget som går gjennom volumet, prisene og konkurransen på begge.",
      },
      {
        heading: "Anbefalinger og gjenkjøp - det billigste som finnes",
        body:
          "De fleste håndverkere glemmer den billigste leadkanalen de har: de tidligere kundene sine. En kunde som har fått utført et godt bad-oppussingsprosjekt i fjor, vurderer ofte ny jobb i år (kjøkken, stue, garasje). En nabo spør den samme kunden om hvilken flislegger eller tømrer de brukte. Uten et system for å holde kontakten og systematisk be om anbefalinger, skjer dette tilfeldig. Med et system - automatisk oppfølging 3 måneder etter jobb, en jul- eller vår-SMS med et relevant tilbud, en kampanje for anbefalinger der den eksisterende kunden får noe verdi - kan du doble eller tredoble gjenkjøpsraten. Markedsføringskampanjer aktivert med ett klikk gjør akkurat dette, ferdig oppsatt for håndverkere.",
      },
      {
        heading: "Anbefalt stack for 2026 - i denne rekkefølgen",
        body:
          "Start med Google Bedriftsprofil samme dag du bestemmer deg - den er gratis og tar 30 minutter å sette opp. Parallelt setter du opp egen nettside optimalisert for lokal SEO - dette er 4-8-ukers-jobben som gir avkastning i årevis. Koble på anmeldelsesautomatisering så snart nettsiden er live, slik at anmeldelsene bygges opp samtidig som Google-synligheten. Måned to: slå på tapt anrop → SMS og automatisk lead-oppfølging slik at ingen leads glipper. Bruk Mittanbud eller Anbudstorget som supplement denne perioden. Måned 3-6: nettsiden begynner å gi leads gratis, anmeldelsene vokser, og du kan redusere platform-bruken. Fra måned 6 kan du vurdere Google Ads i travle perioder - men kun når nettsiden konverterer godt. Vekst Systemet leverer hele denne stacken ferdig satt opp til en fast månedspris, uten oppstartskostnader og uten lang binding.",
      },
    ],
    relatedLinks: [
      { label: "Markedsføring for håndverkere 2026", href: "/guide/markedsforing-for-handverkere" },
      { label: "Mittanbud-alternativ", href: "/sammenlign/mittanbud-alternativ" },
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
      { label: "Anmeldelsesfunnel", href: "/tjenester/anmeldelsesfunnel" },
      { label: "Se prisene våre", href: "/priser" },
    ],
  },
];
