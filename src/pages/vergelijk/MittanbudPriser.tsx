import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Coins, AlertTriangle, Calculator } from "lucide-react";
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
const PAGE_URL = `${SITE_URL}/sammenlign/mittanbud-priser`;

const tiers: { label: string; price: string; range: string; note: string }[] = [
  {
    label: "Små oppdrag",
    price: "150–250 kr",
    range: "per lead",
    note: "Typisk mindre reparasjoner: utskifting av blandebatteri, små malerjobber, en dør som henger.",
  },
  {
    label: "Mellomstore oppdrag",
    price: "300–500 kr",
    range: "per lead",
    note: "Bad-oppussing i mindre skala, elektriske installasjoner, flisarbeid, rørleggerarbeid utenom hastetilfeller.",
  },
  {
    label: "Store oppdrag",
    price: "500–800 kr",
    range: "per lead",
    note: "Totaloppussing av bad eller kjøkken, tilbygg, større malerjobber, takarbeid - der jobben er verdt over 100 000 kr.",
  },
  {
    label: "Premium-oppdrag",
    price: "800–1 200 kr",
    range: "per lead",
    note: "Nybygg, hytter, større entreprisearbeid. Lead-prisene her kan bli vesentlig høyere i perioder med lav tilbudsside.",
  },
];
const hiddenCosts: { title: string; description: string }[] = [
  {
    title: "Du betaler for leads som ikke svarer",
    description:
      "Når du kjøper en lead, trekkes kredittene uansett om kunden noen gang svarer på henvendelsen din. Anslagsvis 20-30 % av leads på plattformen konverterer ikke til en reell samtale - men de er allerede betalt for.",
  },
  {
    title: "Kredittene utløper",
    description:
      "Mittanbud-kreditter har utløpsdato. Kjøper du en større pakke for å få bedre pris per kreditt, risikerer du å tape dem hvis du ikke får brukt dem opp i perioden - noe som ofte skjer i stille måneder.",
  },
  {
    title: "Du konkurrerer med 3-5 andre på samme lead",
    description:
      "Når du har betalt for en lead, sendes den også til flere konkurrenter. Sannsynligheten for å faktisk vinne jobben er typisk 15-25 %. Regn derfor med at en \"vunnet jobb\" har 3-4 betalte leads bak seg.",
  },
  {
    title: "Pris per lead stiger i konkurransepressede områder",
    description:
      "I Oslo, Bergen og Trondheim der mange håndverkere ligger på plattformen, presses lead-prisene oppover. Samme type jobb kan koste 40-60 % mer i en by enn i et distrikt.",
  },
  {
    title: "Årlig prisvekst",
    description:
      "Lead-prisene har steget jevnt de siste årene. Du har ingen forhandlingskraft - prisen er det den er, og trenden peker oppover.",
  },
  {
    title: "Ingen verdi etter at du slutter",
    description:
      "Slutter du på Mittanbud, mister du hele leadstrømmen umiddelbart. Ingen restverdi, ingen kundedatabase du eier, ingen Google-posisjoner som fortsetter å gi avkastning.",
  },
];
const exampleRows: { trade: string; leadPrice: string; leadsToJob: string; costPerJob: string }[] = [
  { trade: "Rørlegger, småjobber", leadPrice: "200 kr", leadsToJob: "4-5", costPerJob: "800-1 000 kr" },
  { trade: "Elektriker, boligjobber", leadPrice: "350 kr", leadsToJob: "4-6", costPerJob: "1 400-2 100 kr" },
  { trade: "Maler, innvendig", leadPrice: "250 kr", leadsToJob: "5-6", costPerJob: "1 250-1 500 kr" },
  { trade: "Bad-oppussing", leadPrice: "600 kr", leadsToJob: "5-7", costPerJob: "3 000-4 200 kr" },
  { trade: "Tak-entreprenør", leadPrice: "700 kr", leadsToJob: "6-8", costPerJob: "4 200-5 600 kr" },
  { trade: "Kjøkken-totaloppussing", leadPrice: "900 kr", leadsToJob: "6-8", costPerJob: "5 400-7 200 kr" },
];
const faqs: { question: string; answer: string }[] = [
  {
    question: "Hvor mye koster Mittanbud i måneden?",
    answer:
      "Det kommer an på hvor mange leads du kjøper. De fleste håndverkere som bruker plattformen aktivt ender opp mellom 2 500 og 6 000 kr per måned. Beløpet varierer fra måned til måned fordi du betaler per kreditt, og fordi lead-prisene svinger etter område og type oppdrag.",
  },
  {
    question: "Hva koster en lead på Mittanbud?",
    answer:
      "Typisk 150 kr for de minste oppdragene, 300-500 kr for mellomstore jobber og 500-800 kr for store oppdrag som bad- eller kjøkken-oppussing. Premium-leads for nybygg og hytter kan koste 800-1 200 kr. Prisene er høyere i pressområder som Oslo, Bergen og Trondheim.",
  },
  {
    question: "Er Mittanbud gratis å registrere seg på?",
    answer:
      "Selve registreringen er gratis. Du kjøper kreditter som brukes hver gang du tar imot en lead. Det er ingen månedlig abonnementskostnad - men praktisk talt kan du ikke bruke plattformen uten å kjøpe kreditter regelmessig.",
  },
  {
    question: "Får jeg igjen pengene hvis kunden ikke svarer?",
    answer:
      "Nei. Kredittene trekkes når du aksepterer leaden, uavhengig av om kunden faktisk svarer deg, tar telefonen eller bestemmer seg for en annen håndverker uten å gi tilbakemelding. Dette er en av de største frustrasjonene blant håndverkere på plattformen.",
  },
  {
    question: "Hvor mange leads trenger jeg for å vinne én jobb?",
    answer:
      "Snittet ligger på 4-7 leads per vunnet oppdrag, avhengig av type jobb og hvor godt profilen din er. For små oppdrag (rørlegger, elektriker, maler) er konverteringen bedre. For store oppdrag (totaloppussing) konkurrerer du mot flere - og konverteringen faller.",
  },
  {
    question: "Er det verdt prisen?",
    answer:
      "For en håndverker uten egen kundestrøm og uten synlig nettside kan Mittanbud gi rask igangsetting. Problemet er at kostnaden per vunnet jobb ofte ender på 1 500-5 000 kr - og du bygger ingen egen merkevare eller organisk synlighet. Brukt som eneste kanal blir det dyrt. Brukt som supplement mens du bygger egen nettside fungerer det ofte bedre.",
  },
  {
    question: "Hva er et billigere alternativ til Mittanbud?",
    answer:
      "En egen nettside kombinert med optimalisert Google Bedriftsprofil. Vekst Systemet leverer begge deler pluss anmeldelsesautomatisering og SMS-system til 2 990 kr per måned - fast pris, ubegrensede leads. Etter 3-6 måneder kommer de fleste leads gjennom egne kanaler, gratis.",
  },
  {
    question: "Kan jeg regne ut hva Mittanbud faktisk koster meg per jobb?",
    answer:
      "Ja. Ta månedskostnaden din på Mittanbud og del på antall vunne jobber. De fleste håndverkere ender på 1 500-4 000 kr per vunnet jobb - ofte mer enn de tror. En egen nettside har ingen slik \"kost-per-jobb\" fordi prisen er fast, uansett hvor mange leads som kommer inn.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Mittanbud priser og kreditter forklart | Vekst Systemet",
  url: PAGE_URL,
  description:
    "Hva koster Mittanbud egentlig? En ærlig gjennomgang av kreditt-systemet, lead-prisene og skjulte kostnader - pluss hva en egen nettside gir for samme budsjett.",
  inLanguage: "nb-NO",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Sammenligninger", item: `${SITE_URL}/sammenlign` },
      { "@type": "ListItem", position: 3, name: "Mittanbud priser", item: PAGE_URL },
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

const MittanbudPriser = () => (
  <PageShell>
    <Helmet>
      <title>Mittanbud priser og kreditter forklart | Vekst Systemet</title>
      <meta
        name="description"
        content="Hva koster Mittanbud egentlig? Kreditt-systemet, lead-prisene og skjulte kostnader - pluss hva en egen nettside gir for samme budsjett."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Mittanbud priser og kreditter forklart" />
      <meta
        property="og:description"
        content="Kreditt-systemet, lead-prisene og skjulte kostnader på Mittanbud - nøktern sammenligning med egen nettside."
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
          Mittanbud priser og kreditter forklart
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed"
        >
          Hva betaler du egentlig på Mittanbud? Vi regner gjennom kreditt-systemet,
          lead-prisene og de skjulte kostnadene - og viser hva samme budsjett gir
          med en egen nettside.
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
            <Link to="/sammenlign/mittanbud-alternativ">Se full sammenligning →</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Credit system explainer */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-4xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          Slik fungerer kreditt-systemet på Mittanbud
        </motion.h2>
        <motion.div {...fadeInUp} className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Mittanbud er ikke et abonnement. Du kjøper <strong className="text-foreground">kreditter</strong> i
            pakker, og bruker kredittene hver gang du tar imot en lead. Større pakker gir lavere pris per kreditt,
            men kredittene har utløpsdato - kjøper du mer enn du bruker, mister du dem.
          </p>
          <p>
            Prisen per lead er ikke fast. Den bestemmes av typen oppdrag, hvor stort det er, hvor mange håndverkere
            som er aktive i området, og hvor lenge jobben har ligget ute. Små jobber i distriktene kan koste rundt
            150-200 kr per lead. Store oppdrag i Oslo, Bergen eller Trondheim kan koste 800-1 200 kr.
          </p>
          <p>
            I praksis betyr det at du som håndverker ikke vet eksakt hva neste måned kommer til å koste. Prisen
            svinger etter hva markedet gjør - og trenden har gått oppover i årevis.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Pricing tiers */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Hva koster en lead - etter oppdragstype
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Indikative spenn basert på gjennomsnittlige lead-priser i 2025 og 2026.
          Faktiske tall varierer etter område og sesong.
        </motion.p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.label}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.05 }}
              className="rounded-2xl bg-card p-6 shadow-system-card border border-border"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Coins className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{tier.label}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-accent">{tier.price}</span>
                <span className="text-sm text-muted-foreground">{tier.range}</span>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">{tier.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Hidden costs */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          6 skjulte kostnader som ikke står i pris-tabellen
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground max-w-2xl"
        >
          Det er ikke kreditt-prisen alene som avgjør hva Mittanbud faktisk koster
          deg - det er alt som kommer i tillegg.
        </motion.p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {hiddenCosts.map((item, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: i * 0.04 }}
              className="rounded-2xl bg-card p-6 shadow-system-card"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Real cost-per-job table */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Hva koster en vunnet jobb - egentlig?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Ganger du lead-prisen med antallet du trenger for å faktisk vinne én jobb,
          ser regnestykket slik ut.
        </motion.p>
        <motion.div
          {...fadeInUp}
          className="mt-10 overflow-x-auto rounded-2xl bg-card shadow-system-card"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fag / oppdrag</TableHead>
                <TableHead>Pris per lead</TableHead>
                <TableHead>Leads per vunnet jobb</TableHead>
                <TableHead className="text-accent font-semibold">Kost per vunnet jobb</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exampleRows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-foreground">{row.trade}</TableCell>
                  <TableCell className="text-muted-foreground">{row.leadPrice}</TableCell>
                  <TableCell className="text-muted-foreground">{row.leadsToJob}</TableCell>
                  <TableCell className="font-semibold text-foreground bg-accent/5">
                    {row.costPerJob}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
        <motion.p {...fadeInUp} className="mt-6 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Tallene er estimater basert på typiske lead-priser og konverteringsrater
          blant norske håndverkere som bruker Mittanbud som hovedkanal.
        </motion.p>
      </div>
    </section>

    {/* Same budget, different results */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center"
        >
          Samme 3 000 kr i måneden - to helt forskjellige resultater
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Tar du 3 000 kr og plasserer på Mittanbud kontra egen nettside, slik
          ser utbyttet typisk ut etter 6 måneder.
        </motion.p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4, ease: systemEase }}
            className="rounded-2xl p-8 shadow-system-card bg-card border border-border"
          >
            <p className="text-xs font-bold uppercase tracking-wide mb-4 text-muted-foreground">
              Mittanbud (3 000 kr/mnd)
            </p>
            <dl className="space-y-3">
              {[
                { k: "Leads kjøpt per måned", v: "6-10" },
                { k: "Vunne jobber per måned", v: "1-2" },
                { k: "Kost per vunnet jobb", v: "1 500-3 000 kr" },
                { k: "Egen synlighet etter 6 mnd", v: "Uendret - null" },
                { k: "Egen anmeldelses-base", v: "Ingen på Google" },
                { k: "Restverdi hvis du slutter", v: "0 kr" },
              ].map((item, j) => (
                <div key={j} className="flex items-baseline justify-between border-b border-border/60 pb-2 last:border-none">
                  <dt className="text-sm text-muted-foreground">{item.k}</dt>
                  <dd className="text-base font-semibold text-foreground">{item.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4, ease: systemEase, delay: 0.08 }}
            className="rounded-2xl p-8 shadow-system-card bg-accent/5 border-2 border-accent/30"
          >
            <p className="text-xs font-bold uppercase tracking-wide mb-4 text-accent">
              Vekst Systemet (2 990 kr/mnd fast)
            </p>
            <dl className="space-y-3">
              {[
                { k: "Leads per måned (etter 3 mnd)", v: "15-25" },
                { k: "Vunne jobber per måned", v: "5-8" },
                { k: "Kost per vunnet jobb", v: "400-600 kr" },
                { k: "Google-synlighet etter 6 mnd", v: "Topp 3 lokalt" },
                { k: "Google-anmeldelser", v: "25-60 nye" },
                { k: "Restverdi (nettside + SEO)", v: "Du eier alt" },
              ].map((item, j) => (
                <div key={j} className="flex items-baseline justify-between border-b border-border/60 pb-2 last:border-none">
                  <dt className="text-sm text-muted-foreground">{item.k}</dt>
                  <dd className="text-base font-semibold text-accent">{item.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
        <motion.div {...fadeInUp} className="mt-10 text-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/sammenlign/mittanbud-alternativ">
              Se full Mittanbud-sammenligning <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Calculator CTA */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-3xl">
        <motion.div
          {...fadeInUp}
          className="rounded-2xl bg-card p-10 shadow-system-card border border-border text-center"
        >
          <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Calculator className="h-6 w-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Regn ut hva Mittanbud koster deg per jobb
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ta månedskostnaden din og del på antall vunne jobber. Lander du på mer
            enn 1 500 kr per jobb, er det antagelig billigere å bygge en egen
            nettside - og eie resultatet.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/demo">
                Bestill en gratis gjennomgang <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
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
          Ofte stilte spørsmål om Mittanbud-priser
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
            <Link to="/sammenlign/mittanbud-alternativ">Full Mittanbud-sammenligning</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/priser">Se prisene våre</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link to="/kontakt">Ta kontakt <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    <CtaSection />
  </PageShell>
);

export default MittanbudPriser;
