import { useState } from 'react';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const PROJECTS = [
  {
    id: 'bloxx-superapp',
    name: 'Super App Platform',
    role: 'Superapp',
    company: 'BLOXX',
    desc: 'Prototyped a full-stack super app consolidating property discovery, customer onboarding, and financial pre-qualification into a single platform used in investor demonstrations. Defined the design language, component architecture, and user flows end to end.',
    highlights: [
      { label: 'PRODUCT', text: 'Unified six product domains, including property search, underwriting, education, and financial management, into one platform for investor demonstrations.' },
      { label: 'DESIGN',  text: 'Defined the design language, user flows, and a component architecture built to scale.' },
      { label: 'BUILD',   text: 'Prototyped the full-stack app in React, TypeScript, and Tailwind on a Supabase backend.' },
    ],
    tags: ['REACT', 'TYPESCRIPT', 'SUPABASE', 'FULL STACK', 'COMPONENT ARCHITECTURE'],
  },
  {
    id: 'bloxx-website',
    name: 'Multi-Market Website',
    role: 'Web Development',
    company: 'BLOXX',
    desc: 'Built and launched a multi-market website across NZ, UK, and global, with jurisdiction-specific SEO and a CMS that let non-technical staff manage content independently. Extended a complex Webflow build with custom code.',
    highlights: [
      { label: 'PRODUCT', text: 'Built a multi-market presence across NZ, UK, and global with jurisdiction-specific SEO.' },
      { label: 'DESIGN',  text: 'Configured the CMS so non-technical staff could own and manage content independently.' },
      { label: 'BUILD',   text: 'Delivered a complex Webflow build with custom code and integrated HubSpot lead capture end to end.' },
    ],
    tags: ['WEBFLOW', 'JAVASCRIPT', 'HUBSPOT', 'SEO', 'CMS', 'MULTI-MARKET'],
  },
  {
    id: 'bloxx-ai',
    name: 'AI Operations Pipeline',
    role: 'AI & Automation',
    company: 'BLOXX',
    desc: 'Designed and deployed a two-stage pipeline that used AI to analyse properties and then auto-generate marketing assets from that analysis, integrated directly into the core operational workflow.',
    highlights: [
      { label: 'RESEARCH', text: 'Spoke with customers to understand where the value of property information sits, then shaped the pipeline output around what they actually needed.' },
      { label: 'PRODUCT',  text: 'Targeted the manual property analysis and marketing production bottleneck slowing the core operational workflow.' },
      { label: 'DESIGN',   text: 'Built a Figma template system that auto-populated marketing components from structured data, removing manual design work per property.' },
      { label: 'BUILD',    text: 'Deployed a custom Google Gemini agent for property analysis, then piped its output through a structured data source into the Figma system to generate marketing assets end to end.' },
    ],
    tags: ['GOOGLE GEMINI', 'JAVASCRIPT', 'AI PIPELINE', 'WORKFLOW AUTOMATION', 'PROCESS DESIGN'],
  },
  {
    id: 'elevare',
    name: 'Web & Brand Identity',
    role: 'Website & Brand Identity',
    company: 'Elevare',
    desc: 'Designed and shipped a complete brand identity system for a management consulting firm, including a Framer CMS website, pitch deck templates, and a reusable design asset library built for non-designer use.',
    highlights: [
      { label: 'PRODUCT', text: 'Gave a management consulting firm a coherent, self-manageable brand presence from scratch.' },
      { label: 'DESIGN',  text: 'Created the full identity system, from website to pitch deck templates to letterhead.' },
      { label: 'BUILD',   text: 'Shipped a Framer CMS website and a reusable design asset library built for non-designer use.' },
    ],
    tags: ['FRAMER', 'FIGMA', 'CMS', 'BRAND IDENTITY', 'CLIENT DELIVERY'],
  },
];

