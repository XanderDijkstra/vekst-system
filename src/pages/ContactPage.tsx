import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const ContactPage = () => (
  <PageShell>
    <section className="py-20 md:py-28">
      <div className="container max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Contact</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Plan een kennismaking</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Vertel ons kort over je bedrijf en we plannen een vrijblijvend gesprek om te kijken hoe we je kunnen helpen.
        </p>

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
