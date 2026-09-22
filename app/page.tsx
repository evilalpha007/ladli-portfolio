import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <PortfolioSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
