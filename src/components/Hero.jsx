import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'
import SecurityQuizSlide from './SecurityQuizSlide';

const stats = [
  { num: '12K+', label: 'Community Members' },
  { num: '800+', label: 'Articles Published' },
  { num: '50+',  label: 'Expert Contributors' },
  { num: 'Daily', label: 'News Updates' },
]

const topics = [
  'Ethical Hacking', 'CTF Writeups', 'Bug Bounty', 'Malware Analysis',
  'VAPT', 'SOC & Blue Team', 'Cloud Security', 'OSCP Prep',
  'Threat Intelligence', 'Network Security', 'DFIR', 'Reverse Engineering',
]

// Duplicate for seamless infinite scroll
const allTopics = [...topics, ...topics]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-[68px] flex flex-col overflow-hidden">

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Blobs */}
      <div className="absolute top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-accent opacity-[0.15] blur-[80px] animate-float-1 pointer-events-none" />
      <div className="absolute bottom-[20%] -left-[5%] w-[300px] h-[300px] rounded-full bg-accent2 opacity-[0.13] blur-[80px] animate-float-2 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-[5%] py-20">

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-7 border border-accent/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
          India's #1 Cybersecurity Community
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="font-display font-extrabold text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-ink max-w-4xl"
        >
          Where India Learns{' '}
          <span className="relative inline-block text-accent">
            Cybersecurity
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[-6px] left-0 right-0 h-[4px] bg-accent rounded-sm origin-left"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="mt-6 text-[clamp(1rem,2vw,1.2rem)] text-ink-soft font-light leading-[1.75] max-w-xl"
        >
          Stay ahead of threats with expert-written blogs, breaking security news,
          deep-dive writeups, and a community of thousands of security professionals across India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 bg-accent text-white text-base font-medium px-8 py-3.5 rounded-xl no-underline shadow-[0_4px_20px_rgba(0,87,255,0.3)] hover:bg-[#0047d9] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,87,255,0.4)] transition-all duration-200"
          >
            Explore the Blog
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="mt-16 w-full max-w-2xl bg-surface border border-ink/10 rounded-2xl overflow-hidden flex flex-col sm:flex-row"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 px-5 py-6 text-center ${
                i < stats.length - 1
                  ? 'border-b sm:border-b-0 sm:border-r border-ink/10'
                  : ''
              }`}
            >
              <div className="font-display font-extrabold text-[1.9rem] tracking-tight text-ink">
                {stat.num.replace(/[K+Daily]/g, (m) =>
                  ['K', '+'].includes(m)
                    ? `<span class="text-accent">${m}</span>`
                    : m
                ).includes('<') ? (
                  <span dangerouslySetInnerHTML={{ __html: stat.num.replace(/(K\+|\+)/g, '<span style="color:#0057ff">$1</span>') }} />
                ) : (
                  stat.num
                )}
              </div>
              <div className="text-xs text-ink-soft mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Security Quiz Section (Slide) */}
      <SecurityQuizSlide />

      {/* Topics Infinite Scroll Strip (Moved) */}
      <div className="relative z-10 border-t border-b border-ink/10 bg-surface overflow-hidden">
        <div className="flex w-max animate-scroll-track hover:[animation-play-state:paused]">
          {allTopics.map((topic, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-5 py-3 text-[0.85rem] text-ink-soft font-medium whitespace-nowrap border-r border-ink/10"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-accent flex-shrink-0" />
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
