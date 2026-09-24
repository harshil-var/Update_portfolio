import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Code2
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface ContactProps {
  darkMode?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode = true }) => {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className={`py-24 relative border-t ${
      darkMode ? 'bg-slate-950/90 border-slate-800/80' : 'bg-slate-100/90 border-slate-200'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Reference Card Container */}
        <div className={`glass-panel p-8 sm:p-12 rounded-3xl relative shadow-2xl transition-all ${
          darkMode ? 'bg-[#121827]/90 border-slate-800' : 'bg-white/95 border-slate-200'
        }`}>
          
          {/* Top Decorative Envelope Tag */}
          <div className="absolute top-6 right-8 opacity-40 hover:opacity-100 transition-opacity">
            <div className={`w-10 h-8 border-2 border-dashed rounded flex items-center justify-center ${
              darkMode ? 'border-indigo-400/50 text-indigo-400' : 'border-indigo-600/50 text-indigo-600'
            }`}>
              <Mail className="w-4 h-4" />
            </div>
          </div>

          {/* Reference Heading: Let's talk. */}
          <h2 className={`font-serif-heading italic text-5xl sm:text-6xl font-bold tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Let's talk.
          </h2>

          {/* Subtitle */}
          <p className={`text-base sm:text-lg leading-relaxed mb-10 max-w-2xl ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            If you are looking for an AI engineer who builds things with care, or just want to say hi, my inbox is open.
          </p>

          {/* Conversational Form */}
          {formSubmitted ? (
            <div className={`p-10 text-center rounded-2xl border space-y-4 ${
              darkMode ? 'bg-indigo-950/20 border-indigo-500/30' : 'bg-indigo-50 border-indigo-200'
            }`}>
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Thank You for Reaching Out!
              </h3>
              <p className={`text-sm max-w-md mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Your message has been captured. Direct email: <strong className="text-indigo-500">{personal.email}</strong>.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors shadow-md"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Salutation */}
              <div className={`text-sm sm:text-base font-semibold font-mono-code ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                Dear Harshil,
              </div>

              {/* Name field */}
              <div className="space-y-2">
                <label className={`block text-xs font-mono-code uppercase tracking-wider ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  My name is...
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none ${
                    darkMode 
                      ? 'bg-slate-900/80 border border-slate-800 text-white focus:border-indigo-500 focus:bg-slate-900' 
                      : 'bg-slate-100 border border-slate-300 text-slate-900 focus:border-indigo-600 focus:bg-white'
                  }`}
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label className={`block text-xs font-mono-code uppercase tracking-wider ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  My email is...
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none ${
                    darkMode 
                      ? 'bg-slate-900/80 border border-slate-800 text-white focus:border-indigo-500 focus:bg-slate-900' 
                      : 'bg-slate-100 border border-slate-300 text-slate-900 focus:border-indigo-600 focus:bg-white'
                  }`}
                />
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label className={`block text-xs font-mono-code uppercase tracking-wider ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  I wanted to reach out because...
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message, project idea, or job opportunity here..."
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none resize-none ${
                    darkMode 
                      ? 'bg-slate-900/80 border border-slate-800 text-white focus:border-indigo-500 focus:bg-slate-900' 
                      : 'bg-slate-100 border border-slate-300 text-slate-900 focus:border-indigo-600 focus:bg-white'
                  }`}
                ></textarea>
              </div>

              {/* Reference Card Bottom Bar */}
              <div className={`pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${
                darkMode ? 'border-slate-800' : 'border-slate-200'
              }`}>
                
                {/* Left: Social & Copy Email Icons */}
                <div className="flex items-center gap-3">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl border transition-all ${
                      darkMode 
                        ? 'bg-slate-900 text-slate-300 hover:text-white border-slate-800 hover:border-indigo-500' 
                        : 'bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-300 hover:border-indigo-600'
                    }`}
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl border transition-all ${
                      darkMode 
                        ? 'bg-slate-900 text-slate-300 hover:text-white border-slate-800 hover:border-indigo-500' 
                        : 'bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-300 hover:border-indigo-600'
                    }`}
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>

                  <a
                    href={personal.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl border transition-all ${
                      darkMode 
                        ? 'bg-slate-900 text-amber-400 border-slate-800 hover:border-indigo-500' 
                        : 'bg-slate-100 text-amber-600 border-slate-300 hover:border-indigo-600'
                    }`}
                    title="LeetCode Profile"
                  >
                    <Code2 className="w-5 h-5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      darkMode 
                        ? 'bg-slate-900 text-slate-300 hover:text-white border-slate-800' 
                        : 'bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-300'
                    }`}
                    title="Copy Email Address"
                  >
                    <Mail className="w-4 h-4 text-indigo-500" />
                    <span className="hidden sm:inline">{personal.email}</span>
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  </button>
                </div>

                {/* Right: Send ✈️ Pill Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-indigo-600/25 transition-all text-sm cursor-pointer disabled:opacity-50 transform hover:-translate-y-0.5"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send ✈️</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
