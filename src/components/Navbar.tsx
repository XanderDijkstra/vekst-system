import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, PhoneOff, FileText, Star, BarChart3, Calendar, Settings, Zap, Plug, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const dienstenColumns = [
  {
    heading: "Systemen",
    items: [
      { icon: Globe, label: "Lead Generatie Website", href: "/diensten/lead-generatie", desc: "Website die klanten aantrekt" },
      { icon: PhoneOff, label: "Gemiste Oproep → SMS", href: "/diensten/klantcommunicatie", desc: "Automatisch bericht bij gemiste oproep" },
      { icon: FileText, label: "Offerte Automatisering", href: "/diensten/offerte-systeem", desc: "Sneller offertes, automatisch opvolgen" },
      { icon: Star, label: "Review Systeem", href: "/diensten/review-systeem", desc: "Automatisch Google reviews verzamelen" },
      { icon: BarChart3, label: "Marketing Automatisering", href: "/diensten/marketing-automatisering", desc: "Bereik klanten op het juiste moment" },
      { icon: Calendar, label: "Planning Systeem", href: "/diensten/planning-systeem", desc: "Centrale planning voor je projecten" },
    ],
  },
  {
    heading: "Services",
    items: [
      { icon: Settings, label: "Digitalisering", href: "/diensten/digitalisering-bouwbedrijf", desc: "Van papier naar digitaal" },
      { icon: Zap, label: "Automatisering", href: "/diensten/automatisering-bouwbedrijf", desc: "Repetitieve taken automatiseren" },
      { icon: Plug, label: "Software Integraties", href: "/diensten/software-integraties", desc: "Tools aan elkaar koppelen" },
      { icon: Bot, label: "AI Oplossingen", href: "/diensten/ai-oplossingen", desc: "Slimmer werken met AI" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const navLinks = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
          Groei <span className="text-accent">Systeem</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {/* Diensten dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to="/diensten"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-250 ease-system-ease flex items-center gap-1"
            >
              Diensten
              <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-card rounded-2xl shadow-system-card-hover border border-border p-6 grid grid-cols-2 gap-8 min-w-[560px]">
                  {dienstenColumns.map((col) => (
                    <div key={col.heading}>
                      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                        {col.heading}
                      </p>
                      <div className="space-y-1">
                        {col.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="group flex items-start gap-3 rounded-lg p-2.5 -mx-2.5 hover:bg-muted/50 transition-colors"
                          >
                            <item.icon className="h-4 w-4 mt-0.5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" strokeWidth={1.5} />
                            <div>
                              <span className="text-sm font-medium text-foreground">{item.label}</span>
                              <p className="text-xs text-muted-foreground leading-snug">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-250 ease-system-ease"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-lg">
            <Link to="/demo">Boek een demo</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-6 pb-6 pt-4 space-y-4 max-h-[80vh] overflow-y-auto">
          {dienstenColumns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">{col.heading}</p>
              {col.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center gap-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon className="h-4 w-4" strokeWidth={1.5} />
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="pt-2 border-t border-border space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button asChild className="w-full rounded-lg">
            <Link to="/demo" onClick={() => setMobileOpen(false)}>Boek een demo</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
