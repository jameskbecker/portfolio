import AboutSection from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function IndexPage() {
  return (
    <div className="flex-1 flex-col overflow-auto overscroll-contain scroll-smooth">
      <HeroSection />
      <AboutSection />
      <ShowcaseSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
