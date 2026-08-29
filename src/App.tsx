import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkExperienceSection } from './components/WorkExperience';
import { TechStackSection } from './components/TechStack';
import { ProjectsFileManager } from './components/ProjectsFileManager';
import { SkillsShowcase } from './components/SkillsShowcase';
import { EducationSection } from './components/Education';
import { ContactSection } from './components/ContactSection';
import { CVModal } from './components/CVModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF4F4] text-slate-800 selection:bg-[#F9B2D7] selection:text-slate-900 overflow-x-hidden">
      
      {/* Floating Top Navbar with gentle curves */}
      <Navbar onOpenCVModal={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Section 1 & 2: Introduction / Hero */}
        <Hero
          onOpenCVModal={() => setCvModalOpen(true)}
          onScrollToExplore={() => handleScrollToSection('experience')}
        />

        {/* Section 3: Work Experiences (Connected line, text-only cards) */}
        <WorkExperienceSection />

        {/* Section 4: Tech Stack (Interactive one-row slider with hover effects & icons) */}
        <TechStackSection />

        {/* Section 5: Projects (macOS Finder / File Manager inspired interactive window & frosted modal) */}
        <ProjectsFileManager />

        {/* Section 6: Skills (Creative & efficient OS Control Center capability hub) */}
        <SkillsShowcase />

        {/* Section 7: Educations (IPB University & SMAN 8 Tangsel) */}
        <EducationSection />

        {/* Section 8: Let's Get in Touch (Contact Section) */}
        <ContactSection />
      </main>

      {/* Downloadable / Printable CV Modal */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

    </div>
  );
}

