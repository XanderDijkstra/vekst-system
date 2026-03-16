import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
              Groei <span className="text-accent">Systeem</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Wij bouwen het digitale fundament voor de moderne aannemer.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Systemen</h4>
            <ul className="space-y-2">
              {["Lead Generatie", "Klantcommunicatie", "Offerte Systeem", "Review Systeem", "Planning Systeem"].map((s) => (
                <li key={s}>
                  <Link to={`/systemen/${s.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Diensten</h4>
            <ul className="space-y-2">
              {["Digitalisering", "Automatisering", "Software Integraties", "AI Oplossingen"].map((s) => (
                <li key={s}>
                  <Link to={`/diensten/${s.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Plan een gesprek
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
