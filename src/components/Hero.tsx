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
                onClick={onOpenCVModal}
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
                  
                  {/* Avatar Rendering */}
                  {customAvatar ? (
                    <img
                      src={customAvatar}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    /* High-resolution SVG Stylized Soft Avatar */
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#FFF4F4] via-[#F9B2D7]/30 to-[#CFECF3]/50 flex flex-col items-center justify-center relative overflow-hidden">
                      <svg viewBox="0 0 200 200" className="w-full h-full transform translate-y-3">
                        <defs>
                          <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2D2424" />
                            <stop offset="100%" stopColor="#1E1919" />
                          </linearGradient>
                          <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FFE0D3" />
                            <stop offset="100%" stopColor="#F7C8B5" />
                          </linearGradient>
                          <linearGradient id="topGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#FF84BA" />
                            <stop offset="100%" stopColor="#F9B2D7" />
                          </linearGradient>
                        </defs>
                        {/* Soft Hair Back */}
                        <circle cx="100" cy="90" r="54" fill="url(#hairGrad)" />
                        <path d="M 52 100 Q 40 150 70 175 Q 85 185 95 185 L 105 185 Q 115 185 130 175 Q 160 150 148 100 Z" fill="url(#hairGrad)" />
                        
                        {/* Neck & Body Outfit */}
                        <rect x="90" y="115" width="20" height="25" fill="#F7C8B5" rx="5" />
                        <path d="M 60 140 Q 100 128 140 140 L 155 200 L 45 200 Z" fill="url(#topGrad)" />
                        {/* Cute Collar */}
                        <path d="M 75 140 Q 100 155 125 140 L 100 160 Z" fill="#FFFFFF" />

                        {/* Head */}
                        <ellipse cx="100" cy="85" rx="38" ry="42" fill="url(#skinGrad)" />

                        {/* Cheeks & Smile */}
                        <circle cx="78" cy="94" r="7" fill="#FF84BA" opacity="0.35" />
                        <circle cx="122" cy="94" r="7" fill="#FF84BA" opacity="0.35" />
                        <path d="M 92 95 Q 100 102 108 95" stroke="#7A3E4D" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                        {/* Eyes */}
                        <circle cx="82" cy="84" r="4.5" fill="#2B2129" />
                        <circle cx="84" cy="82" r="1.5" fill="#FFFFFF" />
                        <circle cx="118" cy="84" r="4.5" fill="#2B2129" />
                        <circle cx="120" cy="82" r="1.5" fill="#FFFFFF" />

                        {/* Eyebrows */}
                        <path d="M 75 76 Q 83 73 90 76" stroke="#4A343D" strokeWidth="2" fill="none" strokeLinecap="round" />
                        <path d="M 110 76 Q 117 73 125 76" stroke="#4A343D" strokeWidth="2" fill="none" strokeLinecap="round" />

                        {/* Front Hair Bangs */}
                        <path d="M 62 82 Q 75 55 100 55 Q 125 55 138 82 Q 120 66 100 70 Q 80 66 62 82 Z" fill="url(#hairGrad)" />
                        
                        {/* Cute Hair Clip */}
                        <circle cx="70" cy="68" r="5" fill="#CFECF3" />
                        <circle cx="70" cy="68" r="2.5" fill="#FF84BA" />
                      </svg>
                    </div>
                  )}

                  {/* Photo Customizer Overlay */}
                  <label
                    htmlFor="avatar-upload"
                    className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer rounded-full p-4 text-center backdrop-blur-xs"
                    title="Change or upload custom photo"
                  >
                    <Camera className="w-6 h-6 mb-1 text-[#FF84BA]" />
                    <span className="text-[11px] font-bold">Custom Photo</span>
                    <span className="text-[9px] text-slate-200">Click to upload image</span>
                  </label>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="hidden"
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
