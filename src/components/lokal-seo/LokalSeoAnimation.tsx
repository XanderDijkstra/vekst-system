import IOSDevice from "../animation-shared/IOSDevice";
import StepPill from "../animation-shared/StepPill";
import { useLoopTime, fadeWindow } from "../animation-shared/useLoopTime";
import {
  GoogleSearchScreen,
  SearchResultsScreen,
  BusinessProfileScreen,
  SeoResultsScreen,
} from "./screens";

/**
 * 11s loop: Google query typing → SERP map pack with position climb →
 * expanded business profile with #1 badge → SEO results stats.
 * Step pills: Søkeord · Topp 3 · Din bedrift · Resultat.
 */
const LokalSeoAnimation = () => {
  const t = useLoopTime();

  return (
    <div className="relative w-full flex justify-center items-start py-8">
      <div className="relative">
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

        <StepPill
          side="left"
          topPct={18}
          step={1}
          label="Søkeord"
          sub="«rørlegger oslo»"
          visible={t >= 0.3 && t < 3.0}
        />
        <StepPill
          side="right"
          topPct={28}
          step={2}
          label="Topp 3"
          sub="Kartpakken"
          visible={t >= 3.3 && t < 6.3}
        />
        <StepPill
          side="left"
          topPct={48}
          step={3}
          label="Din bedrift"
          sub="#1 topposisjon"
          visible={t >= 6.8 && t < 9.0}
        />
        <StepPill
          side="right"
          topPct={62}
          step={4}
          label="Resultat"
          sub="+38 % henvendelser"
          visible={t >= 9.5 && t < 10.9}
        />
      </div>
    </div>
  );
};

export default LokalSeoAnimation;
