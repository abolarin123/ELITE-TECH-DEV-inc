const courses = [
  { id: 'scratch-coding-kids', audience: 'kids', age: 'Ages 7-10', level: 'Beginner', duration: '8 Weeks', format: 'In-Person & Online', title: 'Creative Coding & Game Logic with Scratch', tuition: '$290 / Cohort', next: 'Starts First Monday of Next Month', description: 'Foundational computational thinking, algorithmic logic, and animation storytelling using visual block scripting.', capstone: 'Multi-level Space Explorer Arcade Game with custom sound effects and scoring system', modules: ['The Language of Computers', 'Variables & Scoring Engines', 'Complex Logic & Collision Physics', 'Capstone Production & Showcase'] },
  { id: 'robotics-microbit-kids', audience: 'kids', age: 'Ages 9-12', level: 'Beginner', duration: '10 Weeks', format: 'In-Person & Online', title: 'Robotics, Electronics & Micro:bit Hardware Lab', tuition: '$380 / Cohort (Kit Included)', next: 'Starts in 2 Weeks', description: 'Hands-on hardware programming, sensors, LED matrices, and motor actuation using BBC Micro:bit and physical kits.', capstone: 'Autonomous obstacle-navigating robotic rover with smart distance sensing', modules: ['Hardware Architecture & Microcontrollers', 'Actuators, Motors & Radio', 'Collision Logic', 'Rover Assembly & Arena Challenge'] },
  { id: 'young-web-explorer', audience: 'kids', age: 'Ages 10-12', level: 'Intermediate', duration: '8 Weeks', format: 'In-Person & Online', title: 'Junior Web Creators: HTML5 & Visual Design', tuition: '$320 / Cohort', next: 'Enrolling Now', description: 'Transition from block code to semantic HTML and CSS to publish personal websites and hobby portfolios.', capstone: 'Interactive multi-page animal sanctuary or hobby wiki hosted online', modules: ['How the Internet Renders Pages', 'Styling with CSS', 'Media & Hyperlinks', 'Responsive Polish & Hosting'] },
  { id: 'python-core-teens', audience: 'teens', age: 'Ages 13-18', level: 'Beginner to Intermediate', duration: '12 Weeks', format: 'In-Person & Online', title: 'Python for Teens: Algorithms, Data & Automation', tuition: '$490 / Cohort', next: 'Rolling Batches Every Month', description: 'Industry-standard Python, data structures, object-oriented concepts, and computational problem solving.', capstone: 'CLI expense tracker and stock market dashboard pulling live financial APIs', modules: ['Data Types, Control Flow & Functions', 'Data Structures & Files', 'Object-Oriented Programming', 'APIs & Capstone'] },
  { id: 'fullstack-web-teens', audience: 'teens', age: 'Ages 14-18', level: 'Intermediate', duration: '14 Weeks', format: 'Live Interactive Online', title: 'Modern Full-Stack Web: React, TypeScript & Node', tuition: '$560 / Cohort', next: 'Upcoming Weekend Cohort', description: 'Build responsive applications using React, TypeScript, Tailwind CSS, and REST API backends.', capstone: 'Full-stack community study hub with authentication and discussion boards', modules: ['Modern JavaScript & TypeScript', 'React UI Architecture', 'Node.js & Databases', 'Deployment & CI/CD'] },
  { id: 'cybersecurity-teens', audience: 'teens', age: 'Ages 14-18', level: 'Intermediate to Advanced', duration: '10 Weeks', format: 'In-Person & Online', title: 'Cybersecurity & Ethical Hacking Foundations', tuition: '$520 / Cohort', next: 'Starts in 3 Weeks', description: 'Network defense, cryptography, Linux, vulnerability scanning, and ethical testing in isolated labs.', capstone: 'Harden a multi-tier Linux server against simulated attacks', modules: ['Ethics & Linux', 'Networks & Packet Forensics', 'Vulnerability Analysis', 'Capture The Flag'] },
  { id: 'cloud-devops-corporate', audience: 'corporate', age: 'Professionals & Teams', level: 'Advanced / Professional', duration: '8 Weeks', format: 'Corporate Onsite / Hybrid', title: 'Enterprise Cloud Architecture & DevOps Engineering', tuition: 'Custom Corporate Packages', next: 'Scheduled on Request', description: 'Upskill engineering squads in Docker, Kubernetes, CI/CD, Terraform, and cloud-native architecture.', capstone: 'Zero-downtime blue/green deployment pipeline for an enterprise API', modules: ['Microservices & Containers', 'Kubernetes Operations', 'Infrastructure as Code', 'CI/CD & Production Hardening'] },
  { id: 'data-analytics-corporate', audience: 'corporate', age: 'Business & Data Teams', level: 'Professional', duration: '6 Weeks', format: 'Corporate Onsite / Hybrid', title: 'Enterprise Data Engineering & Power BI Analytics', tuition: 'Corporate Group Rate', next: 'Monthly Cohorts', description: 'Build reliable SQL pipelines, automate business intelligence reporting, and create executive dashboards.', capstone: 'Executive KPI command center connected to live ERP and CRM data', modules: ['Relational Modeling & SQL', 'ETL with Python', 'Power BI & DAX', 'Governance & Delivery'] },
  { id: 'executive-tech-literacy', audience: 'corporate', age: 'C-Suite & Leaders', level: 'Professional', duration: '3 Days or 4 Weeks', format: 'Corporate Onsite / Hybrid', title: 'Executive Technology Literacy & Enterprise AI Strategy', tuition: 'Bespoke Retainer', next: 'Sessions by Appointment', description: 'Practical fluency in software architecture, cloud economics, cybersecurity risk, and AI investment.', capstone: 'Three-year enterprise technology modernization roadmap', modules: ['Modern Software Stack', 'Cyber Risk & Privacy', 'Evaluating AI Investments', 'Engineering & Vendors'] }
];

