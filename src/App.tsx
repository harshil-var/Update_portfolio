import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ExploringAchievements } from './components/ExploringAchievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300 ${
      darkMode ? 'bg-[#0b0f19] text-slate-300' : 'bg-slate-50 text-slate-700'
    }`}>
      {/* Sticky Navigation */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)} 
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <FeaturedProjects darkMode={darkMode} />
        <ExploringAchievements darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Resume Viewer / Print Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} darkMode={darkMode} />
    </div>
  );
}

export default App;
