import { Link } from "react-router-dom";

const footerDiensten = [
  { label: "Lead Generatie", href: "/diensten/lead-generatie" },
  { label: "Klantcommunicatie", href: "/diensten/klantcommunicatie" },
  { label: "Offerte Systeem", href: "/diensten/offerte-systeem" },
  { label: "Review Systeem", href: "/diensten/review-systeem" },
  { label: "Planning Systeem", href: "/diensten/planning-systeem" },
  { label: "Marketing", href: "/diensten/marketing-automatisering" },
];

const footerServices = [
  { label: "Digitalisering", href: "/diensten/digitalisering-bouwbedrijf" },
  { label: "Automatisering", href: "/diensten/automatisering-bouwbedrijf" },
  { label: "Software Integraties", href: "/diensten/software-integraties" },
  { label: "AI Oplossingen", href: "/diensten/ai-oplossingen" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
              Aannemer <span className="text-accent">Systeem</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Wij bouwen het digitale fundament voor de moderne aannemer.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Systemen</h4>
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
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Services</h4>
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
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Boek een demo
                </Link>
              </li>
              <li>
                <Link to="/kennisbank" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Kennisbank
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/vakgebieden" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Vakgebieden
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Groei Systeem. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
