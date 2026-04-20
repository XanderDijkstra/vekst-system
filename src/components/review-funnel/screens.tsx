import { Star, Check, Send } from "lucide-react";

/* ─── 0–2.5s — SMS from Vekst Systemet ─── */
export const SMSScreen = ({ t }: { t: number }) => {
  const appear = Math.min(1, Math.max(0, (t - 0.4) / 0.5));
  return (
    <div className="absolute inset-0 pt-20 px-5" style={{ background: "#fff" }}>
      <div className="text-center pb-4">
        <div className="w-14 h-14 rounded-full bg-[#F59E0B]/15 mx-auto mb-2 flex items-center justify-center">
          <span className="text-[#F59E0B] font-bold">VS</span>
        </div>
        <div className="text-xs text-[#007AFF]">Vekst Systemet</div>
        <div className="text-[11px] text-gray-500">Tekstmelding · nå</div>
      </div>
      <div
        className="mt-4 max-w-[85%]"
        style={{
          opacity: appear,
          transform: `translateY(${(1 - appear) * 8}px)`,
          transition: "none",
        }}
      >
        <div
          className="rounded-2xl rounded-bl-md px-4 py-3 text-[15px] leading-snug"
          style={{ background: "#E9E9EB", color: "#000" }}
        >
          Hei Anna, takk for at du valgte oss! Kan du legge igjen en kjapp vurdering?{" "}
          <span className="text-[#007AFF] underline">vekst.no/r/a7k</span>
        </div>
        <div className="text-[10px] text-gray-400 mt-1 ml-2">Levert</div>
      </div>
    </div>
  );
};

/* ─── 2.5–6.8s — Review prompt with animated 5 stars ─── */
export const ReviewPromptScreen = ({ t }: { t: number }) => {
  const local = t - 2.5;
  const starCount = Math.min(5, Math.max(0, Math.floor((local - 0.6) / 0.35)));
  return (
    <div className="absolute inset-0 pt-20 px-6" style={{ background: "#F8F8F8" }}>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4">
          <Star className="w-8 h-8 fill-[#F59E0B] text-[#F59E0B]" />
        </div>
        <div className="text-[22px] font-bold text-black">Hvordan var din opplevelse?</div>
        <div className="text-[14px] text-gray-500 mt-2 leading-relaxed px-4">
          Takk for at du tok deg tid. Klikk på stjernene.
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star
              key={i}
              className={`w-11 h-11 transition-all duration-300 ${
                i < starCount ? "fill-[#F59E0B] text-[#F59E0B]" : "text-gray-300"
              }`}
              style={{
                transform: i < starCount ? "scale(1.1)" : "scale(1)",
              }}
            />
          ))}
        </div>

        <button
          className="mt-10 w-full rounded-2xl py-4 text-white font-semibold text-[17px]"
          style={{
            background: starCount >= 5 ? "#F59E0B" : "#D1D5DB",
            transition: "background 300ms",
          }}
        >
          Send vurdering
        </button>
      </div>
    </div>
  );
};

/* ─── 6.8–9.5s — Review compose, typing indicator ─── */
export const ReviewComposeScreen = ({ t }: { t: number }) => {
  const fullText = "Toppkarer, kom presis, ryddet etter seg. Anbefales!";
  const local = t - 6.8;
  const chars = Math.min(fullText.length, Math.floor((local / 2.3) * fullText.length));
  const visibleText = fullText.slice(0, chars);

  return (
    <div className="absolute inset-0 pt-20 px-5" style={{ background: "#fff" }}>
      <div className="text-center pb-4">
        <div className="flex items-center justify-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
          ))}
        </div>
        <div className="text-[14px] text-gray-500">Din vurdering</div>
      </div>
      <div
        className="rounded-2xl border border-gray-200 p-4 min-h-[140px]"
        style={{ background: "#F9FAFB" }}
      >
        <div className="text-[16px] text-black leading-relaxed">
          {visibleText}
          <span
            className="inline-block w-[2px] h-[18px] ml-0.5 align-middle"
            style={{
              background: "#F59E0B",
              opacity: Math.floor(local * 3) % 2 === 0 ? 1 : 0,
            }}
          />
        </div>
      </div>
      <button
        className="mt-6 w-full rounded-2xl py-4 text-white font-semibold text-[17px]"
        style={{ background: "#F59E0B" }}
      >
        <span className="inline-flex items-center gap-2">
          <Send className="w-4 h-4" />
          Publiser
        </span>
      </button>
    </div>
  );
};

/* ─── 9.5–11s — Success ─── */
export const SuccessScreen = ({ t }: { t: number }) => {
  const local = t - 9.5;
  const scale = Math.min(1, local / 0.35);
  return (
    <div
      className="absolute inset-0 pt-24 px-6 flex flex-col items-center"
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
      <div className="mt-6 text-[22px] font-bold text-black text-center">
        Takk! Vurderingen er publisert
      </div>
      <div className="mt-2 text-[14px] text-gray-500 text-center">
        Du hjelper andre å finne en fagmann de kan stole på.
      </div>
      <div className="mt-10 flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-6 h-6 fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>
    </div>
  );
};
