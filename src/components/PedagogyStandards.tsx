import React, { useState } from 'react';
import { FAQS } from '../data/companyData';
import { ShieldCheck, Award, Code2, Users2, ChevronDown } from 'lucide-react';

export const PedagogyStandards: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pillars = [
    {
      icon: Code2,
      title: 'Practitioners, Not Pure Academics',
      description: 'Our academy instructors are active software engineers, cloud architects, and security leads who write code for enterprise clients during weekly sprint cycles.'
    },
    {
      icon: Award,
      title: 'Rigorous Capstone Proof',
      description: 'Zero multiple-choice test fillers. Every student, from 8-year-old Scratch builders to corporate cloud architects, must defend an original working software capstone.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security By Design',
      description: 'Whether we build an internal banking portal or teach teenagers web security, OWASP standards, role-based access, and zero-trust principles are mandatory.'
    },
    {
      icon: Users2,
      title: '100% IP & Source Ownership',
      description: 'For corporate clients, all repositories, schemas, Docker builds, and documentation are transferred entirely with full copyright and intellectual property rights.'
    }
  ];

  return (
    <section id="standards" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Pedagogy & Engineering Governance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            The Elite Standard: Real Code, Active Mentorship, Production Rigor
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Why families and enterprise engineering leaders trust Elite Technology Development Inc. to forge skills and construct resilient platforms.
          </p>
        </div>

        {/* 4 Architectural Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-950/70 border border-blue-800/40 flex items-center justify-center text-blue-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Have questions regarding curriculum enrollment, corporate sponsorships, or custom software timelines?
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/70 transition-colors"
                  >
                    <span className="text-sm font-semibold text-slate-200">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
