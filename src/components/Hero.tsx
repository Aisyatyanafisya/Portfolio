import React, { useState } from 'react';
import { Sparkles, Download, ArrowDown, Camera } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenCVModal: () => void;
  onScrollToExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal, onScrollToExplore }) => {
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="intro" className="pt-28 sm:pt-36 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Subtle background ambient pastel glows */}
      <div className="absolute top-10 right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#CFECF3]/70 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#F9B2D7]/40 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Name, Title, Summary & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#F9B2D7] shadow-xs text-xs font-bold text-[#FF84BA]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF84BA]" />
              <span>Hello there! Welcome to my portfolio</span>
            </div>

            {/* Name and Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-display">
                Hi, I'm{' '}
                <span className="relative inline-block text-slate-900">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF84BA] via-[#f06292] to-[#ec4899]">
                    {personalInfo.name}
                  </span>
                  <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#CFECF3]/60 -z-0 rounded-sm"></span>
                </span>
              </h1>
              
              <div className="text-lg sm:text-2xl font-bold text-slate-700 font-display pt-1">
                <span>{personalInfo.title}</span>
              </div>
            </div>

            {/* Personal Summary / Bio */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* Primary Action Buttons placed on the left, directly below the summary */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                id="hero-btn-get-to-know"
                onClick={onScrollToExplore}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#FF84BA] to-[#f472b6] text-white shadow-[0_6px_20px_rgba(255,132,186,0.35)] hover:shadow-[0_8px_25px_rgba(255,132,186,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get to Know</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-download-cv"
                onClick={personalInfo.downloadCV ? () => window.open(personalInfo.downloadCV, '_blank') : onOpenCVModal}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-[#CFECF3] hover:bg-[#bce6f2] text-slate-800 border border-[#b0e0ee] shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#FF84BA]" />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Circular Profile Picture */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Circular profile frame */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-92 lg:h-92 rounded-full p-2.5 bg-gradient-to-tr from-[#FF84BA] via-[#CFECF3] to-[#F9B2D7] shadow-[0_20px_45px_-12px_rgba(255,132,186,0.3)]">
                {/* Inner white container */}
                <div className="w-full h-full rounded-full bg-white p-2.5 overflow-hidden flex items-center justify-center relative group">
                  <img
                      src={personalInfo.profilePic || customAvatar}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-full"
                    />              
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
