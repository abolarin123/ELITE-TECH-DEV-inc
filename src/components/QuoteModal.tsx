import React, { useState, useEffect } from 'react';
import { SoftwareService, SOFTWARE_SERVICES } from '../data/companyData';
import { X, CheckCircle2, ShieldCheck, AlertCircle, Building2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: SoftwareService | null;
  estimateData?: {
    projectType: string;
    scale: string;
    timeline: string;
    addOns: string[];
    teamComposition: string;
    estimatedWeeks: string;
  } | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
  estimateData
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactRole, setContactRole] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [serviceType, setServiceType] = useState('Custom Enterprise Web Platforms');
  const [budgetRange, setBudgetRange] = useState('$25,000 – $50,000');
  const [timeline, setTimeline] = useState('Standard (8-12 Weeks)');
  const [projectDescription, setProjectDescription] = useState('');
  const [requestNda, setRequestNda] = useState(true);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfpId, setRfpId] = useState('');

  useEffect(() => {
    if (initialService) {
      setServiceType(initialService.title);
    } else if (estimateData) {
      setServiceType(estimateData.projectType);
      setTimeline(estimateData.timeline);
      setProjectDescription(
        `Pre-configured Blueprint from Estimator:
Scale: ${estimateData.scale}
Target Velocity: ${estimateData.timeline}
Add-ons: ${estimateData.addOns.join(', ')}
Recommended Pod: ${estimateData.teamComposition}`
      );
    }
    setIsSubmitted(false);
    setErrors({});
  }, [initialService, estimateData, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!companyName.trim()) errs.companyName = 'Company or organization name is required.';
    if (!contactName.trim()) errs.contactName = 'Contact person name is required.';
    if (!contactEmail.trim() || !contactEmail.includes('@')) errs.contactEmail = 'A valid work email is required.';
    if (!contactPhone.trim()) errs.contactPhone = 'Telephone number is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const generatedId = 'RFP-' + Math.floor(200000 + Math.random() * 800000);
    setRfpId(generatedId);

    const quoteRecord = {
      rfpId: generatedId,
      companyName,
      contactName,
      contactRole,
      contactEmail,
      contactPhone,
      serviceType,
      budgetRange,
      timeline,
      requestNda,
      projectDescription,
      submittedAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('elite_rfp_requests') || '[]');
      existing.unshift(quoteRecord);
      localStorage.setItem('elite_rfp_requests', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <div className="text-xs font-mono text-blue-400 mb-1 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                ENTERPRISE SOFTWARE PROPOSAL DESK
              </div>
              <h3 className="text-2xl font-bold text-white">
                Request Corporate Software Scope & Proposal
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Tell us about your technical specifications. A Principal Solutions Architect will review your architecture and return a concrete delivery roadmap within 24 business hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Company & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Global Logistics"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                  {errors.companyName && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.companyName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Title / Role
                  </label>
                  <input
                    type="text"
                    value={contactRole}
                    onChange={(e) => setContactRole(e.target.value)}
                    placeholder="e.g. CTO / VP Engineering / Product Director"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Marcus Vance"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                  {errors.contactName && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.contactName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="marcus@apexlogistics.com"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                  {errors.contactEmail && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.contactEmail}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Direct Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+1 (555) 234-5678"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                  {errors.contactPhone && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.contactPhone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary Service Focus
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    {SOFTWARE_SERVICES.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Dedicated Engineering Squad">Dedicated Engineering Squad</option>
                    <option value="Enterprise Architecture & Security Audit">Enterprise Architecture & Security Audit</option>
                  </select>
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Estimated Budget Bracket
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="$15,000 – $25,000">$15,000 – $25,000 (Scoping & MVP)</option>
                    <option value="$25,000 – $50,000">$25,000 – $50,000 (Mid-Size Platform)</option>
                    <option value="$50,000 – $100,000">$50,000 – $100,000 (Enterprise Cloud / System)</option>
                    <option value="$100,000+">$100,000+ (Multi-Quarter / Dedicated Squad)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Target Deployment Window
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="Accelerated (4-8 Weeks)">Accelerated Sprint (4–8 Weeks)</option>
                    <option value="Standard (8-14 Weeks)">Standard Agile (8–14 Weeks)</option>
                    <option value="Long-term Roadmap (4+ Months)">Long-term Staged Roadmap (4+ Months)</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Project Scope & Technical Details
                </label>
                <textarea
                  rows={3}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Outline your existing stack, critical objectives, integrations required, or specific user problems to solve..."
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              {/* NDA Checkbox */}
              <div
                onClick={() => setRequestNda(!requestNda)}
                className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer pt-1"
              >
                <input
                  type="checkbox"
                  checked={requestNda}
                  onChange={() => {}}
                  className="rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-0 cursor-pointer"
                />
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  Request Mutual Non-Disclosure Agreement (NDA) before detailed discovery call
                </span>
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-blue-500/20 transition-all cursor-pointer"
                >
                  Submit Proposal Request
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs font-mono text-emerald-400 mb-1">PROPOSAL REQUEST LOGGED</div>
              <h3 className="text-2xl font-bold text-white">
                RFP Submission Confirmed
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-2">
                Thank you, <strong className="text-white">{contactName}</strong> from <strong className="text-blue-400">{companyName}</strong>. A Principal Solutions Architect has been assigned to review your scope.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left max-w-md mx-auto text-xs space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">RFP Tracking ID:</span>
                <span className="text-blue-400 font-bold">{rfpId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target Service:</span>
                <span className="text-white">{serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">SLA Response Time:</span>
                <span className="text-emerald-400">Within 24 Business Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">NDA Status:</span>
                <span className="text-slate-300">{requestNda ? 'Standard Mutual NDA Attached' : 'Standard Inbound'}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              Close & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
