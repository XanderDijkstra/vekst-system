import AnimationStage from "../animation-shared/AnimationStage";
import IOSDevice from "../animation-shared/IOSDevice";
import StepPill from "../animation-shared/StepPill";
import StepStrip, { type StepStripItem } from "../animation-shared/StepStrip";
import { useLoopTime, fadeWindow } from "../animation-shared/useLoopTime";
import {
  SMSScreen,
  ReviewPromptScreen,
  ReviewComposeScreen,
  SuccessScreen,
} from "./screens";

type Step = StepStripItem & { side: "left" | "right"; topPct: number };

const STEPS: Step[] = [
  { step: 1, side: "left",  topPct: 18, label: "Sendt",      sub: "SMS med direktelink", from: 0.3, to: 2.5 },
  { step: 2, side: "right", topPct: 28, label: "Åpnet",      sub: "Kunden vurderer",     from: 2.8, to: 6.8 },
  { step: 3, side: "left",  topPct: 50, label: "5 stjerner", sub: "Skriver fritt",       from: 7.0, to: 9.5 },
  { step: 4, side: "right", topPct: 62, label: "Publisert",  sub: "Live på Google",      from: 9.8, to: 10.9 },
];

const ReviewFunnelAnimation = () => {
  const t = useLoopTime();

  return (
    <>
      <AnimationStage>
        <IOSDevice>
          <div style={{ opacity: fadeWindow(t, 0, 0.3, 2.3, 2.7) }}>
            <SMSScreen t={t} />
          </div>
          <div style={{ opacity: fadeWindow(t, 2.5, 2.8, 6.6, 7.0) }}>
            <ReviewPromptScreen t={t} />
          </div>
          <div style={{ opacity: fadeWindow(t, 6.8, 7.1, 9.3, 9.6) }}>
            <ReviewComposeScreen t={t} />
          </div>
          <div style={{ opacity: fadeWindow(t, 9.5, 9.8, 10.9, 11) }}>
            <SuccessScreen t={t} />
          </div>
        </IOSDevice>

        {STEPS.map((s) => (
          <StepPill
            key={s.step}
            step={s.step}
            side={s.side}
            topPct={s.topPct}
            label={s.label}
            sub={s.sub}
            visible={t >= s.from && t < s.to}
          />
        ))}
      </AnimationStage>
      <StepStrip steps={STEPS} t={t} />
    </>
  );
};

export default ReviewFunnelAnimation;
