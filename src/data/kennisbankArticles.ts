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
  {
    slug: "google-bedriftsprofil-handverker-sjekkliste",
    title: "Google Bedriftsprofil for håndverkere: 10-punkts sjekkliste som virker",
    description:
      "Google Bedriftsprofil er gratis og det viktigste lokale SEO-verktøyet en håndverker har. Her er en praktisk 10-punkts sjekkliste som tar profilen fra tom til topp-3 i kartpakken - med tiltak du kan gjøre denne uka.",
    category: "SEO",
    readTime: "10 min",
    date: "2026-04-21",
    sections: [
      {
        heading: "Hvorfor Google Bedriftsprofil er det viktigste verktøyet du ikke bruker",
        body:
          "Google Bedriftsprofil er gratis, tar 30 minutter å opprette og er det eneste synlighetsverktøyet som gir målbar effekt samme uke. Likevel står de fleste håndverkerprofiler halvt utfylt: ingen bilder, en kategori, tilfeldig adresse og null anmeldelser. Resultatet er at rørleggere, elektrikere, malere og takleggere med en velholdt profil tar alle de lokale søkene mens andre ikke en gang vises. Denne sjekklisten er skrevet for håndverkere som vil rette dette uten å kaste bort tid. Ti punkter, kan gjøres løpende over en måned, og hver enkelt gir målbar effekt på hvor du rangerer i Google Maps og lokale søk.",
      },
      {
        heading: "1. Verifiser profilen - og gjør det riktig første gang",
        body:
          "Uten verifikasjon vises profilen ikke i Google Maps eller lokale søk. Den vanlige metoden er verifiseringskort som Google sender i posten til adressen din - typisk 5-14 dager. Noen håndverkerkategorier kan verifisere per telefon eller video. Viktig: bruk en adresse Google kan tilordne deg, og ikke endre den rett etter verifisering (Google mistenker svindel). Hvis du er mobil håndverker uten fast kontor, ikke bruk hjemmeadressen synlig - sett opp \"service-area business\" der du angir arbeidsområdet i stedet. Da vises du i søk i området, men adressen din er skjult for kunden.",
      },
      {
        heading: "2. Bedriftsnavn og kategori - Google ser på begge",
        body:
          "Bedriftsnavnet skal være det juridiske navnet, ikke en keyword-stuffet variant. \"Hansen Rørlegger AS\" går bra; \"Billigste rørlegger Oslo 24/7\" blir straffet og kan få profilen stengt. Primærkategorien er det viktigste SEO-valget i hele profilen - velg den kategorien som matcher kjernevirksomheten din best. Sekundærkategoriene dekker underkategoriene du også tar. En rørlegger kan ha \"Plumber\" som primær og \"Drain cleaner\", \"Water softening\", \"Bathroom remodeler\" som sekundær. Tømrere, elektrikere, malere og flisleggere har tilsvarende underkategorier - bruk alle som faktisk beskriver det du gjør. Ikke legg til kategorier du ikke leverer; Google kan bruke dette til å rangere deg ned ved søk som havner feil.",
      },
      {
        heading: "3. Adresse, arbeidsområde og NAP-konsistens",
        body:
          "NAP-konsistens betyr at navn, adresse og telefon skal være identisk på Google Bedriftsprofil, nettsiden din, Proff.no, 1881.no, Gule Sider og Brønnøysundregistrene. Google sammenligner disse signalene, og uoverensstemmelser gjør at du får mindre tillit. Har du byttet adresse, må alle kildene oppdateres - ikke bare Google. Tjenesteområdet (service area) er kilometerradiusen eller poststedene du jobber i. Vær realistisk: en maler i Oslo som velger \"hele Norge\" blir ikke sett av noen. 50 km radius eller spesifikke poststeder er oftest riktig. Arbeidsområdet har også direkte effekt på hvilke søk du vises for.",
      },
      {
        heading: "4. Tjenester - legg dem inn eksplisitt, én etter én",
        body:
          "Seksjonen \"Tjenester\" (Services) er der du lister hva du faktisk gjør. Dette er en av de mest underutfylte delene hos håndverkere - de fleste har 2-3 tjenester oppført, mens konkurrenten har 20-30. Legg inn hver tjeneste som en egen linje med navn, pris (om aktuelt), og kort beskrivelse. For en elektriker er det ikke én tjeneste \"Elektrikerarbeid\" - det er 25 forskjellige: installasjon av varmepumpe, sikringsskap-oppgradering, utelys, smarthus, EV-lader, osv. Hver tjeneste du lister, kan vises som treff i relevante Google-søk. Dette er rent og ensidig fordel.",
      },
      {
        heading: "5. Bilder - kvantitet slår kvalitet (nesten)",
        body:
          "Bedrifter med 30+ bilder i profilen får i snitt 2-3 ganger flere klikk enn bedrifter med 5 eller færre. Bildene trenger ikke være profesjonelle - telefonbilder fra byggeplassen fungerer fint. Last opp jevnt, ikke alle på én gang: 2-3 bilder per uke over flere måneder signaliserer til Google at profilen er aktiv. Inkluder: logo, cover-bilde, bilder av utførte jobber (før/etter), bilete av teamet ditt, bilder av bilen med logo, bilder av verkstedet/kontoret. For taktekkere, murere, flisleggere og malere er før/etter-bilder særlig verdifulle - de konverterer folk som allerede har vurdert deg.",
      },
      {
        heading: "6. Anmeldelser - og hvordan du får dem systematisk",
        body:
          "Antall og snitt er de to faktorene Google ser på. 47 anmeldelser med 4,9 i snitt er et helt annet signal enn 7 anmeldelser med 4,9. Du trenger flere anmeldelser enn konkurrenten - og de må være nye (anmeldelser fra 2021 veier mindre enn fra 2026). Den eneste skalerbare måten er å be systematisk etter hver jobb. Send en direktelink til profilen via SMS samme dag som jobben avsluttes; konverteringen er mye høyere innen 24 timer enn etter en uke. En anmeldelsesfunnel automatiserer dette og sender venlige påminnelser over 2-3 uker. Svar på alle anmeldelser - både gode og dårlige. Det viser at du er aktiv og tar kundene på alvor.",
      },
      {
        heading: "7. Innlegg og oppdateringer - hver uke, kort og enkelt",
        body:
          "Google Posts (innlegg) er småoppdateringer som vises på profilen - sesongtilbud, nye prosjektbilder, varsel om hellighetssted, informasjon om vakt. Google liker aktive profiler og rangerer dem høyere. Målet er ett innlegg per uke, ikke mer. Det trenger ikke være langt: et før/etter-bilde fra jobben i dag, en 2-setningers tekst, en handlingsoppfordring. Enkelte håndverkere rydder dette opp på fredag ettermiddag: tre bilder fra ukas jobber, post fra telefonen, ferdig på 10 minutter.",
      },
      {
        heading: "8. Spørsmål og svar (Google Q&A) - svar selv før andre gjør det",
        body:
          "Google Bedriftsprofil har en egen \"Spørsmål\"-seksjon der hvem som helst kan stille spørsmål om bedriften din. Svaret fra bedriftseieren veier tyngst. Forhåndsfyll de vanligste spørsmålene selv: \"Kommer dere om kvelden?\", \"Tar dere imot Vipps?\", \"Har dere fagbrev?\", \"Garanti på arbeidet?\". Gjør det som bedriftseier, logget inn på profilen - da får svaret det grønne \"Eier\"-merket. Dette tar 15 minutter engangs, og hindrer at tilfeldige folk svarer feil på vegne av bedriften din.",
      },
      {
        heading: "9. Koble til nettsiden riktig",
        body:
          "Lenken fra Google Bedriftsprofil til nettsiden skal peke på forsiden - ikke en tilfeldig underside. Forsiden må ha tydelig kontaktinfo, telefon øverst, og gjerne schema markup som beskriver bedriften strukturert for Google. Se på forsiden din som den gjør som kommer direkte fra Google-profilen: hva ser de, hvor lett er det å ringe, hvor tydelig er det hva du tilbyr? Hvis nettsiden er tom eller tregt lastet, taper du leads rett etter at profilen fikk dem interessert. Sidehastighet og mobilvennlighet på forsiden er en direkte forlengelse av Google Bedriftsprofil.",
      },
      {
        heading: "10. Mål hva som virker i Insights",
        body:
          "Google Bedriftsprofil har en egen \"Insights\"-fane (kalles \"Performance\" i nyere grensesnitt) som viser hvor mange søk du vises for, hvor mange som ringer direkte, og hvor mange som klikker seg videre til nettsiden. Sjekk dette én gang i uka de første tre månedene. Trendene forteller deg hva som virker: flere søkevisninger betyr at kategoriene og tjenestene dine matcher flere søk, flere klikk til nettsiden betyr at profilen er interessant nok, flere telefonklikk betyr at anmeldelsene dine bygger tillit. Uten måling er alt du gjør gjetting.",
      },
    ],
    relatedLinks: [
      { label: "Lokal SEO for håndverkere", href: "/kunnskapsbank/lokal-seo-for-handverkere" },
      { label: "Slik får du flere kunder som håndverker", href: "/kunnskapsbank/flere-kunder-som-handverker" },
      { label: "Markedsføring for håndverkere 2026", href: "/guide/markedsforing-for-handverkere" },
      { label: "Anmeldelsesfunnel-tjeneste", href: "/tjenester/anmeldelsesfunnel" },
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
];
