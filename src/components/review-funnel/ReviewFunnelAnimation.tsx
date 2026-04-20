import AnimationStage from "../animation-shared/AnimationStage";
import IOSDevice from "../animation-shared/IOSDevice";
import StepPill from "../animation-shared/StepPill";
import { useLoopTime, fadeWindow } from "../animation-shared/useLoopTime";
import {
  SMSScreen,
  ReviewPromptScreen,
  ReviewComposeScreen,
  SuccessScreen,
} from "./screens";

/**
 * 11s loop showing SMS → star rating → review compose → published.
 * Step pills float to either side of the phone with timing aligned
 * to screen transitions.
 */
const ReviewFunnelAnimation = () => {
  const t = useLoopTime();

  return (
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

        <StepPill
          side="left"
          topPct={18}
          step={1}
          label="Sendt"
          sub="SMS med direktelink"
          visible={t >= 0.3 && t < 2.5}
        />
        <StepPill
          side="right"
          topPct={28}
          step={2}
          label="Åpnet"
          sub="Kunden vurderer"
          visible={t >= 2.8 && t < 6.8}
        />
        <StepPill
          side="left"
          topPct={50}
          step={3}
          label="5 stjerner"
          sub="Skriver fritt"
          visible={t >= 7.0 && t < 9.5}
        />
        <StepPill
          side="right"
          topPct={62}
          step={4}
          label="Publisert"
          sub="Live på Google"
          visible={t >= 9.8 && t < 10.9}
        />
    </AnimationStage>
  );
};

export default ReviewFunnelAnimation;