const PERSONAL_PROJECTS = [
  {
    id: 'akhar',
    name: 'Akhar',
    role: 'Product Engineer',
    desc: 'Built Akhar, a web app helping fluent Punjabi speakers learn to read and write Gurmukhi script. The product targets the real bottleneck for fluent speakers, which is decoding the script, not learning the language, and is built around a readiness-based progression that unlocks new material as learners reach mastery.',
    highlights: [
      { label: 'RESEARCH',      text: 'Grounded the method in cognitive science, using retrieval practice, FSRS spaced repetition, and deliberate contrast of confusable letter pairs.' },
      { label: 'USER RESEARCH', text: 'Interviewed Punjabi-speaking families and their children to understand how the script is lost across generations and what would keep learners engaged.' },
      { label: 'UX',            text: 'Designed a no-transliteration reading experience that forces genuine decoding, with tap-to-reveal confirmation and struggle routing that feeds weak letters back into practice.' },
      { label: 'DESIGN',        text: 'Created a custom design system with a depth-illusion visual language and optically centered Gurmukhi glyphs.' },
      { label: 'BUILD',         text: 'Architected a Next.js and NestJS monorepo on Supabase, developed with Claude Code.' },
    ],
    tags: ['NEXT.JS', 'NESTJS', 'TYPESCRIPT', 'SUPABASE', 'MONOREPO', 'USER RESEARCH'],
  },
  {
    id: 'dealroom',
    name: 'DealRoom',
    role: 'Product Engineer',
    desc: 'Built a platform for investors to browse, evaluate, and bookmark real estate development opportunities across global markets, replacing scattered links with a single curated view. Each deal surfaces the metrics investors actually weigh, including IRR, cash yield, and equity multiple.',
    highlights: [
      { label: 'USER RESEARCH', text: 'Interviewed deal makers and active investors who assemble property deals, shaping the platform around how they actually evaluate and compare opportunities.' },
      { label: 'STRATEGY',      text: 'Reframed the problem from sharing many links to presenting a single curated deal view, which set the core product direction.' },
      { label: 'UX',            text: 'Designed grid and list browsing, bookmarking, and a search overlay around an authenticated investor workflow.' },
      { label: 'DESIGN',        text: "Owned the visual language and the end-to-end feel from an investor's perspective." },
      { label: 'BUILD',         text: 'Architected and rapidly prototyped the platform in Bolt, iterating quickly on a React, TypeScript, and Vite stack with Supabase.' },
    ],
    tags: ['REACT', 'TYPESCRIPT', 'VITE', 'SUPABASE', 'END TO END', 'USER RESEARCH'],
  },
  {
    id: 'math-mania',
    name: 'Math Mania',
    role: 'Product Engineer',
    desc: 'Developed Math Mania, a web platform teaching kids math through competitive, game-style gameplay, turning practice into timed challenges designed to keep young learners engaged.',
    highlights: [
      { label: 'RESEARCH', text: 'Studied how children stay motivated and how competitive game mechanics can drive repeated practice.' },
      { label: 'STRATEGY', text: 'Designed the experience around child users, accounting for anonymity and age-appropriate interaction.' },
      { label: 'UX',       text: 'Shaped a game-style flow that makes timed math practice feel like play rather than testing.' },
      { label: 'BUILD',    text: 'Built the React client against a separate backend service, developed with Claude Code.' },
    ],
    tags: ['REACT', 'TYPESCRIPT', 'VERCEL', 'GAMIFICATION', 'EDTECH'],
  },
];

