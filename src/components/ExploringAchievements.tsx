import React from 'react';
import { Award, Compass, Trophy, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ExploringAchievementsProps {
  darkMode?: boolean;
}

export const ExploringAchievements: React.FC<ExploringAchievementsProps> = ({ darkMode = true }) => {
  const { achievements, currentlyExploring } = portfolioData;

  return (
    <section className={`py-20 relative border-t ${
      darkMode ? 'bg-[#0b0f19] border-slate-800/80' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Currently Exploring (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col items-start mb-6">
              <div className="inline-flex items-center gap-2 text-indigo-500 text-xs font-bold uppercase tracking-widest mb-2 font-mono-code">
                <span>// 04. Continuous Learning</span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <Compass className="w-6 h-6 text-indigo-500" />
                Currently Exploring
              </h2>
              <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2"></div>
            </div>

            <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Technologies and paradigms actively being researched and implemented in ongoing developments:
            </p>

            <div className="space-y-3">
              {currentlyExploring.map((item, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-4 rounded-xl flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
                  <span className={`text-xs sm:text-sm font-medium ${
                    darkMode ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col items-start mb-6">
              <div className="inline-flex items-center gap-2 text-indigo-500 text-xs font-bold uppercase tracking-widest mb-2 font-mono-code">
                <span>// 05. Milestones & Credentials</span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <Trophy className="w-6 h-6 text-amber-500" />
                Achievements & Certifications
              </h2>
              <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((item, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-5 rounded-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30 font-bold">
                        {item.tag}
                      </span>
                      <Award className="w-4 h-4 text-amber-500" />
                    </div>

                    <h3 className={`text-base font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-500 mb-2">
                      {item.subtitle}
                    </p>
                    {item.description && (
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {item.description}
                      </p>
                    )}
                  </div>

                  {item.credentialUrl && (
                    <div className="mt-4 pt-3 border-t border-slate-800/60">
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
