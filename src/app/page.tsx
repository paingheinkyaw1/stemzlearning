import Navbar from '@/components/Navbar';
import HeroHome from '@/components/HeroHome';
import AboutSection from '@/components/AboutSection';
import MissionSection from '@/components/MissionSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroHome />
      <AboutSection />
      <MissionSection />
    </>
  );
}
