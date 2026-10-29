export type VisualVariant = 'aether' | 'rag'

export interface Project {
  id: string
  name: string
  summary: string
  description: string
  stack: string[]
  status: string | null
  repoUrl: string | null
  liveUrl: string | null
  featured: boolean
  visual: VisualVariant | null
}

export interface SkillGroup {
  label: string
  note: string
  items: string[]
}

export interface ContactLink {
  id: 'email' | 'linkedin' | 'github'
  label: string
  value: string
  href: string | null
}

export interface NavItem {
  id: string
  label: string
  index: string
}

export const profile = {
  name: 'Kushal Gowda G.',
  firstName: 'Kushal',
  lastName: 'Gowda G.',
  monogram: 'KG',
  role: 'Computer Science Engineering student',
  headlineLead: 'Software, built with',
  headlineAccent: 'intent.',
  disciplines: 'AI · software · embedded',
  intro:
    'I am a third-year Computer Science and Engineering student at CMR University, interested in software development, artificial intelligence, and the point where code meets hardware.',
  note: 'Currently exploring AI-assisted tools, clean interfaces, and the craft of turning rough ideas into working software.',
  degree: 'B.Tech in Computer Science and Engineering',
  university: 'CMR University',
  year: 'Third year',
  portfolioYear: '2026',
}

export const navItems: NavItem[] = [
  { id: 'work', label: 'Work', index: '01' },
  { id: 'about', label: 'About', index: '02' },
  { id: 'skills', label: 'Skills', index: '03' },
  { id: 'education', label: 'Education', index: '04' },
  { id: 'experience', label: 'Experience', index: '05' },
  { id: 'beyond', label: 'Beyond', index: '06' },
]

export const contactNavItem: NavItem = { id: 'contact', label: 'Contact', index: '07' }

export const aboutParagraphs = [
  'I am Kushal, a third-year Computer Science and Engineering student at CMR University. My interest in software started with wanting to understand how systems work beneath the surface, and it has grown into a habit of building things to find out.',
  'Most of what I know has come from coursework and self-directed projects: breaking an idea into smaller pieces, learning the tools each piece needs, and then putting them back together. I care about software that is clear to use and honest about what it does.',
  'I am particularly drawn to artificial intelligence, developer tooling, and the overlap between software and hardware. The plan is straightforward: keep learning, keep shipping, and make every project a little more considered than the last.',
]

export const principles = [
  {
    title: 'Start with the problem',
    body: 'Understand the constraints before choosing the stack. The simplest solution that survives is usually the right one.',
  },
  {
    title: 'Build to learn',
    body: 'A working prototype teaches more than a perfect plan. I would rather test an idea early and refine it than defend it in theory.',
  },
  {
    title: 'Finish the details',
    body: 'Naming, spacing, and error states are part of the product. A project is not done until the small things feel deliberate.',
  },
]

export const heroStack = [
  'Python',
  'Java',
  'C',
  'C++',
  'JavaScript',
  'React',
  'Arduino',
  'Raspberry Pi',
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    note: 'Core programming and scripting',
    items: ['Python', 'Java', 'C', 'C++', 'JavaScript'],
  },
  {
    label: 'Frontend',
    note: 'Building for the browser',
    items: ['React', 'HTML', 'CSS'],
  },
  {
    label: 'Tools',
    note: 'Day-to-day development workflow',
    items: ['Git', 'GitHub', 'Visual Studio Code'],
  },
  {
    label: 'Hardware',
    note: 'Embedded exploration',
    items: ['Arduino', 'Raspberry Pi'],
  },
  {
    label: 'AI & Data',
    note: 'Applied through project work',
    items: ['Retrieval-augmented generation (RAG)', 'AI-assisted development'],
  },
]

export const education = {
  degree: 'B.Tech in Computer Science and Engineering',
  institution: 'CMR University',
  level: 'Third year',
  status: 'Ongoing',
  startYear: null as string | null,
  endYear: null as string | null,
}

