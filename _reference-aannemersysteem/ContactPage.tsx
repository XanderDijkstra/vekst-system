import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Clock, Send, CheckCircle2, Calendar } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";
import { submitToWebhook } from "@/lib/webhook";

const SITE_URL = "https://aannemersysteem.com";

const contactMethods = [
  {
    icon: Mail,
    label: "E-mail",
    value: "info@aannemersysteem.com",
    href: "mailto:info@aannemersysteem.com",
  },
  {
    icon: Phone,
    label: "Telefoon",
    value: "+31 6 12345678",
    href: "tel:+31612345678",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Direct een bericht sturen",
    href: "https://wa.me/31612345678",
  },
  {
    icon: Clock,
    label: "Reactietijd",
    value: "Binnen 24 uur op werkdagen",
    href: null,
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitToWebhook({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        businessName: form.businessName.trim(),
        message: form.message.trim(),
        source: "contact",
      });

      setIsSubmitted(true);
      toast({
        title: "Bericht verzonden!",
        description: "We nemen zo snel mogelijk contact met je op.",
      });
    } catch {
      toast({
        title: "Er ging iets mis",
        description: "Probeer het opnieuw of neem direct contact op.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell>
      <Helmet>
        <title>Contact | Aannemer Systeem</title>
        <meta name="description" content="Neem contact op met Aannemer Systeem. Stel je vraag via het formulier of plan direct een gratis demo gesprek in onze agenda." />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Contact | Aannemer Systeem" />
        <meta property="og:description" content="Neem contact op met Aannemer Systeem. Stel je vraag of plan direct een gratis demo gesprek." />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container max-w-4xl text-center">
          <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
            Contact
          </motion.p>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground">
            Laten we kennismaken
          </motion.h1>
          <motion.p {...fadeInUp} className="mt-5 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/75 leading-relaxed">
            Stel je vraag via het formulier, neem direct contact op, of plan een gesprek in onze agenda hieronder.
          </motion.p>
        </div>
      </section>

      {/* ── TEXT LEFT / FORM RIGHT ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
            {/* Left: intro + contact methods */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Stuur ons een bericht
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Vertel ons kort over je bedrijf en waar je hulp bij zoekt. We reageren binnen 24 uur op werkdagen met een persoonlijk antwoord - geen generieke verkooppraatjes.
              </p>

              <div className="mt-10 space-y-4">
                {contactMethods.map((m) => {
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 hover:border-accent/40 transition-colors">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <m.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {m.label}
                        </p>
                        <p className="mt-0.5 text-base font-medium text-foreground truncate">
                          {m.value}
                        </p>
                      </div>
                    </div>
                  );
                  return m.href ? (
                    <a key={m.label} href={m.href} className="block" target={m.href.startsWith("http") ? "_blank" : undefined} rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                      {content}
                    </a>
                  ) : (
                    <div key={m.label}>{content}</div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div {...fadeInUp} className="lg:pl-4">
              <div className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-system-card">
                {isSubmitted ? (
                  <div className="py-8 text-center">
                    <CheckCircle2 className="h-14 w-14 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground">Bedankt voor je bericht!</h3>
                    <p className="mt-2 text-muted-foreground">We nemen zo snel mogelijk contact met je op.</p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Naam</label>
                        <Input name="name" placeholder="Je naam" value={form.name} onChange={handleChange} required maxLength={100} className="rounded-lg" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Bedrijfsnaam</label>
                        <Input name="businessName" placeholder="Naam van je bedrijf" value={form.businessName} onChange={handleChange} maxLength={100} className="rounded-lg" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">E-mail</label>
                      <Input name="email" type="email" placeholder="je@bedrijf.nl" value={form.email} onChange={handleChange} required maxLength={255} className="rounded-lg" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Telefoon</label>
                      <Input name="phone" type="tel" placeholder="+31 6 12345678" value={form.phone} onChange={handleChange} required maxLength={20} className="rounded-lg" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Bericht</label>
                      <Textarea name="message" placeholder="Vertel kort over je bedrijf en waar je hulp bij zoekt..." value={form.message} onChange={handleChange} maxLength={1000} className="rounded-lg min-h-[140px]" />
                    </div>
                    <Button type="submit" size="lg" disabled={isSubmitting} className="rounded-lg w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      {isSubmitting ? "Verzenden..." : (
                        <>
                          Verstuur bericht
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CALENDAR EMBED ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container max-w-5xl">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-4 py-1.5 text-sm font-semibold">
              <Calendar className="h-4 w-4" />
              Plan direct een gesprek
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Liever direct kennismaken?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Kies een moment dat jou uitkomt. In 20 minuten laten we zien hoe het systeem werkt voor jouw vakgebied en beantwoorden we al je vragen.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="rounded-2xl bg-card shadow-system-card overflow-hidden border border-border">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/O4iI8b4WqCyve5iJiJPo"
              style={{ width: "100%", minHeight: "700px", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="O4iI8b4WqCyve5iJiJPo_contact"
              title="Boek een demo gesprek"
            />
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default ContactPage;
