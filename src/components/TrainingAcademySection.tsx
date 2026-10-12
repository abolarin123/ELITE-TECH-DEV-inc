import React, { useState, useMemo } from 'react';
import { COURSES, Course } from '../data/companyData';
import { Search, BookOpen, Clock, Award, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface TrainingAcademySectionProps {
  onSelectCourse: (course: Course) => void;
  onEnrollCourse: (course: Course) => void;
  onOpenCorporateConsult: () => void;
}

export const TrainingAcademySection: React.FC<TrainingAcademySectionProps> = ({
  onSelectCourse,
  onEnrollCourse,
  onOpenCorporateConsult
}) => {
  const [selectedAudience, setSelectedAudience] = useState<'all' | 'kids' | 'teens' | 'corporate'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      // Filter by audience
      if (selectedAudience !== 'all' && course.targetAudience !== selectedAudience) {
        return false;
      }
      // Filter by format
      if (selectedFormat !== 'all' && !course.format.toLowerCase().includes(selectedFormat.toLowerCase())) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(q);
        const matchesSkills = course.keySkills.some(s => s.toLowerCase().includes(q));
        const matchesDesc = course.shortDesc.toLowerCase().includes(q);
        return matchesTitle || matchesSkills || matchesDesc;
      }
      return true;
    });
  }, [selectedAudience, selectedFormat, searchQuery]);

  return (
    <section id="training-academy" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Division 01 · Training Academy
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Progressive IT Education From Elementary to Enterprise
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              Practical, project-centric curriculum designed and taught by senior technology practitioners. Master algorithms, production code, and cloud infrastructure.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenCorporateConsult}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Custom Corporate Cohorts
            </button>
          </div>
        </div>

        {/* Interactive Filter Bar & Search */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Audience Segment Tabs (Interactive Buttons with Active States) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800">
              <button
                onClick={() => setSelectedAudience('all')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedAudience === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All Programs ({COURSES.length})
              </button>
              <button
                onClick={() => setSelectedAudience('kids')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedAudience === 'kids'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Kids (Ages 7–12)
              </button>
              <button
                onClick={() => setSelectedAudience('teens')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedAudience === 'teens'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Teens (Ages 13–18)
              </button>
              <button
                onClick={() => setSelectedAudience('corporate')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedAudience === 'corporate'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Corporate & Pros
              </button>
            </div>

            {/* Search and Format Filter */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search Python, React, Cloud..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Format Filter */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  aria-label="Filter courses by delivery format"
                  className="w-full sm:w-auto px-2.5 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="all">All Formats</option>
                  <option value="in-person">In-Person Labs</option>
                  <option value="online">Live Interactive Virtual</option>
                  <option value="corporate">Corporate Onsite</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-xl border border-slate-800 bg-slate-900/40">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-base font-medium text-white mb-1">No matching programs found</h3>
            <p className="text-xs text-slate-400 mb-4">Try clearing your search query or selecting "All Programs".</p>
            <button
              onClick={() => {
                setSelectedAudience('all');
                setSearchQuery('');
                setSelectedFormat('all');
              }}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-6 hover:border-slate-700 transition-all group"
              >
                <div>
                  {/* Clean unboxed metadata with dot separators - strictly avoiding static pill badge sandwiches */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-blue-400">{course.ageRange}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{course.level}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{course.duration}</span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {course.shortDesc}
                  </p>

                  {/* Key Skills - unboxed typography */}
                  <div className="mb-4 pt-3 border-t border-slate-800/80">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Skills Mastered:
                    </div>
                    <div className="text-xs text-slate-300 flex flex-wrap gap-x-2 gap-y-1">
                      {course.keySkills.map((skill, idx) => (
                        <span key={idx} className="after:content-['·'] after:ml-2 after:text-slate-600 last:after:content-none">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Capstone Preview */}
                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 mb-5">
                    <div className="text-[11px] font-medium text-slate-400 flex items-center gap-1.5 mb-1">
                      <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      Capstone Project Deliverable
                    </div>
                    <p className="text-xs text-slate-200 line-clamp-2">
                      {course.capstoneProject}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Tuition, Next Cohort & Functional Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white font-mono">{course.tuition}</span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {course.nextCohortDate}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="py-2 px-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg border border-slate-700/60 transition-colors text-center cursor-pointer"
                    >
                      Full Syllabus
                    </button>
                    <button
                      onClick={() => onEnrollCourse(course)}
                      className="py-2 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors text-center cursor-pointer flex items-center justify-center gap-1"
                    >
                      Enroll Now
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Corporate Training Dedicated Callout Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/50 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Enterprise Workforce Development
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Need a customized training program for your corporate engineering or analytics team?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We design proprietary curricula based on your exact technology stack, deploy on-site mentors to your offices, and track measurable skills velocity.
            </p>
          </div>

          <button
            onClick={onOpenCorporateConsult}
            className="px-5 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shrink-0 cursor-pointer flex items-center gap-2"
          >
            Schedule Corporate Consultation
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
