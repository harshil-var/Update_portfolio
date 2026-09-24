import React from 'react';
import { X, FileText, Printer } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, darkMode = true }) => {
  if (!isOpen) return null;

  const { personal, education, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className={`relative w-full max-w-4xl border rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col ${
          darkMode ? 'bg-[#0e1424] border-slate-700/80' : 'bg-white border-slate-300'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Toolbar */}
        <div className={`flex items-center justify-between px-6 py-4 border-b sticky top-0 z-20 ${
          darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-500" />
            <h3 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Curriculum Vitae — {personal.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
              title="Print / Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-colors ${
                darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
              }`}
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className={`p-6 sm:p-10 overflow-y-auto space-y-8 font-sans ${
          darkMode ? 'bg-slate-950 text-slate-200' : 'bg-white text-slate-800'
        }`}>
          
          {/* Resume Header */}
          <div className={`text-center border-b pb-6 space-y-2 ${
            darkMode ? 'border-slate-800' : 'border-slate-200'
          }`}>
            <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {personal.name}
            </h1>
            
            <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono-code pt-1 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <span>{personal.location}</span>
              <span>•</span>
              <a href={`mailto:${personal.email}`} className="text-indigo-500 hover:underline">{personal.email}</a>
              <span>•</span>
              <span>{personal.phone}</span>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">GitHub</a>
              <span>•</span>
              <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">LeetCode</a>
              <span>•</span>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">LinkedIn</a>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="space-y-2">
            <h2 className={`text-sm font-bold uppercase tracking-wider text-indigo-500 border-b pb-1 font-mono-code ${
              darkMode ? 'border-slate-800' : 'border-slate-200'
            }`}>
              SUMMARY
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {personal.summary}
            </p>
          </div>

          {/* EDUCATION */}
          <div className="space-y-3">
            <h2 className={`text-sm font-bold uppercase tracking-wider text-indigo-500 border-b pb-1 font-mono-code ${
              darkMode ? 'border-slate-800' : 'border-slate-200'
            }`}>
              EDUCATION
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs sm:text-sm">
                  <div>
                    <div className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{edu.institution} <span className={`font-normal ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>— {edu.location}</span></div>
                    <div className="text-indigo-500 font-medium">{edu.degree}</div>
                    {edu.coursework && (
                      <div className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        <strong className={darkMode ? "text-slate-300" : "text-slate-800"}>Coursework:</strong> {edu.coursework.join(', ')}
                      </div>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`font-mono-code ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{edu.period}</div>
                    <div className="font-mono-code font-bold text-indigo-500">{edu.gpaOrScore}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div className="space-y-4">
            <h2 className={`text-sm font-bold uppercase tracking-wider text-indigo-500 border-b pb-1 font-mono-code ${
              darkMode ? 'border-slate-800' : 'border-slate-200'
            }`}>
              PROJECTS
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <div className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {proj.title} <span className="font-normal text-indigo-500">— {proj.subtitle}</span>
                    </div>
                    <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      Live App
                    </span>
                  </div>

                  <div className={`text-xs font-mono-code ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {proj.tags.join(' | ')}
                  </div>

                  <ul className={`list-disc list-inside space-y-1 text-xs sm:text-sm leading-relaxed pl-1 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {proj.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <div className="space-y-2">
            <h2 className={`text-sm font-bold uppercase tracking-wider text-indigo-500 border-b pb-1 font-mono-code ${
              darkMode ? 'border-slate-800' : 'border-slate-200'
            }`}>
              SKILLS
            </h2>
            <div className={`space-y-1 text-xs sm:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              <div><strong className={darkMode ? "text-white" : "text-slate-900"}>Languages:</strong> Python, C/C++</div>
              <div><strong className={darkMode ? "text-white" : "text-slate-900"}>Databases:</strong> MySQL, PostgreSQL, SQL (SELECT, WHERE, GROUP BY, JOIN, subqueries, CTEs, CASE, window functions)</div>
              <div><strong className={darkMode ? "text-white" : "text-slate-900"}>AI & ML:</strong> LangChain, LLMs, Agentic AI, RAG, Scikit-learn, TensorFlow, Keras, XGBoost, Regression, Classification</div>
              <div><strong className={darkMode ? "text-white" : "text-slate-900"}>Data & Tools:</strong> Pandas, NumPy, Matplotlib, Seaborn, JSON, YAML, Git, GitHub, Jupyter Notebook, VS Code</div>
              <div><strong className={darkMode ? "text-white" : "text-slate-900"}>Backend & Deployment:</strong> FastAPI, REST APIs, Streamlit, Playwright, BeautifulSoup, Pydantic</div>
            </div>
          </div>

          {/* ACHIEVEMENTS & CO-CURRICULAR */}
          <div className="space-y-2">
            <h2 className={`text-sm font-bold uppercase tracking-wider text-indigo-500 border-b pb-1 font-mono-code ${
              darkMode ? 'border-slate-800' : 'border-slate-200'
            }`}>
              ACHIEVEMENTS & CO-CURRICULAR
            </h2>
            <ul className={`space-y-1.5 text-xs sm:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              <li><strong className={darkMode ? "text-white" : "text-slate-900"}>Hackathons:</strong> Smart India Hackathon (SIH 2024 - 2025)</li>
              <li><strong className={darkMode ? "text-white" : "text-slate-900"}>Problem Solving:</strong> Solved 200+ DSA problems on LeetCode focusing on algorithmic problem solving.</li>
              <li><strong className={darkMode ? "text-white" : "text-slate-900"}>Certifications:</strong> AgenticAI Foundations (Oracle) • AI with TensorFlow (Infosys SpringBoard) • Data Science with Python (Infosys SpringBoard)</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={`px-6 py-3 border-t flex items-center justify-between text-xs ${
          darkMode ? 'bg-slate-900/90 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
        }`}>
          <span>Harshil Varshney — Official Resume</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
