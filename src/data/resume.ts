/**
 * Single source of truth for all personal, professional and project data.
 * Sourced directly from Kowshalya Gopinaidu Asokan's CV.
 * Update this file only, every section of the site reads from here.
 */
import type {
  PersonalInfo,
  AboutFact,
  Language,
  CareerStop,
  Skill,
  Project,
  AwardItem,
  StatItem,
} from '@/types'

export const personal: PersonalInfo = {
  name: 'Kowshalya Gopinaidu Asokan',
  firstName: 'Kowshalya',
  role: 'Senior Software Engineer',
  skillsLine: 'React.js · TypeScript · JavaScript · Module Federation · Redux',
  experienceYears: '6+',
  location: 'Frankfurt am Main, Germany',
  workAuth: 'Germany, No Sponsorship Required',
  availability: 'Open to Relocation',
  summary: [
    'Senior Software Engineer with 6+ years of experience building high-performance, accessible user interfaces with React.js, JavaScript and TypeScript, turning product and design requirements into production-ready components across fintech and enterprise platforms.',
    'Worked closely with product owners and engineering teams at PayPal and HCL Tech to guide UI decisions, taking ownership of architecture and code quality while mentoring contract developers, interns and junior engineers.',
    'Built reusable design-system components and a micro-frontend architecture with Module Federation, used by seven to eight product teams, and improved load time by 52% through code splitting, lazy loading and bundle optimization, validated with React Testing Library, Cypress, Playwright and TDD inside CI/CD pipelines.',
  ],
  social: {
    email: 'kowshalya.asokan@outlook.com',
    phone: '+49 15757953559',
    linkedin: 'https://linkedin.com/in/kowshalyaasokan',
    github: 'https://github.com/Kowshalya-Gopinaidu-Asokan',
    location: 'Frankfurt am Main, Germany',
  },
}

export const aboutFacts: AboutFact[] = [
  {
    id: 'experience',
    label: 'Experience',
    value: '6+ Years',
    detail: 'Fintech and enterprise platforms: PayPal, HCL Tech, Cognizant.',
    icon: 'briefcase',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Frankfurt, Germany',
    detail: 'Based in Frankfurt am Main. Open to relocation across Germany.',
    icon: 'map-pin',
  },
  {
    id: 'authorization',
    label: 'Work Authorization',
    value: 'Germany, No Sponsorship',
    detail: 'Fully authorized to work in Germany. Available immediately.',
    icon: 'shield-check',
  },
  {
    id: 'status',
    label: 'Current Status',
    value: 'Open to Opportunities',
    detail: 'Actively interviewing for Senior Software/Frontend Engineer roles while completing German B2.',
    icon: 'radar',
  },
  {
    id: 'languages',
    label: 'Languages',
    value: '4 Spoken',
    detail: 'English (C1), German (B1 completed, B2 in progress), Tamil (C2, native), Telugu (B1).',
    icon: 'languages',
  },
]

export const languages: Language[] = [
  { name: 'Tamil', level: 'C2, Native', fluency: 100 },
  { name: 'English', level: 'C1, Advanced', fluency: 90 },
  { name: 'German', level: 'B1 Completed, B2 In Progress', fluency: 65 },
  { name: 'Telugu', level: 'B1, Intermediate', fluency: 55 },
]

