import Navbar from '@/components/Navbar';
import Hero3D from '@/components/Hero3D';
import ProofTiles from '@/components/ProofTiles';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import Services from '@/components/Services';
import Automations from '@/components/Automations';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero3D />
      <ProofTiles />
      <HowItWorks />
      <About />
      <Services />
      <Automations />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
