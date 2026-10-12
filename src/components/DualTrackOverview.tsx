import React from 'react';
import { ArrowRight, GraduationCap, Laptop, CheckCircle2 } from 'lucide-react';

interface DualTrackOverviewProps {
  onScrollTo: (id: string) => void;
  onOpenEnroll: () => void;
  onOpenQuote: () => void;
}

export const DualTrackOverview: React.FC<DualTrackOverviewProps> = ({ onScrollTo, onOpenEnroll, onOpenQuote }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Integrated Ecosystem
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Two Pillars. One Relentless Commitment to Technical Excellence.
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Unlike traditional code camps or isolated dev shops, Elite Technology Development operates a unified model: our software engineers teach real-world best practices, while our educational labs supply vetted engineering rigor to corporate client projects.
          </p>
        </div>

        {/* Dual Cards Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: IT Training Academy */}
          <div className="flex flex-col justify-between rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-6 sm:p-8 hover:border-slate-700 transition-all">
            <div>
              <div className="relative rounded-xl overflow-hidden mb-6 aspect-video border border-slate-800">
                <img
                  src="/src/assets/images/kids_teens_coding_lab_1791624334532.jpg"
                  alt="Elite Technology Development IT Training Academy for kids and teens"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-medium text-white bg-slate-950/80 px-2.5 py-1 rounded backdrop-blur">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  Ages 7 to Executive Level
                </div>
              </div>

              <div className="text-xs font-mono text-blue-400 mb-1">TRACK 01</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Accredited IT Training Academy
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Nurturing computational logic, problem-solving, and professional coding skills through progressive age-appropriate tracks:
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-slate-200">Kids STEM & Game Logic (Ages 7–12):</span>
                    <p className="text-xs text-slate-400 mt-0.5">Scratch animation, micro:bit physical sensors, block-to-code bridges.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-slate-200">Teens Computer Science (Ages 13–18):</span>
                    <p className="text-xs text-slate-400 mt-0.5">Python, React/TypeScript web apps, ethical hacking, and portfolio capstones.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-slate-200">Corporate & Professional Upskilling:</span>
                    <p className="text-xs text-slate-400 mt-0.5">DevOps, Docker/Kubernetes, Data Pipelines with Power BI, and C-Suite Tech Literacy.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => onScrollTo('training-academy')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
              >
                Browse All Course Tracks
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenEnroll}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                Enroll Learner
              </button>
            </div>
          </div>

          {/* Card 2: Corporate Software Development */}
          <div className="flex flex-col justify-between rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-6 sm:p-8 hover:border-slate-700 transition-all">
            <div>
              <div className="relative rounded-xl overflow-hidden mb-6 aspect-video border border-slate-800">
                <img
                  src="/src/assets/images/enterprise_software_team_1791624357415.jpg"
                  alt="Elite Technology Development software engineering team designing enterprise applications"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-medium text-white bg-slate-950/80 px-2.5 py-1 rounded backdrop-blur">
                  <Laptop className="w-3.5 h-3.5 text-blue-400" />
                  Enterprise Engineering Services
                </div>
              </div>

              <div className="text-xs font-mono text-blue-400 mb-1">TRACK 02</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Corporate Software Development
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Architecting, deploying, and scaling secure software infrastructure for enterprises, scale-ups, and corporate organizations:
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-slate-200">Custom Enterprise Portals & SaaS:</span>
                    <p className="text-xs text-slate-400 mt-0.5">Scalable web backbones, multi-tenant customer dashboards, and high-concurrency systems.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-slate-200">Cloud Infrastructure & DevOps:</span>
                    <p className="text-xs text-slate-400 mt-0.5">AWS/GCP/Azure migrations, Kubernetes clusters, and zero-downtime CI/CD pipelines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-slate-200">Dedicated Engineering Pods & Staff Augmentation:</span>
                    <p className="text-xs text-slate-400 mt-0.5">Plug-and-play senior developers, tech leads, and QA automation engineers aligned to your timezone.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => onScrollTo('software-services')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
              >
                View Software Capabilities
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenQuote}
                className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Request Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