export const careerTimeline: CareerStop[] = [
  {
    id: 'paypal',
    company: 'PayPal',
    role: 'Software Engineer 2',
    location: 'Chennai, India',
    period: 'Jun 2024 – Aug 2025',
    summary:
      'Led the migration of a core platform module from Dust.js to React and led Module Federation adoption across 7 to 8 teams, cutting load time by more than half.',
    highlights: [
      'Led the migration of a core platform module from Dust.js to React, managing a 3-person team of contract developers and interns and taking ownership of all code reviews and architecture decisions.',
      'Built federated frontend modules with Webpack 5 Module Federation, later used by 7 to 8 teams to share components across projects.',
      'Managed the full release process, including manifest creation, OBT, production deployment and monitoring after release.',
      'Connected REST APIs and set up Adobe Analytics tracking for user behavior data, along with unit and functional testing.',
      'Reduced page load time by 52% (6s to 2.9s) by improving the webpack configuration, adding code splitting and lazy loading, checking bundle size with webpack-bundle-analyzer, and switching Lodash imports to function-level imports.',
      'Federated modules reused by 7 to 8 teams, establishing a shared component strategy across the org.',
      'Awarded the "You Nailed It Award" for outstanding teamwork and consistently high-quality delivery.',
    ],
    techStack: [
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Redux',
      'Webpack 5',
      'Module Federation',
      'REST API Integration',
      'Adobe Analytics',
      'Jest',
      'Cypress',
      'Playwright',
      'React Testing Library',
      'Git',
      'Jira',
      'Figma',
      'Harness CI/CD',
    ],
  },
  {
    id: 'hcl',
    company: 'HCL Tech',
    role: 'Senior Software Engineer',
    location: 'Chennai, India',
    period: 'Dec 2021 – May 2024',
    summary:
      'Stepped into a technical leadership role, responsible for code review standards and technical direction, and driving the Verizon UI Feature & Performance initiative.',
    highlights: [
      'Led a small team of junior developers, responsible for code review standards and technical direction.',
      'Delivered UI features, bug fixes and improvements for the Verizon account as part of the Verizon UI Feature & Performance initiative, including Adobe Analytics tracking.',
      'Reduced bundle size through refactoring and performance improvements, backed by unit tests to maintain quality.',
      'Awarded the "UI Champion Award" for exceptional ownership, driving the UI project through all phases, and delivering on time with high-quality results.',
      'Maintained application quality with comprehensive unit test coverage.',
    ],
    techStack: ['React.js', 'Redux', 'JavaScript', 'Material UI', 'REST API Integration', 'Adobe Analytics', 'Jest', 'Enzyme', 'Git', 'Jira', 'Figma'],
  },
  {
    id: 'cognizant',
    company: 'Cognizant',
    role: 'Program Analyst',
    location: 'Chennai, India',
    period: 'Jun 2019 – Nov 2021',
    summary:
      'Started the frontend journey transforming business requirements and wireframes into interactive, responsive applications for the Macy’s and KFC engagements.',
    highlights: [
      'Transformed business requirements and wireframes into interactive, responsive frontend applications for the Macy’s and KFC engagements.',
      'Wrote frontend components and unit tests with close attention to functionality and reliability on mobile and tablet.',
      'Worked with cross-functional teams on API contracts and integration.',
      'Took part in sprint planning and daily standups to keep frontend work aligned with backend services.',
      'Worked in short cycles using version control and Agile practices in a fast-paced environment.',
      'Built a foundation in responsive, cross-device frontend engineering across two major retail and QSR client engagements.',
    ],
    techStack: ['React.js', 'Redux', 'TypeScript', 'HTML5', 'CSS3', 'REST API Integration', 'Git', 'Jira', 'Figma', 'Agile/Scrum'],
  },
]

