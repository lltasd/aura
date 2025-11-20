import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, Clock } from 'lucide-react'
import { contactInfo } from '../data/services'
import Logo from './Logo'
import { motion, AnimatePresence } from 'framer-motion'

interface HeaderProps {
  onBookClick: () => void
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hideRose, setHideRose] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [isMobileMenuOpen])

  // Observe the Hero section (#home) to hide the rose while it's in view
  useEffect(() => {
    const hero = document.getElementById('home')
    if (!hero) {
      setHideRose(false)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideRose(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const navItems = [
    { label: 'ГЛАВНАЯ', href: '/', isRoute: true },
    { label: 'ВИДЫ ПРОЦЕДУР', href: '/procedures', isRoute: true },
    { label: 'ПРОЦЕДУРЫ ДЛЯ ЛИЦА', href: '/face-procedures', isRoute: true },
    { label: 'ПРОЦЕДУРЫ ДЛЯ ТЕЛА', href: '/body-procedures', isRoute: true },
    { label: 'О СТУДИИ', href: '/about', isRoute: true },
    { label: 'ЦЕНЫ НА УСЛУГИ', href: '/pricing', isRoute: true },
    { label: 'КОНТАКТЫ', href: '/contacts', isRoute: true },
  ]

  const handleNavClick = (href: string, isRoute: boolean, e?: React.MouseEvent) => {
    e?.preventDefault()
    setIsMobileMenuOpen(false)
    
    if (isRoute) {
      navigate(href)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/90 backdrop-blur-2xl backdrop-saturate-150 shadow-2xl border-b border-white/10'
          : 'bg-primary shadow-xl'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative rose (non-interactive, does not affect layout) */}
        <img
          src="/rose.png"
          alt=""
          aria-hidden
          className={`hidden md:block select-none absolute right-[-64px] top-[-34px] transition-opacity duration-300 h-[130%] z-10 ${
            hideRose ? 'opacity-0 pointer-events-none' : 'opacity-10 hover:opacity-45 pointer-events-auto'
          }`}
          loading="lazy" decoding="async"
        />
        {/* Top bar - более компактная и сбалансированная */}
        <div className="hidden lg:flex items-center justify-between py-3 border-b border-white/10">
          <div className="flex items-center gap-2 text-white/90">
            <Clock size={16} className="text-accent" />
            <span className="text-sm">{contactInfo.workingHours}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Phone size={16} className="text-accent" />
              <div className="flex items-center gap-3">
                <a 
                  href={`tel:${contactInfo.phones[0]}`} 
                  className="text-white hover:text-accent transition text-sm font-medium"
                >
                  {contactInfo.phones[0]}
                </a>
                <span className="text-white/30">|</span>
                <a 
                  href={`tel:${contactInfo.phones[1]}`} 
                  className="text-white hover:text-accent transition text-sm font-medium"
                >
                  {contactInfo.phones[1]}
                </a>
              </div>
            </div>
            <button
              onClick={onBookClick}
              className="bg-accent hover:bg-silver-light text-primary px-5 py-1.5 rounded-full transition-all font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105"
            >
              ЗАКАЗАТЬ ЗВОНОК
            </button>
          </div>
        </div>

        {/* Main navigation - более просторная */}
        <nav className={`flex items-center justify-between transition-all duration-500 ease-out ${isScrolled ? 'py-2' : 'py-5'}`}>
          {/* Logo - улучшенный внешний вид */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition group">
            <div className={`relative w-[64px] h-[64px] shrink-0 transition-transform duration-500 ease-out ${isScrolled ? 'scale-[.85]' : 'scale-100'}`}>
              <Logo
                size={64}
                className="absolute inset-0 drop-shadow-lg scale-[1.28] origin-left group-hover:scale-[1.33] transition-transform"
              />
            </div>
            <div>
              <div className="text-white font-display text-2xl font-bold tracking-wide">АУРА</div>
              <div className="text-accent text-xs tracking-widest">СТУДИЯ КРАСОТЫ</div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    onClick={(e) => handleNavClick(item.href, true, e)}
                    className="text-white/90 hover:text-accent transition-all text-sm font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-white/90 hover:text-accent transition-all text-sm font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                  </a>
                )}
              </li>
            ))}
          </ul>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-accent transition-colors p-2 z-50 relative"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

      </div>
    </header>
    <AnimatePresence>
    {isMobileMenuOpen && (
      <>
        {/* Backdrop */}
        <motion.div 
          className="lg:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-md z-[90]"
          onClick={() => setIsMobileMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        {/* Menu Content */}
        <motion.div 
          className="lg:hidden fixed inset-0 z-[100] flex flex-col"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0 overflow-visible">
                <Logo size={80} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div>
                <div className="text-white font-display text-xl font-bold tracking-wide">АУРА</div>
                <div className="text-accent text-[10px] tracking-widest">СТУДИЯ КРАСОТЫ</div>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-accent p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {/* Navigation Links */}
            <ul className="flex flex-col gap-2 mb-8">
              {navItems.map((item) => (
                <li 
                  key={item.label}
                  className="opacity-100"
                >
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      onClick={(e) => {
                        handleNavClick(item.href, true, e)
                        setIsMobileMenuOpen(false)
                      }}
                      className="block text-white hover:text-accent hover:bg-white/10 active:bg-white/20 transition-all duration-300 py-4 px-6 text-lg font-semibold rounded-xl border border-transparent hover:border-accent/30"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => {
                        handleNavClick(item.href, false)
                        setIsMobileMenuOpen(false)
                      }}
                      className="block text-white hover:text-accent hover:bg-white/10 active:bg-white/20 transition-all duration-300 py-4 px-6 text-lg font-semibold rounded-xl border border-transparent hover:border-accent/30"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Contact Section */}
            <div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Контакты
              </div>
              <div className="flex flex-col gap-3 mb-6">
                <a 
                  href={`tel:${contactInfo.phones[0]}`} 
                  className="text-white hover:text-accent transition-colors duration-300 text-base font-medium flex items-center gap-3 group"
                >
                  <div className="bg-accent/20 group-hover:bg-accent/30 p-2 rounded-lg transition-colors">
                    <Phone size={18} className="text-accent" />
                  </div>
                  {contactInfo.phones[0]}
                </a>
                <a 
                  href={`tel:${contactInfo.phones[1]}`} 
                  className="text-white hover:text-accent transition-colors duration-300 text-base font-medium flex items-center gap-3 group"
                >
                  <div className="bg-accent/20 group-hover:bg-accent/30 p-2 rounded-lg transition-colors">
                    <Phone size={18} className="text-accent" />
                  </div>
                  {contactInfo.phones[1]}
                </a>
              </div>
              <button
                onClick={() => {
                  onBookClick()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full bg-accent hover:bg-accent/90 active:bg-accent/80 text-primary px-6 py-4 rounded-xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl text-base"
              >
                ЗАКАЗАТЬ ЗВОНОК
              </button>
            </div>
          </div>
        </motion.div>
      </>
    )}
    </AnimatePresence>
    </>
  )
}