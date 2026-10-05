import friends360 from './assets/friends360.png';
import owdle from './assets/owdle.png';
import languageBuddy from './assets/LanguageBuddy.png';
import weatherApp from './assets/weatherApp.png';
import wuct from './assets/wuct.jpeg';
import liveLectureCompanion from './assets/LiveLectureCompanion.jpg';

export const EMAIL = 'n.d.yohros@wustl.edu';
export const RESUME_URL =
  'https://github.com/CoderNessim/resume/blob/main/_Nessim%20Yohros%20Resume%20Final.docx.pdf';

export const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

export const socialLinks = [
  { name: 'GitHub', link: 'https://github.com/CoderNessim' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/nessim-yohros' },
  { name: 'Instagram', link: 'https://www.instagram.com/nessimyohros/' },
];

export const stats = [
  { value: '25K+', label: 'risk records made agent-searchable at PayPal' },
  { value: '50K+', label: 'Mastercard employees on Workbench' },
  { value: '150+', label: 'members on the WUCT app' },
  { value: '100+', label: 'students mentored as a TA' },
];

export const experience = [
  {
    company: 'PayPal',
    role: 'Software Engineering Intern',
    location: 'San Jose, CA',
    dates: 'May 2026 – Aug 2026',
    summary:
      'Gave AI agents secure, permission-aware access to internal risk review systems.',
    bullets: [
      'Architected an enterprise MCP server in Python with FastMCP, letting AI agents interact with internal risk review backend services.',
      'Designed 10+ Java Spring Boot APIs with advanced MySQL/JPA filtering so agents can search and act on 25,000+ risk review records.',
      'Implemented role-based SSO authentication across 40+ MCP tools, gating sensitive data by user permissions.',
      'Built AI-powered analysis pipelines that automate review workflows across 10,000+ product change requests.',
    ],
    tech: ['Python', 'FastMCP', 'Spring Boot', 'MySQL', 'JPA', 'SSO'],
  },
  {
    company: 'Mastercard',
    role: 'Software Engineering Intern',
    location: "O'Fallon, MO",
    dates: 'Jun 2025 – Aug 2025',
    summary:
      'Helped build Mastercard Workbench, a single dashboard for the tools 50,000+ employees use every day.',
    bullets: [
      'Integrated 3+ SaaS APIs (Confluence, ShareFile, Jira) into ServiceNow for centralized access to internal tools.',
      'Co-developed Mastercard Workbench, aggregating SaaS notifications and tasks for 50,000+ users.',
      'Built Python scripts and MID server connections to securely link the Mastercard Catalog to ServiceNow.',
      'Automated Excel dataset ingestion with SQL transform rules, cutting manual processing time by 80%.',
    ],
    tech: ['ServiceNow', 'Python', 'SQL', 'REST APIs'],
  },
  {
    company: 'WashU STEM Association',
    role: 'Software Engineer',
    location: 'St. Louis, MO',
    dates: 'Aug 2024 – Present',
    summary:
      'Shipped and maintain the official app for the WashU Chemistry Tournament.',
    bullets: [
      'Launched a cross-platform Flutter app for WUCT with iOS push notifications via Firebase Messaging, serving 150+ members.',
      'Built personalized scheduling and profiles with Firestore and Riverpod state management.',
      'Improved registration for 500+ weekly users by reworking the website logistics system in JavaScript.',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'JavaScript'],
  },
  {
    company: 'Washington University in St. Louis',
    role: 'Teaching Assistant, Intro to Computer Science',
    location: 'St. Louis, MO',
    dates: 'Jan 2024 – Jan 2025',
    summary: 'Taught Java fundamentals and testing to first-year CS students.',
    bullets: [
      'Led weekly studio sessions for 100+ students working through Java exercises, helping raise the class average by 10%.',
      'Coached students on testing and debugging assignments with JUnit.',
    ],
    tech: ['Java', 'JUnit'],
  },
];

// `fit: 'contain'` is for tall phone screenshots so they aren't cropped.
export const projects = [
  {
    title: 'WUCT Mobile App',
    tagline: 'Live on the App Store',
    description:
      'The official app for the WashU Chemistry Tournament. Push notifications, personalized schedules and profiles for 150+ members, built with Flutter and Firebase.',
    tech: ['Flutter', 'Firebase', 'Riverpod'],
    image: wuct,
    fit: 'contain',
    links: [{ label: 'App Store', url: 'https://apps.apple.com/us/app/wuct/id6739588241' }],
    featured: true,
  },
  {
    title: 'Live Lecture Companion',
    tagline: 'Real-time lecture transcription + summaries',
    description:
      'An iOS app that transcribes lectures live and surfaces key insights from an LLM, used by 95+ students. Multithreaded audio capture plus batching cut latency by ~25% over 60-minute sessions.',
    tech: ['Swift', 'Deepgram', 'Core Data'],
    image: liveLectureCompanion,
    fit: 'contain',
    links: [
      { label: 'Demo', url: 'https://youtube.com/shorts/PAdXFKgbf8U?si=Md0zYHXKbVTTZsfX' },
      { label: 'Code', url: 'https://github.com/CoderNessim/Live_Lecture_Companion' },
    ],
    featured: true,
  },
  {
    title: 'Friends360',
    tagline: 'Map-tracking and plans for friend groups',
    description:
      'A full-stack platform for live location sharing, making plans and chatting. Streams locations over WebSockets onto Google Maps and recommends nearby plans with the Places API.',
    tech: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'WebSockets'],
    image: friends360,
    links: [{ label: 'Code', url: 'https://github.com/CoderNessim/Friends360' }],
    featured: true,
  },
  {
    title: 'OWdle',
    tagline: 'Competitive Overwatch Wordle',
    description:
      'Wordle for Overwatch fans, with leaderboards, user profiles and match history to make it competitive.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: owdle,
    links: [
      { label: 'Live', url: 'https://overwatchdle.netlify.app' },
      { label: 'Code', url: 'https://github.com/CoderNessim/OWdle' },
    ],
    featured: true,
  },
  {
    title: 'Language Buddy',
    tagline: 'AI-assisted language practice',
    description:
      'A translator, GPT-powered sentence generator, translation similarity scoring and a custom flashcard maker in one app.',
    tech: ['React', 'OpenAI API'],
    image: languageBuddy,
    links: [
      { label: 'Live', url: 'https://translator-app-nessim.netlify.app' },
      { label: 'Code', url: 'https://github.com/CoderNessim/LanguageBuddy/tree/main' },
    ],
  },
  {
    title: 'Weather App',
    tagline: 'Where it started',
    description:
      'My first project: current weather for your location or any city in the world.',
    tech: ['JavaScript', 'Weather API'],
    image: weatherApp,
    links: [
      { label: 'Live', url: 'https://main--nessim-weather-app.netlify.app/' },
      { label: 'Code', url: 'https://github.com/CoderNessim/weatherApp' },
    ],
  },
];

export const skills = [
  {
    group: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Dart', 'Swift', 'HTML', 'CSS'],
  },
  {
    group: 'Frameworks',
    items: ['Spring Boot', 'React', 'Flutter', 'Node.js', 'Express.js', 'FastMCP', 'JUnit'],
  },
  {
    group: 'Data & Platforms',
    items: ['MySQL', 'MongoDB', 'Firebase', 'ServiceNow', 'Heroku'],
  },
  {
    group: 'Tools',
    items: ['Git', 'Claude Code', 'Postman', 'IntelliJ', 'VS Code'],
  },
  {
    group: 'Concepts',
    items: [
      'Model Context Protocol',
      'AI-Assisted Development',
      'REST API Design',
      'Multithreading',
      'MVC Architecture',
      'Agile',
    ],
  },
];
