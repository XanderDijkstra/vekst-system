import { Calendar, Check } from "lucide-react";

/* ─── 0–3s — Dark lock screen with banner notification ─── */
export const IntakeNotificationScreen = ({ t }: { t: number }) => {
  const appear = Math.min(1, Math.max(0, (t - 0.6) / 0.4));
  const timeStr = "9:41";
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, #1f2937 0%, #111827 50%, #0b0f17 100%)",
        color: "#fff",
      }}
    >
      <div className="pt-24 text-center">
        <div className="text-[14px] text-white/50">tirsdag 15. april</div>
        <div className="text-[78px] font-thin tabular-nums leading-none mt-1">{timeStr}</div>
      </div>

      <div className="mt-20 px-4">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.14)",
            backdropFilter: "blur(24px)",
            opacity: appear,
            transform: `translateY(${(1 - appear) * -12}px) scale(${0.96 + appear * 0.04})`,
            transition: "none",
          }}
        >
          <div className="flex items-start gap-3 p-3">
            <div className="w-10 h-10 rounded-lg bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">VS</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="text-[13px] font-semibold text-white">Vekst Systemet</div>
                <div className="text-[11px] text-white/60">nå</div>
              </div>
              <div className="text-[13px] text-white/90 mt-0.5 leading-snug">
                Nytt skjema fra <span className="font-semibold">Anna Hansen</span> -
                bad-renovering
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── 3–9s — SMS thread: auto follow-up + reply + agent ─── */
interface Bubble {
  from: "agent" | "customer";
  text: string;
  showAt: number;
}
const BUBBLES: Bubble[] = [
  {
    from: "agent",
    text:
      "Hei Anna, takk for forespørselen om bad-renovering. Jeg tar kontakt innen 15 minutter.",
    showAt: 3.3,
  },
  { from: "customer", text: "Supert, takk!", showAt: 5.0 },
  { from: "agent", text: "Har du tid til en kjapp prat i morgen kl 14?", showAt: 6.3 },
  { from: "customer", text: "Ja, det passer fint.", showAt: 7.8 },
];

export const FollowUpSMSThread = ({ t }: { t: number }) => {
  return (
    <div className="absolute inset-0" style={{ background: "#fff" }}>
      <div
        className="pt-14 pb-3 px-5 text-center border-b border-gray-100"
        style={{ background: "#F6F6F6" }}
      >
        <div className="w-10 h-10 rounded-full bg-[#F59E0B]/15 mx-auto mb-1 flex items-center justify-center">
          <span className="text-[#F59E0B] text-sm font-bold">AH</span>
        </div>
        <div className="text-[13px] font-semibold">Anna Hansen</div>
        <div className="text-[11px] text-gray-500">Bad-renovering forespørsel</div>
      </div>

      <div className="flex-1 px-4 pt-4">
        {BUBBLES.map((b, i) => {
          const visible = t >= b.showAt;
          if (!visible) return null;
          const age = t - b.showAt;
          const appear = Math.min(1, age / 0.25);
          const isAgent = b.from === "agent";
          return (
            <div
              key={i}
              className="mb-2 flex"
              style={{
                justifyContent: isAgent ? "flex-end" : "flex-start",
                opacity: appear,
                transform: `translateY(${(1 - appear) * 6}px)`,
              }}
            >
              <div
                className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[15px] leading-snug ${
                  isAgent ? "rounded-br-md" : "rounded-bl-md"
                }`}
                style={{
                  background: isAgent ? "#F59E0B" : "#E9E9EB",
                  color: isAgent ? "#fff" : "#000",
                }}
              >
                {b.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ─── 9–11s — Calendar confirmation card ─── */
export const AppointmentSuccessScreen = ({ t }: { t: number }) => {
  const local = t - 9;
  const scale = Math.min(1, local / 0.35);
  return (
    <div
      className="absolute inset-0 pt-20 px-6 flex flex-col items-center"
      style={{ background: "#fff" }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{
          background: "#10B981",
          transform: `scale(${scale})`,
          transition: "transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <Check className="w-12 h-12 text-white" strokeWidth={3} />
      </div>
      <div className="mt-6 text-[22px] font-bold text-black text-center">Avtale bekreftet</div>
      <div className="mt-2 text-[14px] text-gray-500 text-center">
        Fra skjema til avtalt samtale - uten manuell oppfølging.
      </div>

      <div
        className="mt-8 w-full rounded-2xl border-2 p-4"
        style={{ borderColor: "#F59E0B", background: "#FFFBEB" }}
      >
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-[#F59E0B] mt-0.5" strokeWidth={2} />
          <div className="flex-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#F59E0B]">
              I morgen kl 14:00
            </div>
            <div className="mt-1 text-[15px] font-semibold text-black">
              Telefonmøte - Anna Hansen
            </div>
            <div className="text-[13px] text-gray-500">Bad-renovering, estimat 180 000 kr</div>
          </div>
        </div>
      </div>
    </div>
  );
};
