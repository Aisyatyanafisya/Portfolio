import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { educations } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="educations" className="py-16 sm:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9B2D7]/40 text-[#b33374] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Education
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Formal education, academic achievements, and foundational engineering training.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((edu, idx) => (
            <div
              key={edu.id}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#F9B2D7]/50 shadow-[0_12px_35px_-12px_rgba(255,132,186,0.2)] hover:border-[#FF84BA] hover:shadow-[0_18px_40px_-10px_rgba(255,132,186,0.3)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Institution & Score Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#CFECF3] to-[#FFF4F4] border border-[#bde4ee] flex items-center justify-center text-[#0284C7] shadow-xs">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div className="text-right">
                    <div className="inline-block px-3 py-1 rounded-xl bg-[#FFF4F4] text-[#FF84BA] font-extrabold text-xs sm:text-sm border border-[#F9B2D7] shadow-xs">
                      {edu.scoreLabel}
                    </div>
                  </div>
                </div>

                {/* Institution Name & Degree */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  {edu.institution}
                </h3>
                <div className="text-base sm:text-lg font-bold text-[#FF84BA] font-display mt-1">
                  {edu.degree}
                </div>
                <div className="text-xs font-semibold text-slate-500">
                  Major: {edu.field}
                </div>

                {/* Meta details (Period & Location) */}
                <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-5 space-y-2">
                  {edu.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#FF84BA] mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Ribbon footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 font-semibold text-slate-600">
                  <BookOpen className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Academic Record</span>
                </span>
                <span className="text-[#FF84BA] font-bold">Verified</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
