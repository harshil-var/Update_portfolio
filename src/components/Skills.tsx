import React, { useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface SkillsProps {
  darkMode?: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode = true }) => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Bot className="w-5 h-5 text-indigo-500" />;
      case 1: return <Cpu className="w-5 h-5 text-cyan-500" />;
      case 2: return <Code2 className="w-5 h-5 text-emerald-500" />;
      case 3: return <Server className="w-5 h-5 text-purple-500" />;
      case 4: return <Database className="w-5 h-5 text-amber-500" />;
      case 5: return <Wrench className="w-5 h-5 text-rose-500" />;
      default: return <Sparkles className="w-5 h-5 text-indigo-500" />;
    }
  };

  const filteredCategories = selectedCategory
    ? skills.filter(cat => cat.title === selectedCategory)
    : skills;

  return (
    <section id="skills" className={`py-20 relative ${
      darkMode ? 'bg-[#0b0f19]' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 text-indigo-500 text-xs font-bold uppercase tracking-widest mb-2 font-mono-code">
            <span>// 02. Technical Arsenal</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Technical Skills
          </h2>
          <p className={`text-base mt-2 max-w-2xl ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Categorized technical capabilities strictly supported by resume experience across AI, Machine Learning, Data Structures, and Microservices.
          </p>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === null
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : darkMode
                  ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
            }`}
          >
            All Categories ({skills.reduce((acc, cat) => acc + cat.skills.length, 0)} Skills)
          </button>

          {skills.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === category.title
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : darkMode
                    ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const icon = getCategoryIcon(skills.findIndex(s => s.title === category.title));
            return (
              <div
                key={category.title}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl border transition-colors ${
                      darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
                    }`}>
                      {icon}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold transition-colors ${
                        darkMode ? 'text-white group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'
                      }`}>
                        {category.title}
                      </h3>
                      <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border font-mono-code transition-all ${
                          darkMode 
                            ? 'bg-slate-900/90 text-slate-200 border-slate-800 hover:border-indigo-500/50' 
                            : 'bg-slate-100 text-slate-800 border-slate-300 hover:border-indigo-400'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs ${
                  darkMode ? 'border-slate-800/60 text-slate-400' : 'border-slate-200 text-slate-500'
                }`}>
                  <span>{category.skills.length} core technologies</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
