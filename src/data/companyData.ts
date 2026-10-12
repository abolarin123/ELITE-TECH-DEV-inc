export interface Course {
  id: string;
  title: string;
  targetAudience: 'kids' | 'teens' | 'corporate';
  ageRange: string;
  level: string;
  duration: string;
  format: 'In-Person & Online' | 'Live Interactive Online' | 'Corporate Onsite / Hybrid';
  shortDesc: string;
  fullDesc: string;
  keySkills: string[];
  capstoneProject: string;
  modules: { week: string; topic: string; details: string }[];
  certification: string;
  nextCohortDate: string;
  tuition: string;
  popular?: boolean;
}

export interface SoftwareService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  bestFor: string;
}

export interface CaseStudy {
  id: string;
  clientCategory: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  timeline: string;
  technologies: string[];
  quote: {
    text: string;
    author: string;
    role: string;
    organization: string;
  };
}

export const COURSES: Course[] = [
  // KIDS PROGRAMS (Ages 7-12)
  {
    id: 'scratch-coding-kids',
    title: 'Creative Coding & Game Logic with Scratch',
    targetAudience: 'kids',
    ageRange: 'Ages 7 – 10',
    level: 'Beginner',
    duration: '8 Weeks (2 hrs/week)',
    format: 'In-Person & Online',
    shortDesc: 'Foundational computational thinking, algorithmic logic, and animation storytelling using visual block scripting.',
    fullDesc: 'A joyful and rigorous introduction to programming tailored for young inquisitive minds. Students explore loops, variables, conditional logic, and coordinate mathematics by constructing playable arcade games and interactive animations.',
    keySkills: ['Algorithmic Logic', 'Conditional Branching', 'Variables & Sequences', 'Interactive Storytelling', 'Debugging Foundations'],
    capstoneProject: 'Multi-level Space Explorer Arcade Game with custom sound effects and scoring system',
    modules: [
      { week: 'Weeks 1-2', topic: 'The Language of Computers', details: 'Introduction to sprites, coordinate grids (X/Y), sequencing, and event triggers.' },
      { week: 'Weeks 3-4', topic: 'Variables & Scoring Engines', details: 'Building game state, score tracking, timers, and randomized collectible items.' },
      { week: 'Weeks 5-6', topic: 'Complex Logic & Collision Physics', details: 'Nested conditionals, sensing physics, gravity simulations, and obstacle detection.' },
      { week: 'Weeks 7-8', topic: 'Capstone Production & Showcase', details: 'Project polish, sound design, user testing, and public cohort graduation showcase.' }
    ],
    certification: 'Elite Junior Computational Thinking Certificate',
    nextCohortDate: 'Starts First Monday of Next Month',
    tuition: '$290 / Cohort',
    popular: true
  },
  {
    id: 'robotics-microbit-kids',
    title: 'Robotics, Electronics & Micro:bit Hardware Lab',
    targetAudience: 'kids',
    ageRange: 'Ages 9 – 12',
    level: 'Beginner',
    duration: '10 Weeks (2.5 hrs/week)',
    format: 'In-Person & Online',
    shortDesc: 'Hands-on hardware programming, sensors, LED matrices, and motor actuation using BBC Micro:bit and physical kits.',
    fullDesc: 'Bridging the software and physical world. Students connect tactile breadboards, ultrasonic distance sensors, servo motors, and radio communication modules to build tangible robotics projects.',
    keySkills: ['Embedded Systems', 'Sensor Integration', 'Circuit Fundamentals', 'Radio Wireless Protocol', 'Physical Computing'],
    capstoneProject: 'Autonomous Obstacle-Navigating Robotic Rover with Smart Distance Sensing',
    modules: [
      { week: 'Weeks 1-3', topic: 'Hardware Architecture & Microcontrollers', details: 'Pins, LEDs, accelerometer sensors, light sensors, and electronic circuits.' },
      { week: 'Weeks 4-6', topic: 'Actuators, Motors & Radio Communication', details: 'Driving continuous rotation servos, transmitting sensor readings wirelessly.' },
      { week: 'Weeks 7-8', topic: 'Ultrasonic & Infrared Collision Logic', details: 'Autonomous decision-making based on real-time spatial obstacles.' },
      { week: 'Weeks 9-10', topic: 'Rover Assembly & Live Arena Challenge', details: 'Chassis assembly, fine-tuning sensor calibration, and obstacle course trial.' }
    ],
    certification: 'Elite Junior Embedded Systems & Robotics Certificate',
    nextCohortDate: 'Starts in 2 Weeks',
    tuition: '$380 / Cohort (Kit Included)'
  },
  {
    id: 'young-web-explorer',
    title: 'Junior Web Creators: HTML5 & Visual Design',
    targetAudience: 'kids',
    ageRange: 'Ages 10 – 12',
    level: 'Intermediate',
    duration: '8 Weeks (2 hrs/week)',
    format: 'In-Person & Online',
    shortDesc: 'Transition from block code to typing real semantic HTML & CSS to publish personal websites and hobby portfolios.',
    fullDesc: 'Empowers pre-teens to demystify how the internet works. Students write clean web markup, structure content, apply creative styling, and publish live on the web under secure supervised sandboxes.',
    keySkills: ['Semantic HTML5', 'CSS Styling & Colors', 'Typography & Layout', 'Digital Asset Management', 'Safe Web Publishing'],
    capstoneProject: 'Interactive Multi-page Animal Sanctuary or Hobby Wiki hosted online',
    modules: [
      { week: 'Weeks 1-2', topic: 'How the Internet Renders Pages', details: 'Web browsers, HTML structure, headings, paragraphs, and hyperlink networks.' },
      { week: 'Weeks 3-4', topic: 'Styling with Cascading Style Sheets', details: 'Colors, fonts, borders, margins, box model, and visual aesthetic choices.' },
      { week: 'Weeks 5-6', topic: 'Media, Lists & Interactive Hyperlinks', details: 'Embedding optimized images, video embeds, structured navigation bars.' },
      { week: 'Weeks 7-8', topic: 'Responsive Polish & Cloud Hosting', details: 'Mobile-friendly flexbox basics, code review, and secure deployment.' }
    ],
    certification: 'Elite Junior Web Creator Certificate',
    nextCohortDate: 'Enrolling Now for Upcoming Session',
    tuition: '$320 / Cohort'
  },

  // TEENS PROGRAMS (Ages 13-18)
  {
    id: 'python-core-teens',
    title: 'Python for Teens: Algorithms, Data & Automation',
    targetAudience: 'teens',
    ageRange: 'Ages 13 – 18',
    level: 'Beginner to Intermediate',
    duration: '12 Weeks (3 hrs/week)',
    format: 'In-Person & Online',
    shortDesc: 'Industry-standard Python syntax, data structures, object-oriented concepts, and computational problem solving.',
    fullDesc: 'Our signature pre-college computer science accelerator. Prepares teens for high school AP Computer Science, collegiate engineering degrees, and real-world scripting. Includes data analysis libraries and API consumption.',
    keySkills: ['Python 3.12+', 'Data Structures (Lists, Dictionaries)', 'Object-Oriented Programming', 'File I/O & JSON', 'Algorithm Optimization'],
    capstoneProject: 'CLI Expense Tracker and Stock Market Dashboard pulling live financial APIs',
    modules: [
      { week: 'Weeks 1-3', topic: 'Data Types, Control Flow & Functions', details: 'Variables, numeric math, conditionals, loops, functions, and parameter passing.' },
      { week: 'Weeks 4-6', topic: 'Compound Data Structures & File Handling', details: 'Lists, dictionaries, tuples, sets, reading CSV/JSON data from disk.' },
      { week: 'Weeks 7-9', topic: 'Object-Oriented Programming (OOP)', details: 'Classes, methods, inheritance, encapsulation, and modular code architecture.' },
      { week: 'Weeks 10-12', topic: 'APIs, External Libraries & Capstone', details: 'Requests library, processing JSON REST endpoints, automated testing, final defense.' }
    ],
    certification: 'Elite Certified Python Developer (Associate Level)',
    nextCohortDate: 'Rolling Batches Every Month',
    tuition: '$490 / Cohort',
    popular: true
  },
  {
    id: 'fullstack-web-teens',
    title: 'Modern Full-Stack Web: React, TypeScript & Node',
    targetAudience: 'teens',
    ageRange: 'Ages 14 – 18',
    level: 'Intermediate',
    duration: '14 Weeks (3 hrs/week)',
    format: 'Live Interactive Online',
    shortDesc: 'Build modern, responsive web applications using React, TypeScript, Tailwind CSS, and REST API backends.',
    fullDesc: 'Equips ambitious teens with the exact stack demanded by tech startups and top tech firms. Students build authenticated applications, connect databases, and learn Git version control on GitHub.',
    keySkills: ['TypeScript', 'React Components & Hooks', 'Tailwind CSS', 'Node.js & Express APIs', 'Git & GitHub Collaboration'],
    capstoneProject: 'Full-stack Community Study Hub with user authentication and real-time discussion boards',
    modules: [
      { week: 'Weeks 1-3', topic: 'TypeScript & Modern JavaScript ES6+', details: 'Types, interfaces, async/await promises, functional array methods.' },
      { week: 'Weeks 4-7', topic: 'React UI Architecture', details: 'Component hierarchy, state management, hooks (useState, useEffect), Tailwind UI.' },
      { week: 'Weeks 8-11', topic: 'Node.js Backend & Database Storage', details: 'REST API design, routing, SQLite/PostgreSQL schema modeling, CRUD endpoints.' },
      { week: 'Weeks 12-14', topic: 'Deployment, CI/CD & Portfolio Publish', details: 'Deploying to cloud platforms, GitHub profile optimization, capstone presentation.' }
    ],
    certification: 'Elite Junior Full-Stack Engineer Certificate',
    nextCohortDate: 'Upcoming Weekend Cohort',
    tuition: '$560 / Cohort'
  },
  {
    id: 'cybersecurity-teens',
    title: 'Cybersecurity & Ethical Hacking Foundations',
    targetAudience: 'teens',
    ageRange: 'Ages 14 – 18',
    level: 'Intermediate to Advanced',
    duration: '10 Weeks (3 hrs/week)',
    format: 'In-Person & Online',
    shortDesc: 'Network defense, cryptography, Linux command line, vulnerability scanning, and ethical security testing.',
    fullDesc: 'Instills ethical computing ethics while providing rigorous technical training in networking fundamentals, penetration testing concepts, and digital forensics in isolated legal lab environments.',
    keySkills: ['Linux CLI & Bash', 'TCP/IP & Network Protocols', 'Wireshark Packet Analysis', 'Cryptography Basics', 'Web Application Vulnerabilities (OWASP)'],
    capstoneProject: 'Hardening a Multi-Tier Linux Server against simulated brute-force and SQL injection attacks',
    modules: [
      { week: 'Weeks 1-2', topic: 'Ethical Guidelines & Linux Operations', details: 'Legal boundaries, Linux terminal navigation, file permissions, shell scripting.' },
      { week: 'Weeks 3-5', topic: 'Computer Networks & Packet Forensics', details: 'OSI model, Wireshark packet capture, DNS, subnetting, port scanning with Nmap.' },
      { week: 'Weeks 6-8', topic: 'Vulnerability Analysis & Web Defense', details: 'OWASP Top 10, cross-site scripting (XSS), SQLi prevention, secure coding.' },
      { week: 'Weeks 9-10', topic: 'Capture The Flag (CTF) Tournament', details: 'Team-based cyber defense competition and forensic report writing.' }
    ],
    certification: 'Elite Cyber Defender Certificate',
    nextCohortDate: 'Starts in 3 Weeks',
    tuition: '$520 / Cohort'
  },

  // CORPORATE & PROFESSIONAL PROGRAMS
  {
    id: 'cloud-devops-corporate',
    title: 'Enterprise Cloud Architecture & DevOps Engineering',
    targetAudience: 'corporate',
    ageRange: 'Professionals & Corporate Teams',
    level: 'Advanced / Professional',
    duration: '8 Weeks (Accelerated / Modular)',
    format: 'Corporate Onsite / Hybrid',
    shortDesc: 'Upskilling enterprise engineering squads in Docker containerization, Kubernetes orchestration, CI/CD, and Terraform IaC.',
    fullDesc: 'Designed specifically for enterprise technology departments transitioning from monolithic environments to scalable cloud-native architectures. Custom tailored to AWS, Azure, or Google Cloud Platform with production best practices.',
    keySkills: ['Docker & Containerization', 'Kubernetes Orchestration', 'Terraform (IaC)', 'CI/CD Pipelines (GitHub Actions/GitLab)', 'Cloud Observability & Security'],
    capstoneProject: 'Zero-downtime blue/green deployment pipeline for high-throughput enterprise API',
    modules: [
      { week: 'Module 1', topic: 'Microservice Architectures & Containerization', details: 'Dockerizing production runtimes, multi-stage builds, minimal secure base images.' },
      { week: 'Module 2', topic: 'Kubernetes Cluster Operations', details: 'Pods, Deployments, Services, Ingress controllers, Helm charts, autoscaling policies.' },
      { week: 'Module 3', topic: 'Infrastructure as Code (Terraform)', details: 'State management, modular cloud provisioning on AWS/Azure, drift detection.' },
      { week: 'Module 4', topic: 'Automated CI/CD & Production Hardening', details: 'Automated test gates, SAST security scans, blue/green rollouts, Prometheus metrics.' }
    ],
    certification: 'Elite Enterprise Cloud Architect Credential',
    nextCohortDate: 'Scheduled on Corporate Request',
    tuition: 'Custom Corporate Packages',
    popular: true
  },
  {
    id: 'data-analytics-corporate',
    title: 'Enterprise Data Engineering & Power BI Analytics',
    targetAudience: 'corporate',
    ageRange: 'Business Analysts & Data Teams',
    level: 'Professional',
    duration: '6 Weeks (Executive Friendly)',
    format: 'Corporate Onsite / Hybrid',
    shortDesc: 'Automate business intelligence reporting, build reliable SQL data pipelines, and craft high-impact executive dashboards.',
    fullDesc: 'Empowers corporate finance, operations, and product teams to eliminate manual spreadsheet bottlenecks. Participants master advanced SQL queries, automated ETL scripts with Python, and interactive Power BI governance.',
    keySkills: ['Advanced SQL & Window Functions', 'Python for ETL (Pandas)', 'Power BI DAX & Data Modeling', 'Automated Scheduled Pipelines', 'Executive KPI Storytelling'],
    capstoneProject: 'Enterprise Executive KPI Command Center pulling live ERP & CRM data streams',
    modules: [
      { week: 'Module 1', topic: 'Relational Data Modeling & Advanced SQL', details: 'Complex joins, windowing, aggregation partitions, performance index tuning.' },
      { week: 'Module 2', topic: 'ETL Pipelines with Python & Data Cleaning', details: 'Automating multi-source ingestion, anomaly detection, automated error alerts.' },
      { week: 'Module 3', topic: 'Power BI Data Modeling & Advanced DAX', details: 'Star schemas, time-intelligence calculations, dynamic measures, row-level security.' },
      { week: 'Module 4', topic: 'Governance, Deployment & Executive Delivery', details: 'Power BI Service workspaces, scheduled gateway refreshes, interactive storytelling.' }
    ],
    certification: 'Elite Certified Data Analytics Specialist',
    nextCohortDate: 'Monthly Cohorts & Custom Corporate Booking',
    tuition: 'Corporate Group Rate Available'
  },
  {
    id: 'executive-tech-literacy',
    title: 'Executive Technology Literacy & Enterprise AI Strategy',
    targetAudience: 'corporate',
    ageRange: 'C-Suite, Directors & Product Leaders',
    level: 'Professional',
    duration: '3-Day Intensive or 4-Week Executive Track',
    format: 'Corporate Onsite / Hybrid',
    shortDesc: 'Strategic fluency in modern software architecture, cloud economics, cybersecurity risk governance, and pragmatic AI ROI.',
    fullDesc: 'A no-nonsense, pragmatic technology briefing for non-technical executives and board members. Teaches leaders how to evaluate technical debt, navigate software vendor proposals, govern data privacy, and budget technical initiatives effectively.',
    keySkills: ['Cloud Economics & FinOps', 'Cybersecurity Governance & Compliance', 'Enterprise AI Feasibility Assessment', 'Technical Debt Valuation', 'Vendor & RFP Evaluation'],
    capstoneProject: 'Executive 3-Year Enterprise Technology Modernization Roadmap & Governance Blueprint',
    modules: [
      { week: 'Session 1', topic: 'The Modern Software Stack Demystified', details: 'Microservices vs monoliths, cloud vendors, APIs as strategic business assets.' },
      { week: 'Session 2', topic: 'Cyber Risk, Compliance & Data Privacy', details: 'Ransomware risk mitigation, SOC2/ISO requirements, audit oversight, breach readiness.' },
      { week: 'Session 3', topic: 'Evaluating AI & Machine Learning Investments', details: 'Identifying high-ROI workflows vs speculative AI buzzwords, governance guardrails.' },
      { week: 'Session 4', topic: 'Engineering Team Structure & Vendor Management', details: 'In-house vs outsourcing trade-offs, agile delivery KPIs, RFP technical scoring.' }
    ],
    certification: 'Elite Executive Technology Governance Fellow',
    nextCohortDate: 'Executive Sessions by Appointment',
    tuition: 'Executive Bespoke Retainer'
  }
];

