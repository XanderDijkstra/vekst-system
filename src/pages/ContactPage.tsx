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

const SITE_URL = "https://vekst-systemet.no";

const contactMethods = [
  {
    icon: Mail,
    label: "E-post",
    value: "info@vekst-systemet.no",
    href: "mailto:info@vekst-systemet.no",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+47 401 85 596",
    href: "tel:+4740185596",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Send en melding direkte",
    href: "https://wa.me/4740185596",
  },
  {
    icon: Clock,
    label: "Responstid",
    value: "Innen 24 timer på hverdager",
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
        title: "Melding sendt!",
        description: "Vi tar kontakt med deg så raskt som mulig.",
      });
    } catch {
      toast({
        title: "Noe gikk galt",
        description: "Prøv igjen eller ta kontakt direkte.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell>
      <Helmet>
        <title>Kontakt | Vekst Systemet</title>
        <meta name="description" content="Ta kontakt med Vekst Systemet. Still spørsmålet ditt via skjemaet eller bestill en gratis demo direkte i kalenderen vår." />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Kontakt | Vekst Systemet" />
        <meta property="og:description" content="Ta kontakt med Vekst Systemet. Still spørsmålet ditt eller bestill en gratis demo." />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container max-w-4xl text-center">
          <motion.p {...fadeInUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
            Kontakt
          </motion.p>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground">
            La oss bli kjent
          </motion.h1>
          <motion.p {...fadeInUp} className="mt-5 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/75 leading-relaxed">
            Still spørsmålet ditt via skjemaet, ta direkte kontakt eller bestill en samtale i kalenderen nedenfor.
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
                Send oss en melding
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Fortell oss kort om bedriften din og hva du trenger hjelp med. Vi svarer innen 24 timer på hverdager med et personlig svar - ingen generiske salgspitcher.
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
                    <h3 className="text-xl font-semibold text-foreground">Takk for meldingen!</h3>
                    <p className="mt-2 text-muted-foreground">Vi tar kontakt med deg så raskt som mulig.</p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Navn</label>
                        <Input name="name" placeholder="Navnet ditt" value={form.name} onChange={handleChange} required maxLength={100} className="rounded-lg" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Firmanavn</label>
                        <Input name="businessName" placeholder="Navnet på firmaet ditt" value={form.businessName} onChange={handleChange} maxLength={100} className="rounded-lg" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">E-post</label>
                      <Input name="email" type="email" placeholder="deg@firma.no" value={form.email} onChange={handleChange} required maxLength={255} className="rounded-lg" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Telefon</label>
                      <Input name="phone" type="tel" placeholder="+47 401 85 596" value={form.phone} onChange={handleChange} required maxLength={20} className="rounded-lg" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Melding</label>
                      <Textarea name="message" placeholder="Fortell kort om bedriften din og hva du trenger hjelp med…" value={form.message} onChange={handleChange} maxLength={1000} className="rounded-lg min-h-[140px]" />
                    </div>
                    <Button type="submit" size="lg" disabled={isSubmitting} className="rounded-lg w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      {isSubmitting ? "Sender…" : (
                        <>
                          Send melding
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
              Bestill en samtale direkte
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Vil du heller møtes med en gang?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Velg et tidspunkt som passer deg. På 20 minutter viser vi hvordan systemet fungerer for ditt fagområde og svarer på alle spørsmålene dine.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="rounded-2xl bg-card shadow-system-card overflow-hidden border border-border">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/O4iI8b4WqCyve5iJiJPo"
              style={{ width: "100%", minHeight: "700px", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="O4iI8b4WqCyve5iJiJPo_contact"
              title="Bestill en demo-samtale"
            />
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default ContactPage;
