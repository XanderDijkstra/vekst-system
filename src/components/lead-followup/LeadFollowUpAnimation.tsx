import IOSDevice from "../animation-shared/IOSDevice";
import StepPill from "../animation-shared/StepPill";
import { useLoopTime, fadeWindow } from "../animation-shared/useLoopTime";
import {
  IntakeNotificationScreen,
  FollowUpSMSThread,
  AppointmentSuccessScreen,
} from "./screens";

/**
 * 11s loop: lock-screen notification → auto-SMS follow-up thread →
 * booked appointment. Step pills: Forespørsel · Direkte · Samtale · Avtale.
 */
const LeadFollowUpAnimation = () => {
  const t = useLoopTime();
  const darkPhase = t < 3.1;

  return (
    <div className="relative w-full flex justify-center items-start py-8">
      <div className="relative">
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

        <StepPill
          side="left"
          topPct={18}
          step={1}
          label="Forespørsel"
          sub="Skjema utfylt"
          visible={t >= 0.3 && t < 3.0}
        />
        <StepPill
          side="right"
          topPct={28}
          step={2}
          label="Direkte"
          sub="Automatisk SMS ut"
          visible={t >= 3.3 && t < 5.5}
        />
        <StepPill
          side="left"
          topPct={48}
          step={3}
          label="Samtale"
          sub="Kunden er med"
          visible={t >= 5.5 && t < 9.0}
        />
        <StepPill
          side="right"
          topPct={62}
          step={4}
          label="Avtale"
          sub="I kalenderen"
          visible={t >= 9.3 && t < 10.9}
        />
      </div>
    </div>
  );
};

export default LeadFollowUpAnimation;
