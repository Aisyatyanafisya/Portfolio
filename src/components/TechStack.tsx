import React, { useRef, useState, useEffect } from 'react';
import { 
  Sparkles, 
  Scan, 
  Terminal, 
  FileCode, 
  Code2, 
  Palette, 
  Database, 
  Server, 
  Layers, 
  GitBranch, 
  BarChart3, 
  PieChart, 
  Figma, 
  ChevronLeft, 
  ChevronRight,
  Layers3
} from 'lucide-react';
import { techStackData } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScrollLimits = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener('scroll', checkScrollLimits, { passive: true });
    checkScrollLimits();

    return () => slider.removeEventListener('scroll', checkScrollLimits);
  }, []);

  // Smooth continuous auto-scroll ticker when not interacting
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 5) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 180, behavior: 'smooth' });
        }
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#FF84BA]" />;
      case 'Scan': return <Scan className="w-6 h-6 text-[#f472b6]" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-[#0284c7]" />;
      case 'FileCode': return <FileCode className="w-6 h-6 text-[#f59e0b]" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-[#ea580c]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-[#06b6d4]" />;
      case 'Database': return <Database className="w-6 h-6 text-[#2563eb]" />;
      case 'Server': return <Server className="w-6 h-6 text-[#0369a1]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#ef4444]" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-[#e11d48]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#7c3aed]" />;
      case 'PieChart': return <PieChart className="w-6 h-6 text-[#d97706]" />;
      case 'Figma': return <Figma className="w-6 h-6 text-[#FF84BA]" />;
      default: return <Code2 className="w-6 h-6 text-slate-700" />;
    }
  };

  return (
    <section id="tech-stack" className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF4F4]/50 via-white/80 to-[#FFF4F4]/50 relative overflow-hidden border-y border-[#F9B2D7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9B2D7]/40 text-[#b33374] text-xs font-bold uppercase tracking-wider mb-2">
              <Layers3 className="w-3.5 h-3.5" />
              <span>Core Toolset</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              Tech Stack
            </h2>
          </div>

          {/* Left/Right Slide Action Buttons */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-white hover:bg-[#CFECF3]/50 text-slate-800 border-[#F9B2D7] shadow-xs active:scale-95'
                  : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-white hover:bg-[#CFECF3]/50 text-slate-800 border-[#F9B2D7] shadow-xs active:scale-95'
                  : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive ONE ROW Slider with Drag and Hover Effects */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex items-center gap-4 overflow-x-auto pb-4 pt-1 px-1 hide-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
          style={{ scrollBehavior: 'smooth' }}
        >
          {techStackData.map((tech) => (
            <div
              key={tech.id}
              className="flex-shrink-0 w-44 sm:w-48 bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-[#F9B2D7]/50 shadow-[0_6px_20px_-8px_rgba(255,132,186,0.18)] hover:shadow-[0_12px_28px_-6px_rgba(255,132,186,0.3)] hover:border-[#FF84BA] hover:-translate-y-1.5 transition-all duration-200 snap-start group text-center"
            >
              {/* Tech Icon inside soft badge */}
              <div
                className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110 shadow-xs"
                style={{ backgroundColor: tech.bgLight }}
              >
                {getTechIcon(tech.icon)}
              </div>

              {/* Title */}
              <h3 className="font-bold text-slate-900 text-sm sm:text-base font-display group-hover:text-[#FF84BA] transition-colors">
                {tech.name}
              </h3>

              {/* Category Pill */}
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FFF4F4] text-slate-600 border border-[#F9B2D7]/40">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
