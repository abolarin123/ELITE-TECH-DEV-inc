import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Clock, ShieldCheck, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subjectCategory, setSubjectCategory] = useState('Training Program Enrollment');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your name.';
    if (!email.trim() || !email.includes('@')) errs.email = 'Please provide a valid email.';
    if (!message.trim()) errs.message = 'Please provide details for your message.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const records = JSON.parse(localStorage.getItem('elite_contact_messages') || '[]');
      records.unshift({
        id: 'MSG-' + Date.now(),
        fullName,
        email,
        phone,
        subjectCategory,
        message,
        receivedAt: new Date().toISOString()
      });
      localStorage.setItem('elite_contact_messages', JSON.stringify(records));
    } catch {
      // Fallback
    }

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900/60 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Office Info & Locations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Contact Elite Technology Development Inc.
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Whether enrolling your child in a STEM coding cohort, planning a corporate training workshop, or exploring an enterprise software development contract, our advisory team is ready to assist.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Corporate Headquarters & Tech Lab</div>
                  <div className="text-slate-400 mt-0.5 leading-snug">
                    Elite Technology Development Inc.<br />
                    100 Innovation Way, Suite 700<br />
                    San Francisco, CA 94105
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Telephone & Direct Lines</div>
                  <div className="text-slate-400 mt-0.5 leading-snug">
                    Admissions & Programs: +1 (800) 842-3548<br />
                    Corporate Software Desk: +1 (800) 842-3549
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Direct Email Channels</div>
                  <div className="text-slate-400 mt-0.5 leading-snug">
                    General Inquiries: info@elitedevtech.com<br />
                    Corporate RFP: proposals@elitedevtech.com<br />
                    Admissions: admissions@elitedevtech.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Operating Hours</div>
                  <div className="text-slate-400 mt-0.5 leading-snug">
                    Lab & Classrooms: Mon–Sat, 8:00 AM – 7:30 PM PST<br />
                    Corporate Engineering Support: 24/7 SLA Monitored
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Direct Validated Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800">
            {!isSubmitted ? (
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Send a Message to Our Team
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  We reply to all inquiries within one business day.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. David Chen"
                        className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="david@example.com"
                        className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Inquiry Category
                      </label>
                      <select
                        value={subjectCategory}
                        onChange={(e) => setSubjectCategory(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
                      >
                        <option value="Training Program Enrollment">Training Program Enrollment</option>
                        <option value="Kids & Teens Coding Inquiries">Kids & Teens Coding Inquiries</option>
                        <option value="Corporate Workforce Upskilling">Corporate Workforce Upskilling</option>
                        <option value="Software Development RFP / Contract">Software Development RFP / Contract</option>
                        <option value="Partnership / Academic Co-op">Partnership / Academic Co-op</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Message / Specifications *
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please let us know your child's age, training goals, or corporate project requirements..."
                      className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-blue-500/20 transition-all cursor-pointer"
                    >
                      Transmit Message
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Transmitted</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you for reaching out, {fullName}. Our advisory team will review your inquiry and follow up shortly at {email}.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFullName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
