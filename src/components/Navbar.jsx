import { useState, useEffect } from 'react'
import { Shield, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

const navLinks = [
  { name: 'Home', path: '/home' },
  { name: 'Dictionary', path: '/dictionary' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Security Explained', path: '/security-explained' }
]

export default function Navbar() {
    // Get current path
    const [path, setPath] = useState(window.location.pathname);
    useEffect(() => {
      const onPathChange = () => setPath(window.location.pathname);
      window.addEventListener('popstate', onPathChange);
      window.addEventListener('pushstate', onPathChange);
      return () => {
        window.removeEventListener('popstate', onPathChange);
        window.removeEventListener('pushstate', onPathChange);
      };
    }, []);
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // NEW: close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          // CHANGED: added gap-4, responsive px, removed fixed px-[5%]
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-[5%] h-[68px] glass-nav border-b border-ink/10 transition-shadow duration-300',
          scrolled && 'shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
        )}
      >
        {/* Logo — CHANGED: added flex-shrink-0 and whitespace-nowrap */}
        <div className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <div className="w-9 h-9 bg-ink rounded-lg grid place-items-center flex-shrink-0">
            <Shield size={18} color="white" strokeWidth={2.5} />
          </div>
          <span className="font-display font-extrabold text-[1.1rem] tracking-tight text-ink whitespace-nowrap">
            Cyber<span className="text-accent">Wallah</span>
          </span>
        </div>

        {/* Desktop Links — CHANGED: md:flex → lg:flex, gap-8 → gap-6, added flex-1 justify-center */}
        <ul className="hidden lg:flex items-center gap-6 list-none flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className="text-ink-soft text-sm font-medium no-underline hover:text-ink transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — CHANGED: md:flex → lg:flex, added flex-shrink-0 */}
        {path !== '/join-free' && (
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="/join-free"
              className="text-sm font-medium text-white bg-ink px-5 py-2 rounded-lg hover:bg-ink/85 hover:-translate-y-px transition-all no-underline whitespace-nowrap"
            >
              Join Free →
            </a>
          </div>
        )}

        {/* NEW: Tablet state (640px–1023px) — CTA buttons + hamburger */}
        {path !== '/join-free' && (
          <div className="hidden sm:flex lg:hidden items-center gap-2 flex-shrink-0">
            <a href="/join-free" className="text-sm font-medium text-white bg-ink px-4 py-2 rounded-lg hover:bg-ink/85 transition-all no-underline">
              Join Free →
            </a>
            <button
              className="ml-1 p-1.5 bg-transparent border border-ink/15 rounded-lg cursor-pointer text-ink hover:bg-ink/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        )}

        {/* Mobile Hamburger — CHANGED: md:hidden → sm:hidden, improved styling */}
        <button
          className="sm:hidden p-1.5 bg-transparent border border-ink/15 rounded-lg cursor-pointer text-ink hover:bg-ink/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Dropdown Menu — CHANGED: added backdrop, staggered animations, improved styling */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[68px] z-30 bg-ink/10 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[68px] left-0 right-0 z-40 bg-bg/95 backdrop-blur-xl border-b border-ink/10 px-4 sm:px-6 py-5 flex flex-col gap-1"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-ink text-base font-medium no-underline hover:text-accent hover:bg-accent/5 transition-colors px-3 py-2.5 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              {/* CTA buttons — only on mobile, tablet already shows them in navbar */}
              {path !== '/join-free' && (
                <div className="flex gap-3 pt-3 mt-1 border-t border-ink/10 sm:hidden">
                  <a href="/join-free" className="flex-1 text-sm text-center font-medium text-white bg-ink px-4 py-2.5 rounded-lg no-underline">
                    Join Free →
                  </a>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}