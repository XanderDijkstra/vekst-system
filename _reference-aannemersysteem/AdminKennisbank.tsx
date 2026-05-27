import { useState } from "react";
import { Link } from "react-router-dom";
import { kennisbankArticles, type KennisbankArticle } from "@/data/kennisbankArticles";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink, Pencil } from "lucide-react";

const AdminKennisbank = () => {
  const [search, setSearch] = useState("");

  const filtered = kennisbankArticles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [...new Set(kennisbankArticles.map((a) => a.category))];

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Kennisbank</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {kennisbankArticles.length} artikelen
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Zoek artikelen..."
            className="pl-9"
          />
        </div>
        <div className="flex gap-1.5">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant="secondary"
              className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setSearch(search === cat ? "" : cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* Articles table */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Titel
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3 hidden sm:table-cell">
                Categorie
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3 hidden md:table-cell">
                Leestijd
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3 hidden md:table-cell">
                Secties
              </th>
              <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">
                Acties
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((article) => (
              <tr
                key={article.slug}
                className="border-b border-border/50 hover:bg-accent/5 transition-colors"
              >
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-foreground">
                    {article.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate max-w-xs">
                    {article.description}
                  </p>
                </td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">
                  {article.readTime}
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">
                  {article.sections.length}
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      to={`/admin/kennisbank/${article.slug}`}
                      className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>
                    <a
                      href={`/kennisbank/${article.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="p-8 text-center text-sm text-muted-foreground">
            Geen artikelen gevonden.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminKennisbank;
