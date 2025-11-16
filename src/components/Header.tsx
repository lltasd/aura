import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, Clock } from 'lucide-react'
import { contactInfo } from '../data/services'
import Logo from './Logo'

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
    { label: 'ЦЕНЫ НА УСЛУГИ', href: '/', isRoute: true },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary shadow-xl'
          : 'bg-primary/95 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 relative">
        {/* Decorative rose (non-interactive, does not affect layout) */}
        <img
          src="/rose.png"
          alt=""
          aria-hidden
          className={`hidden md:block select-none absolute right-[-64px] top-[-34px] transition-opacity duration-300 h-[130%] z-10 ${
            hideRose ? 'opacity-0 pointer-events-none' : 'opacity-10 hover:opacity-45 pointer-events-auto'
          }`}
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
              className="bg-gold hover:bg-gold-light text-primary px-5 py-1.5 rounded-full transition-all font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105"
            >
              ЗАКАЗАТЬ ЗВОНОК
            </button>
          </div>
        </div>

        {/* Main navigation - более просторная */}
        <nav className="flex items-center justify-between py-5">
          {/* Logo - улучшенный внешний вид */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition group">
            <Logo size={50} className="drop-shadow-lg group-hover:scale-105 transition-transform" />
            <div>
              <div className="text-white font-display text-2xl font-bold tracking-wide">АУРА</div>
              <div className="text-accent text-xs tracking-widest">СТУДИЯ КРАСОТЫ</div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
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
            className="lg:hidden text-white hover:text-accent transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation - улучшенный дизайн */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-slide-down border-t border-white/10">
            <ul className="flex flex-col gap-1 mt-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      onClick={(e) => handleNavClick(item.href, true, e)}
                      className="block text-white hover:text-accent hover:bg-white/5 transition py-3 px-4 text-sm rounded"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.href, false)}
                      className="block text-white hover:text-accent hover:bg-white/5 transition py-3 px-4 text-sm rounded"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Mobile contact info */}
            <div className="mt-6 space-y-4 px-4">
              <div className="flex flex-col gap-2">
                <a 
                  href={`tel:${contactInfo.phones[0]}`} 
                  className="text-white hover:text-accent transition text-sm flex items-center gap-2"
                >
                  <Phone size={16} className="text-accent" />
                  {contactInfo.phones[0]}
                </a>
                <a 
                  href={`tel:${contactInfo.phones[1]}`} 
                  className="text-white hover:text-accent transition text-sm flex items-center gap-2"
                >
                  <Phone size={16} className="text-accent" />
                  {contactInfo.phones[1]}
                </a>
              </div>
              <button
                onClick={() => {
                  onBookClick()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full bg-gold hover:bg-gold-light text-primary px-6 py-3 rounded-full transition-all font-semibold shadow-lg"
              >
                ЗАКАЗАТЬ ЗВОНОК
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}