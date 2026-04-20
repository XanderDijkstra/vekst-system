import AnimationStage from "../animation-shared/AnimationStage";
import IOSDevice from "../animation-shared/IOSDevice";
import StepPill from "../animation-shared/StepPill";
import { useLoopTime, fadeWindow } from "../animation-shared/useLoopTime";
import {
  IncomingCallScreen,
  SMSThreadScreen,
  MissedCallSuccessScreen,
} from "./screens";

/**
 * 11s loop: incoming call not answered → auto-SMS thread → lead rescued.
 * Step pills: Mistet · 5 sek · Svar · Lead.
 */
const MissedCallAnimation = () => {
  const t = useLoopTime();
  // First screen is dark (call screen); toggle IOSDevice dark for that window
  const darkPhase = t < 3.1;

  return (
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

        <StepPill
          side="left"
          topPct={18}
          step={1}
          label="Mistet"
          sub="Du står i stigen"
          visible={t >= 0.3 && t < 3.0}
        />
        <StepPill
          side="right"
          topPct={26}
          step={2}
          label="5 sek"
          sub="Automatisk SMS ut"
          visible={t >= 3.4 && t < 5.5}
        />
        <StepPill
          side="left"
          topPct={48}
          step={3}
          label="Svar"
          sub="Kunden svarer"
          visible={t >= 5.5 && t < 9.0}
        />
        <StepPill
          side="right"
          topPct={62}
          step={4}
          label="Lead"
          sub="Avtalt møte"
          visible={t >= 9.3 && t < 10.9}
        />
    </AnimationStage>
  );
};

export default MissedCallAnimation;
