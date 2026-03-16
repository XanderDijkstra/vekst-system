import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Systemen", href: "/systemen" },
    { label: "Diensten", href: "/diensten" },
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
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-250 ease-system-ease"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-lg">
            <Link to="/contact">Plan een gesprek</Link>
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
        <div className="md:hidden border-t border-border bg-card px-6 pb-6 pt-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full rounded-lg">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Plan een gesprek</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
