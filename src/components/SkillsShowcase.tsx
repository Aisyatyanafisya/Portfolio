import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  HeartHandshake, 
  Wrench, 
  Globe, 
  CheckCircle2, 
  Sliders, 
  Zap, 
  Terminal, 
  BarChart, 
  Layers,
  Award
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; context?: string; level?: string } | null>({
    name: 'Computer Vision & YOLO',
    context: 'Fine-tuned deep learning models for license plate localization (ANPR) and real-time safety monitoring.',
    level: 'Advanced'
  });

  const allSkillsFlat = skillCategories.flatMap(cat => 
    cat.items.map(item => ({
      ...item,
      categoryType: cat.type,
      categoryTitle: cat.title
    }))
  );

  const displayedSkills = activeTab === 'all' 
    ? allSkillsFlat 
    : allSkillsFlat.filter(s => s.categoryType === activeTab);

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-gradient-to-b from-transparent via-[#FFF4F4]/70 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#CFECF3]/70 text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Skills & Capabilities Hub
          </h2>
        </div>

        {/* OS Control Center Style Dashboard */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[#F9B2D7]/50 shadow-[0_20px_50px_-15px_rgba(255,132,186,0.18)] space-y-8">
          
          {/* Top Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-2 border-b border-slate-100">
            {[
              { id: 'all', label: 'All Capabilities', icon: <Sliders className="w-3.5 h-3.5" /> },
              { id: 'hard', label: 'Hard Skills (AI & Eng)', icon: <Cpu className="w-3.5 h-3.5" /> },
              { id: 'soft', label: 'Soft Skills', icon: <HeartHandshake className="w-3.5 h-3.5" /> },
              { id: 'tools', label: 'Tools & Environments', icon: <Wrench className="w-3.5 h-3.5" /> },
              { id: 'languages', label: 'Languages', icon: <Globe className="w-3.5 h-3.5" /> }
            ].map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`skills-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FF84BA] text-white shadow-sm shadow-[#FF84BA]/30 scale-102'
                      : 'bg-[#FFF4F4] text-slate-700 hover:bg-[#CFECF3]/60 border border-[#F9B2D7]/30'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Clean Skill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {displayedSkills.map((skill, sIdx) => {
              const isSelected = selectedSkill?.name === skill.name;
              return (
                <div
                  key={sIdx}
                  onClick={() => setSelectedSkill({ name: skill.name, context: skill.context, level: skill.level })}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-br from-white to-[#FFF4F4] border-[#FF84BA] shadow-[0_8px_20px_rgba(255,132,186,0.25)] ring-2 ring-[#FF84BA]/20 -translate-y-0.5'
                      : 'bg-white/90 border-[#F9B2D7]/40 hover:border-[#FF84BA]/70 hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF84BA] bg-[#FFF4F4] px-2 py-0.5 rounded-md border border-[#F9B2D7]/40">
                        {skill.categoryTitle}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 font-display mt-1">
                      {skill.name}
                    </h4>

                    {skill.context && (
                      <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                        {skill.context}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Skill Spotlight Panel */}
          {selectedSkill && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FFF4F4] via-white to-[#CFECF3]/40 border border-[#F9B2D7]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF84BA] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#FF84BA] uppercase tracking-wider">
                    Selected Skill Spotlight
                  </div>
                  <div className="text-base font-bold text-slate-900 font-display">
                    {selectedSkill.name} {selectedSkill.level && `• ${selectedSkill.level}`}
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5 max-w-2xl">
                    {selectedSkill.context || 'Applied across software engineering, computer vision pipelines, and academic courseworks.'}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#F9B2D7]/60 text-xs font-bold text-slate-700 shadow-xs self-start sm:self-center">
                <Award className="w-3.5 h-3.5 text-[#FF84BA]" />
                <span>Verified in Portfolio Repos</span>
              </div>
            </div>
          )}

          {/* 4 Categorical Summaries in One Cohesive Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                className="p-4 rounded-2xl bg-[#FFF4F4]/50 border border-[#F9B2D7]/40 text-left space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-white border border-[#F9B2D7]/60 text-[#FF84BA]">
                    {cat.type === 'hard' && <Cpu className="w-4 h-4" />}
                    {cat.type === 'soft' && <HeartHandshake className="w-4 h-4" />}
                    {cat.type === 'tools' && <Wrench className="w-4 h-4" />}
                    {cat.type === 'languages' && <Globe className="w-4 h-4" />}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm font-display">{cat.title}</h4>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  {cat.items.map(i => i.name).join(', ')}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
