import { Users, Send, Check, Sparkles, TrendingUp } from "lucide-react";

/* ─── 0–3s — Admin UI: campaign launch with press animation ─── */
export const CampaignLaunchScreen = ({ t }: { t: number }) => {
  const press = t > 2.2 && t < 2.7 ? 0.97 : 1;
  return (
    <div className="absolute inset-0 pt-16 px-4" style={{ background: "#F6F6F6" }}>
      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#F59E0B] mt-3">
        Vekst-kampanjer
      </div>
      <div className="text-[22px] font-bold text-black mt-1">Gjenoppliv gamle leads</div>
      <div className="text-[13px] text-gray-500 mt-1">
        Send SMS til alle forespørsler du ikke vant det siste året.
      </div>

      <div className="mt-5 bg-white rounded-2xl p-4 border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 flex items-center justify-center">
            <Users className="w-5 h-5 text-[#F59E0B]" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-gray-500">
              Mottakere
            </div>
            <div className="text-[18px] font-bold text-black tabular-nums">247 kunder</div>
          </div>
        </div>
      </div>

      <div className="mt-3 bg-white rounded-2xl p-4 border border-gray-200">
        <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-2">
          SMS-forhåndsvisning
        </div>
        <div className="rounded-xl bg-[#F3F4F6] p-3 text-[14px] leading-snug text-black">
          Hei! Vi kjører en kampanje nå - spør oss om nytt tilbud på jobben din og få
          15 % rabatt de første 10 som svarer. Svar JA for å høre mer.
        </div>
      </div>

      <button
        className="mt-4 w-full rounded-2xl py-4 text-white font-semibold text-[17px] flex items-center justify-center gap-2"
        style={{
          background: "#F59E0B",
          transform: `scale(${press})`,
          transition: "transform 120ms ease-out",
        }}
      >
        <Send className="w-4 h-4" />
        Send kampanje
      </button>
    </div>
  );
};

/* ─── 3–5.5s — Sending progress ─── */
export const SendingProgressScreen = ({ t }: { t: number }) => {
  const local = t - 3;
  const dur = 2.5;
  const progress = Math.min(1, local / dur);
  const sent = Math.floor(progress * 247);
  const circ = 2 * Math.PI * 52;
  return (
    <div
      className="absolute inset-0 pt-24 px-6 flex flex-col items-center"
      style={{ background: "#F6F6F6" }}
    >
      <div className="text-[11px] uppercase tracking-wider text-[#F59E0B]">Sender...</div>
      <div className="mt-6 relative">
        <svg width="140" height="140" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#E5E7EB" strokeWidth="8" />
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={circ * (1 - progress)}
            transform="rotate(-90 60 60)"
            style={{ transition: "stroke-dashoffset 120ms linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-[36px] font-bold text-black tabular-nums">{sent}</div>
          <div className="text-[12px] text-gray-500">av 247</div>
        </div>
      </div>
      <div className="mt-8 text-[14px] text-gray-600 text-center max-w-[260px] leading-relaxed">
        Kampanjen er under levering. Svar kommer direkte inn i innboksen din.
      </div>
    </div>
  );
};

/* ─── 5.5–9s — Incoming responses ─── */
interface Response {
  name: string;
  text: string;
  showAt: number;
  accent: boolean;
}
const RESPONSES: Response[] = [
  { name: "Jan Olsen", text: "Ja, send mer info!", showAt: 5.6, accent: true },
  { name: "Sanne Berg", text: "Kan jeg få et tilbud?", showAt: 6.4, accent: true },
  { name: "Peter Bakke", text: "Interessant, ring meg", showAt: 7.2, accent: true },
  { name: "Lisa Hendrik", text: "Har allerede valgt noen, takk", showAt: 8.0, accent: false },
];

export const IncomingResponsesScreen = ({ t }: { t: number }) => {
  return (
    <div className="absolute inset-0 pt-16 px-4" style={{ background: "#F6F6F6" }}>
      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#F59E0B] mt-3">
        Innkommende svar
      </div>
      <div className="text-[22px] font-bold text-black mt-1">Kampanjen leverer</div>
      <div className="text-[13px] text-gray-500 mt-1">Direkte i innboksen din.</div>

      <div className="mt-4 space-y-2">
        {RESPONSES.map((r, i) => {
          if (t < r.showAt) return null;
          const age = t - r.showAt;
          const appear = Math.min(1, age / 0.3);
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-3 border border-gray-200 flex items-start gap-3"
              style={{
                opacity: appear,
                transform: `translateX(${(1 - appear) * 20}px)`,
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm"
                style={{ background: r.accent ? "#F59E0B" : "#9CA3AF" }}
              >
                {r.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="text-[13px] font-semibold text-black">{r.name}</div>
                  {r.accent && (
                    <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                  )}
                </div>
                <div className="text-[13px] text-gray-700 leading-snug mt-0.5">
                  {r.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ─── 9–11s — Campaign results ─── */
export const CampaignResultsScreen = ({ t }: { t: number }) => {
  const local = t - 9;
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
        Kampanjen er ferdig
      </div>
      <div className="mt-1 text-[13px] text-gray-500 text-center">
        Ett klikk. 247 meldinger. 18 nye avtaler.
      </div>

      <div className="mt-6 w-full space-y-2">
        {[
          { label: "Svar", value: "42", sub: "17 % respons" },
          { label: "Avtaler", value: "18", sub: "43 % av svar" },
          { label: "Pipeline", value: "280k kr", sub: "estimert verdi", hero: true },
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
