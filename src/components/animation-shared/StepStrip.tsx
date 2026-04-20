export interface StepStripItem {
  step: number;
  label: string;
  sub: string;
  from: number;
  to: number;
}

interface StepStripProps {
  steps: StepStripItem[];
  t: number;
}

/**
 * Mobile-only compact stepper shown below the iPhone stage. Replaces
 * the side step-pills which would overflow on narrow viewports.
 */
const StepStrip = ({ steps, t }: StepStripProps) => {
  const active = steps.find((s) => t >= s.from && t < s.to);
  const activeIndex = active ? steps.indexOf(active) : -1;

  return (
    <div className="pt-1 pb-5 px-4">
      <div className="flex items-center justify-center">
        {steps.map((s, i) => {
          const isActive = activeIndex === i;
          const isPast = activeIndex > i;
          return (
            <div key={s.step} className="flex items-center">
              <div
                className="flex items-center justify-center font-bold text-xs"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: isActive ? "#F59E0B" : isPast ? "#FDE68A" : "#E5E7EB",
                  color: isActive ? "#fff" : isPast ? "#92400E" : "#6B7280",
                  transition: "background 200ms, color 200ms",
                }}
              >
                {s.step}
              </div>
              {i < steps.length - 1 && (
                <div
                  className="mx-2"
                  style={{
                    width: 28,
                    height: 2,
                    background: isPast ? "#FDE68A" : "#E5E7EB",
                    transition: "background 200ms",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-3 text-center min-h-[40px]">
        {active && (
          <>
            <div className="text-sm font-semibold text-foreground leading-tight">
              {active.label}
            </div>
            <div className="text-xs text-muted-foreground leading-tight mt-0.5">
              {active.sub}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StepStrip;
