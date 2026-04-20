import AnimationStage from "../animation-shared/AnimationStage";
import IOSDevice from "../animation-shared/IOSDevice";
import StepPill from "../animation-shared/StepPill";
import StepStrip, { type StepStripItem } from "../animation-shared/StepStrip";
import { useLoopTime, fadeWindow } from "../animation-shared/useLoopTime";
import {
  IncomingCallScreen,
  SMSThreadScreen,
  MissedCallSuccessScreen,
} from "./screens";

type Step = StepStripItem & { side: "left" | "right"; topPct: number };

const STEPS: Step[] = [
  { step: 1, side: "left",  topPct: 18, label: "Mistet", sub: "Du står i stigen",    from: 0.3, to: 3.0 },
  { step: 2, side: "right", topPct: 26, label: "5 sek",  sub: "Automatisk SMS ut",   from: 3.4, to: 5.5 },
  { step: 3, side: "left",  topPct: 48, label: "Svar",   sub: "Kunden svarer",       from: 5.5, to: 9.0 },
  { step: 4, side: "right", topPct: 62, label: "Lead",   sub: "Avtalt møte",         from: 9.3, to: 10.9 },
];

const MissedCallAnimation = () => {
  const t = useLoopTime();
  const darkPhase = t < 3.1;

  return (
    <>
      <AnimationStage>
        <IOSDevice dark={darkPhase}>
          <div style={{ opacity: fadeWindow(t, 0, 0.3, 2.8, 3.1) }}>
            <IncomingCallScreen t={t} />
          </div>
          <div style={{ opacity: fadeWindow(t, 3, 3.3, 8.8, 9.1) }}>
            <SMSThreadScreen t={t} />
          </div>
          <div style={{ opacity: fadeWindow(t, 9, 9.3, 10.9, 11) }}>
            <MissedCallSuccessScreen t={t} />
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

export default MissedCallAnimation;
