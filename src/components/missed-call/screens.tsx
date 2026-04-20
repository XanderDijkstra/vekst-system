import { Phone, PhoneOff, Check } from "lucide-react";

/* ─── 0–3s — Incoming call, pulsing rings ─── */
export const IncomingCallScreen = ({ t }: { t: number }) => {
  const pulse = (Math.sin(t * 3) + 1) / 2;
  return (
    <div
      className="absolute inset-0 pt-16 px-5 flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #000 100%)",
        color: "#fff",
      }}
    >
      <div className="text-xs text-white/60 tracking-wider uppercase mt-6">Innkommende anrop</div>

      <div className="relative mt-20">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/20"
            style={{
              left: "50%",
              top: "50%",
              width: 120 + i * 60,
              height: 120 + i * 60,
              transform: `translate(-50%, -50%) scale(${1 + pulse * 0.08 * (i + 1)})`,
              opacity: 0.6 - i * 0.15,
              transition: "transform 100ms linear",
            }}
          />
        ))}
        <div
          className="relative w-[120px] h-[120px] rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }}
        >
          <span className="text-5xl font-semibold text-white">AK</span>
        </div>
      </div>

      <div className="text-center mt-8">
        <div className="text-[26px] font-semibold">Anna Kundsdatter</div>
        <div className="text-[15px] text-white/60 mt-1">+47 92 45 12 88</div>
      </div>

      <div className="flex items-center justify-around w-full mt-auto mb-20">
        <button className="w-[70px] h-[70px] rounded-full bg-red-500 flex items-center justify-center">
          <PhoneOff className="w-8 h-8 text-white" strokeWidth={2.5} />
        </button>
        <button className="w-[70px] h-[70px] rounded-full bg-green-500 flex items-center justify-center">
          <Phone className="w-8 h-8 text-white fill-white" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

/* ─── 3–9s — iMessage SMS thread ─── */
interface Bubble {
  from: "auto" | "in";
  text: string;
  showAt: number;
}
const BUBBLES: Bubble[] = [
  {
    from: "auto",
    text:
      "Hei, beklager at jeg ikke rakk å ta. Dette er Lars fra Vekst Bygg. Hva gjelder det?",
    showAt: 3.4,
  },
  {
    from: "in",
    text: "Hei! Trenger pristilbud på nytt tak. Kan du ringe i morgen?",
    showAt: 5.0,
  },
  { from: "auto", text: "Klart. Jeg ringer deg kl 10. Passer det?", showAt: 6.6 },
  { from: "in", text: "Perfekt, takk!", showAt: 8.0 },
];

export const SMSThreadScreen = ({ t }: { t: number }) => {
  return (
    <div
      className="absolute inset-0"
      style={{ background: "#fff", display: "flex", flexDirection: "column" }}
    >
      <div
        className="pt-14 pb-3 px-5 text-center border-b border-gray-100"
        style={{ background: "#F6F6F6" }}
      >
        <div className="w-10 h-10 rounded-full bg-[#F59E0B]/15 mx-auto mb-1 flex items-center justify-center">
          <span className="text-[#F59E0B] text-sm font-bold">AK</span>
        </div>
        <div className="text-[13px] font-semibold">Anna Kundsdatter</div>
      </div>

      <div className="flex-1 px-4 pt-4 overflow-hidden">
        {BUBBLES.map((b, i) => {
          const visible = t >= b.showAt;
          if (!visible) return null;
          const age = t - b.showAt;
          const appear = Math.min(1, age / 0.25);
          const isAuto = b.from === "auto";
          return (
            <div
              key={i}
              className="mb-2 flex"
              style={{
                justifyContent: isAuto ? "flex-end" : "flex-start",
                opacity: appear,
                transform: `translateY(${(1 - appear) * 6}px)`,
              }}
            >
              <div
                className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[15px] leading-snug ${
                  isAuto ? "rounded-br-md" : "rounded-bl-md"
                }`}
                style={{
                  background: isAuto ? "#007AFF" : "#E9E9EB",
                  color: isAuto ? "#fff" : "#000",
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

/* ─── 9–11s — Success: lead rescued + calendar snippet ─── */
export const MissedCallSuccessScreen = ({ t }: { t: number }) => {
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
      <div className="mt-6 text-[22px] font-bold text-black text-center">Lead reddet</div>
      <div className="mt-2 text-[14px] text-gray-500 text-center">
        Fra tapt anrop til avtalt møte - uten at du måtte gjøre noe.
      </div>

      <div
        className="mt-8 w-full rounded-2xl border border-gray-200 p-4"
        style={{ background: "#FAFAFA" }}
      >
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#F59E0B]">
          I morgen
        </div>
        <div className="mt-1 text-[15px] font-semibold text-black">10:00 · Ring Anna K.</div>
        <div className="text-[13px] text-gray-500">Pristilbud - nytt tak</div>
      </div>
    </div>
  );
};