const services = [
  { id: 'custom-web-platforms', title: 'Custom Enterprise Web Platforms & Portals', description: 'Design and construction of mission-critical web applications, customer portals, and internal management hubs from architecture to rollout.', bestFor: 'Corporations needing bespoke business systems that outgrow off-the-shelf software.', deliverables: ['Customer & partner portals', 'SaaS application architecture', 'Role-based access and SSO', 'Real-time dashboards', 'Automated test suites'], technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'] },
  { id: 'mobile-app-development', title: 'Native & Cross-Platform Mobile Applications', description: 'Customer and field operations apps with biometric authentication, real-time notifications, and background synchronization.', bestFor: 'Organizations requiring consistent mobile experiences across iOS and Android.', deliverables: ['iOS & Android applications', 'Offline-first storage and sync', 'Biometric authentication', 'GPS, camera & BLE integration', 'App store publishing'], technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'] },
  { id: 'cloud-devops-infra', title: 'Cloud Infrastructure & DevOps Modernization', description: 'Infrastructure as code, containerized workloads, and automated CI/CD pipelines for confident releases.', bestFor: 'Enterprises moving from legacy servers to secure, auto-scaling cloud systems.', deliverables: ['Terraform automation', 'Kubernetes provisioning', 'Zero-downtime CI/CD', 'Monitoring & telemetry', 'Cloud spend optimization'], technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform'] },
  { id: 'api-legacy-modernization', title: 'API Engineering & Legacy Modernization', description: 'Decouple mission-critical applications, build secure APIs, and integrate enterprise systems without business stoppage.', bestFor: 'Firms modernizing mission-critical legacy software incrementally.', deliverables: ['Monolith refactoring', 'REST & GraphQL APIs', 'ERP/CRM integrations', 'OpenAPI documentation', 'Database migration'], technologies: ['Go', 'Node.js', 'Python', 'Kafka', 'PostgreSQL', 'Docker'] },
  { id: 'dedicated-engineering-teams', title: 'Dedicated Engineering Squads', description: 'Embed software engineers, tech leads, QA specialists, and DevOps architects into your internal team.', bestFor: 'Engineering teams facing hiring delays or tight launch deadlines.', deliverables: ['Full-stack engineering pods', 'DevOps & SRE specialists', 'Timezone alignment', 'IP and code ownership', 'Weekly sprint reporting'], technologies: ['Full-Stack', 'Cloud / DevOps', 'Mobile', 'QA Automation'] },
  { id: 'security-architecture-audit', title: 'Cybersecurity & Architecture Advisory', description: 'Review source code, infrastructure, and cloud perimeters to identify vulnerabilities and prioritize remediation.', bestFor: 'Enterprises preparing for compliance audits or vendor reviews.', deliverables: ['Code security analysis', 'Cloud penetration testing', 'SOC2 / ISO readiness', 'Scalability audits', 'Prioritized remediation plan'], technologies: ['OWASP ZAP', 'Burp Suite', 'SonarQube', 'GuardDuty', 'Trivy'] }
];

const projectTypes = [
  { id: 'web-portal', label: 'Custom Web Portal / SaaS', weeks: 10 },
  { id: 'mobile-app', label: 'iOS & Android Mobile App', weeks: 12 },
  { id: 'cloud-devops', label: 'Cloud & DevOps Migration', weeks: 8 },
  { id: 'api-microservices', label: 'Microservices & API Overhaul', weeks: 9 },
  { id: 'dedicated-squad', label: 'Dedicated Engineering Squad', weeks: 12 }
];
const scales = [
  { id: 'mvp', label: 'MVP / Prototype', multiplier: 0.8 },
  { id: 'growth', label: 'Growth / Scale-Up', multiplier: 1 },
  { id: 'enterprise', label: 'Enterprise Mission-Critical', multiplier: 1.4 }
];
const addOns = [
  { id: 'ci-cd', label: 'Automated CI/CD Pipeline & GitHub Actions' },
  { id: 'security', label: 'SOC2 / OWASP Security Hardening & Review' },
  { id: 'offline-sync', label: 'Offline-First Mobile Synchronization' },
  { id: 'sla-support', label: '24/7 Production SLA & Monitoring' }
];

const state = { audience: 'all', format: 'all', query: '', serviceId: services[0].id, project: 'web-portal', scale: 'growth', speed: 'standard', addOns: ['ci-cd', 'security'], selectedCourseId: courses[0].id };
const dialogRoot = document.querySelector('#dialog-root');
const enrollmentDialog = document.querySelector('#enrollment-dialog');
const quoteDialog = document.querySelector('#quote-dialog');
const courseDialog = document.querySelector('#course-dialog');
const enrollmentForm = document.querySelector('#enrollment-form');
const quoteForm = document.querySelector('#quote-form');

function courseById(id) {
  return courses.find(course => course.id === id) || courses[0];
}

function updateCourseFilters() {
  let visibleCount = 0;
  document.querySelectorAll('[data-course-card]').forEach(card => {
    const matchesAudience = state.audience === 'all' || card.dataset.audience === state.audience;
    const matchesFormat = state.format === 'all' || card.dataset.format.includes(state.format);
    const matchesSearch = card.dataset.search.includes(state.query.trim().toLowerCase());
    const visible = matchesAudience && matchesFormat && matchesSearch;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  document.querySelector('#course-empty').hidden = visibleCount > 0;
}

function updateService() {
  const index = services.findIndex(service => service.id === state.serviceId);
  const service = services[index] || services[0];
  document.querySelectorAll('.service-option').forEach(button => {
    const active = button.dataset.service === service.id;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('#service-number').textContent = `Capability ${String(index + 1).padStart(2, '0')} · Production grade`;
  document.querySelector('#service-title').textContent = service.title;
  document.querySelector('#service-description').textContent = service.description;
  document.querySelector('#service-best-for').textContent = service.bestFor;
  document.querySelector('#service-quote').dataset.service = service.id;
  document.querySelectorAll('#service-deliverables li').forEach((item, itemIndex) => {
    item.textContent = service.deliverables[itemIndex] || '';
    item.hidden = !service.deliverables[itemIndex];
  });
  document.querySelectorAll('#service-technologies span').forEach((item, itemIndex) => {
    item.textContent = service.technologies[itemIndex] || '';
    item.hidden = !service.technologies[itemIndex];
  });
}

function updateEstimate() {
  const project = projectTypes.find(item => item.id === state.project) || projectTypes[0];
  const scale = scales.find(item => item.id === state.scale) || scales[1];
  let weeks = Math.round(project.weeks * scale.multiplier);
  if (state.speed === 'rapid') weeks = Math.max(6, Math.round(weeks * 0.75));
  if (state.speed === 'staged') weeks = Math.round(weeks * 1.3);
  let team = '1 Lead Architect · 2 Senior Engineers · 1 QA Engineer';
  if (state.scale === 'enterprise' || state.speed === 'rapid') team = '1 Principal Architect · 3 Senior Engineers · 1 DevOps Engineer · 1 QA Automation Lead';
  else if (state.scale === 'mvp') team = '1 Senior Full-Stack Lead · 1 Engineer · 0.5 QA Automation';
  document.querySelector('#estimate-weeks').textContent = `${weeks}–${weeks + 3} Weeks`;
  document.querySelector('#estimate-sprints').textContent = `~${Math.ceil(weeks / 2)} two-week sprints`;
  document.querySelector('#estimate-team').textContent = team;
}

function openDialog(dialog) {
  for (const panel of [enrollmentDialog, quoteDialog, courseDialog]) panel.hidden = panel !== dialog;
  dialogRoot.hidden = false;
  document.body.classList.add('dialog-open');
  dialog.querySelector('[data-dismiss]')?.focus();
}

function closeDialog() {
  dialogRoot.hidden = true;
  for (const panel of [enrollmentDialog, quoteDialog, courseDialog]) panel.hidden = true;
  document.body.classList.remove('dialog-open');
}

function openCourseDetail(courseId) {
  const course = courseById(courseId);
  state.selectedCourseId = course.id;
  document.querySelector('#course-dialog-meta').textContent = `${course.age} · ${course.level}`;
  document.querySelector('#course-dialog-title').textContent = course.title;
  document.querySelector('#course-dialog-description').textContent = course.description;
  document.querySelector('#course-dialog-duration').textContent = course.duration;
  document.querySelector('#course-dialog-format').textContent = course.format;
  document.querySelector('#course-dialog-tuition').textContent = course.tuition;
  document.querySelector('#course-dialog-capstone').textContent = course.capstone;
  document.querySelectorAll('[data-module]').forEach((item, index) => {
    item.textContent = course.modules[index] || '';
    item.closest('[data-module-row]').hidden = !course.modules[index];
  });
  openDialog(courseDialog);
}

function updateEnrollmentCourse() {
  const course = courseById(enrollmentForm.elements.courseId.value);
  const minor = course.audience === 'kids' || course.audience === 'teens';
  const guardian = document.querySelector('#guardian-field');
  guardian.hidden = !minor;
  guardian.querySelector('input').required = minor;
  document.querySelector('#course-snapshot').textContent = `${course.level} · ${course.duration} · ${course.tuition}`;
  const formatValue = course.audience === 'corporate' ? 'Corporate Onsite / Hybrid' : course.format.includes('Online') && !course.format.includes('In-Person') ? 'Live Interactive Virtual' : 'In-Person Campus Lab';
  enrollmentForm.elements.preferredFormat.value = formatValue;
}

function openEnrollment(courseId = '') {
  state.selectedCourseId = courseId || courses[0].id;
  enrollmentForm.reset();
  enrollmentForm.elements.courseId.value = state.selectedCourseId;
  document.querySelector('#enrollment-form-view').hidden = false;
  document.querySelector('#enrollment-success').hidden = true;
  updateEnrollmentCourse();
  openDialog(enrollmentDialog);
}

function openQuote(serviceId = '', estimate = null) {
  quoteForm.reset();
  const service = services.find(item => item.id === serviceId);
  const requestedService = estimate?.projectType || service?.title || 'Custom Enterprise Web Platforms & Portals';
  quoteForm.elements.serviceType.value = requestedService;
  quoteForm.elements.timeline.value = estimate?.timeline || 'Standard (8-14 Weeks)';
  quoteForm.elements.projectDescription.value = estimate?.description || '';
  document.querySelector('#quote-form-view').hidden = false;
  document.querySelector('#quote-success').hidden = true;
  openDialog(quoteDialog);
}

function saveRecord(key, record) {
  try {
    const records = JSON.parse(localStorage.getItem(key) || '[]');
    records.unshift(record);
    localStorage.setItem(key, JSON.stringify(records));
  } catch {
    // The confirmation can still be shown if browser storage is unavailable.
  }
}

function handleEnrollmentSubmit() {
  if (!enrollmentForm.reportValidity()) return;
  const values = Object.fromEntries(new FormData(enrollmentForm));
  const course = courseById(values.courseId);
  const refCode = `ETD-${Math.floor(100000 + Math.random() * 900000)}`;
  saveRecord('elite_enrollments', { ...values, contactName: values.contactName || values.learnerName, refCode, courseTitle: course.title, enrolledAt: new Date().toISOString() });
  document.querySelector('#enrollment-confirmation').textContent = `Thank you, ${values.learnerName}. Your reference is ${refCode}. The admissions team will follow up at ${values.contactEmail}.`;
  const download = document.querySelector('#brief-download');
  download.href = URL.createObjectURL(new Blob([`${course.title}\n${course.modules.join('\n')}\n\nCapstone: ${course.capstone}`], { type: 'text/plain' }));
  download.download = `EliteTech_Admission_${refCode}.txt`;
  document.querySelector('#enrollment-success [data-action="download-brief"]').dataset.ref = refCode;
  document.querySelector('#enrollment-success [data-action="download-brief"]').dataset.course = course.id;
  document.querySelector('#enrollment-success [data-action="download-brief"]').dataset.learner = values.learnerName;
  document.querySelector('#enrollment-form-view').hidden = true;
  document.querySelector('#enrollment-success').hidden = false;
}

function handleQuoteSubmit() {
  if (!quoteForm.reportValidity()) return;
  const values = Object.fromEntries(new FormData(quoteForm));
  values.requestNda = quoteForm.elements.requestNda.checked;
  const rfpId = `RFP-${Math.floor(200000 + Math.random() * 800000)}`;
  saveRecord('elite_rfp_requests', { ...values, rfpId, submittedAt: new Date().toISOString() });
  document.querySelector('#quote-confirmation').textContent = `Thank you, ${values.contactName} from ${values.companyName}. Reference: ${rfpId}. We will respond within one business day.`;
  document.querySelector('#quote-confirmed-service').textContent = values.serviceType;
  document.querySelector('#quote-confirmed-nda').textContent = values.requestNda ? 'Mutual NDA requested' : 'Standard inbound request';
  document.querySelector('#quote-form-view').hidden = true;
  document.querySelector('#quote-success').hidden = false;
}

function updateAudienceButtons() {
  document.querySelectorAll('[data-audience]').forEach(button => button.classList.toggle('active', button.dataset.audience === state.audience));
}

function updateChoiceButtons(group) {
  document.querySelectorAll(`[data-choice="${group}"]`).forEach(button => {
    const selected = button.dataset.value === state[group];
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

document.addEventListener('click', event => {
  const target = event.target.closest('button, [data-service], [data-faq]');
  if (target?.dataset.audience) {
    state.audience = target.dataset.audience;
    updateAudienceButtons();
    updateCourseFilters();
  }
  if (target?.dataset.service && !target.dataset.action) {
    state.serviceId = target.dataset.service;
    updateService();
  }
  if (target?.dataset.faq !== undefined) {
    const answer = target.nextElementSibling;
    const expanded = target.getAttribute('aria-expanded') === 'true';
    target.setAttribute('aria-expanded', String(!expanded));
    target.closest('.faq-item').classList.toggle('open', !expanded);
    answer.hidden = expanded;
  }
  if (target?.dataset.choice) {
    state[target.dataset.choice] = target.dataset.value;
    updateChoiceButtons(target.dataset.choice);
    updateEstimate();
  }
  const action = target?.dataset.action;
  if (action === 'menu') {
    const nav = document.querySelector('.mobile-nav');
    const expanded = target.getAttribute('aria-expanded') !== 'true';
    target.setAttribute('aria-expanded', String(expanded));
    nav.classList.toggle('open', expanded);
  } else if (action === 'enroll') openEnrollment(target.dataset.course || '');
  else if (action === 'enroll-detail') openEnrollment(state.selectedCourseId);
  else if (action === 'quote') openQuote(target.dataset.service || '');
  else if (action === 'corporate-quote') openQuote('', { projectType: 'Corporate Workforce IT Upskilling & Training', timeline: 'Custom Corporate Schedule', description: 'Please share your team size, technology stack, and training goals.' });
  else if (action === 'course-detail') openCourseDetail(target.dataset.course);
  else if (action === 'close-dialog') closeDialog();
  else if (action === 'estimate-quote') {
    const project = projectTypes.find(item => item.id === state.project);
    const scale = scales.find(item => item.id === state.scale);
    const selectedAddOns = addOns.filter(item => state.addOns.includes(item.id)).map(item => item.label);
    openQuote('', { projectType: project.label, timeline: `${state.speed.toUpperCase()} (${document.querySelector('#estimate-weeks').textContent})`, description: `Pre-configured blueprint\nScale: ${scale.label}\nAdd-ons: ${selectedAddOns.join(', ') || 'None'}\nRecommended pod: ${document.querySelector('#estimate-team').textContent}` });
  } else if (action === 'reset-courses') {
    state.audience = 'all'; state.format = 'all'; state.query = '';
    document.querySelector('#course-search').value = '';
    document.querySelector('#course-format').value = 'all';
    updateAudienceButtons();
    updateCourseFilters();
  } else if (action === 'download-brief') document.querySelector('#brief-download').click();
});

document.querySelector('#course-search').addEventListener('input', event => {
  state.query = event.target.value.toLowerCase();
  updateCourseFilters();
});
document.querySelector('#course-format').addEventListener('change', event => {
  state.format = event.target.value;
  updateCourseFilters();
});
document.querySelectorAll('[data-addon]').forEach(input => input.addEventListener('change', () => {
  const id = input.dataset.addon;
  state.addOns = input.checked ? [...new Set([...state.addOns, id])] : state.addOns.filter(item => item !== id);
  input.closest('.addon').classList.toggle('selected', input.checked);
}));
enrollmentForm.elements.courseId.addEventListener('change', updateEnrollmentCourse);
enrollmentForm.addEventListener('submit', event => { event.preventDefault(); handleEnrollmentSubmit(); });
quoteForm.addEventListener('submit', event => { event.preventDefault(); handleQuoteSubmit(); });
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = Object.fromEntries(new FormData(form));
  saveRecord('elite_contact_messages', { ...values, id: `MSG-${Date.now()}`, receivedAt: new Date().toISOString() });
  form.reset();
  document.querySelector('#contact-feedback').textContent = 'Thank you. Your message has been recorded in this browser.';
});
dialogRoot.addEventListener('click', event => { if (event.target === dialogRoot) closeDialog(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !dialogRoot.hidden) closeDialog(); });
document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', () => {
  document.querySelector('.mobile-nav').classList.remove('open');
  document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
}));

updateService();
updateEstimate();