import React from 'react';
import { ArrowRight, Code, Cpu, Building2, Users } from 'lucide-react';

interface HeroSectionProps {
  onOpenEnroll: () => void;
  onOpenQuote: () => void;
  onScrollTo: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnroll, onOpenQuote, onScrollTo }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 pt-6 pb-16 lg:pt-10 lg:pb-24 border-b border-slate-900">
      {/* Background Subtle Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Upper Breadcrumb / Context Anchor */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-6 font-medium">
          <span className="text-blue-400 font-semibold tracking-wide uppercase text-[11px]">Elite Technology Development Inc.</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>Youth STEM & Teen Coding</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>Corporate Upskilling</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>Enterprise Software Engineering</span>
        </div>

        {/* 2-Column Split: Editorial Value Proposition + High Impact Cinematic Visual Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Column 1: Editorial Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-[1.12]">
              Where Future Tech Minds Are Forged & Mission-Critical Software Is Built.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Elite Technology Development Inc. combines accredited hands-on IT training academies 
              for kids, teens, and corporate workforces with end-to-end custom software development, 
              cloud architectures, and dedicated engineering squads for enterprise organizations.
            </p>

            {/* Core Action Triggers */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onScrollTo('training-academy')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-blue-500/25 transition-all cursor-pointer whitespace-nowrap"
              >
                Explore Training Programs
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onScrollTo('software-services')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                Corporate Software Services
              </button>

              <button
                onClick={() => onScrollTo('estimator')}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                Estimate Project Scope
              </button>
            </div>

            {/* Quick Segment Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
              <div 
                onClick={() => onScrollTo('training-academy')} 
                className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 mb-1">
                  <Users className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                  Kids (Ages 7–12)
                </div>
                <p className="text-[12px] text-slate-400 leading-snug">Scratch, micro:bit robotics, logic games.</p>
              </div>

              <div 
                onClick={() => onScrollTo('training-academy')} 
                className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 mb-1">
                  <Code className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                  Teens (Ages 13–18)
                </div>
                <p className="text-[12px] text-slate-400 leading-snug">Python, React, full-stack & cybersecurity.</p>
              </div>

              <div 
                onClick={() => onScrollTo('software-services')} 
                className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 mb-1">
                  <Building2 className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                  Corporate Clients
                </div>
                <p className="text-[12px] text-slate-400 leading-snug">Custom apps, cloud infra & staff squads.</p>
              </div>
            </div>
          </div>

          {/* Column 2: High Fidelity Hero Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <img
                src="/src/assets/images/hero_tech_training_and_dev_1791624321205.jpg"
                alt="Elite Technology Development tech training and software engineering headquarters"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* Bottom Card Context */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-slate-200">
                <div className="flex items-center justify-between text-xs font-medium text-slate-300 mb-1">
                  <span>Elite Tech Innovation Center</span>
                  <span className="text-emerald-400 font-mono text-[11px]">ISO & Curriculum Aligned</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dual-purpose engineering labs delivering production software code and nurturing young talent under real-world engineering standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Full-Width Proof & Key Performance Indicators Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              4,850+
            </div>
            <div className="text-xs text-slate-400 font-medium">Students & Professionals Trained</div>
            <div className="text-[11px] text-slate-500">Across youth academies & enterprise cohorts</div>
          </div>

          <div className="space-y-1 border-l-0 md:border-l border-slate-800 md:pl-6">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              140+
            </div>
            <div className="text-xs text-slate-400 font-medium">Enterprise Software Systems</div>
            <div className="text-[11px] text-slate-500">Web portals, mobile apps & cloud APIs delivered</div>
          </div>

          <div className="space-y-1 border-l-0 sm:border-l border-slate-800 sm:pl-6">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight font-mono tabular-nums">
              98.4%
            </div>
            <div className="text-xs text-slate-400 font-medium">Corporate Partner Satisfaction</div>
            <div className="text-[11px] text-slate-500">Verified client audit & retention score</div>
          </div>

          <div className="space-y-1 border-l-0 md:border-l border-slate-800 md:pl-6">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              10+ Years
            </div>
            <div className="text-xs text-slate-400 font-medium">Engineering & Pedagogy Leadership</div>
            <div className="text-[11px] text-slate-500">Headquartered with worldwide remote reach</div>
          </div>
        </div>
      </div>
    </section>
  );
};
