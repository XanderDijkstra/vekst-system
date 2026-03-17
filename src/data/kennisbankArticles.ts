export interface KennisbankArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  sections: { heading: string; body: string }[];
}

export const kennisbankArticles: KennisbankArticle[] = [
  {
    slug: "automatisering-bouwbedrijf",
    title: "Automatisering voor bouwbedrijven: een praktische gids",
    description: "Ontdek hoe automatisering je bouwbedrijf efficiënter maakt, van offertes tot klantopvolging.",
    category: "Automatisering",
    readTime: "7 min",
    sections: [
      {
        heading: "Waarom automatisering essentieel is",
        body: "In de bouwsector draait alles om tijd. Elke minuut die je besteedt aan administratie is een minuut die je niet op de bouwplaats doorbrengt. Automatisering helpt je om repetitieve taken — zoals het versturen van offertes, opvolgen van leads en plannen van afspraken — uit handen te geven aan slimme systemen. Het resultaat: minder fouten, snellere opvolging en meer omzet."
      },
      {
        heading: "De grootste tijdvreters in de bouw",
        body: "Uit onderzoek blijkt dat bouwbedrijven gemiddeld 30% van hun tijd besteden aan administratieve taken. Denk aan het handmatig invoeren van klantgegevens, het bijhouden van planningen in spreadsheets, het versturen van herinneringen voor betalingen en het opvolgen van offertes per telefoon. Al deze processen kunnen geautomatiseerd worden zonder dat je de persoonlijke touch verliest."
      },
      {
        heading: "Welke processen kun je automatiseren?",
        body: "De meest impactvolle automatiseringen voor bouwbedrijven zijn: (1) Lead opvolging — automatische SMS of e-mail binnen 5 minuten na een aanvraag. (2) Offerte-opvolging — herinneringen als een offerte niet binnen 48 uur is geaccepteerd. (3) Review-verzoeken — automatisch reviews vragen na oplevering van een project. (4) Afspraakbevestigingen — automatische bevestigingen en herinneringen voor bezichtigingen. (5) Factuurherinneringen — geautomatiseerde betalingsherinneringen."
      },
      {
        heading: "De ROI van automatisering",
        body: "Bouwbedrijven die automatisering inzetten zien gemiddeld 40% meer conversie uit leads doordat er sneller wordt opgevolgd. Daarnaast bespaar je gemiddeld 10-15 uur per week aan administratief werk. Bij een gemiddeld uurtarief van €50 is dat €2.000-€3.000 per maand aan besparing — puur door slimmer te werken."
      },
      {
        heading: "Hoe begin je met automatiseren?",
        body: "Begin klein. Kies één proces dat je het meeste tijd kost en automatiseer dat eerst. Voor de meeste bouwbedrijven is dat de lead-opvolging: zodra iemand een aanvraag doet via je website, wordt er automatisch een SMS en e-mail gestuurd. Dit alleen al kan je conversie met 25% verhogen. Daarna kun je stap voor stap meer processen toevoegen."
      }
    ]
  },
  {
    slug: "crm-voor-aannemers",
    title: "CRM voor aannemers: waarom en hoe",
    description: "Leer waarom een CRM-systeem onmisbaar is voor aannemers en hoe je het effectief inzet.",
    category: "CRM",
    readTime: "6 min",
    sections: [
      {
        heading: "Wat is een CRM en waarom heb je het nodig?",
        body: "Een CRM (Customer Relationship Management) systeem is je digitale klantenbestand. In plaats van contactgegevens, notities en offertes verspreid over WhatsApp, e-mail en papieren mappen, heb je alles op één plek. Voor aannemers betekent dit dat je precies weet welke klant wat heeft aangevraagd, welke offertes openstaan en welke projecten lopen."
      },
      {
        heading: "De kosten van geen CRM",
        body: "Zonder CRM verlies je gemiddeld 20-30% van je leads simpelweg omdat ze door de mazen van het net glippen. Een klant belt, je bent op de bouwplaats, je vergeet terug te bellen. Of je stuurt een offerte maar vergeet op te volgen. Dit zijn gemiste kansen die je direct omzet kosten. Met een CRM wordt elke lead automatisch vastgelegd en krijg je herinneringen voor opvolging."
      },
      {
        heading: "Welke functies zijn belangrijk voor aannemers?",
        body: "Een goed CRM voor aannemers moet minimaal bieden: contactbeheer met volledige klanthistorie, pipeline-overzicht van leads tot opgeleverde projecten, offerte-tracking met statusupdates, geïntegreerde communicatie (bellen, SMS, e-mail vanuit één plek), en mobiele toegang zodat je ook vanaf de bouwplaats je zaken kunt regelen."
      },
      {
        heading: "CRM kiezen: waar let je op?",
        body: "Kies een CRM dat specifiek ontworpen is voor de bouwsector of eenvoudig aan te passen is aan jouw werkproces. Vermijd te complexe systemen met honderden functies die je nooit gebruikt. Belangrijk: het systeem moet makkelijk te gebruiken zijn op je telefoon, want daar werk je het meest mee. En het moet integreren met je bestaande tools zoals je agenda en boekhoudsoftware."
      },
      {
        heading: "In 3 stappen starten met een CRM",
        body: "Stap 1: Importeer al je bestaande contacten — klanten, leveranciers, prospects. Stap 2: Stel je verkooppijplijn in met de fases die bij jouw bedrijf passen (aanvraag → bezichtiging → offerte → akkoord → uitvoering → oplevering). Stap 3: Maak er een gewoonte van om elke interactie vast te leggen. Na twee weken is het een automatisme en vraag je je af hoe je ooit zonder hebt gewerkt."
      }
    ]
  },
  {
    slug: "planning-software-bouw",
    title: "Planning software voor de bouw",
    description: "Vergelijk de beste planningstools voor bouwbedrijven en ontdek welke bij jou past.",
    category: "Planning",
    readTime: "5 min",
    sections: [
      {
        heading: "Waarom Excel niet meer volstaat",
        body: "Veel bouwbedrijven plannen nog steeds met Excel of zelfs op papier. Bij kleine projecten werkt dat, maar zodra je met meerdere ploegen, onderaannemers en projecten tegelijk werkt, wordt het chaotisch. Dubbele boekingen, vergeten afspraken en miscommunicatie kosten je tijd en geld. Moderne planningssoftware lost dit op met real-time overzichten en automatische conflictdetectie."
      },
      {
        heading: "Essentiële functies van goede planningssoftware",
        body: "Voor bouwbedrijven zijn de belangrijkste functies: drag-and-drop planning per medewerker of ploeg, automatische meldingen bij wijzigingen, inzicht in beschikbaarheid van personeel en materieel, koppeling met je CRM zodat projectinformatie automatisch wordt overgenomen, en een mobiele app waarmee medewerkers hun dagplanning kunnen bekijken."
      },
      {
        heading: "De impact op je bedrijfsvoering",
        body: "Bouwbedrijven die overstappen op digitale planning rapporteren gemiddeld 20% minder stilstandtijd, 35% minder planningsconflicten en een hogere medewerkerstevredenheid doordat iedereen weet waar hij moet zijn. Bovendien heb je als ondernemer direct overzicht over de komende weken, waardoor je beter kunt inschatten of je nieuwe projecten kunt aannemen."
      },
      {
        heading: "Tips voor een soepele overgang",
        body: "Begin met een proefperiode voor één team of project. Laat medewerkers wennen aan het systeem zonder meteen alles om te gooien. Zorg voor een duidelijke instructie en wijs een 'champion' aan binnen je team die anderen kan helpen. Na twee tot drie weken evalueer je wat goed gaat en wat beter kan, en rol je het systeem verder uit."
      }
    ]
  },
  {
    slug: "offerte-proces-bouw",
    title: "Het offerte proces optimaliseren",
    description: "Stuur sneller offertes en verhoog je conversie met deze praktische tips.",
    category: "Sales",
    readTime: "6 min",
    sections: [
      {
        heading: "Snelheid wint de klant",
        body: "In de bouwsector geldt: wie het eerst komt, het eerst maalt. Onderzoek toont aan dat de aannemer die als eerste een offerte stuurt, 50% meer kans heeft om de opdracht te krijgen. Toch duurt het bij veel bouwbedrijven dagen of zelfs weken voordat een offerte de deur uit gaat. Met de juiste tools en processen kun je dit terugbrengen tot dezelfde dag."
      },
      {
        heading: "De perfecte offerte: wat moet erin staan?",
        body: "Een goede offerte bevat meer dan alleen een prijs. Zorg voor: een duidelijke omschrijving van het werk, inclusief wat wél en niet is inbegrepen. Voeg foto's toe van vergelijkbare projecten die je hebt uitgevoerd. Geef een realistische planning. Vermeld je garantievoorwaarden en verzekeringen. En maak het de klant makkelijk om 'ja' te zeggen met een digitale acceptatieknop."
      },
      {
        heading: "Digitale offertes vs. papieren offertes",
        body: "Digitale offertes worden 3x sneller geaccepteerd dan papieren offertes. De klant kan direct op zijn telefoon de offerte bekijken, vragen stellen en accepteren. Bovendien weet je precies wanneer de klant je offerte heeft geopend, zodat je op het juiste moment kunt opvolgen. Automatische herinneringen zorgen ervoor dat offertes niet in de vergetelheid raken."
      },
      {
        heading: "Offertetemplates besparen uren",
        body: "Maak templates voor je meest voorkomende werkzaamheden. Een dakdekker heeft bijvoorbeeld templates voor platdak renovatie, schoorsteen reparatie en dakgoot vervanging. Hierdoor hoef je niet elke keer opnieuw het wiel uit te vinden. Pas alleen de specifieke details aan per klant. Dit bespaart je gemiddeld 45 minuten per offerte."
      },
      {
        heading: "Opvolging: het verschil tussen winnen en verliezen",
        body: "80% van de opdrachten wordt gewonnen na de opvolging, niet na de eerste offerte. Stuur na 2 dagen een vriendelijk berichtje: 'Heeft u nog vragen over onze offerte?' Na 5 dagen een tweede herinnering. Na 10 dagen een laatste bericht met eventueel een klein extra aanbod. Automatiseer dit proces en je converteert moeiteloos 20-30% meer offertes."
      }
    ]
  },
  {
    slug: "ai-voor-bouwbedrijven",
    title: "AI voor bouwbedrijven: kansen en toepassingen",
    description: "Ontdek hoe kunstmatige intelligentie de bouwsector transformeert.",
    category: "Innovatie",
    readTime: "7 min",
    sections: [
      {
        heading: "AI is geen toekomstmuziek meer",
        body: "Kunstmatige intelligentie klinkt misschien als iets voor techbedrijven, maar het is al volop beschikbaar voor de bouwsector. Van chatbots die 24/7 vragen van potentiële klanten beantwoorden tot slimme algoritmes die je helpen bij het inschatten van projectkosten — AI maakt je bedrijf slimmer en efficiënter zonder dat je er een IT-afdeling voor nodig hebt."
      },
      {
        heading: "Praktische AI-toepassingen voor aannemers",
        body: "De meest directe toepassingen van AI voor bouwbedrijven zijn: (1) Chatbots op je website die leads kwalificeren en afspraken inplannen terwijl jij op de bouwplaats staat. (2) AI-gestuurde kostenramingen op basis van historische projectdata. (3) Automatische herkenning van bouwfouten via foto-analyse. (4) Slimme routeplanning voor je servicemonteurs. (5) Voorspellende analyses om te bepalen welke leads de hoogste conversiekans hebben."
      },
      {
        heading: "AI-chatbots: je 24/7 medewerker",
        body: "Een AI-chatbot op je website kan 80% van de veelgestelde vragen beantwoorden zonder menselijke tussenkomst. Denk aan vragen over je werkgebied, beschikbaarheid, prijsindicaties en werkwijze. De chatbot verzamelt contactgegevens en stuurt gekwalificeerde leads direct door naar je CRM. Het resultaat: je mist geen enkele lead meer, ook niet om 22:00 's avonds of in het weekend."
      },
      {
        heading: "Kostenbesparingen door AI",
        body: "Bouwbedrijven die AI inzetten voor lead-kwalificatie besparen gemiddeld 5-8 uur per week aan telefoontjes met ongekwalificeerde leads. AI kan op basis van de aanvraag al inschatten of het een serieuze lead is en de juiste prioriteit toekennen. Daarnaast helpt AI bij het optimaliseren van je marketingbudget door te analyseren welke kanalen de beste leads opleveren."
      },
      {
        heading: "Starten met AI: praktische eerste stappen",
        body: "Je hoeft niet meteen een volledig AI-systeem te implementeren. Begin met één toepassing die direct waarde oplevert. Voor de meeste bouwbedrijven is dat een AI-chatbot op de website of een slim systeem voor automatische lead-opvolging. De investering is minimaal en het rendement zie je vaak al binnen de eerste maand. Belangrijker nog: je klanten ervaren een professionelere service."
      }
    ]
  },
  {
    slug: "klantenwerving-aannemers",
    title: "Klantenwerving voor aannemers: de complete gids",
    description: "Van mond-tot-mondreclame tot online marketing: zo werf je meer klanten als aannemer.",
    category: "Marketing",
    readTime: "8 min",
    sections: [
      {
        heading: "Waarom mond-tot-mondreclame niet meer genoeg is",
        body: "Mond-tot-mondreclame is nog steeds waardevol, maar het is niet schaalbaar. Als je wilt groeien, heb je een voorspelbare stroom van nieuwe leads nodig. 87% van de consumenten zoekt tegenwoordig online naar een aannemer voordat ze iemand bellen. Als je daar niet zichtbaar bent, verlies je klanten aan concurrenten die dat wél zijn."
      },
      {
        heading: "Je online aanwezigheid als fundament",
        body: "Alles begint met een professionele website die vertrouwen wekt. Toon je uitgevoerde projecten met goede foto's, verzamel en toon klantreviews, en maak het makkelijk om contact op te nemen. Zorg dat je website snel laadt op mobiel — 60% van je bezoekers komt via hun telefoon. Een website die er professioneel uitziet, overtuigt klanten dat jij ook professioneel werk levert."
      },
      {
        heading: "Google Ads vs. organisch verkeer",
        body: "Met Google Ads kun je direct bovenaan verschijnen als iemand zoekt op 'aannemer in [jouw stad]'. Het voordeel: onmiddellijk resultaat. Het nadeel: je betaalt per klik (€3-€15 per klik afhankelijk van je regio). Organisch verkeer via SEO kost meer tijd om op te bouwen, maar levert gratis bezoekers op de lange termijn. De ideale strategie combineert beide: Google Ads voor direct resultaat en SEO voor duurzame groei."
      },
      {
        heading: "Social media voor bouwbedrijven",
        body: "Instagram en Facebook zijn uitstekende kanalen om je werk te tonen. Deel voor-en-na foto's van projecten, geef een kijkje achter de schermen en deel tips over onderhoud. Je hoeft geen social media expert te zijn — 2-3 posts per week is voldoende. Het belangrijkste is consistentie. Na 3-6 maanden bouw je een volgersbestand op dat regelmatig leads oplevert."
      },
      {
        heading: "De kracht van reviews",
        body: "92% van de consumenten leest online reviews voordat ze een aannemer kiezen. Bedrijven met 50+ Google reviews krijgen 3x meer aanvragen dan bedrijven met minder dan 10 reviews. Maak het verzamelen van reviews een vast onderdeel van je proces: stuur na elk project een automatisch reviewverzoek via SMS. De meeste tevreden klanten laten graag een review achter als je het ze makkelijk maakt."
      },
      {
        heading: "Werkspot en vergelijkbare platforms",
        body: "Platforms zoals Werkspot kunnen een bron van leads zijn, maar je bent afhankelijk van het platform en je concurreert direct op prijs. Gebruik deze platforms als aanvulling, niet als je enige kanaal. Investeer in je eigen online aanwezigheid zodat je niet afhankelijk bent van één platform. Klanten die via je eigen website binnenkomen, zijn vaak bereid meer te betalen omdat ze specifiek voor jou kiezen."
      }
    ]
  },
  {
    slug: "google-mijn-bedrijf-bouw",
    title: "Google Mijn Bedrijf optimaliseren voor bouwbedrijven",
    description: "Maximaliseer je lokale vindbaarheid met een geoptimaliseerd Google Business profiel.",
    category: "SEO",
    readTime: "5 min",
    sections: [
      {
        heading: "Waarom Google Mijn Bedrijf cruciaal is",
        body: "Google Mijn Bedrijf (nu Google Business Profile) is het eerste wat potentiële klanten zien als ze zoeken op 'aannemer bij mij in de buurt'. Je profiel toont je contactgegevens, reviews, foto's en openingstijden direct in de zoekresultaten. Een goed geoptimaliseerd profiel kan je aantal aanvragen met 50% verhogen — en het is helemaal gratis."
      },
      {
        heading: "Je profiel optimaliseren in 5 stappen",
        body: "1) Vul ALLE velden in — bedrijfsnaam, adres, telefoonnummer, website, werkgebied, diensten. 2) Kies de juiste categorieën — 'Aannemer' als hoofdcategorie, en voeg relevante subcategorieën toe. 3) Upload minstens 20 foto's van uitgevoerde projecten, je team en je voertuigen. 4) Schrijf een uitgebreide bedrijfsbeschrijving met relevante zoekwoorden. 5) Voeg je diensten toe met beschrijvingen en prijsindicaties."
      },
      {
        heading: "Reviews: de sleutel tot een hoge ranking",
        body: "Google beloont bedrijven met veel recente, positieve reviews met een hogere positie in de lokale zoekresultaten. Reageer altijd op reviews — zowel positieve als negatieve. Een professionele reactie op een negatieve review laat potentiële klanten zien dat je feedback serieus neemt. Streef naar minimaal 5 nieuwe reviews per maand om je ranking te behouden en te verbeteren."
      },
      {
        heading: "Posts en updates plaatsen",
        body: "Weinig bouwbedrijven maken gebruik van Google Posts, terwijl het een krachtige functie is. Deel wekelijks een update: een opgeleverd project, een seizoenstip, of een aanbieding. Dit houdt je profiel actief en geeft Google een signaal dat je bedrijf actief is. Posts verschijnen direct in je bedrijfsprofiel en kunnen doorklikken naar je website genereren."
      },
      {
        heading: "Veelgemaakte fouten vermijden",
        body: "De grootste fouten die bouwbedrijven maken: inconsistente NAW-gegevens (naam, adres, telefoon) op verschillende platforms, te weinig foto's, niet reageren op reviews, en het profiel niet up-to-date houden. Zorg dat je bedrijfsgegevens overal exact hetzelfde zijn — dit is cruciaal voor je lokale SEO. En verwijder verouderde foto's en voeg regelmatig nieuwe toe."
      }
    ]
  },
  {
    slug: "belang-van-reviews-bouw",
    title: "Het belang van online reviews voor bouwbedrijven",
    description: "Waarom reviews je belangrijkste marketingtool zijn en hoe je er meer verzamelt.",
    category: "Reputatie",
    readTime: "5 min",
    sections: [
      {
        heading: "Reviews bepalen wie de opdracht krijgt",
        body: "In een sector waar vertrouwen alles is, zijn online reviews het digitale equivalent van een aanbeveling van een vriend. 93% van de consumenten zegt dat online reviews hun aankoopbeslissing beïnvloeden. Voor bouwprojecten — die vaak duizenden euro's kosten — is dit nog belangrijker. Klanten willen bewijs dat je betrouwbaar bent voordat ze je in huis halen."
      },
      {
        heading: "De cijfers spreken voor zich",
        body: "Bouwbedrijven met een gemiddelde score van 4.5 sterren of hoger ontvangen 270% meer aanvragen dan bedrijven met minder dan 4 sterren. Elk extra review verhoogt je conversie met gemiddeld 0.5%. En bedrijven die actief reviews verzamelen, groeien 2x sneller dan bedrijven die dat niet doen. Reviews zijn geen nice-to-have — ze zijn essentieel voor groei."
      },
      {
        heading: "Hoe vraag je om reviews zonder opdringerig te zijn?",
        body: "De beste tijd om een review te vragen is direct na oplevering, wanneer de klant nog enthousiast is. Stuur een persoonlijke SMS met een directe link naar je Google reviewpagina. Houd het simpel: 'Bedankt voor uw vertrouwen! Zou u uw ervaring willen delen via een korte review?' Automatiseer dit proces zodat je het nooit vergeet. 70% van de klanten laat een review achter als je het vriendelijk vraagt."
      },
      {
        heading: "Omgaan met negatieve reviews",
        body: "Elke ondernemer krijgt weleens een negatieve review. Het verschil zit in hoe je ermee omgaat. Reageer altijd professioneel en binnen 24 uur. Erken het probleem, bied een oplossing aan en nodig de klant uit om contact op te nemen. Potentiële klanten die je reactie lezen, worden vaak juist overtuigd door je professionele houding. Verwijder nooit negatieve reviews — dat beschadigt je geloofwaardigheid."
      },
      {
        heading: "Een review-strategie opzetten",
        body: "Maak reviews een vast onderdeel van je bedrijfsproces. Stel een automatisch systeem in dat na oplevering een reviewverzoek stuurt via SMS, gevolgd door een herinnering na 3 dagen. Toon je reviews op je website en social media. Beloon medewerkers die positief worden genoemd in reviews. En analyseer maandelijks je reviews om verbeterpunten te ontdekken."
      }
    ]
  },
  {
    slug: "website-kosten-bouwbedrijf",
    title: "Wat kost een website voor een bouwbedrijf?",
    description: "Een eerlijk overzicht van de kosten en wat je ervoor terugkrijgt.",
    category: "Website",
    readTime: "6 min",
    sections: [
      {
        heading: "De investering in perspectief",
        body: "Een professionele website voor een bouwbedrijf kost tussen de €1.500 en €10.000, afhankelijk van de complexiteit. Dat klinkt misschien als veel, maar vergelijk het met andere bedrijfsinvesteringen: een bestelbusje kost €30.000+, gereedschap duizenden euro's. Je website is 24/7 je digitale visitekaartje en kan maandelijks meerdere opdrachten opleveren die de investering ruimschoots terugverdienen."
      },
      {
        heading: "Waar betaal je voor?",
        body: "De kosten van een website bestaan uit: ontwerp en ontwikkeling (eenmalig), hosting en domein (jaarlijks €100-€300), onderhoud en updates (maandelijks €50-€150), en optioneel SEO-optimalisatie en content (maandelijks €200-€500). Een goedkope website van €500 ziet er vaak ook goedkoop uit en mist essentiële functies. Investeer liever iets meer in kwaliteit — het verschil in conversie is enorm."
      },
      {
        heading: "Wat moet een goede bouwwebsite bevatten?",
        body: "De must-haves voor een bouwwebsite: een duidelijke homepage die vertrouwen wekt, een portfolio met projectfoto's, klantreviews en testimonials, een dienstenpagina per specialisme, een contactformulier dat makkelijk te vinden is, mobiel-responsief ontwerp, snelle laadtijd, en basis-SEO zodat je vindbaar bent in Google. Nice-to-haves zijn een blog, online offerte-aanvraag en chatfunctie."
      },
      {
        heading: "Zelf bouwen vs. laten bouwen",
        body: "Met website-bouwers zoals Wix of Squarespace kun je voor €20-€50 per maand zelf een website maken. Het voordeel: lage kosten. Het nadeel: je besteedt uren aan iets waar je geen expert in bent, en het resultaat oogt vaak als een doe-het-zelf project. Voor een professioneel bouwbedrijf dat serieus wil overkomen, is een op maat gemaakte website een betere investering. Je krijgt een uniek ontwerp dat aansluit bij je merk en doelgroep."
      },
      {
        heading: "De ROI van een goede website",
        body: "Een goed geoptimaliseerde website levert gemiddeld 5-15 leads per maand op via organisch zoekverkeer. Als je daarvan 30% converteert naar opdrachten met een gemiddelde waarde van €3.000, verdien je €4.500-€13.500 per maand. De investering in je website verdien je dus vaak al binnen de eerste 1-2 maanden terug. Daarna is het pure winst."
      }
    ]
  },
  {
    slug: "werkspot-vs-eigen-website",
    title: "Werkspot vs. eigen website: wat werkt beter?",
    description: "Een eerlijke vergelijking tussen leads via platforms en via je eigen kanalen.",
    category: "Strategie",
    readTime: "6 min",
    sections: [
      {
        heading: "Hoe Werkspot werkt voor aannemers",
        body: "Werkspot verbindt huiseigenaren met vakmensen. Je maakt een profiel aan, reageert op klussen en betaalt per lead (€5-€30 afhankelijk van de klus). Het voordeel: je hebt direct toegang tot een grote pool van potentiële klanten. Het nadeel: je concurreert met 3-5 andere aannemers op dezelfde klus, en de klant kiest vaak op prijs. Je hebt geen controle over het platform of de kosten."
      },
      {
        heading: "De verborgen kosten van platformen",
        body: "Op het eerste gezicht lijken de kosten per lead laag, maar reken het door: als je €15 per lead betaalt, 10 leads per week koopt, en daarvan 2 converteert, betaal je €75 per gewonnen klant aan leadkosten alleen. Daarbovenop verlies je tijd aan het reageren op de 8 leads die je niet wint. En de prijsdruk op platformen zorgt ervoor dat je marges lager zijn dan bij klanten die via je eigen website komen."
      },
      {
        heading: "Voordelen van een eigen website",
        body: "Met een eigen website trek je klanten aan die specifiek naar jou zoeken of jouw type dienst in jouw regio. Deze klanten zijn vaak bereid meer te betalen omdat ze niet 5 offertes aan het vergelijken zijn. Je bouwt aan je eigen merk en online reputatie. En het belangrijkste: je bent niet afhankelijk van een platform dat morgen zijn prijzen kan verhogen of zijn voorwaarden kan wijzigen."
      },
      {
        heading: "De ideale strategie: combineren",
        body: "De slimste aannemers gebruiken platformen als Werkspot als aanvulling, niet als fundament. Gebruik Werkspot om je agenda te vullen in rustige periodes en om reviews te verzamelen als je net begint. Maar investeer tegelijkertijd in je eigen website en online marketing. Op de lange termijn wil je dat minimaal 60-70% van je leads via je eigen kanalen binnenkomt."
      },
      {
        heading: "Van platformafhankelijk naar onafhankelijk",
        body: "De transitie van platform-leads naar eigen leads kost 3-6 maanden. Begin met het opzetten van een professionele website, optimaliseer je Google Mijn Bedrijf profiel, en start met het verzamelen van Google reviews. Investeer €300-€500 per maand in Google Ads voor direct resultaat. Na 6 maanden heb je een stabiele stroom eigen leads en kun je je platformkosten afbouwen."
      }
    ]
  }
];
