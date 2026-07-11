import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiMail, HiLocationMarker, HiGlobe, HiCheckCircle } from 'react-icons/hi'
import { HiSparkles, HiArrowLongRight } from 'react-icons/hi2'

const topics = [
  'Mobile App Development',
  'Web Platform Development',
  'Backend Systems',
  'AI & Agentic Solutions',
  'AI Assessment / Consulting',
  'Other',
]

const inputBase = {
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  color: '#ffffff',
}

function FadeInUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Placeholder for backend integration — replace with fetch('/api/contact', ...)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #071628 0%, #0A1F35 50%, #071628 100%)' }}>
      <div className="absolute inset-0 bg-circuit opacity-60" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,83,210,0.1) 0%, transparent 65%)', filter: 'blur(50px)' }}
        aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(240,156,36,0.08) 0%, transparent 65%)', filter: 'blur(50px)' }}
        aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <FadeInUp>
            <span className="section-tag mb-5 inline-flex" role="text">
              <HiSparkles size={14} aria-hidden="true" />
              Let’s Build Together
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              <span className="text-white">Start Your</span>{' '}
              <span className="gradient-text-brand">AI Journey</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-white/65 text-base sm:text-lg">
              Tell us about your technology challenge. We’ll respond within 24 hours
              with a tailored approach to make it <em>Intelligent, Fast, and Smart</em>.
            </p>
          </FadeInUp>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Contact Info — 2 cols */}
          <FadeInUp delay={0.1} className="lg:col-span-2">
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: HiMail, label: 'Email Us', value: 'scrytechai@gmail.com', sub: 'We respond within 24 hours', color: '#2253D2', href: 'mailto:hello@scrytechai.com' },
                { icon: HiGlobe, label: 'Website', value: 'scrytechai.com', sub: 'Learn more about our work', color: '#F09C24', href: 'https://scrytechai.com' },
                { icon: HiLocationMarker, label: 'Headquarters', value: 'Pune, Maharashtra', sub: 'India', color: '#2253D2', href: null },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="glass-card p-4 sm:p-5 flex items-start gap-4"
                  whileHover={{ x: 4 }}
                >
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}20`, border: `1px solid ${item.color}30` }}
                  >
                    <item.icon size={20} style={{ color: item.color }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-white/55 font-medium mb-0.5">{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="text-white font-semibold text-sm hover:text-brand-blue transition-colors">{item.value}</a>
                      : <p className="text-white font-semibold text-sm">{item.value}</p>
                    }
                    <p className="text-white/50 text-xs">{item.sub}</p>
                  </div>
                </motion.div>
              ))}

              {/* What happens next */}
              <div className="glass-card p-5 sm:p-6">
                <h3 className="font-bold text-white text-sm mb-4">What happens next?</h3>
                <ol className="space-y-3" aria-label="Process steps">
                  {[
                    { step: '01', text: 'We review your requirements within 24 hours' },
                    { step: '02', text: 'Schedule a discovery call to understand your vision' },
                    { step: '03', text: 'Receive a tailored solution proposal & roadmap' },
                  ].map(item => (
                    <li key={item.step} className="flex items-start gap-3">
                      <span className="text-xs font-bold px-2 py-1 rounded-lg flex-shrink-0"
                        style={{ background: 'rgba(34,83,210,0.2)', color: '#4B7BF5' }}
                        aria-hidden="true">
                        {item.step}
                      </span>
                      <span className="text-white/60 text-xs leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </FadeInUp>

          {/* Contact Form — 3 cols */}
          <FadeInUp delay={0.2} className="lg:col-span-3">
            <div>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    role="status"
                    aria-live="polite"
                    aria-label="Message sent successfully"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card-blue p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[440px] sm:min-h-[480px]"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6"
                      style={{ background: 'rgba(34,83,210,0.2)', border: '2px solid rgba(34,83,210,0.4)' }}
                      aria-hidden="true"
                    >
                      <HiCheckCircle size={36} className="text-brand-blue" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-white/65 max-w-sm text-sm sm:text-base">
                      Thank you for reaching out. Our team will review your request and
                      get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 btn-secondary text-sm py-2.5 px-6"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="glass-card p-6 sm:p-8 space-y-5"
                    noValidate
                    aria-label="Contact form"
                  >
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-white/65 text-xs font-medium mb-2">
                          Full Name <span aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          aria-required="true"
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/25 transition-all duration-200"
                          style={inputBase}
                          onFocus={e => e.target.style.borderColor = 'rgba(34,83,210,0.6)'}
                          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-white/65 text-xs font-medium mb-2">
                          Email Address <span aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          aria-required="true"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/25 transition-all duration-200"
                          style={inputBase}
                          onFocus={e => e.target.style.borderColor = 'rgba(34,83,210,0.6)'}
                          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-white/65 text-xs font-medium mb-2">
                        Company / Organization
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/25 transition-all duration-200"
                        style={inputBase}
                        onFocus={e => e.target.style.borderColor = 'rgba(34,83,210,0.6)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-topic" className="block text-white/65 text-xs font-medium mb-2">
                        I’m interested in <span aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <select
                        id="contact-topic"
                        name="topic"
                        required
                        aria-required="true"
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 cursor-pointer appearance-none"
                        style={{ ...inputBase, color: formData.topic ? '#ffffff' : 'rgba(255,255,255,0.35)' }}
                        onFocus={e => e.target.style.borderColor = 'rgba(34,83,210,0.6)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                      >
                        <option value="" style={{ background: '#0E2841', color: '#ffffff' }}>Select a service area…</option>
                        {topics.map(t => (
                          <option key={t} value={t} style={{ background: '#0E2841', color: '#ffffff' }}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-white/65 text-xs font-medium mb-2">
                        Tell us about your project <span aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        aria-required="true"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your project, goals, and any specific challenges you’re facing…"
                        className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/25 resize-none transition-all duration-200"
                        style={inputBase}
                        onFocus={e => e.target.style.borderColor = 'rgba(34,83,210,0.6)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="btn-primary w-full justify-center text-base py-4 group"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      disabled={loading}
                      aria-disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            aria-hidden="true"
                          />
                          <span aria-live="polite">Sending…</span>
                        </span>
                      ) : (
                        <>
                          Send Message
                          <HiArrowLongRight className="group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-white/40 text-xs">
                      By submitting, you agree to our privacy policy. No spam, ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}

