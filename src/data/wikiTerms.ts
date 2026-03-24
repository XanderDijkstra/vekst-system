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
];

export const wikiCategories = [...new Set(wikiTerms.map((t) => t.category))];
