import React, { useState } from 'react';
import { 
  Folder, 
  FolderOpen, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Bot, 
  Palette, 
  BarChart2, 
  LayoutGrid, 
  List, 
  FileCode2, 
  Eye, 
  ArrowUpRight, 
  Layers,
  FolderGit2,
  HardDrive
} from 'lucide-react';
import { ProjectItem } from '../types';
import { projectItems } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';

type CategoryType = 'AI & Web Development' | 'UI/UX' | 'Data Analyst';

export const ProjectsFileManager: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('AI & Web Development');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories: { id: CategoryType; label: string; icon: React.ReactNode; count: number }[] = [
    {
      id: 'AI & Web Development',
      label: 'AI & Web Development',
      icon: <Bot className="w-4 h-4 text-[#FF84BA]" />,
      count: projectItems.filter(p => p.category === 'AI & Web Development').length
    },
    {
      id: 'UI/UX',
      label: 'UI/UX Design',
      icon: <Palette className="w-4 h-4 text-[#FF84BA]" />,
      count: projectItems.filter(p => p.category === 'UI/UX').length
    },
    {
      id: 'Data Analyst',
      label: 'Data Analyst',
      icon: <BarChart2 className="w-4 h-4 text-[#0284C7]" />,
      count: projectItems.filter(p => p.category === 'Data Analyst').length
    }
  ];

  const filteredProjects = projectItems.filter(project => {
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 text-[#FF84BA] border border-[#F9B2D7] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Project Archive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Projects Explorer
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Explore curated software engineering, computer vision, UI/UX, and data analytics repositories.
          </p>
        </div>

        {/* macOS / VisionOS Styled Frosted File Manager Window (Inspired by image.png) */}
        <div className="finder-glass rounded-3xl overflow-hidden border border-white/80 shadow-[0_25px_60px_-15px_rgba(255,132,186,0.25),0_0_1px_1px_rgba(255,255,255,0.9)_inset]">
          
          {/* Top Window Bar with macOS traffic lights & Navigation Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-white/60 backdrop-blur-md border-b border-[#F9B2D7]/30 select-none">
            
            {/* Left: Window Controls (Red, Yellow, Green dots) + Path Breadcrumbs */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 shadow-xs inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 shadow-xs inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 shadow-xs inline-block" />
              </div>

              {/* Navigation Back / Forward Buttons */}
              <div className="flex items-center gap-1 ml-2 bg-white/80 p-1 rounded-xl border border-[#F9B2D7]/30 shadow-xs">
                <button
                  onClick={() => {
                    const currentIndex = categories.findIndex(c => c.id === activeCategory);
                    if (currentIndex > 0) setActiveCategory(categories[currentIndex - 1].id);
                  }}
                  className="p-1 rounded-lg hover:bg-[#FFF4F4] text-slate-600 hover:text-slate-900 transition-colors"
                  title="Previous category"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const currentIndex = categories.findIndex(c => c.id === activeCategory);
                    if (currentIndex < categories.length - 1) setActiveCategory(categories[currentIndex + 1].id);
                  }}
                  className="p-1 rounded-lg hover:bg-[#FFF4F4] text-slate-600 hover:text-slate-900 transition-colors"
                  title="Next category"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Current Active Path */}
              <div className="text-xs sm:text-sm font-bold text-slate-800 font-display flex items-center gap-1.5 ml-1">
                <span className="text-slate-400">Projects</span>
                <span className="text-slate-300">/</span>
                <span className="text-[#FF84BA]">{activeCategory}</span>
              </div>
            </div>

            {/* Right: View Toggle */}
            <div className="flex items-center gap-2.5">
              {/* View Switcher */}
              <div className="flex items-center bg-white/80 p-1 rounded-xl border border-[#F9B2D7]/30 shadow-xs">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1 rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-[#FF84BA] text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-[#FFF4F4]'
                  }`}
                  title="Grid view"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1 rounded-lg transition-all ${
                    viewMode === 'list'
                      ? 'bg-[#FF84BA] text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-[#FFF4F4]'
                  }`}
                  title="List view"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Main File Manager Workspace (Left Sidebar + Right Folder Area) */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
            
            {/* Left Sidebar (Inspired directly by screenshot: Favorites / Locations) */}
            <div className="md:col-span-4 lg:col-span-3 finder-sidebar-glass p-4 sm:p-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                
                {/* Favorites Category Section */}
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                    Favourites
                  </div>
                  <div className="space-y-1">
                    {categories.map(cat => {
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          id={`folder-btn-${cat.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left ${
                            isActive
                              ? 'bg-white/95 text-slate-900 shadow-sm border border-[#F9B2D7]/60 font-bold'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            {isActive ? (
                              <FolderOpen className="w-4 h-4 text-[#FF84BA]" />
                            ) : (
                              <Folder className="w-4 h-4 text-slate-400" />
                            )}
                            <span className="truncate">{cat.label}</span>
                          </div>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                            isActive ? 'bg-[#FFF4F4] text-[#FF84BA]' : 'bg-slate-200/50 text-slate-500'
                          }`}>
                            {cat.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* System Location Links */}
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                    Directory Info
                  </div>
                  <div className="px-3 py-2.5 rounded-xl bg-white/40 border border-white/60 text-[11px] text-slate-600 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Owner:</span>
                      <span className="font-bold text-slate-800">Aisya Tyanafisya</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Total Projects:</span>
                      <span className="font-bold text-[#FF84BA]">{projectItems.length} Repos</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Focus:</span>
                      <span className="font-semibold text-slate-700">AI, Vision & Web</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Main Content Pane (Folder Contents & Project Cards) */}
            <div className="md:col-span-8 lg:col-span-9 p-5 sm:p-6 bg-white/40 backdrop-blur-sm overflow-y-auto">
              
              {/* Folder Breadcrumb & Header info */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#F9B2D7]/30">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                    <span>{activeCategory}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#CFECF3] text-[#0284c7] font-semibold">
                      {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Click on any card to inspect system design, outcomes, and metrics.
                  </p>
                </div>
              </div>

              {/* Grid View of Project Folders */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      id={`project-card-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="group cursor-pointer bg-white/80 hover:bg-white backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#F9B2D7]/40 hover:border-[#FF84BA] shadow-[0_8px_20px_-10px_rgba(255,132,186,0.18)] hover:shadow-[0_15px_30px_-8px_rgba(255,132,186,0.3)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                    >
                      {/* Top: 3D Cute Folder Graphic & Date */}
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          {/* Stylized Folder Icon inspired by macOS */}
                          <div className="relative">
                            <div className="w-12 h-10 rounded-xl bg-gradient-to-br from-[#CFECF3] via-[#b8e5f2] to-[#FF84BA]/30 p-1.5 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                              <Folder className="w-6 h-6 text-[#0284C7] fill-[#CFECF3]" />
                            </div>
                            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#FF84BA] text-white flex items-center justify-center text-[9px] font-bold shadow-xs">
                              ✓
                            </span>
                          </div>

                          <span className="text-[11px] font-medium text-slate-400 bg-[#FFF4F4] px-2 py-0.5 rounded-lg border border-[#F9B2D7]/30">
                            {project.date}
                          </span>
                        </div>

                        {/* Project Title & Folder Name */}
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base font-display group-hover:text-[#FF84BA] transition-colors line-clamp-2 leading-snug">
                          {project.title}
                        </h4>

                        <div className="text-[11px] font-mono text-slate-400 mt-1 mb-2.5">
                          📁 {project.folderName}
                        </div>

                        {/* Tagline */}
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Bottom Tech Tags & View Button */}
                      <div className="pt-3 border-t border-slate-100 space-y-2.5">
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#FFF4F4] text-[#FF84BA] border border-[#F9B2D7]/40"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-500">
                              +{project.techStack.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-xs font-bold text-[#FF84BA] group-hover:translate-x-0.5 transition-transform pt-1">
                          <span>Inspect details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              ) : (
                /* List View */
                <div className="space-y-2.5">
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="group cursor-pointer bg-white/80 hover:bg-white backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-[#F9B2D7]/40 hover:border-[#FF84BA] shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#CFECF3] flex items-center justify-center shrink-0">
                          <Folder className="w-5 h-5 text-[#0284C7]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm group-hover:text-[#FF84BA] transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-1">
                            {project.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-auto">
                        <div className="hidden md:flex gap-1">
                          {project.techStack.slice(0, 2).map((t, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded text-[10px] bg-[#FFF4F4] text-[#FF84BA] font-semibold border border-[#F9B2D7]/40">
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs font-bold text-[#FF84BA] flex items-center gap-1">
                          Inspect <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredProjects.length === 0 && (
                <div className="text-center py-16">
                  <Folder className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-600">No project files found</p>
                  <p className="text-xs text-slate-400 mt-1">Try clearing your search query</p>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* Pop-up Inspector Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
