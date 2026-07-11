import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCheckCircle } from 'react-icons/hi'
import { HiSparkles } from 'react-icons/hi2'

const agents = [
  {
    id: 'planner',
    name: 'Planner Agent',
    icon: '📋',
    desc: 'AI-powered bottleneck prediction, resource estimation, and backlog optimization for maximum delivery velocity.',
    color: '#2253D2',
    tasks: ['Sprint planning', 'Capacity forecasting', 'Risk identification', 'Roadmap optimization'],
  },
  {
    id: 'analyst',
    name: 'Analyst Agent',
    icon: '🔍',
    desc: 'Automated requirement extraction from Slack, emails, and docs — transforming raw communication into actionable user stories.',
    color: '#F09C24',
    tasks: ['Req. extraction', 'Gap analysis', 'Stakeholder alignment', 'Acceptance criteria'],
  },
  {
    id: 'architect',
    name: 'Architect Agent',
    icon: '🏗️',
    desc: 'Suggests optimal architectures, identifies dependencies, and ensures scalability decisions align with business goals.',
    color: '#2253D2',
    tasks: ['Architecture design', 'Tech stack selection', 'Dependency mapping', 'Scalability review'],
  },
  {
    id: 'developer',
    name: 'Development Agents',
    icon: '💻',
    desc: 'Real-time code optimization, snippet generation, automated documentation, and continuous code quality enforcement.',
    color: '#F09C24',
    tasks: ['Code generation', 'Auto-documentation', 'Refactoring', 'Code review'],
  },
  {
    id: 'qa',
    name: 'QA Agent',
    icon: '🧪',
    desc: 'AI-driven automated test case creation, regression testing, and simulation-based validation for zero-defect delivery.',
    color: '#2253D2',
    tasks: ['Test generation', 'Regression testing', 'Performance testing', 'Bug prediction'],
  },
  {
    id: 'ops',
    name: 'Ops Agent',
    icon: '⚙️',
    desc: 'Predictive infrastructure management with anomaly detection, auto-scaling, and proactive incident prevention.',
    color: '#F09C24',
    tasks: ['Anomaly detection', 'Auto-scaling', 'Incident prevention', 'Cost optimization'],
  },
]

