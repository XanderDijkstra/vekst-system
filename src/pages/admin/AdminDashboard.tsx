import { Link } from "react-router-dom";
import { Settings, Lightbulb, BookOpen, Library } from "lucide-react";
import { kennisbankArticles } from "@/data/kennisbankArticles";
import { wikiTerms } from "@/data/wikiTerms";

const cards = [
  {
    title: "Configurator",
    description: "Beheer onderdelen en prijzen",
    href: "/admin/configurator",
    icon: Settings,
  },
  {
    title: "Braindump",
    description: "Ideeën en notities vastleggen",
    href: "/admin/braindump",
    icon: Lightbulb,
  },
  {
    title: "Kennisbank",
    description: `${kennisbankArticles.length} artikelen`,
    href: "/admin/kennisbank",
    icon: BookOpen,
  },
  {
    title: "Wiki",
    description: `${wikiTerms.length} termen`,
    href: "/admin/wiki",
    icon: Library,
  },
];

const AdminDashboard = () => {
  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Welkom bij het beheerportaal van Aannemer Systeem.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            to={card.href}
            className="group rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow"
          >
            <card.icon className="h-6 w-6 text-accent mb-3" />
            <h2 className="font-semibold text-foreground group-hover:text-accent transition-colors">
              {card.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
