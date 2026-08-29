import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, FolderGit2, Download, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { id: 'intro', label: 'Introduction' },
    { id: 'experience', label: 'Work Experiences' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'educations', label: 'Educations' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionElements = navLinks.map(link => ({
        id: link.id,
        el: document.getElementById(link.id)
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 max-w-7xl mx-auto pointer-events-none">
      {/* Floating rectangular bar with subtle curves */}
      <nav
        id="main-navbar"
        className={`pointer-events-auto w-full mx-auto transition-all duration-300 rounded-2xl border ${
          isScrolled
            ? 'bg-[#FFF4F4]/85 backdrop-blur-md border-[#F9B2D7]/60 shadow-[0_12px_30px_-10px_rgba(255,132,186,0.22)]'
            : 'bg-[#FFF4F4]/95 backdrop-blur-sm border-[#F9B2D7]/40 shadow-[0_8px_20px_-8px_rgba(249,178,215,0.2)]'
        } px-4 sm:px-6 py-2.5 sm:py-3`}
      >
        <div className="flex items-center justify-between gap-2">
          {/* Logo / Brand Name */}
          <button
            id="nav-brand-logo"
            onClick={() => scrollToSection('intro')}
            className="flex items-center gap-2 text-left group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF84BA] to-[#F9B2D7] flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              AT
            </div>
            <div>
              <span className="font-bold text-slate-800 text-sm sm:text-base tracking-tight block group-hover:text-[#FF84BA] transition-colors font-display">
                Aisya Tyanafisya
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase block -mt-0.5">
                Software Engineer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map(link => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#FF84BA] text-white shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-[#CFECF3]/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Quick Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              id="nav-quick-cv-btn"
              onClick={onOpenCVModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#CFECF3] hover:bg-[#b8e5f0] text-slate-800 border border-[#b3dfea] transition-all hover:shadow-sm active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-[#FF84BA]" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/80 border border-[#F9B2D7]/50 text-slate-700 hover:bg-[#FFF4F4] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-dropdown"
            className="lg:hidden mt-3 pt-3 border-t border-[#F9B2D7]/40 grid grid-cols-2 gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {navLinks.map(link => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all ${
                    isActive
                      ? 'bg-[#FF84BA] text-white font-bold shadow-sm'
                      : 'text-slate-700 hover:bg-[#CFECF3]/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="col-span-2 pt-2 flex items-center justify-between gap-2 border-t border-[#F9B2D7]/20 mt-1">
              <button
                onClick={onOpenCVModal}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#FF84BA] to-[#F9B2D7] text-white shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>View & Download CV</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
