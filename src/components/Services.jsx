import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiDeviceMobile, HiGlobe, HiServer, HiChip,
  HiCheckCircle, HiArrowRight,
} from 'react-icons/hi'
import { HiSparkles } from 'react-icons/hi2'

const services = [
  {
    id: 'mobile',
    icon: HiDeviceMobile,
    title: 'Mobile Application Development',
    tagline: 'Native & Cross-Platform Excellence',
    description: 'Building high-performance mobile experiences that leverage AI for personalization, intelligent assistance, and predictive features.',
    color: '#2253D2',
    gradient: 'from-blue-500/20 to-blue-700/5',
    features: [
      'Native iOS (Swift) & Android (Kotlin)',
      'Cross-platform: React Native & Flutter',
      'AI-integrated personalization & intelligent UX',
      'Offline-first architecture for reliability',
      'Enterprise-ready, performance-optimized',
      'Agentic iOS with Core ML & Apple Neural Engine',
    ],
    badge: 'iOS · Android · Flutter',
  },
  {
    id: 'web',
    icon: HiGlobe,
    title: 'Web Platform Development',
    tagline: 'Modern Frontends, Exceptional UX',
    description: 'Crafting blazing-fast, SEO-ready web platforms with real-time capabilities and enterprise-grade content management.',
    color: '#F09C24',
    gradient: 'from-orange-500/20 to-orange-700/5',
    features: [
      'React, Next.js, Vue, TypeScript',
      'Progressive Web Apps (PWA)',
      'Real-time dashboards & data visualization',
      'SEO-optimized, performance-first delivery',
      'Enterprise CMS & SaaS platform design',
      'Accessibility & responsive design',
    ],
    badge: 'React · Next.js · PWA',
  },
  {
    id: 'backend',
    icon: HiServer,
    title: 'Backend Systems & Infrastructure',
    tagline: 'Scalable, Cloud-Native Architecture',
    description: 'Designing resilient microservices and cloud-native infrastructure that scales effortlessly from MVP to enterprise.',
    color: '#2253D2',
    gradient: 'from-blue-500/20 to-blue-700/5',
    features: [
      'Microservices: Node.js, Python, Go, Java',
      'RESTful & GraphQL API development',
      'Cloud-native on AWS, GCP & Azure (IaC)',
      'Event-driven: Kafka & RabbitMQ',
      'SQL & NoSQL database design',
      'Zero-downtime deployments & CI/CD',
    ],
    badge: 'AWS · GCP · Azure',
  },
  {
    id: 'ai',
    icon: HiChip,
    title: 'AI & Agentic Solutions',
    tagline: 'Autonomous Intelligence at Scale',
    description: 'Building the next generation of autonomous AI agents and LLM-powered automation that transforms how enterprises operate.',
    color: '#F09C24',
    gradient: 'from-orange-500/20 to-orange-700/5',
    features: [
      'LLM-powered workflow automation',
      'Autonomous multi-agent networks',
      'Custom AI model fine-tuning & RAG',
      'Explainable AI & decision support',
      'Business process agents (75% effort reduction)',
      'AI readiness assessments & roadmaps',
    ],
    badge: 'LLM · RAG · Agents',
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

export default function Services() {
  const [activeService, setActiveService] = useState('mobile')
  const activeIndex = services.findIndex(s => s.id === activeService)
  const active = services[activeIndex]

  // Arrow key navigation for tab list
  const handleTabKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      const next = (activeIndex + 1) % services.length
      setActiveService(services[next].id)
      document.getElementById(`tab-${services[next].id}`)?.focus()
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = (activeIndex - 1 + services.length) % services.length
      setActiveService(services[prev].id)
      document.getElementById(`tab-${services[prev].id}`)?.focus()
    } else if (e.key === 'Home') {
      e.preventDefault()
      setActiveService(services[0].id)
      document.getElementById(`tab-${services[0].id}`)?.focus()
    } else if (e.key === 'End') {
      e.preventDefault()
      setActiveService(services[services.length - 1].id)
      document.getElementById(`tab-${services[services.length - 1].id}`)?.focus()
    }
  }

  return (
    <section id="services" className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #071628 0%, #0A1F35 100%)' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-circuit" />

      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(240,156,36,0.1) 0%, transparent 65%)', filter: 'blur(50px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInUp>
            <span className="section-tag mb-5 inline-flex">
              <HiSparkles size={14} />
              Service Pillars
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              <span className="text-white">Four AI-Enhanced</span>
              <br />
              <span className="gradient-text-orange">Service Pillars</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-white/55 text-lg">
              Every solution we build has AI embedded at its core — not bolted on, but architecturally integrated.
            </p>
          </FadeInUp>
        </div>

        {/* Service Tabs */}
        <FadeInUp delay={0.2}>
          <div
            role="tablist"
            aria-label="Service pillars"
            className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12"
          >
            {services.map((service) => {
              const isSelected = activeService === service.id
              return (
                <button
                  key={service.id}
                  id={`tab-${service.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${service.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onKeyDown={handleTabKeyDown}
                  onClick={() => setActiveService(service.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                    isSelected
                      ? 'text-white shadow-glass'
                      : 'text-white/55 hover:text-white/80 glass-card hover:border-white/15'
                  }`}
                  style={isSelected ? {
                    background: `linear-gradient(135deg, ${service.color}30 0%, ${service.color}10 100%)`,
                    border: `1px solid ${service.color}50`,
                    boxShadow: `0 4px 24px ${service.color}25`,
                  } : {}}
                >
                  <service.icon size={16} style={{ color: isSelected ? service.color : 'currentColor' }} aria-hidden="true" />
                  <span className="whitespace-nowrap">{service.title.split(' ').slice(0, 2).join(' ')}</span>
                </button>
              )
            })}
          </div>
        </FadeInUp>

        {/* Active Service Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            id={`panel-${activeService}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeService}`}
            tabIndex={0}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 focus-visible:outline-none"
            style={{
              borderColor: `${active.color}30`,
              boxShadow: `0 12px 48px ${active.color}15, inset 0 1px 0 rgba(255,255,255,0.08)`,
            }}
          >
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${active.color}30 0%, ${active.color}0d 100%)`,
                      border: `1px solid ${active.color}40`,
                    }}
                  >
                    <active.icon size={28} style={{ color: active.color }} aria-hidden="true" />
                  </div>
                  <div>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block"
                      style={{ background: `${active.color}20`, color: active.color }}
                    >
                      {active.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{active.tagline}</h3>
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{active.title}</h2>
                <p className="text-white/65 text-base leading-relaxed mb-7 sm:mb-8">{active.description}</p>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary text-sm py-3 px-6 group"
                  style={{
                    background: `linear-gradient(135deg, ${active.color} 0%, ${active.color}cc 100%)`,
                    boxShadow: `0 4px 20px ${active.color}40`,
                  }}
                >
                  Discuss This Service
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>

              {/* Right - features */}
              <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                {active.features.map((feat, i) => (
                  <motion.div
                    key={feat}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <HiCheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: active.color }} aria-hidden="true" />
                    <span className="text-white/75 text-sm leading-snug">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Service Cards Grid (overview) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <FadeInUp key={service.id} delay={i * 0.1}>
              <motion.div
                className="service-card cursor-pointer"
                onClick={() => setActiveService(service.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveService(service.id)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View ${service.title} details`}
                aria-pressed={activeService === service.id}
                whileHover={{ y: -6 }}
                style={activeService === service.id ? {
                  borderColor: `${service.color}40`,
                  boxShadow: `0 12px 40px ${service.color}20`,
                } : {}}
              >
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-4 sm:mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}25 0%, ${service.color}0a 100%)`,
                    border: `1px solid ${service.color}35`,
                  }}
                >
                  <service.icon size={20} style={{ color: service.color }} aria-hidden="true" />
                </div>
                <h4 className="font-bold text-white mb-2 text-xs sm:text-sm leading-snug">{service.title}</h4>
                <p className="text-white/55 text-xs leading-relaxed mb-3 sm:mb-4">{service.tagline}</p>
                <div
                  className="flex items-center gap-1 text-xs font-medium"
                  style={{ color: service.color }}
                  aria-hidden="true"
                >
                  <span>Learn more</span>
                  <HiArrowRight size={12} />
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
