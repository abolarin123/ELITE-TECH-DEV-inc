import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onOpenEnroll: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo, onOpenEnroll, onOpenQuote }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                ET
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Elite Technology Development Inc.
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Pioneering accredited IT education for kids, teens, and corporate organizations, while providing mission-critical enterprise software engineering and cloud infrastructure services.
            </p>

            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Registered Technology Corporation · All Rights Reserved</span>
            </div>
          </div>

          {/* Column: IT Training Programs */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              IT Training Academy
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onScrollTo('training-academy')} className="hover:text-slate-200 transition-colors cursor-pointer text-left">
                  Kids Coding & Scratch (Ages 7–10)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('training-academy')} className="hover:text-slate-200 transition-colors cursor-pointer text-left">
                  Junior Robotics & Micro:bit (Ages 9–12)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('training-academy')} className="hover:text-slate-200 transition-colors cursor-pointer text-left">
                  Teens Python & Algorithms (Ages 13–18)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('training-academy')} className="hover:text-slate-200 transition-colors cursor-pointer text-left">
                  Teens React & Web Development
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('training-academy')} className="hover:text-slate-200 transition-colors cursor-pointer text-left">
                  Teens Cybersecurity & Linux Labs
                </button>
              </li>
              <li>
                <button onClick={onOpenEnroll} className="text-blue-400 hover:text-blue-300 font-semibold transition-colors cursor-pointer text-left">
                  Enroll In Next Cohort →
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Corporate Services */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Corporate Software
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onScrollTo('software-services')} className="hover:text-slate-200 transition-colors cursor-pointer text-left">
                  Custom Enterprise Web Portals
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('software-services')} className="hover:text-slate-200 transition-colors cursor-pointer text-left">
                  iOS & Android Mobile Applications
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('software-services')} className="hover:text-slate-200 transition-colors cursor-pointer text-left">
                  Cloud DevOps & Kubernetes Clusters
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('software-services')} className="hover:text-slate-200 transition-colors cursor-pointer text-left">
                  Legacy System Modernization
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('software-services')} className="hover:text-slate-200 transition-colors cursor-pointer text-left">
                  Dedicated Engineering Squads
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="text-blue-400 hover:text-blue-300 font-semibold transition-colors cursor-pointer text-left">
                  Request Software RFP →
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Corporate & Contact */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Corporate Desk
            </div>
            <div className="space-y-2 text-slate-400">
              <p>Admissions: +1 (800) 842-3548</p>
              <p>Engineering: +1 (800) 842-3549</p>
              <p>Email: info@elitedevtech.com</p>
              <p className="pt-2 text-[11px] text-slate-500">
                100 Innovation Way, Suite 700<br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>

        {/* Quiet Sub-footer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Elite Technology Development Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Student Code of Conduct</span>
            <span>Corporate NDA Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
