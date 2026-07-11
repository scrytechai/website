import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, animate as motionAnimate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowRight, HiPlay } from 'react-icons/hi'
import { HiSparkles } from 'react-icons/hi2'

// ── Tech stack items for marquee ──────────────────────────────────────────────
const TECH_STACK = [
  { name: 'React',        color: '#61DAFB' },
  { name: 'Next.js',      color: '#ffffff' },
  { name: 'Node.js',      color: '#4EA72E' },
  { name: 'Python',       color: '#F09C24' },
  { name: 'Go',           color: '#4B7BF5' },
  { name: 'Swift / iOS',  color: '#F05138' },
  { name: 'Kotlin',       color: '#7F52FF' },
  { name: 'LLM / GPT',    color: '#4B7BF5' },
  { name: 'RAG',          color: '#F09C24' },
  { name: 'AWS',          color: '#FF9900' },
  { name: 'Azure',        color: '#4B7BF5' },
  { name: 'Google Cloud', color: '#34A853' },
  { name: 'Flutter',      color: '#54C5F8' },
  { name: 'Docker',       color: '#2496ED' },
  { name: 'GraphQL',      color: '#E535AB' },
  { name: 'Kafka',        color: '#F09C24' },
  { name: 'Kubernetes',   color: '#326CE5' },
]

// ── Infographic helpers ──────────────────────────────────────────────────────

/** Animated SVG circular gauge */
function CircularGauge({ value, color = '#2253D2' }) {
  const r = 34
  const circ = 2 * Math.PI * r
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  return (
    <div ref={ref} className="flex items-center justify-center">
      <svg width="90" height="90" viewBox="0 0 90 90" aria-label={`${value}%`}>
        {/* Track */}
        <circle cx="45" cy="45" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="7" />
        {/* Glow halo */}
        <circle cx="45" cy="45" r={r} fill="none" stroke={color} strokeWidth="14" opacity="0.06" />
        {/* Animated progress arc */}
        <motion.circle
          cx="45" cy="45" r={r}
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={inView ? { strokeDashoffset: circ * (1 - value / 100) } : {}}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{ transform: 'rotate(-90deg)', transformOrigin: '45px 45px' }}
        />
        <text x="45" y="42" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">{value}</text>
        <text x="45" y="56" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="Inter, sans-serif">%</text>
      </svg>
    </div>
  )
}

