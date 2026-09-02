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
            Skills & Capabillities
          </h2>
        </div>

        {/* OS Control Center Style Dashboard */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[#F9B2D7]/50 shadow-[0_20px_50px_-15px_rgba(255,132,186,0.18)] space-y-8">

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
