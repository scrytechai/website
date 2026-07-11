import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCheckCircle, HiX } from 'react-icons/hi'
import { HiSparkles, HiArrowLongRight } from 'react-icons/hi2'

const phases = [
  {
    phase: 'Planning',
    traditional: 'Manual estimation & backlog grooming',
    scrytech: 'AI-powered bottleneck prediction and resource estimation',
    icon: '📋',
  },
  {
    phase: 'Analysis',
    traditional: 'Manual user story documentation',
    scrytech: 'Automated requirement extraction from communications',
    icon: '🔍',
  },
  {
    phase: 'Design',
    traditional: 'Human-led architecture decisions',
    scrytech: 'Agentic AI suggests optimal architectures and dependencies',
    icon: '🎨',
  },
  {
    phase: 'Development',
    traditional: 'Manual coding with reviews',
    scrytech: 'Real-time code optimization, snippet generation, auto-documentation',
    icon: '💻',
  },
  {
    phase: 'Testing',
    traditional: 'Manual QA test cases',
    scrytech: 'AI-driven automated test creation and simulations',
    icon: '🧪',
  },
  {
    phase: 'Maintenance',
    traditional: 'Reactive bug fixing',
    scrytech: 'Predictive maintenance using anomaly detection',
    icon: '🔧',
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

export default function TransformationEdge() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="ai-edge" className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1F35 0%, #0E2841 50%, #071628 100%)' }}>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,83,210,0.12) 0%, transparent 60%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeInUp>
            <span className="section-tag mb-5 inline-flex">
              <HiSparkles size={14} />
              The ScrytechAI Edge
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              <span className="text-white">AI at Every Phase of</span>
              <br />
              <span className="gradient-text-brand">Software Development</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-white/55 text-lg">
              We don't just add AI features — we embed intelligence throughout the entire
              development lifecycle for faster, smarter, continuously improving delivery.
            </p>
          </FadeInUp>
        </div>

        {/* Comparison Header */}
        <FadeInUp delay={0.2}>
          <div className="hidden lg:grid grid-cols-[auto_1fr_auto_1fr] gap-0 mb-3 px-6" aria-hidden="true">
            <div className="w-16" />
            <div className="text-center px-6">
              <span className="text-white/50 text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
                <HiX className="text-red-400/60" size={14} />
                Traditional Approach
              </span>
            </div>
            <div className="w-12" />
            <div className="text-center px-6">
              <span className="text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2"
                style={{ color: '#4B7BF5' }}>
                <HiCheckCircle className="text-brand-blue" size={14} />
                ScrytechAI AI-Enabled
              </span>
            </div>
          </div>
        </FadeInUp>

        {/* Phases */}
        <div ref={ref} className="space-y-3">
          {phases.map((row, i) => (
            <motion.div
              key={row.phase}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Mobile layout */}
              <div className="lg:hidden glass-card p-4 sm:p-5 mb-3">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl" aria-hidden="true">{row.icon}</span>
                  <span className="font-bold text-white text-sm sm:text-base">{row.phase}</span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2">
                    <HiX size={14} className="mt-0.5 text-red-400/60 flex-shrink-0" aria-hidden="true" />
                    <p className="text-white/50 text-sm">{row.traditional}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <HiCheckCircle size={14} className="mt-0.5 text-brand-blue flex-shrink-0" aria-hidden="true" />
                    <p className="text-white/85 text-sm">{row.scrytech}</p>
                  </div>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden lg:grid grid-cols-[64px_1fr_48px_1fr] gap-0 items-stretch">
                {/* Phase label */}
                <div className="flex items-center justify-center pr-4" aria-hidden="true">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xl">{row.icon}</span>
                    <span className="text-xs font-semibold text-white/55 text-center leading-none">{row.phase}</span>
                  </div>
                </div>

                {/* Traditional */}
                <div className="flex items-center px-6 py-4 rounded-2xl mr-2"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-start gap-3">
                    <HiX size={16} className="mt-0.5 text-red-400/50 flex-shrink-0" aria-hidden="true" />
                    <p className="text-white/50 text-sm leading-relaxed">{row.traditional}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center" aria-hidden="true">
                  <HiArrowLongRight size={22} className="text-brand-orange/60" />
                </div>

                {/* ScrytechAI */}
                <div className="flex items-center px-6 py-4 rounded-2xl ml-2 transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34,83,210,0.12) 0%, rgba(34,83,210,0.04) 100%)',
                    border: '1px solid rgba(34,83,210,0.2)',
                  }}>
                  <div className="flex items-start gap-3">
                    <HiCheckCircle size={16} className="mt-0.5 text-brand-blue flex-shrink-0" aria-hidden="true" />
                    <p className="text-white/85 text-sm leading-relaxed">{row.scrytech}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeInUp delay={0.3}>
          <div className="mt-16 glass-card-blue p-8 lg:p-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">🚀</span>
              <h3 className="text-xl font-bold text-white">Ready to Transform Your Development Process?</h3>
            </div>
            <p className="text-white/55 mb-8 max-w-xl mx-auto">
              This AI-centric approach delivers faster time-to-market, higher consistency,
              and continuous improvement at every stage of delivery.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group"
            >
              Get Your AI Assessment
              <HiArrowLongRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
