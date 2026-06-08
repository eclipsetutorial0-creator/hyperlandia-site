import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import InicioSection from '@/components/landing/InicioSection';
import VipSection from '@/components/landing/VipSection';
import UniqueKitsSection from '@/components/landing/UniqueKitsSection';
import HowToBuySection from '@/components/landing/HowToBuySection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import DoacaoSection from '@/components/landing/DoacaoSection';
import CommunitySection from '@/components/landing/CommunitySection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <InicioSection />
      <VipSection />
      <UniqueKitsSection />
      <HowToBuySection />
      <FeaturesSection />
      <DoacaoSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}