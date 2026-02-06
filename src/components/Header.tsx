import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, Clock, Search, MessageCircle, ChevronDown } from 'lucide-react'
import { contactInfo } from '../data/services'
import Logo from './Logo'
import { motion, AnimatePresence } from 'framer-motion'
import NewYearPromoModal from './NewYearPromoModal'
import SearchModal from './SearchModal'

interface HeaderProps {
  onBookClick: () => void
  variant?: 'default' | 'dark'
}

export default function Header({ onBookClick, variant = 'default' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showMobilePhones, setShowMobilePhones] = useState(false)
  const [showPromo, setShowPromo] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [isProceduresSubmenuOpen, setIsProceduresSubmenuOpen] = useState(false)
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
	          ? 'bg-gradient-to-r from-slate-800 via-primary-dark to-slate-800 lg:from-slate-950 lg:via-primary-dark lg:to-slate-900 backdrop-blur-2xl shadow-2xl border-b border-white/10'
	          : 'bg-gradient-to-r from-slate-800 via-primary-dark to-slate-800 lg:from-slate-950 lg:via-primary-dark lg:to-slate-900 shadow-xl')
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
            <Link to="/" className="flex items-center justify-center gap-3 hover:opacity-90 transition group -translate-x-6 sm:translate-x-0">
              <div className={`relative w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] shrink-0 transition-transform duration-500 ease-out sm:translate-y-2 ${isScrolled ? 'scale-[.85]' : 'scale-100'}`}>
                <Logo
                  size={40}
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
                <button onClick={() => setShowSearch(true)} className={`hover:text-accent`} aria-label="Search">
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
              <button onClick={() => setShowSearch(true)} className="p-2 text-white hover:text-accent active:scale-95 transition" aria-label="Search">
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
                <div className="relative w-9 h-9 shrink-0 overflow-visible">
                  <Logo size={60} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
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
                    {item.label === 'ВИДЫ ПРОЦЕДУР' ? (
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsProceduresSubmenuOpen((v) => !v)}
                          className="w-full flex items-center justify-between text-left text-white hover:text-accent hover:bg-white/10 active:bg-white/20 transition-all duration-300 py-4 px-6 text-lg font-semibold rounded-xl border border-transparent hover:border-accent/30"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${isProceduresSubmenuOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {isProceduresSubmenuOpen && (
                            <motion.div 
                              className="mt-3 overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                              <div className="ml-2 space-y-2">
                                {['Косметология', 'Лазерная эпиляция', 'Аппаратная коррекция фигуры', 'Аппаратная косметология', 'Инъекционные процедуры', 'Нитевой лифтинг'].map((subLabel, idx) => {
                                  const to = subLabel === 'Аппаратная косметология'
                                    ? '/hardware-cosmetology'
                                    : subLabel === 'Лазерная эпиляция'
                                      ? '/laser'
                                      : subLabel === 'Аппаратная коррекция фигуры'
                                        ? '/body-correction'
                                        : subLabel === 'Инъекционные процедуры'
                                          ? '/injection'
                                          : subLabel === 'Нитевой лифтинг'
                                            ? '/thread-lifting'
                                        : '/cosmetology'
                                  return (
                                    <motion.div
                                      key={subLabel}
                                      initial={{ x: -20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                                    >
                                      <Link
                                        to={to}
                                        onClick={(e) => {
                                          handleNavClick(to, true, e)
                                          setIsMobileMenuOpen(false)
                                        }}
                                        className="group relative block overflow-hidden text-sm text-white/90 hover:text-white bg-gradient-to-r from-white/5 to-transparent hover:from-accent/20 hover:to-accent/5 active:from-accent/30 active:to-accent/10 transition-all duration-300 py-3.5 px-5 rounded-lg border border-white/10 hover:border-accent/50 shadow-sm hover:shadow-md"
                                      >
                                        <div className="relative z-10 flex items-center justify-between">
                                          <span className="font-medium">{subLabel}</span>
                                          <ChevronDown className="w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                      </Link>
                                    </motion.div>
                                  )
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : item.isRoute ? (
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
              {/* Contact Section - улучшенный */}
              <motion.div 
                className="relative overflow-hidden bg-gradient-to-br from-slate-800/35 via-slate-900/25 to-slate-900/15 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-300/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-300/10 to-transparent rounded-tr-full" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-1 w-8 bg-gradient-to-r from-slate-200/60 to-sky-200/30 rounded-full" />
                    <div className="text-white/90 text-sm font-bold uppercase tracking-wider">
                      Контакты
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 mb-5">
                    <a
                      href={`tel:${tel0}`}
                      className="text-white/90 hover:text-white transition-all duration-300 text-base font-medium flex items-center gap-3 group bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-white/20 shadow-sm hover:shadow-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="bg-white/90 p-2.5 rounded-lg transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                        <Phone size={16} className="text-slate-900" />
                      </div>
                      <span className="text-sm sm:text-base">{contactInfo.phones[0]}</span>
                    </a>

                    <a
                      href={`tel:${tel1}`}
                      className="text-white/90 hover:text-white transition-all duration-300 text-base font-medium flex items-center gap-3 group bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-white/20 shadow-sm hover:shadow-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="bg-white/90 p-2.5 rounded-lg transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                        <Phone size={16} className="text-slate-900" />
                      </div>
                      <span className="text-sm sm:text-base">{contactInfo.phones[1]}</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      onBookClick()
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full bg-white/90 text-slate-900 
                      hover:bg-white
                      active:scale-[0.98]
                      px-6 py-4 rounded-xl 
                      transition-all duration-300 
                      font-bold shadow-lg
                      hover:shadow-xl
                      text-sm sm:text-base
                      border border-white/10
                      hover:border-white/20"
                  >
                    ЗАКАЗАТЬ ЗВОНОК
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    <NewYearPromoModal isOpen={showPromo} onClose={() => setShowPromo(false)} />
    <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />
    <style>{`
      .drawer-scroll { scrollbar-width: thin; scrollbar-color: rgba(148,163,184,0.6) transparent; }
      .drawer-scroll::-webkit-scrollbar { width: 6px; }
      .drawer-scroll::-webkit-scrollbar-track { background: transparent; }
      .drawer-scroll::-webkit-scrollbar-thumb { background-color: rgba(148,163,184,0.6); border-radius: 9999px; }
    `}</style>
    </>
  )
}