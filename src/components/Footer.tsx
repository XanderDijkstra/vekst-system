import { Link } from "react-router-dom";

const footerDiensten = [
  { label: "Leadgenerering", href: "/diensten/lead-generatie" },
  { label: "Kundekommunikasjon", href: "/diensten/klantcommunicatie" },
  { label: "Tilbudssystem", href: "/diensten/offerte-systeem" },
  { label: "Anmeldelsessystem", href: "/diensten/review-systeem" },
  { label: "Planleggingssystem", href: "/diensten/planning-systeem" },
  { label: "Markedsføring", href: "/diensten/marketing-automatisering" },
];

const footerServices = [
  { label: "Digitalisering", href: "/diensten/digitalisering-aannemers" },
  { label: "Automatisering", href: "/diensten/automatisering-aannemers" },
  { label: "Programvareintegrasjoner", href: "/diensten/software-integraties" },
  { label: "AI-løsninger", href: "/diensten/ai-oplossingen" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
              Vekst <span className="text-accent">Systemet</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Vi bygger det digitale fundamentet for den moderne håndverkeren.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Systemer</h4>
            <ul className="space-y-2">
              {footerDiensten.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Tjenester</h4>
            <ul className="space-y-2">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Mer</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/vakgebieden" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Fagområder
                </Link>
              </li>
              <li>
                <Link to="/vergelijk" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sammenlign
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Verktøy
                </Link>
              </li>
              <li>
                <Link to="/prijzen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Priser
                </Link>
              </li>
              <li>
                <Link to="/kennisbank" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Kunnskapsbank
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Kundecase
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Bestill demo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vekst Systemet. Alle rettigheter forbeholdt.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
