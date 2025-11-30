import { Phone, ArrowRight, Sparkles } from 'lucide-react'
import { contactInfo } from '../data/services'
import Logo from './Logo'

interface HeroProps {
  onBookClick: () => void
  accentVariant?: 'gold' | 'silver'
}

export default function Hero({ onBookClick, accentVariant = 'silver' }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-primary pt-24 overflow-hidden"
    >
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs (hidden on phones) */}
        <div className="hidden sm:block absolute top-20 right-20 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="hidden sm:block absolute top-1/2 left-1/2 w-80 h-80 bg-silver/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle grid overlay (hidden on phones) */}
        <div className="hidden sm:block absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Roses with better positioning */}
        <img
          src="/rose.png"
          alt=""
          aria-hidden
          className="hidden md:block absolute right-[-40px] top-[-60px] opacity-20 h-[70%] rotate-6 pointer-events-none select-none drop-shadow-2xl transition-opacity duration-1000"
          loading="lazy"
          decoding="async"
        />
        <img
          src="/rose.png"
          alt=""
          aria-hidden
          className="hidden lg:block absolute left-[-56px] bottom-[-80px] opacity-15 h-[60%] -rotate-6 pointer-events-none select-none drop-shadow-xl transition-opacity duration-1000"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Logo with glow effect */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl sm:blur-2xl group-hover:bg-accent/30 transition-all duration-500"></div>
              <Logo size={120} className="drop-shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>

          {/* Main heading with enhanced styling */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent drop-shadow-lg">
            СТУДИЯ КРАСОТЫ АУРА
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent"></div>
            <Sparkles size={16} className="text-accent animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent"></div>
          </div>

          <p className="text-xl md:text-2xl text-accent mb-4 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Профессиональная лазерная эпиляция и аппаратная коррекция фигуры
          </p>

          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Современное оборудование, опытные специалисты и индивидуальный подход к каждому клиенту
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={onBookClick}
              className={`group relative ${
                accentVariant === 'silver'
                  ? 'bg-gradient-to-r from-silver to-silver-light hover:from-silver-light hover:to-silver text-primary'
                  : 'bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-primary'
              } px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2 overflow-hidden`}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2">
                Заказать звонок
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a
              href="#services"
              className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 flex items-center gap-2 hover:shadow-xl"
            >
              Посмотреть услуги
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Enhanced Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href={`tel:${contactInfo.phones[0]}`}
              className="group flex items-center gap-2 hover:text-accent transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/5"
            >
              <div className="p-2 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                <Phone size={18} className="text-accent" />
              </div>
              <span className="text-lg font-medium">{contactInfo.phones[0]}</span>
            </a>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <a
              href={`tel:${contactInfo.phones[1]}`}
              className="group flex items-center gap-2 hover:text-accent transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/5"
            >
              <div className="p-2 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                <Phone size={18} className="text-accent" />
              </div>
              <span className="text-lg font-medium">{contactInfo.phones[1]}</span>
            </a>
          </div>

          {/* Enhanced Social media icons */}
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a
              href={contactInfo.socialMedia.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl bg-[#1FAE55]"
            >
              <div className="absolute inset-0 rounded-full bg-[#1FAE55] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <img src="/whatsapp.svg" className="w-8 h-8 relative z-10" alt="WhatsApp" />
            </a>

            <a
              href={contactInfo.socialMedia.vk}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl bg-[#4E86C4]"
            >
              <div className="absolute inset-0 rounded-full bg-[#4E86C4] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <img src="/vk.svg" className="w-9 h-9 relative z-10" alt="VK" />
            </a>

            <a
              href={contactInfo.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl bg-[#D54B7A]"
            >
              <div className="absolute inset-0 rounded-full bg-[#D54B7A] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <img src="/instagram.svg" className="w-9 h-9 relative z-10" alt="Instagram" />
            </a>

            <a
              href={contactInfo.socialMedia.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl bg-[#3393BF]"
            >
              <div className="absolute inset-0 rounded-full bg-[#3393BF] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <img src="/telegram.svg" className="w-9 h-9 relative z-10" alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}