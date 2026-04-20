import AnimationStage from "../animation-shared/AnimationStage";
import StepStrip, { type StepStripItem } from "../animation-shared/StepStrip";
import IOSDevice from "../animation-shared/IOSDevice";
import { useLoopTime, fadeWindow } from "../animation-shared/useLoopTime";
import {
  GoogleSearchScreen,
  SearchResultsScreen,
  BusinessProfileScreen,
  SeoResultsScreen,
} from "./screens";

const STEPS: StepStripItem[] = [
  { step: 1, label: "Søkeord",     sub: "«rørlegger oslo»",    from: 0.3, to: 3.0 },
  { step: 2, label: "Topp 3",      sub: "Kartpakken",          from: 3.3, to: 6.3 },
  { step: 3, label: "Din bedrift", sub: "#1 topposisjon",      from: 6.8, to: 9.0 },
  { step: 4, label: "Resultat",    sub: "+38 % henvendelser",  from: 9.5, to: 10.9 },
];

const LokalSeoAnimation = () => {
  const t = useLoopTime();

  return (
    <>
      <AnimationStage>
        <IOSDevice>
          <div style={{ opacity: fadeWindow(t, 0, 0.3, 2.8, 3.1) }}>
            <GoogleSearchScreen t={t} />
          </div>
          <div style={{ opacity: fadeWindow(t, 3, 3.3, 6.3, 6.6) }}>
            <SearchResultsScreen t={t} />
          </div>
          <div style={{ opacity: fadeWindow(t, 6.5, 6.8, 9.0, 9.3) }}>
            <BusinessProfileScreen t={t} />
          </div>
          <div style={{ opacity: fadeWindow(t, 9.2, 9.5, 10.9, 11) }}>
            <SeoResultsScreen t={t} />
          </div>
        </IOSDevice>
      </AnimationStage>
      <StepStrip steps={STEPS} t={t} />
    </>
  );
};

export default LokalSeoAnimation;
