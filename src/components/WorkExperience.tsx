import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award, Sparkles, Building2 } from 'lucide-react';
import { workExperiences } from '../data/portfolioData';

export const WorkExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CFECF3]/70 text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Work Experiences
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Hands-on industry engineering experience in artificial intelligence and coding mentorship.
          </p>
        </div>

        {/* Timeline container connected with vertical line */}
        <div className="relative pl-6 sm:pl-10 space-y-12">
          
          {/* Continuous Vertical Timeline Line */}
          <div className="absolute left-[11px] sm:left-[19px] top-6 bottom-6 w-[3px] bg-gradient-to-b from-[#FF84BA] via-[#F9B2D7] to-[#CFECF3] rounded-full" />

          {workExperiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Connector Dot Node */}
              <div className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#FF84BA] shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-[#FF84BA] transition-all">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF84BA]"></span>
              </div>

              {/* Experience Card (Text only, no photo, strictly text-focused as requested) */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F9B2D7]/50 shadow-[0_10px_30px_-15px_rgba(255,132,186,0.18)] hover:border-[#FF84BA]/80 hover:shadow-[0_15px_35px_-12px_rgba(255,132,186,0.25)] transition-all">
                
                {/* Header Row: Company, Role, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                        {exp.company}
                      </h3>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FFF4F4] text-[#FF84BA] font-bold border border-[#F9B2D7]/60">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#FF84BA] font-display mt-0.5">
                      {exp.role}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#CFECF3]/50 text-slate-700 text-xs font-semibold self-start sm:self-center border border-[#CFECF3]">
                    <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullet Points with clean typography and spacing */}
                <ul className="mt-5 space-y-3.5">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF84BA] mt-2 shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags footer */}
                {exp.skillsUsed && exp.skillsUsed.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-500 mr-1.5">Focus Areas:</span>
                    {exp.skillsUsed.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#FFF4F4] text-slate-700 border border-[#F9B2D7]/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
