import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  darkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, darkMode, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? darkMode 
            ? 'bg-[#0b0f19]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20' 
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className={`w-full h-full rounded-[10px] flex items-center justify-center transition-colors ${
              darkMode ? 'bg-slate-950 text-indigo-400 group-hover:text-white' : 'bg-white text-indigo-600 group-hover:text-indigo-700'
            }`}>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <span className={`font-bold tracking-tight text-lg transition-colors ${
            darkMode ? 'text-slate-100 group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'
          }`}>
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-sm ${
          darkMode ? 'bg-slate-900/60 border border-slate-800/80' : 'bg-slate-200/60 border border-slate-300/80'
        }`}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-300/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button & Theme Switcher */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-lg border transition-all duration-200 ${
              darkMode 
                ? 'bg-slate-900 text-amber-400 border-slate-800 hover:bg-slate-800' 
                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
            }`}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle dark/light mode"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 bg-indigo-600/10 hover:bg-indigo-600 border border-indigo-500/30 hover:border-indigo-600 text-indigo-500 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-lg border transition-all ${
              darkMode 
                ? 'bg-slate-900 text-amber-400 border-slate-800' 
                : 'bg-slate-100 text-slate-700 border-slate-300'
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 bg-indigo-600/20 text-indigo-500 text-xs px-3 py-1.5 rounded-md font-semibold border border-indigo-500/30"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border ${
              darkMode ? 'text-slate-300 bg-slate-800/60 border-slate-700/50' : 'text-slate-700 bg-slate-200 border-slate-300'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 pt-3 pb-6 space-y-2 shadow-xl ${
          darkMode ? 'bg-[#0e1424] border-slate-800' : 'bg-white border-slate-200'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
