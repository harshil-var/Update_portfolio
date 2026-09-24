import React from 'react';
import { CheckCircle, Cpu, Bot, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface AboutProps {
  darkMode?: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode = true }) => {
  const { personal } = portfolioData;

  return (
    <section id="about" className={`py-20 relative border-t border-b ${
      darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-100/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 text-indigo-500 text-xs font-bold uppercase tracking-widest mb-2 font-mono-code">
            <span>// 01. Professional Profile</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About Me
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story & Technical Focus (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between space-y-6">
              <div>
                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block"></span>
                  AI Engineer Focused on Production-Oriented Systems
                </h3>

                <div className="space-y-4">
                  {personal.aboutBio.map((paragraph, index) => (
                    <p key={index} className={`text-sm sm:text-base leading-relaxed ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className={`pt-6 border-t grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm ${
                darkMode ? 'border-slate-800/80' : 'border-slate-200'
              }`}>
                <div className={`flex items-center gap-2.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>Agentic Workflows & Multi-Chain Systems</span>
                </div>
                <div className={`flex items-center gap-2.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>RAG & Structured Data Parsing</span>
                </div>
                <div className={`flex items-center gap-2.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>FastAPI & RESTful Microservices</span>
                </div>
                <div className={`flex items-center gap-2.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>Data Structures & System Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Engineering Focus Cards (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
            <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-500 shrink-0">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`text-base font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Agentic AI & Orchestration
                </h4>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Building autonomous search, reader, and critic agent chains with LangChain and Tavily.
                </p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-500 shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`text-base font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  RAG & Document Parsing
                </h4>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Extracting structural insights from web DOMs and PDFs with Playwright, PyPDF, and BeautifulSoup.
                </p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-500 shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`text-base font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Machine Learning & APIs
                </h4>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Benchmarking XGBoost and Random Forest models deployed over real-time FastAPI endpoints.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
