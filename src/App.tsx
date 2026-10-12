/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DualTrackOverview } from './components/DualTrackOverview';
import { TrainingAcademySection } from './components/TrainingAcademySection';
import { SoftwareServicesSection } from './components/SoftwareServicesSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { PedagogyStandards } from './components/PedagogyStandards';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { QuoteModal } from './components/QuoteModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { Course, SoftwareService } from './data/companyData';

export default function App() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<Course | null>(null);
  const [preSelectedCourseForEnroll, setPreSelectedCourseForEnroll] = useState<Course | null>(null);
  const [initialServiceForQuote, setInitialServiceForQuote] = useState<SoftwareService | null>(null);
  const [estimateDataForQuote, setEstimateDataForQuote] = useState<{
    projectType: string;
    scale: string;
    timeline: string;
    addOns: string[];
    teamComposition: string;
    estimatedWeeks: string;
  } | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnrollOrQuote = (initialType?: 'training' | 'quote') => {
    if (initialType === 'quote') {
      setInitialServiceForQuote(null);
      setEstimateDataForQuote(null);
      setIsQuoteModalOpen(true);
    } else {
      setPreSelectedCourseForEnroll(null);
      setIsEnrollModalOpen(true);
    }
  };

  const handleEnrollCourse = (course: Course) => {
    setPreSelectedCourseForEnroll(course);
    setIsEnrollModalOpen(true);
  };

  const handleOpenQuote = (service?: SoftwareService) => {
    setInitialServiceForQuote(service || null);
    setEstimateDataForQuote(null);
    setIsQuoteModalOpen(true);
  };

  const handleOpenQuoteWithEstimate = (estimateData: {
    projectType: string;
    scale: string;
    timeline: string;
    addOns: string[];
    teamComposition: string;
    estimatedWeeks: string;
  }) => {
    setInitialServiceForQuote(null);
    setEstimateDataForQuote(estimateData);
    setIsQuoteModalOpen(true);
  };

  const handleOpenCorporateConsult = () => {
    setInitialServiceForQuote(null);
    setEstimateDataForQuote({
      projectType: 'Corporate Workforce IT Upskilling & Training',
      scale: 'Enterprise Team Cohort',
      timeline: 'Custom Corporate Schedule',
      addOns: ['Hands-on Sandbox Repos', 'Executive Progress Telemetry', 'Production Capstone Mentorship'],
      teamComposition: '1 Dedicated Senior Instructor · 1 Teaching Assistant per 15 Engineers',
      estimatedWeeks: '4 – 12 Weeks Modular'
    });
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Navbar adhering to Top Bar Contract */}
      <Navbar
        onOpenEnrollOrQuote={() => handleOpenEnrollOrQuote('training')}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onOpenEnroll={() => handleOpenEnrollOrQuote('training')}
          onOpenQuote={() => handleOpenQuote()}
          onScrollTo={scrollTo}
        />

        {/* Dual Track Overview (Kids/Teens/Corporate IT Training vs Corporate Software Development) */}
        <DualTrackOverview
          onScrollTo={scrollTo}
          onOpenEnroll={() => handleOpenEnrollOrQuote('training')}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Training Academy Section (Kids 7-12, Teens 13-18, Corporate Teams) */}
        <TrainingAcademySection
          onSelectCourse={(course) => setSelectedCourseForDetail(course)}
          onEnrollCourse={handleEnrollCourse}
          onOpenCorporateConsult={handleOpenCorporateConsult}
        />

        {/* Corporate Software Services (Web Platforms, Mobile Apps, Cloud & DevOps, Dedicated Squads) */}
        <SoftwareServicesSection
          onOpenQuote={handleOpenQuote}
          onScrollToEstimator={() => scrollTo('estimator')}
        />

        {/* Interactive Scope & Cost Estimator */}
        <ProjectEstimator
          onOpenQuoteWithEstimate={handleOpenQuoteWithEstimate}
        />

        {/* Case Studies & Proven Quantified Impact */}
        <CaseStudiesSection />

        {/* Pedagogy & Engineering Standards + FAQ */}
        <PedagogyStandards />

        {/* Contact & Physical Headquarters Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollTo={scrollTo}
        onOpenEnroll={() => handleOpenEnrollOrQuote('training')}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Interactive Dialogs */}
      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        preSelectedCourse={preSelectedCourseForEnroll}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={initialServiceForQuote}
        estimateData={estimateDataForQuote}
      />

      <CourseDetailModal
        course={selectedCourseForDetail}
        onClose={() => setSelectedCourseForDetail(null)}
        onEnroll={handleEnrollCourse}
      />
    </div>
  );
}
