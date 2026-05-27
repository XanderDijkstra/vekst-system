import { useState } from "react";
import { Link } from "react-router-dom";
import { wikiTerms } from "@/data/wikiTerms";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink, Pencil } from "lucide-react";

const AdminWiki = () => {
  const [search, setSearch] = useState("");

  const filtered = wikiTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.slug.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [...new Set(wikiTerms.map((t) => t.category))];

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Wiki</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {wikiTerms.length} termen
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Zoek termen..."
            className="pl-9"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
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

      {/* Terms table */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Term
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3 hidden sm:table-cell">
                Categorie
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3 hidden md:table-cell">
                Secties
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3 hidden md:table-cell">
                Gerelateerd
              </th>
              <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">
                Acties
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((term) => (
              <tr
                key={term.slug}
                className="border-b border-border/50 hover:bg-accent/5 transition-colors"
              >
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-foreground">
                    {term.term}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate max-w-xs">
                    {term.shortDescription}
                  </p>
                </td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <Badge variant="secondary" className="text-xs">
                    {term.category}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">
                  {term.sections.length}
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">
                  {term.relatedTerms.length}
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      to={`/admin/wiki/${term.slug}`}
                      className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>
                    <a
                      href={`/wiki/${term.slug}`}
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
            Geen termen gevonden.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminWiki;
