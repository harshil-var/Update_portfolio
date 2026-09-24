import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Code2, 
  Mail, 
  MapPin 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  darkMode?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, darkMode = true }) => {
  const { personal } = portfolioData;

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow elements */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[120px] rounded-full pointer-events-none ${
        darkMode ? 'bg-indigo-600/15' : 'bg-indigo-500/10'
      }`} />
      <div className={`absolute top-1/3 right-10 w-[300px] h-[300px] blur-[100px] rounded-full pointer-events-none ${
        darkMode ? 'bg-cyan-500/10' : 'bg-cyan-500/5'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start max-w-4xl">
          
          {/* Status Badge */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-sm backdrop-blur-md ${
            darkMode 
              ? 'bg-indigo-950/80 border border-indigo-500/30 text-indigo-300' 
              : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Available for AI Engineer & ML Roles</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-500">{personal.name}</span>
          </h1>

          {/* Professional Headline */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-bold text-indigo-500 mb-6 font-mono-code">
            <span>AI Engineer</span>
            <span className={darkMode ? "text-slate-600" : "text-slate-300"}>•</span>
            <span>Generative AI</span>
            <span className={darkMode ? "text-slate-600" : "text-slate-300"}>•</span>
            <span>Agentic AI</span>
            <span className={darkMode ? "text-slate-600" : "text-slate-300"}>•</span>
            <span>RAG Systems</span>
          </div>

          {/* Short Professional Introduction */}
          <p className={`text-base sm:text-xl leading-relaxed mb-8 max-w-3xl ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            AI Engineer focused on building real-world, production-oriented AI and data applications. 
            Experienced in designing <strong className={darkMode ? "text-white font-semibold" : "text-slate-900 font-semibold"}>autonomous LLM agent workflows</strong>, <strong className={darkMode ? "text-white font-semibold" : "text-slate-900 font-semibold"}>RAG architectures</strong>, and robust <strong className={darkMode ? "text-white font-semibold" : "text-slate-900 font-semibold"}>FastAPI & Streamlit backends</strong> with Python and relational data systems.
          </p>

          {/* Primary CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenResume}
              className={`inline-flex items-center justify-center gap-2 border px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-sm ${
                darkMode 
                  ? 'bg-slate-800/80 hover:bg-slate-800 text-slate-100 border-slate-700 hover:border-indigo-500/50' 
                  : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 hover:border-indigo-400'
              }`}
            >
              <FileText className="w-5 h-5 text-indigo-500" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social & Contact Links */}
          <div className={`flex flex-wrap items-center gap-4 pt-6 border-t w-full ${
            darkMode ? 'border-slate-800/80' : 'border-slate-200'
          }`}>
            <span className={`text-xs font-semibold uppercase tracking-wider mr-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Connect:
            </span>
            
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                darkMode 
                  ? 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-white' 
                  : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900'
              }`}
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-slate-400" />
              <span>GitHub</span>
            </a>

            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                darkMode 
                  ? 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-white' 
                  : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900'
              }`}
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-indigo-500" />
              <span>LinkedIn</span>
            </a>

            <a 
              href={personal.leetcode} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                darkMode 
                  ? 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-white' 
                  : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900'
              }`}
              title="LeetCode Profile"
            >
              <Code2 className="w-4 h-4 text-amber-500" />
              <span>LeetCode (200+)</span>
            </a>

            <a 
              href={`mailto:${personal.email}`}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                darkMode 
                  ? 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-white' 
                  : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900'
              }`}
              title="Send Email"
            >
              <Mail className="w-4 h-4 text-indigo-500" />
              <span>{personal.email}</span>
            </a>

            <div className={`inline-flex items-center gap-1.5 text-xs ml-auto hidden lg:flex ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{personal.location}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
