import { useEffect, useState, type CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Code2,
  Compass,
  Database,
  ExternalLink,
  FileText,
  Github,
  Layers,
  Linkedin,
  Mail,
  MousePointer2,
  Radio,
  Route,
  Send,
  Smartphone,
  Sparkles,
  Zap,
  type LucideIcon,
} from 'lucide-react'

type Project = {
  title: string
  kicker: string
  description: string
  metrics: string[]
  tags: string[]
  accent: string
  links?: Array<{
    label: string
    href: string
  }>
}

type LabItem = {
  title: string
  copy: string
  icon: LucideIcon
}

type ComicRole = 'frontend' | 'data' | 'field'

type ComicProfile = {
  role: ComicRole
  tone: 'red' | 'blue' | 'yellow'
  title: string
  copy: string
  tags: string[]
}

const phrases = [
  'I turn complex information into tools people can act on.',
  'I bring React, TypeScript, Node.js, Python, and visual storytelling together.',
  'I like bold ideas that can become useful, reliable products.',
]

const heroTags = ['React', 'TypeScript', 'Python', 'SQL', 'Power BI', 'AI Tools']

const marqueeTags = [
  'REACT',
  'TYPESCRIPT',
  'VUE',
  'JAVASCRIPT',
  'PYTHON',
  'SQL',
  'POWER BI',
  'EXCEL',
  'NODE.JS',
  'JAVA',
  'SPRING BOOT',
  'MQTT',
  'CANVAS',
  'ANIMATION',
  'UI DESIGN',
  'AI TOOLS',
]

const stackGroups = [
  {
    title: 'Software UI',
    copy: 'Product interfaces using React, TypeScript, responsive layouts, and reusable components.',
    tags: ['React', 'TypeScript', 'Vue', 'Javascript'],
  },
  {
    title: 'Data Layer',
    copy: 'Python, SQL, dashboards, validation logic, and structured analysis for product and business decisions.',
    tags: ['Python', 'SQL', 'Power BI', 'Excel'],
  },
  {
    title: 'System Sense',
    copy: 'Full stack thinking across APIs, databases, cloud services, MQTT, CI/CD, and production reliability.',
    tags: ['Node.js', 'Java', 'Spring Boot', 'MQTT'],
  },
  {
    title: 'Creative Interface',
    copy: 'Canvas, motion, maps, layouts, micro interactions, and visual systems that make products feel alive.',
    tags: ['Canvas', 'Animation', 'UI Design'],
  },
]

const aiWorkflowSteps = ['Prompt', 'Prototype', 'Review', 'Refine', 'Ship']

const projects: Project[] = [
  {
    title: 'Beef & Lamb Market Dashboard',
    kicker: 'Data dashboard / market insight',
    description:
      'An analytics dashboard that cleans official Australian beef and lamb datasets and turns production, slaughter, and export trends into clear business insights.',
    metrics: ['Market trend analysis', 'Interactive filtering', 'Decision ready summaries'],
    tags: ['Python', 'SQL', 'Power BI', 'Excel'],
    accent: 'red',
    links: [
      {
        label: 'Live demo',
        href: 'https://beef-lamb-market-dashboard.vercel.app',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/96-chu/beef-lamb-market-dashboard',
      },
    ],
  },
  {
    title: 'Tripstamp',
    kicker: 'Travel web app / personal product',
    description:
      'A mobile first travel memory product that combines maps, trip timelines, image memories, and AI assisted storytelling into a structured personal travel record.',
    metrics: ['Travel storytelling', 'Map based memories', 'Personal product thinking'],
    tags: ['React', 'Next.js', 'Supabase', 'AI'],
    accent: 'blue',
    links: [
      {
        label: 'Live demo',
        href: 'https://tripstamp-web.vercel.app/',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/96-chu/tripstamp',
      },
    ],
  },
  {
    title: 'Gas Alarm Command Center',
    kicker: 'Realtime safety systems',
    description:
      'A real time monitoring and dispatch platform for industrial gas detectors, supporting 10,000 plus device points, 5 second telemetry updates, alert review, and incident coordination.',
    metrics: ['10,000+ detector points', '5s telemetry loop', 'Emergency dispatch flow'],
    tags: ['React', 'TypeScript', 'Java', 'Spring Boot', 'MQTT'],
    accent: 'yellow',
  },
  {
    title: 'Warehouse Mobile Flow',
    kicker: 'Operational product UX',
    description:
      'A mobile warehouse workflow app for barcode scanning, task allocation, inventory updates, and one click printing across daily warehouse operations.',
    metrics: ['Barcode scan', 'Mobile workflow', 'Inventory dashboard'],
    tags: ['Flutter', 'TypeScript', 'React', 'Ant Design'],
    accent: 'red',
  },
]