const STACK_CATS = [
  { cat: 'Languages',        items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { cat: 'Frontend',         items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'] },
  { cat: 'Backend',          items: ['Node.js', 'NestJS', 'PostgreSQL', 'GraphQL', 'Express'] },
  { cat: 'Infrastructure',   items: ['Supabase', 'Docker', 'AWS', 'Render', 'Vercel'] },
  { cat: 'Platforms',        items: ['HubSpot', 'Webflow', 'Wix', 'Framer'] },
  { cat: 'Design',           items: ['Figma', 'Adobe Photoshop', 'Adobe Premiere Pro', 'Adobe Firefly', 'Adobe Lightroom', 'Canva'] },
  { cat: 'AI & Agentic',     items: ['Claude Code', 'Google Gemini', 'Bolt', 'Cursor', 'n8n'] },
];

const TOC_DATA = [
  {
    num: '01', label: 'Work', href: '#work',
    items: [
      { name: 'Super App Platform', descriptors: ['FINTECH', 'APP'] },
      { name: 'Multi-Market Website', descriptors: ['WEBFLOW', 'CMS'] },
      { name: 'AI Operations Pipeline', descriptors: ['AI', 'OPERATIONS'] },
      { name: 'Web & Brand Identity',   descriptors: ['BRAND', 'CONSULTING'] },
    ],
  },
  {
    num: '02', label: 'Projects', href: '#projects',
    items: [
      { name: 'Akhar',      descriptors: ['LANGUAGE', 'PLATFORM'] },
      { name: 'DealRoom',   descriptors: ['REAL ESTATE', 'PLATFORM'] },
      { name: 'Math Mania', descriptors: ['EDTECH', 'GAME'] },
    ],
  },
  {
    num: '03', label: 'Stack', href: '#stack',
    items: [],
  },
  {
    num: '04', label: 'Experience', href: '#experience',
    items: [
      { name: 'BLOXX',             descriptors: ['FINTECH'] },
      { name: 'Elevare',           descriptors: ['CONSULTING'] },
      { name: 'Terra Consultants', descriptors: ['LAND DEV'] },
    ],
  },
];

const EXPERIENCE_PARENT = {
  role: 'Software Developer',
  period: 'Oct 2024 – Feb 2026',
  desc: 'Delivering concurrent contracts across fintech, consulting, and land development, partnering directly with C-suite to translate strategic objectives into technical architecture, automated workflows, and shipped software.',
};

const EXPERIENCE_CLIENTS = [
  {
    company: 'BLOXX',
    industry: 'Homeownership Fintech',
    role: 'Software Developer & Technical Consultant',
    period: 'Oct 2024 – Jan 2026',
    desc: 'Built and owned the full technology stack for an early-stage fintech, spanning CRM architecture, web development, process automation, and AI tooling. Worked directly with the founding team to design operational systems from scratch, integrating HubSpot, Webflow, and React/TypeScript across customer-facing and internal workflows.',
  },
  {
    company: 'Elevare',
    industry: 'Management Consulting',
    role: 'Technical Consultant',
    period: 'Sep 2025 – Feb 2026',
    desc: 'Designed and delivered a full brand identity system for a management consulting firm, including a Framer CMS website, pitch deck templates, and a reusable design asset library. Worked iteratively with stakeholders through discovery sessions and feedback cycles to produce a polished, self-manageable digital presence.',
  },
  {
    company: 'Terra Consultants',
    industry: 'Land Development',
    role: 'Technical Consultant',
    period: 'Aug 2025 – Nov 2025',
    desc: 'Redesigned a broken operational workflow into a structured, stage-gated process implemented directly in HubSpot CRM. Conducted stakeholder discovery, mapped as-is and to-be states, and delivered full handover documentation including training materials and a centralised Figma asset library.',
  },
];

// ---------------------------------------------------------------------------
// Floating TOC
// ---------------------------------------------------------------------------

function FloatingTOC() {
  return (
    <div className="hidden 2xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-6 w-44">
      <p className="text-[10px] font-mono tracking-widest text-gray-300 uppercase mb-2">Contents</p>
      {TOC_DATA.map(({ num, label, href, items }) => (
        <div key={num}>
          <a href={href} className="flex items-center gap-2 group mb-3">
            <span className="text-xs font-mono text-gray-400 tabular-nums">{num}</span>
            <span className="text-xs font-mono tracking-widest text-gray-500 uppercase group-hover:text-gray-900 transition-colors">
              {label}
            </span>
            <span className="text-gray-300 group-hover:text-gray-600 transition-colors text-xs ml-0.5">↗</span>
          </a>
          {items.length > 0 && (
            <div className="pl-5 flex flex-col gap-2.5">
              {items.map(({ name, descriptors }) => (
                <div key={name}>
                  <p className="text-xs text-gray-500 leading-tight mb-0.5">{name}</p>
                  <div className="flex flex-wrap gap-x-1.5 gap-y-0.5">
                    {descriptors.map(d => (
                      <span key={d} className="text-[10px] font-mono text-gray-400 uppercase tracking-wide">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Nav
// ---------------------------------------------------------------------------

const emailUser = 'manbir359';
const emailDomain = 'gmail.com';

function EmailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const GRAIN_SVG = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function Nav() {
  const [open, setOpen] = useState(false);
  const email = `${emailUser}@${emailDomain}`;

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-gray-200 backdrop-blur-xl bg-white/80">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Wordmark */}
          <a href="#" className="text-gray-900 font-medium tracking-tight text-base">
            Manbir
          </a>

          {/* Desktop centre links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">Work</a>
            <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#stack" className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">Stack</a>
            <a href="#experience" className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">Experience</a>
          </div>

          {/* Desktop right icons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
              <a href={`mailto:${email}`} className="text-gray-400 hover:text-gray-900 transition-colors p-1.5 block" aria-label="Email">
                <EmailIcon />
              </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs font-mono text-gray-500 bg-white border border-gray-100 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm">
                Email
              </span>
            </div>
            <div className="relative group">
              <a href="https://www.linkedin.com/in/iammanbir/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors p-1.5 block" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs font-mono text-gray-500 bg-white border border-gray-100 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm">
                LinkedIn
              </span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-400 hover:text-gray-900 transition-colors p-1"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile left drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[75vw] max-w-xs bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out md:hidden flex flex-col overflow-hidden ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none select-none opacity-[0.04]"
          style={{ backgroundImage: GRAIN_SVG, backgroundRepeat: 'repeat' }}
        />

        {/* Header */}
        <div className="relative flex items-center justify-between px-6 h-16 border-b border-gray-200 shrink-0">
          <span className="text-base font-medium tracking-tight text-gray-900">Manbir</span>
          <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-900 transition-colors p-1" aria-label="Close menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="relative flex-1 px-6 pt-10">
          <p className="text-xs font-mono tracking-widest text-gray-300 uppercase mb-8">Navigation</p>
          <div className="flex flex-col gap-2">
            {[
              { label: 'Work',       href: '#work',       delay: '0.12s' },
              { label: 'Projects',   href: '#projects',   delay: '0.16s' },
              { label: 'Stack',      href: '#stack',      delay: '0.20s' },
              { label: 'Experience', href: '#experience', delay: '0.24s' },
            ].map(({ label, href, delay }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="font-medium text-gray-900 hover:text-gray-400 leading-tight"
                style={{
                  fontSize: 'clamp(2rem, 9vw, 2.75rem)',
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateX(0)' : 'translateX(-14px)',
                  transition: `opacity 0.35s ease ${delay}, transform 0.35s ease ${delay}`,
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Footer icons — pinned to bottom */}
        <div className="relative px-6 pb-8 shrink-0">
          <div className="border-t border-gray-100 pt-5 flex items-center gap-6">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2.5 text-gray-400 hover:text-gray-900 transition-colors group"
            >
              <EmailIcon size={20} />
              <span className="text-sm text-gray-500 group-hover:text-gray-900 transition-colors">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/iammanbir/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-gray-400 hover:text-gray-900 transition-colors group"
            >
              <LinkedInIcon size={20} />
              <span className="text-sm text-gray-500 group-hover:text-gray-900 transition-colors">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-14 md:pt-28 md:pb-20">
      <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-5">
        ● Available for work · Melbourne, Australia
      </p>
      <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-4">
        Manbir Singh
      </p>
      <h1 className="text-2xl md:text-5xl lg:text-[4rem] font-medium leading-tight tracking-tight max-w-4xl text-gray-900">
        Software developer turning complex problems into clean, scalable products.
      </h1>
      <p className="mt-5 text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed">
        Based in Melbourne. I build across the full stack, from React and TypeScript frontends to automated backend systems and AI-integrated workflows. I work best when there's no playbook.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#work"
          className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          View work →
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-medium px-5 py-3 rounded-full hover:border-gray-500 transition-colors"
        >
          Contact
        </a>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

function Chip({ label }: { label: string }) {
  return (
    <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-gray-200 text-gray-400">
      {label}
    </span>
  );
}

type ProjectEntry = {
  id: string;
  name: string;
  role: string;
  company?: string;
  desc: string;
  highlights: { label: string; text: string }[];
  tags: string[];
};

function ProjectRow({ project }: { project: ProjectEntry }) {
  return (
    <div>
      <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-4">
        {project.role}
        {project.company && (
          <span className="text-gray-300"> · {project.company}</span>
        )}
      </p>
      <h3
        className="font-medium tracking-tight leading-none text-gray-900 mb-5"
        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
      >
        {project.name}
      </h3>
      <div className="border-l-2 border-gray-200 pl-5 mb-8 max-w-2xl">
        <p className="text-sm text-gray-500 leading-relaxed">{project.desc}</p>
      </div>
      <div className="flex flex-col gap-2 mb-6">
        {project.highlights.map(({ label, text }) => (
          <div key={label} className="flex gap-4">
            <span className="text-xs font-mono tracking-widest text-gray-400 uppercase shrink-0 w-32">
              {label}
            </span>
            <span className="text-sm text-gray-500 leading-snug">{text}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(t => (
          <Chip key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Selected work
// ---------------------------------------------------------------------------

function BentoGrid() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 pb-28">
      <div className="flex items-center gap-5 mb-6">
        <p className="font-mono text-gray-300 leading-none shrink-0" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>01</p>
        <div className="flex-1 border-t-2 border-gray-200" />
      </div>
      <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-6">
        Selected work
      </p>
      <div>
        {PROJECTS.map((project, i) => (
          <div key={project.id}>
            {i > 0 && <div className="border-t border-gray-100 my-10 md:my-14" />}
            <ProjectRow project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Personal projects
// ---------------------------------------------------------------------------

function PersonalProjects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 pb-16">
      <div className="flex items-center gap-5 mb-6">
        <p className="font-mono text-gray-300 leading-none shrink-0" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>02</p>
        <div className="flex-1 border-t-2 border-gray-200" />
      </div>
      <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-6">
        Projects
      </p>
      <div>
        {PERSONAL_PROJECTS.map((project, i) => (
          <div key={project.id}>
            {i > 0 && <div className="border-t border-gray-100 my-10 md:my-14" />}
            <ProjectRow project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Stack
// ---------------------------------------------------------------------------

function Stack() {
  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 pb-16">
      <div className="flex items-center gap-5 mb-6">
        <p className="font-mono text-gray-300 leading-none shrink-0" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>03</p>
        <div className="flex-1 border-t-2 border-gray-200" />
      </div>
      <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-6">
        Stack
      </p>
      <table className="w-full border-t border-gray-100">
        <tbody>
          {STACK_CATS.map(({ cat, items }) => (
            <tr key={cat} className="border-b border-gray-100">
              <td className="py-4 pr-8 align-top w-36 shrink-0">
                <span className="text-xs font-mono tracking-widest text-gray-400 uppercase whitespace-nowrap">
                  {cat}
                </span>
              </td>
              <td className="py-4">
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span
                      key={item}
                      className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 pb-16">
      <div className="flex items-center gap-5 mb-6">
        <p className="font-mono text-gray-300 leading-none shrink-0" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>04</p>
        <div className="flex-1 border-t-2 border-gray-200" />
      </div>
      <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-6">
        Experience
      </p>

      {/* Parent */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
          <p className="text-base font-medium text-gray-900">{EXPERIENCE_PARENT.role}</p>
          <p className="text-xs font-mono tracking-widest text-gray-400 uppercase shrink-0">
            {EXPERIENCE_PARENT.period}
          </p>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{EXPERIENCE_PARENT.desc}</p>
      </div>

      {/* Client entries */}
      <div className="pl-6 flex flex-col gap-8">
        {EXPERIENCE_CLIENTS.map(({ company, industry, role, period, desc }) => (
          <div key={company}>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium text-gray-900">{company}</span>
                <span className="text-xs text-gray-400">{industry}</span>
              </div>
              <p className="text-xs font-mono tracking-widest text-gray-400 uppercase shrink-0">
                {period}
              </p>
            </div>
            <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-2">{role}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// CTA
// ---------------------------------------------------------------------------

function CTA() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 pb-20">
      <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-6">
        Contact
      </p>
      <div className="border-t border-gray-100 pt-6">
        <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-gray-900 max-w-lg mb-4">
          I am open to new engagements.
        </h2>
        <p className="text-sm text-gray-500 mb-6 max-w-sm">
          I respond to every note within two business days.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="mailto:manbir359@gmail.com"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            manbir359@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/iammanbir/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

function Footer() {
  return (
    <footer className="border-t border-gray-200 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 pb-8">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Wordmark + tagline */}
          <div>
            <span className="text-base font-medium tracking-tight text-gray-900">Manbir</span>
            <p className="mt-2 text-xs text-gray-400">Software Developer · Melbourne, AU</p>
          </div>

          {/* Site nav */}
          <div className="flex flex-col gap-2.5">
            {[
              { label: 'Work',       href: '#work' },
              { label: 'Projects',   href: '#projects' },
              { label: 'Stack',      href: '#stack' },
              { label: 'Experience', href: '#experience' },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-fit">
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-mono tracking-widest text-gray-300 uppercase mb-1">Contact</p>
            <a href="mailto:manbir359@gmail.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              manbir359@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/iammanbir/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <p className="font-mono text-xs text-gray-300">© 2026</p>
      </div>

      {/* Atmospheric watermark */}
      <div
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 70%)',
          overflow: 'hidden',
          lineHeight: 1,
        }}
      >
        <p
          className="text-center font-medium text-gray-200 whitespace-nowrap select-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 11rem)', margin: 0, padding: 0 }}
        >
          MANBIR SINGH
        </p>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Photography
// ---------------------------------------------------------------------------

function Photography() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-3">
        Photography
      </p>
      <p className="text-sm text-gray-500 mb-10">When I'm not building, I'm shooting.</p>

      <div className="flex flex-col gap-2">
        {/* Row 1: P78 left, P20 portrait right — portrait drives row height */}
        <div className="grid grid-cols-2 gap-2">
          <div className="overflow-hidden">
            <img
              src="/photos/P78.jpg"
              alt=""
              loading="lazy"
              className="w-full h-full object-cover transition-opacity duration-500 hover:opacity-80"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/photos/P20.jpg"
              alt=""
              loading="lazy"
              className="w-full h-auto block transition-opacity duration-500 hover:opacity-80"
            />
          </div>
        </div>

        {/* Row 2: three equal portrait columns */}
        <div className="grid grid-cols-3 gap-2">
          <div className="overflow-hidden">
            <img
              src="/photos/P18.jpg"
              alt=""
              loading="lazy"
              className="w-full aspect-[3/4] object-cover block transition-opacity duration-500 hover:opacity-80"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/photos/P35.jpg"
              alt=""
              loading="lazy"
              className="w-full aspect-[3/4] object-cover block transition-opacity duration-500 hover:opacity-80"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/photos/P38.jpg"
              alt=""
              loading="lazy"
              className="w-full aspect-[3/4] object-cover block transition-opacity duration-500 hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans">
      <FloatingTOC />
      <Nav />
      <main>
        <Hero />
        <BentoGrid />
        <PersonalProjects />
        <Stack />
        <Experience />
        <Photography />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
