import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, systemEase } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import functioneleWebsiteImg from "@/assets/showcases/functionele-website.webp";
import reviewFunnelImg from "@/assets/showcases/review-funnel.webp";
import gemisteOproepImg from "@/assets/gemiste-oproep.webp";
import marketingCampagnesImg from "@/assets/showcases/marketing-campagnes.webp";

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
    title: "Funksjonell nettside",
    subtitle:
      "Få en nettside som gjør leads om til samtaler direkte via SMS - rett på telefonen din.",
    features: [
      {
        title: "Bli funnet på nett",
        description:
          "Hvis en kunde googler firmaet ditt og ikke finner deg, er det en tapt mulighet. Det sørger vi for at ikke skjer.",
      },
      {
        title: "Vis frem de beste anmeldelsene dine",
        description:
          "Vi får alle en mindre god anmeldelse av og til. Det betyr ikke at kundene dine skal se den først.",
      },
      {
        title: "Mobilvennlig",
        description:
          "87 % besøker nettsider fra mobilen. Vi sørger for at firmaet ditt ser perfekt ut også på mobil.",
      },
      {
        title: "Optimalisert for lokale Google-søk",
        description:
          "Det sier seg selv, men vi sier det likevel: vi sørger for at firmaet ditt blir funnet på Google.",
      },
    ],
    demoLink: "/tjenester/leadgenerering",
    imagePosition: "left",
    image: functioneleWebsiteImg,
  },
  {
    title: "5-stjerners anmeldelsesfunnel",
    subtitle:
      "\"Ja, jeg skal gi en anmeldelse\" - men sannheten er at folk glemmer det. Vi minner dem vennlig på.",
    features: [
      {
        title: "Kun 5-stjerners anmeldelser",
        description:
          "Du kan ikke gjøre alle fornøyde, men funnelen vår sørger for at bare de beste vurderingene blir offentlige.",
      },
      {
        title: "Automatiske påminnelser",
        description:
          "Kunder glemmer å gi anmeldelser. Vi sender vennlige påminnelser over flere uker.",
      },
      {
        title: "Be om anmeldelser med ett klikk",
        description:
          "Som lovet: vi holder det enkelt. Skriv inn navn og nummer, klikk send, ferdig.",
      },
      {
        title: "Slipp bekymringer for dårlige anmeldelser",
        description:
          "Er du i tvil om du skal be om en anmeldelse? Vi tar bort gjettingen og leder kunden trygt mot 5 stjerner.",
      },
    ],
    demoLink: "/tjenester/anmeldelsesfunnel",
    imagePosition: "right",
    image: reviewFunnelImg,
  },
  {
    title: "Tapt anrop → SMS-melding",
    subtitle:
      "Alle mister en telefon iblant, men ikke alle sender en SMS tilbake. Vær den som gjør det.",
    features: [
      {
        title: "Skill deg ut fra konkurrentene",
        description:
          "Alle mister anrop, men ikke alle sender en SMS tilbake. Gjør det, så skiller du deg ut.",
      },
      {
        title: "Aldri mer tapte leads",
        description:
          "På byggeplassen og kan ikke ta telefonen? Ikke noe problem - vi sender en SMS og starter samtalen for deg.",
      },
      {
        title: "Vis at du bryr deg om kundene dine",
        description:
          "Kundene dine vil føle seg sett. En rask SMS viser at du tar anropet deres på alvor.",
      },
      {
        title: "Tilgjengelig 24/7",
        description:
          "Tapt anrop etter arbeidstid? Ingen bekymring - vi sørger for at alle føler seg sett, også mens du sover.",
      },
    ],
    demoLink: "/tjenester/kundekommunikasjon",
    imagePosition: "left",
    image: gemisteOproepImg,
  },
  {
    title: "One-Click markedsføringskampanjer",
    subtitle:
      "Du vet det og vi vet det - gjenkjøp og anbefalinger er det aller beste. La oss skaffe deg begge deler.",
    features: [
      {
        title: "Vi gjør det for deg",
        description:
          "Enkelt: aktiver de ferdige markedsføringskampanjene våre med ett klikk.",
      },
      {
        title: "Anbefalingskampanjer",
        description:
          "Du leverer godt arbeid og kundene setter pris på det. La oss minne dem om å fortelle det videre til vennene sine.",
      },
      {
        title: "Gjenkjøpskampanjer",
        description:
          "Lojale kunder er nøkkelen. Vi sørger for at de føler seg verdsatt med spesielle tilbud.",
      },
      {
        title: "Markedsføring på fingertuppene",
        description:
          "Trykk på en knapp, så ordner vi resten. Du trenger ikke et markedsføringsteam.",
      },
    ],
    demoLink: "/tjenester/markedsforingskampanjer",
    imagePosition: "right",
    image: marketingCampagnesImg,
  },
  {
    title: "Lokal SEO",
    subtitle:
      "\"Nummer 1 på Google på en uke!\" - Spøk til side, SEO tar tid… men det er verdt det.",
    features: [
      {
        title: "Kvalifiserte leads",
        description:
          "Høres bedre ut enn å betale 500 kr for en lead som ikke engang tar telefonen, ikke sant?",
      },
      {
        title: "Slutt å betale for ukvalifiserte leads",
        description:
          "Som mor alltid sa: kvalitet fremfor kvantitet. Er vi enige med henne? Absolutt.",
      },
      {
        title: "Organisk leadsystem",
        description:
          "Generer dine egne kvalifiserte leads i stedet for å betale for nysgjerrige som bare kikker.",
      },
    ],
    demoLink: "/tjenester/leadgenerering",
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
          Enkle systemer som faktisk virker
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="mt-4 text-lg text-muted-foreground text-center max-w-xl mx-auto leading-relaxed"
        >
          Ingen utdannelse kreves, bare en hjelm.
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
                          Demovideo kommer snart
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
                    Se kort demo
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