export const skills: Skill[] = [
  { id: 'react', name: 'React.js', category: 'frontend' },
  { id: 'redux', name: 'Redux', category: 'frontend' },
  { id: 'javascript', name: 'JavaScript (ES6+)', category: 'frontend' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend' },
  { id: 'html5', name: 'HTML5', category: 'frontend' },
  { id: 'css3', name: 'CSS3', category: 'frontend' },
  { id: 'bootstrap', name: 'Bootstrap', category: 'frontend' },
  { id: 'material-ui', name: 'Material UI', category: 'frontend' },
  { id: 'accessibility', name: 'Accessibility (a11y)', category: 'frontend' },

  { id: 'module-federation', name: 'Module Federation', category: 'architecture' },
  { id: 'micro-frontend', name: 'Micro-Frontend Architecture', category: 'architecture' },
  { id: 'spa', name: 'Single-Page Applications (SPA)', category: 'architecture' },
  { id: 'component-libraries', name: 'Component Libraries', category: 'architecture' },
  { id: 'design-systems', name: 'Design Systems', category: 'architecture' },

  { id: 'figma', name: 'Figma', category: 'tools' },

  { id: 'enzyme', name: 'Enzyme', category: 'testing' },
  { id: 'rtl', name: 'React Testing Library', category: 'testing' },
  { id: 'jest', name: 'Jest', category: 'testing' },
  { id: 'cypress', name: 'Cypress', category: 'testing' },
  { id: 'playwright', name: 'Playwright', category: 'testing' },
  { id: 'tdd', name: 'TDD', category: 'testing' },

  { id: 'rest-api', name: 'REST API Integration', category: 'apis' },
  { id: 'axios', name: 'Axios', category: 'apis' },
  { id: 'node-bff', name: 'Node.js (Backend for Frontend)', category: 'apis' },
  { id: 'adobe-analytics', name: 'Adobe Analytics', category: 'apis' },

  { id: 'git', name: 'Git', category: 'tools' },
  { id: 'jira', name: 'Jira', category: 'tools' },
  { id: 'postman', name: 'Postman', category: 'tools' },
  { id: 'vscode', name: 'Visual Studio Code', category: 'tools' },
  { id: 'datadog', name: 'Datadog', category: 'tools' },
  { id: 'jenkins', name: 'Jenkins', category: 'tools' },
  { id: 'harness', name: 'Harness', category: 'tools' },
  { id: 'cicd', name: 'CI/CD Pipelines', category: 'tools' },
  { id: 'vite', name: 'Vite', category: 'tools' },
  { id: 'webpack', name: 'Webpack', category: 'tools' },

  { id: 'copilot', name: 'GitHub Copilot', category: 'ai' },
  { id: 'cursor-ai', name: 'Cursor AI', category: 'ai' },
  { id: 'chatgpt', name: 'ChatGPT', category: 'ai' },
  { id: 'claude', name: 'Claude', category: 'ai' },
  { id: 'llm-integration', name: 'LLM Integration', category: 'ai' },
  { id: 'ai-assisted-dev', name: 'AI-Assisted Development', category: 'ai' },
]

export const projects: Project[] = [
  {
    id: 'paypal-dustjs-module-federation',
    title: 'Dust.js to React Migration & Module Federation Platform - PayPal',
    tagline: 'Modernizing a core platform module while enabling 7 to 8 teams to share components',
    type: 'professional',
    company: 'PayPal',
    period: 'Jun 2024 – Aug 2025',
    overview:
      'Led the frontend migration of a core PayPal platform module from Dust.js to React and TypeScript, and built the federated module architecture that other teams used to reuse shared components without coordinating deploys.',
    features: [
      'Migrated a core platform module from Dust.js to React, managing a 3-person team of contract developers and interns and owning all code reviews and architecture decisions',
      'Built federated frontend modules with Webpack 5 Module Federation, adopted by 7 to 8 teams for shared component reuse',
      'Owned the full release process, including manifest creation, OBT, production deployment and monitoring after release',
      'Connected REST APIs and set up Adobe Analytics tracking, backed by unit and functional testing',
      'Reduced page load time by 52% (6s to 2.9s) through webpack configuration improvements, code splitting, lazy loading, bundle analysis with webpack-bundle-analyzer, and switching Lodash imports to function-level imports',
    ],
    techStack: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Redux', 'Webpack 5', 'Module Federation', 'REST API Integration', 'Adobe Analytics', 'Jest', 'Cypress', 'Playwright', 'React Testing Library', 'Harness CI/CD'],
    linkLabel: 'Enterprise Platform (PayPal)',
    metric: { label: 'Load Time', value: '52% faster' },
  },
  {
    id: 'verizon-ui-refresh',
    title: 'Verizon UI Feature & Performance - HCL Tech',
    tagline: 'Feature delivery and performance improvements for a top-tier telecom client',
    type: 'professional',
    company: 'HCL Tech',
    period: 'Dec 2021 – May 2024',
    overview:
      'Delivered new UI features, bug fixes and performance improvements for the Verizon account at HCL Tech, while leading code review standards for a small development team.',
    features: [
      'Led a small team of junior developers, owning code review standards and technical direction',
      'Delivered UI features, bug fixes and improvements for the Verizon account, including Adobe Analytics tracking',
      'Reduced bundle size through refactoring and performance improvements, backed by unit test coverage',
      'Awarded the "UI Champion Award" for ownership and high-quality delivery on the account',
    ],
    techStack: ['React.js', 'Redux', 'JavaScript', 'Material UI', 'Adobe Analytics', 'Jest', 'Enzyme', 'Figma'],
    linkLabel: 'Enterprise Client Engagement (HCL Tech)',
    metric: { label: 'Award', value: 'UI Champion' },
  },
  {
    id: 'cognizant-kfc-macys',
    title: "KFC & Macy's Frontend Engagements - Cognizant",
    tagline: 'Customer-facing features still live in production today',
    type: 'professional',
    company: 'Cognizant',
    period: 'Jun 2019 – Nov 2021',
    overview:
      "Built interactive, responsive frontend applications for the KFC and Macy's retail and QSR engagements at Cognizant, turning business requirements and wireframes into production UI. Several of the KFC features delivered during this engagement remain live and in use by customers today.",
    features: [
      "Transformed business requirements and wireframes into interactive, responsive frontend applications for KFC and Macy's",
      'Wrote frontend components and unit tests with close attention to functionality and reliability on mobile and tablet',
      'Worked with cross-functional teams on API contracts and integration',
      'Some of the KFC features delivered during this engagement remain live in production and in active use by customers',
    ],
    techStack: ['React.js', 'Redux', 'TypeScript', 'HTML5', 'CSS3', 'REST API Integration', 'Git', 'Jira', 'Figma'],
    linkLabel: 'Enterprise Client Engagement (Cognizant)',
    metric: { label: 'Status', value: 'Live in Production' },
  },
  {
    id: 'ai-assisted-projects',
    title: 'AI-Assisted Personal Projects',
    tagline: 'Exploring AI-assisted development workflows outside of client work',
    type: 'personal',
    overview:
      'A collection of self-directed projects built with AI-assisted tools such as GitHub Copilot, Cursor AI, ChatGPT and Claude, used to explore new React and TypeScript patterns and speed up day-to-day development, hosted publicly on GitHub.',
    features: [
      'Rapid prototyping with GitHub Copilot and Cursor AI to test new React and TypeScript patterns outside of a client codebase',
      'Using ChatGPT and Claude for code reviews, refactoring plans and documentation drafts',
      'Applying the same testing and code-quality habits used in production work to personal projects',
    ],
    techStack: ['React.js', 'TypeScript', 'GitHub Copilot', 'Cursor AI', 'ChatGPT', 'Claude'],
    linkLabel: 'View on GitHub',
    linkUrl: 'https://github.com/Kowshalya-Gopinaidu-Asokan',
  },
]

export const awards: AwardItem[] = [
  {
    id: 'ui-champion',
    title: 'UI Champion Award',
    organization: 'HCL Tech',
    description:
      'For exceptional ownership, driving the UI project through all phases, and delivering on time with high-quality results.',
    icon: 'trophy',
  },
  {
    id: 'you-nailed-it',
    title: 'You Nailed It Award',
    organization: 'PayPal',
    description: 'For outstanding teamwork and consistently delivering high-quality solutions.',
    icon: 'medal',
  },
]

export const stats: StatItem[] = [
  { id: 'years', value: 6, suffix: '+', label: 'Years of Experience' },
  { id: 'companies', value: 3, suffix: '', label: 'Global Companies' },
  { id: 'perf', value: 52, suffix: '%', label: 'Load Time Reduction (PayPal)' },
  { id: 'teams', value: 8, suffix: '', label: 'Teams Adopting Federated Modules' },
]

export const education = {
  degree: 'B.Eng. in Electronics and Instrumentation Engineering',
  institution: 'Anna University, Chennai, India',
  period: 'Aug 2015 – Apr 2019',
}
