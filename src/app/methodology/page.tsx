import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import MethodologyHero from './components/MethodologyHero';
import PhaseTimeline from './components/PhaseTimeline';
import ProcessTransparency from './components/ProcessTransparency';
import MethodologyComparison from './components/MethodologyComparison';
import MethodologyResources from './components/MethodologyResources';
import MethodologyFAQ from './components/MethodologyFAQ';
import MethodologyCTA from './components/MethodologyCTA';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

export const metadata: Metadata = {
  title: 'Methodology - PilotLogicSystems',
  description: 'Discover the Pilot Method: our systematic 4-phase approach to transforming manual operations into intelligent automation infrastructure with complete transparency and enterprise-grade reliability.',
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <MethodologyHero />
        <PhaseTimeline />
        <ProcessTransparency />
        <MethodologyComparison />
        <MethodologyResources />
        <MethodologyFAQ />
        <MethodologyCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}