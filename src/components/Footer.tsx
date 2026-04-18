import { Link } from "react-router-dom";

const footerDiensten = [
  { label: "Leadgenerering", href: "/tjenester/leadgenerering" },
  { label: "Kundekommunikasjon", href: "/tjenester/kundekommunikasjon" },
  { label: "Tilbudssystem", href: "/tjenester/tilbudssystem" },
  { label: "Anmeldelsessystem", href: "/tjenester/anmeldelsessystem" },
  { label: "Planleggingssystem", href: "/tjenester/planleggingssystem" },
  { label: "Markedsføring", href: "/tjenester/markedsforingsautomatisering" },
];

const footerServices = [
  { label: "Digitalisering", href: "/tjenester/digitalisering" },
  { label: "Automatisering", href: "/tjenester/automatisering" },
  { label: "Programvareintegrasjoner", href: "/tjenester/programvareintegrasjoner" },
  { label: "AI-løsninger", href: "/tjenester/ai-losninger" },
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
                <Link to="/fagomrader" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Fagområder
                </Link>
              </li>
              <li>
                <Link to="/sammenlign" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sammenlign
                </Link>
              </li>
              <li>
                <Link to="/verktoy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Verktøy
                </Link>
              </li>
              <li>
                <Link to="/priser" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Priser
                </Link>
              </li>
              <li>
                <Link to="/kunnskapsbank" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Kunnskapsbank
                </Link>
              </li>
              <li>
                <Link to="/kundecase" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Kundecase
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Bestill demo
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
