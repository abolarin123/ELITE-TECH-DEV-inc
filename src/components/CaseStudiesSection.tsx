import React from 'react';
import { CASE_STUDIES } from '../data/companyData';
import { Check, Quote } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-16 sm:py-24 bg-slate-900/30 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Proof of Impact & Deliveries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Measured Outcomes Across Enterprise Systems & Workforce Upskilling
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Every engagement at Elite Technology Development is tied to verifiable business metrics: lower latency, faster dispatch, zero downtime, and real productivity gains.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-7 hover:border-slate-700 transition-all"
            >
              <div>
                {/* Sector and Timeline metadata */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="text-blue-400 font-medium">{study.clientCategory}</span>
                  <span className="font-mono text-[11px] text-slate-500">{study.timeline}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {study.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Marquee Quantified Metric Box */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono tracking-tight tabular-nums">
                    {study.metric}
                  </div>
                  <div className="text-xs font-medium text-slate-300 mt-0.5">
                    {study.metricLabel}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="relative pl-3.5 border-l-2 border-slate-700 space-y-2 mb-6">
                  <Quote className="w-3.5 h-3.5 text-slate-500 absolute -left-1.5 -top-1" />
                  <p className="text-xs italic text-slate-300 leading-relaxed">
                    "{study.quote.text}"
                  </p>
                  <div className="text-xs pt-1">
                    <span className="font-semibold text-white block">{study.quote.author}</span>
                    <span className="text-slate-400 text-[11px] block">{study.quote.role}, {study.quote.organization}</span>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="pt-4 border-t border-slate-900">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Stack & Frameworks:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {study.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos / Trust Strip */}
        <div className="mt-14 pt-8 border-t border-slate-900 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
            Trusted by Enterprise Leaders, Scale-Ups & Regional Institutions
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="text-sm font-semibold tracking-wider text-slate-400 font-mono">APEX FINANCIAL GROUP</span>
            <span className="text-sm font-semibold tracking-wider text-slate-400 font-mono">VANGUARD FREIGHT</span>
            <span className="text-sm font-semibold tracking-wider text-slate-400 font-mono">STERLING TRUST CORP</span>
            <span className="text-sm font-semibold tracking-wider text-slate-400 font-mono">MERIDIAN HEALTHCARE</span>
            <span className="text-sm font-semibold tracking-wider text-slate-400 font-mono">NEXUS TELECOM LABS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
