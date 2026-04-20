import { ReactNode, useEffect, useState } from "react";

interface AnimationStageProps {
  children: ReactNode;
  /** Unscaled iPhone height (matches IOSDevice default). */
  height?: number;
  /** Unscaled iPhone width (matches IOSDevice default). */
  width?: number;
}

/** Total horizontal span we reserve: phone + step-pill columns. */
const DESIGN_SPAN = 722;

const getScale = (viewportWidth: number): number => {
  const usable = Math.max(0, viewportWidth - 32);
  const raw = usable / DESIGN_SPAN;
  return Math.min(1, Math.max(0.42, raw));
};

/**
 * Responsive wrapper for the iPhone-mockup animations. Keeps the phone
 * and its step pills in proportion on mobile by scaling the entire
 * stage, and collapses the extra height created by `transform: scale`.
 */
const AnimationStage = ({ children, height = 874, width = 402 }: AnimationStageProps) => {
  const [scale, setScale] = useState(() =>
    typeof window !== "undefined" ? getScale(window.innerWidth) : 1,
  );

  useEffect(() => {
    const update = () => setScale(getScale(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="relative w-full flex justify-center items-start overflow-hidden"
      style={{ height: height * scale + 32, paddingTop: 16 }}
    >
      <div
        style={{
          width,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

export default AnimationStage;
