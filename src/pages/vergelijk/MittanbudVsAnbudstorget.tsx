import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Info } from "lucide-react";
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

const SITE_URL = "https://vekst-systemet.no";
const PAGE_URL = `${SITE_URL}/sammenlign/mittanbud-vs-anbudstorget`;

type PlatformCard = {
  name: string;
  tagline: string;
  pros: string[];
  cons: string[];
  bestFor: string;
};

const platforms: PlatformCard[] = [
  {
    name: "Mittanbud",
    tagline: "Størst, bredest, mest konkurrert",
    pros: [
      "Størst volum av forespørsler i Norge",
      "Sterk forbrukergjenkjennelse og markedsføring",
      "Dekker bredt spekter av fagområder og oppdrag",
      "Velutviklet app og profil-struktur",
      "Rask igangsetting - du kan få første lead samme dag",
    ],
    cons: [
      "3-5 håndverkere får samme lead - tøff priskonkurranse",
      "Kreditt-priser 150-800 kr per lead, stiger i pressområder",
      "Du betaler uansett om kunden svarer eller ikke",
      "Sterkt fokus på pris fremfor kvalitet i kundenes valg",
      "Anmeldelsene blir på Mittanbud, ikke på Google",
    ],
    bestFor:
      "Nystartede håndverkere som trenger volum fort, eller etablerte bedrifter som bruker Mittanbud som et supplement i stille perioder.",
  },
  {
    name: "Anbudstorget",
    tagline: "Mindre, men ofte mindre konkurranse per lead",
    pros: [
      "Færre håndverkere per forespørsel - mindre priskonkurranse",
      "Enklere prisstruktur enn Mittanbud i mange tilfeller",
      "Mer direkte kontakt mellom håndverker og kunde",
      "Ofte sterkere i enkelte fagnisjer og regioner",
      "Lavere barriere for å teste plattformen",
    ],
    cons: [
      "Mindre leadsvolum totalt - særlig utenfor byene",
      "Lavere forbrukergjenkjennelse enn Mittanbud",
      "Færre tilleggsfunksjoner (profil, anmeldelser, app)",
      "Samme grunnproblem: du leier leads, eier ingenting",
      "Anmeldelser her hjelper deg heller ikke på Google",
    ],
    bestFor:
      "Håndverkere i bestemte nisjer eller mindre tettsteder, eller de som føler Mittanbud-konkurransen er for hard i sitt område.",
  },
];
const comparison: { aspect: string; mittanbud: string; anbudstorget: string }[] = [
  { aspect: "Leadsvolum", mittanbud: "Høyt - størst i Norge", anbudstorget: "Lavere - særlig utenfor byene" },
  { aspect: "Forbrukergjenkjennelse", mittanbud: "Svært høy", anbudstorget: "Middels - nisje-kjent" },
  { aspect: "Prismodell", mittanbud: "Kreditt-basert, 150-800 kr/lead", anbudstorget: "Varierende - ofte enklere" },
  { aspect: "Konkurrenter per lead", mittanbud: "3-5 håndverkere", anbudstorget: "Ofte 2-3 håndverkere" },
  { aspect: "Egen profil/merkevare", mittanbud: "Bygges kun på plattformen", anbudstorget: "Bygges kun på plattformen" },
  { aspect: "Google-anmeldelser", mittanbud: "Ingen - forblir på Mittanbud", anbudstorget: "Ingen - forblir på Anbudstorget" },
  { aspect: "App-opplevelse", mittanbud: "Velutviklet, aktiv mobilapp", anbudstorget: "Enklere - mindre polish" },
  { aspect: "Oppstartstid", mittanbud: "Samme dag", anbudstorget: "Samme dag" },
  { aspect: "Oppsigelse", mittanbud: "Når som helst", anbudstorget: "Når som helst" },
  { aspect: "Restverdi hvis du slutter", mittanbud: "0 kr", anbudstorget: "0 kr" },
];
const faqs: { question: string; answer: string }[] = [
  {
    question: "Hvilken plattform gir flest leads - Mittanbud eller Anbudstorget?",
    answer:
      "Mittanbud har klart størst volum, særlig i Oslo, Bergen, Trondheim og Stavanger. Anbudstorget er mindre totalt, men kan gi relativt mange leads i bestemte nisjer eller regioner hvor færre konkurrenter er til stede. Totalt lead-volum per måned er som regel høyere på Mittanbud for de fleste fagområder.",
  },
  {
    question: "Er Anbudstorget billigere enn Mittanbud?",
    answer:
      "I mange tilfeller ja - ikke nødvendigvis per lead, men fordi færre konkurrerer om samme forespørsel. Det betyr at konverteringsraten kan være høyere, og kostnad per vunnet jobb lavere. Men volumet er også lavere, så totalkostnaden avhenger helt av hvor aktiv du er.",
  },
  {
    question: "Kan jeg bruke Mittanbud og Anbudstorget samtidig?",
    answer:
      "Ja. Mange håndverkere gjør det nettopp for å ha to kilder til leads. Ulempen er at du må følge med på to plattformer, to kreditt-kontoer og to meldingssystemer. Fordelene er mer volum og mindre avhengighet av én aktør.",
  },
  {
    question: "Hvilken av de to er best for nystartede håndverkere?",
    answer:
      "Mittanbud har flest forespørsler og raskest igangsetting. For en helt ny bedrift uten egen kundestrøm er det som regel stedet å begynne. Etter noen måneder kan du vurdere å legge til Anbudstorget eller - bedre - bygge en egen nettside slik at du ikke lenger er avhengig av plattformene.",
  },
  {
    question: "Gir anmeldelser på Anbudstorget Google-treff?",
    answer:
      "Nei. Akkurat som på Mittanbud forblir anmeldelsene på plattformen. De hjelper profilen din der, men gir deg ingen SEO-fordel i Google-søk. For å bygge lokal synlighet på Google trenger du Google Bedriftsprofil og en egen nettside som samler anmeldelser.",
  },
  {
    question: "Hvilken plattform har best app?",
    answer:
      "Mittanbud har den mest velutviklede mobilappen, med varslinger, full meldingshåndtering og profiladministrasjon. Anbudstorget sin løsning er enklere, men dekker det viktigste. For håndverkere som styrer alt fra telefonen er Mittanbuds app ofte et pluss.",
  },
  {
    question: "Finnes det et alternativ til begge?",
    answer:
      "Ja - egen nettside med optimalisert Google Bedriftsprofil. Du eier kundene, betaler ikke per lead, og bygger en merkevare som fortsetter å gi leads selv om du slutter med betalt markedsføring. Vekst Systemet leverer alt dette som en pakke for 2 990 kr per måned, fast pris.",
  },
  {
    question: "Bør jeg droppe Mittanbud og Anbudstorget helt?",
    answer:
      "Ikke nødvendigvis. En god strategi er å bruke plattformene mens du bygger egen kundestrøm. Etter 3-6 måneder vil leads via egen nettside og Google typisk dekke mesteparten av kapasiteten din, og du kan redusere platform-avhengigheten gradvis. Plattformene blir fra hovedkanal til et supplement.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Mittanbud vs Anbudstorget: Hvilken plattform passer håndverkeren din? | Vekst Systemet",
  url: PAGE_URL,
  description:
    "Mittanbud og Anbudstorget side om side: leadsvolum, priser, fagområder, konkurranse per lead og hva som passer hvilken håndverker. Pluss alternativet ingen snakker om.",
  inLanguage: "nb-NO",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Sammenligninger", item: `${SITE_URL}/sammenlign` },
      { "@type": "ListItem", position: 3, name: "Mittanbud vs Anbudstorget", item: PAGE_URL },
    ],
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
};

