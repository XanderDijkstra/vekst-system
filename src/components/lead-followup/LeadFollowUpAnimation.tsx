import AnimationStage from "../animation-shared/AnimationStage";
import StepStrip, { type StepStripItem } from "../animation-shared/StepStrip";
import IOSDevice from "../animation-shared/IOSDevice";
import { useLoopTime, fadeWindow } from "../animation-shared/useLoopTime";
import {
  IntakeNotificationScreen,
  FollowUpSMSThread,
  AppointmentSuccessScreen,
} from "./screens";

const STEPS: StepStripItem[] = [
  { step: 1, label: "Forespørsel", sub: "Skjema utfylt",     from: 0.3, to: 3.0 },
  { step: 2, label: "Direkte",     sub: "Automatisk SMS ut", from: 3.3, to: 5.5 },
  { step: 3, label: "Samtale",     sub: "Kunden er med",     from: 5.5, to: 9.0 },
  { step: 4, label: "Avtale",      sub: "I kalenderen",      from: 9.3, to: 10.9 },
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
      </AnimationStage>
      <StepStrip steps={STEPS} t={t} />
    </>
  );
};

export default LeadFollowUpAnimation;
