export interface Project {
  id: string;
  title: string;
  tag: string;
  year: string;
  role: string;
  img: string | null;
  stack: string[];
  desc: string;
  metric: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'ilknox',
    title: 'ILKNOX',
    tag: 'Brand · Web',
    year: '2025',
    role: 'Design + Engineering',
    img: '/assets/projects/ilknox.png',
    stack: ['REACT', 'TS', 'TAILWIND', 'FRAMER'],
    desc: 'Editorial web presence for a fashion atelier — restrained typography, ambient motion, sub-second LCP.',
    metric: '0.6s LCP',
    featured: true,
  },
  {
    id: 'elevare',
    title: 'Elevare',
    tag: 'Consulting · Web',
    year: '2024',
    role: 'Frontend Lead',
    img: '/assets/projects/elevare.png',
    stack: ['NEXT', 'TS', 'SANITY', 'MDX'],
    desc: 'Management consulting site with long-form case studies. Content modeled in Sanity, statically generated.',
    metric: '24 routes',
    featured: true,
  },
  {
    id: 'bloxx',
    title: 'Bloxx',
    tag: 'Identity · Web',
    year: '2024',
    role: 'Independent',
    img: '/assets/projects/bloxx.png',
    stack: ['ASTRO', 'TS', 'TAILWIND'],
    desc: 'Modular identity system with a generative wordmark. Letter-tile mark, Astro for the marketing site.',
    metric: '38kb bundle',
    featured: true,
  },
  {
    id: 'terra',
    title: 'Terra Consultants',
    tag: 'Consulting · Web',
    year: '2023',
    role: 'Senior Engineer',
    img: '/assets/projects/terra.png',
    stack: ['REACT', 'NODE', 'POSTGRES'],
    desc: 'A bold black-and-orange site for an infrastructure firm. Custom CMS and project showcase.',
    metric: 'Lighthouse 99',
    featured: true,
  },
  {
    id: 'pacer',
    title: 'Pacer Dashboards',
    tag: 'Internal Tool',
    year: '2023',
    role: 'Lead Engineer',
    img: null,
    stack: ['REACT', 'TRPC', 'POSTGRES'],
    desc: 'Real-time analytics dashboards for an ad-ops team. Replaced a Tableau spend with a focused internal app.',
    metric: '40s → 2s loads',
    featured: false,
  },
  {
    id: 'orion',
    title: 'Orion Platform',
    tag: 'B2B SaaS',
    year: '2022',
    role: 'Frontend Engineer',
    img: null,
    stack: ['NEXT', 'TS', 'GRAPHQL'],
    desc: 'Onboarding and billing flows for an enterprise observability tool. Shipped Stripe migration and SSO.',
    metric: '+38% conv.',
    featured: false,
  },
  {
    id: 'meridian',
    title: 'Meridian Finance',
    tag: 'Fintech',
    year: '2021',
    role: 'Engineering Intern',
    img: null,
    stack: ['REACT', 'RUBY'],
    desc: 'KYC and account-opening UI for a digital bank. Worked alongside compliance on form pacing.',
    metric: '7-step flow',
    featured: false,
  },
];

export const FEATURED = PROJECTS.filter(p => p.featured);
export const ARCHIVE  = PROJECTS.filter(p => !p.featured);