/** Animated SVG bar chart */
function MiniBarChart({ bars = [55, 70, 60, 85, 74, 92], color = '#F09C24' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const maxH = 34
  return (
    <div ref={ref}>
      <svg width="100" height="44" viewBox="0 0 100 44" aria-label="Delivery velocity chart">
        {bars.map((v, i) => {
          const h = (v / 100) * maxH
          return (
            <motion.rect
              key={i}
              x={i * 16 + 2}
              width="12"
              rx="2.5"
              fill={i % 2 === 0 ? color : `${color}77`}
              initial={{ height: 0, y: 42 }}
              animate={inView ? { height: h, y: 42 - h } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
            />
          )
        })}
      </svg>
    </div>
  )
}

/** Animated horizontal progress bar */
function AnimatedProgressBar({ label, value, color }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-[10px] text-white/50">{label}</span>
        <span className="text-[10px] font-bold" style={{ color }}>{value}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}66, ${color})` }}
          initial={{ width: '0%' }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        />
      </div>
    </div>
  )
}

/** 6 pulsing agent-status dots */
function AgentDots() {
  const dots = [
    { color: '#2253D2', name: 'Planner' },
    { color: '#F09C24', name: 'Analyst' },
    { color: '#4EA72E', name: 'Architect' },
    { color: '#2253D2', name: 'Dev' },
    { color: '#F09C24', name: 'QA' },
    { color: '#7B5CF0', name: 'Ops' },
  ]
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-1.5">
      {dots.map((dot, i) => (
        <div key={dot.name} className="flex items-center gap-1.5">
          <motion.div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: dot.color, boxShadow: `0 0 5px ${dot.color}99` }}
            animate={{ opacity: [1, 0.3, 1], scale: [1, 0.7, 1] }}
            transition={{ duration: 1.5 + i * 0.3, delay: i * 0.18, repeat: Infinity }}
            aria-hidden="true"
          />
          <span className="text-[10px] text-white/50 truncate">{dot.name}</span>
        </div>
      ))}
    </div>
  )
}

/** Infinite scrolling tech-stack ticker */
function TechMarquee() {
  const doubled = [...TECH_STACK, ...TECH_STACK]
  return (
    <div className="relative overflow-hidden" aria-hidden="true">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #071628, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #071628, transparent)' }} />
      <div className="flex gap-2 w-max animate-marquee-track py-2">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap select-none"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color, opacity: 0.8 }} />
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}

const TYPEWRITER_PHRASES = [
  'Mobile Applications',
  'Web Platforms',
  'Backend Systems',
  'Agentic AI Workflows',
  'Intelligent Automation',
]

function TypewriterText() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = TYPEWRITER_PHRASES[index]
    let timeout

    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % TYPEWRITER_PHRASES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])

  return (
    // aria-live announces to screen readers when the phrase changes
    <span
      aria-live="polite"
      aria-atomic="true"
      aria-label={`${TYPEWRITER_PHRASES[index]}`}
      className="block gradient-text-orange min-h-[1.2em]"
    >
      <span aria-hidden="true">
        {displayed}
        <span className="cursor-blink text-brand-orange" aria-hidden="true">|</span>
      </span>
    </span>
  )
}

// Floating particle component
function Particle({ style }) {
  return (
    <div
      className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
      style={{
        background: 'rgba(34,83,210,0.5)',
        ...style,
      }}
    />
  )
}

// Neural network node
function NeuralNode({ x, y, size = 4, color = 'blue', delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: color === 'orange' ? '#F09C24' : '#4B7BF5',
        boxShadow: color === 'orange'
          ? '0 0 8px rgba(240,156,36,0.8)'
          : '0 0 8px rgba(75,123,245,0.8)',
      }}
      animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
      transition={{ duration: 2.5, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const stats = [
  { value: '75%', label: 'Reduction in Manual Effort' },
  { value: '10×', label: 'Faster AI-Driven Delivery' },
  { value: '2026', label: 'Founded in Pune, India' },
  { value: '4', label: 'Core AI Service Pillars' },
]

export default function Hero() {
  const canvasRef = useRef(null)

  // Animated canvas background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animFrame
    let nodes = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initNodes()
    }

    const initNodes = () => {
      nodes = Array.from({ length: 55 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#2253D2' : '#F09C24',
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.25
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
            grad.addColorStop(0, nodes[i].color + Math.round(alpha * 255).toString(16).padStart(2, '0'))
            grad.addColorStop(1, nodes[j].color + Math.round(alpha * 255).toString(16).padStart(2, '0'))
            ctx.strokeStyle = grad
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx.fillStyle = node.color + 'cc'
        ctx.fill()

        // Move
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
      })

      animFrame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return (
    <section
      id="hero"
      aria-label="Hero — ScrytechAI AI-First Engineering Partner"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #071628 0%, #0A1F35 40%, #0E2841 70%, #071628 100%)' }}
    >
      {/* Background grid — decorative */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />

      {/* Canvas neural network — decorative, hidden from AT */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.5 }}
        aria-hidden="true"
      />

      {/* Glow orbs — decorative */}
      <div
        className="absolute top-1/4 left-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(ellipse, rgba(34,83,210,0.2) 0%, transparent 65%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-2/3 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full pointer-events-none translate-x-1/2"
        style={{ background: 'radial-gradient(ellipse, rgba(240,156,36,0.15) 0%, transparent 65%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag mb-5 sm:mb-6 inline-flex" role="text">
                <HiSparkles className="text-brand-blue" size={14} aria-hidden="true" />
                AI-First Engineering Partner • Founded 2026
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-5 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-white block">Build Smarter</span>
              <span className="gradient-text-brand block">AI-Powered</span>
              <TypewriterText />
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              ScrytechAI embeds intelligence at every layer of engineering — from
              mobile apps to agentic AI workflows — delivering solutions that
              are <strong className="text-white/90">Intelligent, Scalable, and Future-Ready</strong>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group w-full xs:w-auto justify-center sm:justify-start"
              >
                Start Your AI Journey
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} aria-hidden="true" />
              </button>
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary group w-full xs:w-auto justify-center sm:justify-start"
              >
                <HiPlay size={18} className="text-brand-orange" aria-hidden="true" />
                Explore Services
              </button>
            </motion.div>

      {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              role="list"
              aria-label="Key statistics"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  role="listitem"
                  className="glass-card px-3 sm:px-4 py-3 sm:py-4 text-center"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div
                    className="text-xl sm:text-2xl font-bold mb-1"
                    aria-label={`${stat.value} — ${stat.label}`}
                    style={{
                      background: i % 2 === 0
                        ? 'linear-gradient(135deg, #4B7BF5, #2253D2)'
                        : 'linear-gradient(135deg, #FFBE5C, #F09C24)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Animated Hero Visual (desktop only) */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Tech stack marquee — spans full width below the 2-col grid */}
        <motion.div
          className="mt-10 sm:mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <p className="text-center text-white/25 text-[10px] font-medium tracking-[0.2em] uppercase mb-3">
            Powered by
          </p>
          <TechMarquee />
        </motion.div>
      </div>

      {/* Bottom gradient fade — decorative */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #071628)' }}
        aria-hidden="true" />

      {/* Scroll indicator — decorative */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [0, 1, 0], y: [0, 0, 8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative w-[460px] h-[440px]" role="presentation">

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(34,83,210,0.18) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* 2×2 dashboard grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">

        {/* Card 1 — Agent Network */}
        <motion.div
          className="glass-card p-4 flex flex-col overflow-hidden"
          initial={{ opacity: 0, scale: 0.86, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-semibold text-white/65">Agent Network</span>
            <span className="flex items-center gap-1">
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#4EA72E', boxShadow: '0 0 6px #4EA72E' }}
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
                aria-hidden="true"
              />
              <span className="text-[9px] font-bold" style={{ color: '#4EA72E' }}>LIVE</span>
            </span>
          </div>
          <AgentDots />
          <div className="mt-auto pt-2 border-t border-white/[0.05]">
            <span className="text-[9px] text-white/35">6 / 6 Agents Online</span>
          </div>
        </motion.div>

        {/* Card 2 — AI Accuracy */}
        <motion.div
          className="glass-card p-4 flex flex-col items-center justify-center gap-1"
          initial={{ opacity: 0, scale: 0.86, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-[11px] font-semibold text-white/65 self-start mb-1">AI Accuracy</span>
          <CircularGauge value={98} color="#2253D2" />
          <div className="flex items-center gap-1 text-[10px]">
            <span style={{ color: '#4EA72E' }}>&#8593; 2.3%</span>
            <span className="text-white/35">this sprint</span>
          </div>
        </motion.div>

        {/* Card 3 — Dev Velocity */}
        <motion.div
          className="glass-card p-4 flex flex-col gap-2"
          initial={{ opacity: 0, scale: 0.86, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-[11px] font-semibold text-white/65">Dev Velocity</span>
          <MiniBarChart bars={[55, 70, 60, 85, 74, 92]} color="#F09C24" />
          <div className="flex items-baseline gap-1.5 mt-auto">
            <span
              className="text-2xl font-black"
              style={{ background: 'linear-gradient(135deg, #FFBE5C, #F09C24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >10×</span>
            <span className="text-[10px] text-white/40">faster delivery</span>
          </div>
        </motion.div>

        {/* Card 4 — Workflow Automation */}
        <motion.div
          className="glass-card p-4 flex flex-col gap-2.5"
          initial={{ opacity: 0, scale: 0.86, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-[11px] font-semibold text-white/65">Workflow Automation</span>
          <div className="flex-1 flex flex-col justify-center gap-2.5">
            <AnimatedProgressBar label="Manual tasks ↓" value={75} color="#2253D2" />
            <AnimatedProgressBar label="Auto-testing" value={92} color="#F09C24" />
            <AnimatedProgressBar label="Code quality" value={98} color="#2253D2" />
          </div>
        </motion.div>

      </div>

      {/* Center orb — floats over the 4 cards */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 220, damping: 20 }}
        >
          {/* Ambient glow */}
          <div
            className="absolute rounded-2xl"
            style={{
              inset: '-22px',
              background: 'radial-gradient(ellipse at center, rgba(34,83,210,0.55) 0%, rgba(240,156,36,0.25) 55%, transparent 70%)',
              filter: 'blur(20px)',
            }}
            aria-hidden="true"
          />
          {/* Glass card */}
          <div
            className="relative w-[76px] h-[76px] rounded-[22px] flex items-center justify-center"
            style={{
              background: 'rgba(10,24,42,0.97)',
              border: '1px solid rgba(34,83,210,0.5)',
              boxShadow: '0 0 0 5px rgba(7,22,40,0.92), 0 8px 40px rgba(34,83,210,0.5)',
            }}
          >
            <svg viewBox="0 0 40 40" className="w-11 h-11" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="vBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4B7BF5"/>
                  <stop offset="100%" stopColor="#2253D2"/>
                </linearGradient>
                <linearGradient id="vOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFBE5C"/>
                  <stop offset="100%" stopColor="#F09C24"/>
                </linearGradient>
              </defs>
              <path d="M20 8C14 8 10 12 10 16C8 16.5 7 18 7 20C7 22 8 23.5 10 24C10 28 14 32 20 32L20 8Z" fill="url(#vBlue)"/>
              <path d="M20 8C26 8 30 12 30 16C32 16.5 33 18 33 20C33 22 32 23.5 30 24C30 28 26 32 20 32L20 8Z" fill="url(#vOrange)"/>
              <circle cx="20" cy="20" r="3.5" fill="white"/>
              <circle cx="13" cy="16" r="1.5" fill="#4B7BF5"/>
              <circle cx="11" cy="21" r="1.2" fill="#2253D2"/>
              <line x1="20" y1="14" x2="27" y2="14" stroke="#F09C24" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="20" y1="20" x2="28" y2="20" stroke="#F09C24" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="27" cy="14" r="1.5" fill="#FFBE5C"/>
              <circle cx="28" cy="20" r="1.5" fill="#FFBE5C"/>
            </svg>
          </div>
          {/* Expanding pulse rings */}
          {[0, 1].map(i => (
            <motion.div
              key={i}
              className="absolute rounded-[22px]"
              style={{ inset: 0, border: `1px solid rgba(34,83,210,${0.55 - i * 0.2})` }}
              animate={{ scale: [1, 2.1 + i * 0.5], opacity: [0.8, 0] }}
              transition={{ duration: 2.5 + i * 0.5, delay: i * 1.2, repeat: Infinity, ease: 'easeOut' }}
              aria-hidden="true"
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}