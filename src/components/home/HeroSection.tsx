import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Send, CheckCircle2 } from "lucide-react";
import { fadeInUp, systemEase } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const HeroSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    message: ""
  });

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('webhook-proxy', {
        body: {
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          businessName: form.businessName.trim(),
          message: form.message.trim()
        }
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Aanvraag verzonden!",
        description: "We nemen zo snel mogelijk contact met je op."
      });
    } catch {
      toast({
        title: "Er ging iets mis",
        description: "Probeer het opnieuw of neem direct contact op.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-primary">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.p
              {...fadeInUp}
              className="text-xs font-bold uppercase tracking-widest text-accent mb-6">
              
              Digitale systemen voor aannemers
            </motion.p>

            <motion.h1
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold tracking-tight text-primary-foreground leading-[1.1]">
              
              Minder administratie.{" "}
              <span className="text-accent">Systemen voor Aannemers</span>
            </motion.h1>

            <motion.p
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl leading-relaxed text-primary-foreground/70 max-w-xl">
              
              Wij bouwen digitale systemen die aannemers helpen hun processen te
              automatiseren en hun bedrijf efficiënter te laten draaien.
            </motion.p>
          </div>

          {/* Right: Form */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, ease: systemEase, delay: 0.15 }}>
            
            <div className="rounded-2xl bg-card p-6 md:p-8 shadow-system-card">
              {isSubmitted ?
              <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-foreground">
                    Bedankt voor je aanvraag!
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    We nemen binnen 24 uur contact met je op.
                  </p>
                </div> :

              <>
                  <h2 className="text-lg font-semibold text-foreground mb-1">
                    Gratis adviesgesprek aanvragen
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Vul je gegevens in en we nemen snel contact op.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                      name="name"
                      placeholder="Naam *"
                      value={form.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="rounded-lg bg-secondary border-border" />
                    
                    </div>
                    <div>
                      <Input
                      name="phone"
                      type="tel"
                      placeholder="Telefoonnummer *"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      maxLength={20}
                      className="rounded-lg bg-secondary border-border" />
                    
                    </div>
                    <div>
                      <Input
                      name="email"
                      type="email"
                      placeholder="E-mailadres *"
                      value={form.email}
                      onChange={handleChange}
                      required
                      maxLength={255}
                      className="rounded-lg bg-secondary border-border" />
                    
                    </div>
                    <div>
                      <Input
                      name="businessName"
                      placeholder="Bedrijfsnaam"
                      value={form.businessName}
                      onChange={handleChange}
                      maxLength={100}
                      className="rounded-lg bg-secondary border-border" />
                    
                    </div>
                    <div>
                      <Textarea
                      name="message"
                      placeholder="Bericht (optioneel)"
                      value={form.message}
                      onChange={handleChange}
                      maxLength={1000}
                      rows={3}
                      className="rounded-lg bg-secondary border-border resize-none" />
                    
                    </div>
                    <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full rounded-lg text-base bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-250 hover:scale-[1.01] active:scale-[0.99]">
                    
                      {isSubmitting ?
                    "Verzenden..." :

                    <>
                          Verstuur aanvraag
                          <Send className="ml-2 h-4 w-4" />
                        </>
                    }
                    </Button>
                  </form>
                </>
              }
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary to-transparent" />
      </div>
    </section>);

};

export default HeroSection;