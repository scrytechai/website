import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'AI Edge', href: '#ai-edge' },
  { label: 'Agentic', href: '#agentic' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Intersection Observer for active nav item
  useEffect(() => {
    const sections = navItems.map(i => document.querySelector(i.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection('#' + entry.target.id)
        })
      },
      { threshold: 0.35 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close menu on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        el.setAttribute('tabindex', '-1')
        el.focus({ preventScroll: true })
      }
    }, 100)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-navy-deep/80 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">

            {/* Logo */}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
              aria-label="ScrytechAI — go to homepage"
              className="flex items-center gap-2 sm:gap-3 group flex-shrink-0"
            >
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #0E2841 0%, #1A3A5C 100%)', border: '1px solid rgba(34,83,210,0.3)' }}>
                  <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8" fill="none" aria-hidden="true" focusable="false">
                    <defs>
                      <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4B7BF5"/>
                        <stop offset="100%" stopColor="#2253D2"/>
                      </linearGradient>
                      <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFBE5C"/>
                        <stop offset="100%" stopColor="#F09C24"/>
                      </linearGradient>
                    </defs>
                    <path d="M20 8 C14 8 10 12 10 16 C8 16.5 7 18 7 20 C7 22 8 23.5 10 24 C10 28 14 32 20 32 L20 8Z" fill="url(#logoGrad1)" opacity="0.9"/>
                    <path d="M20 8 C26 8 30 12 30 16 C32 16.5 33 18 33 20 C33 22 32 23.5 30 24 C30 28 26 32 20 32 L20 8Z" fill="url(#logoGrad2)" opacity="0.9"/>
                    <circle cx="20" cy="20" r="3" fill="white" opacity="0.9"/>
                    <circle cx="13" cy="16" r="1.5" fill="#4B7BF5"/>
                    <circle cx="11" cy="21" r="1.2" fill="#2253D2"/>
                    <circle cx="14" cy="26" r="1.5" fill="#4B7BF5"/>
                    <line x1="20" y1="14" x2="27" y2="14" stroke="#F09C24" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="20" y1="20" x2="28" y2="20" stroke="#F09C24" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="20" y1="26" x2="26" y2="26" stroke="#F09C24" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="27" cy="14" r="1.5" fill="#FFBE5C"/>
                    <circle cx="28" cy="20" r="1.5" fill="#FFBE5C"/>
                    <circle cx="26" cy="26" r="1.5" fill="#FFBE5C"/>
                  </svg>
                </div>
                <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                  style={{ background: 'radial-gradient(ellipse, rgba(34,83,210,0.3) 0%, transparent 70%)' }}/>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base sm:text-lg font-bold tracking-tight">
                  <span style={{ background: 'linear-gradient(135deg, #4B7BF5, #2253D2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Scrytech</span>
                  <span style={{ background: 'linear-gradient(135deg, #FFBE5C, #F09C24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
                </span>
                <span className="hidden sm:block text-[10px] font-medium text-white/50 tracking-widest uppercase">AI Engineering</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-0.5 list-none" role="list">
              {navItems.map((item) => {
                const isActive = activeSection === item.href
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`px-3 lg:px-4 py-2 rounded-xl transition-all duration-200 text-sm font-medium
                        ${isActive
                          ? 'text-white bg-white/[0.08]'
                          : 'text-white/65 hover:text-white hover:bg-white/[0.05]'
                        }`}
                    >
                      {item.label}
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:block flex-shrink-0">
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary text-sm py-2.5 px-5"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              ref={toggleRef}
              onClick={() => setMobileOpen(o => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              {mobileOpen
                ? <HiX size={22} aria-hidden="true" />
                : <HiMenuAlt3 size={22} aria-hidden="true" />
              }
            </button>

          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 sm:top-[72px] left-0 right-0 z-40 overflow-hidden md:hidden"
            style={{ background: 'rgba(7,22,40,0.97)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <nav aria-label="Mobile navigation">
              <ul className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1 list-none" role="list">
                {navItems.map((item, i) => {
                  const isActive = activeSection === item.href
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        aria-current={isActive ? 'true' : undefined}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium text-base
                          ${isActive ? 'text-white bg-white/[0.08]' : 'text-white/65 hover:text-white hover:bg-white/[0.05]'}`}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  )
                })}
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.28 }}
                  className="mt-3 pt-3 border-t border-white/[0.08]"
                >
                  <button
                    onClick={() => handleNavClick('#contact')}
                    className="btn-primary w-full justify-center text-sm py-3"
                  >
                    Get Started
                  </button>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click-outside backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  )
}
