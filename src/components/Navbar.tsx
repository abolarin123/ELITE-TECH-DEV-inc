import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenEnrollOrQuote: (initialType?: 'training' | 'quote') => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrollOrQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      {/* Top Utility Announcement - Subtle B2B Trust Bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 text-xs text-slate-400 border-b border-slate-900 bg-slate-950">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            Accredited IT Training & Enterprise Software Engineering
          </span>
          <span className="text-slate-600">|</span>
          <span>Next Cohorts Open for Kids, Teens & Corporate Upskilling</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 hover:text-slate-200 transition-colors">
            <Phone className="w-3 h-3 text-slate-400" />
            Corporate Inquiries: +1 (800) 842-3548
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Headquarters: Tech Hub Tower, Suite 700</span>
        </div>
      </div>

      {/* Main Top Bar Contract: Brand — 4-5 Nav Links — 1 Primary Action */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-18">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className="flex items-center gap-3 text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm shadow-sm ring-1 ring-white/10 group-hover:from-blue-500 group-hover:to-indigo-600 transition-all">
            ET
          </div>
          <span className="text-slate-100 font-semibold tracking-tight">
            Elite Technology Development <span className="text-blue-400 font-normal">Inc.</span>
          </span>
        </a>

        {/* Zone 2: 4-5 Clean Single-Line Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button 
            onClick={() => scrollToSection('training-academy')} 
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Training Academy
          </button>
          <button 
            onClick={() => scrollToSection('software-services')} 
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Corporate Services
          </button>
          <button 
            onClick={() => scrollToSection('estimator')} 
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Project Estimator
          </button>
          <button 
            onClick={() => scrollToSection('case-studies')} 
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Case Studies
          </button>
          <button 
            onClick={() => scrollToSection('standards')} 
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Pedagogy & Standards
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenEnrollOrQuote()}
            className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-blue-500/20 transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-98"
          >
            Enroll / Request Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollToSection('training-academy')}
              className="text-left py-2 px-3 rounded-md hover:bg-slate-900 hover:text-white transition-colors"
            >
              IT Training Academy (Kids, Teens, Corporate)
            </button>
            <button
              onClick={() => scrollToSection('software-services')}
              className="text-left py-2 px-3 rounded-md hover:bg-slate-900 hover:text-white transition-colors"
            >
              Enterprise Software Development
            </button>
            <button
              onClick={() => scrollToSection('estimator')}
              className="text-left py-2 px-3 rounded-md hover:bg-slate-900 hover:text-white transition-colors"
            >
              Scope & Cost Estimator
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-left py-2 px-3 rounded-md hover:bg-slate-900 hover:text-white transition-colors"
            >
              Case Studies & Proven Results
            </button>
            <button
              onClick={() => scrollToSection('standards')}
              className="text-left py-2 px-3 rounded-md hover:bg-slate-900 hover:text-white transition-colors"
            >
              Pedagogy & Engineering Standards
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 px-3 rounded-md hover:bg-slate-900 hover:text-white transition-colors"
            >
              Contact & Locations
            </button>
          </div>
          <div className="pt-3 border-t border-slate-900">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollOrQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Enroll / Request Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
