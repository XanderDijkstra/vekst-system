import { Check, MapPin, Phone, Star, TrendingUp } from "lucide-react";

/* ─── 0–3s — Google search with typing query and autocomplete ─── */
export const GoogleSearchScreen = ({ t }: { t: number }) => {
  const query = "rørlegger oslo";
  const typed = Math.min(query.length, Math.floor((t / 1.6) * query.length));
  const text = query.slice(0, typed);
  const caret = Math.floor(t * 2) % 2 === 0;
  const showSuggestions = t > 1.7;

  const suggestions = [
    "rørlegger oslo",
    "rørlegger oslo døgnvakt",
    "rørlegger oslo billig",
    "rørlegger oslo anmeldelser",
  ];

  return (
    <div className="absolute inset-0 pt-16 px-4" style={{ background: "#fff" }}>
      {/* Google logo */}
      <div className="mt-8 text-center">
        <div className="inline-flex text-[34px] font-medium tracking-tight tabular-nums">
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#EA4335" }}>o</span>
          <span style={{ color: "#FBBC05" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#34A853" }}>l</span>
          <span style={{ color: "#EA4335" }}>e</span>
        </div>
      </div>

      {/* Search pill */}
      <div
        className="mt-6 mx-2 rounded-full border border-gray-200 px-4 py-3 flex items-center gap-3"
        style={{ background: "#fff", boxShadow: "0 1px 6px rgba(32,33,36,0.08)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="#9AA0A6" strokeWidth="2" />
          <path d="M21 21l-4.3-4.3" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div className="flex-1 text-[15px] text-black tabular-nums">
          {text}
          <span
            className="inline-block w-[1px] h-[16px] align-middle ml-[1px]"
            style={{ background: caret ? "#202124" : "transparent" }}
          />
        </div>
      </div>

      {/* Autocomplete suggestions */}
      {showSuggestions && (
        <div className="mt-2 mx-2 rounded-2xl border border-gray-200 bg-white overflow-hidden">
          {suggestions.map((s, i) => {
            const age = t - (1.7 + i * 0.12);
            if (age < 0) return null;
            const appear = Math.min(1, age / 0.2);
            return (
              <div
                key={s}
                className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-100 last:border-b-0"
                style={{ opacity: appear }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="#9AA0A6" strokeWidth="2" />
                  <path d="M21 21l-4.3-4.3" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="text-[14px] text-[#202124]">{s}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

/* ─── 3–6.5s — Google SERP map pack with "Vekst Rør AS" climbing #3 → #1 ─── */
interface MapResult {
  name: string;
  rating: number;
  reviews: number;
  hero?: boolean;
}

export const SearchResultsScreen = ({ t }: { t: number }) => {
  const local = t - 3;
  // Start rankings: Bakke #1, Hendrik #2, Vekst #3
  // End rankings:   Vekst  #1, Bakke   #2, Hendrik #3
  // Animate between local=0.6 and local=2.0
  const animStart = 0.6;
  const animEnd = 2.0;
  const p = Math.min(1, Math.max(0, (local - animStart) / (animEnd - animStart)));

  // Positions 0..2 for each result (0 = top). Animate from start → end.
  const vekstPos = 2 + (0 - 2) * p;
  const bakkePos = 0 + (1 - 0) * p;
  const hendrikPos = 1 + (2 - 1) * p;

  const results: (MapResult & { pos: number })[] = [
    { name: "Vekst Rør AS", rating: 4.9, reviews: 127, hero: true, pos: vekstPos },
    { name: "Bakke Installasjon", rating: 4.6, reviews: 84, pos: bakkePos },
    { name: "Hendrik Sanitær", rating: 4.3, reviews: 62, pos: hendrikPos },
  ];

  const rowH = 78;

  return (
    <div className="absolute inset-0 pt-14" style={{ background: "#fff" }}>
      {/* Google header bar */}
      <div className="px-4 pt-2 pb-3 border-b border-gray-200">
        <div
          className="rounded-full border border-gray-200 px-4 py-2 flex items-center gap-3"
          style={{ background: "#fff", boxShadow: "0 1px 6px rgba(32,33,36,0.06)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#9AA0A6" strokeWidth="2" />
            <path d="M21 21l-4.3-4.3" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div className="text-[13px] text-[#202124]">rørlegger oslo</div>
        </div>
        <div className="flex gap-2 mt-3 text-[12px]">
          {["Alle", "Kart", "Bilder", "Nyheter"].map((tab, i) => (
            <div
              key={tab}
              className={`px-3 py-1 rounded-full ${
                i === 1 ? "bg-[#E8F0FE] text-[#1A73E8]" : "text-[#5F6368]"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div
        className="mx-4 mt-3 rounded-xl h-[90px] relative overflow-hidden"
        style={{ background: "#E8EEF4" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Pins */}
        <div className="absolute top-5 left-10">
          <MapPin className="w-5 h-5 text-[#F59E0B]" fill="#F59E0B" />
        </div>
        <div className="absolute top-10 left-24">
          <MapPin className="w-4 h-4 text-gray-500" fill="#9CA3AF" />
        </div>
        <div className="absolute top-6 right-12">
          <MapPin className="w-4 h-4 text-gray-500" fill="#9CA3AF" />
        </div>
        <div className="absolute bottom-1 right-2 text-[10px] text-gray-500">
          Oslo
        </div>
      </div>

      {/* Map-pack label */}
      <div className="px-4 mt-3 mb-2 text-[11px] uppercase tracking-wider text-gray-500">
        Bedrifter i nærheten
      </div>

      {/* Results list (animated positions) */}
      <div className="relative mx-4" style={{ height: rowH * 3 }}>
        {results.map((r) => (
          <div
            key={r.name}
            className={`absolute left-0 right-0 rounded-xl border p-3 flex items-center gap-3 ${
              r.hero ? "border-[#F59E0B] bg-[#FFFBEB]" : "border-gray-200 bg-white"
            }`}
            style={{
              top: r.pos * rowH,
              transition: "top 700ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-[13px] flex-shrink-0"
              style={{ background: r.hero ? "#F59E0B" : "#9CA3AF" }}
            >
              #{Math.round(r.pos) + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-black truncate">{r.name}</div>
              <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-0.5">
                <span className="text-[#F59E0B] font-semibold">{r.rating.toFixed(1)}</span>
                <Star className="w-3 h-3 text-[#F59E0B]" fill="#F59E0B" />
                <span>· {r.reviews} anmeldelser</span>
              </div>
            </div>
            {r.hero && p > 0.5 && (
              <TrendingUp className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── 6.5–9.2s — Expanded business profile with #1 badge ─── */
export const BusinessProfileScreen = ({ t }: { t: number }) => {
  const local = t - 6.5;
  const badgeIn = Math.min(1, Math.max(0, (local - 0.3) / 0.35));
  return (
    <div className="absolute inset-0 pt-14" style={{ background: "#fff" }}>
      {/* Hero block */}
      <div
        className="px-4 pt-4 pb-4"
        style={{
          background: "linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-[16px]">VR</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[16px] font-bold text-black leading-tight">
              Vekst Rør AS
            </div>
            <div className="text-[12px] text-gray-500 mt-0.5">
              Rørleggerfirma · Oslo
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[13px] font-semibold text-black">4,9</span>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 text-[#F59E0B]" fill="#F59E0B" />
              ))}
              <span className="text-[11px] text-gray-500 ml-1">(127)</span>
            </div>
          </div>
        </div>

        {/* Topposisjon badge */}
        <div
          className="mt-4 rounded-xl border-2 border-[#F59E0B] bg-white px-3 py-2 flex items-center gap-2"
          style={{
            opacity: badgeIn,
            transform: `scale(${0.94 + badgeIn * 0.06})`,
            transition: "transform 200ms ease-out",
          }}
        >
          <div className="w-7 h-7 rounded-full bg-[#F59E0B] flex items-center justify-center">
            <span className="text-white font-bold text-[12px]">#1</span>
          </div>
          <div className="flex-1">
            <div className="text-[12px] font-semibold text-black leading-tight">
              Topposisjon i din region
            </div>
            <div className="text-[10px] text-gray-500 leading-tight mt-0.5">
              For søket «rørlegger oslo»
            </div>
          </div>
          <TrendingUp className="w-4 h-4 text-[#F59E0B]" />
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-4 mt-3 grid grid-cols-3 gap-2">
        {[
          { label: "Ring", icon: Phone },
          { label: "Rute", icon: MapPin },
          { label: "Nettsted", icon: null },
        ].map((b) => (
          <div
            key={b.label}
            className="rounded-lg border border-gray-200 py-2 flex flex-col items-center justify-center gap-1"
          >
            {b.icon ? (
              <b.icon className="w-4 h-4 text-[#F59E0B]" />
            ) : (
              <div className="w-4 h-4 rounded-sm bg-[#F59E0B]" />
            )}
            <div className="text-[10px] font-semibold text-black">{b.label}</div>
          </div>
        ))}
      </div>

      {/* Info rows */}
      <div className="px-4 mt-3 space-y-2">
        {[
          { k: "Åpent nå", v: "Stenger kl 17:00" },
          { k: "Adresse", v: "Storgata 14, 0184 Oslo" },
          { k: "Telefon", v: "+47 22 10 40 50" },
        ].map((row) => (
          <div key={row.k} className="flex items-center justify-between text-[12px]">
            <span className="text-gray-500">{row.k}</span>
            <span className="text-black font-medium">{row.v}</span>
          </div>
        ))}
      </div>

      {/* Latest review */}
      <div className="mx-4 mt-3 rounded-xl border border-gray-200 p-3">
        <div className="flex items-center gap-1 mb-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-3 h-3 text-[#F59E0B]" fill="#F59E0B" />
          ))}
          <span className="text-[11px] text-gray-500 ml-1">· 2 dager siden</span>
        </div>
        <div className="text-[12px] text-black leading-snug">
          «Raske, ryddige og dyktige. Fikset lekkasjen samme dag.»
        </div>
      </div>
    </div>
  );
};

/* ─── 9.2–11s — SEO results: headline + 3 stat rows ─── */
export const SeoResultsScreen = ({ t }: { t: number }) => {
  const local = t - 9.2;
  const scale = Math.min(1, local / 0.35);
  return (
    <div
      className="absolute inset-0 pt-20 px-6 flex flex-col items-center"
      style={{ background: "#fff" }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          background: "#10B981",
          transform: `scale(${scale})`,
          transition: "transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <Check className="w-9 h-9 text-white" strokeWidth={3} />
      </div>
      <div className="mt-5 text-[22px] font-bold text-black text-center">
        Din lokale SEO virker
      </div>
      <div className="mt-1 text-[13px] text-gray-500 text-center">
        Kundene finner deg først - ikke konkurrenten.
      </div>

      <div className="mt-6 w-full space-y-2">
        {[
          { label: "Posisjon", value: "#1", sub: "opp fra #3" },
          { label: "Anmeldelser", value: "127", sub: "4,9 ★ snitt" },
          { label: "Nye henvendelser", value: "+38 %", sub: "siste 30 dager", hero: true },
        ].map((s) => (
          <div
            key={s.label}
            className={`rounded-2xl p-3 flex items-center justify-between border ${
              s.hero ? "border-[#F59E0B] bg-[#FFFBEB]" : "border-gray-200 bg-white"
            }`}
          >
            <div>
              <div className="text-[11px] uppercase tracking-wider text-gray-500">
                {s.label}
              </div>
              <div className="text-[10px] text-gray-400 mt-0.5">{s.sub}</div>
            </div>
            <div className="flex items-center gap-1.5">
              <div
                className={`text-[20px] font-bold tabular-nums ${
                  s.hero ? "text-[#F59E0B]" : "text-black"
                }`}
              >
                {s.value}
              </div>
              {s.hero && <TrendingUp className="w-4 h-4 text-[#F59E0B]" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
