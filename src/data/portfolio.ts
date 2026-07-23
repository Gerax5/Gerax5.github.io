import avatar from '@/assets/foto-perfil.jpeg'
import cv from '@/assets/CV Gabriel Pineda.pdf'
import picolin from '@/assets/Picolin.png'
import eden from '@/assets/eden.png'
import translate from '@/assets/translate.png'
import ds from '@/assets/ds.png'

export interface NavLink {
  id: string
  label: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface TimelineRole {
  title: string
  period: string
  description: string
  current?: boolean
}

export interface TimelineEntry {
  company: string
  period: string
  /** Un bloque puede agrupar varios cargos dentro de la misma empresa. */
  roles: TimelineRole[]
  highlight?: boolean
}

export interface Project {
  name: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  codeUrl: string
}

export interface SocialLink {
  icon: string
  label: string
  url: string
}

export const brand = 'GERAX'

export const navLinks: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const profile = {
  name: 'Gerardo Pineda',
  role: 'Fullstack Developer · Web & Mobile',
  email: 'ggerardopineda06@gmail.com',
  avatar,
  cv,
  bio: [
    'I\'m the kind of person who can\'t leave a problem alone once it has my attention. Give me something that doesn\'t quite work and I\'ll keep turning it over until it clicks. that\'s the part of this job I actually enjoy, more than any particular tool or framework.',
    'I like understanding why something is broken before deciding how to fix it, and I\'d rather ask an uncomfortable question early than find the real problem three weeks in. I work best with a team around me, and I\'m most useful when someone hands me a mess and asks what to do with it.',
  ],
}

export const skillGroups: SkillGroup[] = [
  { title: 'Languages',       items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Java', 'Kotlin', 'PHP'] },
  { title: 'Frontend',        items: ['React', 'React Native', 'Tailwind CSS', 'HTML', 'CSS'] },
  { title: 'Backend & Cloud', items: ['FastAPI', 'Django', 'REST APIs', 'AWS', 'Google Cloud'] },
  { title: 'Data',            items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Neo4j'] },
  { title: 'Automation',      items: ['Docker', 'CI/CD', 'GitHub Actions'] },
]

export const timeline: TimelineEntry[] = [
  {
    company: 'Grupo Cayalá',
    period: 'Jun 2023 — Present',
    highlight: true,
    roles: [
      {
        title: 'Policy and Procedure Analyst',
        period: 'Feb 2026 — Present',
        description:
          'Map and redesign manual company processes for automation and digital delivery, then draft the policies that turn those redesigns into company-wide standards. The role sits between operations and engineering: deciding which workflows are worth automating, specifying how they should behave, and documenting the rules the resulting systems enforce.',
        current: true,
      },
      
    ],
  },
  {
    company: 'Fundación de la Universidad del Valle de Guatemala | EXPLORAX',
    period: 'May 2024 — Dec 2025',
    roles: [
      {
        title: 'Coordinador Frontend',
        period: 'jan 2024 — Dec 2024',
        description:
          'Led the frontend team under SCRUM, defining code quality standards and review practices. Designed and shipped an automatic asset-download system for the app, and replaced manual delivery steps with automated workflows. Owned the supporting AWS infrastructure (EC2, S3 and Lambda) including usage metrics collection.',
      },
      {
        title: 'Frontend Developer',
        period: 'May 2024 — Dec 2024',
        description:
          "Built a STEAM e-learning mobile app with React Native and Expo, implementing the interface from the design team's specifications.",
      },
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Picolin',
    description:
      'A full-stack e-commerce platform for Picolin, featuring product catalog, cart and checkout flow, inventory management and an admin panel for orders and sales tracking.',
    image:
      picolin,
    tags: ['React', 'VITE', 'Graphql','postgres', 'AWS'],
    demoUrl: 'https://picolin.shop',
    codeUrl: 'https://github.com/angelargd8/Proyecto-software',
  },
  {
    name: 'Eden',
    description:
      'A real estate platform with an interactive plot map, letting buyers explore availability in real time, plus an admin dashboard to manage listings and track sales metrics.',
    image:
      eden,
    tags: ['NextJS', 'nestJS', 'Typescript', 'AWS'],
    demoUrl: 'https://praderasdelalto.com.gt/',
    codeUrl: 'https://github.com/PraderasDelAlto/Eleden',
  },
  {
    name: 'SpeakerSync',
    description:
      'An AI subtitle generator that segments video, applies speaker diarization and lip tracking to identify who is talking, and merges everything into speaker-labeled subtitles.',
    image:
      translate,
    tags: ['Python'],
    codeUrl: 'https://github.com/paulabaal12/PROY-VCP',
  },
  {
    name: 'EssayScore',
    description:
      'An automated essay scoring system that classifies writing as effective, adequate or inadequate, comparing LSTM and Transformer architectures to benchmark model performance.',
    image:
      ds,
    tags: ['Python'],
    codeUrl: 'https://github.com/paulabaal12/PROY-VCP',
  },
]

export const socials: SocialLink[] = [
]

export const footerLinks: SocialLink[] = [
  { icon: '', label: 'GitHub', url: 'https://github.com/Gerax5' },
  { icon: '', label: 'LinkedIn', url: 'https://www.linkedin.com/in/gerardo-pineda-riveiro-1a58a839b/' },
]
