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
  demoUrl: string
  codeUrl: string
}

export interface SocialLink {
  icon: string
  label: string
  url: string
}

export const brand = 'DEV.SOLO'

export const navLinks: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const profile = {
  name: 'Jane Doe',
  role: 'Fullstack Developer · Web & Mobile',
  email: 'hello@devsolo.com',
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB4uTfpWRBwv4Cez2xtyLI8AiNb3_c3Rv4Gt7BDp6ErdhFOH5kAEFd_XSr5y4NsI8U1NZXiSTAQ9CODg9zalQNuRCKbB-JYYleR6SXlCIllqRqSlooZ05M0ekDW7dJYHduI93U22U3H7cYzg-16_Y5W-5m7nHvodsBfyc74L3o7wbGrR79iIUZlE21P9HPU1gpISJ_UNrpRnRY3bVduvHMjEdB9PuOU3biUkk8Gw2PxZ5UOqxTxTRgpV0pvzZD2Pgs_KrhgggUkqoA',
  bio: [
    'I am a fullstack developer with a passion for building elegant, functional, and user-centric digital experiences. Currently in my final year of university, specializing in Artificial Intelligence, I bridge the gap between complex technical architectures and intuitive frontend interfaces.',
    'My approach is rooted in "quiet authority"—letting the quality of the code and the clarity of the design speak for themselves. Whether it\'s a high-performance web application or a smooth cross-platform mobile app, I focus on delivering scalable solutions that solve real-world problems.',
  ],
}

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', items: ['React', 'Vue.js', 'Tailwind CSS', 'TypeScript'] },
  { title: 'Backend', items: ['Node.js', 'PostgreSQL', 'GraphQL', 'Docker'] },
  { title: 'Mobile', items: ['Flutter', 'React Native'] },
]

export const timeline: TimelineEntry[] = [
  {
    company: 'Tech Corp',
    period: 'Jun 2023 — Present',
    highlight: true,
    roles: [
      {
        title: 'Junior Software Engineer',
        period: 'Jan 2024 — Present',
        description:
          'Promoted to full-time role; leading development of core data visualization features and mentoring incoming interns.',
        current: true,
      },
      {
        title: 'Software Engineering Intern',
        period: 'Jun 2023 — Dec 2023',
        description:
          'Developing real-time data visualization components for cloud monitoring dashboards, reducing API latency by 15% through optimized caching strategies.',
      },
    ],
  },
  {
    company: 'UI Framework Core Team',
    period: 'JAN 2022 — MAY 2023',
    roles: [
      {
        title: 'Open Source Contributor',
        period: 'JAN 2022 — MAY 2023',
        description:
          'Authored and maintained 10+ reusable components and utility modules, improving documentation accessibility for 5,000+ weekly users.',
      },
    ],
  },
  {
    company: 'Creative Digital Agency',
    period: 'SEPT 2021 — DEC 2021',
    roles: [
      {
        title: 'Junior Frontend Developer',
        period: 'SEPT 2021 — DEC 2021',
        description:
          'Translated complex Figma designs into pixel-perfect, responsive landing pages for diverse luxury brands.',
      },
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Nexus Analytics',
    description:
      'An enterprise-level data visualization platform built for real-time monitoring of cloud infrastructure.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDl-qHkSqG3dJ7BDV-dWexu6TpdgqbRWJDA0hGFCDsqmAiuYEWt844GG7PNzqbCf1CiOOftf2wUySyUPnR17hxaxD5XhOPRyr1WH5m8DNz-HYCTmiVFHltWs-r8ZaUqS8OL9NLvyY-H2EEUsShI5embEfuRyd4yWq0JAw-gETjlIpIvynHF-xyMSTn3P82cZ8PuyVabmsXsZcGCrKk-T_QvmmMTaXz6-Xd7B2LRQqQGPxI605oJ5UoWWm7dqZ5Qt7VWeHT6Qp0S4Pg',
    tags: ['React', 'D3.js', 'AWS'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    name: 'Pulse Mobile',
    description:
      'A high-performance cross-platform health tracking app with biometric integration and offline sync.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmni4vzNUbiBXIRORwQM7nvA7Vb99-lUXWTgqA7f9HbdJglGgx2esGV1ADodEI4bIGiyGNWRLsyx1ae42hPUu59PMy_Uf_vvW2wPH4BztwSYtw4iQy8gskPAXGPJfZpQeczDWvc3PKdg4meETztWP6g6fVNoZRXHIC8w7H8oQfz4NqgGSKxhLiUDH-OBB3Td8SvTUa53V1enL9-Usu6QlMo7ItFHJCeVRnes2F7o2oU-QkKeYJJOxVoKqYpMtW-3LS1Kh9jkf2ryM',
    tags: ['Flutter', 'Firebase', 'GraphQL'],
    demoUrl: '#',
    codeUrl: '#',
  },
]

export const socials: SocialLink[] = [
  { icon: 'link', label: 'Website', url: '#' },
  { icon: 'alternate_email', label: 'Email', url: '#' },
  { icon: 'terminal', label: 'GitHub', url: '#' },
]

export const footerLinks: SocialLink[] = [
  { icon: '', label: 'GitHub', url: '#' },
  { icon: '', label: 'LinkedIn', url: '#' },
  { icon: '', label: 'Twitter', url: '#' },
]