export const SOFTWARE_SERVICES: SoftwareService[] = [
  {
    id: 'custom-web-platforms',
    number: '01',
    title: 'Custom Enterprise Web Platforms & Portals',
    tagline: 'High-concurrency, responsive web systems engineered for operational scale.',
    description: 'We design and construct mission-critical web applications, customer portals, and internal management hubs from architecture to rollout. Built with type-safe modern frameworks and resilient databases.',
    deliverables: [
      'Bespoke Customer & Partner Portals',
      'High-throughput SaaS Application Architecture',
      'Role-based Access Control (RBAC) & Single Sign-On (SSO)',
      'Real-time Data Sync & Interactive Dashboards',
      'Automated Test Suites & High Test Coverage'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
    bestFor: 'Corporations needing bespoke business systems that outgrow off-the-shelf software.'
  },
  {
    id: 'mobile-app-development',
    number: '02',
    title: 'Native & Cross-Platform Mobile Applications',
    tagline: 'Fluid iOS and Android experiences with offline capability and enterprise security.',
    description: 'From customer-facing consumer apps to enterprise field operations tools, we deliver performant mobile software with biometric auth, real-time push notifications, and background data synchronization.',
    deliverables: [
      'iOS & Android Cross-Platform Development',
      'Offline-first Data Storage & Background Sync',
      'Biometric Authentication & Secure Enclave Storage',
      'Native Device Hardware Integration (GPS, Camera, BLE)',
      'App Store & Play Store Compliance & Publishing'
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    bestFor: 'Organizations requiring uniform mobile experiences across iOS and Android ecosystems.'
  },
  {
    id: 'cloud-devops-infra',
    number: '03',
    title: 'Cloud Infrastructure & DevOps Modernization',
    tagline: 'Automated, resilient cloud environments on AWS, Azure, and Google Cloud.',
    description: 'We eliminate infrastructure bottlenecks by architecting infrastructure as code (IaC), containerizing workloads, and building automated CI/CD deployment pipelines that let your teams ship with confidence.',
    deliverables: [
      'Terraform Infrastructure as Code (IaC) Automation',
      'Kubernetes Cluster Provisioning & Autoscaling',
      'Automated Zero-Downtime CI/CD Pipelines',
      '24/7 Cloud Monitoring, Log Aggregation & Telemetry',
      'Cloud Spend Optimization & FinOps Audit'
    ],
    technologies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform', 'Datadog'],
    bestFor: 'Enterprises moving from legacy on-premises servers to secure, auto-scaling cloud clouds.'
  },
  {
    id: 'api-legacy-modernization',
    number: '04',
    title: 'API Engineering & Legacy System Modernization',
    tagline: 'Deconstruct brittle monoliths into robust, well-documented microservices.',
    description: 'Don’t let decades-old code slow your business down. We decouple mission-critical legacy applications, build secure REST and GraphQL API layers, and integrate disparate third-party enterprise tools seamlessly.',
    deliverables: [
      'Monolith-to-Microservices Incremental Refactoring',
      'High-Performance RESTful & GraphQL API Gateways',
      'Third-Party Enterprise Integrations (ERP, CRM, Payment)',
      'Comprehensive OpenAPI / Swagger Documentation',
      'Database Migration with Zero Data Loss Guarantee'
    ],
    technologies: ['Go (Golang)', 'Node.js', 'Python', 'Kafka', 'RabbitMQ', 'PostgreSQL', 'Docker'],
    bestFor: 'Firms with mission-critical legacy software that need modernization without business stoppage.'
  },
  {
    id: 'dedicated-engineering-teams',
    number: '05',
    title: 'Dedicated Engineering Squads & Staff Augmentation',
    tagline: 'Hand-picked senior engineers integrated directly into your sprint cycles.',
    description: 'Accelerate product roadmaps by embedding rigorously vetted senior software engineers, tech leads, QA automation specialists, and DevOps architects into your internal team within days.',
    deliverables: [
      'Dedicated Full-Stack & Backend Engineering Pods',
      'Certified DevOps & Site Reliability Engineers (SRE)',
      'Full Timezone Alignment & Daily Agile Standups',
      'Complete Intellectual Property & Code Ownership Transfer',
      'Transparent Weekly Sprint Velocity Reports'
    ],
    technologies: ['Full-Stack', 'Cloud / DevOps', 'Mobile', 'QA Automation', 'Technical Project Management'],
    bestFor: 'Corporate engineering managers facing hiring delays or tight product launch deadlines.'
  },
  {
    id: 'security-architecture-audit',
    number: '06',
    title: 'Cybersecurity Audits & Technical Architecture Advisory',
    tagline: 'Rigorous penetration testing, threat modeling, and compliance roadmap audits.',
    description: 'Identify vulnerabilities before bad actors do. Our security veterans review source code, infrastructure configurations, and cloud perimeters to ensure compliance with global data security frameworks.',
    deliverables: [
      'Full Codebase Static & Dynamic Security Analysis',
      'Cloud Perimeter & Network Penetration Testing',
      'SOC2 / ISO 27001 Readiness Gap Analysis',
      'System Architecture & Scalability Stress Audits',
      'Executive Risk Assessment & Prioritized Remediation Plan'
    ],
    technologies: ['OWASP ZAP', 'Burp Suite', 'SonarQube', 'AWS GuardDuty', 'Trivy', 'OpenVAS'],
    bestFor: 'Enterprises preparing for compliance audits or enterprise client vendor security reviews.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-banking-migration',
    clientCategory: 'Financial Services',
    title: 'Core Banking API Overhaul & Cloud Microservices Migration',
    description: 'Elite Technology Development modernized a legacy monolithic financial transaction system for a regional banking group into a containerized microservices architecture with automated compliance auditing.',
    metric: '72% Reduction',
    metricLabel: 'in Average Transaction Latency',
    timeline: '5-Month Project Delivery',
    technologies: ['Go', 'TypeScript', 'Docker', 'Kubernetes', 'AWS', 'PostgreSQL'],
    quote: {
      text: 'The engineering caliber of Elite Technology Development Inc. gave our board complete confidence. They completed our critical infrastructure modernization with zero seconds of unplanned downtime.',
      author: 'Marcus Vance',
      role: 'Chief Information Officer',
      organization: 'Apex Regional Financial Group'
    }
  },
  {
    id: 'freight-logistics-portal',
    clientCategory: 'Supply Chain & Logistics',
    title: 'Cross-Border Freight Tracking & Fleet Dispatch Automation',
    description: 'Engineered an end-to-end multi-tenant operations portal and mobile application for 420 field drivers, providing real-time GPS fleet telematics, automated customs bill of lading generation, and warehouse handoffs.',
    metric: '64% Faster',
    metricLabel: 'Dispatch Turnaround & Customs Clearance',
    timeline: '4-Month Staged Rollout',
    technologies: ['React', 'Node.js', 'Flutter', 'PostgreSQL', 'Redis', 'Google Cloud'],
    quote: {
      text: 'Our operations team reclaimed over 20 hours each week per dispatch branch. The custom mobile app and driver portal built by Elite has scaled effortlessly through peak freight season.',
      author: 'Elena Rostova',
      role: 'VP of Global Logistics',
      organization: 'Vanguard Transcontinental Freight'
    }
  },
  {
    id: 'corporate-upskilling-bank',
    clientCategory: 'Enterprise IT Training',
    title: '320-Engineer Enterprise Cloud & Automation Upskilling Program',
    description: 'Elite Technology Development designed and delivered a customized 12-week hybrid corporate upskilling curriculum for an enterprise financial institution, migrating their legacy developers to modern containerized microservices and DevOps practices.',
    metric: '45 Internal Bots',
    metricLabel: 'Built by Graduates Saving 1,200 hrs/month',
    timeline: '12-Week Hybrid Program',
    technologies: ['Docker', 'Python Automation', 'Power BI', 'GitHub Actions', 'AWS'],
    quote: {
      text: 'Elite’s training was not academic fluff. Their instructors are practicing software architects who guided our engineers through real code repos. The business return on investment was visible within weeks.',
      author: 'Dr. Adeyemi Phillips',
      role: 'Head of People & Technical Capability',
      organization: 'Sterling Trust Corporation'
    }
  }
];

export const FAQS = [
  {
    question: 'How do you structure IT training for young kids versus teenagers?',
    answer: 'For kids (ages 7–12), we emphasize experiential, visual, and tactile learning through Scratch, micro:bit hardware, and game mechanics to foster algorithmic thinking without frustration. For teens (ages 13–18), we introduce professional-grade text syntax including Python, HTML/CSS/JavaScript, React, and command-line Linux, preparing them directly for university computer science and industry internships.'
  },
  {
    question: 'Can corporate training programs be customized for our company’s specific tech stack?',
    answer: 'Yes. Every corporate upskilling engagement begins with a technical needs assessment and code review of your team’s existing projects. We customize syllabi around your preferred cloud provider (AWS, Azure, or GCP), coding languages, internal frameworks, and security policies.'
  },
  {
    question: 'How does Elite Technology Development handle software development engagements?',
    answer: 'We provide both end-to-end fixed-scope project delivery and dedicated engineering staff augmentation. All engagements operate with clear weekly sprint demos, full intellectual property assignment to your firm, CI/CD automated test pipelines, and complete transparency in Jira/GitHub.'
  },
  {
    question: 'Are training sessions available in-person or online?',
    answer: 'We offer flexible delivery modes: high-tech physical training labs with hardware kits, interactive live virtual classes led by veteran mentors with 1:1 breakout rooms, and corporate onsite workshops delivered at your enterprise headquarters.'
  },
  {
    question: 'What certifications do students and corporate participants earn?',
    answer: 'Graduates receive verifiable Elite Technology Development Inc. Credentials with unique cryptographic verification IDs, alongside preparation pathways for recognized industry credentials such as AWS Certified Cloud Practitioner, Python Institute PCEP/PCAP, and CompTIA certifications.'
  }
];
