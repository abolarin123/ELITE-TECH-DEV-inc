import React, { useState, useEffect } from 'react';
import { Course, COURSES } from '../data/companyData';
import { X, CheckCircle2, Download, AlertCircle, Calendar } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCourse?: Course | null;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  preSelectedCourse
}) => {
  const [courseId, setCourseId] = useState<string>('');
  const [learnerName, setLearnerName] = useState('');
  const [learnerAge, setLearnerAge] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [preferredFormat, setPreferredFormat] = useState('In-Person & Online');
  const [priorExperience, setPriorExperience] = useState('Beginner - No previous coding');
  const [specialNotes, setSpecialNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  useEffect(() => {
    if (preSelectedCourse) {
      setCourseId(preSelectedCourse.id);
      setPreferredFormat(preSelectedCourse.format);
    } else if (COURSES.length > 0 && !courseId) {
      setCourseId(COURSES[0].id);
    }
    setIsSubmitted(false);
    setErrors({});
  }, [preSelectedCourse, isOpen]);

  if (!isOpen) return null;

  const selectedCourse = COURSES.find(c => c.id === courseId) || COURSES[0];
  const isMinor = selectedCourse?.targetAudience === 'kids' || selectedCourse?.targetAudience === 'teens';

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!learnerName.trim()) errs.learnerName = 'Student or attendee name is required.';
    if (!contactEmail.trim() || !contactEmail.includes('@')) errs.contactEmail = 'A valid email address is required.';
    if (!contactPhone.trim()) errs.contactPhone = 'Contact phone number is required.';
    if (isMinor && !contactName.trim()) errs.contactName = 'Parent or Guardian full name is required for minors.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const refCode = 'ETD-' + Math.floor(100000 + Math.random() * 900000);
    setSubmissionId(refCode);

    const enrollmentRecord = {
      refCode,
      courseId,
      courseTitle: selectedCourse.title,
      learnerName,
      learnerAge,
      contactName: contactName || learnerName,
      contactEmail,
      contactPhone,
      preferredFormat,
      priorExperience,
      specialNotes,
      enrolledAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('elite_enrollments') || '[]');
      existing.unshift(enrollmentRecord);
      localStorage.setItem('elite_enrollments', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    setIsSubmitted(true);
  };

  const handleDownloadOrientationBrief = () => {
    const briefContent = `=====================================================
ELITE TECHNOLOGY DEVELOPMENT INC.
ENROLLMENT ADMISSION & ORIENTATION BRIEF
=====================================================
Enrollment Reference: ${submissionId}
Program: ${selectedCourse.title}
Audience / Tier: ${selectedCourse.ageRange} (${selectedCourse.level})
Duration: ${selectedCourse.duration}
Tuition / Fee: ${selectedCourse.tuition}
Next Cohort Kickoff: ${selectedCourse.nextCohortDate}
Format: ${preferredFormat}

LEARNER PROFILE:
Student Name: ${learnerName}
Age / Group: ${learnerAge || 'Standard Cohort'}
Primary Contact: ${contactName || learnerName}
Email: ${contactEmail}
Phone: ${contactPhone}
Prior Experience: ${priorExperience}

CURRICULUM SYLLABUS OUTLINE:
${selectedCourse.modules.map(m => `- ${m.week}: ${m.topic}\n  Focus: ${m.details}`).join('\n\n')}

CAPSTONE ASSIGNMENT:
${selectedCourse.capstoneProject}

CERTIFICATION:
${selectedCourse.certification}

ORIENTATION NOTES:
- Our Academic Advisory Office will send your orientation calendar invite within 24 business hours.
- For virtual cohorts, hardware & software tool setup instructions will be sent prior to class.
- Hardware kits for in-person and electronics labs will be provided at the Elite Tech Center.

Office Contact: admissions@elitedevtech.com | +1 (800) 842-3548
Elite Technology Development Inc.
=====================================================`;

    const blob = new Blob([briefContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EliteTech_Admission_${submissionId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100">
        {/* Close Button */}
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
              <div className="text-xs font-mono text-blue-400 mb-1">OFFICIAL ADMISSIONS DESK</div>
              <h3 className="text-2xl font-bold text-white">
                Enroll in Elite IT Training Academy
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Secure your seat in our upcoming cohort. No payment is charged immediately; our academic advisors review your placement and schedule orientation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Program */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Select Training Course
                </label>
                <select
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  {COURSES.map(c => (
                    <option key={c.id} value={c.id}>
                      [{c.ageRange}] {c.title} — {c.tuition}
                    </option>
                  ))}
                </select>
              </div>

              {/* Course Info Snapshot */}
              {selectedCourse && (
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-medium">{selectedCourse.level}</span>
                    <span className="text-slate-600">·</span>
                    <span>{selectedCourse.duration}</span>
                  </div>
                  <div className="text-slate-400 font-mono">
                    {selectedCourse.tuition}
                  </div>
                </div>
              )}

              {/* Student Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Student / Learner Full Name *
                  </label>
                  <input
                    type="text"
                    value={learnerName}
                    onChange={(e) => setLearnerName(e.target.value)}
                    placeholder="e.g. Leo Morgan"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                  {errors.learnerName && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.learnerName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Age / Grade / Role
                  </label>
                  <input
                    type="text"
                    value={learnerAge}
                    onChange={(e) => setLearnerAge(e.target.value)}
                    placeholder={isMinor ? "e.g. 11 years / 6th Grade" : "e.g. Senior Analyst"}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Guardian / Contact Details */}
              {isMinor && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Sarah Morgan"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                  {errors.contactName && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.contactName}
                    </p>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary Email Address *
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="contact@example.com"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                  {errors.contactEmail && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.contactEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                  {errors.contactPhone && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.contactPhone}
                    </p>
                  )}
                </div>
              </div>

              {/* Delivery Format & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Attendance Format
                  </label>
                  <select
                    value={preferredFormat}
                    onChange={(e) => setPreferredFormat(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="In-Person Campus Lab">In-Person Campus Lab</option>
                    <option value="Live Interactive Virtual">Live Interactive Virtual (Zoom + GitHub)</option>
                    <option value="Corporate Onsite / Hybrid">Corporate Onsite / Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Prior Coding Background
                  </label>
                  <select
                    value={priorExperience}
                    onChange={(e) => setPriorExperience(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="Complete Beginner">Complete Beginner</option>
                    <option value="Some Scratch / Basic Block Coding">Some Scratch / Basic Block Coding</option>
                    <option value="High School CS / Basic Python">High School CS / Basic Python</option>
                    <option value="Industry Professional / Working Tech">Industry Professional / Working Tech</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Learning Objectives or Accommodations (Optional)
                </label>
                <textarea
                  rows={2}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="Tell us what you hope to achieve or any specific scheduling needs..."
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>

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
                  Submit Enrollment Registration
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs font-mono text-emerald-400 mb-1">ENROLLMENT CONFIRMED</div>
              <h3 className="text-2xl font-bold text-white">
                Application Received Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-2">
                Thank you, <strong className="text-white">{learnerName}</strong>. Your provisional enrollment registration for <strong className="text-blue-400">{selectedCourse.title}</strong> has been logged.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left max-w-md mx-auto text-xs space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Reference Number:</span>
                <span className="text-blue-400 font-bold">{submissionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Program:</span>
                <span className="text-white">{selectedCourse.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Email:</span>
                <span className="text-white">{contactEmail}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Next Orientation:</span>
                <span className="text-emerald-400">{selectedCourse.nextCohortDate}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleDownloadOrientationBrief}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-blue-400" />
                Download Syllabus & Orientation Guide (.txt)
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
