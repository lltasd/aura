import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, Clock, Search, MessageCircle } from 'lucide-react'
import { contactInfo } from '../data/services'
import Logo from './Logo'
import { motion, AnimatePresence } from 'framer-motion'
import NewYearPromoModal from './NewYearPromoModal'

interface HeaderProps {
  onBookClick: () => void
  variant?: 'default' | 'dark'
}

export default function Header({ onBookClick, variant = 'default' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showMobilePhones, setShowMobilePhones] = useState(false)
  const [showPromo, setShowPromo] = useState(false)
  const navigate = useNavigate()

  // Helpers: sanitize phone for tel: links and build telegram URL if handle is available
  const tel0 = (contactInfo.phones?.[0] || '').replace(/\s|\(|\)|-/g, '')
  const tel1 = (contactInfo.phones?.[1] || '').replace(/\s|\(|\)|-/g, '')
  const tgRaw = (contactInfo as any).telegram || (contactInfo as any).telegramHandle || ''
  const telegramUrl = tgRaw
    ? (String(tgRaw).startsWith('http') ? String(tgRaw) : `https://t.me/${String(tgRaw).replace(/^@/, '')}`)
    : 'https://t.me/'

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


  const navItems: { label: string; href: string; isRoute: boolean; mobileOnly?: boolean }[] = [
    { label: 'ГЛАВНАЯ', href: '/', isRoute: true },
    { label: 'ВИДЫ ПРОЦЕДУР', href: '/procedures', isRoute: true },
    { label: 'ПРОЦЕДУРЫ ДЛЯ ЛИЦА', href: '/face-procedures', isRoute: true },
    { label: 'ПРОЦЕДУРЫ ДЛЯ ТЕЛА', href: '/body-procedures', isRoute: true },
    { label: 'АППАРАТНАЯ КОСМЕТОЛОГИЮ', href: '/hardware-cosmetology', isRoute: true },
    { label: 'НАШИ СПЕЦИАЛИСТЫ', href: '/specialists', isRoute: true },
    { label: 'СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ', href: '/specials', isRoute: true, mobileOnly: true },
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
        variant === 'dark'
          ? (isScrolled
              ? 'bg-slate-900/90 backdrop-blur-2xl shadow-2xl border-b border-white/10'
              : 'bg-slate-900/80 backdrop-blur-xl shadow-xl')
          : (isScrolled
              ? 'bg-primary/90 backdrop-blur-2xl backdrop-saturate-150 shadow-2xl border-b border-white/10'
              : 'bg-primary shadow-xl')
      }`}
    >
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative rose (non-interactive, does not affect layout) */}
        <img src="/rose.png" alt="" aria-hidden className="hidden" />
        {/* Top bar - более компактная и сбалансированная */}
        <div className="hidden">
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

        {/* Main navigation - desktop layout like reference */}
        <nav className={`transition-all duration-500 ease-out ${isScrolled ? 'py-2' : 'py-5'}`}>
          <div className="w-full grid grid-cols-3 items-center">
            {/* Left: burger + short links */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`text-white hover:text-accent transition-colors p-2 z-50 relative`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
              <ul className={`hidden lg:flex items-center gap-6 text-white/90`}>
                <li>
                  <Link to="/procedures" onClick={(e) => handleNavClick('/procedures', true, e)} className={`transition-all text-sm font-medium whitespace-nowrap hover:text-accent`}>Услуги</Link>
                </li>
                <li>
                  <Link to="/specialists" onClick={(e) => handleNavClick('/specialists', true, e)} className={`transition-all text-sm font-medium whitespace-nowrap hover:text-accent`}>Команда</Link>
                </li>
                <li>
                  <Link to="/specials" onClick={(e) => handleNavClick('/specials', true, e)} className={`transition-all text-sm font-medium whitespace-nowrap hover:text-accent`}>Специальные предложения</Link>
                </li>
              </ul>
            </div>

            {/* Center: logo */}
            <Link to="/" className="flex items-center justify-center gap-3 hover:opacity-90 transition group">
              <div className={`relative w-[64px] h-[64px] shrink-0 transition-transform duration-500 ease-out ${isScrolled ? 'scale-[.85]' : 'scale-100'}`}>
                <Logo
                  size={64}
                  className="absolute inset-0 drop-shadow-lg scale-[1.28] group-hover:scale-[1.33] transition-transform"
                />
              </div>
              <div className="hidden sm:block text-center">
                <div className={`text-white font-display text-2xl font-bold tracking-wide`}>АУРА</div>
                <div className={`text-accent text-xs tracking-widest`}>СТУДИЯ КРАСОТЫ</div>
              </div>
            </Link>

            {/* Right: phones (desktop) + icons; mobile shows icon buttons like reference */}
            <div className="hidden lg:flex items-center justify-end gap-8">
              <div className="text-right">
                <div className={`text-white/60 text-xs`}>Фёдора зайцева</div>
                <a href={`tel:${contactInfo.phones[0]}`} className={`text-white/90 hover:text-accent font-semibold whitespace-nowrap`}>{contactInfo.phones[0]}</a>
              </div>
              <div className="text-right">
                <div className={`text-white/60 text-xs`}>Челюскинцев</div>
                <a href={`tel:${contactInfo.phones[1]}`} className={`text-white/90 hover:text-accent font-semibold whitespace-nowrap`}>{contactInfo.phones[1]}</a>
              </div>
              <div className={`flex items-center gap-4 text-white/90`}>
                <button onClick={() => setShowPromo(true)} aria-label="Показать акцию" className="hover:text-accent">
                  <Clock size={20} className="opacity-90" />
                </button>
                <a href={telegramUrl} target="_blank" rel="noreferrer" className={`hover:text-accent`} aria-label="Telegram">
                  <MessageCircle size={20} />
                </a>
                <button className={`hover:text-accent`} aria-label="Search">
                  <Search size={20} />
                </button>
              </div>
            </div>
            {/* Mobile right icons */}
            <div className="flex lg:hidden items-center justify-end gap-2">
              <button className="p-2 text-white hover:text-accent active:scale-95 transition" aria-label="Promo" onClick={() => setShowPromo(true)}>
                <Clock size={18} />
              </button>
              <a href={telegramUrl} target="_blank" rel="noreferrer" className="p-2 text-white hover:text-accent active:scale-95 transition" aria-label="Telegram">
                <MessageCircle size={18} />
              </a>
              <button
                className="p-2 text-white hover:text-accent active:scale-95 transition"
                aria-label="Phones"
                onClick={() => setShowMobilePhones((v) => !v)}
              >
                <Phone size={18} />
              </button>
              <button className="p-2 text-white hover:text-accent active:scale-95 transition" aria-label="Search">
                <Search size={18} />
              </button>
            </div>
            {/* Mobile phones popup */}
            <AnimatePresence>
              {showMobilePhones && (
                <>
                  <motion.div
                    className="lg:hidden fixed inset-0 z-[90]"
                    onClick={() => setShowMobilePhones(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                  <motion.div
                    className="lg:hidden fixed top-24 right-4 z-[95] w-[88%] max-w-xs"
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -8, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl">
                      <a
                        href={`tel:${tel0}`}
                        className="block px-5 py-4 active:bg-white/10 hover:bg-white/10 transition-colors"
                        onClick={() => setShowMobilePhones(false)}
                      >
                        <div className="text-white font-black uppercase tracking-wide text-sm drop-shadow-md">ФЁДОРА ЗАЙЦЕВА</div>
                        <div className="text-slate-50 text-[15px] leading-snug mt-1">{contactInfo.phones[0]}</div>
                      </a>
                      <div className="h-px bg-white/15" />
                      <a
                        href={`tel:${tel1}`}
                        className="block px-5 py-4 active:bg-white/10 hover:bg-white/10 transition-colors"
                        onClick={() => setShowMobilePhones(false)}
                      >
                        <div className="text-white font-black uppercase tracking-wide text-sm drop-shadow-md">ЧЕЛЮСКИНЦЕВ</div>
                        <div className="text-slate-50 text-[15px] leading-snug mt-1">{contactInfo.phones[1]}</div>
                      </a>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </nav>

      </div>
    </header>
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-slate-900/95 lg:bg-slate-900/70 backdrop-blur-md lg:backdrop-blur-sm z-[90]"
            onClick={() => setIsMobileMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          {/* Menu Content */}
          <motion.div 
            className="fixed top-0 left-0 h-full w-full lg:w-[420px] z-[100] flex flex-col bg-slate-900 shadow-2xl"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
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
            <div className="drawer-scroll flex-1 overflow-y-auto px-6 py-6">
              {/* Navigation Links */}
              <ul className="flex flex-col gap-2 mb-8">
                {navItems.map((item) => (
                  <li key={item.label} className="opacity-100">
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
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                  Контакты
                </div>
                <div className="flex flex-col gap-3 mb-6">
                  <a href={`tel:${contactInfo.phones[0]}`} className="text-white hover:text-accent transition-colors duration-300 text-base font-medium flex items-center gap-3 group">
                    <div className="bg-accent/20 group-hover:bg-accent/30 p-2 rounded-lg transition-colors">
                      <Phone size={18} className="text-accent" />
                    </div>
                    {contactInfo.phones[0]}
                  </a>
                  <a href={`tel:${contactInfo.phones[1]}`} className="text-white hover:text-accent transition-colors duration-300 text-base font-medium flex items-center gap-3 group">
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
    <NewYearPromoModal isOpen={showPromo} onClose={() => setShowPromo(false)} />
    <style>{`
      .drawer-scroll { scrollbar-width: thin; scrollbar-color: rgba(148,163,184,0.6) transparent; }
      .drawer-scroll::-webkit-scrollbar { width: 6px; }
      .drawer-scroll::-webkit-scrollbar-track { background: transparent; }
      .drawer-scroll::-webkit-scrollbar-thumb { background-color: rgba(148,163,184,0.6); border-radius: 9999px; }
    `}</style>
    </>
  )
}