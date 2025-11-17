import { Phone, ArrowRight } from 'lucide-react'
import { contactInfo } from '../data/services'
import Logo from './Logo'

interface HeroProps {
  onBookClick: () => void
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-primary pt-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        {/* Subtle roses */}
        <img
          src="/rose.png"
          alt=""
          aria-hidden
          className="hidden md:block absolute right-[-40px] top-[-60px] opacity-25 h-[70%] rotate-6 pointer-events-none select-none drop-shadow-xl"
        />
        <img
          src="/rose.png"
          alt=""
          aria-hidden
          className="hidden lg:block absolute left-[-56px] bottom-[-80px] opacity-20 h-[60%] -rotate-6 pointer-events-none select-none drop-shadow-lg"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-accent/30 shadow-2xl">
                <Logo size={120} className="drop-shadow-2xl" />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
            СТУДИЯ КРАСОТЫ АУРА
          </h1>

          <p className="text-xl md:text-2xl text-accent mb-4 font-light">
            Профессиональная лазерная эпиляция и аппаратная коррекция фигуры
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Современное оборудование, опытные специалисты и индивидуальный подход к каждому клиенту
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={onBookClick}
              className="bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Заказать звонок
              <ArrowRight size={20} />
            </button>
            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm border border-white/20 flex items-center gap-2"
            >
              Посмотреть услуги
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-accent" />
              <a
                href={`tel:${contactInfo.phones[0]}`}
                className="text-lg hover:text-accent transition"
              >
                {contactInfo.phones[0]}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-accent" />
              <a
                href={`tel:${contactInfo.phones[1]}`}
                className="text-lg hover:text-accent transition"
              >
                {contactInfo.phones[1]}
              </a>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex justify-center gap-6 mt-8">

{/* WhatsApp — темнее */}
<a
  href={contactInfo.socialMedia.whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  className="w-16 h-16 rounded-full flex items-center justify-center transition transform hover:scale-110 shadow-lg
             bg-[#1FAE55] border-4 border-[#1FAE55]"
>
  <img src="/whatsapp.svg" className="w-9 h-9" />
</a>

{/* VK — чуть светлее */}
<a
  href={contactInfo.socialMedia.vk}
  target="_blank"
  rel="noopener noreferrer"
  className="w-16 h-16 rounded-full flex items-center justify-center transition transform hover:scale-110 shadow-lg
             bg-[#4E86C4] border-4 border-[#4E86C4]"
>
  <img src="/vk.svg" className="w-10 h-10" />
</a>

{/* Instagram — мягкий розовый */}
<a
  href={contactInfo.socialMedia.instagram}
  target="_blank"
  rel="noopener noreferrer"
  className="w-16 h-16 rounded-full flex items-center justify-center transition transform hover:scale-110 shadow-lg
             bg-[#D54B7A] border-4 border-[#D54B7A]"
>
  <img src="/instagram.svg" className="w-10 h-10" />
</a>

{/* Telegram — чуть темнее */}
<a
  href={contactInfo.socialMedia.telegram}
  target="_blank"
  rel="noopener noreferrer"
  className="w-16 h-16 rounded-full flex items-center justify-center transition transform hover:scale-110 shadow-lg
             bg-[#3393BF] border-4 border-[#3393BF]"
>
  <img src="/telegram.svg" className="w-10 h-10" />
</a>

</div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

