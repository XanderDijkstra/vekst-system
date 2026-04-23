import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Target,
  Users,
  MessageCircle,
  Zap,
  Check,
  X,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fadeInUp, systemEase } from "@/lib/animations";
import CtaSection from "@/components/home/CtaSection";

const SITE_URL = "https://www.vekst-systemet.no";
const PAGE_URL = `${SITE_URL}/guide/markedsforing-for-handverkere`;

type Channel = {
  key: string;
  name: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  pros: string[];
  cons: string[];
  monthlyCost: string;
  timeToResult: string;
  bestFor: string;
};

type ProfileRow = {
  profile: string;
  description: string;
  primary: string;
  secondary: string;
  avoid: string;
};

const channels: Channel[] = [
  {
    key: "egen-nettside",
    name: "Egen nettside + lokal SEO",
    tagline: "Du eier kanalen selv. Leads er gratis etter oppstart.",
    icon: Globe,
    pros: [
      "Leads uten per-stykk-kost etter at SEO-en er på plass",
      "Bygger en merkevare du eier - selges også som en eiendel",
      "Google-anmeldelser samles på din Bedriftsprofil",
      "Kundene finner deg igjen direkte neste gang",
      "Skjerper ikke konkurransen - du er ikke i en priskrig",
    ],
    cons: [
      "Tar 2-4 måneder før organiske treff slår inn for fullt",
      "Krever teknisk oppsett - nettside, SEO, Google Bedriftsprofil",
      "Du må svare raskt når leads kommer inn",
    ],
    monthlyCost: "2 500-5 000 kr/mnd (byrå eller SaaS som Vekst Systemet)",
    timeToResult: "Første resultater på 4-8 uker, full effekt etter 3-6 mnd",
    bestFor: "Håndverkere som vil bygge en langsiktig, stabil kundestrøm de eier selv.",
  },
  {
    key: "google-ads",
    name: "Google Ads / Betalte søk",
    tagline: "Raskeste vei til toppen av Google - men du slutter å vises når du slutter å betale.",
    icon: Target,
    pros: [
      "Kommer på topp av Google samme dag",
      "Full kontroll på hvilke søkeord du vises for",
      "Skalerbar - skru opp i travle perioder, ned i stille",
      "Målbart: du ser nøyaktig hva hver krone genererer",
    ],
    cons: [
      "Klikkene koster 25-120 kr per stk i håndverker-bransjen",
      "Trenger landingsside som konverterer - ellers brennes penger",
      "Stopper markedsføringen, stopper leadstrømmen",
      "Krever aktiv optimalisering eller kostnaden stiger",
    ],
    monthlyCost: "4 000-20 000+ kr/mnd - du setter budsjettet",
    timeToResult: "Samme dag, men trenger 2-4 uker optimalisering før det virkelig gir avkastning",
    bestFor: "Etablerte håndverkere med kapasitet til å svare fort, og som tåler høyere markedsføringskostnader i travle perioder.",
  },
  {
    key: "lead-plattformer",
    name: "Mittanbud og Anbudstorget",
    tagline: "Rask igangsetting, høy konkurranse, ingen merkevarebygging.",
    icon: Users,
    pros: [
      "Du kan få første lead samme dag du registrerer deg",
      "Ingen teknisk kompetanse kreves",
      "Bredt nedslagsfelt, mange fagområder dekket",
      "Enkelt å teste uten forpliktelse",
    ],
    cons: [
      "150-800 kr per lead, også når kunden ikke svarer",
      "3-5 håndverkere konkurrerer om samme forespørsel",
      "Kunden velger ofte på pris, ikke kvalitet",
      "Null restverdi - slutter du, forsvinner leadsene",
      "Anmeldelser blir på plattformen, ikke på Google",
    ],
    monthlyCost: "3 000-6 000 kr/mnd - variabelt, per lead",
    timeToResult: "Samme dag",
    bestFor: "Nystartede håndverkere som trenger volum fort, eller som supplement i stille perioder.",
  },
  {
    key: "sosiale-medier",
    name: "Facebook, Instagram og TikTok",
    tagline: "Bygger gjenkjennelse - gir sjelden direkte leads.",
    icon: MessageCircle,
    pros: [
      "Synlighet i lokalsamfunnet og blant tidligere kunder",
      "Bilder av jobbene dine bygger troverdighet",
      "Tidligere kunder kan enkelt anbefale deg videre",
      "Lav inngangskostnad hvis du gjør det selv",
    ],
    cons: [
      "Folk søker ikke etter håndverker på Facebook - de googler",
      "Tidkrevende å holde innhold aktivt og relevant",
      "Algoritmer endres stadig - rekkevidde er usikker",
      "Vanskelig å måle ROI direkte",
    ],
    monthlyCost: "0-3 000 kr/mnd organisk, 3 000-10 000 kr/mnd med betalt annonsering",
    timeToResult: "Gradvis - bygger seg over 3-6 måneder",
    bestFor: "Håndverkere som allerede har en lokal kundebase og vil holde seg toppen av hodet på dem.",
  },
  {
    key: "anbefalinger",
    name: "Anbefalinger og gjenkjøp",
    tagline: "Billigst og best - men tar tid å bygge systematisk.",
    icon: Zap,
    pros: [
      "Kostnad per ny kunde nær 0 kr",
      "Kundene er forhåndskvalifiserte - høy konvertering",
      "Bygger en stabil base av gjentakende kunder",
      "Bygger ryktet ditt lokalt",
    ],
    cons: [
      "Tar år å bygge uten en systematisk prosess",
      "Vanskelig å skalere - du er avhengig av at kundene anbefaler deg",
      "Uten markedsføringssystem skjer dette tilfeldig",
    ],
    monthlyCost: "Nær 0 kr direkte - men krever system for å be om anmeldelser og holde kontakt",
    timeToResult: "6-12 måneder å få det systematisk i gang",
    bestFor: "Alle håndverkere bør ha dette som en grunn-kanal - men det trenger et system for å virke på skala.",
  },
];
const channelTable: { channel: string; cost: string; leadQuality: string; buildsBrand: string; residual: string }[] = [
  {
    channel: "Egen nettside + SEO",
    cost: "Lav per lead (etter oppstart)",
    leadQuality: "Høy - kunden har valgt deg",
    buildsBrand: "Ja - du eier merkevaren",
    residual: "Høy - fortsetter å gi leads",
  },
  {
    channel: "Google Ads",
    cost: "Høy per lead - 300-800 kr",
    leadQuality: "Middels til høy",
    buildsBrand: "Delvis - folk ser navnet ditt",
    residual: "Ingen - stopper med betalingen",
  },
  {
    channel: "Mittanbud / Anbudstorget",
    cost: "Høy per vunnet jobb - 1 500-4 000 kr",
    leadQuality: "Lav til middels - du konkurrerer på pris",
    buildsBrand: "Nei - bygger plattformens merkevare",
    residual: "Ingen",
  },
  {
    channel: "Sosiale medier",
    cost: "Varierende",
    leadQuality: "Lav - folk er ikke i kjøpsmodus",
    buildsBrand: "Ja - lokalt",
    residual: "Delvis",
  },
  {
    channel: "Anbefalinger",
    cost: "Nær 0 kr",
    leadQuality: "Høyest",
    buildsBrand: "Ja - byggesten for ry",
    residual: "Høy - hvis systematisert",
  },
];
const profiles: ProfileRow[] = [
  {
    profile: "Den nystartede",
    description: "Nyopprettet bedrift, ingen egen kundebase, trenger leads i dag - ikke om 3 måneder.",
    primary: "Mittanbud eller Anbudstorget",
    secondary: "Begynn å bygge egen nettside parallelt - ikke vent",
    avoid: "Google Ads uten landingsside - pengene brennes",
  },
  {
    profile: "Den etablerte i én by",
    description: "2-10 års drift, trenger mer forutsigbar leadsstrøm og vil redusere platform-avhengighet.",
    primary: "Egen nettside + lokal SEO",
    secondary: "Anbefalingssystem og Google-anmeldelser",
    avoid: "Å bruke alt budsjettet på Mittanbud - bygg noe du eier",
  },
  {
    profile: "Den vekstorienterte",
    description: "Ønsker å vokse fra én til flere ansatte, trenger høy og skalerbar leadstrøm.",
    primary: "Egen nettside + Google Ads + SEO",
    secondary: "Anbefalingssystem og automatisert oppfølging",
    avoid: "Å hoppe inn i Google Ads uten en nettside som konverterer",
  },
  {
    profile: "Den nisjede",
    description: "Spesialiserer seg i et spesifikt segment - f.eks. eksklusiv bad-oppussing eller hyttebygging.",
    primary: "Nisje-spesifikk SEO + nettside med saker/case",
    secondary: "Instagram/Facebook for inspirasjonsinnhold",
    avoid: "Mittanbud-leads - de er for brede til nisjen",
  },
  {
    profile: "Den etablerte med stabile kunder",
    description: "Har nok jobber, men vil beskytte mot fremtidig nedgangsperiode.",
    primary: "Google Bedriftsprofil + anmeldelsesautomatisering",
    secondary: "Vedlikeholde nettside og kontakt med eksisterende kunder",
    avoid: "Å ikke bygge noe - nedgangen kommer før eller senere",
  },
];
const faqs: { question: string; answer: string }[] = [
  {
    question: "Hvor mye bør en håndverker bruke på markedsføring?",
    answer:
      "Tommelfingerregelen er 3-8 % av omsetningen. En enmannsbedrift med 1,5 mill i omsetning bør ligge på 4 000-10 000 kr per måned. Nystartede bør bruke relativt mer (8-12 %) for å komme raskt i gang, mens etablerte kan ligge lavere hvis de har en solid base av gjentakende kunder.",
  },
  {
    question: "Hva er forskjellen på SEO og Google Ads?",
    answer:
      "SEO (søkemotoroptimalisering) er organiske treff i Google - du betaler ikke per klikk. Det tar 2-4 måneder å se effekt, men gir leads gratis når det er på plass. Google Ads er betalte annonser på toppen av søkeresultatene - du betaler per klikk, ser effekt samme dag, men stopper trafikken når du stopper å betale.",
  },
  {
    question: "Er Mittanbud verdt pengene?",
    answer:
      "For en nystartet håndverker uten egen kundestrøm: som regel ja, i hvert fall i starten. For etablerte bedrifter med Google-synlighet og anmeldelser: ofte nei - du betaler 1 500-4 000 kr per vunnet jobb og bygger ikke egen merkevare. Best brukt som supplement mens du bygger egen nettside.",
  },
  {
    question: "Trenger jeg Facebook og Instagram som håndverker?",
    answer:
      "Nei - men det er hyggelig å ha. Kunder søker sjelden etter en håndverker på Facebook eller Instagram. De googler. Bruk sosiale medier til å bygge gjenkjennelse blant tidligere kunder og lokalsamfunn, men ikke forvent at det skal være din viktigste lead-kilde.",
  },
  {
    question: "Hva bør jeg gjøre først hvis jeg starter fra null?",
    answer:
      "Tre ting i rekkefølge: 1) Opprett og optimaliser Google Bedriftsprofil - det er gratis og gir umiddelbar lokal synlighet. 2) Registrer deg på Mittanbud eller Anbudstorget for raske leads mens neste steg bygges. 3) Start byggingen av en egen nettside med lokal SEO - dette er langtidsinvesteringen som får deg av plattformene.",
  },
  {
    question: "Hvor lang tid tar det før markedsføringen gir kunder?",
    answer:
      "Avhenger av kanal. Mittanbud: samme dag. Google Ads: 2-4 uker etter optimalisering. Egen nettside + SEO: 4-8 uker før første treff, 3-6 måneder til full effekt. Anbefalingssystem: 6-12 måneder å få systematisert. De beste resultatene kommer av å kjøre flere kanaler parallelt i starten.",
  },
  {
    question: "Kan jeg gjøre markedsføring selv som håndverker?",
    answer:
      "Deler av det ja - Google Bedriftsprofil og grunnleggende SEO kan du gjøre selv. Men å bygge en nettside som faktisk konverterer, sette opp automatisert oppfølging, kjøre Google Ads og håndtere alt parallelt - det er fulltidsjobb. De fleste håndverkere tjener mer på å være på byggeplassen og sette markedsføringen ut til noen som kan det.",
  },
  {
    question: "Hva er Google Bedriftsprofil og hvorfor er den så viktig?",
    answer:
      "Google Bedriftsprofil (tidligere Google My Business) er bedriftens profil i Google og Google Maps. Den viser adresse, telefonnummer, åpningstider, bilder og anmeldelser. Den er gratis å opprette og er ofte det første kundene ser når de googler etter en håndverker i området. Å optimalisere profilen er det billigste og raskeste SEO-grepet du kan gjøre.",
  },
  {
    question: "Bør jeg velge et markedsføringsbyrå eller en SaaS-løsning?",
    answer:
      "Byråer krever ofte 15 000-40 000 kr per måned pluss oppstartskostnader og leverer som regel ett element (nettside eller SEO). SaaS-løsninger som Vekst Systemet leverer en komplett pakke - nettside, SEO, anmeldelser, lead-oppfølging og SMS-system - til 2 990 kr per måned fast. For de fleste håndverkere gir SaaS raskere ROI og mindre komplisert samarbeid.",
  },
  {
    question: "Hvordan måler jeg om markedsføringen min virker?",
    answer:
      "Tre nøkkeltall: kostnad per lead (hvor mye betaler du for hver kontakt), konverteringsrate (hvor mange leads blir til jobb) og kostnad per vunnet jobb (CPA). Hvis CPA er høyere enn 5-10 % av gjennomsnittlig ordreverdi, taper du penger eller går i null. Følg med månedlig.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Markedsføring for håndverkere 2026: Komplett guide | Vekst Systemet",
  url: PAGE_URL,
  description:
    "Den ærlige guiden til håndverker-markedsføring i Norge: alle 5 kanaler sammenlignet, kostnader, hva som passer for hvem og en anbefalt kombinasjon for 2026.",
  inLanguage: "nb-NO",
  author: { "@type": "Organization", name: "Vekst Systemet" },
  publisher: { "@type": "Organization", name: "Vekst Systemet", url: SITE_URL },
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
};

const MarkedsforingHandverkere = () => (
  <PageShell>
    <Helmet>
      <title>Markedsføring for håndverkere 2026: Komplett guide | Vekst Systemet</title>
      <meta
        name="description"
        content="Hvordan får du flere kunder som håndverker? En ærlig gjennomgang av alle 5 markedsføringskanaler for håndverkere i Norge, med kostnader og konkrete anbefalinger for 2026."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Markedsføring for håndverkere 2026: Komplett guide" />
      <meta
        property="og:description"
        content="Alle kanaler, kostnader og anbefalinger for håndverker-markedsføring i Norge."
      />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="nb_NO" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>

    {/* Hero */}
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary">
      <div className="container max-w-4xl text-center">
        <motion.span
          {...fadeInUp}
          className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground"
        >
          Guide · 2026
        </motion.span>
        <motion.h1
          {...fadeInUp}
          className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground"
        >
          Markedsføring for håndverkere: Komplett guide 2026
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
        >
          Hvordan får du flere kunder som håndverker uten å kaste bort penger?
          De 5 markedsføringskanalene sammenlignet - kostnader, konkurranse og
          hva som faktisk virker i Norge i dag.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">
              Bestill en gratis samtale <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="link" className="text-primary-foreground/80 hover:text-primary-foreground">
            <Link to="/priser">Se prisene våre →</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Intro / TL;DR */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          Kort oppsummert
        </motion.h2>
        <motion.div
          {...fadeInUp}
          className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            Det finnes fem hovedkanaler for håndverker-markedsføring i Norge:
            egen nettside med lokal SEO, Google Ads, lead-plattformer som
            Mittanbud og Anbudstorget, sosiale medier og anbefalinger fra
            tidligere kunder.
          </p>
          <p>
            Ingen enkeltkanal er den beste for alle. Men de aller fleste
            håndverkere - nystartede som etablerte - vinner på en kombinasjon
            der <strong className="text-foreground">egen nettside</strong> er
            grunnmuren, og de andre kanalene er supplementer.
          </p>
          <p>
            Grunnen er enkel: nettsiden din er det eneste du faktisk eier. Slutter
            du på Mittanbud eller skrur av Google Ads, stopper leadsene samme
            dag. En optimalisert nettside fortsetter å gi kunder i årevis.
          </p>
        </motion.div>
      </div>
    </section>

    {/* 5 channels */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-6xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          De 5 kanalene - én for én
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Hver kanal har sitt eget bruksområde. Her er hva du bør vite om
          kostnader, tidshorisont og hvem hver kanal passer best for.
        </motion.p>
        <div className="mt-12 space-y-6">
          {channels.map((c, i) => (
            <motion.div
              key={c.key}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
              className="rounded-2xl bg-card p-8 shadow-system-card border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                  <c.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{c.name}</h3>
                  <p className="text-sm text-muted-foreground italic mt-1">{c.tagline}</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mt-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-accent mb-3">
                    Fordeler
                  </p>
                  <ul className="space-y-2">
                    {c.pros.map((pro, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-destructive mb-3">
                    Ulemper
                  </p>
                  <ul className="space-y-2">
                    {c.cons.map((con, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3 mt-6 pt-6 border-t border-border">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">
                    Månedskostnad
                  </p>
                  <p className="text-sm font-medium text-foreground">{c.monthlyCost}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">
                    Tid til resultater
                  </p>
                  <p className="text-sm font-medium text-foreground">{c.timeToResult}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">
                    Passer best for
                  </p>
                  <p className="text-sm text-foreground">{c.bestFor}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Comparison table */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Side om side - alle fem kanaler
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Det viktigste kriteriene på én oversikt.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Kanal</TableHead>
                <TableHead>Kostnad</TableHead>
                <TableHead>Leads-kvalitet</TableHead>
                <TableHead>Bygger merkevare?</TableHead>
                <TableHead>Restverdi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {channelTable.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground">{row.channel}</TableCell>
                  <TableCell className="text-muted-foreground">{row.cost}</TableCell>
                  <TableCell className="text-muted-foreground">{row.leadQuality}</TableCell>
                  <TableCell className="text-muted-foreground">{row.buildsBrand}</TableCell>
                  <TableCell className="text-muted-foreground">{row.residual}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>

    {/* Which channel for which contractor */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Hvilke kanaler passer din bedrift?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Fem typiske håndverker-profiler, og hva som fungerer best for hver.
        </motion.p>
        <div className="mt-12 space-y-4">
          {profiles.map((p, i) => (
            <motion.div
              key={p.profile}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
              className="rounded-2xl bg-card p-6 md:p-8 shadow-system-card border border-border"
            >
              <h3 className="text-xl font-bold text-foreground">{p.profile}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-accent/5 p-4 border border-accent/20">
                  <p className="text-xs font-bold uppercase tracking-wide text-accent mb-2">
                    Hovedkanal
                  </p>
                  <p className="text-sm font-medium text-foreground">{p.primary}</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">
                    Sekundær
                  </p>
                  <p className="text-sm text-foreground">{p.secondary}</p>
                </div>
                <div className="rounded-xl bg-destructive/5 p-4 border border-destructive/20">
                  <p className="text-xs font-bold uppercase tracking-wide text-destructive mb-2">
                    Unngå
                  </p>
                  <p className="text-sm text-foreground">{p.avoid}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Recommended stack */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-4xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Anbefalt stack for 2026
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Hvis vi skulle bygget en håndverkerbedrift fra null i dag, ville
          vi gjort dette - i denne rekkefølgen.
        </motion.p>
        <div className="mt-12 space-y-4">
          {[
            {
              step: "01",
              title: "Google Bedriftsprofil (gratis, uke 1)",
              desc: "Opprett, verifiser, fyll ut alt. Dette er det billigste og raskeste synlighetsgrepet du kan gjøre. Uten Google Bedriftsprofil eksisterer du ikke i lokale søk.",
            },
            {
              step: "02",
              title: "Egen nettside + lokal SEO (uke 1-8)",
              desc: "Grunnmuren du eier. Mobilvennlig, rask, bygget for konvertering og lokalt optimalisert. Dette er det som gir leads i årevis uten løpende kostnader.",
            },
            {
              step: "03",
              title: "Anmeldelsesautomatisering (parallelt med steg 2)",
              desc: "En systematisk måte å samle 5-stjerners Google-anmeldelser fra fornøyde kunder. Dette løfter lokal SEO og konverteringsraten på nettsiden.",
            },
            {
              step: "04",
              title: "Tapt-anrop-til-SMS (måned 2)",
              desc: "Du har ikke tid til å ta alle anrop. Automatisert SMS-svar sikrer at du ikke taper de leadsene som kommer mens du er på byggeplassen.",
            },
            {
              step: "05",
              title: "Mittanbud som supplement (måned 1-6)",
              desc: "Bruk plattformen kun mens egen nettside bygges opp. Når Google-leadsene kommer inn, reduserer du bruken gradvis.",
            },
            {
              step: "06",
              title: "Google Ads når stabilt (måned 6+)",
              desc: "Når nettsiden konverterer godt, kan du skalere med målrettede Google-annonser i travle perioder. Ikke tidligere - da brenner du bare penger.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
              className="flex gap-5 rounded-2xl bg-card p-6 shadow-system-card border border-border"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                <span className="text-sm font-bold text-accent">{s.step}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeInUp} className="mt-10 text-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/priser">
              Se hvordan Vekst Systemet leverer hele stacken <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-3xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          Ofte stilte spørsmål
        </motion.h2>
        <motion.div {...fadeInUp} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-border bg-card px-6 shadow-system-card"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>

    {/* Related */}
    <section className="py-12 bg-card">
      <div className="container max-w-4xl text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
          Gå dypere på temaet
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/sammenlign/mittanbud-alternativ">Mittanbud-alternativ</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/sammenlign/mittanbud-priser">Mittanbud priser forklart</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/sammenlign/mittanbud-vs-anbudstorget">Mittanbud vs Anbudstorget</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/tjenester/leadgenerering">Leadgenerering-tjeneste</Link>
          </Button>
        </div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default MarkedsforingHandverkere;
