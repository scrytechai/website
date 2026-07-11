import { HiMail, HiLocationMarker, HiGlobe } from 'react-icons/hi'
import {
  FaLinkedin, FaTwitter, FaGithub, FaInstagram,
} from 'react-icons/fa'

const footerLinks = {
  Services: [
    { label: 'Mobile Development', href: '#services' },
    { label: 'Web Platforms', href: '#services' },
    { label: 'Backend Systems', href: '#services' },
    { label: 'AI & Agentic Solutions', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'AI Transformation Edge', href: '#ai-edge' },
    { label: 'Agentic Way of Working', href: '#agentic' },
    { label: 'Why ScrytechAI', href: '#why-us' },
  ],
  'Engagement': [
    { label: 'Project-Based', href: '#why-us' },
    { label: 'Dedicated Team', href: '#why-us' },
    { label: 'AI Consulting', href: '#why-us' },
    { label: 'Contact Us', href: '#contact' },
  ],
}

const socials = [
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      el.setAttribute('tabindex', '-1')
      el.focus({ preventScroll: true })
    }
  }

  return (
    <footer className="relative overflow-hidden"
      style={{ background: '#050e1a', borderTop: '1px solid rgba(34,83,210,0.15)' }}>
      {/* Gradient top — decorative */}
      <div className="absolute top-0 left-0 right-0 h-px" aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(34,83,210,0.5), rgba(240,156,36,0.5), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #0E2841, #1A3A5C)', border: '1px solid rgba(34,83,210,0.3)' }}>
                <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" aria-hidden="true" focusable="false">
                  <defs>
                    <linearGradient id="footerLogoBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4B7BF5"/>
                      <stop offset="100%" stopColor="#2253D2"/>
                    </linearGradient>
                    <linearGradient id="footerLogoOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFBE5C"/>
                      <stop offset="100%" stopColor="#F09C24"/>
                    </linearGradient>
                  </defs>
                  <path d="M20 8 C14 8 10 12 10 16 C8 16.5 7 18 7 20 C7 22 8 23.5 10 24 C10 28 14 32 20 32 L20 8Z" fill="url(#footerLogoBlue)" opacity="0.9"/>
                  <path d="M20 8 C26 8 30 12 30 16 C32 16.5 33 18 33 20 C33 22 32 23.5 30 24 C30 28 26 32 20 32 L20 8Z" fill="url(#footerLogoOrange)" opacity="0.9"/>
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
              <div>
                <div className="text-xl font-bold">
                  <span style={{ background: 'linear-gradient(135deg, #4B7BF5, #2253D2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Scrytech</span>
                  <span style={{ background: 'linear-gradient(135deg, #FFBE5C, #F09C24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
                </div>
                <div className="text-[10px] text-white/30 tracking-widest uppercase">AI Engineering Partner</div>
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-5 sm:mb-6 max-w-sm">
              Empowering businesses with intelligent, AI-driven digital solutions.
              Intelligent. Scalable. Future-Ready.
            </p>

            {/* Contact snippets */}
            <address className="not-italic space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              {[
                { icon: HiMail, text: 'hello@scrytechai.com', href: 'mailto:hello@scrytechai.com' },
                { icon: HiGlobe, text: 'scrytechai.com', href: 'https://scrytechai.com' },
                { icon: HiLocationMarker, text: 'Pune, Maharashtra, India', href: null },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2.5">
                  <item.icon size={14} className="text-brand-blue/60 flex-shrink-0" aria-hidden="true" />
                  {item.href
                    ? <a href={item.href} className="text-white/55 hover:text-white/75 transition-colors text-sm">{item.text}</a>
                    : <span className="text-white/55 text-sm">{item.text}</span>
                  }
                </div>
              ))}
            </address>

            {/* Socials */}
            <div className="flex items-center gap-2.5 sm:gap-3" role="list" aria-label="Social media links">
              {socials.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`ScrytechAI on ${social.label}`}
                  role="listitem"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(34,83,210,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                >
                  <social.icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer nav links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} aria-label={`${category} links`}>
              <h3 className="text-white font-semibold text-sm mb-4 sm:mb-5 tracking-wide">{category}</h3>
              <ul className="space-y-2.5 sm:space-y-3 list-none">
                {links.map(link => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleScroll(link.href)}
                      className="text-white/55 hover:text-white/80 text-sm transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="brand-divider mb-6 sm:mb-8" aria-hidden="true" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 ScrytechAI. All rights reserved. Founded in Pune, India.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 list-none">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                <li key={item}>
                  <button className="text-white/35 hover:text-white/60 text-xs transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
