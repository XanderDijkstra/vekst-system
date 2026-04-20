import AnimationStage from "../animation-shared/AnimationStage";
import IOSDevice from "../animation-shared/IOSDevice";
import StepPill from "../animation-shared/StepPill";
import StepStrip, { type StepStripItem } from "../animation-shared/StepStrip";
import { useLoopTime, fadeWindow } from "../animation-shared/useLoopTime";
import {
  IntakeNotificationScreen,
  FollowUpSMSThread,
  AppointmentSuccessScreen,
} from "./screens";

type Step = StepStripItem & { side: "left" | "right"; topPct: number };

const STEPS: Step[] = [
  { step: 1, side: "left",  topPct: 18, label: "Forespørsel", sub: "Skjema utfylt",      from: 0.3, to: 3.0 },
  { step: 2, side: "right", topPct: 28, label: "Direkte",     sub: "Automatisk SMS ut",  from: 3.3, to: 5.5 },
  { step: 3, side: "left",  topPct: 48, label: "Samtale",     sub: "Kunden er med",      from: 5.5, to: 9.0 },
  { step: 4, side: "right", topPct: 62, label: "Avtale",      sub: "I kalenderen",       from: 9.3, to: 10.9 },
];

const LeadFollowUpAnimation = () => {
  const t = useLoopTime();
  const darkPhase = t < 3.1;

  return (
    <>
      <AnimationStage>
        <IOSDevice dark={darkPhase}>
          <div style={{ opacity: fadeWindow(t, 0, 0.3, 2.8, 3.1) }}>
            <IntakeNotificationScreen t={t} />
          </div>
          <div style={{ opacity: fadeWindow(t, 3, 3.3, 8.8, 9.1) }}>
            <FollowUpSMSThread t={t} />
          </div>
          <div style={{ opacity: fadeWindow(t, 9, 9.3, 10.9, 11) }}>
            <AppointmentSuccessScreen t={t} />
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

export default LeadFollowUpAnimation;
