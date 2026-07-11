import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TransformationEdge from './components/TransformationEdge'
import AgenticWay from './components/AgenticWay'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Scroll-to-top button
function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-glass-blue transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, #2253D2, #4B7BF5)',
            boxShadow: '0 4px 24px rgba(34,83,210,0.5)',
          }}
          aria-label="Scroll to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// Loading screen
function LoadingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: '#071628' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      role="status"
      aria-label="Loading ScrytechAI website"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none">
            <defs>
              <linearGradient id="loadingBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4B7BF5"/>
                <stop offset="100%" stopColor="#2253D2"/>
              </linearGradient>
              <linearGradient id="loadingOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFBE5C"/>
                <stop offset="100%" stopColor="#F09C24"/>
              </linearGradient>
            </defs>
            <motion.path
              d="M50 18 C34 18 24 28 24 38 C20 39 17 42 17 46 C17 50 20 53 24 54 C24 66 34 80 50 80 L50 18Z"
              fill="url(#loadingBlue)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
            <motion.path
              d="M50 18 C66 18 76 28 76 38 C80 39 83 42 83 46 C83 50 80 53 76 54 C76 66 66 80 50 80 L50 18Z"
              fill="url(#loadingOrange)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            <motion.circle
              cx="50" cy="49" r="6"
              fill="white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="text-2xl font-bold mb-1">
            <span style={{ background: 'linear-gradient(135deg, #4B7BF5, #2253D2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Scrytech</span>
            <span style={{ background: 'linear-gradient(135deg, #FFBE5C, #F09C24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
          </div>
          <div className="text-white/30 text-xs tracking-widest uppercase">Loading Experience...</div>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className="w-48 h-0.5 rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #2253D2, #F09C24)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* Skip to main content — first focusable element for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <AnimatePresence>
        {loading && <LoadingScreen key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            <Hero />
            <About />
            <Services />
            <TransformationEdge />
            <AgenticWay />
            <WhyUs />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </>
  )
}
