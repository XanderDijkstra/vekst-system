import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const SITE_URL = "https://aannemersysteem.com";

const ContactPage = () => (
  <PageShell>
    <Helmet>
      <title>Contact | Aannemer Systeem</title>
      <meta name="description" content="Neem contact op met Aannemer Systeem. Stel je vraag of plan direct een gratis demo gesprek." />
      <link rel="canonical" href={`${SITE_URL}/contact`} />
      <meta property="og:title" content="Contact | Aannemer Systeem" />
      <meta property="og:description" content="Neem contact op met Aannemer Systeem. Stel je vraag of plan direct een gratis demo gesprek." />
      <meta property="og:url" content={`${SITE_URL}/contact`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="nl_NL" />
    </Helmet>
    <section className="py-20 md:py-28">
      <div className="container max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Contact</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Contact</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Heb je een vraag of wil je meer weten? Stuur ons een bericht of plan direct een demo gesprek.
        </p>

        {/* Demo CTA */}
        <div className="mt-8 rounded-2xl bg-secondary p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Liever direct een gesprek plannen?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Boek een gratis demo en ontdek wat Aannemer Systeem voor jou kan betekenen.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">
              Boek een demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <form className="mt-12 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Naam</label>
              <Input placeholder="Je naam" className="rounded-lg" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Bedrijfsnaam</label>
              <Input placeholder="Naam van je bedrijf" className="rounded-lg" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">E-mail</label>
            <Input type="email" placeholder="je@bedrijf.nl" className="rounded-lg" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Telefoon</label>
            <Input type="tel" placeholder="+31 6 12345678" className="rounded-lg" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Bericht</label>
            <Textarea placeholder="Vertel kort over je bedrijf en waar je hulp bij zoekt..." className="rounded-lg min-h-[120px]" />
          </div>
          <Button type="submit" size="lg" className="rounded-lg w-full md:w-auto">
            Verstuur bericht
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  </PageShell>
);

export default ContactPage;
