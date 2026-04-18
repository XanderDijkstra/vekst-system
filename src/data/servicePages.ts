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

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "nettsider-for-malere": {
    slug: "nettsider-for-malere",
    trade: "malere",
    tradeName: "malere",
    tradeSingular: "maler",
    tradeBedrijf: "malerfirma",
    service: "nettsider",
    metaTitle: "Nettside for malere | Flere kunder som malerfirma",
    metaDescription: "En profesjonell nettside for malerfirmaet ditt - med før/etter-bilder, anmeldelser og direkte tilbudsforespørsler. Se hva Vekst Systemet bygger for malere.",
    hero: {
      badge: "Nettsider for malere",
      headline: "En nettside som viser malerarbeidet ditt",
      subheadline: "Potensielle kunder vil se resultatet før de ringer. Med en profesjonell malernettside viser du fagkunnskapen din, samler anmeldelser og får tilbudsforespørsler døgnet rundt.",
      stats: [
        { value: "87 %", label: "av huseiere søker på nett når de trenger en maler" },
        { value: "3,2x", label: "flere tilbudsforespørsler med portefølje-nettside" },
        { value: "68 %", label: "velger maleren med best presentasjon på nett" },
      ],
    },
    problems: {
      sectionTitle: "Kjenner du deg igjen?",
      items: [
        { title: "Jungeltelegrafen flater ut", description: "Du har levd av anbefalinger i årevis, men nye kunder finner deg ikke på nett. Konkurrenter med bedre nettside overtar jobbene som burde vært dine." },
        { title: "Ingen tid til markedsføring", description: "Etter en dag i stillaset orker du ikke å sette deg inn i nettsider eller SEO. Markedsføring føles som en ekstra jobb du ikke har tid til." },
        { title: "Facebook-siden henter ikke kunder", description: "Du har en Facebook-side, men den når sjelden nye kunder som faktisk vil male. Uten en egen nettside ser du utdatert ut for de som vurderer et større oppdrag." },
        { title: "Anmeldelser skjer tilfeldig", description: "Du vet Google-anmeldelser betyr mye, men glemmer å spørre etter jobben. Konkurrenten har 80 anmeldelser, du har 6 - og det merkes på antall forespørsler." },
      ],
    },
    features: {
      sectionTitle: "Hva du får i malernettsiden",
      intro: "En nettside laget spesielt for malerfirmaer. Alt er tilpasset måten kunder søker og velger maler - ikke en generisk mal med påklistret firmanavn.",
      items: [
        { title: "Portefølje med før/etter-bilder", description: "Mal galleriet med ekte prosjekter. Vi bygger en mobilvennlig portefølje du enkelt kan oppdatere fra telefonen etter hver jobb. Kunder som ser tidligere arbeid, velger deg 3x oftere enn de som bare leser tekst." },
        { title: "Egne sider per tjeneste", description: "Innvendig maling, utvendig maling, trehusmaling, taklakkering, tapetsering - hver tjeneste får sin egen side optimalisert for søk. \"Maler Oslo\" og \"Utvendig maling pris\" ranker separat og henter ulike typer kunder." },
        { title: "By-sider som ranker lokalt", description: "Jobber du i flere byer eller bydeler? Vi bygger egne sider for hvert område (\"Maler Majorstuen\", \"Maler Asker\"). Google elsker lokal relevans, og folk søker oftest med stedsnavn." },
        { title: "Enkelt kontaktskjema", description: "Kort skjema (navn, telefon, hva skal males) som sender deg en SMS umiddelbart. Dessuten en ring-knapp som er synlig på alle sider. Mange kunder vil ringe direkte - ikke skrive lange meldinger." },
      ],
    },
    examplePages: {
      sectionTitle: "Sider vi bygger for malerfirmaer",
      pages: [
        "Utvendig maling",
        "Innvendig maling",
        "Taklakkering",
        "Tapetsering",
        "Trehusmaling",
        "Maler Oslo",
        "Maler Bergen",
        "Maler Trondheim",
        "Før/etter-galleri",
        "Anmeldelser",
        "Om oss",
        "Kontakt",
      ],
    },
    industryContent: {
      sectionTitle: "Markedsføring for malere: hva virker i Norge?",
      paragraphs: [
        "Malerbransjen i Norge er tett befolket - tusenvis av enmannsfirmaer og små malerbedrifter konkurrerer om de samme jobbene. Samtidig er det akkurat denne mengden som gjør at nettsynlighet utgjør stor forskjell. En maler som rangerer i topp 3 på \"maler [by]\" henter inn 20-40 forespørsler i måneden, uten å betale for én eneste lead.",
        "De fleste malerkunder starter på Google. Privatpersoner som vil male boligen, borettslag som skal pusse opp trappeoppgang, eller gårdseiere med utvendig vedlikehold - alle skriver det samme: \"maler\" pluss stedet. De som er på side 1 får 85 % av klikkene; side 2 er praktisk talt usynlig.",
        "Lokal SEO er viktigere enn allmenn SEO. Google Bedriftsprofilen med 20+ anmeldelser, riktige kategorier og oppdaterte bilder av arbeidet, kan alene generere flere leads enn den dyreste Google Ads-kampanjen. Det beste: det koster ingenting utover tiden til å bygge det opp.",
        "Malerfirmaer som jevnlig publiserer før/etter-bilder - på nettsiden, Bedriftsprofilen, og gjerne Instagram - bygger tillit raskere enn konkurrenter som bare viser tekst. Privatpersoner som vurderer å bruke 50 000-200 000 kr på maling, vil se at du kan levere. Bilder overbeviser der ord kommer til kort.",
      ],
    },
    faqs: [
      { question: "Hvor lang tid tar det å få nettsiden live?", answer: "Vi leverer live nettside innen 7 dager etter oppstart. Hvis du leverer bilder og litt basisinfo, lager vi alt innhold, struktur og SEO-optimalisering selv. Du slipper å skrive tekster eller lære deg tekniske detaljer." },
      { question: "Hva koster en nettside for malerfirma?", answer: "Hos Vekst Systemet betaler du 2 990 kr per måned. Alt er inkludert: nettside, hosting, lokal SEO, anmeldelsesautomatisering og lead-oppfølging. Ingen oppstartskostnad. Vanlige byråer tar 30 000-80 000 kr for en tilsvarende nettside pluss månedlig hosting - og de inkluderer sjelden markedsføring." },
      { question: "Jeg har allerede en nettside - må jeg bytte alt?", answer: "Ikke nødvendigvis. I en gratis samtale ser vi på den eksisterende siden: er den mobilvennlig, rask nok, og ranker den på relevante søk? Ofte er det enklest å bygge helt på nytt fordi de eldre sidene mangler moderne SEO, men vi kan også overta et eksisterende domene så du beholder adressen." },
      { question: "Jeg jobber ikke bare i én by - hvordan rangerer jeg i flere?", answer: "Det er faktisk en styrke. Vi bygger egne landingssider per by eller område der du tar oppdrag. Jobber du i Oslo, Bærum og Asker? Alle tre får sine egne sider optimalisert for lokal SEO. Du konkurrerer separat i hver region, ofte med lavere konkurranse utenfor storbyen." },
      { question: "Hvor fort får jeg mine første leads?", answer: "Google Bedriftsprofilen kan gi første leads i løpet av 2-4 uker, spesielt i mindre byer. Organiske Google-treff for \"maler [by]\" bygger seg opp over 2-4 måneder. De fleste kunder ser innen 3 måneder tydelig økning i henvendelser via nettsiden - uten å betale per lead." },
    ],
    cta: {
      headline: "Klar for å få flere malerjobber via nettsiden?",
      subheadline: "Bestill en gratis samtale og se hvordan en skikkelig malernettside kan fylle opp kalenderen din.",
    },
  },
  "nettsider-for-takleggere": {
    slug: "nettsider-for-takleggere",
    trade: "takleggere",
    tradeName: "takleggere",
    tradeSingular: "taktekker",
    tradeBedrijf: "taktekkerfirma",
    service: "nettsider",
    metaTitle: "Nettside for takleggere | Flere oppdrag for taktekkerfirma",
    metaDescription: "En nettside som henter akutt-oppdrag og større takjobber. Synlig i Google ved takskader, isolasjonsjobber og solcelleprosjekter. Bygget for taktekkere.",
    hero: {
      badge: "Nettsider for takleggere",
      headline: "Bli funnet når taket lekker",
      subheadline: "Huseiere med takproblemer Googler \"taktekker [by]\" med én gang. Med en nettside optimalisert for takjobber er du den første de ringer - før konkurrenten rekker det.",
      stats: [
        { value: "92 %", label: "av akutt-takjobber starter med et Google-søk" },
        { value: "35 000+ kr", label: "gjennomsnittlig ordreverdi for takjobber" },
        { value: "7", label: "dager til nettsiden er live og genererer forespørsler" },
      ],
    },
    problems: {
      sectionTitle: "Kjenner du deg igjen?",
      items: [
        { title: "Sesongsvingninger treffer hardt", description: "Stormsesongen gir overflod, sommeren er stillere. Uten en nettside som samler leads hele året går du glipp av planlagte oppdrag - taktekk, isolasjon, nye takstein - som kommer inn jevnt." },
        { title: "Mittanbud tar marginene", description: "Du betaler 300-800 kr per lead på Mittanbud, konkurrerer med 3-4 andre taktekkere om samme jobb, og halvparten svarer ikke engang. Det spiser direkte av fortjenesten på hver jobb." },
        { title: "Ingen profesjonell presentasjon på nett", description: "Større oppdrag som omtekking, takisolasjon og solcellemontering ber om et seriøst firma. En Facebook-side og telefonnummer holder ikke når kunden vurderer en jobb på 150 000-400 000 kr." },
        { title: "Akutt-kunden ringer den første de finner", description: "Lekker taket, ringer huseieren den taktekkeren som dukker opp først i Google. Er det ikke deg, er den jobben tapt - uansett om du er faglig sterkere enn konkurrenten." },
      ],
    },
    features: {
      sectionTitle: "Hva du får i taktekkernettsiden",
      intro: "Takjobber er hastverk eller store prosjekter. Nettsiden er bygget for å vinne begge: topp synlighet ved akuttsøk, og tillit til store avgjørelser.",
      items: [
        { title: "Egne sider for akutt-oppdrag", description: "\"Takreparasjon akutt\", \"Taklekkasje\", \"Stormskade tak\" - alle får egne sider optimalisert for hastsøk. Inkludert en stor ring-knapp og synlig døgnbemanning-info hvis du tilbyr det." },
        { title: "Porteføljesider per taktype", description: "Flat tak, pannetak, skifer, membran, shingel, grønt tak - hver fagtype har sin egen side med bilder og referanser. Kunder med spesifikke takbehov finner direkte riktig spesialist." },
        { title: "Google Maps-domineering i din by", description: "Vi bygger Bedriftsprofilen til å plasseres i \"Local Pack\" øverst på siden. Riktige kategorier, tekniske bilder av utførte tak, og kontinuerlig tilstrømming av anmeldelser via automatikken." },
        { title: "Forespørselsskjema med bilder", description: "Kundene kan laste opp bilder av skaden direkte i skjemaet. Du ser problemet før du ringer tilbake, kan gi en grov prisindikasjon raskt, og bruker ikke tid på å spørre om detaljer." },
      ],
    },
    examplePages: {
      sectionTitle: "Sider vi bygger for taktekkere",
      pages: [
        "Takreparasjon",
        "Takomlegging",
        "Taklekkasje akutt",
        "Takisolering",
        "Takrenner",
        "Solceller på tak",
        "Takmaling",
        "Snø- og isrydding",
        "Taktekker Oslo",
        "Taktekker Bergen",
        "Taktekker Trondheim",
        "Før/etter-galleri",
      ],
    },
    industryContent: {
      sectionTitle: "Markedsføring for taktekkere: slik vinner du i 2026",
      paragraphs: [
        "Takbransjen i Norge har to svært ulike kundegrupper. Den ene er akutt-kunden: taket lekker nå, og det haster. Han ringer den første treffen. Den andre er planleggeren: store omteknings- og isolasjonsjobber med lang beslutningsprosess. Han sammenligner 3-5 firmaer og velger den som presenterer seg best på nett.",
        "For akutt-segmentet er Google Maps avgjørende. Når noen søker \"taktekker [by]\" på mobilen, vises tre bedrifter øverst - rekkefølgen bestemmes av anmeldelser, profil-kvalitet og nærhet. Uten en optimalisert Bedriftsprofil er du usynlig for kanskje den mest lønnsomme kundegruppen din.",
        "For planleggeren er portefølje og tekniske detaljer nøkkelen. Huseiere som planlegger omtekking sammenligner ofte 4-5 firmaer før de velger. De velger den som har mest bilder av lignende tak, tydeligst prisindikasjon, og flest anmeldelser. Nettside-investeringen betaler seg på én stor jobb.",
        "Spesielt for 2026: vekst i solcelle- og varmepumpeinstallasjon på eksisterende tak skaper ny etterspørsel etter takleggere som kan kombinere. Firmaer som eksplisitt viser kompetanse på disse områdene henter inn jobber som ellers ville gått til generalister. En tydelig seksjon om \"Solceller på eksisterende tak\" er et lavthengende salgsargument.",
      ],
    },
    faqs: [
      { question: "Hvor fort er nettsiden oppe?", answer: "Innen 7 dager etter oppstartssamtale. Vi trenger noen bilder fra deg, telefonnummer, og hvilke tjenester du tilbyr - resten bygger vi. Du skriver ingen tekster selv." },
      { question: "Hva koster nettside for taktekkerfirma?", answer: "2 990 kr per måned, alt inkludert: nettside, hosting, lokal SEO, anmeldelsesautomatisering og lead-oppfølging. Ingen oppstartsavgift. Én jobb i måneden mer enn dekker abonnementet." },
      { question: "Jeg får allerede leads fra Mittanbud - trenger jeg egen nettside?", answer: "Helt opp til deg. De fleste av våre taktekkerkunder bruker Mittanbud som ekstra kanal mens egen nettside bygges opp. Etter 3-6 måneder kommer flesteparten av leadsene via deres egen side, og de reduserer Mittanbud-bruken eller slutter helt." },
      { question: "Hvordan blir jeg synlig for akutt-søk?", answer: "To ting: optimalisering av Bedriftsprofilen (åpningstider, riktige kategorier, respons-knapper) og egne nettsidesider for akutte søk som \"taklekkasje reparasjon\". Kombinasjonen plasserer deg i topp 3 for de mest lønnsomme søkene innen 4-8 uker." },
      { question: "Kan kunder laste opp bilder av takskader?", answer: "Ja. Vi bygger inn et skjema der kunden kan ta et bilde med mobilen og sende direkte. Du ser skaden før du ringer tilbake, sparer tid på tilbudsprosessen, og virker svært profesjonell i kundens øyne." },
    ],
    cta: {
      headline: "Klar for å være den første taktekkeren kunden ringer?",
      subheadline: "Bestill en gratis samtale og se hvordan en takfokusert nettside gir jevn tilstrømming av oppdrag.",
    },
  },
  "nettsider-for-rorleggere": {
    slug: "nettsider-for-rorleggere",
    trade: "rorleggere",
    tradeName: "rørleggere",
    tradeSingular: "rørlegger",
    tradeBedrijf: "rørleggerfirma",
    service: "nettsider",
    metaTitle: "Nettside for rørleggere | Flere oppdrag - akutt og planlagt",
    metaDescription: "Komplett nettside for rørleggerfirma: lekkasjer, oppussingsjobber, baderomsrenovering. Topp synlighet i Google Maps og automatiske Google-anmeldelser.",
    hero: {
      badge: "Nettsider for rørleggere",
      headline: "Flere oppdrag som rørlegger - akutt og planlagt",
      subheadline: "Lekkasjer, tette avløp, nye baderom - kundene søker på nett. Med riktig nettside og Google Bedriftsprofil står du øverst når de ringer.",
      stats: [
        { value: "85 %", label: "av akutt-oppdrag starter med et Google-søk" },
        { value: "4,7+", label: "stjernesnitt trengs for å vinne lokal SEO" },
        { value: "2 990 kr", label: "per måned, alt inkludert" },
      ],
    },
    problems: {
      sectionTitle: "Kjenner du deg igjen?",
      items: [
        { title: "Bare akuttjobber, lite planlagt arbeid", description: "Du lever av lekkasjer og tette avløp. Men de store jobbene - baderomsrenoveringer, våtromsinstallasjon, nybygg - går til firmaer som er bedre synlige på nett." },
        { title: "Tapte anrop er tapte kunder", description: "Som rørlegger står du med hendene i røret. Å ta telefonen er ikke alltid mulig. Hver tapt samtale er potensielt en kunde på 5 000+ kr som går til konkurrenten." },
        { title: "Mittanbud og konkurrenter vokser", description: "Du betaler 200-600 kr per lead på plattformer, og marginen krymper. Uten en egen kundekanal på nett sitter du fast i en prisdumpende auksjon." },
        { title: "Anmeldelser samles tilfeldig", description: "Du vet rørleggere med 50+ anmeldelser vinner mot dem med 5. Men etter en rørjobb vil du videre til neste kunde - ikke mase om stjerner. Resultatet: anmeldelsene står stille." },
      ],
    },
    features: {
      sectionTitle: "Hva du får i rørleggernettsiden",
      intro: "Rørleggerjobber er 50 % akutt, 50 % planlagt. Nettsiden dekker begge: du er førstevalget ved nød, og det seriøse alternativet ved oppussing.",
      items: [
        { title: "Egne sider per tjeneste", description: "Lekkasje, avløpsspyling, baderomsrenovering, servicearbeid på beredervann, nye rør, sanitærinstallasjon. Hver tjeneste ranker separat i Google, og du henter ulike typer kunder til riktig side." },
        { title: "Synlig 24/7 for akuttjobber", description: "\"Rørlegger akutt\", \"Rørlegger vakt\", \"Lekkasje [by]\" - optimalisert med døgnbemanning-info og tydelig ring-knapp. Sortert for mobil, der de fleste hastsøk skjer." },
        { title: "Automatisk anmeldelsesforespørsel", description: "Etter hver jobb sendes en SMS til kunden: fornøyd? Lenke til Google. Ikke fornøyd? Direkte til deg. Du bygger en stødig strøm av 4,5-5 stjerners anmeldelser uten å måtte spørre manuelt." },
        { title: "Aldri tapte leads igjen", description: "Misset anrop utløser automatisk SMS til kunden: \"Takk for at du ringte. Jeg er opptatt nå, men ringer tilbake så fort jeg kan.\" Skjema på nettsiden varsler deg på mobil med det samme." },
      ],
    },
    examplePages: {
      sectionTitle: "Sider vi bygger for rørleggerfirmaer",
      pages: [
        "Lekkasje akutt",
        "Avløpsspyling",
        "Tett avløp",
        "Baderomsrenovering",
        "Nye rør / rørfornying",
        "Servicearbeid",
        "Beredervann / varmtvannstank",
        "Våtromssertifisering",
        "Rørlegger Oslo",
        "Rørlegger Bergen",
        "Rørlegger Stavanger",
        "Anmeldelser",
      ],
    },
    industryContent: {
      sectionTitle: "Markedsføring for rørleggere: hva fungerer i 2026?",
      paragraphs: [
        "Rørleggerbransjen i Norge har en fordel: etterspørselen er jevn hele året. Frosne rør om vinteren, baderomsrenovering om våren, avløpsproblemer hele tiden. Det betyr at tilstrømmingen av leads kan være stødig - forutsatt at kundene finner deg.",
        "Det er dokumentert at over 85 % av norske forbrukere Googler først når de har et rørleggerproblem. \"Rørlegger [by]\" er blant de mest søkte lokale tjenestene på internett. Likevel har flesteparten av rørleggerfirmaene i Norge enten ingen nettside eller en utdatert side som ikke dukker opp.",
        "Google Bedriftsprofilens \"Local Pack\" - de tre bedriftene som vises øverst på kartet - henter mellom 50 og 70 % av klikkene for lokale søk. Bedrifter med 30+ anmeldelser, en fullt utfylt profil og jevnlig aktivitet dominerer disse plasseringene.",
        "En økende trend er at kunder som vurderer større prosjekter (baderomsrenovering, totaloppussing) besøker 4-5 nettsider før de tar kontakt. En nettside med portefølje av tidligere prosjekter, tydelige priser eller prisindikatorer, og synlige anmeldelser er ofte forskjellen mellom å bli valgt eller ikke.",
      ],
    },
    faqs: [
      { question: "Hva koster nettside for rørleggerfirma?", answer: "2 990 kr per måned. Alt inkludert: nettside, hosting, lokal SEO, anmeldelsesautomatisering og lead-oppfølging. Ingen oppstartskostnader. Sammenlign med Mittanbud der du betaler 200-600 kr per lead - ved 10 leads i måneden er du allerede dyrere der, med mindre kontroll." },
      { question: "Hvordan blir jeg funnet ved akutt-rørleggeroppdrag?", answer: "Det viktigste er Google Bedriftsprofilen. Vi optimaliserer den for akuttrelaterte søk, setter opp 24/7-tilgjengelighet hvis du tilbyr det, og sørger for at ring-knappen er synlig umiddelbart. Kombinert med sterke anmeldelser vises du i Google Maps-kartblokken ved hastsøk." },
      { question: "Jeg har allerede profil på Mittanbud - trenger jeg dette?", answer: "Mittanbud kan fortsatt brukes parallelt. Forskjellen: på Mittanbud konkurrerer du på pris med andre rørleggere om samme kunde. Via egen nettside kommer kundene som allerede har valgt deg - basert på anmeldelser og portefølje. Konverteringsraten er 3-5x høyere." },
      { question: "Kan enmannsbedrifter konkurrere med store firmaer?", answer: "Absolutt. I lokale søkeresultater teller ikke bedriftsstørrelsen - det gjør anmeldelser, profilkvalitet og relevans for søket. En enmannsbedrift med 40 anmeldelser og en god nettside slår et stort firma med 5 anmeldelser og en utdatert side - hver gang." },
      { question: "Hva om jeg ikke har bilder av arbeidet?", answer: "Vi hjelper deg i gang. Start enkelt: ta før/etter-bilder med telefonen på hver jobb. Selv enkle bilder av nyinstallert sanitær eller en ryddig rørjobb gjør forskjell. Vi sørger for at bildene kommer på riktig plass på nettsiden og i Bedriftsprofilen." },
    ],
    cta: {
      headline: "Klar for å være rørleggeren kundene ringer først?",
      subheadline: "Bestill en gratis samtale og se hvordan systemet vårt virker for rørleggerfirmaer i din region.",
    },
  },
  "nettsider-for-pussere": {
    slug: "nettsider-for-pussere",
    trade: "pussere",
    tradeName: "pussere",
    tradeSingular: "pusser",
    tradeBedrijf: "pussefirma",
    service: "nettsider",
    metaTitle: "Nettside for pussere | Flere privatkunder som pussefirma",
    metaDescription: "Pussearbeidet ditt fortjener bedre synlighet. Nettside med portefølje, lokal SEO og anmeldelsesautomatisering - bygget for pussere og pussefirmaer.",
    hero: {
      badge: "Nettsider for pussere",
      headline: "Flere pusseoppdrag - gjennom nett-synlighet",
      subheadline: "Fra dekorpuss til glatte vegger: kundene søker på nett etter en pusser. Vi sørger for at det er ditt firma som står øverst.",
      stats: [
        { value: "70 %", label: "av pussefirmaer har ingen eller utdatert nettside" },
        { value: "22 000 kr", label: "gjennomsnittsverdi for et pusseoppdrag" },
        { value: "7", label: "dager fra oppstart til nettside live" },
      ],
    },
    problems: {
      sectionTitle: "Kjenner du deg igjen?",
      items: [
        { title: "Avhengig av underentreprise", description: "Du jobber mye som underentreprenør for entreprenører, men vil ha flere egne privatkunder. Privatkunder som kontakter deg direkte gir bedre betaling og er hyggeligere å jobbe for." },
        { title: "Arbeidet snakker for seg selv, men ingen ser det", description: "Du leverer perfekt pussearbeid, men har ingen portefølje online. Potensielle kunder kan ikke se hva du kan før de tar kontakt - og mange tar aldri sjansen." },
        { title: "Uklart hva markedsføring koster og gir", description: "Du har hørt om SEO, Google Ads og sosiale medier, men vet ikke hvor du skal starte. Det føles som å kaste penger i et svart hull." },
        { title: "Anmeldelser er vanskelig å samle", description: "På pusseoppdrag er du ofte del av et større prosjekt. Kunden ser ferdig resultat først når alt er malt, uker senere. Da er øyeblikket for en anmeldelse forbi." },
      ],
    },
    features: {
      sectionTitle: "Hva du får i pussernettsiden",
      intro: "Pussearbeid er visuelt. Kundene vil se hva du kan. Nettsiden er bygget for å vise fagkunnskapen din og nå kunder som spesifikt leter etter en pusser.",
      items: [
        { title: "Portefølje-nettside som viser fagkunnskap", description: "En side med underseksjoner for sprøytepuss, dekorpuss, betongfinish, glatte vegger, oppussing og sprekkreparasjon. Visuell portefølje du kan oppdatere fra telefonen etter hver jobb." },
        { title: "Synlig for riktige søk", description: "Vi optimaliserer for \"pusser [by]\", \"puss vegger\", \"dekorpuss\" og lignende termer - pluss Bedriftsprofil med riktige kategorier. Spesifikke søk har lavere konkurranse og bedre konverteringsrate." },
        { title: "Anmeldelser på riktig tidspunkt", description: "Vi sender anmeldelsesforespørselen når du gir beskjed om at jobben er ferdig - ikke automatisk etter et bestemt antall dager. Sånn spør du når kunden akkurat har sett resultatet og er entusiastisk." },
        { title: "Profesjonelt førsteinntrykk for privatkunder", description: "Privatkunder vil ha trygghet. En skikkelig nettside med anmeldelser, portefølje og tydelige kontaktmuligheder gir den tilliten - og gjør at du vinner jobben foran konkurrenten som bare har et telefonnummer." },
      ],
    },
    examplePages: {
      sectionTitle: "Sider vi bygger for pussefirmaer",
      pages: [
        "Sprøytepuss",
        "Dekorpuss",
        "Betongfinish / mikrosement",
        "Glatte vegger",
        "Sprekk- og skaderestaurering",
        "Oppussing av gamle puss",
        "Pusser Oslo",
        "Pusser Bergen",
        "Pusser Trondheim",
        "Før/etter-galleri",
        "Anmeldelser",
        "Kontakt",
      ],
    },
    industryContent: {
      sectionTitle: "Muligheter for pussere på nett i 2026",
      paragraphs: [
        "Pusserbransjen er blant de minst digitaliserte i byggfagene. Det høres ut som et minus, men er faktisk en enorm mulighet: konkurransen på nett er lav. Med en god nettside og 20 Google-anmeldelser er du ofte den best synlige pusseren i byen din.",
        "Søkevolumet for pusserelaterte termer vokser. \"Pusser i nærheten\", \"glatte vegger\", \"dekorpuss pris\" - dette er søk fra folk som aktivt leter etter en fagmann. Og fordi få pussere investerer i nettsynlighet, er konkurransen en brøkdel av det malere eller rørleggere opplever.",
        "En spesiell mulighet ligger i trendy finisher som betongfinish, mikrosement og dekorpuss. Disse søkes stadig oftere av huseiere inspirert av Pinterest og Instagram. En nettside med pene portefølje-bilder av slikt arbeid henter akkurat de kundene som er villige til å betale ekstra for kvalitet.",
        "For pussere som i dag hovedsakelig jobber som underentreprenør er en egen nettside første steg mot flere direkte privatkunder. Gjennomsnittsprosjektet for en privatkunde (komplett puss av en bolig) ligger fort over 25 000 kr - noen ekstra kunder i måneden utgjør stor forskjell.",
      ],
    },
    faqs: [
      { question: "Er nettmarkedsføring verdt det for pussere?", answer: "Svært verdt det. Nettopp fordi få pussere investerer i dette, er konkurransen lav. I mange norske byer finnes det færre enn 5 pussere med en god nettside og Google-anmeldelser. Med vårt system er du på pagina 1 for \"pusser [din by]\" innen noen uker." },
      { question: "Jeg jobber mest som underentreprenør. Hjelper dette meg?", answer: "Ja. En egen nettside og Google-profil trekker privatkunder som vil jobbe direkte med deg. Marginen er høyere og du er ikke avhengig av én oppdragsgiver. Du kan kombinere underentreprise og direkte kunder uten problem." },
      { question: "Hva koster nettside for pussefirma?", answer: "Hos oss 2 990 kr i måneden, alt inkludert. Ingen oppstartskostnader. En nettside fra et tradisjonelt byrå koster 25 000-60 000 kr engangssum pluss 500-1 000 kr/mnd i hosting. Og du får sjelden anmeldelsesautomatisering eller SEO med i pakken." },
      { question: "Hvor viktig er porteføljebilder for pussere?", answer: "Essensielt. Pussearbeid er visuelt - kunder vil se resultatet før de velger. Gode før/etter-bilder av glatte vegger, dekorpuss eller betongfinish overbeviser bedre enn enhver tekst. Systemet vårt gjør det enkelt å legge inn bilder fra mobilen." },
      { question: "Virker dette også for spesialiserte finisher?", answer: "Spesielt der. Vi lager egne sider for dekorpuss, betongfinish, mikrosement og andre nisje-finisher. Disse sidene rangerer ofte raskt fordi konkurransen er minimal - og trekker inn kunder som er villige til å betale for kvalitet." },
    ],
    cta: {
      headline: "Klar for flere privatkunder som pusser?",
      subheadline: "Bestill en gratis samtale og se hvordan systemet vårt hjelper pussefirmaer å vokse.",
    },
  },
  "nettsider-for-gartnere": {
    slug: "nettsider-for-gartnere",
    trade: "gartnere",
    tradeName: "gartnere",
    tradeSingular: "gartner",
    tradeBedrijf: "gartnerfirma",
    service: "nettsider",
    metaTitle: "Nettside for gartnere | Flere hageoppdrag hele året",
    metaDescription: "Nettside for gartnerfirma: visuell portefølje, lokal SEO og automatiske anmeldelser. Fra hageanlegg til vinterklargjøring - få oppdrag hele sesongen.",
    hero: {
      badge: "Nettsider for gartnere",
      headline: "Flere hageoppdrag - hele året",
      subheadline: "Hageanlegg, vedlikehold eller totalrenovering: huseiere søker på nett etter en gartner. Vi sørger for at ditt arbeid vises og at de ringer deg.",
      stats: [
        { value: "55 000 kr+", label: "gjennomsnittsverdi for et hageanleggsprosjekt" },
        { value: "3-5", label: "nettsider en kunde besøker før valg" },
        { value: "7", label: "dager til nettsiden er live" },
      ],
    },
    problems: {
      sectionTitle: "Kjenner du deg igjen?",
      items: [
        { title: "Våren er hektisk, vinteren er stille", description: "Kalenderen renner over i april-september, men vintermånedene kommer forespørslene knapt inn. Konstant nett-synlighet sikrer oppdrag hele året - også vinterjobber som beskjæring, snømåking og brolegging." },
        { title: "Kundene sammenligner grundig", description: "På hageprosjekter over 35 000 kr besøker kundene flere nettsider. Om din presentasjon er svakere enn konkurrentens, taper du oppdraget - selv om du leverer bedre arbeid." },
        { title: "Portefølje-vedlikehold skjer ikke", description: "Du anlegger flotte hager, men å fotografere og legge bilder online blir det aldri tid til. Dermed mister du sjansen til å overbevise nye kunder med tidligere arbeid." },
        { title: "Sosiale medier gir lite tilbake", description: "Du legger innimellom ut på Instagram eller Facebook, men det gir knapt kunder. De du når er ikke på leting etter en gartner - de bare scroller videre." },
      ],
    },
    features: {
      sectionTitle: "Hva du får i gartnernettsiden",
      intro: "Gartnere lever av visuelt arbeid. Nettsiden er bygget for å vise fagkunnskapen din til folk som aktivt leter etter en gartner - ikke til tilfeldige sosiale medier-brukere.",
      items: [
        { title: "Visuell nettside med prosjektgalleri", description: "En nettside med seksjoner for hagedesign, hageanlegg, hagevedlikehold, brolegging, gjerder, dammer og planteløsninger. Store før/etter-bilder som viser fagkunnskapen din." },
        { title: "Lokal SEO for sesong og utenfor sesong", description: "Om våren søker folk \"hageanlegg\". Om høsten \"hage vinterklar\" og \"beskjæring\". Vi optimaliserer synligheten for hele året, slik at kalenderen også fylles i rolige måneder." },
        { title: "Anmeldelser som gjør forskjell", description: "For gartnere vekter anmeldelser tungt - kundene slipper noen inn i hagen sin som de stoler på. Automatikken sender en forespørsel etter ferdigstillelse. Fornøyde kunder deler gjerne et bilde av den nye hagen også." },
        { title: "Tydelig tilbudsforespørsel", description: "Et enkelt skjema (navn, adresse, type prosjekt, gjerne et bilde av hagen) som sender deg en SMS. Du ser hva det gjelder før du ringer tilbake - og kan gi bedre prisindikasjon med én gang." },
      ],
    },
    examplePages: {
      sectionTitle: "Sider vi bygger for gartnerfirmaer",
      pages: [
        "Hagedesign",
        "Hageanlegg",
        "Hagevedlikehold",
        "Brolegging og steinarbeid",
        "Gjerder og porter",
        "Plen og såing",
        "Beskjæring",
        "Hage vinterklar",
        "Gartner Oslo",
        "Gartner Bergen",
        "Gartner Trondheim",
        "Før/etter-galleri",
      ],
    },
    industryContent: {
      sectionTitle: "Markedsføring for gartnere: hva fungerer i Norge?",
      paragraphs: [
        "Gartnerbransjen i Norge er sterkt sesongbasert - men det er en myte at den må være det. Vinteroppdrag som beskjæring, planlegging for våren, brolegging og snømåking er etterspurt, og firmaer som synliggjør disse tjenestene fyller kalenderen også i de rolige månedene.",
        "Hagerelaterte prosjekter er visuelle av natur. 3-5 nettsider besøkes ofte før kunden bestemmer seg. Firmaer med store prosjektbilder, tydelig struktur og flere Google-anmeldelser vinner valget - de konkurrentene med mindre presentasjon taper før de i det hele tatt fikk vist frem tilbudet sitt.",
        "Lokal SEO er særlig viktig. \"Gartner [by]\" er et søk som stort sett utføres av privatpersoner med reell interesse. De som havner i Google Maps' Local Pack henter inn 60-70 % av klikkene. Det gjelder også kombinerte termer som \"hageanlegg [by]\" eller \"brolegging [by]\".",
        "For 2026 er det en tydelig trend: flere kunder ser etter bærekraftige hageløsninger - plantevalg tilpasset lokalklima, regnvannshåndtering, insektsvennlige anlegg. Gartnere som eksplisitt profilerer disse kompetansene på nettsiden henter en kundegruppe som også er villig til å betale for kvalitet.",
      ],
    },
    faqs: [
      { question: "Hva koster nettside for gartnerfirma?", answer: "2 990 kr per måned hos oss. Alt inkludert: nettside, hosting, lokal SEO, anmeldelsesautomatisering, lead-oppfølging. Ingen oppstartskostnad. Ett ekstra hageprosjekt dekker mer enn et helt år av abonnementet." },
      { question: "Jeg har få prosjektbilder - hvordan starter jeg?", answer: "Alle gartnere starter der. Begynn enkelt: ta bilder før og etter hver jobb fremover - hagen etter klipping, en nylagt plen, en brolagt uteplass. Selv enkle mobilbilder gir effekt. Vi hjelper deg med plassering og bildetekst." },
      { question: "Ranker jeg bare i én by?", answer: "Nei - vi bygger egne sider for hvert område du jobber. Er du i Oslo men tar oppdrag i Asker og Bærum? Alle tre får egne sider. Du konkurrerer separat i hver region, og ofte med mindre konkurranse utenfor storbyene." },
      { question: "Jobber dette også utenfor hovedsesongen?", answer: "Ja, det er nettopp poenget med en nettside som ranker hele året. Vintersøk som \"beskjæring\", \"hage vinterklar\", \"brolegging inngang\" og \"snømåking bedrift\" fortsetter mens konkurrentene står stille. Noen av våre gartnerkunder har gått fra 0 vinterforespørsler til 10-15 i måneden." },
      { question: "Hvor raskt ser jeg resultater?", answer: "Bedriftsprofilens Local Pack kan gi første klikk innen 2-3 uker. Organiske resultater bygger seg over 2-4 måneder. Dei fleste gartnerkunder opplever merkbar økning i forespørsler innen 3 måneder, og jevn tilstrømming etter 6 måneder." },
    ],
    cta: {
      headline: "Klar for flere hageoppdrag via nettsiden?",
      subheadline: "Bestill en gratis samtale og se hvordan vi hjelper gartnerfirmaer å vokse - hele året.",
    },
  },
};
