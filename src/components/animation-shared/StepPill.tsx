import { useEffect, useState } from "react";

interface StepPillProps {
  side: "left" | "right";
  topPct: number;
  step: number;
  label: string;
  sub: string;
  visible: boolean;
}

/**
 * Floating callout that sits next to the iPhone mockup. Transparent
 * background, flat design. Fade/slide in, setTimeout unmount at 350ms
 * so exits animate.
 */
const StepPill = ({ side, topPct, step, label, sub, visible }: StepPillProps) => {
  const [mounted, setMounted] = useState(visible);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      return;
    }
    const t = setTimeout(() => setMounted(false), 350);
    return () => clearTimeout(t);
  }, [visible]);

  if (!mounted) return null;

  const isLeft = side === "left";
  const translateX = visible ? 0 : isLeft ? -16 : 16;

  return (
    <div
      className="absolute flex items-center gap-3 pointer-events-none"
      style={{
        top: `${topPct}%`,
        [isLeft ? "right" : "left"]: "100%",
        [isLeft ? "marginRight" : "marginLeft"]: 16,
        flexDirection: isLeft ? "row" : "row-reverse",
        opacity: visible ? 1 : 0,
        transform: `translateX(${translateX}px)`,
        transition: "opacity 300ms ease-out, transform 300ms ease-out",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", system-ui, sans-serif',
      }}
    >
      <div
        className="flex items-center gap-3"
        style={{ flexDirection: isLeft ? "row" : "row-reverse" }}
      >
        <div
          className="flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{
            width: 32,
            height: 32,
            borderRadius: 9,
            background: "#F59E0B",
          }}
        >
          {step}
        </div>
        <div style={{ textAlign: isLeft ? "right" : "left" }}>
          <div className="text-sm font-semibold text-foreground leading-tight">{label}</div>
          <div className="text-xs text-muted-foreground leading-tight mt-0.5">{sub}</div>
        </div>
      </div>
      {/* Connector line into phone edge */}
      <div
        className="flex-shrink-0"
        style={{
          width: 16,
          height: 1,
          background: "rgba(0,0,0,0.15)",
        }}
      />
    </div>
  );
};

export default StepPill;
