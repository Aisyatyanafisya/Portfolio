import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Cpu, 
  Mail, 
  Phone, 
  Globe, 
  Github, 
  Linkedin, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { personalInfo, workExperiences, educations, techStackData, skillCategories, contactInfo } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const cvText = `
==================================================
AISYA TYANAFISYA - SOFTWARE ENGINEERING ENTHUSIAST
==================================================
Email: ${contactInfo.email}
WhatsApp: ${contactInfo.whatsapp}
LinkedIn: ${contactInfo.linkedinUrl}
GitHub: ${contactInfo.githubUrl}
Instagram: @${contactInfo.instagram}

SUMMARY:
${personalInfo.bio}

--------------------------------------------------
WORK EXPERIENCE
--------------------------------------------------
1. PT Indo Tambangraya Megah – AI Engineer Intern (June 2025 – June 2026)
   - Developed AI-based applications for safety monitoring (ANPR) integrated into industrial operational systems.
   - Handled end-to-end data preparation for 10,000+ images across 6 projects, including data collection, annotation using Label Studio, and labeling to train and improve AI model robustness.
   - Performed data processing and pipeline management to ensure clean, structured datasets ready for model training across varying environmental conditions.
   - Achieved >90% plate recognition accuracy by evaluating and comparing multiple computer vision and OCR approaches including LLM-based models.
   - Documented AI workflows and system designs, and collaborated with cross-functional teams to ensure AI components met operational reliability requirements.

2. Timedoor Academy – Coding Mentor (September 2024 – May 2025)
   - Mentored students in Python programming and computational thinking through project-based learning.
   - Guided a student to achieve "Best Project Award" in a coding bootcamp.

--------------------------------------------------
EDUCATION
--------------------------------------------------
1. College of Vocational Studies IPB University (2022 – 2026)
   Bachelor of Applied Software Engineering
   GPA: 3.69 / 4.00

2. SMAN 8 Tangerang Selatan (2019 – 2022)
   Science
   Final Grade: 86

--------------------------------------------------
TECH STACK & SKILLS
--------------------------------------------------
Tech Stack: LLM API, YOLO, MySQL, PostgreSQL, HTML, CSS, JavaScript, Python, Git, Laravel, Tableau, Power BI, Figma
Hard Skills: Python, Machine Learning, Computer Vision, Data Analysis, SQL, API Integration, Git, YOLO
Soft Skills: Collaboration, Problem Solving, Analytical Thinking, Communication, Documentation
Tools: Visual Studio Code, Git, Windows Environment, Tableau, Power BI, Microsoft Office, Google Workspace, Jupyter Notebook, Google Colab, Figma
Languages: Bahasa Indonesia (Native), English (Professional Working Proficiency)
==================================================
    `.trim();

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_Aisya_Tyanafisya_Software_Engineering.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity print:hidden"
        onClick={onClose}
      />

      {/* CV Paper Card */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#FFF4F4]/95 sm:bg-white backdrop-blur-2xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(255,132,186,0.35)] z-10 max-h-[90vh] overflow-y-auto print:max-h-none print:shadow-none print:border-none print:rounded-none">
        
        {/* Top Floating Action Bar (Hidden during print) */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-white/90 backdrop-blur-md border-b border-[#F9B2D7]/40 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="text-xs font-bold text-slate-700 ml-2 font-display">
              Curriculum Vitae — Aisya Tyanafisya
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#CFECF3] hover:bg-[#b5e4f0] text-slate-800 text-xs font-bold border border-[#b2dfeb] transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#FF84BA] to-[#F9B2D7] text-white text-xs font-bold shadow-xs hover:opacity-90 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Text CV</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Layout */}
        <div className="p-6 sm:p-10 space-y-8 print:p-0 text-slate-800 font-sans">
          
          {/* Header */}
          <div className="border-b-2 border-[#FF84BA] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                  {personalInfo.name}
                </h1>
                <div className="text-lg font-bold text-[#FF84BA] mt-1 font-display">
                  {personalInfo.title}
                </div>
                <p className="text-xs text-slate-600 mt-2 max-w-xl">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Contact Info Pills */}
              <div className="space-y-1.5 text-xs text-slate-600 shrink-0">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#FF84BA]" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>WhatsApp: {contactInfo.whatsapp}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
                  <span>{contactInfo.linkedin}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-slate-800" />
                  <span>{contactInfo.github}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-base font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 text-[#FF84BA] border-b border-slate-200 pb-1 mb-4 font-display">
              <Briefcase className="w-4 h-4 text-[#FF84BA]" />
              <span>Work Experiences</span>
            </h2>

            <div className="space-y-5">
              {workExperiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <div className="font-bold text-slate-900">
                      {exp.company} — <span className="text-[#FF84BA]">{exp.role}</span>
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">{exp.period}</div>
                  </div>

                  <ul className="mt-2 space-y-1.5">
                    {exp.highlights.map((bullet, idx) => (
                      <li key={idx} className="text-xs text-slate-700 leading-relaxed flex items-start gap-2">
                        <span className="text-[#FF84BA] font-bold">&bull;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-base font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 text-[#FF84BA] border-b border-slate-200 pb-1 mb-4 font-display">
              <GraduationCap className="w-4 h-4 text-[#FF84BA]" />
              <span>Education</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {educations.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-[#FFF4F4]/50 border border-[#F9B2D7]/40">
                  <div className="font-bold text-sm text-slate-900">{edu.institution}</div>
                  <div className="text-xs font-semibold text-[#FF84BA]">{edu.degree}</div>
                  <div className="text-[11px] text-slate-500">{edu.period} &bull; {edu.field}</div>
                  <div className="text-xs font-bold text-slate-800 mt-1">{edu.scoreLabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Skills */}
          <div>
            <h2 className="text-base font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 text-[#FF84BA] border-b border-slate-200 pb-1 mb-4 font-display">
              <Cpu className="w-4 h-4 text-[#FF84BA]" />
              <span>Tech Stack & Skill Matrix</span>
            </h2>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-slate-900">Tech Stack: </span>
                <span className="text-slate-700">
                  LLM API, YOLO, MySQL, PostgreSQL, HTML, CSS, JavaScript, Python, Git, Laravel, Tableau, Power BI, Figma
                </span>
              </div>

              <div>
                <span className="font-bold text-slate-900">Hard Skills: </span>
                <span className="text-slate-700">
                  Python, Machine Learning, Computer Vision, Data Analysis, SQL, API Integration, Git, YOLO
                </span>
              </div>

              <div>
                <span className="font-bold text-slate-900">Soft Skills: </span>
                <span className="text-slate-700">
                  Collaboration, Problem Solving, Analytical Thinking, Communication, Documentation
                </span>
              </div>

              <div>
                <span className="font-bold text-slate-900">Tools & Platforms: </span>
                <span className="text-slate-700">
                  Visual Studio Code, Git, Windows Environment, Tableau, Power BI, Microsoft Office, Google Workspace, Jupyter Notebook, Google Colab, Figma
                </span>
              </div>

              <div>
                <span className="font-bold text-slate-900">Languages: </span>
                <span className="text-slate-700">
                  Bahasa Indonesia (Native), English (Professional Working Proficiency)
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
