import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiSparkles } from 'react-icons/hi2'
import { HiCheckCircle } from 'react-icons/hi'

const strengths = [
  {
    icon: '🧠',
    title: 'AI-First Engineering Culture',
    desc: 'AI is not a feature — it\'s the foundation. Every engineer thinks AI-first from day one.',
    color: '#2253D2',
  },
  {
    icon: '⚡',
    title: 'Agile + Agentic Delivery',
    desc: 'Combines proven agile methodology with AI-driven agents for continuous optimization at every sprint.',
    color: '#F09C24',
  },
  {
    icon: '🔒',
    title: 'Enterprise-Grade Security',
    desc: 'Security built-in by design from architecture review to deployment — not added as an afterthought.',
    color: '#2253D2',
  },
  {
    icon: '📈',
    title: 'Scalable Partnerships',
    desc: 'From MVP prototypes to full enterprise-scale solutions — we grow with your ambitions.',
    color: '#F09C24',
  },
  {
    icon: '🏆',
    title: 'Proven Engineering Excellence',
    desc: 'Deep domain expertise backed by senior engineers who\'ve built products at scale.',
    color: '#2253D2',
  },
]

const engagements = [
  {
    type: 'Project-Based',
    icon: '📦',
    tagline: 'Fixed-Price Delivery',
    desc: 'Ideal for well-defined projects. Fixed-price, milestone-driven delivery with clear outcomes and no surprises.',
    best: 'Best for: MVPs, feature builds, defined scope projects',
    color: '#2253D2',
    features: ['Fixed price & timeline', 'Milestone checkpoints', 'Defined deliverables', 'Post-launch support'],
  },
  {
    type: 'Dedicated Team',
    icon: '👥',
    tagline: 'Embedded AI Engineers',
    desc: 'Embedded AI engineering teams that become an extension of your organization for ongoing development.',
    best: 'Best for: Complex transformations, long-term development',
    color: '#F09C24',
    features: ['Full-time dedicated engineers', 'Seamless team integration', 'Flexible scaling', 'Monthly engagement'],
    featured: true,
  },
  {
    type: 'AI Consulting',
    icon: '🎯',
    tagline: 'Strategic AI Advisory',
    desc: 'Strategic workshops, comprehensive AI audits, and advisory services to map your AI transformation journey.',
    best: 'Best for: AI readiness, strategy, digital transformation',
    color: '#2253D2',
    features: ['AI readiness assessment', 'Transformation roadmap', 'Workshops & training', 'Expert advisory'],
  },
]

function FadeInUp({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
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

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #071628 0%, #0E2841 50%, #071628 100%)' }}>
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,83,210,0.12) 0%, transparent 65%)', filter: 'blur(50px)' }}
        aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <FadeInUp>
            <span className="section-tag mb-5 inline-flex" role="text">
              <HiSparkles size={14} aria-hidden="true" />
              Why ScrytechAI
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              <span className="text-white">What Sets Us</span>{' '}
              <span className="gradient-text-blue">Apart</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-white/65 text-base sm:text-lg">
              Five core differentiators that make ScrytechAI the engineering partner
              enterprises trust for their most ambitious AI initiatives.
            </p>
          </FadeInUp>
        </div>

        {/* Strengths */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-20 sm:mb-28">
          {strengths.map((s, i) => (
            <FadeInUp key={s.title} delay={i * 0.08}>
              <motion.div
                className="glass-card p-5 sm:p-6 flex flex-col items-start h-full group"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}25 0%, ${s.color}0a 100%)`,
                    border: `1px solid ${s.color}35`,
                  }}
                  aria-hidden="true"
                >
                  {s.icon}
                </div>
                <h4 className="font-bold text-white text-xs sm:text-sm mb-2 leading-tight">{s.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed flex-1">{s.desc}</p>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        {/* Brand Divider */}
        <div className="brand-divider mb-28" />

        {/* Engagement Models */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <FadeInUp>
            <span className="section-tag mb-5 inline-flex" role="text">
              <HiSparkles size={14} aria-hidden="true" />
              Engagement Models
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              <span className="text-white">Flexible Engagement</span>
              <br />
              <span className="gradient-text-orange">Built Around You</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-white/65 text-base sm:text-lg">
              Three flexible engagement structures tailored to your project scale,
              budget, and timeline.
            </p>
          </FadeInUp>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {engagements.map((eng, i) => (
            <FadeInUp key={eng.type} delay={i * 0.1}>
              <motion.div
                className={`glass-card p-6 sm:p-8 flex flex-col h-full relative ${eng.featured ? 'border-brand-orange/30' : ''}`}
                style={eng.featured ? {
                  borderColor: 'rgba(240,156,36,0.3)',
                  boxShadow: '0 12px 48px rgba(240,156,36,0.15)',
                } : {}}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {eng.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-xs font-bold px-4 py-1.5 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #F09C24, #FFBE5C)', color: '#071628' }}>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl sm:text-2xl"
                    style={{ background: `${eng.color}20`, border: `1px solid ${eng.color}35` }}
                    aria-hidden="true"
                  >
                    {eng.icon}
                  </div>
                  <div>
                    <div className="text-xs font-medium" style={{ color: eng.color }}>{eng.tagline}</div>
                    <h3 className="font-bold text-white text-sm sm:text-base">{eng.type}</h3>
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-4 sm:mb-5">{eng.desc}</p>
                <p className="text-xs font-medium mb-4 sm:mb-5" style={{ color: eng.color }}>{eng.best}</p>

                <ul className="space-y-2 sm:space-y-2.5 flex-1 mb-6 sm:mb-8">
                  {eng.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <HiCheckCircle size={15} style={{ color: eng.color }} aria-hidden="true" />
                      <span className="text-white/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label={`Get started with ${eng.type}`}
                  className="w-full py-3 px-5 rounded-2xl text-sm font-semibold transition-all duration-300"
                  style={eng.featured ? {
                    background: 'linear-gradient(135deg, #F09C24, #FFBE5C)',
                    color: '#071628',
                    boxShadow: '0 4px 20px rgba(240,156,36,0.4)',
                  } : {
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.75)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  Get Started →
                </button>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
