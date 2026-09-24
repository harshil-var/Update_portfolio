import React from 'react';
import { Sparkles, Code2, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  darkMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode = true }) => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`border-t py-12 text-xs sm:text-sm relative ${
      darkMode ? 'bg-[#070a12] border-slate-800/80 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
          darkMode ? 'border-slate-800/80' : 'border-slate-200'
        }`}>
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-indigo-500/20">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                darkMode ? 'bg-slate-950 text-indigo-400' : 'bg-white text-indigo-600'
              }`}>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className={`text-base font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {personal.name}
              </div>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className={`flex flex-wrap items-center justify-center gap-6 text-xs font-medium ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
              }`}
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
              }`}
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-indigo-500" />
            </a>

            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
              }`}
              title="LeetCode"
            >
              <Code2 className="w-4 h-4 text-amber-500" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className={`p-2 rounded-lg border transition-all ${
                darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
              }`}
              title="Email"
            >
              <Mail className="w-4 h-4 text-indigo-500" />
            </a>
          </div>

        </div>

        {/* Bottom copyright & Scroll top */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs ${
          darkMode ? 'text-slate-400' : 'text-slate-500'
        }`}>
          <div>
            © {new Date().getFullYear()} {personal.name}. Built with care.
          </div>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
              darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
