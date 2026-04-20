import AnimationStage from "../animation-shared/AnimationStage";
import IOSDevice from "../animation-shared/IOSDevice";
import StepPill from "../animation-shared/StepPill";
import StepStrip, { type StepStripItem } from "../animation-shared/StepStrip";
import { useLoopTime, fadeWindow } from "../animation-shared/useLoopTime";
import {
  CampaignLaunchScreen,
  SendingProgressScreen,
  IncomingResponsesScreen,
  CampaignResultsScreen,
} from "./screens";

type Step = StepStripItem & { side: "left" | "right"; topPct: number };

const STEPS: Step[] = [
  { step: 1, side: "left",  topPct: 18, label: "Kunder",   sub: "247 mottakere",    from: 0.3, to: 3.0 },
  { step: 2, side: "right", topPct: 28, label: "Sendt",    sub: "Ett klikk",         from: 3.3, to: 5.5 },
  { step: 3, side: "left",  topPct: 48, label: "Svar",     sub: "Kommer inn",        from: 5.8, to: 9.0 },
  { step: 4, side: "right", topPct: 62, label: "Pipeline", sub: "280k kr estimert",  from: 9.3, to: 10.9 },
];

const MarketingCampaignsAnimation = () => {
  const t = useLoopTime();

  return (
    <>
      <AnimationStage>
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

export default MarketingCampaignsAnimation;
