import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Check, Users, Clock, ShieldAlert } from 'lucide-react';

interface ProjectEstimatorProps {
  onOpenQuoteWithEstimate: (estimateDetails: {
    projectType: string;
    scale: string;
    timeline: string;
    addOns: string[];
    teamComposition: string;
    estimatedWeeks: string;
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onOpenQuoteWithEstimate }) => {
  const [projectType, setProjectType] = useState<string>('web-portal');
  const [projectScale, setProjectScale] = useState<string>('growth');
  const [targetSpeed, setTargetSpeed] = useState<string>('standard');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['ci-cd', 'security']);

  const projectTypes = [
    { id: 'web-portal', label: 'Custom Web Portal / SaaS', baseWeeks: 10 },
    { id: 'mobile-app', label: 'iOS & Android Mobile App', baseWeeks: 12 },
    { id: 'cloud-devops', label: 'Cloud & DevOps Migration', baseWeeks: 8 },
    { id: 'api-microservices', label: 'Microservices & API Overhaul', baseWeeks: 9 },
    { id: 'dedicated-squad', label: 'Dedicated Engineering Squad', baseWeeks: 12 }
  ];

  const scaleOptions = [
    { id: 'mvp', label: 'MVP / Prototype', desc: 'Core workflows, single integration, initial pilot cohort', multiplier: 0.8 },
    { id: 'growth', label: 'Growth / Scale-Up', desc: 'Multi-role RBAC, reporting engine, high test coverage', multiplier: 1.0 },
    { id: 'enterprise', label: 'Enterprise Mission-Critical', desc: 'High concurrency, fault-tolerant DB, strict SLA', multiplier: 1.4 }
  ];

  const speedOptions = [
    { id: 'rapid', label: 'Accelerated Sprint', desc: 'Double-staffed pod for accelerated launch deadline' },
    { id: 'standard', label: 'Standard Iterative', desc: 'Balanced 2-week agile sprint cadence with regular demos' },
    { id: 'staged', label: 'Phased Multi-Quarter', desc: 'Continuous staged rollout and architectural transition' }
  ];

  const availableAddOns = [
    { id: 'ci-cd', label: 'Automated CI/CD Pipeline & GitHub Actions' },
    { id: 'security', label: 'SOC2 / OWASP Security Hardening & Penetration Review' },
    { id: 'offline-sync', label: 'Offline-First Mobile Background Synchronization' },
    { id: 'sla-support', label: '24/7 Production SLA & Infrastructure Monitoring' }
  ];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const calculatedEstimate = useMemo(() => {
    const selectedTypeObj = projectTypes.find(t => t.id === projectType) || projectTypes[0];
    const selectedScaleObj = scaleOptions.find(s => s.id === projectScale) || scaleOptions[1];

    let estimatedWeeksNumber = Math.round(selectedTypeObj.baseWeeks * selectedScaleObj.multiplier);
    if (targetSpeed === 'rapid') {
      estimatedWeeksNumber = Math.max(6, Math.round(estimatedWeeksNumber * 0.75));
    } else if (targetSpeed === 'staged') {
      estimatedWeeksNumber = Math.round(estimatedWeeksNumber * 1.3);
    }

    let teamComposition = '1 Lead Architect · 2 Senior Engineers · 1 QA Engineer';
    if (projectScale === 'enterprise' || targetSpeed === 'rapid') {
      teamComposition = '1 Principal Architect · 3 Senior Engineers · 1 DevOps Engineer · 1 QA Automation Lead';
    } else if (projectScale === 'mvp') {
      teamComposition = '1 Senior Full-Stack Lead · 1 Engineer · 0.5 QA Automation';
    }

    return {
      weeks: `${estimatedWeeksNumber} – ${estimatedWeeksNumber + 3} Weeks`,
      teamComposition,
      sprintCycles: Math.ceil(estimatedWeeksNumber / 2)
    };
  }, [projectType, projectScale, targetSpeed]);

  const handleTransferToQuote = () => {
    const selectedTypeObj = projectTypes.find(t => t.id === projectType);
    const selectedScaleObj = scaleOptions.find(s => s.id === projectScale);
    onOpenQuoteWithEstimate({
      projectType: selectedTypeObj?.label || 'Custom Software',
      scale: selectedScaleObj?.label || 'Growth',
      timeline: `${targetSpeed.toUpperCase()} (${calculatedEstimate.weeks})`,
      addOns: selectedAddOns.map(id => availableAddOns.find(a => a.id === id)?.label || id),
      teamComposition: calculatedEstimate.teamComposition,
      estimatedWeeks: calculatedEstimate.weeks
    });
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Scope & Team Architect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Plan Your Software Delivery Blueprint
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Configure your technical scope, system scale, and velocity requirements to inspect recommended team structures, sprint timelines, and architectural readiness.
          </p>
        </div>

        {/* 2-Column Estimator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800">
            {/* Step 1: Project Type */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                1. Select Architecture & Project Type
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map(pt => (
                  <button
                    key={pt.id}
                    onClick={() => setProjectType(pt.id)}
                    className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                      projectType === pt.id
                        ? 'bg-blue-950/40 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/30'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {pt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: System Scale */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                2. Project Scale & Operational Load
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scaleOptions.map(scale => (
                  <button
                    key={scale.id}
                    onClick={() => setProjectScale(scale.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      projectScale === scale.id
                        ? 'bg-blue-950/40 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/30'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-semibold mb-1">{scale.label}</div>
                    <div className="text-[11px] text-slate-400 leading-snug">{scale.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Target Velocity */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                3. Delivery Cadence
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {speedOptions.map(speed => (
                  <button
                    key={speed.id}
                    onClick={() => setTargetSpeed(speed.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      targetSpeed === speed.id
                        ? 'bg-blue-950/40 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/30'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-semibold mb-1">{speed.label}</div>
                    <div className="text-[11px] text-slate-400 leading-snug">{speed.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Technical Add-Ons */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                4. Infrastructure & Governance Standards
              </div>
              <div className="space-y-2">
                {availableAddOns.map(addon => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-slate-900 border-blue-500/60 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                        isChecked ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700 bg-slate-950'
                      }`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <span>{addon.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Output Column */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 space-y-6 sticky top-24">
            <div className="border-b border-slate-800 pb-4">
              <div className="text-xs font-mono text-blue-400 mb-1">REAL-TIME ARCHITECTURE PROJECTION</div>
              <h3 className="text-xl font-bold text-white">Estimated Engineering Blueprint</h3>
            </div>

            {/* Calculated KPI Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  Estimated Timeline
                </div>
                <div className="text-lg font-bold text-white font-mono">{calculatedEstimate.weeks}</div>
                <div className="text-[11px] text-slate-500">~{calculatedEstimate.sprintCycles} Two-Week Sprints</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  Sprint Cadence
                </div>
                <div className="text-lg font-bold text-white font-mono">Bi-Weekly Demos</div>
                <div className="text-[11px] text-slate-500">Direct GitHub & Jira Sync</div>
              </div>
            </div>

            {/* Recommended Team Pod */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Recommended Dedicated Pod:
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono leading-relaxed">
                {calculatedEstimate.teamComposition}
              </div>
            </div>

            {/* Assurance Guarantee */}
            <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-xs text-emerald-300 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span>
                All projects include 100% intellectual property transfer, NDA execution prior to discovery, and 30-day post-launch warranty.
              </span>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={handleTransferToQuote}
              className="w-full py-3.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-sm hover:shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              Transfer Scope to Formal Proposal Request
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