const labs: LabItem[] = [
  {
    title: 'Product Interfaces',
    copy: 'React and TypeScript component architecture, responsive layouts, reusable UI patterns, and performance-minded delivery.',
    icon: Layers,
  },
  {
    title: 'Realtime Data',
    copy: 'MQTT, telemetry, REST APIs, loading states, and screens that can handle changing live signals without losing clarity.',
    icon: Radio,
  },
  {
    title: 'Data Analytics',
    copy: 'Python, SQL, Excel, and dashboard thinking for validation, trend analysis, reporting, and practical insight.',
    icon: Activity,
  },
  {
    title: 'Mobile Flow',
    copy: 'React Native and Flutter workflows for scanning, field operations, and quick task completion.',
    icon: Smartphone,
  },
  {
    title: 'Backend Sense',
    copy: 'Node.js, Java services, SQL schemas, and enough systems thinking to build product logic with context.',
    icon: Database,
  },
  {
    title: 'Creative Interface',
    copy: 'Canvas, motion, interaction details, and visual ideas that give digital products a strong point of view.',
    icon: Sparkles,
  },
]

const comicProfiles: ComicProfile[] = [
  {
    role: 'frontend',
    tone: 'red',
    title: 'Software Builder',
    copy: 'Builds React and TypeScript software for dashboards, admin systems, data products, and workflow tools.',
    tags: ['React', 'TypeScript', 'Performance'],
  },
  {
    role: 'data',
    tone: 'blue',
    title: 'Data Interpreter',
    copy: 'Reads complex data with Python, SQL, and reporting logic, then turns it into views people can trust.',
    tags: ['Python', 'SQL', 'Dashboards'],
  },
  {
    role: 'field',
    tone: 'yellow',
    title: 'Field Observer',
    copy: 'Keeps the product eye sharp through travel, hiking, photography, and the habit of noticing real environments.',
    tags: ['Observation', 'Systems', 'Reset'],
  },
]

const balanceValues = ['Playful', 'Fast Learner', 'Reliable', 'Focused', 'Resilient']