const principles = [
  { icon: '🎯', title: 'Goal-Directed Execution', desc: 'Every agent operates with clear objectives and measurable outcomes.' },
  { icon: '🤝', title: 'Multi-Agent Collaboration', desc: 'Specialized agents work in concert, coordinated by a Supervisor Orchestrator.' },
  { icon: '👤', title: 'Human-in-the-Loop', desc: 'Critical decisions always include human governance and auditability.' },
  { icon: '📈', title: 'Continuous Learning', desc: 'Agents improve with each project, building institutional AI knowledge.' },
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

export default function AgenticWay() {
  const [activeAgent, setActiveAgent] = useState('planner')
  const active = agents.find(a => a.id === activeAgent)

  // Arrow key support for agent grid
  const agentIds = agents.map(a => a.id)
  const handleAgentKeyDown = (e, id) => {
    const idx = agentIds.indexOf(id)
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      const next = agentIds[(idx + 1) % agentIds.length]
      setActiveAgent(next)
      document.getElementById(`agent-btn-${next}`)?.focus()
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = agentIds[(idx - 1 + agentIds.length) % agentIds.length]
      setActiveAgent(prev)
      document.getElementById(`agent-btn-${prev}`)?.focus()
    }
  }

  return (
    <section id="agentic" className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #071628 0%, #0A1F35 50%, #071628 100%)' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-25" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(240,156,36,0.08) 0%, transparent 65%)', filter: 'blur(50px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeInUp>
            <span className="section-tag mb-5 inline-flex">
              <HiSparkles size={14} />
              Agentic Engineering
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              <span className="text-white">The Agentic</span>{' '}
              <span className="gradient-text-orange">Way of Working</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-white/55 text-lg">
              ScrytechAI operates as a fully AI-orchestrated engineering organization.
              Specialized agents manage each SDLC phase, coordinated by a Supervisor Orchestrator
              for faster, more consistent delivery.
            </p>
          </FadeInUp>
        </div>

        {/* Orchestrator diagram */}
        <FadeInUp delay={0.2}>
          <div className="mb-16 flex justify-center">
            <OrchestratorDiagram agents={agents} activeAgent={activeAgent} onSelect={setActiveAgent} />
          </div>
        </FadeInUp>

        {/* Agent Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAgent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="glass-card p-8 mb-16 max-w-3xl mx-auto"
            style={{
              borderColor: `${active.color}30`,
              boxShadow: `0 12px 40px ${active.color}15`,
            }}
          >
            <div className="flex items-start gap-5">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: `${active.color}20`, border: `1px solid ${active.color}35` }}
                aria-hidden="true"
              >
                {active.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{active.name}</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-5">{active.desc}</p>
                <ul className="flex flex-wrap gap-2" aria-label={`${active.name} responsibilities`}>
                  {active.tasks.map(task => (
                    <li
                      key={task}
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{ background: `${active.color}15`, color: active.color, border: `1px solid ${active.color}25` }}
                    >
                      <HiCheckCircle size={12} aria-hidden="true" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Core Principles */}
        <div className="mb-12 sm:mb-16">
          <FadeInUp>
            <h3 className="text-center text-xl sm:text-2xl font-bold text-white mb-8 sm:mb-10">Core Operating Principles</h3>
          </FadeInUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {principles.map((p, i) => (
              <FadeInUp key={p.title} delay={i * 0.1}>
                <motion.div
                  className="glass-card p-5 sm:p-6 text-center"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4" aria-hidden="true">{p.icon}</div>
                  <h4 className="font-bold text-white text-sm mb-2">{p.title}</h4>
                  <p className="text-white/55 text-xs leading-relaxed">{p.desc}</p>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>

        {/* Business Process Agents highlight */}
        <FadeInUp delay={0.2}>
          <div className="glass-card-orange p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl sm:text-3xl" aria-hidden="true">🤖</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Business Process Agents</h3>
                </div>
                <p className="text-white/65 mb-6 leading-relaxed text-sm sm:text-base">
                  Our autonomous AI agent networks manage complex business workflows with{' '}
                  <strong className="text-brand-orange">up to 75% reduction in manual effort</strong>{' '}
                  while ensuring full auditability, human governance, and GDPR/ISO compliance.
                </p>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-orange text-sm py-3 px-6"
                >
                  Automate Your Workflows
                </button>
              </div>
              <ul className="grid grid-cols-2 gap-2 sm:gap-3" aria-label="Business process agent capabilities">
                {[
                  'End-to-end workflow execution',
                  'Hierarchical multi-agent coordination',
                  'ERP & CRM integration',
                  'Document processing & extraction',
                  'Human-in-the-loop governance',
                  'GDPR & ISO compliance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 p-2.5 sm:p-3 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <HiCheckCircle size={14} className="mt-0.5 text-brand-orange flex-shrink-0" aria-hidden="true" />
                    <span className="text-white/70 text-xs leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

function OrchestratorDiagram({ agents, activeAgent, onSelect }) {
  const activeColor = agents.find(a => a.id === activeAgent)?.color ?? '#2253D2'

  return (
    <div className="relative w-full max-w-2xl">

      {/* Supervisor node */}
      <div className="flex justify-center mb-0">
        <motion.div
          className="glass-card px-5 sm:px-6 py-3 sm:py-4 flex items-center gap-3 relative overflow-visible"
          style={{ border: '1px solid rgba(34,83,210,0.4)', boxShadow: '0 0 30px rgba(34,83,210,0.25)' }}
          animate={{ boxShadow: [`0 0 20px rgba(34,83,210,0.2)`, `0 0 40px rgba(34,83,210,0.4)`, `0 0 20px rgba(34,83,210,0.2)`] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xl sm:text-2xl" aria-hidden="true">🧠</span>
          <div>
            <div className="text-xs text-brand-blue font-semibold tracking-wider uppercase">Supervisor</div>
            <div className="text-white font-bold text-sm sm:text-base">Orchestrator</div>
          </div>
        </motion.div>
      </div>

      {/* Animated connector — packet travels downward */}
      <div className="flex justify-center relative h-10 sm:h-12" aria-hidden="true">
        {/* Static line */}
        <div
          className="w-px h-full"
          style={{ background: `linear-gradient(to bottom, ${activeColor}80, ${activeColor}20)` }}
        />
        {/* Traveling data packet */}
        <motion.div
          key={activeAgent}
          className="absolute top-0 w-2.5 h-2.5 rounded-full"
          style={{
            left: '50%',
            translateX: '-50%',
            background: activeColor,
            boxShadow: `0 0 10px ${activeColor}, 0 0 20px ${activeColor}66`,
          }}
          animate={{ y: [0, 36, 0], opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Agent grid */}
      <div
        className="grid grid-cols-3 gap-2 sm:gap-3"
        role="group"
        aria-label="Select an AI agent to learn more"
      >
        {agents.map((agent) => {
          const isActive = activeAgent === agent.id
          return (
            <motion.button
              key={agent.id}
              id={`agent-btn-${agent.id}`}
              onClick={() => onSelect(agent.id)}
              aria-pressed={isActive}
              aria-label={`${agent.name}${isActive ? ' (selected)' : ''}`}
              className="glass-card p-3 sm:p-4 flex flex-col items-center text-center transition-colors duration-300 relative overflow-hidden"
              style={isActive ? {
                borderColor: `${agent.color}55`,
                boxShadow: `0 4px 24px ${agent.color}30`,
                background: `${agent.color}12`,
              } : {}}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Active shimmer sweep */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(105deg, transparent 30%, ${agent.color}18 50%, transparent 70%)`,
                  }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', repeatDelay: 0.6 }}
                  aria-hidden="true"
                />
              )}
              <span className="text-xl sm:text-2xl mb-1 sm:mb-2 relative z-10" aria-hidden="true">{agent.icon}</span>
              <span className="text-xs font-semibold text-white/75 leading-tight relative z-10">{agent.name}</span>
              {isActive && (
                <motion.div
                  className="w-1.5 h-1.5 rounded-full mt-2 relative z-10"
                  style={{ background: agent.color, boxShadow: `0 0 6px ${agent.color}` }}
                  layoutId="activeAgentDot"
                  aria-hidden="true"
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
