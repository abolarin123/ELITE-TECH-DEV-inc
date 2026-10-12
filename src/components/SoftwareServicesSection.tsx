import React, { useState } from 'react';
import { SOFTWARE_SERVICES, SoftwareService } from '../data/companyData';
import { ArrowRight, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';

interface SoftwareServicesSectionProps {
  onOpenQuote: (service?: SoftwareService) => void;
  onScrollToEstimator: () => void;
}

export const SoftwareServicesSection: React.FC<SoftwareServicesSectionProps> = ({
  onOpenQuote,
  onScrollToEstimator
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SOFTWARE_SERVICES[0].id);

  const activeService = SOFTWARE_SERVICES.find(s => s.id === activeServiceId) || SOFTWARE_SERVICES[0];

  return (
    <section id="software-services" className="py-16 sm:py-24 bg-slate-900/40 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Division 02 · Corporate Software Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Enterprise Engineering. Cloud Resiliency. Zero Fluff.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              We design, build, and deploy production software systems that solve complex workflow bottlenecks, scale securely under high concurrency, and protect your enterprise data assets.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onScrollToEstimator}
              className="px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Interactive Scope Estimator
            </button>
            <button
              onClick={() => onOpenQuote()}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              Request Custom Proposal
            </button>
          </div>
        </div>

        {/* Asymmetric 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Numbered Service Selection List (Clean human editorial numbering, strictly no '//' syntax) */}
          <div className="lg:col-span-5 space-y-2">
            {SOFTWARE_SERVICES.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500/80 shadow-md text-white'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-blue-400' : 'text-slate-500'}`}>
                      {service.number}.
                    </span>
                    <div>
                      <div className="text-sm font-semibold tracking-tight">
                        {service.title}
                      </div>
                      <div className="text-[12px] text-slate-400 line-clamp-1 mt-0.5">
                        {service.tagline}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform shrink-0 ${isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Column 2: Detailed Interactive Feature Inspector */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-400 font-mono mb-1">
                  <span>CAPABILITY {activeService.number}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400">PRODUCTION GRADE</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {activeService.title}
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono shrink-0">
                Turnkey or Embedded
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeService.description}
            </p>

            {/* Target Profile */}
            <div className="p-3.5 rounded-lg bg-blue-950/20 border border-blue-900/40 text-xs text-blue-200">
              <span className="font-semibold text-blue-300">Ideal For: </span>
              {activeService.bestFor}
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-2.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Core Engineering Deliverables:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="pt-4 border-t border-slate-900">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                Vetted Core Technologies:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeService.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-4 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                IP Ownership: 100% Client Transferred
              </div>
              <button
                onClick={() => onOpenQuote(activeService)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                Request Scope & RFP For This Service
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
