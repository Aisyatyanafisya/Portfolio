import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  Calendar, 
  CheckCircle2, 
  TrendingUp, 
  Folder, 
  Maximize2,
  FileCode,
  Laptop
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Frosted pink/grey blur backdrop overlay */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Pop-up Window Card with macOS / VisionOS frosted glass aesthetic */}
      <div
        id={`project-modal-${project.id}`}
        className="relative w-full max-w-3xl rounded-3xl bg-[#FFF4F4]/90 sm:bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(255,132,186,0.35),0_0_1px_1px_rgba(255,255,255,0.9)_inset] overflow-hidden z-10 animate-in zoom-in-95 duration-200"
      >
        {/* macOS Style Window Title Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#F9B2D7]/40 bg-white/60 backdrop-blur-md select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] hover:opacity-80 transition-opacity border border-[#E0443E]/50 flex items-center justify-center group cursor-pointer"
              title="Close"
            >
              <X className="w-2.5 h-2.5 text-[#5c0000] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
            
            <div className="ml-3 text-xs font-mono text-slate-500 flex items-center gap-1.5">
              <Folder className="w-3.5 h-3.5 text-[#FF84BA]" />
              <span>Projects / {project.category} / {project.folderName}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#CFECF3] text-[#0284C7] border border-[#bce4ef]">
                  {project.category}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {project.date}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-2 tracking-tight">
                {project.title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1 font-medium">
                {project.tagline}
              </p>
            </div>

            <div className="px-3.5 py-1.5 rounded-xl bg-white/90 border border-[#F9B2D7]/60 text-slate-700 text-xs font-semibold self-start shrink-0 shadow-xs">
              Role: <span className="font-bold text-[#FF84BA]">{project.role}</span>
            </div>
          </div>

          {/* Projects Preview Card */}
          <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-[#FFF4F4] via-white to-[#CFECF3]/40 border border-[#F9B2D7]/40 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <Laptop className="w-4 h-4 text-[#FF84BA]" />
              <span>Projects Preview</span>
            </div>

            {/* Project Picture */}
            <div className="w-full rounded-xl overflow-hidden border border-[#F9B2D7]/30 bg-slate-100 shadow-xs">
              <img
                src={project.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'}
                alt={`${project.title} Preview`}
                className="w-full h-56 sm:h-72 object-cover object-center transition-transform duration-300 hover:scale-[1.01]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>

          {/* Project Overview */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 font-display mb-2">
              Detailed Overview
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 font-display mb-2.5">
              Key Features & Contributions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 border border-[#F9B2D7]/40 text-xs text-slate-700 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FF84BA] mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Measurable Outcomes / Metrics */}
          {project.metricsOrOutcomes && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 font-display mb-2 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#FF84BA]" />
                <span>Measurable Outcomes</span>
              </h4>
              <div className="space-y-1.5">
                {project.metricsOrOutcomes.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-2.5 rounded-xl bg-[#CFECF3]/40 border border-[#CFECF3] text-xs font-semibold text-slate-800 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]"></span>
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 font-display mb-2">
              Tech Stack & Tools
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-xl text-xs font-bold bg-[#FFF4F4] text-[#FF84BA] border border-[#F9B2D7]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action buttons */}
          <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-500 font-mono">
              Directory: ~/Projects/{project.category}/{project.folderName}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                Close Inspector
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