export const projects: Project[] = [
  {
    id: 'aetheros',
    name: 'AetherOS',
    summary: 'A modular AI assistant platform.',
    description:
      'A modular AI assistant platform designed around independent capabilities and a shared core. The focus is on keeping individual modules separate, so the system can grow without becoming difficult to change.',
    stack: ['AI', 'Modular architecture'],
    status: null,
    repoUrl: null,
    liveUrl: null,
    featured: true,
    visual: 'aether',
  },
  {
    id: 'study-analyzer',
    name: 'AI Study Material Analyzer',
    summary: 'Study material analysis with retrieval-augmented generation.',
    description:
      'An AI-powered project that uses retrieval-augmented generation (RAG) to help make sense of study material. Instead of relying on a model alone, it retrieves relevant context first, then uses that context to support its analysis.',
    stack: ['RAG', 'AI'],
    status: null,
    repoUrl: null,
    liveUrl: null,
    featured: true,
    visual: 'rag',
  },
  {
    id: 'expense-splitter',
    name: 'Smart Expense Splitter',
    summary: 'A Java-based approach to splitting shared expenses.',
    description:
      'A Java project for dividing shared costs between people, built around the everyday problem of keeping group expenses clear and fair.',
    stack: ['Java'],
    status: null,
    repoUrl: 'https://github.com/kushalg-21/Smart-Expense-Splitter',
    liveUrl: null,
    featured: false,
    visual: null,
  },
  {
    id: 'attendance-analyzer',
    name: 'Attendance Marks Analyzer',
    summary: 'Working with attendance and marks data in Python.',
    description:
      'A Python project that analyses attendance and marks information, bringing two related academic datasets into a single view.',
    stack: ['Python'],
    status: null,
    repoUrl: 'https://github.com/kushalg-21/Attendance-Marks-Analyzer',
    liveUrl: null,
    featured: false,
    visual: null,
  },
  {
    id: 'study-tracker',
    name: 'Daily Study Tracker',
    summary: 'A small Python tool for tracking daily study.',
    description:
      'A Python project for recording and reviewing daily study activity, built as a lightweight way to stay consistent over time.',
    stack: ['Python'],
    status: null,
    repoUrl: 'https://github.com/kushalg-21/Daily-Study-Tracker',
    liveUrl: null,
    featured: false,
    visual: null,
  },
  {
    id: 'trueline',
    name: 'Trueline',
    summary: 'An AI-assisted review and integration project.',
    description:
      'An AI-assisted project focused on review and integration workflows, exploring how automated support can fit into an existing process without taking it over.',
    stack: ['AI-assisted workflows'],
    status: null,
    repoUrl: null,
    liveUrl: null,
    featured: false,
    visual: null,
  },
  {
    id: 'smartprint',
    name: 'SmartPrint',
    summary: 'A proposed document-upload and printing platform.',
    description:
      'A proposed platform for uploading documents and managing printing in one flow. Currently a concept, with scope and implementation still to be defined.',
    stack: ['Web platform concept'],
    status: 'Proposed',
    repoUrl: null,
    liveUrl: null,
    featured: false,
    visual: null,
  },
]

export const projectsNote =
  'Public repositories are linked where available. Demo links will be added when projects are ready to share.'

export const experience = {
  intro:
    'I am at the beginning of this part of the record. Verified internships, hackathons, certifications, and awards will be listed here as they are completed.',
  entries: [] as {
    title: string
    organisation: string
    period: string
    description: string
  }[],
}

export const interests = [
  {
    name: 'Travelling',
    note: 'New places offer new reference points, and a better sense of scale.',
  },
  {
    name: 'Movies',
    note: 'A good story is a masterclass in pacing, structure, and attention to detail.',
  },
  {
    name: 'Cricket',
    note: 'The long game: patience, teamwork, and reading the situation as it changes.',
  },
  {
    name: 'Exploring technology',
    note: 'Following new tools long enough to understand why they matter, not just how they look.',
  },
]

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'kushalgowda8550076182@gmail.com',
    href: 'mailto:kushalgowda8550076182@gmail.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/kushal-gowda-g-946546390',
    href: 'https://www.linkedin.com/in/kushal-gowda-g-946546390',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/kushalg-21',
    href: 'https://github.com/kushalg-21',
  },
]

export const resume = {
  available: true,
  path: 'resume/Kushal-Gowda-G-Resume.pdf',
  label: 'Résumé',
}

export const hasUnconfiguredLinks = contactLinks.some((link) => !link.href)
