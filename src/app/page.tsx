import Navbar from '@/components/HomePage/Navbar';
import HeroHome from '@/components/HomePage/HeroHome';
import AboutSection from '@/components/HomePage/AboutSection';
import MissionSection from '@/components/HomePage/MissionSection';

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
