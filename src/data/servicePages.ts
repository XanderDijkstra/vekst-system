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
  "websites-voor-schilders": {
    slug: "websites-voor-schilders",
    trade: "schilders",
    tradeName: "schilders",
    tradeSingular: "schilder",
    tradeBedrijf: "schildersbedrijf",
    service: "websites",
    metaTitle: "Website voor Schilders | Meer Klanten als Schildersbedrijf",
    metaDescription: "Een professionele website voor je schildersbedrijf die klanten overtuigt met voor-en-na foto's, reviews en directe offerteaanvragen. Ontdek wat Aannemer Systeem voor schilders bouwt.",
    hero: {
      badge: "Websites voor Schilders",
      headline: "Een website die jouw schilderwerk laat spreken",
      subheadline: "Potentiële klanten willen resultaat zien voordat ze bellen. Met een professionele schilderswebsite toon je je vakmanschap, verzamel je reviews en ontvang je dag en nacht offerteaanvragen.",
      stats: [
        { value: "87%", label: "van huiseigenaren zoekt online naar een schilder" },
        { value: "3,2x", label: "meer offerteaanvragen met een portfolio-website" },
        { value: "68%", label: "kiest de schilder met de beste online presentatie" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als schilder?",
      items: [
        {
          title: "Je portfolio laat je vakmanschap niet zien",
          description: "Je levert prachtig schilderwerk af, maar potentiële klanten zien alleen een verouderde website of helemaal geen online portfolio. Je voor-en-na transformaties verdwijnen op je telefoon in plaats van klanten te overtuigen.",
        },
        {
          title: "Klanten kiezen de concurrent met betere reviews",
          description: "Je hebt tevreden klanten, maar hun positieve ervaringen staan nergens online. Concurrenten met zichtbare Google-reviews en testimonials winnen de opdracht terwijl jij beter werk levert.",
        },
        {
          title: "Offerteaanvragen lopen via omwegen",
          description: "Klanten moeten bellen tijdens werktijd of een e-mail sturen en hopen op antwoord. Een groot deel van de aanvragen gaat verloren omdat er geen eenvoudig offerteformulier op je website staat.",
        },
        {
          title: "Je bent onzichtbaar voor lokale zoekopdrachten",
          description: "Als iemand zoekt op 'schilder in [jouw regio]' verschijn je nergens. Zonder geoptimaliseerde website mis je dagelijks potentiële klanten die actief op zoek zijn naar een schilder.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor schildersbedrijven",
      intro: "Een schilderswebsite moet visueel overtuigen. Wij bouwen alles wat je nodig hebt om van bezoekers betalende klanten te maken.",
      items: [
        {
          title: "Voor-en-na portfolio met projectgalerij",
          description: "Laat het verschil zien dat jouw schilderwerk maakt. Met interactieve sliders toon je de transformatie van elk project — van afgebladderde gevels tot strakke afwerkingen.",
        },
        {
          title: "Diensten per specialisatie",
          description: "Aparte pagina's voor binnenschilderwerk, buitenschilderwerk, houtrot reparatie en behangen. Zo vind Google je voor élke zoekopdracht en begrijpen klanten direct wat je aanbiedt.",
        },
        {
          title: "Slimme offertecalculator",
          description: "Laat bezoekers een indicatie krijgen door oppervlakte en type werk in te vullen. Dit verlaagt de drempel om contact op te nemen en levert je warme leads op.",
        },
        {
          title: "Review- en keurmerkintegratie",
          description: "Automatische weergave van je Google-reviews, koppeling met je schilderskeurmerk en testimonials van tevreden klanten — alles op de juiste plek om vertrouwen op te bouwen.",
        },
        {
          title: "Seizoensgebonden landingspagina's",
          description: "Automatisch de juiste boodschap op het juiste moment: buitenschilderwerk promoten in het voorjaar, binnenschilderwerk in de herfst. Zo sluit je website altijd aan bij de vraag.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw schilderswebsite",
      pages: [
        "Binnenschilderwerk",
        "Buitenschilderwerk",
        "Houtrot Reparatie",
        "Behangen",
        "Kleuradvies",
        "Portfolio / Projecten",
        "Reviews & Ervaringen",
        "Offerte Aanvragen",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor schilders",
      paragraphs: [
        "De schildersbranche is visueel. Klanten willen zien wat je kunt voordat ze je bellen. Een professionele website met een sterk portfolio is het verschil tussen een volle agenda en wachten op de telefoon. Terwijl mond-tot-mondreclame nog steeds waardevol is, begint meer dan 85% van de woningeigenaren hun zoektocht naar een schilder online.",
        "Veel schildersbedrijven vertrouwen nog op platforms als Werkspot of advertenties in de lokale krant. Het probleem: je concurreert daar op prijs in plaats van op kwaliteit. Met een eigen website bepaal jij het verhaal. Je laat je specialisaties zien, toont voor-en-na foto's en bouwt vertrouwen op met echte klantreviews.",
        "Een goed geoptimaliseerde schilderswebsite trekt maandelijks tientallen bezoekers aan die actief op zoek zijn naar een schilder in jouw regio. Met de juiste pagina's voor elke dienst — van binnenschilderwerk tot houtrot reparatie — scoor je hoog in Google en converteer je bezoekers naar offerteaanvragen.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een schildersbedrijf?",
        answer: "Bij Aannemer Systeem werken we met vaste maandelijkse pakketten speciaal voor de bouwsector. Je betaalt geen grote eenmalige investering maar een vast bedrag per maand inclusief hosting, onderhoud en updates. Neem contact op voor de actuele prijzen.",
      },
      {
        question: "Kan ik mijn schilderwerk-portfolio zelf bijwerken?",
        answer: "Ja, je kunt eenvoudig zelf voor-en-na foto's toevoegen aan je portfolio. Wij zorgen ervoor dat het systeem zo simpel is dat je vanaf je telefoon op de bouwplaats een project kunt uploaden.",
      },
      {
        question: "Hoe snel staat mijn schilderswebsite online?",
        answer: "De meeste schilderswebsites zijn binnen 2 weken live. We beginnen met een intake waarin we jouw specialisaties, werkgebied en branding bespreken. Daarna bouwen wij de website terwijl jij gewoon doorwerkt.",
      },
      {
        question: "Komen er echt meer klanten via een website?",
        answer: "Onze schildersklanten ontvangen gemiddeld 3 tot 5 keer meer offerteaanvragen dan via platforms als Werkspot. Het grote verschil: deze leads komen direct bij jou binnen, zonder commissie of concurrentie op prijs.",
      },
      {
        question: "Wordt mijn website geoptimaliseerd voor lokale zoekopdrachten?",
        answer: "Absoluut. Elke pagina wordt geoptimaliseerd voor jouw regio en specialisatie. Denk aan zoektermen als 'schilder Amsterdam', 'buitenschilderwerk Utrecht' of 'houtrot reparatie Den Haag'.",
      },
    ],
    cta: {
      headline: "Klaar om meer schilderklanten te krijgen?",
      subheadline: "Vraag een vrijblijvend gesprek aan en ontdek hoe een professionele website jouw schildersbedrijf laat groeien.",
    },
  },

  "websites-voor-dakdekkers": {
    slug: "websites-voor-dakdekkers",
    trade: "dakdekkers",
    tradeName: "dakdekkers",
    tradeSingular: "dakdekker",
    tradeBedrijf: "dakdekkersbedrijf",
    service: "websites",
    metaTitle: "Website voor Dakdekkers | Meer Opdrachten als Dakdekkersbedrijf",
    metaDescription: "Een professionele dakdekker-website die stormschade-klanten direct vangt en reguliere opdrachten binnenhaalt. Ontdek wat Aannemer Systeem bouwt voor dakdekkers.",
    hero: {
      badge: "Websites voor Dakdekkers",
      headline: "Een website die werkt — ook als het stormt",
      subheadline: "Na een storm zoeken duizenden huiseigenaren tegelijk naar een dakdekker. Met een snelle, goed vindbare website ben jij de eerste die ze vinden en bellen.",
      stats: [
        { value: "340%", label: "meer zoekopdrachten naar dakdekkers na stormschade" },
        { value: "74%", label: "van spoedklanten belt de eerste dakdekker die ze vinden" },
        { value: "€2.400", label: "gemiddelde opdrachtwaarde voor dakrenovatie" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als dakdekker?",
      items: [
        {
          title: "Spoedklanten kunnen je niet vinden",
          description: "Na storm of lekkage zoeken huiseigenaren in paniek naar een dakdekker. Zonder goed vindbare website gaan deze urgente, hoogwaardige opdrachten naar de concurrent die wél bovenaan Google staat.",
        },
        {
          title: "Je werkgebied is onduidelijk voor Google",
          description: "Je werkt in meerdere gemeenten, maar Google weet niet waar je actief bent. Hierdoor verschijn je niet in de zoekresultaten van klanten net buiten je standplaats — terwijl je daar prima kunt werken.",
        },
        {
          title: "Klanten twijfelen aan je betrouwbaarheid",
          description: "Dakwerk is een grote investering en klanten zijn wantrouwig door verhalen over malafide dakdekkers. Zonder professionele online aanwezigheid met reviews en certificeringen verlies je klanten aan beter gepresenteerde concurrenten.",
        },
        {
          title: "Je mist het seizoensgebonden zoekverkeer",
          description: "In het najaar en voorjaar piekt de vraag naar dakinspecties en onderhoud. Zonder gerichte landingspagina's voor deze seizoenen laat je de drukste periodes onbenut.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor dakdekkersbedrijven",
      intro: "Een dakdekker-website moet snel laden, vertrouwen wekken en spoedklanten direct laten bellen. Wij bouwen precies dat.",
      items: [
        {
          title: "Stormschade-landingspagina",
          description: "Een speciale pagina die automatisch beter scoort wanneer er stormschade-zoekopdrachten pieken. Met click-to-call knoppen en een spoedformulier vang je de urgente klanten op.",
        },
        {
          title: "Daktype-specifieke dienstpagina's",
          description: "Aparte pagina's voor platte daken, schuine daken, dakpannen, bitumen, EPDM en zinkwerk. Elke pagina is geoptimaliseerd voor de specifieke zoekopdracht.",
        },
        {
          title: "Certificeringen en garantie-sectie",
          description: "Prominent je Dakmerk-certificering, vakgroep-lidmaatschap en garantievoorwaarden tonen. Dit neemt de grootste drempel weg: twijfel over betrouwbaarheid.",
        },
        {
          title: "Dakinspectie-aanvraagmodule",
          description: "Laat klanten eenvoudig een gratis dakinspectie aanvragen met een paar klikken. Inclusief automatische bevestigingsmail en herinnering.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw dakdekker-website",
      pages: [
        "Dakrenovatie",
        "Stormschade Herstel",
        "Plat Dak (bitumen/EPDM)",
        "Dakpannen Vervangen",
        "Zinken Dakgoten",
        "Dakinspectie Aanvragen",
        "Dakisolatie",
        "Over Ons & Certificeringen",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor dakdekkers",
      paragraphs: [
        "De dakdekkerbranche heeft een unieke dynamiek: naast regulier onderhoud en renovatie zijn er enorme pieken na stormen en extreme weersomstandigheden. Een website die daarop voorbereid is, kan in één stormweek meer leads opleveren dan in een heel kwartaal via traditionele kanalen.",
        "Vertrouwen is cruciaal in de dakdekkerswereld. Klanten investeren duizenden euro's en willen zeker weten dat ze met een betrouwbaar bedrijf werken. Een professionele website met certificeringen, projectfoto's en echte reviews is het krachtigste wapen tegen de 'malafide dakdekker'-angst.",
        "Met gerichte pagina's voor elk daktype en elke dienst — van EPDM-dakbedekking tot dakgoot-renovatie — trek je precies de klanten aan die jouw specialisme zoeken. Zo concurreer je niet op prijs maar op expertise.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een dakdekkersbedrijf?",
        answer: "Wij werken met vaste maandelijkse pakketten zonder grote eenmalige investering. Je website wordt volledig gebouwd, gehost en onderhouden. Neem contact op voor een prijsindicatie op maat.",
      },
      {
        question: "Kan de website pieken opvangen na stormschade?",
        answer: "Ja, onze websites zijn gebouwd op snelle infrastructuur die verkeerspieken aankan. Bovendien hebben we speciale stormschade-pagina's die automatisch beter ranken wanneer de vraag piekt.",
      },
      {
        question: "Hoe toon ik mijn Dakmerk-certificering?",
        answer: "We integreren je certificeringen prominent op je website — in de header, op dienstpagina's en op een aparte certificeringspagina. Dit bouwt direct vertrouwen op bij bezoekers.",
      },
      {
        question: "Kan ik zelf projecten toevoegen aan de website?",
        answer: "Ja. Via een eenvoudig dashboard upload je foto's en omschrijvingen van afgeronde projecten. Ideaal om klanten te overtuigen met recent werk.",
      },
      {
        question: "Word ik gevonden in meerdere regio's?",
        answer: "Absoluut. We maken gerichte pagina's voor elke regio waarin je actief bent. Zo scoor je in Google voor 'dakdekker Rotterdam', 'dakdekker Dordrecht' en elke andere gemeente in je werkgebied.",
      },
    ],
    cta: {
      headline: "Klaar om meer dakopdrachten binnen te halen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website jouw dakdekkersbedrijf laat groeien — ook als het stormt.",
    },
  },

  "websites-voor-loodgieters": {
    slug: "websites-voor-loodgieters",
    trade: "loodgieters",
    tradeName: "loodgieters",
    tradeSingular: "loodgieter",
    tradeBedrijf: "loodgietersbedrijf",
    service: "websites",
    metaTitle: "Website voor Loodgieters | Meer Spoedklanten & Opdrachten",
    metaDescription: "Een professionele loodgieter-website die 24/7 spoedaanvragen opvangt en reguliere klanten binnenhaalt. Ontdek wat Aannemer Systeem voor loodgieters bouwt.",
    hero: {
      badge: "Websites voor Loodgieters",
      headline: "Een website die 24/7 spoedklanten voor je opvangt",
      subheadline: "Lekkages wachten niet tot kantooruren. Met een professionele loodgieterswebsite ontvang je dag en nacht aanvragen van klanten die nú een loodgieter nodig hebben.",
      stats: [
        { value: "61%", label: "van loodgietersaanvragen is spoed buiten werktijd" },
        { value: "92%", label: "van mensen zoekt online bij een lekkage" },
        { value: "€180", label: "gemiddelde waarde per spoedopdracht" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als loodgieter?",
      items: [
        {
          title: "Je mist spoedaanvragen buiten werktijd",
          description: "Een lekkage om 22:00 uur, een verstopte afvoer in het weekend — klanten zoeken direct een loodgieter online. Zonder 24/7 vindbare website met spoedoptie gaan deze opdrachten naar de concurrent.",
        },
        {
          title: "Klanten weten niet wat je allemaal doet",
          description: "Je installeert cv-ketels, legt leidingwerk aan en doet badkamerrenovaties — maar klanten denken dat je alleen verstoppingen verhelpt. Zonder duidelijke dienstpagina's mis je de grotere opdrachten.",
        },
        {
          title: "Je betaalt te veel commissie aan platforms",
          description: "Via Werkspot en vergelijkbare platforms betaal je per lead en concurreer je met vijf andere loodgieters op dezelfde klant. Met een eigen website komen klanten direct bij jou, zonder tussenpartij.",
        },
        {
          title: "Vertrouwen opbouwen lukt niet via een telefoonnummer alleen",
          description: "Klanten laten een onbekende loodgieter in hun huis. Zonder website met reviews, foto's en bedrijfsinformatie kiezen ze voor de loodgieter die wél een professionele online aanwezigheid heeft.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor loodgietersbedrijven",
      intro: "Een loodgieterswebsite moet snel zijn, spoed afhandelen en de volle breedte van je diensten tonen. Dit is wat wij leveren.",
      items: [
        {
          title: "Spoedsectie met directe belknop",
          description: "Een prominent spoedblok op elke pagina met click-to-call functionaliteit. Klanten met een lekkage hoeven niet te zoeken — ze bellen met één tik.",
        },
        {
          title: "Diensten per specialisatie",
          description: "Aparte pagina's voor cv-ketel installatie, leidingwerk, rioolontstopping, badkamerrenovatie en meer. Zo vind Google je voor elke specifieke zoekopdracht.",
        },
        {
          title: "Storingschecklist-tool",
          description: "Een interactieve tool waarmee klanten hun probleem beschrijven. Dit helpt jou de urgentie inschatten en levert gedetailleerde leads op.",
        },
        {
          title: "Service- en onderhoudsabonnementen",
          description: "Presenteer je onderhoudscontracten online met duidelijke pakketten en prijzen. Terugkerende klanten zijn de basis voor een stabiel bedrijf.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw loodgieterswebsite",
      pages: [
        "Spoed Loodgieter (24/7)",
        "CV-Ketel Installatie & Onderhoud",
        "Rioolontstopping",
        "Badkamer Renovatie",
        "Leidingwerk & Aanleg",
        "Kraan & Toilet Reparatie",
        "Over Ons",
        "Contact & Offerte",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor loodgieters",
      paragraphs: [
        "De loodgietersbranche draait voor een groot deel op spoed. Wanneer een leiding springt of de cv-ketel uitvalt, grijpen mensen naar hun telefoon en zoeken op Google. De loodgieter die bovenaan staat met een duidelijke spoedpagina en klikbaar telefoonnummer, krijgt de opdracht. Het is zo simpel — en zo belangrijk.",
        "Naast spoedwerk zijn er de grotere projecten: badkamerrenovaties, cv-ketel installaties en leidingwerk voor nieuwbouw. Voor deze opdrachten vergelijken klanten meerdere loodgieters. Een professionele website met projectvoorbeelden, duidelijke prijsindicaties en sterke reviews maakt het verschil tussen wel of niet gebeld worden.",
        "Met een eigen website bouw je een direct kanaal naar klanten, zonder commissie aan platforms en zonder concurrentie op prijs. Je trekt klanten aan die specifiek jóu kiezen op basis van je expertise, reviews en uitstraling.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een loodgietersbedrijf?",
        answer: "We werken met vaste maandpakketten inclusief hosting, onderhoud en updates. Geen grote eenmalige investering maar een voorspelbaar bedrag per maand. Vraag vrijblijvend de actuele prijzen op.",
      },
      {
        question: "Kan de website spoedaanvragen afhandelen buiten werktijd?",
        answer: "Ja. Elke pagina bevat een spoedsectie met click-to-call knop en spoedformulier. Klanten kunnen je altijd bereiken, ook als je op een klus bent.",
      },
      {
        question: "Wordt mijn website geoptimaliseerd voor 'spoed loodgieter'?",
        answer: "Absoluut. We optimaliseren specifiek voor spoedgerelateerde zoektermen in jouw regio, zoals 'spoed loodgieter Amsterdam' of 'lekkage loodgieter Rotterdam'.",
      },
      {
        question: "Kan ik cv-ketel merken en modellen op mijn website tonen?",
        answer: "Ja, we kunnen pagina's aanmaken per merk en type cv-ketel dat je installeert en onderhoudt. Dit trekt zeer gerichte zoekverkeer aan van klanten die precies weten wat ze nodig hebben.",
      },
    ],
    cta: {
      headline: "Klaar om meer loodgietersopdrachten te ontvangen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website je 24/7 spoedklanten en reguliere opdrachten oplevert.",
    },
  },

  "websites-voor-stukadoors": {
    slug: "websites-voor-stukadoors",
    trade: "stukadoors",
    tradeName: "stukadoors",
    tradeSingular: "stukadoor",
    tradeBedrijf: "stukadoorsbedrijf",
    service: "websites",
    metaTitle: "Website voor Stukadoors | Meer Klanten als Stukadoorsbedrijf",
    metaDescription: "Een professionele stukadoor-website die je vakmanschap toont met textuur-close-ups, reviews en directe offerteaanvragen. Ontdek wat Aannemer Systeem bouwt.",
    hero: {
      badge: "Websites voor Stukadoors",
      headline: "Een website die jouw strakke afwerking laat zien",
      subheadline: "Stucwerk is een ambacht dat je moet zien om te waarderen. Met een professionele website toon je de kwaliteit van je werk en trek je klanten aan die waarde hechten aan vakmanschap.",
      stats: [
        { value: "78%", label: "van woningeigenaren vergelijkt stukadoors online" },
        { value: "4,1x", label: "meer aanvragen met gedetailleerde projectfoto's" },
        { value: "€3.500", label: "gemiddelde opdrachtwaarde voor stucwerk" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als stukadoor?",
      items: [
        {
          title: "Je afwerking is niet zichtbaar online",
          description: "Het verschil tussen goed en uitstekend stucwerk zit in de details — de textuur, de strakheid, de afwerking. Op een slechte website of zonder website is dat verschil onzichtbaar. Klanten kiezen dan op prijs.",
        },
        {
          title: "Klanten kennen het verschil tussen stucsoorten niet",
          description: "Spachtelputz, sierpleister, glad stucwerk — voor klanten is het abracadabra. Zonder duidelijke uitleg op je website weten ze niet wat ze nodig hebben en kiezen ze de goedkoopste optie.",
        },
        {
          title: "Je krijgt te kleine opdrachten",
          description: "Zonder website die je volledige aanbod toont, word je alleen gebeld voor kleine reparaties. De grote renovatieprojecten en nieuwbouwopdrachten gaan naar stukadoors die zich online als specialist presenteren.",
        },
        {
          title: "Aannemers en architecten vinden je niet",
          description: "Naast particulieren zijn aannemers en architecten je belangrijkste opdrachtgevers. Zonder professionele website nemen ze je niet serieus als onderaannemer voor hun projecten.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor stukadoorsbedrijven",
      intro: "Een stukadoor-website moet de textuur en kwaliteit van je werk overbrengen. Wij bouwen een website die dat doet.",
      items: [
        {
          title: "Textuur- en materiaal-galerij",
          description: "Hoogwaardige close-up foto's van verschillende stuctechnieken en materialen. Klanten zien exact welke afwerkingen je aanbiedt en kiezen bewust voor kwaliteit.",
        },
        {
          title: "Stucsoort-keuzehulp",
          description: "Een interactieve tool die klanten helpt de juiste stucsoort te kiezen op basis van ruimte, stijl en budget. Dit positioneert jou als expert en levert warme leads op.",
        },
        {
          title: "Pagina's per stuctechniek",
          description: "Aparte, geoptimaliseerde pagina's voor glad stucwerk, sierpleister, spachtelputz, cementgebonden stuc en Venetiaans stucwerk. Perfecte SEO-dekking.",
        },
        {
          title: "Referentieprojecten met ruimtefoto's",
          description: "Volledige projectpresentaties met ruimtefoto's, gebruikte materialen en klanttestimonials. Dit overtuigt zowel particulieren als zakelijke opdrachtgevers.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw stukadoor-website",
      pages: [
        "Glad Stucwerk",
        "Sierpleister",
        "Spachtelputz",
        "Buitenstucwerk / Gevelstuc",
        "Plafond Stucwerk",
        "Wanden Egaliseren",
        "Projecten & Referenties",
        "Offerte Aanvragen",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor stukadoors",
      paragraphs: [
        "Stukadoorswerk is een visueel vak. Het verschil tussen een goede en een uitstekende stukadoor zit in de afwerking, en dat moet je kunnen laten zien. Een professionele website met high-quality foto's van je werk is de krachtigste manier om je vakmanschap te bewijzen aan potentiële klanten.",
        "De stukadoorsmarkt is competitief, maar de meeste concurrenten presenteren zich niet goed online. Een sterke website met duidelijke diensten, projectvoorbeelden en klantreviews geeft je een enorm voordeel. Klanten die kwaliteit zoeken — en bereid zijn daarvoor te betalen — kiezen de stukadoor die het meest professioneel overkomt.",
        "Daarnaast bereik je met een goed geoptimaliseerde website niet alleen particulieren, maar ook aannemers, architecten en projectontwikkelaars die zoeken naar betrouwbare onderaannemers. Dit zijn de opdrachten die je agenda voor maanden vullen.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een stukadoorsbedrijf?",
        answer: "Wij werken met vaste maandpakketten inclusief alles: ontwerp, bouw, hosting en onderhoud. Geen verrassingen achteraf. Neem contact op voor de actuele prijzen.",
      },
      {
        question: "Kan ik verschillende stuctechnieken apart laten zien?",
        answer: "Ja, elke stuctechniek krijgt een eigen pagina met uitleg, foto's en voordelen. Zo vinden klanten precies de afwerking die ze zoeken en scoor je hoog in Google op specifieke zoekopdrachten.",
      },
      {
        question: "Hoe fotografeer ik stucwerk het beste voor de website?",
        answer: "We geven je tips voor het fotograferen van stucwerk — denk aan scherp licht, close-ups en hoeken die de textuur benadrukken. Desgewenst regelen we een fotograaf voor je projecten.",
      },
      {
        question: "Kan ik zakelijke en particuliere klanten apart aanspreken?",
        answer: "Absoluut. We maken aparte secties of pagina's voor particuliere en zakelijke opdrachtgevers met de juiste tone-of-voice en relevante informatie voor beide doelgroepen.",
      },
    ],
    cta: {
      headline: "Klaar om meer stukadoorsopdrachten binnen te halen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website jouw stukadoorsbedrijf laat groeien.",
    },
  },

  "websites-voor-hoveniers": {
    slug: "websites-voor-hoveniers",
    trade: "hoveniers",
    tradeName: "hoveniers",
    tradeSingular: "hovenier",
    tradeBedrijf: "hoveniersbedrijf",
    service: "websites",
    metaTitle: "Website voor Hoveniers | Meer Tuinklanten als Hoveniersbedrijf",
    metaDescription: "Een professionele hovenier-website die je tuinprojecten laat zien en het hele jaar door klanten aantrekt. Ontdek wat Aannemer Systeem bouwt voor hoveniers.",
    hero: {
      badge: "Websites voor Hoveniers",
      headline: "Een website die jouw tuinen tot leven brengt",
      subheadline: "Tuinontwerp is emotie. Met een website vol inspirerende projecten, seizoenstips en directe offerteaanvragen laat je potentiële klanten dromen — en bellen.",
      stats: [
        { value: "83%", label: "van woningeigenaren zoekt online naar een hovenier" },
        { value: "€4.800", label: "gemiddelde opdrachtwaarde voor tuinaanleg" },
        { value: "45%", label: "meer aanvragen in het voorjaar met seizoenspagina's" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als hovenier?",
      items: [
        {
          title: "Je mooiste tuinen blijven onzichtbaar",
          description: "Je legt prachtige tuinen aan, maar de foto's verdwijnen in je telefoon. Potentiële klanten die online zoeken naar inspiratie en een hovenier, zien jouw werk simpelweg niet.",
        },
        {
          title: "In de winter droogt je agenda op",
          description: "Zonder website die het hele jaar door tuinonderhoud, winterklaar-services en planningsafspraken promoot, is het stilvalt in de wintermaanden onnodig groot.",
        },
        {
          title: "Klanten onderschatten de investering",
          description: "Zonder duidelijke uitleg over wat tuinaanleg inhoudt, verwachten klanten een complete tuin voor een fractie van de werkelijke kosten. Dit levert frustrerende gesprekken en tijdverlies op.",
        },
        {
          title: "Je bereikt geen klanten die écht willen investeren",
          description: "Via platforms concurreer je met de goedkoopste hoveniers. De klanten die bereid zijn te betalen voor kwaliteit zoeken op Google en kiezen de hovenier met de meest inspirerende website.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor hoveniersbedrijven",
      intro: "Een hovenierswebsite moet inspireren en het hele jaar door klanten aantrekken. Dit is hoe wij dat realiseren.",
      items: [
        {
          title: "Tuinproject-portfolio met drone-foto's",
          description: "Volledige projectpresentaties met voor-en-na foto's, dronebeelden en klantquotes. Laat bezoekers de transformatie voelen die jij realiseert.",
        },
        {
          title: "Seizoensgebonden content-kalender",
          description: "Automatisch wisselende content per seizoen: tuinaanleg in het voorjaar, onderhoud in de zomer, winterklaar-services in het najaar. Je website is altijd actueel.",
        },
        {
          title: "Tuinstijl-inspiratiepagina's",
          description: "Pagina's per tuinstijl — modern, landelijk, Japans, kindvriendelijk — die klanten helpen hun droomtuin te visualiseren en jou als expert positioneren.",
        },
        {
          title: "Onderhoudsabonnement-module",
          description: "Presenteer je tuinonderhoudspakketten helder online. Klanten kiezen hun pakket en melden zich direct aan. Terugkerende inkomsten het hele jaar door.",
        },
        {
          title: "3D-tuinontwerp galerij",
          description: "Toon je 3D-ontwerpen en technische tekeningen naast de gerealiseerde tuin. Dit laat zien hoe professioneel je werkt, van ontwerp tot oplevering.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw hovenierswebsite",
      pages: [
        "Tuinaanleg & Ontwerp",
        "Tuinonderhoud",
        "Bestrating & Terras",
        "Beplantingsplan",
        "Schuttingen & Erfafscheiding",
        "Vijvers & Waterpartijen",
        "Projecten & Inspiratie",
        "Offerte Aanvragen",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor hoveniers",
      paragraphs: [
        "De hovenierssector leent zich als geen ander voor visuele online marketing. Klanten zoeken inspiratie voor hun tuin en willen zien wat mogelijk is. Een website met prachtige projectfoto's, tuinstijl-inspiratie en seizoenstips trekt precies de klanten aan die bereid zijn te investeren in kwaliteit.",
        "Seizoensgebondenheid is de grootste uitdaging voor hoveniers. Een slimme website vangt dit op met gerichte landingspagina's per seizoen, een blog met tuintips die het hele jaar verkeer trekt, en onderhoudsabonnementen die voor constante inkomsten zorgen — ook in de rustige maanden.",
        "Met een eigen website bouw je een merk op dat verder gaat dan een vermelding op Werkspot. Je trekt klanten aan die bewust kiezen voor jouw stijl en aanpak, in plaats van vijf hoveniers te vergelijken op prijs. Het resultaat: hogere marges, betere klanten en een vollere agenda.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een hoveniersbedrijf?",
        answer: "Wij werken met vaste maandpakketten inclusief ontwerp, bouw, hosting en onderhoud. Neem contact op voor de actuele prijzen afgestemd op jouw situatie.",
      },
      {
        question: "Kan ik seizoensgebonden aanbiedingen op mijn website plaatsen?",
        answer: "Ja, we bouwen een systeem waarmee seizoenscontent automatisch wisselt. In het voorjaar promoot je tuinaanleg, in het najaar winterklaar-services. Dit kan ook handmatig aangepast worden.",
      },
      {
        question: "Hoe presenteer ik tuinontwerpen het beste online?",
        answer: "We adviseren een combinatie van 3D-ontwerpen, technische tekeningen en foto's van het gerealiseerde eindresultaat. Dit toont je volledige werkproces en overtuigt klanten van je professionaliteit.",
      },
      {
        question: "Kan ik een blog bijhouden met tuintips?",
        answer: "Absoluut. Een blog met seizoensgebonden tuintips trekt organisch verkeer aan en positioneert je als expert. Wij helpen je met de opzet en eventueel het schrijven van de eerste artikelen.",
      },
    ],
    cta: {
      headline: "Klaar om meer tuinprojecten binnen te halen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website jouw hoveniersbedrijf het hele jaar door laat groeien.",
    },
  },

  "websites-voor-klusbedrijven": {
    slug: "websites-voor-klusbedrijven",
    trade: "klusbedrijven",
    tradeName: "klusbedrijven",
    tradeSingular: "klusjesman",
    tradeBedrijf: "klusbedrijf",
    service: "websites",
    metaTitle: "Website voor Klusbedrijven | Meer Klanten als Klusjesman",
    metaDescription: "Een professionele klusbedrijf-website die je veelzijdigheid toont en dagelijks nieuwe klusaanvragen oplevert. Ontdek wat Aannemer Systeem bouwt.",
    hero: {
      badge: "Websites voor Klusbedrijven",
      headline: "Een website die laat zien dat jij álles kunt",
      subheadline: "Als klusbedrijf ben je de alleskunner waar iedereen naar zoekt. Met een overzichtelijke website die je complete aanbod toont, hoeven klanten maar op één plek te kijken.",
      stats: [
        { value: "71%", label: "van huiseigenaren zoekt online naar een klusjesman" },
        { value: "12+", label: "verschillende diensten die een klusbedrijf gemiddeld aanbiedt" },
        { value: "89%", label: "van klusklanten wordt terugkerende klant bij goede ervaring" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als klusbedrijf?",
      items: [
        {
          title: "Klanten weten niet hoe breed je aanbod is",
          description: "Je doet alles van schilderwerk tot sanitair, van meubels monteren tot laminaat leggen. Maar zonder website die dit overzichtelijk toont, word je alleen gebeld voor kleine klusjes.",
        },
        {
          title: "Je concurreert met hobbyklussers op prijs",
          description: "Op platforms word je vergeleken met amateurs die voor een tientje per uur werken. Zonder professionele uitstraling is het moeilijk om je meerwaarde als vakman duidelijk te maken.",
        },
        {
          title: "Terugkerende klanten vinden je moeilijk terug",
          description: "Tevreden klanten willen je opnieuw inhuren, maar je visitekaartje is kwijt. Een website maakt je altijd vindbaar — een Google-zoekopdracht volstaat.",
        },
        {
          title: "Je mist de grotere renovatieprojecten",
          description: "Klanten met een complete renovatie zoeken een betrouwbare partij. Zonder portfolio van afgeronde projecten en een professionele website geven ze de voorkeur aan grotere bedrijven.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor klusbedrijven",
      intro: "Een klusbedrijf-website moet overzichtelijk zijn ondanks een breed aanbod. Wij maken dat mogelijk.",
      items: [
        {
          title: "Dienstenoverzicht met categorieën",
          description: "Een overzichtelijke pagina die al je diensten groepeert: schilderwerk, sanitair, montage, vloeren, timmerwerk en meer. Klanten vinden in één oogopslag wat ze zoeken.",
        },
        {
          title: "Klusaanvraag-formulier met foto-upload",
          description: "Laat klanten hun klus beschrijven en een foto uploaden. Zo kun jij direct inschatten wat er nodig is en een realistische offerte geven.",
        },
        {
          title: "Kleine-klussen prijsindicatie",
          description: "Toon vaste prijzen of indicaties voor veelvoorkomende kleine klussen. Dit verlaagt de drempel om te bellen en trekt klanten aan die weten wat ze willen.",
        },
        {
          title: "Terugkerende klanten-portaal",
          description: "Een simpele manier voor bestaande klanten om snel een nieuwe klus aan te melden. Bouw een vaste klantenkring op die je jaar na jaar inschakelt.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw klusbedrijf-website",
      pages: [
        "Schilderwerk",
        "Sanitair & Loodgieterswerk",
        "Meubels & Keuken Montage",
        "Laminaat & Vloeren",
        "Timmerwerk & Reparaties",
        "Tuin & Buitenwerk",
        "Over Ons",
        "Klus Aanmelden",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor klusbedrijven",
      paragraphs: [
        "De kracht van een klusbedrijf is veelzijdigheid. Maar die kracht wordt een zwakte wanneer klanten niet weten wat je allemaal kunt. Een professionele website die je volledige aanbod overzichtelijk presenteert, is het verschil tussen 'alleen kleine klusjes' en 'complete renovatieprojecten'.",
        "Klusbedrijven bouwen op terugkerende klanten. Een website is je digitale visitekaartje dat nooit kwijtraakt. Tevreden klanten vinden je altijd terug en delen je website met buren, vrienden en familie. Met elke tevreden klant groeit je netwerk automatisch.",
        "Door je te onderscheiden met een professionele website laat je de prijsconcurrentie achter je. Klanten die online zoeken naar een betrouwbare klusjesman en jouw website vinden met projectfoto's en sterke reviews, kiezen voor zekerheid — niet voor de laagste prijs.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een klusbedrijf?",
        answer: "Onze pakketten zijn speciaal afgestemd op de bouwsector met vaste maandprijzen. Geen eenmalige investering maar een vast bedrag inclusief alles. Vraag de actuele prijzen op.",
      },
      {
        question: "Kan ik al mijn diensten overzichtelijk laten zien?",
        answer: "Ja, we maken een overzichtelijk dienstenoverzicht met categorieën en aparte subpagina's voor de belangrijkste diensten. Zo is je website compleet zonder onoverzichtelijk te worden.",
      },
      {
        question: "Hoe onderscheid ik me van hobbyklussers?",
        answer: "Met een professionele website, projectfoto's, klantreviews en duidelijke bedrijfsinformatie straal je betrouwbaarheid uit. Klanten zien direct het verschil met een amateur.",
      },
      {
        question: "Kan ik vaste prijzen voor kleine klussen tonen?",
        answer: "Absoluut. We bouwen een prijstabel of calculator voor veelvoorkomende klusjes. Dit wekt vertrouwen en trekt klanten aan die snel willen schakelen.",
      },
    ],
    cta: {
      headline: "Klaar om meer klusaanvragen te ontvangen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website jouw klusbedrijf laat groeien.",
    },
  },

  "websites-voor-tegelzetters": {
    slug: "websites-voor-tegelzetters",
    trade: "tegelzetters",
    tradeName: "tegelzetters",
    tradeSingular: "tegelzetter",
    tradeBedrijf: "tegelzetbedrijf",
    service: "websites",
    metaTitle: "Website voor Tegelzetters | Meer Klanten als Tegelzetbedrijf",
    metaDescription: "Een professionele tegelzetter-website die je vakmanschap laat zien met projectfoto's, materiaalinspiratie en directe offerteaanvragen.",
    hero: {
      badge: "Websites voor Tegelzetters",
      headline: "Een website die jouw tegelwerk de aandacht geeft die het verdient",
      subheadline: "Mooi tegelwerk verkoopt zichzelf — als klanten het kunnen zien. Met een professionele website toon je je patronen, materialen en afwerking op de manier die ze verdienen.",
      stats: [
        { value: "76%", label: "van badkamerrenovaties begint met online onderzoek" },
        { value: "€5.200", label: "gemiddelde opdrachtwaarde voor tegelwerk" },
        { value: "3,8x", label: "meer aanvragen met visuele projectpagina's" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als tegelzetter?",
      items: [
        {
          title: "Klanten zien niet hoe precies jij werkt",
          description: "Het verschil tussen een goede en een geweldige tegelzetter zit in de millimeters — voegwerk, patroonuitlijning, afwerking rond leidingen. Op een foto op je telefoon is dat niet zichtbaar. Op je website wel.",
        },
        {
          title: "Je wordt alleen gebeld voor eenvoudig tegelwerk",
          description: "Mozaïek, grootformaat tegels, visgraatpatronen — dit is waar de marge zit. Maar zonder een website die dit specialisme toont, krijg je alleen de standaard badkamertjes.",
        },
        {
          title: "Klanten kiezen op prijs omdat ze het verschil niet zien",
          description: "Voor leken lijkt tegelwerk tegelwerk. Zonder visuele uitleg op je website van kwaliteitsverschillen kiezen klanten simpelweg de goedkoopste offerte.",
        },
        {
          title: "Showrooms en tegelleveranciers verwijzen niet naar jou",
          description: "Tegelshowrooms zoeken betrouwbare tegelzetters om aan te bevelen. Zonder professionele website sta je niet op hun radar voor doorverwijzingen.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor tegelzetbedrijven",
      intro: "Een tegelzetter-website moet materialen, patronen en vakmanschap visueel overbrengen. Dit is wat wij leveren.",
      items: [
        {
          title: "Materiaal- en patroongalerij",
          description: "Een visueel overzicht van tegelsoorten en legpatronen die je aanbiedt. Klanten laten zich inspireren en kiezen bewust voor complexer (en winstgevender) werk.",
        },
        {
          title: "Ruimte-specifieke projectpagina's",
          description: "Aparte portfolio's voor badkamers, keukens, vloeren, terrassen en zwembaden. Elke pagina geoptimaliseerd voor de bijbehorende zoekopdracht.",
        },
        {
          title: "Tegelinspiratie-tool",
          description: "Een interactieve galerij waar klanten filteren op stijl, kleur en materiaal. Dit maakt van browsers actieve leads die precies weten wat ze willen.",
        },
        {
          title: "Samenwerking-pagina voor leveranciers",
          description: "Een professionele pagina gericht op showrooms en tegelleveranciers. Toon je certificeringen en werkwijze om doorverwijzingen te stimuleren.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw tegelzetter-website",
      pages: [
        "Badkamer Betegelen",
        "Keuken Tegels",
        "Vloertegels Leggen",
        "Terras & Buitentegels",
        "Mozaïek & Sierwerk",
        "Tegels Verwijderen & Voorbereiden",
        "Projecten & Inspiratie",
        "Offerte Aanvragen",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor tegelzetters",
      paragraphs: [
        "Tegelwerk is visueel en tactiel — klanten moeten het zien om het te waarderen. Een professionele website met scherpe projectfoto's, close-ups van voegwerk en overzichten van patronen is de krachtigste manier om je vakmanschap te bewijzen. In een branche waar klanten het verschil niet altijd begrijpen, maakt een goede website dat verschil zichtbaar.",
        "De tegelzetmarkt profiteert enorm van de renovatiegolf in Nederland. Badkamers en keukens worden massaal vernieuwd en klanten beginnen hun zoektocht online. Met gerichte pagina's per ruimtetype en tegelsoort trek je precies de klanten aan die actief op zoek zijn naar een tegelzetter.",
        "Daarnaast opent een professionele website deuren naar samenwerkingen met tegelshowrooms en leveranciers. Zij zoeken betrouwbare tegelzetters om aan klanten aan te bevelen — en een sterke online aanwezigheid is daarvoor essentieel.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een tegelzetbedrijf?",
        answer: "Wij werken met vaste maandpakketten zonder grote eenmalige kosten. Je website wordt volledig gebouwd en onderhouden. Neem contact op voor een prijsindicatie.",
      },
      {
        question: "Kan ik verschillende tegelsoorten en patronen laten zien?",
        answer: "Ja, we bouwen een uitgebreide galerij waar je kunt filteren op materiaal, patroon en ruimtetype. Dit helpt klanten bij hun keuze en positioneert jou als expert.",
      },
      {
        question: "Hoe fotografeer ik tegelwerk het beste?",
        answer: "We geven je tips voor het fotograferen van tegelwerk: juiste belichting, close-ups van voegwerk en overzichtsfoto's van de complete ruimte. Het verschil zit in de details.",
      },
      {
        question: "Kan ik samenwerken met showrooms via mijn website?",
        answer: "Absoluut. We maken een professionele partnerpagina die je kunt delen met showrooms en leveranciers. Met certificeringen en referenties bouw je vertrouwen op voor doorverwijzingen.",
      },
      {
        question: "Wordt mijn website gevonden op zoektermen als 'tegelzetter badkamer'?",
        answer: "Ja, elke pagina wordt geoptimaliseerd voor specifieke zoektermen in jouw regio. Van 'tegelzetter badkamer Amsterdam' tot 'mozaïek leggen Rotterdam'.",
      },
    ],
    cta: {
      headline: "Klaar om meer tegelprojecten binnen te halen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website jouw tegelzetbedrijf laat groeien.",
    },
  },

  "websites-voor-elektriciens": {
    slug: "websites-voor-elektriciens",
    trade: "elektriciens",
    tradeName: "elektriciens",
    tradeSingular: "elektricien",
    tradeBedrijf: "elektriciensbedrijf",
    service: "websites",
    metaTitle: "Website voor Elektriciens | Meer Opdrachten als Elektricien",
    metaDescription: "Een professionele elektricien-website die vertrouwen wekt met certificeringen en 24/7 storingaanvragen opvangt. Ontdek wat Aannemer Systeem bouwt.",
    hero: {
      badge: "Websites voor Elektriciens",
      headline: "Een website die klanten vertrouwen geeft in jouw vakmanschap",
      subheadline: "Elektriciteitswerk is vertrouwenswerk. Een professionele website met zichtbare NEN-certificeringen, duidelijke diensten en spoedopties overtuigt klanten dat ze bij de juiste vakman zijn.",
      stats: [
        { value: "79%", label: "van klanten controleert certificeringen online" },
        { value: "52%", label: "van elektra-aanvragen is storing of spoed" },
        { value: "€2.800", label: "gemiddelde opdrachtwaarde voor groepenkast-vernieuwing" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als elektricien?",
      items: [
        {
          title: "Klanten twijfelen of je gecertificeerd bent",
          description: "NEN 1010, NEN 3140, Sterkin-registratie — je hebt alle papieren, maar klanten zien ze niet. Zonder website die je certificeringen prominent toont, kiezen ze voor de concurrent die dit wél laat zien.",
        },
        {
          title: "Storingen buiten werktijd kosten je opdrachten",
          description: "Stroomuitval om 21:00 uur, een kortsluiting in het weekend — klanten zoeken direct online naar een elektricien. Zonder vindbare website met spoedoptie mis je deze urgente opdrachten.",
        },
        {
          title: "Je grotere projecten worden onderschat",
          description: "Je doet niet alleen stopcontacten — je vernieuwt groepenkastkasten, installeert laadpalen en doet complete elektra-aanleg voor verbouwingen. Zonder website weten klanten dit niet.",
        },
        {
          title: "De energietransitie levert je te weinig op",
          description: "Zonnepanelen, laadpalen, warmtepompen — de vraag explodeert maar klanten vinden de elektriciens die hier actief op adverteren. Zonder gerichte pagina's mis je deze groeisector.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor elektriciensbedrijven",
      intro: "Een elektricien-website moet vertrouwen wekken en zowel spoed als regulier werk bedienen. Dit bouwen wij.",
      items: [
        {
          title: "Certificeringen & veiligheidspagina",
          description: "Je NEN-certificeringen, Sterkin-registratie en verzekeringen prominent in beeld. Dit is de eerste plek waar klanten naar kijken en het belangrijkste vertrouwenssignaal.",
        },
        {
          title: "Storingsdienst met 24/7 contactoptie",
          description: "Een speciale storingspagina met directe belknop en spoedformulier. Klanten met een stroomstoring hoeven niet te zoeken — ze bellen direct.",
        },
        {
          title: "Energietransitie-pagina's",
          description: "Aparte pagina's voor laadpalen, zonnepaneel-installatie en warmtepomp-aansluitingen. De snelst groeiende markt in de elektra-sector verdient gerichte aandacht.",
        },
        {
          title: "Technische diensten per categorie",
          description: "Aparte pagina's voor groepenkast-vernieuwing, elektra-aanleg nieuwbouw, data-bekabeling en domotica. Elk geoptimaliseerd voor de specifieke zoekopdracht.",
        },
        {
          title: "Keuringsrapport-aanvraag",
          description: "Laat klanten eenvoudig een elektra-keuring aanvragen via je website. Ideaal voor verhuurders die aan NEN-normen moeten voldoen.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw elektricien-website",
      pages: [
        "Storing & Spoed (24/7)",
        "Groepenkast Vernieuwen",
        "Laadpaal Installeren",
        "Elektra-aanleg Nieuwbouw/Verbouw",
        "Zonnepanelen Aansluiten",
        "Elektra Keuring (NEN 1010)",
        "Domotica & Smart Home",
        "Contact & Offerte",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor elektriciens",
      paragraphs: [
        "De elektrotechnische sector zit midden in de grootste transformatie in decennia. Laadpalen, zonnepanelen, warmtepompen en smart home-systemen zorgen voor een explosie aan vraag. Elektriciens die zich online positioneren voor deze diensten, profiteren maximaal van de energietransitie. Een website met gerichte pagina's voor deze groeimarkten is geen luxe maar noodzaak.",
        "Vertrouwen is nergens zo belangrijk als bij elektriciteitswerk. Klanten laten letterlijk iemand aan hun meterkast en bedrading werken. Een website die je certificeringen, verzekeringen en ervaring toont, neemt de grootste drempel weg. Uit onderzoek blijkt dat 79% van de klanten certificeringen online controleert voordat ze een elektricien bellen.",
        "Naast de energietransitie blijft storingsdienst een belangrijke inkomstenbron. Een website die 24/7 vindbaar is met een duidelijke storingspagina en click-to-call knop, vangt de meest urgente en waardevolle opdrachten op.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een elektriciensbedrijf?",
        answer: "Wij werken met vaste maandpakketten inclusief ontwerp, bouw, hosting en onderhoud. Speciaal afgestemd op de bouwsector. Vraag vrijblijvend de actuele prijzen op.",
      },
      {
        question: "Kan ik mijn NEN-certificeringen op de website tonen?",
        answer: "Absoluut. We plaatsen je certificeringen prominent op elke pagina — in de header, footer en op een aparte certificeringspagina. Dit is het belangrijkste vertrouwenssignaal voor potentiële klanten.",
      },
      {
        question: "Helpt een website bij het aantrekken van laadpaal-klanten?",
        answer: "Ja, een gerichte landingspagina voor laadpaal-installatie trekt zeer gerichte leads aan. We optimaliseren voor zoektermen als 'laadpaal installeren' en 'laadpaal thuis laten plaatsen' in jouw regio.",
      },
      {
        question: "Kan de website storingaanvragen afhandelen?",
        answer: "Ja, we bouwen een storingspagina met directe belknop en spoedformulier. Klanten kunnen je 24/7 bereiken bij stroomstoringen en andere urgente problemen.",
      },
    ],
    cta: {
      headline: "Klaar om meer elektra-opdrachten binnen te halen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website jouw elektriciensbedrijf laat groeien in de energietransitie.",
    },
  },

  "websites-voor-timmerlieden": {
    slug: "websites-voor-timmerlieden",
    trade: "timmerlieden",
    tradeName: "timmerlieden",
    tradeSingular: "timmerman",
    tradeBedrijf: "timmerbedrijf",
    service: "websites",
    metaTitle: "Website voor Timmerlieden | Meer Opdrachten als Timmerbedrijf",
    metaDescription: "Een professionele timmerman-website die je houtwerk toont en klanten overtuigt van je vakmanschap. Ontdek wat Aannemer Systeem bouwt voor timmerlieden.",
    hero: {
      badge: "Websites voor Timmerlieden",
      headline: "Een website die je houtwerk laat spreken",
      subheadline: "Van dakkapellen tot maatwerk kasten — timmerwerk is overal. Met een professionele website laat je de breedte en kwaliteit van je ambacht zien aan klanten die er echt voor willen betalen.",
      stats: [
        { value: "69%", label: "van verbouwers zoekt online naar een timmerman" },
        { value: "€6.500", label: "gemiddelde opdrachtwaarde voor dakkapel-plaatsing" },
        { value: "2,7x", label: "meer aanvragen met gedetailleerde projectpagina's" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als timmerman?",
      items: [
        {
          title: "Klanten denken dat je alleen kozijnen doet",
          description: "Timmerwerk omvat zoveel meer — dakkapellen, aanbouwen, trappen, maatwerk meubels, restauratie. Zonder website die je volledige aanbod toont, mis je de grotere en interessantere projecten.",
        },
        {
          title: "Je maatwerk wordt niet gewaardeerd",
          description: "Het verschil tussen standaard en maatwerk is op een klein schermpje nauwelijks zichtbaar. Een professionele website met detailfoto's en projectbeschrijvingen maakt dat verschil duidelijk.",
        },
        {
          title: "Aannemers kennen je niet als onderaannemer",
          description: "Veel timmerwerk loopt via hoofdaannemers. Zonder professionele online aanwezigheid sta je niet op hun radar wanneer ze een timmerman zoeken voor een project.",
        },
        {
          title: "Particulieren kiezen voor de bouwmarkt",
          description: "Klanten overwegen kant-en-klaar meubels of bouwmarkt-oplossingen omdat ze niet weten wat maatwerk kost en oplevert. Je website moet die meerwaarde glashelder maken.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor timmerbedrijven",
      intro: "Een timmerman-website moet de warmte van hout en de precisie van je ambacht overbrengen. Dit is hoe wij dat doen.",
      items: [
        {
          title: "Projectportfolio per categorie",
          description: "Aparte galerijen voor dakkapellen, aanbouwen, trappen, maatwerk interieurs en kozijnen. Klanten navigeren direct naar wat ze zoeken en zien vergelijkbare projecten.",
        },
        {
          title: "Materiaal- en houtsoort-informatie",
          description: "Pagina's met uitleg over houtsoorten, duurzaamheid en toepassingen. Dit positioneert jou als vakman die adviseert, niet alleen uitvoert.",
        },
        {
          title: "Dakkapel-configurator",
          description: "Een interactieve tool waarmee klanten hun gewenste dakkapeltype kiezen en een indicatie krijgen. Dakkapellen zijn een grote markt — met een configurator vang je die leads op.",
        },
        {
          title: "B2B-partnerpagina voor aannemers",
          description: "Een professionele pagina gericht op aannemers en projectontwikkelaars. Met referentieprojecten, beschikbaarheid en contactmogelijkheden voor onderaanneming.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw timmerbedrijf-website",
      pages: [
        "Dakkapellen",
        "Aanbouwen & Uitbouwen",
        "Kozijnen & Ramen",
        "Trappen op Maat",
        "Maatwerk Kasten & Interieurs",
        "Houtrot Reparatie",
        "Restauratie & Monumentenzorg",
        "Offerte Aanvragen",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor timmerlieden",
      paragraphs: [
        "Timmerwerk is een van de breedste vakgebieden in de bouw. Van constructief houtwerk bij verbouwingen tot fijn maatwerk meubels — een timmerman kan enorm uiteenlopende projecten aannemen. Een professionele website is de enige plek waar je deze breedte volledig kunt tonen zonder onoverzichtelijk te worden.",
        "De dakkapelmarkt alleen al is miljoenen waard. Huiseigenaren die hun zolder willen verbouwen beginnen online met onderzoek naar mogelijkheden en kosten. Een gerichte dakkapel-pagina met voorbeelden, prijsindicaties en het vergunningsproces trekt deze klanten direct aan.",
        "Daarnaast is de zakelijke markt cruciaal voor timmerbedrijven. Aannemers en projectontwikkelaars zoeken online naar betrouwbare onderaannemers. Een professionele website met B2B-referenties en een duidelijke werkwijze opent deuren naar structurele samenwerkingen.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een timmerbedrijf?",
        answer: "Wij werken met vaste maandpakketten inclusief ontwerp, bouw, hosting en doorlopend onderhoud. Geen grote eenmalige investering. Neem contact op voor de actuele prijzen.",
      },
      {
        question: "Kan ik mijn maatwerk-projecten uitgebreid laten zien?",
        answer: "Ja, elk project kan uitgebreid gepresenteerd worden met foto's, beschrijvingen, gebruikte materialen en klantervaringen. Dit is de krachtigste manier om je vakmanschap te bewijzen.",
      },
      {
        question: "Werkt een website ook voor het aantrekken van onderaanneming?",
        answer: "Absoluut. We maken een B2B-gerichte pagina die aannemers en projectontwikkelaars aanspreekt. Met referentieprojecten, certificeringen en contactmogelijkheden.",
      },
      {
        question: "Hoe lang duurt het voordat mijn website online staat?",
        answer: "De meeste timmerwerk-websites zijn binnen 2 tot 3 weken live. We beginnen met een intake om je specialisaties en werkgebied in kaart te brengen.",
      },
    ],
    cta: {
      headline: "Klaar om meer timmerwerk-opdrachten binnen te halen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website jouw timmerbedrijf laat groeien.",
    },
  },

  "websites-voor-schoonmaakbedrijven": {
    slug: "websites-voor-schoonmaakbedrijven",
    trade: "schoonmaakbedrijven",
    tradeName: "schoonmaakbedrijven",
    tradeSingular: "schoonmaker",
    tradeBedrijf: "schoonmaakbedrijf",
    service: "websites",
    metaTitle: "Website voor Schoonmaakbedrijven | Meer Klanten Online",
    metaDescription: "Een professionele schoonmaakbedrijf-website die vertrouwen wekt en structureel nieuwe klanten oplevert. Ontdek wat Aannemer Systeem bouwt.",
    hero: {
      badge: "Websites voor Schoonmaakbedrijven",
      headline: "Een website die schone resultaten levert — online en offline",
      subheadline: "Zowel particuliere als zakelijke klanten zoeken online naar een betrouwbaar schoonmaakbedrijf. Met een professionele website laat je zien waarom ze voor jou moeten kiezen.",
      stats: [
        { value: "84%", label: "van VvE's en bedrijven zoekt online naar een schoonmaakpartij" },
        { value: "€18.000", label: "gemiddelde jaarcontractwaarde voor zakelijke schoonmaak" },
        { value: "67%", label: "van particulieren kiest op basis van reviews en website" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als schoonmaakbedrijf?",
      items: [
        {
          title: "Zakelijke klanten nemen je niet serieus zonder website",
          description: "VvE's, kantoren en winkels verwachten een professionele online aanwezigheid. Zonder website met je diensten, KvK-nummer en referenties val je af bij de eerste selectie.",
        },
        {
          title: "Je onderscheidt je niet van de concurrentie",
          description: "De schoonmaakbranche is competitief. Zonder duidelijk verhaal over je werkwijze, kwaliteitscontroles en specialisaties lijk je op elke andere schoonmaker.",
        },
        {
          title: "Terugkerende contracten zijn moeilijk te sluiten",
          description: "Klanten boeken eenmalig een schoonmaakbeurt maar worden geen vast contract. Zonder duidelijke abonnementspagina mis je de structurele omzet die je bedrijf stabiliseert.",
        },
        {
          title: "Gespecialiseerde diensten blijven onzichtbaar",
          description: "Bouwschoonmaak, gevelreiniging, tapijt-dieptereiniging — je specialismen leveren de beste marges op maar klanten weten er niet van zonder gerichte pagina's.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor schoonmaakbedrijven",
      intro: "Een schoonmaakbedrijf-website moet betrouwbaarheid uitstralen en structurele klanten aantrekken. Dit leveren wij.",
      items: [
        {
          title: "Zakelijk en particulier gescheiden",
          description: "Aparte secties voor zakelijke klanten (kantoren, VvE's, winkels) en particuliere klanten (woningen, verhuisschoonmaak). Elk met de juiste toon en diensten.",
        },
        {
          title: "Abonnement- en contractpagina",
          description: "Presenteer je schoonmaakabonnementen helder met frequenties, pakketten en prijsindicaties. Klanten zien direct wat ze krijgen en melden zich online aan.",
        },
        {
          title: "Specialisatie-landingspagina's",
          description: "Aparte pagina's voor bouwschoonmaak, gevelreiniging, tapijt-reiniging en industriële schoonmaak. De diensten met de beste marges verdienen eigen SEO-pagina's.",
        },
        {
          title: "Certificeringen en werkwijze",
          description: "Je VCA-certificering, milieuvriendelijke schoonmaakmiddelen en kwaliteitscontroleproces prominent in beeld. Dit wint de aanbestedingen en contracten.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw schoonmaakbedrijf-website",
      pages: [
        "Kantoorschoonmaak",
        "Schoonmaak voor VvE's",
        "Woningschoonmaak",
        "Bouwschoonmaak / Opleverschoonmaak",
        "Gevelreiniging",
        "Verhuisschoonmaak",
        "Over Ons & Certificeringen",
        "Offerte Aanvragen",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor schoonmaakbedrijven",
      paragraphs: [
        "De schoonmaakbranche draait op vertrouwen en structurele relaties. Zakelijke klanten zoals VvE's, kantoren en winkels sluiten contracten af voor maanden of jaren. De selectie begint online: ze vergelijken websites, lezen reviews en beoordelen professionaliteit. Zonder sterke website val je af voordat het eerste gesprek plaatsvindt.",
        "Voor particuliere klanten geldt hetzelfde principe maar dan op kleinere schaal. Verhuisschoonmaak, eenmalige deepcleans of wekelijks huishoudelijke hulp — het begint met een Google-zoekopdracht. De schoonmaakbedrijven die bovenaan staan met een duidelijke website en goede reviews, vullen hun agenda.",
        "Met gespecialiseerde pagina's voor bouwschoonmaak, gevelreiniging en industriële schoonmaak trek je bovendien de meest winstgevende opdrachten aan. Deze niches hebben minder concurrentie online en hogere marges.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een schoonmaakbedrijf?",
        answer: "Onze pakketten zijn afgestemd op de sector met vaste maandprijzen. Inclusief ontwerp, bouw, hosting en onderhoud. Neem contact op voor de actuele prijzen.",
      },
      {
        question: "Kan ik zakelijke en particuliere klanten apart aanspreken?",
        answer: "Ja, we maken aparte secties met de juiste toon en diensten voor elk doelgroep. Zakelijke klanten zien contractmogelijkheden, particulieren zien eenmalige en abonnementsdiensten.",
      },
      {
        question: "Hoe onderscheid ik me van goedkope schoonmaakbedrijven?",
        answer: "Met een professionele website die je certificeringen, werkwijze en kwaliteitscontroles toont. Klanten die kwaliteit en betrouwbaarheid zoeken, kiezen dan bewust voor jou.",
      },
      {
        question: "Kan ik schoonmaakabonnementen online aanbieden?",
        answer: "Ja, we bouwen een abonnementspagina met pakketten, frequenties en prijsindicaties. Klanten kunnen direct online interesse tonen of een proefbeurt aanvragen.",
      },
    ],
    cta: {
      headline: "Klaar om meer schoonmaakcontracten te winnen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website jouw schoonmaakbedrijf structureel laat groeien.",
    },
  },

  "websites-voor-glazenwassers": {
    slug: "websites-voor-glazenwassers",
    trade: "glazenwassers",
    tradeName: "glazenwassers",
    tradeSingular: "glazenwasser",
    tradeBedrijf: "glazenwassersbedrijf",
    service: "websites",
    metaTitle: "Website voor Glazenwassers | Meer Vaste Klanten Online",
    metaDescription: "Een professionele glazenwasser-website die vaste routes opbouwt en nieuwe klanten aantrekt. Ontdek wat Aannemer Systeem bouwt voor glazenwassers.",
    hero: {
      badge: "Websites voor Glazenwassers",
      headline: "Een website die je route vol houdt — het hele jaar door",
      subheadline: "Als glazenwasser draait je bedrijf op vaste routes en terugkerende klanten. Een professionele website helpt je nieuwe wijken opbouwen en klanten aan je binden.",
      stats: [
        { value: "73%", label: "van huiseigenaren zoekt online naar een glazenwasser" },
        { value: "94%", label: "van glazenwasklanten wordt terugkerende klant" },
        { value: "€1.200", label: "gemiddelde jaaromzet per vaste particuliere klant" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als glazenwasser?",
      items: [
        {
          title: "Nieuwe wijken opbouwen kost te veel tijd",
          description: "Deur-aan-deur langs gaan om nieuwe klanten te werven is tijdrovend en inefficiënt. Terwijl een website klanten in je werkgebied vanzelf naar je toe brengt.",
        },
        {
          title: "Klanten weten niet wanneer je in hun buurt bent",
          description: "Je rijdt vaste routes maar nieuwe klanten weten niet of je in hun wijk werkt. Zonder duidelijke wijkoverzicht op je website missen ze de aansluiting.",
        },
        {
          title: "Eenmalige klanten worden geen vaste route",
          description: "Iemand boekt een keer en dan hoor je er niets meer van. Zonder systeem om eenmalige klanten om te zetten in een vaste frequentie, groeit je route niet.",
        },
        {
          title: "Zakelijke klanten vinden je niet professioneel genoeg",
          description: "Kantoorpanden, winkels en VvE's zoeken een professionele glazenwasser met website, certificeringen en referenties. Zonder dat sta je op achterstand.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor glazenwassersbedrijven",
      intro: "Een glazenwasser-website moet routes vullen en klanten aan je binden. Dit is hoe wij dat realiseren.",
      items: [
        {
          title: "Postcode-checker & routekaart",
          description: "Bezoekers vullen hun postcode in en zien direct of je in hun wijk werkt en wanneer je er bent. Dit verlaagt de drempel en maakt aanmelden makkelijk.",
        },
        {
          title: "Online aanmelden voor vaste beurten",
          description: "Klanten melden zich direct online aan voor een vast schema — elke 4, 6 of 8 weken. Geen telefoon nodig, je route groeit automatisch.",
        },
        {
          title: "Zakelijke diensten-pagina",
          description: "Een professionele pagina voor bedrijfspanden, VvE's en winkels met je zakelijke referenties, werkwijze en frequentie-opties.",
        },
        {
          title: "Seizoens- en actie-landingspagina's",
          description: "Voorjaarsmomenten promoten met een 'na de winter'-schoonmaak, kerstperiode met 'schone ramen voor de feestdagen'. Seizoensgebonden campagnes voor extra aanmeldingen.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw glazenwasser-website",
      pages: [
        "Particuliere Glazenwas",
        "Zakelijke Glazenwas",
        "Werkgebied & Routes",
        "Aanmelden Vaste Beurten",
        "VvE Glasreiniging",
        "Zonnepanelen Reinigen",
        "Over Ons",
        "Contact",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor glazenwassers",
      paragraphs: [
        "Het glazenwasserbedrijfsmodel draait op vaste routes en terugkerende klanten. Elke klant die je aan je route toevoegt, levert jarenlang omzet op. Een website is de meest efficiënte manier om nieuwe klanten in je werkgebied te bereiken zonder deur-aan-deur te gaan. Eén goed geoptimaliseerde pagina levert meer aanmeldingen op dan weken flyeren.",
        "De zakelijke markt biedt enorme kansen voor glazenwassers. VvE's, kantoorpanden en winkelketens hebben structureel glazenwassers nodig maar stellen hoge eisen aan professionaliteit. Een website met certificeringen, referenties en een duidelijke werkwijze is het instapkaartje voor deze lucratieve contracten.",
        "Daarnaast groeit de markt voor zonnepanelen-reiniging snel. Huiseigenaren met zonnepanelen leren dat vuile panelen minder opbrengen. Een gerichte pagina hiervoor trekt een compleet nieuwe klantgroep aan die je aan je bestaande routes kunt toevoegen.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een glazenwassersbedrijf?",
        answer: "Wij werken met vaste maandpakketten inclusief alles. De investering verdien je al terug met een handvol nieuwe vaste klanten. Vraag de actuele prijzen op.",
      },
      {
        question: "Kan ik klanten online laten aanmelden voor een vaste route?",
        answer: "Ja, we bouwen een aanmeldformulier waar klanten hun adres, gewenste frequentie en contactgegevens invullen. Je hoeft alleen nog te bevestigen en in je route op te nemen.",
      },
      {
        question: "Hoe toon ik mijn werkgebied op de website?",
        answer: "We maken een interactieve kaart of postcodeoverzicht van je werkgebied. Bezoekers zien direct of je in hun wijk werkt en wanneer je er bent.",
      },
      {
        question: "Kan ik zonnepanelen-reiniging als extra dienst aanbieden?",
        answer: "Absoluut. We maken een aparte landingspagina voor zonnepanelen-reiniging die gericht verkeer aantrekt. Dit is een groeiende markt die perfect past bij je bestaande routes.",
      },
    ],
    cta: {
      headline: "Klaar om je routes vol te krijgen met vaste klanten?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website jouw glazenwassersbedrijf laat groeien.",
    },
  },

  "websites-voor-keukenmonteurs": {
    slug: "websites-voor-keukenmonteurs",
    trade: "keukenmonteurs",
    tradeName: "keukenmonteurs",
    tradeSingular: "keukenmonteur",
    tradeBedrijf: "keukenmontage-bedrijf",
    service: "websites",
    metaTitle: "Website voor Keukenmonteurs | Meer Montage-opdrachten Online",
    metaDescription: "Een professionele keukenmonteur-website die montage-opdrachten binnenhaalt van particulieren en keukenzaken. Ontdek wat Aannemer Systeem bouwt.",
    hero: {
      badge: "Websites voor Keukenmonteurs",
      headline: "Een website die jouw montagewerk de waarde geeft die het verdient",
      subheadline: "Een keuken kan prachtig zijn — maar alleen met perfecte montage. Met een professionele website laat je zien dat jij de vakman bent die keukens tot leven brengt.",
      stats: [
        { value: "41%", label: "van keukenkopers zoekt zelf een monteur buiten de keukenzaak" },
        { value: "€2.100", label: "gemiddelde opdrachtwaarde voor keukenplaatsing" },
        { value: "5,4x", label: "meer aanvragen via eigen website vs. platform" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als keukenmonteur?",
      items: [
        {
          title: "Je bent afhankelijk van keukenzaken voor opdrachten",
          description: "Als de keukenzaak minder verkoopt, heb jij minder werk. Zonder eigen online aanwezigheid heb je geen directe lijn naar particulieren die zelf een monteur zoeken.",
        },
        {
          title: "Klanten onderschatten montagewerk",
          description: "Mensen denken dat keukenmontage 'gewoon neerzetten' is. Zonder website die het vakmanschap achter een perfecte installatie toont, onderhandelen ze op prijs.",
        },
        {
          title: "IKEA-keukens zijn een enorme markt die je mist",
          description: "Duizenden mensen kopen jaarlijks een IKEA-keuken maar zoeken wanhopig een monteur. Zonder gerichte 'IKEA keuken montage'-pagina mis je dit verkeer.",
        },
        {
          title: "Na-opdrachten blijven liggen",
          description: "Kraaninstallatie, aanpassen van kasten, bijwerken na verhuizing — er is constant vraag naar keukenservice maar klanten weten niet dat je dit ook doet.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor keukenmontage-bedrijven",
      intro: "Een keukenmonteur-website moet zowel particulieren als keukenzaken aanspreken. Dit bouwen wij.",
      items: [
        {
          title: "IKEA & budget-keuken montagepagina",
          description: "Een gerichte landingspagina voor IKEA, Mandemakers en andere merken. Met prijsindicaties en procesbeschrijving. Dit is een enorme zoekmarkt die je direct aanspreekt.",
        },
        {
          title: "Montageproces in stappen",
          description: "Een visuele uitleg van het montageproces — van inmeting tot oplevering. Klanten begrijpen wat keukenmontage inhoudt en waarderen je vakmanschap.",
        },
        {
          title: "Galerij per keukentype",
          description: "Portfolio's opgedeeld per keukenstijl en -merk. Klanten zien direct dat je ervaring hebt met hun type keuken en voelen zich gerustgesteld.",
        },
        {
          title: "Keukenzaken-partnerpagina",
          description: "Een professionele B2B-pagina voor keukenzaken en -dealers die betrouwbare monteurs zoeken. Met referenties, beschikbaarheid en samenwerkingsvoorwaarden.",
        },
        {
          title: "Aanvullende diensten-sectie",
          description: "Kraanmontage, afvoer-aansluitingen, elektrische aansluiting, demontage — alle extra diensten duidelijk gepresenteerd voor upselling.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw keukenmonteur-website",
      pages: [
        "Keuken Montage",
        "IKEA Keuken Plaatsen",
        "Keuken Renovatie & Aanpassing",
        "Keukenblad & Werkblad Installatie",
        "Apparatuur Inbouwen",
        "Demontage & Afvoer",
        "Projecten & Referenties",
        "Offerte Aanvragen",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor keukenmonteurs",
      paragraphs: [
        "De keukenmarkt in Nederland is enorm en groeit door de populariteit van online keukenwinkels en budgetmerken. Steeds meer consumenten kopen hun keuken los en zoeken vervolgens een monteur. Dit is een gouden kans voor keukenmonteurs met een goede online aanwezigheid — de klant komt naar jou in plaats van andersom.",
        "De IKEA-keukenmarkt alleen al vertegenwoordigt duizenden montage-opdrachten per jaar. Een gerichte landingspagina voor IKEA-keukenmontage scoort hoog in Google en trekt zeer gerichte leads aan. Deze klanten weten al wat ze willen — ze zoeken alleen nog de juiste monteur.",
        "Daarnaast is de relatie met keukenzaken cruciaal voor structurele omzet. Een professionele website met B2B-referenties toont keukendealers dat je een betrouwbare partner bent. Dit levert doorverwijzingen op die je agenda voor maanden vullen.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een keukenmonteur?",
        answer: "Wij werken met vaste maandpakketten inclusief alles: ontwerp, bouw, hosting en onderhoud. De investering is snel terugverdiend met een paar extra opdrachten. Vraag de actuele prijzen op.",
      },
      {
        question: "Kan ik specifiek IKEA-keukenmontage promoten?",
        answer: "Ja, we bouwen een gerichte IKEA-montagepagina die scoort op zoektermen als 'IKEA keuken laten plaatsen'. Dit is een van de meest gezochte termen in de keukenbranche.",
      },
      {
        question: "Hoe trek ik keukenzaken aan als partner?",
        answer: "We maken een professionele B2B-pagina die je kunt delen met keukenzaken. Met referentieprojecten, certificeringen en je werkwijze. Dit opent deuren naar structurele samenwerkingen.",
      },
      {
        question: "Kan ik prijsindicaties op mijn website zetten?",
        answer: "Absoluut. Transparante prijsindicaties per keukentype verlagen de drempel en trekken serieuze klanten aan die bereid zijn te betalen voor kwaliteit.",
      },
    ],
    cta: {
      headline: "Klaar om meer keukenmontage-opdrachten te ontvangen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website jouw keukenmontage-bedrijf laat groeien.",
    },
  },

  "websites-voor-badkamerrenovatie-bedrijven": {
    slug: "websites-voor-badkamerrenovatie-bedrijven",
    trade: "badkamerrenovatie",
    tradeName: "badkamerrenovatie-bedrijven",
    tradeSingular: "badkamerrenovatie-specialist",
    tradeBedrijf: "badkamerrenovatiebedrijf",
    service: "websites",
    metaTitle: "Website voor Badkamerrenovatie | Meer Renovatie-opdrachten Online",
    metaDescription: "Een professionele badkamerrenovatie-website die klanten inspireert en overtuigt met droomresultaten. Ontdek wat Aannemer Systeem bouwt.",
    hero: {
      badge: "Websites voor Badkamerrenovatie",
      headline: "Een website die van bezoekers badkamerklanten maakt",
      subheadline: "Een badkamerrenovatie is een grote investering waar klanten maanden over nadenken. Met een inspirerende website begeleid je ze van droombeeld naar offerte-aanvraag.",
      stats: [
        { value: "91%", label: "van badkamerplanners zoekt online naar inspiratie" },
        { value: "€8.500", label: "gemiddelde opdrachtwaarde voor badkamerrenovatie" },
        { value: "4,6x", label: "meer aanvragen met een inspirerend portfolio" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als badkamerrenovatie-specialist?",
      items: [
        {
          title: "Klanten vergelijken je met showroom-ketens",
          description: "Grote badkamerketens met glanzende websites en showrooms trekken de aandacht. Zonder eigen inspirerende website met projectresultaten verlies je klanten aan partijen die niet beter werken, maar zich beter presenteren.",
        },
        {
          title: "Het beslisproces duurt te lang",
          description: "Klanten twijfelen maanden over hun badkamerrenovatie. Zonder website die hen begeleidt door het proces — van inspiratie tot planning — verlies je ze aan concurrenten die dit wél bieden.",
        },
        {
          title: "Je volledige aanbod is niet zichtbaar",
          description: "Je doet niet alleen tegels — je regelt sanitair, elektra, loodgieterswerk en afwerking. Maar klanten denken dat ze alles apart moeten regelen. Zonder duidelijke 'alles-in-één' presentatie mis je opdrachten.",
        },
        {
          title: "Reviews en referenties staan verspreid",
          description: "Tevreden klanten zijn je beste marketing, maar hun ervaringen staan op Google, Facebook en nergens. Een website die alles samenbrengt, bouwt het vertrouwen dat nodig is voor een investering van duizenden euro's.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor badkamerrenovatie-bedrijven",
      intro: "Een badkamerrenovatie-website moet inspireren, informeren en vertrouwen opbouwen. Dit is hoe wij dat doen.",
      items: [
        {
          title: "Inspiratieportfolio met voor-en-na transformaties",
          description: "Volledige projectpagina's met sfeerbeelden, materiaallijsten en klantquotes. Klanten zien de transformatie en willen hetzelfde voor hun eigen badkamer.",
        },
        {
          title: "Badkamerstijl-gids",
          description: "Pagina's per badkamerstijl — modern, industrieel, landelijk, luxe — met voorbeelden en materiaaladvies. Dit trekt inspiratiezoekende klanten aan en positioneert je als expert.",
        },
        {
          title: "Renovatieproces-timeline",
          description: "Een visuele stap-voor-stap uitleg van het renovatieproces — van intake tot oplevering. Dit neemt onzekerheid weg en laat zien hoe professioneel je werkt.",
        },
        {
          title: "Alles-in-één diensten-overzicht",
          description: "Laat zien dat klanten maar één partij hoeven in te schakelen: tegelwerk, sanitair, loodgieterswerk, elektra en afwerking. Dit is je grootste USP ten opzichte van losse vakmensen.",
        },
        {
          title: "Budget-indicatietool",
          description: "Laat klanten een indicatie krijgen op basis van badkamergrootte, stijl en wensen. Dit filtert serieuze klanten en levert warme leads op.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw badkamerrenovatie-website",
      pages: [
        "Complete Badkamerrenovatie",
        "Kleine Badkamer Verbouwen",
        "Inloopdouche Plaatsen",
        "Badkamer op Maat",
        "Toilet Renovatie",
        "Badkamerstijlen & Inspiratie",
        "Projecten / Voor & Na",
        "Offerte Aanvragen",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor badkamerrenovatie-bedrijven",
      paragraphs: [
        "Een badkamerrenovatie is een van de grootste investeringen die een huiseigenaar doet. Het gemiddelde budget ligt tussen de €6.000 en €15.000. Bij zulke bedragen doen klanten uitgebreid online onderzoek voordat ze een partij kiezen. Ze zoeken inspiratie, vergelijken werkwijzen en lezen reviews. Jouw website is de plek waar je dit volledige beslisproces begeleidt.",
        "De badkamerrenovatiemarkt is booming door vergrijzing, verduurzaming en de trend naar luxere badkamers. Klanten willen inloopdouches, vloerverwarming en designsanitair. Een website die deze trends adresseert met actuele projectvoorbeelden, trekt precies de klanten aan die bereid zijn te investeren in kwaliteit.",
        "Het grote voordeel van een badkamerspecialist is het alles-in-één concept. Klanten hoeven niet drie aparte vakmensen te regelen. Een website die dit duidelijk communiceert — met een helder procesoverzicht en compleet dienstaanbod — wint het van losse tegelzetters en loodgieters.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een badkamerrenovatie-bedrijf?",
        answer: "Wij werken met vaste maandpakketten inclusief alles: ontwerp, bouw, hosting en onderhoud. Gegeven de hoge opdrachtwaarde in de badkamerbranche verdien je de investering snel terug. Vraag de actuele prijzen op.",
      },
      {
        question: "Kan ik badkamerstijlen als inspiratie tonen?",
        answer: "Ja, we maken inspiratiepagina's per stijl met sfeerbeelden, materiaaladvies en gerealiseerde projecten. Dit trekt klanten aan in de inspiratiefase — het perfecte moment om ze te binden.",
      },
      {
        question: "Hoe onderscheid ik me van grote badkamerketens?",
        answer: "Met persoonlijke aandacht, lokale referenties en een duidelijk alles-in-één concept. Je website toont dat klanten bij jou geen nummer zijn maar een volwaardig project met persoonlijke begeleiding.",
      },
      {
        question: "Kan ik een prijsindicatie-tool op mijn website plaatsen?",
        answer: "Absoluut. Een budget-calculator die rekening houdt met badkamergrootte en wensen geeft klanten een realistische verwachting en levert jou warme, gekwalificeerde leads op.",
      },
    ],
    cta: {
      headline: "Klaar om meer badkamerrenovaties binnen te halen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een inspirerende website jouw badkamerrenovatie-bedrijf laat groeien.",
    },
  },

  "websites-voor-isolatiebedrijven": {
    slug: "websites-voor-isolatiebedrijven",
    trade: "isolatiebedrijven",
    tradeName: "isolatiebedrijven",
    tradeSingular: "isolatiebedrijf",
    tradeBedrijf: "isolatiebedrijf",
    service: "websites",
    metaTitle: "Website voor Isolatiebedrijven | Meer Isolatie-opdrachten Online",
    metaDescription: "Een professionele isolatiebedrijf-website die inspeelt op de verduurzamingsgolf en meer opdrachten oplevert. Ontdek wat Aannemer Systeem bouwt.",
    hero: {
      badge: "Websites voor Isolatiebedrijven",
      headline: "Een website die de verduurzamingsgolf omzet in opdrachten",
      subheadline: "Miljoenen woningen moeten geïsoleerd worden. Met een professionele website positioneer je jezelf als de specialist die huiseigenaren helpt besparen op energiekosten.",
      stats: [
        { value: "2,4M", label: "woningen in Nederland moeten nog geïsoleerd worden" },
        { value: "88%", label: "van huiseigenaren zoekt online naar isolatie-informatie" },
        { value: "€4.200", label: "gemiddelde opdrachtwaarde voor spouwmuurisolatie" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als isolatiebedrijf?",
      items: [
        {
          title: "De verduurzamingsmarkt groeit maar jij groeit niet mee",
          description: "De overheid stimuleert isolatie met subsidies en campagnes. Huiseigenaren zoeken massaal online naar informatie. Maar zonder goed vindbare website mis je deze enorme vraag.",
        },
        {
          title: "Klanten begrijpen de verschillen tussen isolatietypes niet",
          description: "Spouwmuur, dak, vloer, HR++ glas — voor klanten is het een wirwar. Zonder duidelijke uitleg op je website kiezen ze voor de aanbieder die het het beste uitlegt.",
        },
        {
          title: "Subsidie-informatie is een gemiste kans",
          description: "Huiseigenaren zoeken massaal naar subsidie-informatie. Als jouw website hen niet informeert over ISDE-subsidies en andere regelingen, vind een concurrent die dat wél doet.",
        },
        {
          title: "Je concurreert met landelijke ketens op naamsbekendheid",
          description: "Grote isolatieketens investeren miljoenen in marketing. Als regionaal bedrijf moet je online concurreren op expertise, nabijheid en persoonlijke service — maar daarvoor heb je een sterke website nodig.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor isolatiebedrijven",
      intro: "Een isolatie-website moet educeren, vertrouwen wekken en de subsidiedrempel verlagen. Dit leveren wij.",
      items: [
        {
          title: "Isolatietype-pagina's met besparingsinfo",
          description: "Aparte pagina's per isolatietype — spouwmuur, dakisolatie, vloerisolatie, HR++ glas — met verwachte besparing, terugverdientijd en procesuitleg.",
        },
        {
          title: "Subsidie-informatie & hulp",
          description: "Een actuele subsidiepagina met ISDE-informatie, gemeentelijke regelingen en eventueel hulp bij de aanvraag. Dit is de nummer-één reden waarom klanten je website bezoeken.",
        },
        {
          title: "Energiebesparingscalculator",
          description: "Laat bezoekers hun woningtype en bouwjaar invullen om een indicatie te krijgen van besparing en kosten. Dit levert warme, gekwalificeerde leads op.",
        },
        {
          title: "Energielabel-uitleg met upgradepaden",
          description: "Toon welke isolatiemaatregelen nodig zijn om van energielabel G naar B te gaan. Klanten begrijpen het traject en kiezen voor de vakman die het complete plaatje biedt.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw isolatiebedrijf-website",
      pages: [
        "Spouwmuurisolatie",
        "Dakisolatie",
        "Vloerisolatie",
        "HR++ Glas & Kozijnen",
        "Subsidies & Regelingen",
        "Energiebesparing Berekenen",
        "Projecten & Referenties",
        "Offerte Aanvragen",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor isolatiebedrijven",
      paragraphs: [
        "De isolatiemarkt zit midden in een historische groeifase. Stijgende energieprijzen, strengere wetgeving en overheidssubsidies zorgen voor een explosie aan vraag. Huiseigenaren die hun woning willen isoleren, beginnen online met onderzoek naar mogelijkheden, kosten en subsidies. De isolatiebedrijven die hier zichtbaar zijn, profiteren maximaal van deze golf.",
        "Educatie is de sleutel tot conversie in de isolatiebranche. Klanten willen begrijpen welke isolatie het beste is voor hun woningtype, wat de terugverdientijd is en welke subsidies beschikbaar zijn. Een website die dit helder uitlegt — met calculators, subsidiepagina's en procesuitleg — wint het vertrouwen van de klant nog voordat het eerste gesprek plaatsvindt.",
        "Als regionaal isolatiebedrijf concurreer je met landelijke ketens op naamsbekendheid. Maar je wint op nabijheid, persoonlijke service en lokale referenties. Een sterke website maakt deze voordelen zichtbaar en overtuigt klanten dat lokaal de beste keuze is.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een isolatiebedrijf?",
        answer: "Wij werken met vaste maandpakketten inclusief alles. Gegeven de hoge opdrachtwaarden en groeipotentieel in de isolatiebranche is de ROI uitstekend. Neem contact op voor de actuele prijzen.",
      },
      {
        question: "Kan ik subsidie-informatie op mijn website plaatsen?",
        answer: "Ja, we bouwen een actuele subsidiepagina met ISDE-informatie en gemeentelijke regelingen. Dit is een van de meest gezochte onderwerpen en trekt enorm veel verkeer aan.",
      },
      {
        question: "Hoe onderscheid ik me van grote isolatieketens?",
        answer: "Met lokale referenties, persoonlijke service en een website die jouw expertise als regionaal specialist benadrukt. Klanten kiezen steeds vaker voor een lokale partij die ze kunnen vertrouwen.",
      },
      {
        question: "Kan ik een energiebesparingscalculator op mijn site plaatsen?",
        answer: "Absoluut. Een calculator die besparing en terugverdientijd berekent is een krachtige leadgenerator. Klanten vullen hun gegevens in en je hebt direct een warme lead.",
      },
    ],
    cta: {
      headline: "Klaar om meer isolatie-opdrachten binnen te halen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website jouw isolatiebedrijf laat meeprofiteren van de verduurzamingsgolf.",
    },
  },

  "websites-voor-verhuisbedrijven": {
    slug: "websites-voor-verhuisbedrijven",
    trade: "verhuisbedrijven",
    tradeName: "verhuisbedrijven",
    tradeSingular: "verhuizer",
    tradeBedrijf: "verhuisbedrijf",
    service: "websites",
    metaTitle: "Website voor Verhuisbedrijven | Meer Verhuisaanvragen Online",
    metaDescription: "Een professionele verhuisbedrijf-website die vertrouwen wekt en het hele jaar door verhuisaanvragen oplevert. Ontdek wat Aannemer Systeem bouwt.",
    hero: {
      badge: "Websites voor Verhuisbedrijven",
      headline: "Een website die verhuisstress omzet in vertrouwen",
      subheadline: "Verhuizen is stressvol. Klanten zoeken een betrouwbare partij die het regelt. Met een professionele website ben jij de verhuizer waar ze direct vertrouwen in hebben.",
      stats: [
        { value: "93%", label: "van verhuizers wordt online gezocht en vergeleken" },
        { value: "€1.800", label: "gemiddelde opdrachtwaarde voor een particuliere verhuizing" },
        { value: "3,1x", label: "meer aanvragen met een offertecalculator op je site" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als verhuisbedrijf?",
      items: [
        {
          title: "Klanten vergelijken puur op prijs",
          description: "Op vergelijkingssites sta je naast vijf andere verhuizers en wint de goedkoopste. Zonder eigen website waar je je meerwaarde toont — verzekering, inpakservice, voorzichtigheid — heb je geen manier om je te onderscheiden.",
        },
        {
          title: "Vertrouwensprobleem door slechte ervaringen bij anderen",
          description: "De verhuisbranche heeft een imagoprobleem. Klanten zijn bang voor schade, verborgen kosten en onprofessionaliteit. Zonder website die vertrouwen opbouwt met reviews en transparante informatie, verlies je klanten aan die angst.",
        },
        {
          title: "Je zit met gaten in je planning",
          description: "De ene week te druk, de andere week geen opdrachten. Zonder continue stroom aan online aanvragen is je planning onvoorspelbaar en inefficiënt.",
        },
        {
          title: "Zakelijke verhuizingen blijven buiten bereik",
          description: "Bedrijfsverhuizingen en kantoorrelocaties zijn lucratief maar vereisen een professionele uitstraling. Zonder zakelijke presentatie op je website word je niet overwogen.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor verhuisbedrijven",
      intro: "Een verhuisbedrijf-website moet vertrouwen wekken, prijstransparant zijn en het offerteproces versnellen. Dit leveren wij.",
      items: [
        {
          title: "Directe offertecalculator",
          description: "Laat klanten hun verhuizing configureren: aantal kamers, afstand, extra diensten. Ze krijgen direct een indicatie en jij ontvangt een gedetailleerde lead.",
        },
        {
          title: "Transparante diensten- en prijspagina",
          description: "Helder overzicht van je diensten met prijsindicaties. Van basisverhuizing tot all-inclusive met inpakservice. Transparantie wekt vertrouwen in een branche waar dat schaars is.",
        },
        {
          title: "Review-centraal op elke pagina",
          description: "Klantreviews prominent op elke pagina. Na een verhuizing is de beoordeling van eerdere klanten het sterkste verkoopargument dat je hebt.",
        },
        {
          title: "Zakelijke verhuispagina",
          description: "Een professionele pagina voor bedrijfsverhuizingen met projectaanpak, referenties en specialisaties zoals IT-apparatuur of archiefverhuizing.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw verhuisbedrijf-website",
      pages: [
        "Particuliere Verhuizing",
        "Bedrijfsverhuizing",
        "Inpak- & Uitpakservice",
        "Verhuislift Huren",
        "Opslagmogelijkheden",
        "Internationale Verhuizing",
        "Reviews & Ervaringen",
        "Offerte Berekenen",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor verhuisbedrijven",
      paragraphs: [
        "De verhuisbranche is een vertrouwensbranche bij uitstek. Klanten geven letterlijk al hun bezittingen in handen van je team. Het vertrouwen dat nodig is voor die stap begint online: bij je website, je reviews en je uitstraling. Een professionele website die transparant is over prijzen, verzekeringen en werkwijze, wint het van elke vergelijkingssite.",
        "Seizoensgebondenheid is een uitdaging voor verhuisbedrijven. Zomer is druk, winter is rustig. Een website met goede SEO trekt het hele jaar door aanvragen aan. Met gerichte content voor verschillende verhuistypes — studenten, senioren, zakelijk — spreek je het hele jaar de juiste doelgroepen aan.",
        "De zakelijke verhuismarkt biedt enorm potentieel. Bedrijfsverhuizingen, kantoorrelocaties en projectverhuizingen leveren hogere marges op en zijn minder seizoensgevoelig. Een professionele B2B-pagina op je website opent deze markt voor je.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een verhuisbedrijf?",
        answer: "Wij werken met vaste maandpakketten inclusief alles. Met de hoge opdrachtwaarden in de verhuisbranche is de investering snel terugverdiend. Vraag de actuele prijzen op.",
      },
      {
        question: "Kan ik een offertecalculator op mijn website plaatsen?",
        answer: "Ja, we bouwen een calculator waar klanten hun verhuizing configureren en direct een indicatie krijgen. Dit verlaagt de drempel en levert gedetailleerde, warme leads op.",
      },
      {
        question: "Hoe bouw ik vertrouwen op in een branche met een imagoprobleem?",
        answer: "Met prominente reviews, transparante prijzen, zichtbare verzekeringsinformatie en een professionele uitstraling. Je website is je kans om je te onderscheiden van de minder betrouwbare partijen.",
      },
      {
        question: "Kan ik zakelijke en particuliere verhuizingen apart promoten?",
        answer: "Absoluut. We maken aparte secties met de juiste toon, diensten en referenties voor elk doelgroep. Zo trek je zowel particuliere als zakelijke klanten aan.",
      },
    ],
    cta: {
      headline: "Klaar om meer verhuisaanvragen te ontvangen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website jouw verhuisbedrijf structureel laat groeien.",
    },
  },

  "websites-voor-hvac-bedrijven": {
    slug: "websites-voor-hvac-bedrijven",
    trade: "hvac",
    tradeName: "HVAC-bedrijven",
    tradeSingular: "HVAC-specialist",
    tradeBedrijf: "HVAC-bedrijf",
    service: "websites",
    metaTitle: "Website voor HVAC-bedrijven | Meer Opdrachten in Verwarming & Ventilatie",
    metaDescription: "Een professionele HVAC-website die inspeelt op de energietransitie en meer installatie- en onderhoudsopdrachten oplevert. Ontdek wat Aannemer Systeem bouwt.",
    hero: {
      badge: "Websites voor HVAC-bedrijven",
      headline: "Een website die meegroeit met de energietransitie",
      subheadline: "Warmtepompen, ventilatiesystemen en slimme klimaatoplossingen — de HVAC-sector groeit explosief. Met een professionele website positioneer je jezelf als de expert die klanten zoeken.",
      stats: [
        { value: "156%", label: "groei in zoekopdrachten naar warmtepompen in 3 jaar" },
        { value: "€7.500", label: "gemiddelde opdrachtwaarde voor warmtepomp-installatie" },
        { value: "82%", label: "van huiseigenaren zoekt online naar klimaatoplossingen" },
      ],
    },
    problems: {
      sectionTitle: "Herken jij deze problemen als HVAC-bedrijf?",
      items: [
        {
          title: "De warmtepompmarkt groeit maar je pikt te weinig mee",
          description: "De vraag naar warmtepompen explodeert door subsidies en stijgende gasprijzen. Maar klanten vinden de bedrijven die online het meest zichtbaar zijn. Zonder gerichte website mis je de grootste groeimarkt in jaren.",
        },
        {
          title: "Klanten begrijpen je aanbod niet",
          description: "HVAC omvat verwarming, ventilatie, airconditioning en warmteterugwinning. Voor klanten is het technisch en onduidelijk. Zonder website die het begrijpelijk uitlegt, kiezen ze voor de concurrent die het wél simpel houdt.",
        },
        {
          title: "Onderhoudcontracten worden niet online gepromoot",
          description: "Structureel onderhoud aan verwarmings- en ventilatiesystemen is terugkerende omzet. Maar zonder duidelijke onderhoudspagina boeken klanten pas als er iets stuk gaat.",
        },
        {
          title: "De overheid stuurt klanten niet naar jou",
          description: "De overheid promoot verduurzaming maar klanten landen op informatiepagina's, niet op jouw bedrijfspagina. Zonder geoptimaliseerde website voor subsidie-gerelateerde zoektermen mis je dit verkeer.",
        },
      ],
    },
    features: {
      sectionTitle: "Wat wij bouwen voor HVAC-bedrijven",
      intro: "Een HVAC-website moet technische oplossingen begrijpelijk maken en inspelen op de energietransitie. Dit bouwen wij.",
      items: [
        {
          title: "Warmtepomp-landingspagina's",
          description: "Gerichte pagina's per type warmtepomp — lucht-water, bodem-water, hybride — met uitleg, kosten, subsidies en terugverdientijd. Dit is de snelst groeiende markt in de sector.",
        },
        {
          title: "Energieadvies & subsidie-informatie",
          description: "Een subsidiepagina met actuele ISDE-bedragen en een energieadvies-tool. Klanten die subsidie-informatie zoeken, zijn klaar om te investeren.",
        },
        {
          title: "Onderhoudscontract-pagina met pakketten",
          description: "Helder overzicht van je onderhoudspakketten per systeemtype. Klanten kiezen hun pakket en melden zich online aan voor structureel onderhoud.",
        },
        {
          title: "Storingsdienst met prioriteitsopties",
          description: "Een storingspagina voor cv-ketel uitval en airco-storingen met directe contactoptie. Onderhoudsklanten krijgen voorrang — een extra reden om een contract af te sluiten.",
        },
        {
          title: "Technische productpagina's",
          description: "Pagina's per merk en systeemtype dat je installeert. Dit trekt zeer gerichte zoekverkeer aan van klanten die al weten welk systeem ze willen.",
        },
      ],
    },
    examplePages: {
      sectionTitle: "Pagina's op jouw HVAC-website",
      pages: [
        "Warmtepomp Installatie",
        "CV-Ketel Vervanging & Onderhoud",
        "Ventilatiesysteem (WTW)",
        "Airconditioning",
        "Vloerverwarming",
        "Subsidies & Energieadvies",
        "Onderhoudscontracten",
        "Storing Melden & Contact",
      ],
    },
    industryContent: {
      sectionTitle: "Waarom een website onmisbaar is voor HVAC-bedrijven",
      paragraphs: [
        "De HVAC-sector staat op een kantelpunt. De transitie van gas naar duurzame verwarming creëert een markt van miljarden euro's. Warmtepompen, hybride systemen en intelligente ventilatie zijn de toekomst — en huiseigenaren zoeken massaal online naar informatie en installateurs. HVAC-bedrijven die nu investeren in hun online aanwezigheid, positioneren zich voor jarenlange groei.",
        "De technische complexiteit van HVAC-oplossingen is zowel een uitdaging als een kans. Klanten begrijpen niet altijd het verschil tussen een lucht-waterwarmtepomp en een hybride systeem. Een website die dit helder uitlegt — met vergelijkingen, kostenoverzichten en subsidie-informatie — wint het vertrouwen en de opdracht.",
        "Naast installatie is onderhoud de motor van een gezond HVAC-bedrijf. Structurele onderhoudscontracten zorgen voor voorspelbare omzet en klantbinding. Een website met duidelijke onderhoudspakketten en online aanmeldmogelijkheid maakt het sluiten van contracten laagdrempelig en efficiënt.",
      ],
    },
    faqs: [
      {
        question: "Wat kost een website voor een HVAC-bedrijf?",
        answer: "Wij werken met vaste maandpakketten inclusief alles. Met de hoge opdrachtwaarden in de HVAC-sector — denk aan warmtepompen van €7.000+ — is de ROI uitstekend. Vraag de actuele prijzen op.",
      },
      {
        question: "Kan ik subsidie-informatie actueel houden op mijn website?",
        answer: "Ja, we bouwen een subsidiepagina die eenvoudig te updaten is wanneer regelingen veranderen. Dit is een van de belangrijkste pagina's op je site — klanten die subsidie zoeken, zijn klaar om te investeren.",
      },
      {
        question: "Hoe presenteer ik warmtepompen op mijn website?",
        answer: "Met gerichte pagina's per type warmtepomp, inclusief uitleg, kosten, subsidies, terugverdientijd en referentieprojecten. Dit is de informatie die klanten zoeken voordat ze een installateur kiezen.",
      },
      {
        question: "Kan ik onderhoudscontracten online laten afsluiten?",
        answer: "Ja, we bouwen een overzichtspagina met pakketten en een aanmeldformulier. Klanten kiezen hun pakket en melden zich direct aan — eenvoudig en laagdrempelig.",
      },
      {
        question: "Helpt een website ook bij het aantrekken van zakelijke klanten?",
        answer: "Absoluut. We maken een B2B-sectie voor utiliteit, kantoren en projecten. Met referenties, certificeringen en je aanpak voor grotere installaties.",
      },
    ],
    cta: {
      headline: "Klaar om meer HVAC-opdrachten binnen te halen?",
      subheadline: "Plan een vrijblijvend gesprek en ontdek hoe een professionele website jouw HVAC-bedrijf laat meeprofiteren van de energietransitie.",
    },
  },
};