const balanceSlides = [
  {
    image: '/images/balance-mountain.jpg',
    alt: 'Estella standing in a mountain landscape',
    caption: 'Altitude for perspective',
  },
  {
    image: '/images/balance-horse.jpg',
    alt: 'Estella observing a quiet outdoor moment',
    caption: 'Observation before action',
  },
  {
    image: '/images/balance-forest.jpg',
    alt: 'Estella hiking through a snowy forest',
    caption: 'Reset in the forest',
  },
]

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:chufan.wang0723@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/96-chu',
    icon: Github,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/estella-wang-cfw/',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'Resume',
    href: '/estella_wang_general_resume.md',
    icon: FileText,
    external: true,
  },
]

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#balance' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [activePhrase, setActivePhrase] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActivePhrase((current) => (current + 1) % phrases.length)
    }, 2600)

    return () => window.clearInterval(intervalId)
  }, [reduceMotion])

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = Math.round((event.clientX / window.innerWidth) * 100)
      const y = Math.round((event.clientY / window.innerHeight) * 100)
      document.documentElement.style.setProperty('--pointer-x', `${x}%`)
      document.documentElement.style.setProperty('--pointer-y', `${y}%`)
      document.documentElement.style.setProperty('--tilt-x', `${(y - 50) / 7}deg`)
      document.documentElement.style.setProperty('--tilt-y', `${(50 - x) / 7}deg`)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero activePhrase={activePhrase} />
        <SelectedWork />
        <LabSection />
        <BalanceSection />
        <ContactSection />
      </main>
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Estella Wang home">
        <span className="brand-mark">EW</span>
        <span>
          <strong>ESTELLA WANG</strong>
          <small>SOFTWARE DEV / DATA ANALYST / AI ENGINEER</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero({ activePhrase }: { activePhrase: number }) {
  return (
    <section className="hero section-pad" id="top" aria-labelledby="intro-title">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="issue-row">
            <span className="issue-stamp">
              OPEN TO SOFTWARE DEVELOPER / DATA ANALYST / AI ENGINEER ROLES
            </span>
          </div>
          <h1 id="intro-title">ESTELLA WANG</h1>
          <p className="hero-subtitle">
            I build software where data, interfaces, and AI workflows meet.
          </p>

          <div className="speech-stack" aria-live="polite">
            <Sparkles aria-hidden="true" />
            <p>{phrases[activePhrase]}</p>
          </div>

          <div className="hero-tags" aria-label="Core skills">
            {heroTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="action-button primary" href="#work">
              <BriefcaseBusiness aria-hidden="true" />
              View Work
            </a>
            <a className="action-button" href="#contact">
              <Send aria-hidden="true" />
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="speed-lines" aria-hidden="true" />
          <div className="photo-stage">
            <img
              className="hero-photo"
              src="/images/hero-red-town.jpg"
              alt="Estella Wang standing in front of a red mountain town"
            />
            <span className="photo-label label-one">VISUAL IDENTITY</span>
            <span className="photo-label label-two">FIELD OBSERVER</span>
            <span className="photo-label label-three">PERSONALITY FIRST</span>
          </div>

          <div className="hero-character-card" aria-label="Comic frontend avatar">
            <ComicCharacter role="frontend" tone="red" />
            <span>COMIC MODE</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SelectedWork() {
  return (
    <section className="section-pad selected-work" id="work" aria-labelledby="work-title">
      <SectionHeading
        eyebrow="Selected Work"
        titleId="work-title"
        title="Selected systems with a comic-poster pulse."
        copy="A focused set of projects that show how I think across data, product design, software engineering, and real world workflows."
      />

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            className={`project-card accent-${project.accent}`}
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="card-number">0{index + 1}</div>
            <p className="card-kicker">{project.kicker}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="metric-list">
              {project.metrics.map((metric) => (
                <li key={metric}>
                  <BadgeCheck aria-hidden="true" />
                  {metric}
                </li>
              ))}
            </ul>
            <div className="tag-strip">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {project.links ? (
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    className={link.label.toLowerCase().includes('live') ? 'is-live' : undefined}
                    href={link.href}
                    key={`${project.title}-${link.label}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ))}
              </div>
            ) : null}
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function LabSection() {
  return (
    <section className="section-pad lab-section" id="stack" aria-labelledby="stack-title">
      <SectionHeading
        eyebrow="Stack / AI Workflow"
        titleId="stack-title"
        title="Tools for building readable systems."
        copy="The stack I use to build product interfaces, data workflows, backend services, and AI assisted tools."
      />

      <TechStackPanel />
      <AiVibeCodingPanel />
      <ComicCast />

      <div className="lab-grid">
        {labs.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.article
              className="lab-card"
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.48, delay: index * 0.05 }}
            >
              <Icon aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

function TechStackPanel() {
  return (
    <motion.div
      className="tech-stack-panel"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.55 }}
    >
      <div className="tech-stack-copy">
        <p className="eyebrow">Capability Deck</p>
        <h3>From raw signals to software people can trust.</h3>
        <p>
          My strongest area is the overlap between software craft, data interpretation, and
          operational context. I build systems that are clear to use, easy to maintain, and reliable
          when real work depends on them.
        </p>
      </div>

      <div className="insight-board" aria-label="Portfolio capability snapshot">
        <div className="insight-board-top">
          <span>Capability Snapshot</span>
          <Zap aria-hidden="true" />
        </div>
        <ul>
          <li>
            <strong>Main Stack</strong>
            <span>React, TypeScript, Python, SQL, Java</span>
          </li>
          <li>
            <strong>Data Workflow</strong>
            <span>Cleaning, validation, dashboards, reporting</span>
          </li>
          <li>
            <strong>System Workflow</strong>
            <span>APIs, databases, cloud deployment, monitoring</span>
          </li>
        </ul>
      </div>

      <div className="stack-map" aria-label="Technology stack groups">
        {stackGroups.map((group, index) => (
          <article className="stack-node" key={group.title}>
            <span className="stack-index">0{index + 1}</span>
            <h4>{group.title}</h4>
            <p>{group.copy}</p>
            <div className="mini-tags">
              {group.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="marquee tech-marquee" aria-hidden="true">
        <div>
          {marqueeTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div>
          {marqueeTags.map((tag) => (
            <span key={`${tag}-repeat`}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function AiVibeCodingPanel() {
  return (
    <motion.article
      className="ai-workflow"
      initial={{ opacity: 0, y: 28, rotate: -0.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.55 }}
    >
      <LinePortrait />
      <div className="ai-workflow-copy">
        <p className="eyebrow">AI Vibe Coding</p>
        <h3>I use AI as a creative engineering partner, with human taste in charge.</h3>
        <p>
          This portfolio was shaped through Claude, ChatGPT, Cursor, visual references, and
          continuous human review. I direct the concept, refine the structure, judge the product
          experience, and use AI to move faster from idea to working system.
        </p>
      </div>

      <div className="workflow-steps" aria-label="AI assisted build workflow">
        {aiWorkflowSteps.map((step, index) => (
          <div className="workflow-step" key={step}>
            <span>0{index + 1}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
    </motion.article>
  )
}

function BalanceSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % balanceSlides.length)
    }, 3800)

    return () => window.clearInterval(intervalId)
  }, [reduceMotion])

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + balanceSlides.length) % balanceSlides.length)
  }

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % balanceSlides.length)
  }

  const slide = balanceSlides[activeSlide]

  return (
    <section className="section-pad balance-section" id="balance" aria-labelledby="balance-title">
      <div className="balance-layout">
        <LinePortrait />
        <motion.div
          className="balance-copy"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">About / Balance</p>
          <h2 id="balance-title">Personality outside, focus inside.</h2>
          <p>
            I am expressive, hands on, and visually curious. In work, I care about clear systems,
            reliable execution, and steady progress.
          </p>
          <p>
            I like bold ideas, but I also like turning them into usable products with clean
            structure, thoughtful details, and practical results.
          </p>
          <div className="value-stack">
            {balanceValues.map((value, index) => (
              <span key={value} style={{ '--value-index': index } as CSSProperties}>
                {value}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="balance-carousel" aria-label="Work life balance photo carousel">
          <motion.figure
            className="carousel-panel"
            key={slide.image}
            initial={{ opacity: 0, x: 28, rotate: 1 }}
            animate={{ opacity: 1, x: 0, rotate: -0.8 }}
            transition={{ duration: 0.45 }}
          >
            <img src={slide.image} alt={slide.alt} />
            <figcaption>{slide.caption}</figcaption>
          </motion.figure>

          <div className="carousel-controls" aria-label="Carousel controls">
            <button type="button" onClick={showPrevious} aria-label="Show previous balance photo">
              <ChevronLeft aria-hidden="true" />
            </button>
            <div className="carousel-dots" aria-label="Carousel position">
              {balanceSlides.map((item, index) => (
                <button
                  aria-label={`Show ${item.caption}`}
                  className={index === activeSlide ? 'is-active' : undefined}
                  key={item.image}
                  onClick={() => setActiveSlide(index)}
                  type="button"
                />
              ))}
            </div>
            <button type="button" onClick={showNext} aria-label="Show next balance photo">
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function LinePortrait() {
  return (
    <svg
      className="line-portrait-bg"
      viewBox="0 0 520 620"
      aria-hidden="true"
      focusable="false"
    >
      <path className="line-sun" d="M96 88 L122 48 L152 84 L196 62 L196 114 L244 128 L205 160 L218 212 L166 198 L130 238 L111 188 L58 184 L94 145 Z" />
      <path className="line-mountain" d="M22 500 C86 426 142 394 203 438 C246 360 318 314 496 496" />
      <path className="line-hair" d="M182 208 C145 224 132 278 154 327 C172 365 160 410 132 456" />
      <path className="line-profile" d="M191 202 C244 168 318 194 336 252 C344 280 331 306 310 323 C285 344 250 345 226 330" />
      <path className="line-beanie" d="M162 206 C170 142 216 108 270 116 C326 124 357 165 356 236 C306 204 239 195 162 206 Z" />
      <path className="line-beanie-fold" d="M163 208 C233 194 300 205 356 236 L350 266 C292 238 226 232 157 248 Z" />
      <path className="line-glasses" d="M238 262 L279 259 L286 281 L246 285 Z M292 258 L335 255 L342 276 L301 281 Z M286 271 L296 269" />
      <path className="line-coat" d="M176 340 C120 400 88 486 92 588 L380 588 C392 508 372 418 330 342 C286 376 224 378 176 340 Z" />
      <path className="line-backpack" d="M112 388 C64 434 50 510 76 584 L126 584 C109 508 121 442 156 398" />
      <path className="line-arm" d="M323 380 C382 402 428 444 454 506" />
      <path className="line-rope" d="M454 506 L492 588" />
      <path className="line-detail" d="M196 382 C224 432 246 496 248 588 M314 390 C292 448 284 510 292 588" />
    </svg>
  )
}

function ContactSection() {
  return (
    <section className="section-pad contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">LET'S BUILD SOMETHING SHARP, USEFUL, AND ALIVE.</h2>
        <p>
          Open to software developer, data analyst, and AI engineering roles with teams that care
          about reliable systems, useful products, and thoughtful design.
        </p>
        <p>Based in Sydney with full time work rights in Australia.</p>
      </div>

      <div className="contact-actions">
        {contactLinks.map((link) => {
          const Icon = link.icon

          return (
            <a
              className="contact-button"
              href={link.href}
              key={link.label}
              rel={link.external ? 'noreferrer' : undefined}
              target={link.external ? '_blank' : undefined}
            >
              <Icon aria-hidden="true" />
              {link.label}
              <ArrowUpRight aria-hidden="true" />
            </a>
          )
        })}
      </div>

      <footer>
        <span>ESTELLA WANG / 2026</span>
        <span>BUILT WITH REACT + TYPESCRIPT + CODEX</span>
      </footer>
    </section>
  )
}

function ComicCast() {
  return (
    <div className="comic-cast" aria-label="Comic skill personas">
      {comicProfiles.map((profile, index) => (
        <motion.article
          className={`comic-persona tone-${profile.tone}`}
          key={profile.title}
          initial={{ opacity: 0, y: 28, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
          whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <ComicCharacter role={profile.role} tone={profile.tone} />
          <div>
            <p className="persona-label">Skill Mode</p>
            <h3>{profile.title}</h3>
            <p>{profile.copy}</p>
            <div className="persona-tags">
              {profile.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

function ComicCharacter({ role, tone }: { role: ComicRole; tone: ComicProfile['tone'] }) {
  const prop = {
    frontend: 'laptop',
    data: 'chart',
    field: 'compass',
  }[role]

  return (
    <svg
      className={`comic-character character-${role} tone-${tone}`}
      viewBox="0 0 180 220"
      role="img"
      aria-label={`${role} comic avatar`}
    >
      <path className="character-burst" d="M20 55 L45 42 L50 14 L75 36 L104 16 L113 48 L150 42 L132 70 L160 95 L123 100 L126 132 L94 120 L68 145 L59 109 L24 116 L43 86 Z" />
      <ellipse className="character-shadow" cx="92" cy="202" rx="54" ry="10" />
      <path className="character-body" d="M56 108 C52 139 48 172 55 196 L128 196 C135 168 132 136 124 108 C105 126 75 125 56 108 Z" />
      <path className="character-jacket" d="M62 115 L87 145 L72 196 L55 196 C49 169 52 139 56 108 Z" />
      <path className="character-jacket" d="M119 115 L94 145 L109 196 L128 196 C135 168 132 139 124 108 Z" />
      <path className="character-neck" d="M78 96 L103 96 L107 119 C96 129 82 127 73 119 Z" />
      <circle className="character-head" cx="90" cy="76" r="36" />
      <path className="character-hair" d="M58 83 C54 54 70 34 94 35 C121 36 133 59 126 86 C111 74 93 66 58 83 Z" />
      <path className="character-beanie" d="M56 62 C59 32 76 19 97 23 C119 27 130 43 128 70 C106 61 82 58 56 62 Z" />
      <path className="character-beanie-fold" d="M58 63 C82 58 106 61 128 70 L126 82 C105 74 79 72 57 77 Z" />
      <rect className="character-glasses" x="65" y="73" width="22" height="12" rx="3" />
      <rect className="character-glasses" x="94" y="73" width="22" height="12" rx="3" />
      <path className="character-glasses-bridge" d="M87 78 L94 78" />
      <path className="character-mouth" d="M83 93 C89 98 98 97 104 92" />
      <path className="character-arm arm-left" d="M57 126 C35 132 28 147 29 168" />
      <path className="character-arm arm-right" d="M123 126 C143 132 151 148 150 170" />
      {prop === 'laptop' && (
        <g className="character-prop">
          <rect x="42" y="151" width="84" height="45" rx="3" />
          <path d="M34 196 L135 196" />
          <path d="M76 171 L88 163 L83 180 L91 180" />
        </g>
      )}
      {prop === 'chart' && (
        <g className="character-prop">
          <rect x="42" y="146" width="84" height="54" rx="3" />
          <path d="M55 184 L72 166 L86 175 L110 154" />
          <circle cx="72" cy="166" r="4" />
          <circle cx="86" cy="175" r="4" />
          <circle cx="110" cy="154" r="4" />
        </g>
      )}
      {prop === 'compass' && (
        <g className="character-prop">
          <circle cx="84" cy="171" r="28" />
          <path d="M84 146 L94 174 L74 196 Z" />
          <path d="M59 171 L109 171" />
          <path d="M84 146 L84 196" />
        </g>
      )}
    </svg>
  )
}

function SectionHeading({
  eyebrow,
  titleId,
  title,
  copy,
}: {
  eyebrow: string
  titleId?: string
  title: string
  copy: string
}) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      <p>{copy}</p>
      <div className="heading-icons" aria-hidden="true">
        <MousePointer2 />
        <Code2 />
        <Compass />
        <Route />
        <ExternalLink />
      </div>
    </motion.div>
  )
}

export default App
