import HeroSection from '../components/HeroSection';
import VisualProofSection from '../components/VisualProofSection';
import ProblemReliefSection from '../components/ProblemReliefSection';
import FounderNoteSection from '../components/FounderNoteSection';
import PricingSection from '../components/PricingSection';
import FreeDownloadSection from '../components/FreeDownloadSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisualProofSection />
      <ProblemReliefSection />
      <FounderNoteSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <FreeDownloadSection />
    </>
  );
}