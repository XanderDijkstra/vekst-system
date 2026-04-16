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

export const wikiTerms: WikiTerm[] = [
  {
    slug: "seo",
    term: "SEO (Zoekmachineoptimalisatie)",
    shortDescription:
      "Zorgen dat jouw bedrijf bovenaan in Google verschijnt wanneer iemand zoekt op bijvoorbeeld 'aannemer in [jouw regio]'.",
    category: "Marketing",
    date: "2025-06-05",
    relatedTerms: ["local-seo", "organisch-verkeer", "conversie"],
    relatedLinks: [
      { label: "Website voor aannemers", href: "/diensten" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "SEO staat voor Search Engine Optimization, oftewel zoekmachineoptimalisatie. Het betekent dat je jouw website zo inricht dat Google begrijpt waar je bedrijf over gaat en je hoger laat zien in de zoekresultaten. Denk aan het als een soort digitaal uithangbord: hoe beter het bord, hoe meer mensen je winkel vinden.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Wanneer iemand een lekkend dak heeft of een aanbouw wil, pakt diegene z'n telefoon en zoekt op Google. Als jouw bedrijf niet op de eerste pagina staat, gaat die klus naar de concurrent. 75% van de mensen klikt nooit voorbij de eerste pagina. Goede SEO zorgt ervoor dat jij wél gevonden wordt — zonder te betalen voor advertenties.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "SEO draait om drie dingen: (1) De juiste woorden op je website zetten — bijvoorbeeld 'dakdekker Amsterdam' in plaats van alleen 'onze diensten'. (2) Een snelle, mobielvriendelijke website. Google straft langzame sites af. (3) Andere websites die naar jou linken, wat Google ziet als een soort aanbeveling. Wij regelen dit allemaal voor je als onderdeel van je pakket.",
      },
    ],
  },
  {
    slug: "local-seo",
    term: "Local SEO",
    shortDescription:
      "Een specifiek onderdeel van SEO gericht op klanten in jouw regio. Denk aan de kaartresultaten in Google.",
    category: "Marketing",
    date: "2025-06-20",
    relatedTerms: ["seo", "google-mijn-bedrijf"],
    relatedLinks: [
      { label: "Website voor aannemers", href: "/diensten" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Local SEO is zoekmachineoptimalisatie specifiek gericht op jouw regio. Als iemand zoekt op 'aannemer bij mij in de buurt' of 'schilder Rotterdam', wil je dat jouw bedrijf verschijnt — liefst in het kaartblok bovenaan Google (het zogenaamde 'Local Pack' of '3-pack').",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Aannemers werken bijna altijd lokaal. Je gaat geen klus doen 200 kilometer verderop. Local SEO zorgt ervoor dat je gevonden wordt door mensen in je werkgebied. 46% van alle Google-zoekopdrachten is lokaal. Voor aannemers is dat percentage nog hoger — bijna iedereen zoekt op regio.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Het begint met een goed ingevuld Google Bedrijfsprofiel (vroeger 'Google Mijn Bedrijf'). Daarnaast moet je website duidelijk vermelden in welke plaatsen je werkt. Reviews spelen ook een grote rol: hoe meer positieve reviews, hoe hoger je in de lokale resultaten verschijnt. Tot slot helpt het als je bedrijf vermeld staat op andere lokale websites en directories.",
      },
    ],
  },
  {
    slug: "google-mijn-bedrijf",
    term: "Google Bedrijfsprofiel",
    shortDescription:
      "Jouw gratis bedrijfsvermelding op Google, inclusief reviews, foto's, openingstijden en contactgegevens.",
    category: "Marketing",
    date: "2025-07-08",
    relatedTerms: ["local-seo", "seo", "reviews"],
    relatedLinks: [],
    sections: [
      {
        heading: "Wat is het?",
        body: "Google Bedrijfsprofiel (voorheen Google Mijn Bedrijf) is een gratis vermelding van je bedrijf op Google. Het is het kaartje dat verschijnt als iemand jouw bedrijfsnaam googelt, of als iemand zoekt op een dienst in jouw regio. Je ziet er je adres, telefoonnummer, openingstijden, reviews en foto's.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Dit profiel is vaak het eerste wat potentiële klanten van je zien. Nog vóór ze op je website klikken, bekijken ze je sterren, lezen ze reviews en zien ze foto's van je werk. Een goed ingevuld profiel met veel positieve reviews kan het verschil maken tussen een telefoontje of een klik naar de concurrent.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Je claimt je profiel via Google, vult alle gegevens in (adres, telefoonnummer, diensten, werkgebied), en voegt foto's toe van afgeronde projecten. Daarna is het belangrijk om regelmatig reviews te verzamelen en te reageren op beoordelingen. Ons review-systeem automatiseert dit: na elke klus krijgt je klant automatisch een uitnodiging om een review achter te laten.",
      },
    ],
  },
  {
    slug: "conversie",
    term: "Conversie",
    shortDescription:
      "Wanneer een websitebezoeker daadwerkelijk actie onderneemt: bellen, een formulier invullen, of een offerte aanvragen.",
    category: "Marketing",
    date: "2025-07-22",
    relatedTerms: ["lead", "cta", "conversieratio"],
    relatedLinks: [
      { label: "Lead Generatie", href: "/diensten/lead-generatie" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Een conversie is het moment waarop een bezoeker van je website doet wat jij wilt. Voor aannemers is dat meestal: bellen, een contactformulier invullen, of een offerte aanvragen. Elke keer dat iemand dat doet, heb je een 'conversie'. Het is eigenlijk gewoon een chique woord voor: iemand heeft interesse getoond.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Je kunt duizend bezoekers per maand op je website hebben, maar als niemand belt of een formulier invult, heb je er niets aan. Conversie is waar het om draait. Een website die goed 'converteert' levert je daadwerkelijk klussen op. Een website die er alleen mooi uitziet maar geen actie uitlokt, is een digitaal visitekaartje dat in een la ligt.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Conversie verhogen doe je door het de bezoeker zo makkelijk mogelijk te maken. Een duidelijke belknop die altijd zichtbaar is op mobiel. Een kort contactformulier (naam, telefoon, korte omschrijving — meer niet). Vertrouwenwekkende elementen zoals reviews en foto's van echt werk. En een snelle opvolging: als iemand een formulier invult en pas 3 dagen later teruggebeld wordt, ben je die klant kwijt.",
      },
    ],
  },
  {
    slug: "lead",
    term: "Lead",
    shortDescription:
      "Een potentiële klant die interesse heeft getoond in jouw diensten — bijvoorbeeld door te bellen of een formulier in te vullen.",
    category: "Marketing",
    date: "2025-08-08",
    relatedTerms: ["conversie", "lead-opvolging", "cta"],
    relatedLinks: [
      { label: "Lead Generatie", href: "/diensten/lead-generatie" },
      { label: "Lead Follow-Up", href: "/diensten/lead-follow-up" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Een lead is simpelweg een potentiële klant. Iemand die op de een of andere manier heeft laten weten dat 'ie interesse heeft. Dat kan zijn door te bellen, een formulier in te vullen op je website, een bericht te sturen via WhatsApp, of te reageren op een advertentie. Het is nog geen klant — maar wel iemand die je kunt benaderen.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Zonder leads heb je geen werk. Het is zo simpel. Elke klus begint met iemand die contact opneemt. Het probleem is dat veel aannemers leads mislopen: een gemist telefoontje op de steiger, een e-mail die vergeten wordt, een contactformulier dat pas dagen later wordt bekeken. Elke gemiste lead is een gemiste klus.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Leads binnenhalen is stap één (via je website, Google, mond-tot-mond). Maar minstens zo belangrijk is wat je ermee doet. Onderzoek toont aan dat je 80% meer kans hebt om een lead te converteren als je binnen 5 minuten reageert. Ons systeem stuurt automatisch een SMS naar elke nieuwe lead en naar elke gemiste oproep, zodat je nooit meer een potentiële klant kwijtraakt.",
      },
    ],
  },
  {
    slug: "lead-opvolging",
    term: "Lead Opvolging (Follow-Up)",
    shortDescription:
      "Het proces van contact opnemen met potentiële klanten nadat ze interesse hebben getoond.",
    category: "Automatisering",
    date: "2025-08-25",
    relatedTerms: ["lead", "conversie", "automatisering"],
    relatedLinks: [
      { label: "Lead Follow-Up Systeem", href: "/diensten/lead-follow-up" },
      { label: "Gemiste Oproep → SMS", href: "/diensten/klantcommunicatie" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Lead opvolging is alles wat je doet nadat iemand interesse toont. Terugbellen, een berichtje sturen, een offerte sturen, opnieuw contact opnemen als je niks hebt gehoord. In het Engels heet dit 'follow-up'. Het klinkt simpel, maar het is precies waar de meeste aannemers klussen mislopen.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "De gemiddelde aannemer belt een lead één keer terug. Als die niet opneemt, gebeurt er vaak niks meer. Terwijl onderzoek laat zien dat je gemiddeld 5-7 contactmomenten nodig hebt voordat iemand 'ja' zegt. Daarnaast is snelheid cruciaal: 78% van de klanten gaat in zee met het bedrijf dat als eerste reageert. Niet het goedkoopste, niet het beste — het snelste.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Met ons systeem verloopt de opvolging automatisch. Zodra iemand een aanvraag doet: (1) Binnen 1 minuut ontvangt de lead een SMS. (2) Na 1 uur volgt een e-mail met meer informatie. (3) Na 24 uur een herinnering als er nog geen contact is geweest. (4) Na 3 dagen een laatste bericht. Jij hoeft alleen de telefoon op te pakken als iemand daadwerkelijk reageert.",
      },
    ],
  },
  {
    slug: "cta",
    term: "CTA (Call to Action)",
    shortDescription:
      "Een knop of tekst die de bezoeker vertelt wat de volgende stap is, zoals 'Bel nu' of 'Vraag een offerte aan'.",
    category: "Marketing",
    date: "2025-09-05",
    relatedTerms: ["conversie", "lead"],
    relatedLinks: [],
    sections: [
      {
        heading: "Wat is het?",
        body: "CTA staat voor Call to Action — letterlijk: een oproep tot actie. Het is de knop, link of tekst op je website die de bezoeker vertelt wat 'ie moet doen. 'Bel nu', 'Vraag gratis offerte aan', 'Plan een afspraak'. Zonder een duidelijke CTA weet een bezoeker niet wat de volgende stap is en vertrekt 'ie zonder iets te doen.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Veel aannemerwebsites hebben ergens onderaan een contactpagina, en dat is het. Geen duidelijke knop, geen urgentie, geen richting. Het resultaat: mensen bekijken je site en vertrekken weer. Een goede CTA is als een bord op de werf dat zegt 'Hier naar binnen'. Zonder dat bord loopt iedereen voorbij.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Elke pagina op je website moet minimaal één duidelijke CTA hebben. Op mobiel moet er altijd een belknop zichtbaar zijn (sticky aan de onderkant). De tekst moet specifiek zijn: niet 'Contact' maar 'Vraag binnen 24 uur een offerte aan'. En de knop moet opvallen — een contrastkleur, groot genoeg om op te klikken. Wij bouwen dit standaard in bij elke website die we maken.",
      },
    ],
  },
  {
    slug: "conversieratio",
    term: "Conversieratio",
    shortDescription:
      "Het percentage bezoekers dat daadwerkelijk contact opneemt. Als 100 mensen je site bezoeken en 3 bellen, is je conversieratio 3%.",
    category: "Marketing",
    date: "2025-09-20",
    relatedTerms: ["conversie", "lead", "organisch-verkeer"],
    relatedLinks: [
      { label: "Lead Generatie", href: "/diensten/lead-generatie" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "De conversieratio is een simpel percentage: van alle mensen die je website bezoeken, hoeveel procent doet wat je wilt? Als 100 mensen je site bezoeken en 5 bellen of een formulier invullen, is je conversieratio 5%. Hoe hoger dit getal, hoe beter je website werkt.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Stel je hebt 500 bezoekers per maand. Met een conversieratio van 1% zijn dat 5 leads. Met 5% zijn dat 25 leads — vijf keer zoveel, zonder dat je meer bezoekers nodig hebt. Het verbeteren van je conversieratio is vaak veel goedkoper en sneller dan meer bezoekers proberen te krijgen. Je haalt meer uit wat je al hebt.",
      },
      {
        heading: "Wat is een goede conversieratio?",
        body: "Voor aannemerswebsites is een conversieratio tussen 3% en 8% goed. Onder de 2% betekent dat je website bezoekers niet overtuigt. Boven de 10% ben je uitstekend bezig. Wij ontwerpen websites die gemiddeld op 5-7% zitten, door slimme CTA's, vertrouwenselementen en een makkelijk contactformulier.",
      },
    ],
  },
  {
    slug: "organisch-verkeer",
    term: "Organisch Verkeer",
    shortDescription:
      "Bezoekers die je website vinden via Google zonder dat je betaalt voor advertenties.",
    category: "Marketing",
    date: "2025-10-08",
    relatedTerms: ["seo", "local-seo", "betaald-verkeer"],
    relatedLinks: [],
    sections: [
      {
        heading: "Wat is het?",
        body: "Organisch verkeer zijn alle bezoekers die je website vinden via een zoekmachine (meestal Google) zonder dat je ervoor betaalt. Het woord 'organisch' betekent hier: natuurlijk, niet betaald. Het tegenovergestelde is 'betaald verkeer' — mensen die op een advertentie klikken.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Organisch verkeer is gratis en constant. Als je website eenmaal goed scoort in Google, blijven bezoekers komen zonder dat je elke maand geld in advertenties stopt. Het is als het verschil tussen huur en koop: advertenties zijn huur (stopt de betaling, stopt het verkeer), SEO is koop (je bouwt iets op dat blijft werken).",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Organisch verkeer opbouwen kost tijd — meestal 3 tot 6 maanden voordat je echt resultaat ziet. Maar daarna heb je een constante stroom bezoekers. Wij zorgen ervoor dat je website geoptimaliseerd is voor de zoektermen die jouw klanten gebruiken: 'aannemer [stad]', 'verbouwing [regio]', 'dakdekker in de buurt', enzovoort.",
      },
    ],
  },
  {
    slug: "reviews",
    term: "Online Reviews",
    shortDescription:
      "Beoordelingen van klanten op Google, die nieuwe klanten helpen beslissen of ze jou vertrouwen.",
    category: "Reputatie",
    date: "2025-10-22",
    relatedTerms: ["google-mijn-bedrijf", "social-proof"],
    relatedLinks: [
      { label: "Review Funnel", href: "/diensten/review-funnel" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Online reviews zijn beoordelingen die klanten achterlaten op platforms zoals Google. Sterren (1 tot 5) met een stukje tekst erbij. Voor aannemers zijn Google-reviews veruit het belangrijkst, omdat die direct zichtbaar zijn wanneer iemand op je bedrijf zoekt.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "88% van de mensen vertrouwt online reviews net zoveel als een persoonlijke aanbeveling. Als jij 4.8 sterren hebt met 50 reviews en je concurrent heeft 3 sterren met 5 reviews, weet je wie er gebeld wordt. Reviews zijn het digitale equivalent van mond-tot-mondreclame — en ze werken 24/7.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "De meeste tevreden klanten laten geen review achter, simpelweg omdat ze er niet aan denken. Ons review-systeem lost dit op: na afloop van een klus krijgt je klant automatisch een berichtje met de vraag of ze tevreden zijn. Zo ja, dan worden ze direct doorgestuurd naar Google om een review te plaatsen. Zo nee, dan krijg jij eerst privé feedback zodat je het kunt oplossen. Zo bouw je snel een sterke online reputatie op.",
      },
    ],
  },
  {
    slug: "social-proof",
    term: "Social Proof",
    shortDescription:
      "Het principe dat mensen eerder iets doen als ze zien dat anderen het ook doen — zoals reviews, logo's van klanten, of 'al 100+ projecten afgerond'.",
    category: "Marketing",
    date: "2025-11-05",
    relatedTerms: ["reviews", "conversie"],
    relatedLinks: [],
    sections: [
      {
        heading: "Wat is het?",
        body: "Social proof — letterlijk 'sociaal bewijs' — is een psychologisch principe. Mensen kijken naar wat anderen doen om te beslissen wat zij moeten doen. Als een restaurant vol zit, denk je 'dat zal wel goed zijn'. Als een aannemer 80 vijfsterrenreviews heeft, denk je 'die kan ik vertrouwen'. Het is de kracht van de groep.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Iemand die een aannemer zoekt neemt een groot risico: het gaat om duizenden euro's en iemand die in je huis komt werken. Social proof verkleint dat risico. Reviews, foto's van afgeronde projecten, logo's van samenwerkingspartners, een teller met het aantal projecten — het zegt allemaal: 'andere mensen vertrouwden ons, jij kunt dat ook doen'.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Op je website moet social proof overal terugkomen. Reviews op de homepage, foto's van projecten bij elke dienst, een 'over ons' pagina met echte foto's van het team. Niet één keer onderaan de pagina, maar op elk moment waarop een bezoeker twijfelt. Wij bouwen dit standaard in: een reviewcarrousel, projectfoto's, en vertrouwensbadges op strategische plekken.",
      },
    ],
  },
  {
    slug: "crm",
    term: "CRM (Klantenbeheersysteem)",
    shortDescription:
      "Een digitaal systeem waar je al je klantcontacten, offertes en projecten bijhoudt — op één centrale plek.",
    category: "Automatisering",
    date: "2025-11-20",
    relatedTerms: ["lead", "lead-opvolging", "automatisering"],
    relatedLinks: [
      { label: "All-in-One Inbox", href: "/diensten/all-in-one-inbox" },
      { label: "Lead Follow-Up", href: "/diensten/lead-follow-up" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "CRM staat voor Customer Relationship Management — oftewel: klantenbeheersysteem. Het is een digitaal overzicht van al je klantcontacten, aanvragen, offertes en lopende projecten. In plaats van contactgegevens verspreid over WhatsApp, e-mail en papieren mappen heb je alles op één plek. Je ziet in één oogopslag wie wat heeft aangevraagd, welke offerte nog openstaat en welke klus wanneer gepland staat.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Zonder CRM glippen leads door de mazen van het net. Je bent op de steiger, iemand belt, je vergeet terug te bellen — en die klus gaat naar de concurrent. Met een CRM wordt elke aanvraag automatisch vastgelegd en krijg je herinneringen voor opvolging. Onderzoek toont aan dat aannemers zonder CRM gemiddeld 20-30% van hun leads kwijtraken simpelweg doordat ze niets terughoorden.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Een goed CRM voor aannemers registreert elk contact automatisch: via je website, telefoon of e-mail. Je ziet alle communicatie per klant terug — elk telefoontje, elke offerte, elke factuur. Je stelt herinneringen in ('Klant nog niet teruggebeld') en volgt je verkooppijplijn ('aanvraag → bezichtiging → offerte → akkoord → uitvoering'). Het beste: op je telefoon, zodat je ook vanaf de werf je zaken kunt regelen.",
      },
    ],
  },
  {
    slug: "google-ads",
    term: "Google Ads",
    shortDescription:
      "Betaalde advertenties in Google waarmee je direct bovenaan de zoekresultaten verschijnt voor zoekopdrachten zoals 'aannemer in [jouw stad]'.",
    category: "Marketing",
    date: "2025-12-05",
    relatedTerms: ["seo", "local-seo", "lead", "organisch-verkeer"],
    relatedLinks: [],
    sections: [
      {
        heading: "Wat is het?",
        body: "Google Ads (vroeger Google AdWords) zijn betaalde advertenties die bovenaan de zoekresultaten verschijnen. Je kiest zoektermen — zoals 'aannemer Rotterdam' of 'dakdekker spoed' — en betaalt een bedrag per klik. Je advertentie verschijnt alleen als iemand op die exacte termen zoekt. Je bepaalt zelf je dagbudget, dus je hebt volledige controle over de kosten.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Google Ads geven direct resultaat — binnen een dag kun je bovenaan staan. Dat is het grote voordeel ten opzichte van SEO, waarbij je maanden moet wachten. Voor aannemers zijn Google Ads bijzonder effectief voor spoedklussen (lekkage, verstopping) en seizoenspieken. Je betaalt alleen als iemand klikt, en die persoon is al actief op zoek naar jouw dienst — dat zijn warme leads.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Een gemiddelde klik kost €3 tot €15, afhankelijk van hoe competitief de regio en het vakgebied is. Als je €300 per maand uitgeeft en €10 per klik betaalt, zijn dat 30 bezoekers. Bij een conversieratio van 10% zijn dat 3 leads — en als je 2 van die 3 converteert naar een klus van €2.000, heb je €4.000 omzet uit €300 investering. Slimme Google Ads combineer je altijd met een goede landingspagina en snelle opvolging.",
      },
    ],
  },
  {
    slug: "automatisering",
    term: "Automatisering",
    shortDescription:
      "Taken die normaal handmatig zijn — zoals e-mails sturen of leads opvolgen — automatisch laten verlopen door slimme software.",
    category: "Automatisering",
    date: "2025-12-18",
    relatedTerms: ["lead-opvolging", "lead"],
    relatedLinks: [
      { label: "Lead Follow-Up Systeem", href: "/diensten/lead-follow-up" },
      { label: "Gemiste Oproep → SMS", href: "/diensten/klantcommunicatie" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Automatisering betekent dat je taken die je normaal handmatig doet, laat uitvoeren door software. Denk aan: automatisch een SMS sturen als je een telefoontje mist, automatisch een herinnering sturen als een offerte niet beantwoord is, automatisch een review-verzoek sturen na een afgeronde klus. Het systeem draait op de achtergrond terwijl jij op de werf staat.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Als aannemer sta je de hele dag op de steiger, niet achter een bureau. Je kunt niet na elk gemist telefoontje direct terugbellen, niet elke avond e-mails beantwoorden, niet elke klant handmatig om een review vragen. Automatisering doet dit voor je — consistent, snel, en zonder dat je eraan hoeft te denken.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Je stelt één keer in wat er moet gebeuren, en het systeem doet de rest. Voorbeeld: een potentiële klant vult je contactformulier in. Automatisch krijgt 'ie een bevestigings-SMS, jij krijgt een melding, na 1 uur volgt een e-mail met meer info, en als je niet binnen 24 uur hebt teruggebeld krijg je een herinnering. Alles automatisch, nul handwerk.",
      },
    ],
  },
  {
    slug: "opleverdossier",
    term: "Opleverdossier",
    shortDescription:
      "Een verzameling documenten die bewijst dat een bouwwerk voldoet aan alle bouwtechnische eisen bij oplevering.",
    category: "Regelgeving",
    date: "2026-01-08",
    relatedTerms: ["automatisering", "crm"],
    relatedLinks: [
      { label: "Automatisering Aannemers", href: "/diensten/automatisering-aannemers" },
      { label: "Digitalisering Aannemers", href: "/diensten/digitalisering-aannemers" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Een opleverdossier is een complete set documenten die je als aannemer samenstelt tijdens en na een bouwproject. Het dossier bewijst dat het opgeleverde bouwwerk voldoet aan de bouwtechnische eisen uit het Besluit bouwwerken leefomgeving (Bbl). Sinds de invoering van de Wet kwaliteitsborging (Wkb) is het opleverdossier verplicht bij de oplevering van nieuwbouw en bepaalde verbouwingen.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Het opleverdossier is niet alleen een wettelijke verplichting — het beschermt je ook als aannemer. Bij eventuele klachten of juridische geschillen na oplevering is het dossier jouw bewijs dat je werk deugdelijk was. Zonder goed dossier sta je zwak bij de verzwaarde aansprakelijkheid onder de Wkb. Daarnaast toont een professioneel opleverdossier aan klanten dat je kwaliteit levert, wat je reputatie versterkt en tot meer reviews en aanbevelingen leidt.",
      },
      {
        heading: "Wat zit er in een opleverdossier?",
        body: "Een compleet opleverdossier bevat onder andere: bouwtekeningen en constructieberekeningen, foto's van verborgen constructies (fundering, wapening, leidingwerk), certificaten en keurmerken van gebruikte materialen, keuringsrapporten van installaties (elektra, gas, water), meetrapporten (luchtdichtheid, energieprestatie) en een verklaring van de onafhankelijke kwaliteitsborger. Het exacte vereiste verschilt per type bouwwerk.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Begin met het opleverdossier op dag één van het project, niet pas bij de oplevering. Maak het onderdeel van je dagelijkse werkroutine: fotografeer elke bouwfase voordat deze wordt afgedekt, sla materiaalcertificaten direct digitaal op en laat keuringen tijdig uitvoeren. Met een digitaal systeem of CRM kun je per project alles gestructureerd bijhouden. Zo heb je bij oplevering een compleet dossier klaarliggen zonder last-minute stress.",
      },
    ],
  },
  {
    slug: "retargeting",
    term: "Retargeting",
    shortDescription:
      "Advertenties laten zien aan mensen die eerder jouw website bezochten maar geen contact opnamen — als geheugensteuntje.",
    category: "Marketing",
    date: "2026-01-28",
    relatedTerms: ["google-ads", "conversie", "lead"],
    relatedLinks: [
      { label: "Website voor aannemers", href: "/diensten" },
      { label: "Marketing Campagnes", href: "/diensten/marketing-campagnes" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Retargeting betekent dat je online advertenties laat zien aan mensen die eerder jouw website hebben bezocht, maar geen actie hebben ondernomen. Stel: iemand zoekt op 'loodgieter Amsterdam', klikt op jouw site, maar belt niet. Met retargeting ziet diegene daarna jouw advertentie terug op andere websites of op social media — als geheugensteuntje om alsnog contact op te nemen.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "De meeste bezoekers van je website bellen niet meteen bij het eerste bezoek. Ze vergelijken, twijfelen, of worden afgeleid. Retargeting zorgt ervoor dat jouw bedrijfsnaam in hun hoofd blijft zitten. Voor aannemers en ZZP'ers kan dat het verschil maken tussen een gemiste klant en een nieuwe opdracht — zonder dat je steeds opnieuw hoeft te betalen om gevonden te worden.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Je plaatst een klein stukje code (een 'pixel') op je website. Wanneer iemand je site bezoekt, onthoudt die pixel dat. Vervolgens kun je via Google Ads of Facebook die persoon je advertentie laten zien terwijl hij andere sites bekijkt. Je betaalt alleen als iemand klikt. Het mooie is: je richt je op mensen die al interesse toonden, dus de kans op een opdracht is veel groter dan bij willekeurige advertenties.",
      },
    ],
  },
  {
    slug: "bounce-rate",
    term: "Bounce Rate",
    shortDescription:
      "Het percentage bezoekers dat je website direct weer verlaat zonder iets te doen — alsof ze binnenlopen en meteen weer weggaan.",
    category: "Technisch",
    date: "2026-02-15",
    relatedTerms: ["conversie", "conversieratio", "seo"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Bounce rate (uitvalpercentage) is het percentage bezoekers dat op je website landt en direct weer vertrekt, zonder door te klikken of contact op te nemen. Vergelijk het met iemand die je werkplaats inloopt, rondkijkt en zonder iets te zeggen weer wegloopt. Hoe hoger het percentage, hoe meer bezoekers afhaken.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Een hoge bounce rate betekent dat je website bezoekers niet vasthoudt. Als 70% van je bezoekers meteen weer vertrekt, haal je maar een fractie uit je online aanwezigheid. Voor een metselaar of timmerman die investeert in gevonden worden via Google is dat zonde: je krijgt wel bezoekers, maar ze worden geen klanten. Google let er ook op: een hoge bounce rate kan je positie in zoekresultaten verslechteren.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Een goede bounce rate voor aannemerswebsites ligt tussen de 30% en 50%. Zit je daarboven, dan is er werk aan de winkel. De meest voorkomende oorzaken: je site laadt te langzaam op mobiel, het ontwerp ziet er niet professioneel uit, of bezoekers vinden niet snel wat ze zoeken. De oplossing is een snelle, overzichtelijke website met duidelijke contactmogelijkheden en foto's van echt werk. Zo hou je bezoekers vast en maak je er klanten van.",
      },
    ],
  },
  {
    slug: "schema-markup",
    term: "Schema Markup",
    shortDescription:
      "Een stukje onzichtbare code op je website dat Google vertelt wat je bedrijf doet, waar je zit en welke reviews je hebt — zodat je beter zichtbaar wordt in zoekresultaten.",
    category: "Technisch",
    date: "2026-03-28",
    relatedTerms: ["seo", "local-seo", "google-mijn-bedrijf"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
      { label: "Onze Diensten", href: "/diensten" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Schema markup is een stukje gestructureerde code dat je aan je website toevoegt, maar dat bezoekers niet zien. Het is bedoeld voor zoekmachines zoals Google. Het vertelt Google precies wat voor bedrijf je hebt, welke diensten je levert, in welk werkgebied je actief bent, en wat je reviews zijn. Vergelijk het met een etiket op een doos: de inhoud verandert niet, maar iedereen weet meteen wat erin zit.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Met schema markup kan Google jouw bedrijfsgegevens direct tonen in de zoekresultaten. Denk aan sterren uit reviews, je telefoonnummer, je werkgebied en je openingstijden — allemaal zichtbaar nog voordat iemand op je website klikt. Dat zorgt voor meer vertrouwen en meer klikken. Een dakdekker met vijf sterren direct zichtbaar in Google krijgt simpelweg meer telefoontjes dan een concurrent zonder die informatie.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Je webontwikkelaar voegt de schema markup toe aan de broncode van je website. Voor aannemers is vooral het type 'LocalBusiness' belangrijk, aangevuld met 'Service' voor je specifieke diensten en 'AggregateRating' voor je reviews. Bezoekers merken er niets van, maar Google leest die gegevens en gebruikt ze om jouw vermelding in de zoekresultaten te verrijken. Wij bouwen dit standaard in bij elke website die we opleveren.",
      },
    ],
  },
  {
    slug: "naw-consistentie",
    term: "NAW-consistentie",
    shortDescription:
      "Zorgen dat je bedrijfsnaam, adres en telefoonnummer overal op internet exact hetzelfde staan — zodat Google je vertrouwt en hoger toont.",
    category: "Technisch",
    date: "2026-03-29",
    relatedTerms: ["local-seo", "google-mijn-bedrijf", "seo"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
      { label: "Onze Diensten", href: "/diensten" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "NAW staat voor Naam, Adres en Woonplaats, maar in de praktijk gaat het om al je contactgegevens: bedrijfsnaam, adres, postcode, plaats en telefoonnummer. NAW-consistentie betekent dat deze gegevens overal op internet exact hetzelfde zijn. Op je website, op Google Mijn Bedrijf, op de Gouden Gids, op je Facebook-pagina en op elke andere plek waar je bedrijf vermeld staat.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Google checkt op tientallen plekken of jouw bedrijfsgegevens kloppen. Als je op je website 'Timmerwerken De Jong' heet, op Google 'Timmerbedrijf De Jong' en op de Gouden Gids 'De Jong Timmerwerk', dan weet Google niet zeker of het om hetzelfde bedrijf gaat. Dat kost je plekken in de zoekresultaten. Een loodgieter die overal exact dezelfde gegevens heeft, wordt door Google als betrouwbaarder gezien en komt hoger in de lokale zoekresultaten.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Maak een lijstje van alle plekken waar je bedrijf online vermeld staat: je eigen website, Google Bedrijfsprofiel, sociale media, branchegidsen en reviewsites. Controleer of je bedrijfsnaam, adres en telefoonnummer overal identiek zijn. Geen afkortingen op de ene plek en voluit op de andere. Geen oud adres op een vergeten profiel. Wij checken dit standaard voor onze klanten en zorgen dat alles klopt, zodat Google precies weet wie je bent en waar je zit.",
      },
    ],
  },
  {
    date: "2025-08-20",
    slug: "responsief-design",
    term: "Responsief Design",
    shortDescription: "Een website die zich automatisch aanpast aan het scherm waarop je hem bekijkt, of dat nou een telefoon, tablet of computer is.",
    category: "Technisch",
    relatedTerms: ["seo", "conversie", "bounce-rate"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Responsief design betekent dat je website er goed uitziet en goed werkt op elk apparaat. Of iemand je site nu opent op een iPhone, een iPad of een grote computermonitor, de tekst is leesbaar, de knoppen zijn klikbaar en de foto's passen op het scherm. De website past zich automatisch aan zonder dat je daar iets voor hoeft te doen.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Meer dan 70% van de mensen zoekt op hun telefoon naar een vakman. Als jouw website op een telefoon niet goed werkt, kleine lettertjes heeft of knoppen die je niet kunt raken, dan klikt iemand weg en belt je concurrent. Google geeft bovendien voorrang aan websites die goed werken op mobiel. Een schilder met een mobielvriendelijke site komt dus hoger in de zoekresultaten dan een collega met een verouderde site.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Als een loodgieter uit Utrecht een nieuwe website laat bouwen, wordt die automatisch responsief gemaakt. Een klant die onderweg is en op zijn telefoon zoekt naar een loodgieter, ziet dezelfde professionele site als iemand achter zijn laptop. De bel-knop is groot genoeg om aan te tikken en het contactformulier is makkelijk in te vullen. Zo verlies je geen enkele potentiele klant door een slecht werkende site.",
      },
    ],
  },
  {
    slug: "ssl-certificaat",
    term: "SSL-certificaat",
    shortDescription: "Een digitaal beveiligingskeurmerk dat ervoor zorgt dat gegevens op je website versleuteld worden verstuurd, herkenbaar aan het slotje in de adresbalk.",
    category: "Technisch",
    date: "2026-04-01",
    relatedTerms: ["seo", "responsief-design", "conversie"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Een SSL-certificaat is een stukje techniek dat de verbinding tussen je website en de bezoeker beveiligt. Je herkent het aan het slotje naast je websiteadres en aan https in plaats van http. Het zorgt ervoor dat gegevens die iemand invult op je site, zoals een naam of telefoonnummer, versleuteld worden verstuurd zodat niemand anders ze kan onderscheppen.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Zonder SSL-certificaat toont Google Chrome een waarschuwing dat je website niet veilig is. Dat schrikt potentiele klanten direct af. Een elektricien die een contactformulier op zijn site heeft zonder SSL verliest bezoekers nog voordat ze hun gegevens invullen. Daarnaast geeft Google voorrang aan beveiligde websites in de zoekresultaten. Geen SSL betekent dus minder vertrouwen en een lagere positie in Google.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Een schilder laat een nieuwe website bouwen en het SSL-certificaat wordt automatisch geactiveerd. Wanneer een klant via Google op zijn site komt en een offerteaanvraag invult, worden die gegevens veilig verstuurd. De bezoeker ziet het slotje in de browser en vertrouwt erop dat zijn informatie in goede handen is. Bij de meeste moderne hostingpakketten is SSL standaard inbegrepen, dus je hoeft er zelf niets voor te doen.",
      },
    ],
  },
  {
    slug: "google-analytics",
    term: "Google Analytics",
    shortDescription: "Een gratis tool van Google waarmee je kunt zien hoeveel mensen je website bezoeken, waar ze vandaan komen en wat ze op je site doen.",
    category: "Technisch",
    date: "2026-04-02",
    relatedTerms: ["seo", "conversie", "bounce-rate"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Google Analytics is een gratis meetinstrument van Google dat bijhoudt wat er op je website gebeurt. Het laat zien hoeveel bezoekers je site heeft, via welke zoekwoorden ze binnenkomen en welke pagina's ze bekijken. Zie het als een teller bij de deur van je digitale winkel, maar dan veel slimmer.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Als timmerman wil je weten of je website daadwerkelijk iets oplevert. Google Analytics laat zien of mensen je contactpagina bereiken of juist halverwege afhaken. Zonder die informatie is je website een zwart gat waar je geld in stopt zonder te weten wat eruit komt. Met de cijfers kun je gericht verbeteren en meer aanvragen binnenhalen.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Een loodgieter uit Utrecht ziet in Google Analytics dat de meeste bezoekers via hun telefoon binnenkomen en dat 60 procent afhaakt op de offertepagina. Dat betekent waarschijnlijk dat het formulier niet goed werkt op mobiel. Door dat aan te passen stijgt het aantal aanvragen. Zonder die data had hij nooit geweten waar het probleem zat.",
      },
    ],
  },
  {
    slug: "landingspagina",
    term: "Landingspagina",
    shortDescription: "Een speciale pagina op je website waar bezoekers terechtkomen na het klikken op een advertentie of zoekresultaat, ontworpen om ze een actie te laten uitvoeren zoals contact opnemen.",
    category: "Marketing",
    date: "2026-04-03",
    relatedTerms: ["conversie", "cta", "google-ads"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
      { label: "Marketing Campagnes", href: "/diensten/marketing-campagnes" }
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Een landingspagina is een gerichte pagina op je website die maar een doel heeft: de bezoeker een specifieke actie laten uitvoeren. Dat kan een offerteaanvraag zijn, een telefoontje of het invullen van een contactformulier. Anders dan je homepage die over van alles gaat, focust een landingspagina zich op een dienst of aanbod.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Als je een Google-advertentie draait voor badkamerrenovatie en mensen komen op je algemene homepage terecht, raken ze de weg kwijt. Met een landingspagina specifiek over badkamerrenovatie met foto's, reviews en een duidelijk contactformulier is de kans veel groter dat ze daadwerkelijk contact opnemen. Je haalt meer resultaat uit elke euro die je aan advertenties besteedt.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Een stukadoor uit Den Haag draait een advertentie voor stucwerk in de regio Haaglanden. In plaats van naar zijn homepage te linken, stuurt hij bezoekers naar een pagina die alleen over stucwerk gaat met voorbeeldfoto's en een knop om direct te bellen. Het resultaat is dat drie van de tien bezoekers contact opnemen in plaats van een op de tien via de homepage.",
      },
    ],
  },
  {
    slug: "meta-title-en-meta-description",
    term: "Meta Title en Meta Description",
    shortDescription: "De titel en korte omschrijving die Google laat zien in de zoekresultaten. Dit is vaak het eerste wat een potentiele klant van jou ziet, nog voordat hij je website bezoekt.",
    category: "Technisch",
    date: "2026-04-04",
    relatedTerms: ["seo", "local-seo", "organisch-verkeer"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" }
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "De meta title is de blauwe titel die je ziet in de zoekresultaten van Google. De meta description is de korte tekst van ongeveer anderhalve regel eronder die uitlegt waar de pagina over gaat. Samen bepalen ze of iemand op jouw resultaat klikt of op dat van een concurrent.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Als iemand zoekt op dakdekker in Utrecht krijgt hij tien resultaten te zien. Degene met de duidelijkste titel en aantrekkelijkste omschrijving krijgt de meeste klikken. Staat er alleen de naam van je bedrijf zonder uitleg, dan klikken mensen door naar de volgende. Een goede meta title en description kan zomaar twee keer zoveel bezoekers opleveren voor dezelfde positie in Google.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Een dakdekker uit Utrecht had als titel alleen zijn bedrijfsnaam staan. Na aanpassing naar Dakdekker Utrecht en omgeving - nieuwe daken en reparaties met meer dan vijftig reviews steeg het aantal klikken met zestig procent. Dezelfde positie in Google, maar een veel duidelijker signaal aan de zoeker dat hier precies staat wat hij nodig heeft.",
      },
    ],
  },
  {
    slug: "missed-call-text-back",
    term: "Missed Call Text Back",
    shortDescription: "Een systeem dat automatisch een sms stuurt naar iedereen die je belt terwijl jij niet kunt opnemen. Zo verlies je nooit meer een klant omdat je op de steiger stond.",
    category: "Automatisering",
    date: "2026-04-05",
    relatedTerms: ["automatisering", "lead-opvolging", "conversie"],
    relatedLinks: [
      { label: "Gemiste Oproep → SMS", href: "/diensten/klantcommunicatie" },
      { label: "Lead Follow-Up Systeem", href: "/diensten/lead-follow-up" }
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Missed Call Text Back is een simpel systeem dat herkent wanneer iemand je belt zonder dat jij opneemt. Binnen enkele seconden krijgt die beller automatisch een sms van jou met een korte boodschap dat je aan het werk bent en zo snel mogelijk terugbelt. De beller voelt zich gezien en zoekt niet meteen verder naar een andere vakman.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Als elektricien of loodgieter sta je vaak met je handen in het werk en kun je niet opnemen. Onderzoek laat zien dat ongeveer zestig procent van de mensen die een bedrijf belt en niemand aan de lijn krijgt direct het volgende nummer belt. Een gemiste oproep is dus vaak een gemiste klus. Met een automatische sms houd je de beller warm totdat jij hem kunt terugbellen.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Een loodgieter uit Eindhoven kreeg twintig gemiste oproepen per week en belde er misschien de helft terug. De rest ging naar een concurrent. Na het inschakelen van Missed Call Text Back kreeg elke beller binnen tien seconden een sms met de tekst dat hij later die dag werd teruggebeld. Het resultaat was dat bijna alle bellers wachtten en hij acht tot tien extra klussen per maand binnenhaalde die hij anders zou zijn kwijtgeraakt.",
      },
    ],
  },
  {
    slug: "backlinks",
    term: "Backlinks",
    shortDescription: "Links van andere websites naar jouw website. Hoe meer betrouwbare sites naar jou verwijzen, hoe hoger Google je plaatst in de zoekresultaten.",
    category: "Technisch",
    date: "2026-04-06",
    relatedTerms: ["seo", "local-seo", "organisch-verkeer"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
      { label: "Onze Diensten", href: "/diensten" }
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Een backlink is een link op een andere website die naar jouw website verwijst. Denk aan een vermelding op de site van een leverancier, een branchevereniging of een lokale nieuwssite die over jouw bedrijf schrijft. Google ziet elke backlink als een soort aanbeveling. Hoe meer betrouwbare websites naar jou linken, hoe relevanter Google jouw site vindt.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Als timmerman of schilder concurreer je online met tientallen collega's in jouw regio. Backlinks zijn een van de belangrijkste factoren waarmee Google bepaalt wie bovenaan komt te staan. Een vakman met vijf goede backlinks van lokale bedrijven en branchesites scoort hoger dan iemand met een duurdere website maar zonder enkele verwijzing van buitenaf.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Een schilder uit Breda vroeg zijn verfleverancier om een vermelding op hun website als aanbevolen vakman. Daarnaast schreef de lokale krant een kort stuk over een opvallend project dat hij had uitgevoerd. Die twee backlinks samen zorgden ervoor dat hij binnen drie maanden van pagina twee naar de top vijf van Google steeg voor de zoekterm schilder Breda. Zonder advertentiekosten, puur door zichtbaarheid op andere sites.",
      },
    ],
  },
  {
    date: "2025-09-01",
    slug: "click-through-rate",
    term: "Click-Through Rate (CTR)",
    shortDescription: "Het percentage mensen dat op jouw link klikt nadat ze hem zien in Google of in een advertentie. Hoe hoger je CTR, hoe meer bezoekers op je website.",
    category: "Marketing",
    sections: [
      {
        heading: "Wat is het?",
        body: "Click-through rate, oftewel CTR, is het percentage mensen dat daadwerkelijk op jouw link klikt nadat ze hem hebben gezien. Als honderd mensen jouw bedrijf zien staan in Google en tien daarvan klikken door naar je website, dan is je CTR tien procent. Het is een simpele maar krachtige maatstaf voor hoe aantrekkelijk jouw online vermelding is."
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Als stukadoor of loodgieter wil je dat mensen die jou vinden in Google ook echt doorklikken naar je website. Een lage CTR betekent dat mensen je wel zien staan maar niet overtuigd genoeg zijn om te klikken. Dat kan komen door een saaie titel, het ontbreken van reviews in je zoekresultaat, of een onduidelijke omschrijving. Een hogere CTR betekent meer bezoekers en dus meer kans op opdrachten."
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Stel, je bent dakdekker in Amersfoort en je Google-vermelding toont alleen je bedrijfsnaam zonder reviews of extra informatie. Een concurrent met vijf sterren en een duidelijke omschrijving zoals dakdekker gespecialiseerd in platte daken trekt veel meer klikken. Door je meta title, meta description en Google Bedrijfsprofiel te optimaliseren verbeter je je CTR zonder extra advertentiekosten."
      }
    ],
    relatedTerms: ["meta-title-en-meta-description", "conversieratio", "organisch-verkeer"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
      { label: "Onze Diensten", href: "/diensten" }
    ]
  },
  {
    date: "2025-09-05",
    slug: "funnel",
    term: "Funnel",
    shortDescription: "Een funnel is het pad dat een potentiele klant aflegt van eerste contact tot opdracht. Denk aan het als een trechter: bovenaan komen veel mensen binnen, onderaan houd je de echte klanten over.",
    category: "Marketing",
    sections: [
      {
        heading: "Wat is het?",
        body: "Een funnel, oftewel trechter, beschrijft de stappen die iemand doorloopt van het moment dat hij jouw bedrijf ontdekt tot het moment dat hij daadwerkelijk klant wordt. Bovenaan de trechter zitten veel mensen die je website bezoeken of je nummer vinden. Onderaan blijven de mensen over die ook echt een offerte aanvragen of je bellen voor een klus."
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Als loodgieter of dakdekker wil je niet alleen veel bezoekers op je website, je wilt dat die bezoekers ook daadwerkelijk contact opnemen. Een goede funnel zorgt ervoor dat mensen in elke stap een reden hebben om door te gaan. Zonder funnel verlies je potentiele klanten halverwege, bijvoorbeeld omdat je website geen duidelijke bel-knop heeft of omdat je te laat reageert op een aanvraag."
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Stel, een huiseigenaar zoekt dakdekker lekkage Rotterdam en vindt jouw website. Dat is de bovenkant van je funnel. Hij leest je dienstpagina en ziet goede reviews, dat is het midden. Onderaan de funnel klikt hij op de offerteknop of belt hij je direct. Als je vervolgens snel reageert en een nette offerte stuurt, wordt hij klant. Elke stap in die trechter kun je verbeteren om meer bezoekers om te zetten in echte opdrachten."
      }
    ],
    relatedTerms: ["conversie", "landingspagina", "cta"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
      { label: "Lead Follow-Up Systeem", href: "/diensten/lead-follow-up" }
    ]
  },
  {
    slug: "a-b-test",
    term: "A/B test",
    shortDescription: "Een A/B test betekent dat je twee versies van iets naast elkaar uitprobeert om te zien welke beter werkt. Denk aan twee verschillende koppen op je website om te kijken welke meer aanvragen oplevert.",
    category: "Marketing",
    date: "2026-04-09",
    relatedTerms: ["conversieratio", "conversie", "landingspagina"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Bij een A/B test maak je twee varianten van dezelfde pagina, knop of tekst op je website. De ene helft van je bezoekers ziet versie A, de andere helft ziet versie B. Na een tijdje vergelijk je welke versie meer resultaat oplevert, bijvoorbeeld meer telefoontjes of offerteaanvragen. Zo weet je zeker wat werkt in plaats van te gokken."
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Als metselaar of stukadoor wil je dat je website niet alleen bezocht wordt maar ook daadwerkelijk aanvragen oplevert. Met een A/B test ontdek je bijvoorbeeld of een groene belknop beter werkt dan een oranje, of dat de tekst Vraag gratis offerte aan meer klikken krijgt dan Neem contact op. Kleine verbeteringen kunnen het verschil maken tussen drie en zes aanvragen per week."
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Stel, je hebt een website als schilder en je wilt meer offerteaanvragen. Je test twee versies van je homepage: eentje met een foto van een net geschilderd huis en eentje met een foto van jou aan het werk. Na twee weken blijkt dat de versie met jou in actie dertig procent meer aanvragen oplevert. Dan kies je die variant en kun je het volgende onderdeel gaan testen."
      }
    ],
  },
  {
    slug: "mobiele-website",
    term: "Mobiele website",
    shortDescription: "Een mobiele website is een website die er netjes uitziet en goed werkt op een telefoon. Omdat de meeste klanten je eerst op hun mobiel bekijken, is dit voor aannemers cruciaal.",
    category: "Technisch",
    date: "2026-04-10",
    relatedTerms: ["responsief-design", "bounce-rate", "conversie"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
      { label: "Onze Diensten", href: "/diensten" }
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Een mobiele website is een versie van je site die automatisch past op het scherm van een telefoon of tablet. Knoppen zijn groot genoeg om met je duim aan te tikken, teksten zijn leesbaar zonder in te zoomen en foto's laden snel, ook op een matig 4G-signaal. Tegenwoordig wordt bijna elke nieuwe website mobiel eerst ontworpen en daarna pas voor desktop."
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Meer dan zeventig procent van de mensen die een aannemer zoekt, doet dat vanaf hun telefoon. Als jouw website op mobiel traag is of er rommelig uitziet, klikt die klant binnen drie seconden weg en gaat hij naar de volgende. Google straft sites die niet mobielvriendelijk zijn bovendien af in de zoekresultaten, waardoor je minder vindbaar bent. Een slechte mobiele ervaring kost je dus direct klussen."
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Stel, een klant met een lekkend dak pakt 's avonds op de bank zijn telefoon en zoekt naar een dakdekker in de buurt. Hij klikt op jouw site, wil meteen je telefoonnummer zien en op één knop kunnen drukken om te bellen. Als dat werkt, ben je binnen vijftien seconden aan de lijn. Als hij eerst moet scrollen, inzoomen of wachten tot een foto laadt, tikt hij door naar de volgende dakdekker in de lijst."
      }
    ]
  },
  {
    slug: "domein-en-hosting",
    term: "Domein en hosting",
    shortDescription: "Je domein is je adres op internet (bijvoorbeeld jouwbedrijf.nl) en hosting is de computer waarop je website draait. Zonder die twee staat er geen website online.",
    category: "Technisch",
    date: "2026-04-11",
    relatedTerms: ["ssl-certificaat", "mobiele-website", "responsief-design"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
      { label: "Onze Diensten", href: "/diensten" }
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Een domein is de naam die mensen in hun browser typen om bij jouw website te komen, zoals metselaarjansen.nl. Hosting is de ruimte op een server, oftewel een computer die altijd aanstaat, waar de bestanden van je website staan. Je betaalt meestal een vast bedrag per jaar voor je domein en een maand- of jaartarief voor de hosting. Samen zorgen ze ervoor dat je website dag en nacht bereikbaar is voor klanten."
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Een eigen domein maakt je professioneler dan een gratis Facebook-pagina of een adres dat eindigt op iets als wixsite.com. Klanten zien direct dat je een serieus bedrijf bent. Goede hosting zorgt bovendien dat je site snel laadt en niet offline is als er veel bezoek tegelijk komt. Een trage of onbereikbare website kost je aanvragen, want klanten klikken binnen drie seconden weg als het niet werkt."
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Stel, je begint als zelfstandig loodgieter en kiest de domeinnaam loodgieterpieters.nl. Je registreert die eenmalig bij een provider en je huurt hosting waar je website op komt te staan. Zodra iemand jouw domein intypt, haalt de browser de website razendsnel op van die server. Bij AannemerSysteem.com regelen we domein en hosting voor vakmensen zodat je daar zelf geen omkijken naar hebt."
      }
    ]
  },
  {
    slug: "review-funnel",
    term: "Review funnel",
    shortDescription: "Een review funnel is een automatisch systeem dat klanten na een klus uitnodigt om een Google-review achter te laten. Jij hoeft er niks voor te doen, het loopt vanzelf.",
    category: "Automatisering",
    date: "2026-04-12",
    relatedTerms: ["reviews", "social-proof", "conversie"],
    relatedLinks: [
      { label: "Review Systeem", href: "/diensten/review-funnel" },
      { label: "Onze Diensten", href: "/diensten" }
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Een review funnel is een geautomatiseerd proces dat na afloop van een klus een bericht stuurt naar je klant met het verzoek om een review achter te laten. Meestal gaat dat via sms of WhatsApp, met een directe link naar je Google Bedrijfsprofiel. Het systeem stuurt eventueel een herinnering als de klant niet reageert, zodat je zonder zelf te hoeven vragen een gestage stroom aan beoordelingen opbouwt."
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "De meeste tevreden klanten willen best een review schrijven, maar vergeten het simpelweg. Door dat verzoek te automatiseren mis je die kans niet meer. Google-reviews zijn voor aannemers een van de sterkste manieren om vertrouwen te wekken bij nieuwe klanten. Hoe meer recente, positieve reviews je hebt, hoe hoger je verschijnt in lokale zoekresultaten en hoe sneller iemand besluit om jou te bellen in plaats van de concurrent."
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Stel, je hebt net een keuken betegeld en de klant is blij met het resultaat. Dezelfde avond krijgt hij automatisch een kort sms-bericht: Bedankt voor de opdracht! Zou je een review willen achterlaten? Met daarin een link die hem rechtstreeks naar het review-formulier van Google brengt. Twee klikken en het is gedaan. Bij AannemerSysteem.com zetten we zo een review funnel voor je op die na elke oplevering automatisch draait."
      }
    ]
  },
  {
    slug: "qr-code-voor-reviews",
    term: "QR-code voor reviews",
    shortDescription: "Een vierkant scanpatroon dat klanten met hun telefoon scannen en direct op de review-pagina van jouw Google Bedrijfsprofiel komen, zonder zoeken of typen.",
    category: "Marketing",
    date: "2026-04-13",
    relatedTerms: ["reviews", "review-funnel", "google-mijn-bedrijf"],
    relatedLinks: [
      { label: "Review Systeem", href: "/diensten/review-funnel" },
      { label: "Onze Diensten", href: "/diensten" }
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Een QR-code voor reviews is een klein zwart-wit vierkant dat gekoppeld is aan de review-link van jouw Google Bedrijfsprofiel. Zodra een klant de code met zijn telefooncamera scant, opent direct het formulier waar hij sterren en een beoordeling kan achterlaten. Je drukt zo'n code op je factuur, visitekaartje, bestelbusraampje of een kaartje dat je bij oplevering meegeeft. Zo maak je van elke klant een potentiële recensent in twee seconden."
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "De grootste reden dat tevreden klanten geen review achterlaten is simpel: ze weten niet waar ze moeten klikken. Ze gaan niet vrijwillig zoeken naar jouw bedrijf op Google om vervolgens het juiste resultaat aan te tikken. Met een QR-code haal je die hele drempel weg. Voor aannemers die afhankelijk zijn van lokale zichtbaarheid is elke extra review pure winst, want meer reviews betekent meer vertrouwen bij nieuwe klanten en een hogere positie in de Google-kaartresultaten."
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Stel, je bent loodgieter en hebt net een verstopping verholpen. Je overhandigt de factuur en onderaan staat een QR-code met de tekst: Tevreden? Scan en laat een review achter. De klant pakt zijn telefoon, richt de camera op de code en staat een tel later op jouw review-pagina. Je kunt dezelfde code ook op een sticker op je bus plakken of op een kaartje dat je achterlaat. Bij AannemerSysteem.com combineren we QR-codes met automatische review-verzoeken zodat je vanuit meerdere kanten beoordelingen binnenhaalt zonder ooit om een review te hoeven vragen."
      }
    ]
  },
  {
    slug: "webchat",
    term: "Webchat (chatbot)",
    shortDescription: "Een klein chatvenster onderaan je website waarin bezoekers direct een vraag kunnen stellen. Vaak begint het automatisch met een paar standaardantwoorden en springt het over op jouw telefoon zodra iemand echt iets wil weten.",
    category: "Automatisering",
    date: "2026-04-14",
    relatedTerms: ["lead", "missed-call-text-back", "conversie"],
    relatedLinks: [
      { label: "All-in-One Inbox", href: "/diensten/all-in-one-inbox" },
      { label: "Lead Follow-Up Systeem", href: "/diensten/lead-follow-up" }
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Webchat is dat kleine knopje rechtsonder op een website waar je op kunt klikken om direct een vraag te stellen. Soms zit er een echt persoon achter, vaker een eenvoudig systeem dat de eerste vragen opvangt en de gegevens van de bezoeker doorstuurt naar jouw telefoon of e-mail. Voor aannemers wordt dit meestal gekoppeld aan sms, zodat een vraag op de website meteen op jouw mobiel binnenkomt en je vanaf daar het gesprek voortzet."
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Veel mensen die op zoek zijn naar een loodgieter of dakdekker willen niet bellen, vooral 's avonds of in het weekend. Ze willen snel een vraag kwijt zonder een formulier in te vullen of een telefoongesprek te beginnen. Webchat verlaagt die drempel enorm. Voor jou betekent het dat je leads binnenhaalt die anders nooit contact hadden opgenomen, gewoon omdat het laagdrempeliger voelt dan andere manieren."
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Stel, een huiseigenaar zit 's avonds op de bank en ontdekt een vochtplek op het plafond. Hij googelt dakdekker in zijn buurt, klikt op jouw site en ziet rechtsonder een chatvenster met de tekst Vraag direct een dakdekker. Hij tikt zijn vraag in en zijn nummer, en binnen vijftien seconden krijg jij een sms op je telefoon met zijn bericht. Jij stuurt direct een persoonlijk berichtje terug en hebt de afspraak die avond nog rond, terwijl je concurrenten pas de volgende ochtend hun mail openen."
      }
    ]
  },
  {
    slug: "paginasnelheid",
    term: "Paginasnelheid",
    shortDescription: "Hoe snel jouw website oplaadt wanneer iemand erop klikt. Voor aannemers is dit cruciaal omdat bezoekers binnen drie seconden wegklikken als het te lang duurt.",
    category: "Technisch",
    date: "2026-04-15",
    relatedTerms: ["mobiele-website", "bounce-rate", "seo"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
      { label: "Onze Diensten", href: "/diensten" }
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Paginasnelheid is de tijd die je website nodig heeft om volledig te laden nadat iemand op de link heeft geklikt. Die snelheid wordt beïnvloed door allerlei technische zaken: hoe zwaar de foto's zijn, hoeveel scripts er op de achtergrond draaien en hoe krachtig de server is waar je site op staat. Google meet dit tegenwoordig heel precies en gebruikt het als een van de factoren om te bepalen hoe hoog je in de zoekresultaten staat. Snel is gewoon beter, zowel voor Google als voor de klant die op je site belandt."
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Onderzoek laat zien dat meer dan de helft van de bezoekers een website verlaat als hij er langer dan drie seconden over doet om te laden. Voor jou als aannemer betekent dat letterlijk: elke trage seconde kost je aanvragen. Iemand die een lekkend dak heeft of een verstopte afvoer zit niet te wachten tot jouw homepage klaar is met laden, die tikt gewoon door naar de volgende dakdekker of loodgieter in de lijst. En omdat Google langzame sites lager zet in de zoekresultaten, word je bovendien minder gevonden. Snelheid is dus direct gekoppeld aan omzet."
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Stel, je hebt een mooie website met tien foto's van afgeronde projecten op je homepage. Als die foto's niet geoptimaliseerd zijn en elk vijf megabyte groot zijn, kan het laden op een matig 4G-signaal tien seconden duren. Een klant die om elf uur 's avonds op de bank naar een loodgieter zoekt geeft je die tijd niet. Bij AannemerSysteem.com bouwen we websites voor vakmensen die binnen één à twee seconden volledig in beeld staan, ook op mobiel. Foto's worden automatisch gecomprimeerd, overbodige code wordt weggelaten en de hosting is zo ingericht dat je site razendsnel reageert."
      }
    ]
  },
  {
    slug: "betaald-verkeer",
    term: "Betaald verkeer",
    shortDescription: "Bezoekers die op je website komen doordat je betaalt voor een advertentie, bijvoorbeeld via Google Ads of Facebook. Het tegenovergestelde van organisch verkeer.",
    category: "Marketing",
    date: "2026-04-16",
    relatedTerms: ["google-ads", "organisch-verkeer", "conversie"],
    relatedLinks: [
      { label: "Professionele Website", href: "/diensten/lead-generatie" },
      { label: "Marketing Campagnes", href: "/diensten/marketing-campagnes" },
    ],
    sections: [
      {
        heading: "Wat is het?",
        body: "Betaald verkeer zijn alle bezoekers die op je website terechtkomen via een advertentie waarvoor je betaalt. Dat kan een advertentie in Google zijn die bovenaan de zoekresultaten verschijnt, een gesponsord bericht op Facebook of Instagram, of een banner op een andere website. Je betaalt per klik of per vertoning en zodra je stopt met betalen, stopt het verkeer. Het is het tegenovergestelde van organisch verkeer, waarbij mensen je gratis vinden via zoekmachines.",
      },
      {
        heading: "Waarom is dit belangrijk voor aannemers?",
        body: "Als je net begint of snel meer werk nodig hebt, kun je niet wachten tot Google je vanzelf bovenaan zet. Betaald verkeer levert direct resultaat: vandaag een campagne starten, morgen de eerste aanvragen. Voor een elektricien die in een nieuw werkgebied wil starten of een timmerman die een rustige maand heeft, is het een snelle manier om zichtbaar te worden bij mensen die op dat moment actief zoeken naar een vakman.",
      },
      {
        heading: "Hoe werkt het in de praktijk?",
        body: "Stel, je bent schilder in Eindhoven en je wilt deze maand meer buitenschilderwerk binnenhalen. Je zet een Google Ads campagne op voor de zoekterm buitenschilder Eindhoven met een dagbudget van tien euro. Iedereen die op die term zoekt, ziet jouw advertentie bovenaan. Je betaalt alleen als iemand klikt, en die klik brengt hem naar een pagina op je site met een direct contactformulier. Het mooiste is dat je betaald en organisch verkeer combineert: betaald voor de snelle resultaten en organisch voor de lange termijn.",
      },
    ],
  },
];

export const wikiCategories = [...new Set(wikiTerms.map((t) => t.category))];
