import React from 'react';
import { Course } from '../data/companyData';
import { X, Calendar, Clock, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close syllabus"
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-slate-800 pb-5 mb-6">
          <div className="flex items-center gap-2 text-xs text-blue-400 font-mono mb-2">
            <span>{course.ageRange}</span>
            <span className="text-slate-600">·</span>
            <span>{course.level}</span>
            <span className="text-slate-600">·</span>
            <span>{course.duration}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {course.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {course.fullDesc}
          </p>
        </div>

        {/* Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-500 block text-[11px]">Tuition / Rate</span>
            <span className="font-bold text-white font-mono mt-0.5 block">{course.tuition}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-500 block text-[11px]">Delivery Mode</span>
            <span className="font-semibold text-slate-200 mt-0.5 block">{course.format}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-500 block text-[11px]">Next Cohort</span>
            <span className="font-semibold text-emerald-400 mt-0.5 block">{course.nextCohortDate}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-500 block text-[11px]">Certification</span>
            <span className="font-semibold text-blue-300 text-[11px] mt-0.5 block truncate" title={course.certification}>
              {course.certification}
            </span>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Target Competencies Mastered:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {course.keySkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium rounded bg-slate-950 border border-slate-800 text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Curriculum Syllabus Breakdown */}
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            Week-by-Week Modular Syllabus:
          </div>

          <div className="space-y-3">
            {course.modules.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span className="text-blue-400 font-mono text-[11px]">{m.week}</span>
                  <span className="text-slate-200">{m.topic}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {m.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Capstone Box */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
            <Award className="w-4 h-4" />
            Mandatory Capstone Deliverable:
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {course.capstoneProject}
          </p>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Overview
          </button>

          <button
            onClick={() => {
              onClose();
              onEnroll(course);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            Enroll in This Program
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
