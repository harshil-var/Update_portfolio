import React from 'react';
import { X, Bot, CheckCircle2, Cpu, Sparkles, Workflow, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode?: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, darkMode = true }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className={`relative w-full max-w-4xl border rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col ${
          darkMode ? 'bg-[#0e1424] border-slate-700/80' : 'bg-white border-slate-300'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`flex items-center justify-between px-6 py-5 border-b sticky top-0 z-20 ${
          darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-500">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                  {project.category}
                </span>
                <span className={`text-xs font-mono-code ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Case Study
                </span>
              </div>
              <h3 className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {project.title} — <span className="text-indigo-500 font-normal">{project.subtitle}</span>
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Action links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Application</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2 font-mono-code ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 text-xs font-mono-code font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-5 rounded-xl border ${
              darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-rose-50 border-rose-200'
            }`}>
              <h4 className="text-sm font-bold text-rose-500 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>
                The Problem Statement
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {project.problem}
              </p>
            </div>

            <div className={`p-5 rounded-xl border ${
              darkMode ? 'bg-indigo-950/30 border-indigo-500/20' : 'bg-indigo-50 border-indigo-200'
            }`}>
              <h4 className="text-sm font-bold text-indigo-500 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block"></span>
                The Technical Solution
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architectural Workflow */}
          <div>
            <h4 className={`text-sm font-bold flex items-center gap-2 mb-3 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <Workflow className="w-4 h-4 text-indigo-500" />
              Pipeline Architecture & Workflow Steps
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.architecture.map((step, idx) => (
                <div 
                  key={idx}
                  className={`p-3.5 rounded-lg border flex items-start gap-3 ${
                    darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded bg-indigo-600/20 text-indigo-500 font-mono-code text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span className={`text-xs font-medium ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className={`text-sm font-bold flex items-center gap-2 mb-3 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <Sparkles className="w-4 h-4 text-cyan-500" />
              Key Implementation Features
            </h4>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className={`flex items-start gap-3 text-xs sm:text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Highlights */}
          <div className={`p-5 rounded-xl border ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h4 className={`text-sm font-bold flex items-center gap-2 mb-2 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <Cpu className="w-4 h-4 text-emerald-500" />
              Technical Engineering Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
              {project.technicalHighlights.map((high, idx) => (
                <div key={idx} className={`flex items-center gap-2 text-xs ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{high}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`px-6 py-4 border-t flex items-center justify-between text-xs ${
          darkMode ? 'bg-slate-900/90 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
        }`}>
          <span>{project.impact}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
