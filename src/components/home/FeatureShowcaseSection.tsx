import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, systemEase } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import functioneleWebsiteImg from "@/assets/showcases/functionele-website.webp";
import gemisteOproepImg from "@/assets/gemiste-oproep.webp";

/* ───── Feature showcase data ───── */
interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureShowcase {
  title: string;
  subtitle: string;
  features: FeatureItem[];
  demoLink: string;
  imagePosition: "left" | "right";
  image?: string;
}

const showcases: FeatureShowcase[] = [
  {
    title: "Functionele Website",
    subtitle:
      "Krijg een website die leads direct omzet in gesprekken via SMS — rechtstreeks naar je telefoon.",
    features: [
      {
        title: "Gevonden worden online",
        description:
          "Als een klant je bedrijf googelt en je niet kan vinden, is dat een gemiste kans. Wij zorgen dat dat niet gebeurt.",
      },
      {
        title: "Je beste reviews tonen",
        description:
          "We hebben allemaal wel eens een mindere review. Dat betekent niet dat je klanten die als eerste moeten zien.",
      },
      {
        title: "Mobielvriendelijk",
        description:
          "87% van mensen bezoekt websites op hun telefoon. Wij zorgen dat jouw bedrijf er ook op mobiel perfect uitziet.",
      },
      {
        title: "Geoptimaliseerd voor lokale Google zoekopdrachten",
        description:
          "Het spreekt voor zich, maar we zeggen het toch: wij zorgen dat je bedrijf gevonden wordt op Google.",
      },
    ],
    demoLink: "/diensten/lead-generatie",
    imagePosition: "left",
    image: functioneleWebsiteImg,
  },
  {
    title: "5-Sterren Review Funnel",
    subtitle:
      "\"Ja, ik laat wel een review achter\" — maar de waarheid is dat mensen het vergeten. Wij herinneren ze er vriendelijk aan.",
    features: [
      {
        title: "Alleen 5-sterren reviews",
        description:
          "Je kunt niet iedereen tevreden stellen, maar onze funnel zorgt dat alleen de beste beoordelingen publiek worden.",
      },
      {
        title: "Automatische follow-up herinneringen",
        description:
          "Klanten vergeten reviews achter te laten. Wij sturen vriendelijke herinneringen over een aantal weken.",
      },
      {
        title: "Reviews vragen in één klik",
        description:
          "Zoals beloofd: we houden het simpel. Naam en nummer invullen, klik op verzenden, klaar.",
      },
      {
        title: "Geen zorgen over slechte reviews",
        description:
          "Twijfel je of je om een review moet vragen? Wij nemen het gokwerk weg en begeleiden je klant naar 5 sterren.",
      },
    ],
    demoLink: "/diensten/review-funnel",
    imagePosition: "right",
  },
  {
    title: "Gemiste Oproep → SMS Bericht",
    subtitle:
      "Iedereen mist weleens een telefoontje, maar niet iedereen stuurt een sms terug. Wees degene die dat wél doet.",
    features: [
      {
        title: "Val op tussen je concurrenten",
        description:
          "Iedereen mist oproepen, maar niet iedereen stuurt een sms terug. Doe het wel en onderscheid je van de rest.",
      },
      {
        title: "Nooit meer leads verliezen",
        description:
          "Op de werf en kun je niet opnemen? Geen probleem — wij sturen een sms en starten het gesprek voor je.",
      },
      {
        title: "Laat zien dat je om je klanten geeft",
        description:
          "Je klanten willen zich gehoord voelen. Een snelle sms laat zien dat je hun oproep serieus neemt.",
      },
      {
        title: "24/7 bereikbaar",
        description:
          "Gemiste oproep na werktijd? Geen zorgen — wij zorgen dat iedereen zich gehoord voelt, ook terwijl jij slaapt.",
      },
    ],
    demoLink: "/diensten/klantcommunicatie",
    imagePosition: "left",
  },
  {
    title: "One-Click Marketing Campagnes",
    subtitle:
      "Je weet het en wij weten het — terugkerende klanten en verwijzingen zijn het allerbeste. Laten we je allebei bezorgen.",
    features: [
      {
        title: "Wij doen het voor je",
        description:
          "Simpel: activeer onze kant-en-klare marketing campagnes met één klik.",
      },
      {
        title: "Verwijzingscampagnes",
        description:
          "Je levert goed werk en je klanten waarderen dat. Laten we ze eraan herinneren om het aan hun vrienden te vertellen.",
      },
      {
        title: "Terugkerende klant campagnes",
        description:
          "Loyale klanten zijn de sleutel. Wij zorgen dat ze zich gewaardeerd voelen met speciale aanbiedingen.",
      },
      {
        title: "Marketing op je vingertoppen",
        description:
          "Klik op een knop en wij regelen de rest. Geen marketingteam nodig.",
      },
    ],
    demoLink: "/diensten/marketing-campagnes",
    imagePosition: "right",
  },
  {
    title: "Automatische SMS Lead Follow-Up",
    subtitle:
      "Elke lead — via je website, chat, telefoon of social media — wordt automatisch opgevolgd. Geen lead valt meer tussen wal en schip.",
    features: [
      {
        title: "Website offerte formulieren",
        description:
          "Klant vult je formulier in? Wij sturen automatisch een sms om het verzoek te bevestigen en het gesprek te starten.",
      },
      {
        title: "Chat widget",
        description:
          "Klant gebruikt je chat widget? Wij bevestigen via sms dat het verzoek is ontvangen en jij krijgt direct een melding.",
      },
      {
        title: "Gemiste oproep sms",
        description:
          "Kun je niet opnemen? Wij sturen automatisch een sms zodat de klant weet dat je terugkomt.",
      },
      {
        title: "Instagram & Facebook auto responder",
        description:
          "Bericht via social media? Wij reageren automatisch zodat de klant weet dat je zo snel mogelijk terugkomt.",
      },
    ],
    demoLink: "/diensten/lead-follow-up",
    imagePosition: "left",
  },
  {
    title: "Alles-in-Één Inbox",
    subtitle:
      "Stop met schakelen tussen 4 apps. Al je berichten — Facebook, Instagram, SMS en e-mail — op één plek.",
    features: [
      {
        title: "4-in-1 unified inbox",
        description:
          "Bundel al je communicatiekanalen in één overzichtelijke inbox. Nooit meer een bericht missen.",
      },
      {
        title: "Sneller reageren",
        description:
          "Geen tabbladen meer wisselen. Reageer sneller en verlies geen klanten aan de concurrent.",
      },
      {
        title: "Niets meer missen",
        description:
          "Elke aanvraag — ongeacht het kanaal — wordt automatisch op één plek verzameld.",
      },
      {
        title: "Alle kanalen gekoppeld",
        description:
          "Koppel al je kanalen in enkele minuten. Geen technische kennis nodig.",
      },
    ],
    demoLink: "/diensten/all-in-one-inbox",
    imagePosition: "right",
  },
  {
    title: "Lokale SEO",
    subtitle:
      "\"Nummer 1 op Google binnen een week!\" — Grapje, SEO kost tijd... maar het is het waard.",
    features: [
      {
        title: "Gekwalificeerde leads",
        description:
          "Klinkt beter dan €50 betalen voor een lead die niet eens opneemt, toch?",
      },
      {
        title: "Stop met betalen voor ongekwalificeerde leads",
        description:
          "Zoals je moeder altijd zei: kwaliteit boven kwantiteit. Zijn we het met haar eens? Absoluut.",
      },
      {
        title: "Organisch acquisitiesysteem",
        description:
          "Genereer je eigen gekwalificeerde leads in plaats van te betalen voor bandenkijkers.",
      },
    ],
    demoLink: "/diensten/lead-generatie",
    imagePosition: "left",
  },
];

const FeatureShowcaseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center max-w-3xl mx-auto"
        >
          Simpele systemen die écht werken
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-xl mx-auto leading-relaxed"
        >
          Geen diploma nodig, gewoon een harde helm.
        </motion.p>

        <div className="mt-20 space-y-28">
          {showcases.map((showcase, idx) => (
            <motion.div
              key={showcase.title}
              {...fadeInUp}
              transition={{ duration: 0.4, ease: systemEase, delay: 0.05 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                showcase.imagePosition === "right" ? "lg:direction-normal" : ""
              }`}
            >
              {/* Image / placeholder */}
              <div
                className={`${
                  showcase.imagePosition === "right" ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="rounded-2xl bg-muted/50 border border-border flex items-center justify-center overflow-hidden">
                  {showcase.image ? (
                    <img
                      src={showcase.image}
                      alt={showcase.title}
                      className="w-full h-auto object-contain"
                    />
                  ) : (
                    <div className="aspect-[4/3] w-full flex items-center justify-center text-center p-8">
                      <div>
                        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-accent">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">
                          Demo video binnenkort beschikbaar
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div
                className={`${
                  showcase.imagePosition === "right" ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  {showcase.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed italic">
                  {showcase.subtitle}
                </p>

                <div className="mt-8 space-y-5">
                  {showcase.features.map((feature) => (
                    <div key={feature.title} className="flex gap-3">
                      <CheckCircle2
                        className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <div>
                        <h4 className="font-semibold text-accent text-sm">
                          {feature.title}
                        </h4>
                        <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link to={showcase.demoLink}>
                    Bekijk korte demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcaseSection;
