import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useMotionValue, useTransform, animate as motionAnimate } from 'framer-motion'
import { HiLightBulb, HiShieldCheck, HiTrendingUp, HiUsers, HiAcademicCap } from 'react-icons/hi'
import { HiSparkles } from 'react-icons/hi2'

/** Count-up number animation triggered on scroll */
function AnimatedStat({ target, suffix = '', prefix = '', label, color, duration = 2 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.6 })
  const mv = useMotionValue(0)
  const display = useTransform(mv, v => {
    const n = Math.round(v * 10) / 10
    return `${prefix}${Number.isInteger(target) ? Math.round(n) : n}${suffix}`
  })

  useEffect(() => {
    if (inView) motionAnimate(mv, target, { duration, ease: 'easeOut' })
  }, [inView, target, mv, duration])

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 tabular-nums"
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}bb)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {display}
      </motion.div>
      <p className="text-white/55 text-xs sm:text-sm font-medium leading-snug max-w-[120px] mx-auto">{label}</p>
    </div>
  )
}

const values = [
  {
    icon: HiLightBulb,
    title: 'Intelligence First',
    desc: 'Embedding intelligence as the foundation of every product we build.',
    color: '#2253D2',
  },
  {
    icon: HiShieldCheck,
    title: 'Radical Ownership',
    desc: 'Taking full responsibility for outcomes — no excuses, just results.',
    color: '#F09C24',
  },
  {
    icon: HiTrendingUp,
    title: 'Future-Ready Thinking',
    desc: 'Creating adaptable, forward-compatible solutions that evolve with your business.',
    color: '#2253D2',
  },
  {
    icon: HiUsers,
    title: 'Transparent Collaboration',
    desc: 'Maintaining full transparency through every phase of the project.',
    color: '#F09C24',
  },
  {
    icon: HiAcademicCap,
    title: 'Continuous Excellence',
    desc: 'Pursuing mastery in engineering and AI innovation with relentless iteration.',
    color: '#2253D2',
  },
]

function FadeInUp({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #071628 0%, #0A1F35 50%, #071628 100%)' }}>
      {/* Background dots */}
      <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />

      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,83,210,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <FadeInUp>
            <span className="section-tag mb-5 inline-flex" role="text">
              <HiSparkles size={14} aria-hidden="true" />
              Our Story
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6 tracking-tight">
              <span className="text-white">Engineering the</span>{' '}
              <span className="gradient-text-blue">Future of AI</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed">
              Founded in 2026, headquartered in <strong className="text-white/85">Pune, Maharashtra, India</strong> —
              ScrytechAI specializes in designing scalable mobile applications, modern web platforms,
              and robust backend systems, all powered by advanced AI-first architectures.
            </p>
          </FadeInUp>
        </div>

        {/* Mission / Vision Cards */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-16 sm:mb-20" ref={ref}>
          <motion.div
            className="glass-card-blue p-6 sm:p-8"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="icon-badge">
                <span className="text-xl sm:text-2xl" aria-hidden="true">🎯</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Mission</h3>
            </div>
            <p className="text-white/65 leading-relaxed text-sm sm:text-base">
              To <span className="text-white/90 font-medium">empower businesses</span> with intelligent,
              AI-driven digital solutions that transform how organizations build, operate, and scale
              technology. We turn complexity into competitive advantage.
            </p>
          </motion.div>

          <motion.div
            className="glass-card-orange p-6 sm:p-8"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="icon-badge-orange">
                <span className="text-xl sm:text-2xl" aria-hidden="true">🌍</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Vision</h3>
            </div>
            <p className="text-white/65 leading-relaxed text-sm sm:text-base">
              To be recognized globally as the most{' '}
              <span className="text-white/90 font-medium">trusted AI-first engineering partner</span>,
              building next-generation intelligent digital infrastructure that drives business growth
              and human progress.
            </p>
          </motion.div>
        </div>

        {/* Brand Divider */}
        <div className="brand-divider mb-16 sm:mb-20" />

        {/* Impact Metrics — animated count-up */}
        <FadeInUp delay={0.1}>
          <div className="glass-card p-8 sm:p-10 mb-16 sm:mb-20">
            <p className="text-center text-white/35 text-[10px] font-semibold tracking-[0.2em] uppercase mb-8">
              Impact by the Numbers
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
              <AnimatedStat target={75} suffix="%" label="Reduction in manual effort" color="#4B7BF5" />
              <AnimatedStat target={10} suffix="×" label="Faster AI-driven delivery" color="#F09C24" />
              <AnimatedStat target={98} suffix="%" label="AI model accuracy" color="#4B7BF5" duration={2.2} />
              <AnimatedStat target={4} suffix="" label="Integrated service pillars" color="#F09C24" duration={1.2} />
            </div>
          </div>
        </FadeInUp>

        {/* Core Values */}
        <div className="text-center mb-10 sm:mb-12">
          <FadeInUp>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">Core Values</h3>
            <p className="text-white/55 text-sm sm:text-base">The principles that guide every decision we make</p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {values.map((val, i) => (
            <FadeInUp key={val.title} delay={i * 0.08}>
              <motion.div
                className="glass-card p-4 sm:p-6 flex flex-col items-center text-center h-full group"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${val.color}25 0%, ${val.color}0d 100%)`,
                    border: `1px solid ${val.color}40`,
                  }}
                >
                  <val.icon size={20} style={{ color: val.color }} aria-hidden="true" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5 sm:mb-2 leading-tight">{val.title}</h4>
                <p className="text-white/55 text-xs leading-relaxed">{val.desc}</p>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        {/* Location chip */}
        <FadeInUp delay={0.3}>
          <div className="mt-16 flex justify-center">
            <div className="glass-card px-6 py-3 inline-flex items-center gap-3">
              <span className="text-xl">📍</span>
              <div>
                <p className="text-white/80 font-medium text-sm">Headquarters</p>
                <p className="text-white/45 text-xs">Pune, Maharashtra, India</p>
              </div>
              <div className="w-px h-8 bg-white/10 mx-2" />
              <div>
                <p className="text-white/80 font-medium text-sm">hello@scrytechai.com</p>
                <p className="text-white/45 text-xs">scrytechai.com</p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