const MittanbudVsAnbudstorget = () => (
  <PageShell>
    <Helmet>
      <title>Mittanbud vs Anbudstorget: Hvilken bør håndverkere velge? | Vekst Systemet</title>
      <meta
        name="description"
        content="Mittanbud og Anbudstorget side om side: leadsvolum, priser, fagområder og konkurranse per lead - pluss alternativet ingen snakker om."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Mittanbud vs Anbudstorget: Hvilken bør håndverkere velge?" />
      <meta
        property="og:description"
        content="Ærlig sammenligning av de to største lead-plattformene for håndverkere i Norge."
      />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:type" content="website" />
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
          Sammenligning
        </motion.span>
        <motion.h1
          {...fadeInUp}
          className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground"
        >
          Mittanbud vs Anbudstorget
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
        >
          De to største lead-plattformene for håndverkere i Norge, lagt side om
          side. Leadsvolum, priser, konkurransepress - og alternativet de fleste
          overser.
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
            <Link to="/sammenlign/mittanbud-priser">Se Mittanbud-prisene →</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Platform cards */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          De to plattformene på 30 sekunder
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Samme grunnmodell - du kjøper tilgang til leads - men ganske ulike i
          størrelse, konkurransepress og hvem de passer best for.
        </motion.p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.08 }}
              className="rounded-2xl bg-card p-8 shadow-system-card border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground italic">{p.tagline}</p>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-accent mb-3">Fordeler</p>
                <ul className="space-y-2">
                  {p.pros.map((pro, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-destructive mb-3">Ulemper</p>
                <ul className="space-y-2">
                  {p.cons.map((con, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl bg-muted/50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">
                  Passer best for
                </p>
                <p className="text-sm text-foreground leading-relaxed">{p.bestFor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Comparison table */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Side om side - punkt for punkt
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Ingen salgspitch, ingen skjulte agendaer. Slik stiller de to plattformene opp mot hverandre.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3"></TableHead>
                <TableHead>Mittanbud</TableHead>
                <TableHead>Anbudstorget</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground">{row.aspect}</TableCell>
                  <TableCell className="text-muted-foreground">{row.mittanbud}</TableCell>
                  <TableCell className="text-muted-foreground">{row.anbudstorget}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>

    {/* Shared limitation */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <motion.div
          {...fadeInUp}
          className="rounded-2xl bg-card p-10 shadow-system-card border-l-4 border-accent"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Info className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Den ene tingen begge plattformene deler
          </h2>
          <div className="mt-5 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Enten du velger Mittanbud eller Anbudstorget, betaler du for å{" "}
              <strong className="text-foreground">leie tilgang til kunder</strong>.
              Slutter du på plattformen, stopper også leadstrømmen - uansett hvor
              mange år du har bygd opp en profil og samlet anmeldelser der.
            </p>
            <p>
              Bygger du derimot en egen nettside med optimalisert Google
              Bedriftsprofil og lokal SEO, eier du resultatet selv. Anmeldelser,
              søketreff og kundedatabasen blir din - og den fortsetter å gi leads
              selv om du slutter å betale for markedsføring.
            </p>
            <p>
              Det er ingen "enten-eller". De fleste håndverkere tjener på å bruke
              plattformene i 3-6 måneder mens egen kanal bygges opp, og deretter
              redusere avhengigheten gradvis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Real alternative */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Alternativet som slår begge over tid
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Samme månedsbudsjett som Mittanbud - men kanalen du eier selv.
        </motion.p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              label: "Mittanbud",
              price: "3 000-6 000 kr/mnd",
              desc: "Variabelt, betal per lead. 3-5 konkurrenter per forespørsel. Ingen restverdi.",
            },
            {
              label: "Anbudstorget",
              price: "Varierende",
              desc: "Lavere volum, ofte mindre konkurranse per lead. Samme grunnproblem: du eier ikke kundene.",
            },
            {
              label: "Vekst Systemet",
              price: "2 990 kr/mnd fast",
              desc: "Egen nettside, lokal SEO, anmeldelsesautomatisering og SMS-system. Du eier alt.",
              hero: true,
            },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.06 }}
              className={`rounded-2xl p-6 shadow-system-card ${
                c.hero
                  ? "bg-accent/5 border-2 border-accent/30"
                  : "bg-card border border-border"
              }`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-wide mb-3 ${
                  c.hero ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {c.label}
              </p>
              <p
                className={`text-2xl font-bold ${
                  c.hero ? "text-accent" : "text-foreground"
                }`}
              >
                {c.price}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeInUp} className="mt-12 text-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/sammenlign/mittanbud-alternativ">
              Se full Mittanbud-sammenligning <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 md:py-28 bg-background">
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

    {/* Related links */}
    <section className="py-12 bg-card">
      <div className="container max-w-4xl text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
          Også interessant
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/sammenlign/mittanbud-alternativ">Mittanbud-alternativ</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/sammenlign/mittanbud-priser">Mittanbud priser forklart</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/priser">Se prisene våre <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default MittanbudVsAnbudstorget;
