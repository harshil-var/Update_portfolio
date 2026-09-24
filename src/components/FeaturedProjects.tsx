import React, { useState } from 'react';
import { 
  ArrowRight, 
  Workflow, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface FeaturedProjectsProps {
  darkMode?: boolean;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ darkMode = true }) => {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const featuredProject = projects.find(p => p.featured) || projects[0];
  const gridProjects = projects.filter(p => p.id !== featuredProject.id);

  return (
    <section id="projects" className={`py-20 relative border-t ${
      darkMode ? 'bg-slate-950/70 border-slate-800/80' : 'bg-slate-100/50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 text-indigo-500 text-xs font-bold uppercase tracking-widest mb-2 font-mono-code">
            <span>// 03. Applied AI & Engineering Showcase</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-base mt-2 max-w-2xl ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Production-oriented applications demonstrating Agentic AI orchestration, LLM synthesis, RAG parsing, and machine learning pipelines.
          </p>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* 1. LARGE FEATURED PROJECT LAYOUT (ResearchX) */}
        <div className="glass-panel rounded-3xl border border-indigo-500/30 overflow-hidden shadow-2xl mb-14 relative group">
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-indigo-600 text-white font-mono-code text-xs font-bold rounded-bl-2xl uppercase tracking-wider shadow-md">
            ★ Primary Showcase
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* LEFT (Lg Col 6): Interactive Visual Architecture Workflow */}
            <div className={`lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r ${
              darkMode ? 'bg-[#090d16] border-slate-800' : 'bg-slate-900 text-white border-slate-700'
            }`}>
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-code text-indigo-400 mb-4">
                  <Workflow className="w-4 h-4" />
                  <span>AGENTIC ORCHESTRATION ARCHITECTURE</span>
                </div>

                {/* Workflow Diagram Box */}
                <div className="space-y-3 relative">
                  
                  {/* Step 1 */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-mono-code font-bold text-xs">
                        01
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">User Prompt & Topic Definition</div>
                        <div className="text-[11px] text-slate-400">Streamlit Interactive Input</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                      Query
                    </span>
                  </div>

                  {/* Connector Arrow */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-indigo-500/40"></div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-600/20 text-cyan-400 flex items-center justify-center font-mono-code font-bold text-xs">
                        02
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Search & Reader Agents</div>
                        <div className="text-[11px] text-slate-400">Tavily API + Requests / BeautifulSoup</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                      Extraction
                    </span>
                  </div>

                  {/* Connector Arrow */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-indigo-500/40"></div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center font-mono-code font-bold text-xs">
                        03
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Writer & Critic Feedback Loops</div>
                        <div className="text-[11px] text-slate-400">LangChain Agent Chains + Gemini API</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                      Synthesis
                    </span>
                  </div>

                  {/* Connector Arrow */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-indigo-500/40"></div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-mono-code font-bold text-xs">
                        04
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Evaluated Report Synthesis</div>
                        <div className="text-[11px] text-slate-400">Structured markdown & exportable reports</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      Output
                    </span>
                  </div>

                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono-code">Status: Live Application</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Agent Active
                </span>
              </div>
            </div>

            {/* RIGHT (Lg Col 6): Details & Actions */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono-code px-2.5 py-1 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-500/30 font-semibold">
                    {featuredProject.category}
                  </span>
                  <span className={`text-xs font-mono-code ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Multi-Agent Orchestration
                  </span>
                </div>

                <h3 className={`text-2xl sm:text-3xl font-bold mb-2 tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {featuredProject.title}
                </h3>
                <p className="text-sm font-medium text-indigo-500 mb-4">
                  {featuredProject.subtitle}
                </p>

                <p className={`text-sm leading-relaxed mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {featuredProject.shortDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className={`text-xs font-mono-code px-2.5 py-1 rounded border ${
                        darkMode ? 'bg-slate-900 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-8">
                  {featuredProject.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className={`flex items-start gap-2 text-xs sm:text-sm ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className={`flex flex-wrap items-center gap-3 pt-6 border-t ${
                darkMode ? 'border-slate-800' : 'border-slate-200'
              }`}>
                {featuredProject.liveUrl && featuredProject.liveUrl !== '#' && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/25 transition-all cursor-pointer"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <button
                  onClick={() => setActiveModalProject(featuredProject)}
                  className={`flex items-center gap-2 border px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    darkMode 
                      ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700' 
                      : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                  }`}
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 border px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                      darkMode 
                        ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700' 
                        : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                    }`}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* 2. REMAINING PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono-code px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30 font-semibold">
                    {project.category}
                  </span>
                  <span className={`text-xs font-mono-code ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Live Application
                  </span>
                </div>

                <h3 className={`text-xl font-bold transition-colors mb-1 ${
                  darkMode ? 'text-white group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'
                }`}>
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-indigo-500 mb-3">
                  {project.subtitle}
                </p>

                <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.shortDescription}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[11px] font-mono-code px-2 py-0.5 rounded border ${
                        darkMode ? 'bg-slate-900 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Points */}
                <div className={`space-y-2 mb-6 pt-4 border-t ${
                  darkMode ? 'border-slate-800/80' : 'border-slate-200'
                }`}>
                  {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className={`flex items-start gap-2 text-xs ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className={`flex items-center justify-between pt-4 border-t ${
                darkMode ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-500 hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-sm"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg border transition-all ${
                        darkMode 
                          ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800' 
                          : 'bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-300'
                      }`}
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects on GitHub */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/harshil-var"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl border font-bold text-sm sm:text-base transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 ${
              darkMode
                ? 'bg-slate-900/90 hover:bg-slate-800 text-white border-slate-700 hover:border-indigo-500/50 shadow-indigo-950/40'
                : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-300 hover:border-indigo-400 shadow-slate-200'
            }`}
          >
            <GithubIcon className="w-5 h-5 text-indigo-500" />
            <span>View More Projects on GitHub</span>
            <ArrowRight className="w-4 h-4 text-indigo-400" />
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        darkMode={darkMode}
      />
    </section>
  );
};
