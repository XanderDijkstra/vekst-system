export interface WikiTerm {
  slug: string;
  term: string;
  shortDescription: string;
  category: string;
  date: string;
  sections: { heading: string; body: string }[];
  relatedTerms: string[]; // slugs of related wiki terms
  relatedLinks: { label: string; href: string }[];
}

export const wikiCategories: string[] = [
  "Nettside",
  "SEO",
  "Anmeldelser",
  "Leads",
  "Automatisering",
  "Kundekommunikasjon",
  "Konvertering",
  "Teknisk",
];

export const wikiTerms: WikiTerm[] = [
  {
    slug: "seo",
    term: "SEO (søkemotoroptimalisering)",
    shortDescription:
      "SEO - Search Engine Optimization eller søkemotoroptimalisering - er alt du gjør for å rangere høyere i Google og andre søkemotorer. For håndverkere er det den billigste veien til stabile, kvalifiserte leads.",
    category: "SEO",
    date: "2026-04-25",
    sections: [
      {
        heading: "Hva er SEO?",
        body:
          "SEO står for Search Engine Optimization, på norsk søkemotoroptimalisering. Det er samlebegrepet for alle tiltakene du gjør for at nettsiden din skal rangere høyere i Google, Bing og andre søkemotorer. SEO er ikke ett enkelt verktøy eller én plattform - det er en kombinasjon av teknisk optimalisering av nettsiden, innholdet på sidene dine, og hvor mange andre nettsteder som lenker til deg. Målet er enkelt: når noen søker etter tjenesten din, skal du være blant de første treffene. For håndverkere betyr det at en kunde som googler \"rørlegger Bergen\" eller \"maler Oslo\" finner ditt firma før konkurrentenes.",
      },
      {
        heading: "Hvorfor SEO er kritisk for håndverkere",
        body:
          "Cirka 80 % av nordmenn starter på Google når de trenger en håndverker. De fleste klikker på et av de fem-seks første treffene på første side - alt etter det er praktisk talt usynlig. For en lokal rørlegger, elektriker eller maler betyr det at SEO-posisjon direkte oversetter til antall forespørsler i innboksen. I motsetning til Google Ads, Mittanbud eller Facebook-annonser er trafikken fra organisk SEO gratis - du betaler én gang for arbeidet, og avkastningen kommer i månedsvis og årevis etter. Det er den billigste skalerbare leadkanalen som finnes.",
      },
      {
        heading: "De tre pilarene: teknisk, on-page og off-page SEO",
        body:
          "All SEO faller i tre kategorier. Teknisk SEO handler om at Google kan crawle og forstå nettsiden din: rask sidehastighet, mobilvennlig nettside, ren URL-struktur, fungerende sitemap. On-page SEO handler om innholdet på hver side: titler, meta-beskrivelse, overskrifter, brødtekst, interne lenker. Off-page SEO handler om autoritet utenfor din egen side: backlinks, omtaler, oppføringer i kataloger og NAP-konsistens. Et SEO-system som fungerer er aldri bare én av disse - du trenger alle tre.",
      },
      {
        heading: "Teknisk SEO: grunnmuren mange glemmer",
        body:
          "En vakker nettside som tar 8 sekunder å laste rangerer ikke. Google bruker Core Web Vitals - LCP, INP og CLS - som direkte rangeringssignaler. Mål nettsiden i Google PageSpeed Insights og sikt mot LCP under 2,5 sekunder, INP under 200 ms og CLS under 0,1. Andre tekniske basics: HTTPS via gyldig SSL-sertifikat, et XML-sitemap registrert i Google Search Console, riktig oppsett av robots.txt, og strukturert data via schema markup. Mangler én av disse, taper du rangeringer på alt annet du gjør.",
      },
      {
        heading: "On-page SEO: titler, beskrivelser og innhold",
        body:
          "Hver side på nettsiden din skal ha en unik tittel (under 60 tegn), en unik meta-beskrivelse (140-160 tegn) og en tydelig H1-overskrift som matcher søkeintensjonen. Brødteksten skal naturlig inneholde de søkeordene kundene faktisk skriver - for en flislegger i Oslo betyr det fraser som \"flislegger Oslo\", \"baderomsfliser Oslo\", \"kjøkkenfliser Oslo\". Ikke keyword-stuffing - bare naturlig norsk tekst som besvarer det folk lurer på. Hver tjenesteside og hver bysider skal være unik; kopipasta-innhold straffes av Google.",
      },
      {
        heading: "Off-page SEO: backlinks og omtaler",
        body:
          "Google bruker lenker fra andre nettsider som tillitsstemmer. En lenke fra en lokal byggevarekjede, en bransjeorganisasjon eller en lokal nyhetsside teller mer enn ti tilfeldige lenker fra utenlandske blogger. For håndverkere er de viktigste off-page-signalene: oppføring i Proff.no, 1881.no, Gule Sider og Brønnøysundregistrene med konsistent NAP, en aktiv Google Bedriftsprofil med jevnt strømmende anmeldelser, og lenker fra leverandører eller samarbeidspartnere. Bygg dette over 3-6 måneder - ikke kjøp pakker med 100 lenker, det blir straffet.",
      },
      {
        heading: "Lokal SEO er en egen disiplin",
        body:
          "Vanlig SEO er nasjonal eller global. Lokal SEO er rettet mot søkere som er fysisk i nærheten - typisk søk som \"rørlegger Trondheim\" eller \"elektriker i nærheten\". Google håndterer disse søkene annerledes: de viser kartpakken (Local Pack) med tre lokale bedrifter øverst, basert på Google Bedriftsprofil-data, ikke på nettsider alene. For håndverkere er lokal SEO 80 % av jobben - du konkurrerer aldri nasjonalt, du konkurrerer mot 10-30 andre i ditt område. Optimalisert Bedriftsprofil + bysider på nettsiden + lokale anmeldelser = lokal SEO i praksis.",
      },
      {
        heading: "Søkeordsforskning: hva kundene faktisk googler",
        body:
          "SEO begynner med å forstå hvilke ord kundene bruker. \"Rørlegger Oslo\" er åpenbart, men hva med \"akutt rørlegger Oslo\", \"rørlegger billig Oslo\", \"rørlegger 24/7 Oslo\", \"rørlegger nær meg\"? Hvert av disse er en separat side på nettsiden din. Bruk gratis verktøy som Google Search Console, Google Trends, og Keyword Planner i Google Ads. Sjekk også \"folk spør også\"-boksen i Google-treff - der står direkte spørsmål du bør svare på som egne sider eller seksjoner. For håndverkere finner du ofte 30-80 unike søk verdt å rangere på.",
      },
      {
        heading: "Innhold som rangerer i 2026",
        body:
          "Google har blitt strengere på innhold. Det som rangerer er sider som faktisk besvarer det brukeren søkte etter, skrevet av eller med tydelig referanse til personer som vet hva de snakker om (E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness). For en håndverker betyr det: skriv som en fagperson, gi konkrete eksempler, vis bilder fra ekte prosjekter, link til relevante kilder. AI-generert tynt innhold blir straffet. Tunge, originale guider med 1500+ ord og praktiske tips rangerer best - akkurat slik som denne wiki-en.",
      },
      {
        heading: "Hvor lang tid tar SEO å virke?",
        body:
          "SEO er ikke raskt. Forventningene er typisk: 2-4 uker før Google merker endringer på nye sider, 6-12 uker før du ser bevegelse i posisjon, 3-6 måneder før du rangerer stabilt på første side for de viktigste søkene, 6-12 måneder før SEO blir hovedkilden til leads. Det er treigt, men varig. Skrudde du av Google Ads i dag, stopper trafikken samme dag. Skrudde du av nye SEO-tiltak i dag, fortsetter eksisterende rangeringer å gi leads i flere år.",
      },
      {
        heading: "Vanlige SEO-feil som ødelegger rangering",
        body:
          "Keyword-stuffing i titler (\"Billigste rørlegger Oslo 24/7 akutt nå\") - filtreres bort. Kopipasta-innhold mellom by-sider på nettsiden - Google straffer duplikate sider. Kjøpte backlinks fra lenkebørser - manuell straff fra Google, kan ta 6-18 måneder å rette opp. Tregge nettsider med svære bilder og 30 tredjepartsskripter - Core Web Vitals straffes. Gamle URL-er som returnerer 404 etter omstrukturering uten 301-redirect - tap av all akkumulert SEO-verdi. Mange håndverkere taper rangeringer på basics, ikke på avanserte feil.",
      },
      {
        heading: "Måling: hvordan du vet om SEO virker",
        body:
          "Sett opp Google Search Console før du gjør noe annet - det er gratis og viser hvilke søkeord du rangerer på, hvor mange som klikker, og på hvilken posisjon. Kombiner med Google Analytics for å se hva besøkende gjør på nettsiden. Sjekk månedlig: hvilke søkeord vokser, hvilke synker, hvilke sider får flest klikk, hvilke har høyest CTR i søkeresultatet. Disse dataene viser hva som virker og hva som ikke virker - uten dem er all SEO-innsats gjetning.",
      },
      {
        heading: "Skal du gjøre SEO selv eller leie inn?",
        body:
          "Grunnleggende SEO - Google Bedriftsprofil, søkeordsforskning, skriving av tjenestesider - kan en kompetent håndverker gjøre selv på 5-10 timer per måned. Teknisk SEO, lenkebygging og kontinuerlig analyse krever spesialist-kompetanse. SEO-byråer tar typisk 8 000-25 000 kr per måned. SaaS-løsninger som Vekst Systemet leverer en komplett SEO-pakke for håndverkere - lokal optimalisering, by-sider, anmeldelser og teknisk grunnmur - til 2 990 kr per måned, fast pris. Velger du selv, gjør først alle tre pilarene; bare on-page er ikke nok.",
      },
    ],
    relatedTerms: [
      "local-seo",
      "google-bedriftsprofil",
      "organisk-trafikk",
      "backlinks",
      "schema-markup",
      "meta-tittel-og-beskrivelse",
      "sidehastighet",
      "mobilvennlig-nettside",
    ],
    relatedLinks: [
      { label: "Lokal SEO for håndverkere", href: "/kunnskapsbank/lokal-seo-for-handverkere" },
      { label: "Slik får du flere kunder som håndverker", href: "/kunnskapsbank/flere-kunder-som-handverker" },
      { label: "Markedsføring for håndverkere 2026", href: "/guide/markedsforing-for-handverkere" },
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
      { label: "Google Bedriftsprofil 10-punkts sjekkliste", href: "/kunnskapsbank/google-bedriftsprofil-handverker-sjekkliste" },
    ],
  },
  {
    slug: "local-seo",
    term: "Lokal SEO",
    shortDescription: "SEO rettet mot folk som søker på en tjeneste i et bestemt område - for eksempel \"elektriker Trondheim\".",
    category: "SEO",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Lokal SEO er alt du gjør for å bli funnet når noen i nærområdet ditt søker etter en tjeneste. Det inkluderer Google Bedriftsprofil, bystedsider på nettsiden, konsistent navn/adresse/telefon (NAP) på nett, og anmeldelser fra kunder i området." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Nesten alle håndverkerjobber er lokale. En kunde i Stavanger vil ha en rørlegger i Stavanger, ikke i Oslo. Lokal SEO er spesialvarianten som sørger for at du vinner nettopp disse søkene - ofte uten å konkurrere med store, landsdekkende aktører." },
      { heading: "Hvordan fungerer det?", body: "Google ser på tre hovedting: hvor nær firmaet er søkeren, hvor relevant Bedriftsprofilen er, og hvor mye autoritet du har (anmeldelser, lenker). Har du en godt utfylt profil, aktivt innhold og 20+ anmeldelser med 4,5+ stjerner, plasserer Google deg i \"Local Pack\" - kartboksen øverst med tre bedrifter." },
    ],
    relatedTerms: ["seo", "google-bedriftsprofil", "google-maps", "nav-konsistens", "anmeldelser"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "organisk-trafikk",
    term: "Organisk trafikk",
    shortDescription: "Besøkende som kommer til nettsiden din gratis via Google-søk, uten at du betaler for annonser.",
    category: "SEO",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Organisk trafikk er alle besøkende som klikker seg inn på nettsiden din fra et vanlig søketreff - altså ikke fra en annonse. Det motsatte er betalt trafikk (Google Ads, Facebook Ads). Organisk trafikk er gratis per klikk, men krever investering i SEO og innhold." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "For en liten håndverkerbedrift er organisk trafikk ofte det som gjør forskjellen mellom lønnsomt og ikke. Et Mittanbud-lead koster 300-800 kr; en organisk besøkende koster 0 kr. Om du bygger opp 500 organiske besøk i måneden og bare 2 % konverterer, er det 10 gratis forespørsler hver måned." },
      { heading: "Hvordan fungerer det?", body: "Google sender organisk trafikk når søkeren klikker på et av de 10 blå treffene (ikke annonsene). Hvor mange klikk du får avhenger av posisjonen: plass 1 tar ~30 %, plass 5 tar ~5 %, side 2 tar nesten ingenting. Målet med SEO er å flytte deg fra side 2 til topp 5 på de søkene som betyr penger." },
    ],
    relatedTerms: ["seo", "local-seo", "betalt-trafikk", "konverteringsrate"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "google-bedriftsprofil",
    term: "Google Bedriftsprofil",
    shortDescription:
      "Den gratis firmasiden som vises i Google-søk og Google Maps - tidligere Google My Business, fortsatt det viktigste lokale synlighetsverktøyet en håndverker har.",
    category: "SEO",
    date: "2026-04-25",
    sections: [
      {
        heading: "Hva er Google Bedriftsprofil?",
        body:
          "Google Bedriftsprofil er den gratis profilen bedriften din har hos Google. Tjenesten het tidligere Google Min Bedrift (engelsk: Google My Business), men ble omdøpt i 2022. De fleste norske håndverkere kjenner den fortsatt under det gamle navnet. Profilen vises i Google Maps og i en sidefelt-boks på høyre side når noen søker på firmanavnet ditt eller en kombinasjon av tjeneste og sted - for eksempel \"rørlegger Oslo\" eller \"elektriker Bergen\". Den viser adresse, åpningstider, telefonnummer, bilder, anmeldelser, tjenester og lenke til nettsiden din.",
      },
      {
        heading: "Hvorfor er Bedriftsprofilen så viktig for håndverkere?",
        body:
          "For en lokal håndverkerbedrift er Google Bedriftsprofil den enkeltkanalen som gir mest avkastning per krone. Den plasserer deg i \"Local Pack\" - kartboksen med de tre øverste lokale treffene - før de 10 blå organiske resultatene. Studier viser at over 70 % av lokale søk leder til en handling (telefonsamtale, klikk til nettside eller veibeskrivelse) innen 24 timer. For en rørlegger, elektriker, maler eller flislegger er en velholdt profil ofte forskjellen på å bli ringt og å være usynlig.",
      },
      {
        heading: "De tre rangeringsfaktorene Google bruker",
        body:
          "Google dokumenterer at lokal rangering avhenger av tre signaler: relevans (hvor godt profilen matcher søket), avstand (hvor nær søkeren er) og prominens (hvor etablert bedriften er, målt blant annet i anmeldelser, omtaler på andre nettsteder og lenker). Du kan ikke påvirke avstand, men relevans og prominens er fullt ut i din kontroll. Riktig kategori, fullstendige tjenester, bilder, anmeldelser og oppdateringer er alle relevans- og prominenssignaler.",
      },
      {
        heading: "Slik oppretter og verifiserer du profilen",
        body:
          "Gå til google.com/business og logg inn med en Google-konto knyttet til bedriften. Skriv inn firmanavn, adresse, kategori og kontaktinfo. Verifisering er den viktigste delen - uten verifisering vises ikke profilen i søk. Standardmetoden er postkort som Google sender til bedriftsadressen (5-14 dager). Enkelte bransjer kan verifisere via telefon eller video. Bruker du hjemmeadresse som mobil håndverker, sett opp profilen som \"service-area business\" og angi arbeidsområdet i stedet for synlig adresse.",
      },
      {
        heading: "Bedriftsnavn og kategori - to feil å aldri gjøre",
        body:
          "Bedriftsnavnet skal være det juridiske navnet, ikke en SEO-stuffet variant. \"Hansen Rørlegger AS\" er greit; \"Billigste rørlegger Oslo 24/7\" blir straffet og kan få profilen suspendert. Primærkategorien er det viktigste SEO-valget i hele profilen - velg den som best beskriver kjernevirksomheten. Sekundærkategorier dekker resten av tjenestene. En rørlegger kan ha \"Plumber\" som primær og \"Drain cleaner\", \"Bathroom remodeler\" som sekundær. Ikke legg til kategorier du ikke leverer - Google bruker det mot deg når søk havner feil.",
      },
      {
        heading: "Tjenester - list dem alle, eksplisitt",
        body:
          "Tjenester-seksjonen er underutfylt hos de fleste norske håndverkerprofiler. Konkurrenten har 25 tjenester listet med navn og pris; du har \"rørleggerarbeid\". Hver tjeneste du legger inn kan vises som treff i relevante Google-søk. For en elektriker er det ikke én tjeneste - det er installasjon av varmepumpe, sikringsskap-oppgradering, utelys, smarthus, EV-lader, nytt anlegg, sjekk av eksisterende anlegg, og 15 andre. Bruk 30 minutter på å skrive opp alle tjenestene du faktisk gjør, med korte beskrivelser.",
      },
      {
        heading: "Bilder - kvantitet slår kvalitet",
        body:
          "Bedrifter med 30+ bilder får i snitt 2-3 ganger flere klikk enn de med under 10. Bildene trenger ikke være profesjonelle - telefonbilder fra byggeplass holder. Last opp jevnt over tid (2-3 per uke), ikke alle på én gang - aktivitet er et signal i seg selv. Inkluder logo, cover-bilde, før/etter-bilder av jobber, bilder av teamet, bilder av bilen med logo, og bilder av verkstedet eller lageret. For taktekkere, malere, flisleggere og murere er før/etter-bilder særlig sterke - de konverterer kunder som allerede har vurdert deg.",
      },
      {
        heading: "Anmeldelser - mengde, snitt og friskhet",
        body:
          "Google vekter tre ting med anmeldelser: antall, gjennomsnittsstjerner og hvor nye de er. 80 anmeldelser med 4,9 i snitt slår 30 anmeldelser med 4,9. Holder du deg under 4,5 i snitt blir du sortert ned. Gamle anmeldelser fra 2019-2022 hjelper mindre enn nye fra siste 12 måneder. Den eneste skalerbare måten å samle inn er systematisk: send en SMS med direktelink samme dag som jobben er fullført. Konverteringen innen 24 timer er mye høyere enn etter en uke. Svar på alle anmeldelser, både gode og dårlige - Google belønner aktive profiler.",
      },
      {
        heading: "Innlegg (Google Posts) - ukentlig oppdatering",
        body:
          "Google Posts er småoppdateringer som vises på profilen din - sesongtilbud, nye prosjektbilder, varsel om hellighetsstid, informasjon om vakt. Aktive profiler rangerer høyere. Målet er ett innlegg i uken: et før/etter-bilde fra ukens jobb, to setninger om hva du gjorde, og en handlingsoppfordring. Bruker du 10 minutter på fredag ettermiddag på dette, holder profilen seg fersk i Googles øyne uten ekstra arbeid.",
      },
      {
        heading: "Spørsmål og svar - svar selv før noen andre gjør det",
        body:
          "Bedriftsprofilen har en \"Spørsmål\"-seksjon der hvem som helst kan stille spørsmål. Eierens svar veier tyngst og får et grønt \"Eier\"-merke. Forhåndsfyll de vanligste selv: \"Kommer dere på kveldstid?\", \"Tar dere Vipps?\", \"Har dere fagbrev?\", \"Garanti på arbeidet?\". Det tar 15 minutter engangs og hindrer at tilfeldige folk svarer feil på vegne av bedriften din. Det er også et lett SEO-signal - hvert svar bidrar til relevans.",
      },
      {
        heading: "NAP-konsistens og kobling til nettsiden",
        body:
          "Navn, adresse og telefon skal være identisk på Bedriftsprofilen, nettsiden din, Proff.no, 1881.no, Gule Sider, Finn.no og Brønnøysundregistrene. Google sammenligner disse signalene; uoverensstemmelser senker tilliten. Lenken fra profilen til nettsiden skal peke på en forside som åpner raskt, har klikkbart telefonnummer øverst og tydelig forklarer hva du leverer. En mobilvennlig nettside med god sidehastighet er en direkte forlengelse av profilen - flytter du folk fra Google til en treg nettside, taper du dem.",
      },
      {
        heading: "Mål hva som virker - Insights-fanen",
        body:
          "I administrasjonsverktøyet (Google Business Profile Manager eller direkte i Google-søk) finnes en \"Performance\"-fane (tidligere Insights). Den viser hvor mange søk du vises for, hvor mange som klikker til nettsiden, hvor mange som ringer direkte fra profilen og hvor mange som ber om veibeskrivelse. Sjekk dette ukentlig de første tre månedene. Trendene avgjør hva som virker: flere søkevisninger betyr at kategoriene og tjenestene matcher mer trafikk; flere telefonklikk betyr at anmeldelsene bygger tillit. Uten måling er all aktivitet gjetting.",
      },
      {
        heading: "Vanlige feil som kveler profilen",
        body:
          "Falske kategorier for å dekke flere søk - Google straffer det. Keyword-stuffing i firmanavnet (\"Billigste rørlegger Oslo 24/7 AS\") - profil suspendert. Falske anmeldelser fra venner og familie - Google filtrerer dem og mistanken sprer seg til ekte profiler. Hyppige adresseendringer - signaliserer ustabil drift. Profil opprettet og deretter glemt i 12 måneder - inaktivitet senker rangering. Alle disse setter deg flere måneder tilbake. Gjør grunnarbeidet riktig fra start, hold det aktivt, og du vil være i topp-3 i ditt område innen 6 måneder.",
      },
    ],
    relatedTerms: [
      "local-seo",
      "google-maps",
      "anmeldelser",
      "anmeldelsesfunnel",
      "nav-konsistens",
      "schema-markup",
      "seo",
      "organisk-trafikk",
    ],
    relatedLinks: [
      { label: "Google Bedriftsprofil 10-punkts sjekkliste", href: "/kunnskapsbank/google-bedriftsprofil-handverker-sjekkliste" },
      { label: "Lokal SEO for håndverkere", href: "/kunnskapsbank/lokal-seo-for-handverkere" },
      { label: "Anmeldelsesfunnel", href: "/tjenester/anmeldelsesfunnel" },
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
      { label: "Markedsføring for håndverkere 2026", href: "/guide/markedsforing-for-handverkere" },
    ],
  },
  {
    slug: "google-maps",
    term: "Google Maps",
    shortDescription: "Kart-tjenesten der Google viser de tre mest relevante bedriftene når noen søker etter en lokal tjeneste.",
    category: "SEO",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Google Maps er kartfunksjonen som vises øverst i Google-søk når noen søker etter en lokal tjeneste. De tre mest relevante bedriftene i nærheten får en \"Local Pack\" med kart, anmeldelser og ringknapp. Tilsvarende dukker firmaet opp når noen søker i Maps-appen direkte." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Mange klikker aldri forbi Local Pack. For søk som \"elektriker i nærheten\" eller \"rørlegger Bergen\" får de tre bedriftene der 60-70 % av all trafikk. Er du ikke med, finnes du ikke for den søkeren. Og rekkefølgen bestemmes mye av anmeldelsesscore og profilkvalitet." },
      { heading: "Hvordan fungerer det?", body: "Google rangerer ut fra nærhet, relevans (matching mellom søkeord og bedriftsprofil) og prominens (anmeldelser, lenker, generell autoritet). Du kan ikke betale deg inn - alt går via Bedriftsprofilen. Det viktigste du kan gjøre er å samle inn ekte anmeldelser fra ekte kunder og holde profilen oppdatert." },
    ],
    relatedTerms: ["google-bedriftsprofil", "local-seo", "anmeldelser"],
    relatedLinks: [
      { label: "Anmeldelsessystem", href: "/tjenester/anmeldelsesfunnel" },
    ],
  },
  {
    slug: "google-ads",
    term: "Google Ads",
    shortDescription: "Betalte annonser på toppen av Google-søk. Du betaler per klikk, ikke per visning.",
    category: "SEO",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Google Ads er reklame-plattformen der du byr på søkeord. Når noen søker på \"baderomsrenovering Oslo\" kan annonsen din dukke opp øverst i treffene. Du betaler kun når noen klikker (CPC - cost per click). For håndverker-søk ligger prisen typisk på 15-80 kr per klikk." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Google Ads gir deg synlighet med en gang - ingen venting på SEO. Nyttig når du akkurat har startet, eller trenger å fylle opp kalenderen i en rolig periode. Ulempen er at kostnaden stopper aldri: så snart du slutter å betale, forsvinner trafikken." },
      { heading: "Hvordan fungerer det?", body: "Du velger søkeord, skriver en annonse, setter et dagsbudsjett og velger geografisk område. Google kjører en auksjon i sanntid: de med høyest bud × kvalitet vinner plasseringen. En bra håndverker-kampanje krever spesifikke søkeord (ikke \"bygg\") og en landingsside som matcher. Uten det brenner du opp budsjettet." },
    ],
    relatedTerms: ["seo", "organisk-trafikk", "betalt-trafikk", "landingsside", "konverteringsrate"],
    relatedLinks: [
      { label: "Markedsføringskampanjer", href: "/tjenester/markedsforingskampanjer" },
    ],
  },
  {
    slug: "backlinks",
    term: "Backlinks",
    shortDescription: "Lenker fra andre nettsider til din nettside. Google ser dem som anbefalinger fra andre aktører.",
    category: "SEO",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "En backlink er en lenke fra en annen nettside som peker til din. Når lokalavisen lenker til deg, eller en bransjeforening har deg oppført som medlem, er det backlinks. Google teller hver backlink som en slags anbefaling - jo flere og bedre kilder, jo mer autoritet får du." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Backlinks er sammen med innhold og profilkvalitet den viktigste SEO-faktoren. En håndverkerbedrift som har 30 relevante backlinks (fra Finn.no, bransjeforbund, lokale medier, kunder) rangerer stort sett foran en identisk bedrift med 5 backlinks." },
      { heading: "Hvordan fungerer det?", body: "Kvalitet slår kvantitet: én lenke fra en norsk bransjenettside er mer verdt enn 50 lenker fra tvilsomme \"lenkepakker\". Naturlige backlinks kommer fra å stå i register som Finn.no og Proff.no, være medlem i bransjeforbund, få omtale i lokalmedia, eller at kunder legger deg inn på sine egne sider." },
    ],
    relatedTerms: ["seo", "organisk-trafikk", "nav-konsistens"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "meta-tittel-og-beskrivelse",
    term: "Meta-tittel og meta-beskrivelse",
    shortDescription: "Teksten som vises for siden din i Google-treffene. Første inntrykk, før klikket.",
    category: "SEO",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Meta-tittelen er den blå, klikkbare linjen øverst i et Google-treff (maks ~60 tegn). Meta-beskrivelsen er den grå teksten under (maks ~155 tegn). Begge er kodet inn i nettsiden og kan tilpasses per side. De vises ikke på selve nettsiden - bare i søkeresultatet." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Disse to linjene avgjør om noen klikker seg inn eller går til konkurrenten. Du kan rangere på plass 3, men om tittelen er kjedelig (\"Velkommen til Olsen AS\") mens plass 5 sier \"Maler i Oslo - garanti, 4,9 stjerner på Google\", taper du klikket." },
      { heading: "Hvordan fungerer det?", body: "Hver side på nettsiden bør ha en unik meta-tittel og meta-beskrivelse. En bra tittel inneholder hovedsøkeordet + byen din + en konkurransefordel: \"Maler Oslo - fast pris, utført innen 2 uker\". Beskrivelsen utdyper: \"Vi har malt 400+ leiligheter i Oslo siden 2015. Be om tilbud i dag - svar innen 24 timer.\"" },
    ],
    relatedTerms: ["seo", "click-through-rate", "landingsside"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "schema-markup",
    term: "Schema markup",
    shortDescription: "Usynlig kode på nettsiden som forteller Google hva som er hva - adresse, åpningstider, priser, anmeldelser.",
    category: "SEO",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Schema markup er strukturerte data (oftest JSON-LD) som legges inn i HTML-koden. De beskriver innholdet for søkemotorer: \"dette er en lokal bedrift\", \"dette er en anmeldelse med 5 stjerner\", \"dette er et telefonnummer\". Besøkende ser det ikke - men Google gjør det." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Google bruker schema for å vise såkalte \"rich snippets\" i treffene - stjerner, priser, kontaktinfo direkte i søkeresultatet. En håndverkerside med korrekt schema får ofte 20-30 % flere klikk enn samme plass uten. Det gjør også at Google forstår bedriften bedre og rangerer den mer presist." },
      { heading: "Hvordan fungerer det?", body: "De viktigste typene for håndverkere er LocalBusiness (firma med adresse), Service (tjenestene dine), FAQPage (for ofte stilte spørsmål), Review (anmeldelser), og BreadcrumbList (navigasjon). De legges inn i sidens `<head>` som JSON. På moderne nettsider er det typisk automatisk - du leverer dataene, siden genererer schemaet." },
    ],
    relatedTerms: ["seo", "local-seo", "google-bedriftsprofil"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "sidehastighet",
    term: "Sidehastighet",
    shortDescription: "Hvor fort nettsiden din laster inn. En treg side mister besøkende og straffes av Google.",
    category: "Teknisk",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Sidehastighet er tiden det tar før en nettside er klar til bruk etter at noen har klikket på lenken. Google måler dette via \"Core Web Vitals\" - LCP (når hovedinnholdet vises), INP (hvor raskt siden reagerer på klikk), og CLS (hvor stabilt layoutet er). Under 2,5 sekunder er bra; over 4 sekunder er dårlig." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Folk er utålmodige på mobil - og 70-80 % av håndverker-søk skjer på mobil. For hvert ekstra sekund siden bruker på å laste, mister du ca. 10 % av besøkende. En rask nettside gir flere leads, bedre plassering i Google og lavere kostnad per klikk i Google Ads." },
      { heading: "Hvordan fungerer det?", body: "De største bremsene er oftest tunge bilder (ikke-komprimerte JPEG-er på flere MB), for mange skript (chatbots, analyseverktøy), og dårlig webhotell. Test siden på PageSpeed Insights (gratis fra Google) - du får en score fra 0-100 og konkrete forbedringspunkter." },
    ],
    relatedTerms: ["mobilvennlig-nettside", "responsivt-design", "bounce-rate"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "mobilvennlig-nettside",
    term: "Mobilvennlig nettside",
    shortDescription: "En nettside som fungerer like godt på mobil som på PC. For håndverker-søk er dette obligatorisk.",
    category: "Teknisk",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "En mobilvennlig nettside skalerer innhold, bilder og knapper automatisk til skjermstørrelsen. Teksten er lesbar uten å zoome, knappene er store nok til å trykke med tommelen, og skjemaer fungerer uten problemer. Det er ikke én bestemt designstil - det er bare at siden skal være brukbar på mobilen." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "I 2026 søker 75-85 % av norske håndverker-kunder på mobil. Har du en nettside som krever zooming eller der kontaktskjemaet er brutt, går de rett til konkurrenten. Google rangerer dessuten mobilversjonen først (\"mobile-first indexing\") - er mobilen dårlig, faller du i alle søk." },
      { heading: "Hvordan fungerer det?", body: "Test nettsiden din på en telefon: last inn forsiden og se om du enkelt kan finne telefonnummeret, fylle ut et skjema og bla gjennom bilder. Ingen kniping eller zooming skal være nødvendig. På tekniske termer realiseres dette gjennom \"responsivt design\" - CSS som tilpasser layout til skjermbredde." },
    ],
    relatedTerms: ["responsivt-design", "sidehastighet", "konvertering"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "responsivt-design",
    term: "Responsivt design",
    shortDescription: "Teknikken som får nettsiden til å tilpasse seg mobil, nettbrett og PC automatisk.",
    category: "Teknisk",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Responsivt design er en designtilnærming der samme nettside automatisk legger om layout basert på skjermstørrelse. På PC vises kanskje tre kolonner, på mobil ligger de stablet oppå hverandre. Ingen separat mobilside - én nettside som tilpasser seg." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Før hadde mange bedrifter en egen mobilside (m.firma.no). Det er utdatert - Google forstår ikke at det er samme firma, og du må vedlikeholde to sider. Responsivt design gir én side som fungerer overalt: Google, Bing, iPhone, Android, nettbrett." },
      { heading: "Hvordan fungerer det?", body: "Teknisk sett bruker nettsiden CSS-media queries som sier \"hvis skjermen er smalere enn 768 piksler, stable elementene vertikalt\". Designeren jobber ofte \"mobile first\" - lager mobilversjonen først, og legger til flere kolonner etter hvert som skjermen blir bredere. Alle moderne bygde nettsider er responsive som standard." },
    ],
    relatedTerms: ["mobilvennlig-nettside", "sidehastighet"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "ssl-sertifikat",
    term: "SSL-sertifikat",
    shortDescription: "Sikkerhetslaget som gjør at nettsiden din kjører på https:// i stedet for http://. Obligatorisk i dag.",
    category: "Teknisk",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Et SSL-sertifikat (Secure Sockets Layer) krypterer data som sendes mellom nettsiden og brukeren. Uten det sendes alt - inkludert skjemaer med navn og e-post - i klartekst. Med det vises hengelåsen i nettleseren og URL-en starter med https:// i stedet for http://." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Uten SSL viser nettleseren en stor advarsel - \"Ikke sikker\" - når noen prøver å besøke siden. 90 % av besøkende forsvinner umiddelbart. Google rangerer dessuten ned usikre sider. Det er ingen grunn til å ikke ha SSL; det er gratis." },
      { heading: "Hvordan fungerer det?", body: "De fleste moderne webhoteller (Vercel, Netlify, one.com, osv.) installerer SSL-sertifikat automatisk, oftest fra Let's Encrypt - gratis og fornyes automatisk. Har du en eldre nettside uten SSL, ta kontakt med webhotellet ditt. Det tar vanligvis 15 minutter å få på plass." },
    ],
    relatedTerms: ["domene-og-hosting", "sidehastighet"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "domene-og-hosting",
    term: "Domene og hosting",
    shortDescription: "Domenet er adressen (firma.no). Hosting er serveren som holder nettsiden i gang 24/7.",
    category: "Teknisk",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Domenet er adressen folk skriver inn i nettleseren - for eksempel firmaditt.no. Hosting er tjenesten som kjører serveren der nettsiden faktisk ligger. Du leier begge: domenet for ~120 kr/år, hosting for 50-500 kr/mnd avhengig av leverandør." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Domenet er din digitale eiendom. Mist domenet, og du mister all SEO, alle eposter, alle visittkort. Velg derfor .no (stabilt, norsk-eid via Norid) og betal for minst 2-5 år av gangen. Hosting-valget påvirker sidehastighet og driftssikkerhet - kritisk for SEO." },
      { heading: "Hvordan fungerer det?", body: "Et .no-domene kjøpes via en Norid-registrar (Domeneshop, one.com, osv.) - krever norsk organisasjonsnummer. Hosting kan være en tradisjonell webserver eller moderne plattform som Vercel/Netlify. For håndverker-nettsider anbefales moderne plattformer: raskere, billigere og krever mindre vedlikehold." },
    ],
    relatedTerms: ["ssl-sertifikat", "sidehastighet", "nav-konsistens"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "nav-konsistens",
    term: "NAP-konsistens",
    shortDescription: "At firmanavn, adresse og telefonnummer er nøyaktig likt skrevet alle steder på nett.",
    category: "Teknisk",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "NAP står for Name, Address, Phone. NAP-konsistens betyr at de tre opplysningene skrives nøyaktig likt overalt på nett - nettsiden din, Google Bedriftsprofil, Finn.no, Proff.no, bransjeforeninger. Også små forskjeller (\"AS\" vs \"as\", \"+47 400 00 000\" vs \"40000000\") regnes som inkonsistens." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Google bruker NAP-data til å avgjøre at firmaet er ekte og at det er samme firma på tvers av kilder. Ser Google 15 ulike stavemåter av adressen din, blir algoritmen usikker og du rangerer lavere i lokale søk. Konsistent NAP er en av de letteste måtene å forbedre lokal SEO på." },
      { heading: "Hvordan fungerer det?", body: "Velg én versjon av navn, adresse og telefon - og bruk den overalt. Lag et tekstdokument med den kanoniske versjonen. Når du registrerer firmaet på et nytt nettsted, kopier-lim. Eksisterende profiler bør rettes opp: start med Finn.no, Proff.no, 1881 og Brønnøysundregistrene - alle de andre henter ofte fra disse." },
    ],
    relatedTerms: ["local-seo", "google-bedriftsprofil", "backlinks"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "google-analytics",
    term: "Google Analytics",
    shortDescription: "Gratis måleverktøy fra Google som viser hvor mange besøker nettsiden og hva de gjør der.",
    category: "Teknisk",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Google Analytics (nå versjon 4, eller GA4) er et gratis analyseverktøy som samler inn data om de besøkende: hvor mange, hvor kommer de fra, hvilke sider ser de på, hvor lenge blir de, og hva gjør de før de forlater siden. Det installeres som et lite skript på nettsiden." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Uten tall gjetter du. Med Google Analytics ser du om de 300 besøkende i måneden faktisk blir til forespørsler, eller om 90 % hopper av før de kommer til kontaktskjemaet. Det er forskjellen mellom å vite at markedsføringen virker og å betale blindt." },
      { heading: "Hvordan fungerer det?", body: "Du oppretter en konto på analytics.google.com, får en målings-ID, og installerer et skript på nettsiden (eller lar webdesigneren gjøre det). Etter 24-48 timer begynner data å flyte inn. De viktigste rapportene er: Acquisition (hvor besøkende kommer fra), Engagement (hva de gjør), og Conversions (hvor mange fyller ut skjemaer)." },
    ],
    relatedTerms: ["konverteringsrate", "bounce-rate", "organisk-trafikk"],
    relatedLinks: [
      { label: "Alle tjenester", href: "/tjenester" },
    ],
  },
  {
    slug: "bounce-rate",
    term: "Fluktrate (bounce rate)",
    shortDescription: "Andelen besøkende som forlater nettsiden uten å klikke videre. En høy fluktrate betyr ofte at siden ikke leverer.",
    category: "Konvertering",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Fluktrate (engelsk: bounce rate) er prosentandelen besøkende som kommer inn på én side, ikke gjør noe på siden og går. Ingen klikk videre, ingen interaksjon. For de fleste håndverker-nettsider ligger en sunn fluktrate på 40-60 %. Over 70 % er et tegn på at noe ikke stemmer." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Høy fluktrate betyr at du betaler for Google Ads eller bygger SEO, og ingen gjør det du ønsker. De kommer, ser seg rundt 10 sekunder, og drar. Ofte er problemet: for treg side, feil målgruppe, eller en åpenbar ting som mangler (telefonnummer, adresse, prisindikasjon)." },
      { heading: "Hvordan fungerer det?", body: "Google Analytics regner det automatisk. Filtrer etter landingsside for å se hvilke sider som lekker mest. Vanligste fikser: legg til et synlig telefonnummer øverst, reduser sidehastigheten, og pass på at hovedbudskapet matcher søkeordet de kom inn på." },
    ],
    relatedTerms: ["sidehastighet", "konverteringsrate", "landingsside", "google-analytics"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "click-through-rate",
    term: "Klikkfrekvens (CTR)",
    shortDescription: "Hvor stor andel av dem som ser lenken eller annonsen din, faktisk klikker på den.",
    category: "Konvertering",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "CTR står for Click-Through Rate - klikkfrekvens på norsk. Det er antall klikk delt på antall visninger, uttrykt i prosent. Brukes overalt: Google-søk, Google Ads, Facebook-annonser, e-postkampanjer. En Google Ads-kampanje med 2 % CTR er svak; 8 %+ er bra." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "CTR er tidligvarsler for om markedsføringen virker. For en SEO-side betyr lav CTR at tittel og beskrivelse er kjedelige, selv om du rangerer. For Google Ads betyr lav CTR at du betaler mer per klikk (Google straffer svake annonser). Og for e-post: sender du tilbud uten emne som fenger, åpnes de ikke." },
      { heading: "Hvordan fungerer det?", body: "I Google Search Console ser du CTR per søkeord du rangerer på. For Google Ads er CTR synlig i dashboardet. Forbedre CTR ved å teste ulike titler (meta-tittel for SEO, annonsetekst for Ads), legge til tall og garanti, og matche teksten tett med søkeordet." },
    ],
    relatedTerms: ["meta-tittel-og-beskrivelse", "google-ads", "konverteringsrate", "a-b-test"],
    relatedLinks: [
      { label: "Markedsføringskampanjer", href: "/tjenester/markedsforingskampanjer" },
    ],
  },
  {
    slug: "konvertering",
    term: "Konvertering",
    shortDescription: "Når en besøkende gjør det du ønsker - fyller ut et skjema, ringer, eller ber om tilbud.",
    category: "Konvertering",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "En konvertering er et målbart mål. På en håndverker-nettside er det vanligvis en innkommende forespørsel: kontaktskjema, ring-knapp, WhatsApp-melding, tilbudsforespørsel. Kan også være mindre mål (åpning av kontaktside) som ledd opp til hovedmålet." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Uten en tydelig konvertering vet du ikke om nettsiden virker. Du kan ha 1 000 besøk i måneden, men hvis ingen konverterer er det bortkastet. Å definere hva som er en konvertering er første steg - deretter handler alt om å øke antallet." },
      { heading: "Hvordan fungerer det?", body: "I Google Analytics setter du opp \"events\" som teller hver konvertering: hver gang noen trykker \"send\" på kontaktskjemaet, klikker på telefonnummeret, eller åpner WhatsApp-chatten. Når tallene er på plass kan du følge med over tid og se hva som virker." },
    ],
    relatedTerms: ["konverteringsrate", "cta", "landingsside", "lead"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "konverteringsrate",
    term: "Konverteringsrate",
    shortDescription: "Andelen besøkende som gjør det du ønsker. 100 besøkende og 2 forespørsler = 2 % konverteringsrate.",
    category: "Konvertering",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Konverteringsrate er antall konverteringer delt på antall besøkende, i prosent. En håndverker-nettside med 500 besøk i måneden og 10 forespørsler har 2 % konverteringsrate. For håndverkere ligger sunne tall på 2-5 % for en generell nettside, 5-10 % for en godt treffende landingsside." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Konverteringsraten er ofte den billigste veien til flere leads. Øker du fra 2 % til 4 %, dobler du forespørslene uten å måtte skaffe én ekstra besøkende. Det betyr mer tilbake for hver krone i markedsføring, og bedre totaløkonomi." },
      { heading: "Hvordan fungerer det?", body: "Forbedre konverteringsraten ved å (1) teste kortere skjemaer (2-3 felter vinner oftest), (2) legge til tillitssignaler (anmeldelser, logoer, antall utførte jobber), (3) synliggjøre telefonnummer og svartid øverst, og (4) skrive en tydelig, konkret CTA (\"Be om tilbud\" er bedre enn \"Kontakt oss\")." },
    ],
    relatedTerms: ["konvertering", "cta", "a-b-test", "social-proof", "bounce-rate"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "landingsside",
    term: "Landingsside",
    shortDescription: "En fokusert side bygget for ett formål - gjerne knyttet til én annonse eller ett søkeord.",
    category: "Konvertering",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "En landingsside (engelsk: landing page) er en enkeltside designet for å få besøkende til å gjøre én ting: fylle ut et skjema, ringe, bestille tilbud. Ingen hovedmeny, ingen distraksjoner - bare én oppgave. Brukes typisk som landingsside for Google Ads-kampanjer eller konkrete tjenestesider." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "En landingsside konverterer vanligvis 3-5x bedre enn en generell forside. Hvis du kjører Google Ads på \"baderomsrenovering Oslo\", bør annonsen lede til en side som handler om nettopp det - ikke firmaets forside der besøkeren må lete. Samme prinsipp gjelder for SEO-sider per tjeneste." },
      { heading: "Hvordan fungerer det?", body: "En god håndverker-landingsside har: én tydelig overskrift som matcher søkeordet, før/etter-bilder fra ekte prosjekter, 3-5 anmeldelser, prisindikasjon eller \"fra X kr\"-anker, og ett skjema med 3 felter (navn, telefon, kort beskrivelse). All tekst støtter målet - ingen \"om oss\"-avsnitt som stjeler oppmerksomhet." },
    ],
    relatedTerms: ["konverteringsrate", "cta", "google-ads", "meta-tittel-og-beskrivelse"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "cta",
    term: "Call-to-action (CTA)",
    shortDescription: "Knappen eller lenken som forteller besøkende hva de skal gjøre. \"Be om tilbud\", \"Ring nå\".",
    category: "Konvertering",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "En call-to-action (CTA) er et tydelig handlingskall på nettsiden - som regel en knapp eller lenke. For håndverker-sider er de vanligste: \"Be om tilbud\", \"Ring nå\", \"Få gratis befaring\", \"Send forespørsel\". Plasseres synlig, ofte flere steder på siden, i farger som skiller seg ut." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Mange håndverker-nettsider mangler en tydelig CTA - eller gjemmer den nederst på siden. Resultatet: besøkende skjønner ikke hva de skal gjøre og drar. En tydelig CTA øverst (og gjentatt flere steder) kan løfte konverteringsraten med 20-50 % alene." },
      { heading: "Hvordan fungerer det?", body: "Gode CTA-er er konkrete og korte. \"Send forespørsel\" virker bedre enn \"Kontakt oss\". \"Få gratis befaring i Oslo\" slår \"Les mer\". Test forskjellige formuleringer med A/B-test. Pass på kontrasten - en svak knapp i samme farge som bakgrunnen forsvinner." },
    ],
    relatedTerms: ["konvertering", "konverteringsrate", "landingsside", "a-b-test"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "a-b-test",
    term: "A/B-test",
    shortDescription: "Å vise to versjoner av en side til halvparten av besøkende hver, og måle hvilken som konverterer best.",
    category: "Konvertering",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "En A/B-test viser versjon A til halvparten av besøkende og versjon B til den andre halvparten, på samme tidspunkt. Etter nok data (oftest 500+ besøk per variant) kan du se hvilken versjon som ga flere konverteringer. Endringen kan være alt fra knappetekst til hel sidelayout." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Uten testing gjetter du. \"Jeg synes den nye knappen er finere\" er ikke data. Ved å A/B-teste kan du si sikkert at \"Be om tilbud\" gir 34 % flere klikk enn \"Kontakt oss\" - og bygge videre på det. Små forbedringer over tid gir store resultater." },
      { heading: "Hvordan fungerer det?", body: "Bruk verktøy som Google Optimize (nedlagt, må bytte), Microsoft Clarity + annen løsning, eller VWO. Test én ting om gangen, aldri tre ting samtidig. For håndverker-sider med 500-2000 besøk i måneden tar en test typisk 2-4 uker før du har statistisk signifikans." },
    ],
    relatedTerms: ["konverteringsrate", "cta", "click-through-rate", "google-analytics"],
    relatedLinks: [
      { label: "Leadgenerering-nettside", href: "/tjenester/leadgenerering" },
    ],
  },
  {
    slug: "social-proof",
    term: "Social proof",
    shortDescription: "Signaler som viser at andre har stolt på deg - anmeldelser, logoer, antall fornøyde kunder.",
    category: "Konvertering",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Social proof er alt som gir nye kunder trygghet på at du leverer. De vanligste formene på en håndverker-nettside er: Google-anmeldelser, sitater fra faste kunder, antall utførte prosjekter (\"Over 400 bad renovert siden 2015\"), medlemskap i bransjeforening, og før/etter-bilder." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Håndverkertjenester er en tillitsbransje - du slipper noen inn i hjemmet ditt. En privatperson som vurderer å bruke 150 000 kr på baderom, trenger bevis for at du ikke er en plageånd. Nettsider med tydelig social proof konverterer 30-50 % bedre enn identiske sider uten." },
      { heading: "Hvordan fungerer det?", body: "Plasser social proof høyt på siden (ikke gjemt nederst). Bruk ekte navn og by: \"Anne J., Bergen\" er mer troverdig enn \"Fornøyd kunde\". Koble til Google-anmeldelsene direkte - da kan de besøkende verifisere. Hvis du er ny, start med 2-3 korte sitater og voks derfra." },
    ],
    relatedTerms: ["anmeldelser", "konverteringsrate", "landingsside"],
    relatedLinks: [
      { label: "Anmeldelsessystem", href: "/tjenester/anmeldelsesfunnel" },
    ],
  },
  {
    slug: "lead",
    term: "Lead",
    shortDescription: "En potensiell kunde som har vist interesse - typisk ved å sende en forespørsel eller be om et tilbud.",
    category: "Leads",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "En lead er en person som har gitt deg kontaktinformasjon og vist at de er interessert i tjenesten din. Som minimum har du navn og telefon eller e-post. En varm lead har bedt om et konkret tilbud; en kald lead har kanskje bare meldt seg på et nyhetsbrev. Alle leads er ikke like verdifulle." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "For en håndverker er \"lead\" hele virksomhetens drivkraft. Uten jevne leads ingen jobber. Det er forskjell på å betale for leads (Mittanbud, Google Ads) og å generere egne (SEO, anbefalinger, egen nettside). Egne leads er billigere per stykk og gir høyere konvertering fordi kunden allerede har valgt deg." },
      { heading: "Hvordan fungerer det?", body: "Tenk på leads i tre steg: (1) innhente - via nettside, annonser, anmeldelser, (2) kvalifisere - er de i målgruppen, er budsjettet realistisk, (3) følge opp - raskt og systematisk. Den som ringer tilbake innen 5 minutter vinner oppdraget ~4x oftere enn den som venter 24 timer." },
    ],
    relatedTerms: ["lead-oppfolging", "funnel", "konvertering", "konverteringsrate"],
    relatedLinks: [
      { label: "Lead-oppfølging", href: "/tjenester/lead-oppfolging" },
    ],
  },
  {
    slug: "lead-oppfolging",
    term: "Lead-oppfølging",
    shortDescription: "Prosessen med å følge opp innkommende forespørsler - rask, systematisk, og uten at noe glipper.",
    category: "Leads",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Lead-oppfølging er alt som skjer fra en forespørsel kommer inn til den enten blir kunde eller \"ikke i dag, takk\". Det inkluderer første respons, tilbudsutforming, eventuelle purringer, og registrering i et system så ingen forsvinner i innboksen." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Et typisk håndverkerfirma taper 30-50 % av leads fordi oppfølgingen er tilfeldig: svar først om kvelden, glemte å ringe tilbake, tilbud sendt uten purring. En systematisk oppfølging kan fordoble antall vunne oppdrag uten å skaffe én ekstra lead." },
      { heading: "Hvordan fungerer det?", body: "Tre nivåer: (1) automatisk - SMS eller e-post sendes umiddelbart når forespørselen kommer inn, (2) rask personlig respons - ring eller send detaljert svar innen noen timer, (3) planlagt oppfølging - hvis kunden ikke svarer innen 2-3 dager, send en pen purremelding. Et CRM eller lead-verktøy gjør det enkelt å holde orden." },
    ],
    relatedTerms: ["lead", "automatisk-oppfolging", "crm", "tapt-anrop-sms"],
    relatedLinks: [
      { label: "Lead-oppfølging", href: "/tjenester/lead-oppfolging" },
    ],
  },
  {
    slug: "funnel",
    term: "Funnel",
    shortDescription: "Reisen en kunde tar fra første besøk til betalt jobb, sett som en trakt der flere drar seg ut i hvert steg.",
    category: "Leads",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "En funnel (\"trakt\") beskriver kundereisen i trinn: besøker nettsiden → leser om tjenesten → fyller ut skjemaet → får tilbud → aksepterer. På hvert steg faller noen fra. Ved å måle hvor stort frafall du har i hvert ledd, ser du hvor problemene er." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Uten å tenke i funnel-termer blir optimalisering famling i mørket. Ser du at 1 000 kommer til nettsiden, 50 åpner kontaktsiden, men bare 5 fyller ut skjemaet - da er problemet skjemaet, ikke trafikken. Tenker du funnel, fokuserer du på det største frafallet først." },
      { heading: "Hvordan fungerer det?", body: "Mål hvert steg: besøk (Google Analytics), visninger av kontaktside, antall skjemaer, antall tilbud sendt, antall vunnet. Se konverteringsraten mellom hvert steg. En typisk håndverker-funnel: 100 besøk → 10 skjemaer (10 %) → 8 tilbud (80 %) → 3 vunne (38 %). Svake ledd viser seg raskt." },
    ],
    relatedTerms: ["lead", "konvertering", "konverteringsrate", "anmeldelsesfunnel"],
    relatedLinks: [
      { label: "Lead-oppfølging", href: "/tjenester/lead-oppfolging" },
    ],
  },
  {
    slug: "retargeting",
    term: "Retargeting",
    shortDescription: "Annonser som vises til folk som tidligere har besøkt nettsiden din, for å minne dem på deg.",
    category: "Leads",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Retargeting (også kalt remarketing) er annonsering som kun treffer folk som allerede har besøkt nettsiden din uten å konvertere. De ser reklamen din på Facebook, Instagram eller andre nettsteder dagene etter - en påminnelse om at du finnes." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "På en håndverker-nettside konverterer bare 2-5 % av besøkende på første besøk. De andre 95 % undersøker, sammenligner, glemmer. Retargeting får en del av disse tilbake. Spesielt effektivt for større prosjekter (bad, kjøkken, tilbygg) der beslutningsprosessen er lang." },
      { heading: "Hvordan fungerer det?", body: "Legg inn en sporingskode (Meta Pixel for Facebook/Instagram, Google Ads tag for Google) på nettsiden. Deretter oppretter du en annonse som kun vises til folk hvis kode har blitt lastet i kode ditt. For en typisk håndverker er et retargeting-budsjett på 500-1 500 kr i måneden nok til å fange opp de fleste som var nær." },
    ],
    relatedTerms: ["google-ads", "betalt-trafikk", "konverteringsrate", "funnel"],
    relatedLinks: [
      { label: "Markedsføringskampanjer", href: "/tjenester/markedsforingskampanjer" },
    ],
  },
  {
    slug: "betalt-trafikk",
    term: "Betalt trafikk",
    shortDescription: "Besøkende du skaffer ved å betale for annonser - Google Ads, Facebook Ads, Mittanbud-leads.",
    category: "Leads",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Betalt trafikk er alle besøkende som kommer via annonser du betaler for. Det motsatte er organisk trafikk (gratis fra Google-søk) og direkte trafikk (noen skriver URL-en direkte). Typiske kanaler for håndverkere: Google Ads, Facebook/Instagram Ads, Mittanbud-leads og sponsede oppføringer på Finn.no." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Betalt trafikk gir leads umiddelbart - perfekt hvis du nettopp har startet eller trenger å fylle opp kalenderen. Ulempen: strømmen stopper når du slutter å betale. En sunn håndverkerbedrift bruker betalt trafikk som forsterker, ikke eneste kilde." },
      { heading: "Hvordan fungerer det?", body: "Definer mål (leads, ikke klikk), sett et dagsbudsjett, og spor kostnad per lead (CPL). En bra håndverker-Ads-kampanje gir CPL på 200-500 kr. Høyere enn 800 kr betyr det er noe galt - oftest feil søkeord eller dårlig landingsside. Start smått, skaler når det virker." },
    ],
    relatedTerms: ["google-ads", "organisk-trafikk", "retargeting", "konverteringsrate"],
    relatedLinks: [
      { label: "Markedsføringskampanjer", href: "/tjenester/markedsforingskampanjer" },
    ],
  },
  {
    slug: "anmeldelser",
    term: "Anmeldelser",
    shortDescription: "Kundevurderinger på Google, Facebook eller egen nettside. Den viktigste enkeltfaktoren for tillit.",
    category: "Anmeldelser",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Anmeldelser er skriftlige vurderinger fra tidligere kunder, vanligvis med en stjerneskår fra 1-5. De viktigste for håndverkere er Google-anmeldelser (fordi de vises i søk og Maps) og Mittanbud-anmeldelser (hvis du bruker plattformen). Facebook-anmeldelser finnes, men vektlegges mindre." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Anmeldelser er ofte avgjørende: 90 % av privatpersoner leser anmeldelser før de velger en håndverker. Forskjellen mellom 4,2 og 4,8 stjerner kan være dobbelt så mange klikk. En bedrift med 80 anmeldelser slår alltid en med 8, selv om begge har 5 stjerner - volum bygger tillit." },
      { heading: "Hvordan fungerer det?", body: "Spør om anmeldelse etter hver fullført jobb - mens opplevelsen er fersk. Send en SMS eller e-post med direkte lenke til Google-profilen. En anmeldelsesfunnel automatiserer dette. Svar på alle anmeldelser, også de positive - Google belønner aktivitet, og det viser for nye kunder at du bryr deg." },
    ],
    relatedTerms: ["anmeldelsesfunnel", "google-bedriftsprofil", "social-proof", "qr-kode-for-anmeldelser"],
    relatedLinks: [
      { label: "Anmeldelsessystem", href: "/tjenester/anmeldelsesfunnel" },
    ],
  },
  {
    slug: "anmeldelsesfunnel",
    term: "Anmeldelsesfunnel",
    shortDescription: "Et automatisk system som ber fornøyde kunder om anmeldelse, og fanger opp misfornøyde før de publiserer.",
    category: "Anmeldelser",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "En anmeldelsesfunnel er en automatisert prosess: etter hver fullført jobb får kunden en SMS eller e-post. Sier de at de er fornøyde, ledes de videre til Google-profilen. Sier de at noe ikke var bra, ledes de til et internt skjema - slik at du får sjansen til å rette opp før en dårlig anmeldelse havner offentlig." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Uten system blir det tilfeldig. Noen uker spør du, andre uker glemmer du. Med en anmeldelsesfunnel samler du jevnt og trutt 5-15 nye anmeldelser i måneden, og risikoen for negative offentlige anmeldelser går ned. Det gir raskt økt Google-synlighet og høyere konverteringsrate." },
      { heading: "Hvordan fungerer det?", body: "Du registrerer kundens navn og telefon når jobben er ferdig. Systemet sender en automatisk melding samme kveld eller dagen etter: \"Takk for jobben! Hvordan var opplevelsen?\" Fornøyde får lenke til Google, misfornøyde får en egen kanal direkte til deg. Hele flyten tar 30 sekunder av din tid per jobb." },
    ],
    relatedTerms: ["anmeldelser", "funnel", "automatisering", "google-bedriftsprofil"],
    relatedLinks: [
      { label: "Anmeldelsessystem", href: "/tjenester/anmeldelsesfunnel" },
    ],
  },
  {
    slug: "qr-kode-for-anmeldelser",
    term: "QR-kode for anmeldelser",
    shortDescription: "En kode du kan vise kunden som tar dem direkte til din Google-anmeldelsesside når de skanner.",
    category: "Anmeldelser",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "En QR-kode er et kvadratisk mønster som mobilkameraet gjenkjenner og åpner en forhåndsbestemt URL. For anmeldelser peker koden direkte til din Google Bedriftsprofils \"Skriv en anmeldelse\"-side - ingen søking. Kunden peker kameraet, trykker på varselet, og er klar til å skrive." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Det vanskeligste med anmeldelser er å fjerne friksjon. Selv en fornøyd kunde gidder ikke å søke opp firmaet ditt, klikke seg inn på Google-profilen og så finne \"skriv anmeldelse\". En QR-kode på fakturaen, på bilen eller på et visittkort kutter denne reisen til ett klikk." },
      { heading: "Hvordan fungerer det?", body: "Hent din Bedriftsprofils anmeldelses-URL fra Google (format: g.page/r/...). Legg den inn på et gratis QR-verktøy (qr-code-generator.com, Bitly, osv.). Skriv koden ut, legg den på visittkort, fakturaer, eller en klistrelapp på bilen. Vis den personlig på slutten av hver jobb: \"Takk, hvis du har et øyeblikk...\"" },
    ],
    relatedTerms: ["anmeldelser", "anmeldelsesfunnel", "google-bedriftsprofil"],
    relatedLinks: [
      { label: "Anmeldelsessystem", href: "/tjenester/anmeldelsesfunnel" },
    ],
  },
  {
    slug: "automatisering",
    term: "Automatisering",
    shortDescription: "Å la et system gjøre repetitive oppgaver for deg - sende SMS, registrere leads, oppdatere kalenderen.",
    category: "Automatisering",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Automatisering i markedsføringssammenheng betyr at oppgaver som ellers krever manuell innsats, skjer automatisk basert på regler. Eksempler for håndverkere: når et skjema fylles ut → SMS sendes til deg, når en faktura er betalt → anmeldelsesforespørsel sendes automatisk, når du misset et anrop → kunden får en SMS med \"ring deg tilbake straks\"." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Tid er den knappeste ressursen i en håndverkerbedrift. Hver gang du manuelt må åpne innboksen, kopiere en kundes detaljer, sende en oppfølgingsmelding eller registrere et lead, stjeles tid fra arbeidet eller familien. God automatisering frigjør 5-10 timer i uken - ofte uten at kunden merker forskjell." },
      { heading: "Hvordan fungerer det?", body: "Start smått: ett område om gangen. Første automatisering er gjerne \"tapt anrop → SMS\", neste \"forespørsel → takk-for-henvendelsen-e-post\", så \"fullført jobb → anmeldelsesforespørsel\". Verktøy som Zapier, Make og dedikerte CRM-systemer gjør det teknisk enkelt - det vanskelige er å bestemme hva som skal automatiseres først." },
    ],
    relatedTerms: ["automatisk-oppfolging", "crm", "tapt-anrop-sms", "anmeldelsesfunnel"],
    relatedLinks: [
      { label: "Alle tjenester", href: "/tjenester" },
    ],
  },
  {
    slug: "automatisk-oppfolging",
    term: "Automatisk oppfølging",
    shortDescription: "Forhåndsbestemte meldinger som sendes automatisk i riktige øyeblikk av kundereisen.",
    category: "Automatisering",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Automatisk oppfølging er en serie meldinger (SMS, e-post, evt. WhatsApp) som går ut på forhåndsbestemte tidspunkter. Eksempel: en kunde fyller ut skjemaet → får umiddelbar SMS \"Takk, jeg ringer deg innen 1 time\" → 2 timer senere en e-post med priseksempler → hvis ikke svar etter 48 timer, en pen påminnelse." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Etter en hektisk arbeidsdag er det lett å glemme den ene forespørselen som kom inn kl 14. Automatikken sørger for at kunden hele tiden føler seg ivaretatt, selv om du ikke har tid til å svare personlig før om kvelden. Resultatet: flere leads blir oppdrag, og færre føler seg glemt." },
      { heading: "Hvordan fungerer det?", body: "Definer en \"reise\" med 2-4 berøringspunkter. For hver forespørsel utløses det første meldingsutspillet automatisk, og hvert neste trinn sendes basert på tid eller handling (om kunden svarer eller ikke). Alt styres fra et CRM eller lead-verktøy - du bygger det én gang og det virker for alle fremtidige leads." },
    ],
    relatedTerms: ["automatisering", "lead-oppfolging", "crm", "tapt-anrop-sms"],
    relatedLinks: [
      { label: "Lead-oppfølging", href: "/tjenester/lead-oppfolging" },
    ],
  },
  {
    slug: "crm",
    term: "CRM",
    shortDescription: "Kundehåndteringssystem - et verktøy der alle kunder, leads og oppdrag samles på ett sted.",
    category: "Automatisering",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "CRM står for Customer Relationship Management - kundehåndtering. Et CRM-system er en database der du samler kontaktinfo, dialoger, tilbud, status og historikk for hver kunde. I stedet for Post-it-lapper og scrollende SMS-tråder har du alt på ett sted, gjerne med automatiske påminnelser." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Når du vokser fra 1 til 3-10 ansatte blir manuell oppfølging umulig. Leads glipper, kunder blir glemt, dobbeltarbeid dukker opp. Et CRM skalerer bedriften. Også som enmannsbedrift: du sparer timer på ikke å lete gjennom e-post for å finne den forrige samtalen med en kunde." },
      { heading: "Hvordan fungerer det?", body: "Alle nye forespørsler havner automatisk i CRM-et. Du kan se hvem som ringte, hva de sa, hvilket tilbud som ble sendt, og når du skal følge opp. Bra CRM-er for håndverkere har mobil-app, SMS/e-post-integrasjon og enkle rapporter (hvor mange leads i måneden, hvilken andel blir oppdrag)." },
    ],
    relatedTerms: ["lead-oppfolging", "automatisering", "automatisk-oppfolging"],
    relatedLinks: [
      { label: "Alt-i-én innboks", href: "/tjenester/alt-i-en-innboks" },
    ],
  },
  {
    slug: "tapt-anrop-sms",
    term: "Tapt anrop → SMS",
    shortDescription: "Automatisk SMS til alle som prøver å ringe deg når du ikke kan ta telefonen.",
    category: "Kundekommunikasjon",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "Et system som oppdager at du ikke tok telefonen og sender en automatisk SMS til den som ringte: \"Hei, dette er [firma]. Jeg kunne ikke ta telefonen nå - legg igjen et navn og jeg ringer tilbake så fort jeg kan.\" Sekunder senere, uten at du gjør noe." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Håndverkere misser telefonen flere ganger om dagen - du er på stillas, i krypgrunnen, ved sikringsskapet. Tidligere var det et tapt anrop et tapt anrop. En som ikke fikk svar, ringer neste firma på lista. Et automatisk svar viser at du finnes og holder muligheten åpen - uten at det har kostet deg ett sekund." },
      { heading: "Hvordan fungerer det?", body: "Systemet kobles til bedriftstelefonen din. Når et tapt anrop registreres, sendes SMS innen få sekunder. Kunden kan svare - og svaret havner i innboksen din sammen med andre meldinger. Du ser hvem som prøvde å nå deg, og kan ringe tilbake når du er ute av situasjonen. Ofte øker dette \"anrops-til-kunde\"-konverteringen med 20-40 %." },
    ],
    relatedTerms: ["automatisering", "automatisk-oppfolging", "lead-oppfolging", "webchat"],
    relatedLinks: [
      { label: "Tapt anrop → SMS", href: "/tjenester/kundekommunikasjon" },
    ],
  },
  {
    slug: "webchat",
    term: "Webchat",
    shortDescription: "Chatboks nederst på nettsiden der besøkende kan stille spørsmål direkte. Ofte kobles til SMS.",
    category: "Kundekommunikasjon",
    date: "2026-04-18",
    sections: [
      { heading: "Hva er det?", body: "En webchat er den lille meldingsboksen som dukker opp i hjørnet på nettsider. Besøkende kan skrive et spørsmål og få svar - enten fra deg direkte, fra en automatisk bot, eller som en SMS-meldingsutveksling der meldingen sendes til telefonen din og dine svar kommer tilbake i chat-vinduet." },
      { heading: "Hvorfor er dette viktig for håndverkere?", body: "Mange besøkende har ett eller to raske spørsmål (\"tilbyr dere gratis befaring?\", \"jobber dere i Bergen?\") - de gidder ikke fylle ut et skjema. En webchat fanger disse. For håndverkere er den største gevinsten når chatten integreres med SMS, så du kan svare fra mobilen mellom jobbene." },
      { heading: "Hvordan fungerer det?", body: "Installer en webchat-widget (tar 15 minutter teknisk). Sett opp en velkomstmelding (\"Hei! Spør om pris eller tilgjengelighet\"). Koble til telefonen så meldinger kommer som SMS. En enkel automatisk respons for etter arbeidstid er smart: \"Hei, vi er ute av kontor nå - legg igjen spørsmålet og vi svarer i morgen tidlig.\"" },
    ],
    relatedTerms: ["tapt-anrop-sms", "automatisk-oppfolging", "konvertering"],
    relatedLinks: [
      { label: "Tapt anrop → SMS", href: "/tjenester/kundekommunikasjon" },
    ],
  },
];
