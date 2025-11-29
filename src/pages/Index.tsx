import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingElements from '@/components/FloatingElements';
import MouseFollowGlow from '@/components/MouseFollowGlow';
import GridBackground from '@/components/GridBackground';

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background relative">
        <CustomCursor />
        <GridBackground />
        <FloatingElements />
        <MouseFollowGlow />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
