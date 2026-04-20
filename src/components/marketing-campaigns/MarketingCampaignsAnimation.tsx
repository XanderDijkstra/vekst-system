import IOSDevice from "../animation-shared/IOSDevice";
import StepPill from "../animation-shared/StepPill";
import { useLoopTime, fadeWindow } from "../animation-shared/useLoopTime";
import {
  CampaignLaunchScreen,
  SendingProgressScreen,
  IncomingResponsesScreen,
  CampaignResultsScreen,
} from "./screens";

/**
 * 11s loop: admin UI with press → circular progress → responses slide
 * in from right → final stats. Step pills: Kunder · Sendt · Svar · Pipeline.
 */
const MarketingCampaignsAnimation = () => {
  const t = useLoopTime();

  return (
    <div className="relative w-full flex justify-center items-start py-8">
      <div className="relative">
        <IOSDevice>
          <div style={{ opacity: fadeWindow(t, 0, 0.3, 2.8, 3.1) }}>
            <CampaignLaunchScreen t={t} />
          </div>
          <div style={{ opacity: fadeWindow(t, 3, 3.3, 5.3, 5.6) }}>
            <SendingProgressScreen t={t} />
          </div>
          <div style={{ opacity: fadeWindow(t, 5.5, 5.8, 8.8, 9.1) }}>
            <IncomingResponsesScreen t={t} />
          </div>
          <div style={{ opacity: fadeWindow(t, 9, 9.3, 10.9, 11) }}>
            <CampaignResultsScreen t={t} />
          </div>
        </IOSDevice>

        <StepPill
          side="left"
          topPct={18}
          step={1}
          label="Kunder"
          sub="247 mottakere"
          visible={t >= 0.3 && t < 3.0}
        />
        <StepPill
          side="right"
          topPct={28}
          step={2}
          label="Sendt"
          sub="Ett klikk"
          visible={t >= 3.3 && t < 5.5}
        />
        <StepPill
          side="left"
          topPct={48}
          step={3}
          label="Svar"
          sub="Kommer inn"
          visible={t >= 5.8 && t < 9.0}
        />
        <StepPill
          side="right"
          topPct={62}
          step={4}
          label="Pipeline"
          sub="280k kr estimert"
          visible={t >= 9.3 && t < 10.9}
        />
      </div>
    </div>
  );
};

export default MarketingCampaignsAnimation;
