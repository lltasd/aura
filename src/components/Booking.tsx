import { useState, useEffect, useRef } from 'react'
import { Calendar, Clock, User, MessageSquare, Sparkles, CheckCircle, Phone } from 'lucide-react'
import PhoneSelectModal from './PhoneSelectModal'

interface BookingProps {
  onBookClick: () => void
}

export default function Booking({ onBookClick }: BookingProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [phoneModalOpen, setPhoneModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary-dark relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-white/30">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-white font-semibold text-sm uppercase tracking-wide">
                Начните преображение сегодня
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Запишитесь на процедуру
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">
              Оставьте заявку, и мы подберём для вас идеальное время
            </p>
          </div>

          {/* Benefits cards */}
          <div 
            className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                <User className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Бесплатная консультация</h3>
              <p className="text-white/80 leading-relaxed">
                Наши специалисты помогут подобрать процедуры под ваши цели
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Удобное время</h3>
              <p className="text-white/80 leading-relaxed">
                Работаем без выходных с 8:00 до 20:00 для вашего комфорта
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/30">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Быстрая запись</h3>
              <p className="text-white/80 leading-relaxed">
                Оставьте заявку онлайн — ответим в течение 15 минут
              </p>
            </div>
          </div>

          {/* Additional benefits */}
          <div 
            className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 border border-white/20 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-white font-medium">Современное оборудование</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-white font-medium">Опытные специалисты</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-white font-medium">Гарантия результата</span>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={onBookClick}
              className="group bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-primary px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-gold/30 inline-flex items-center gap-3"
            >
              <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
              Записаться онлайн
            </button>

            <button
              type="button"
              onClick={() => setPhoneModalOpen(true)}
              className="group bg-white/15 backdrop-blur-md hover:bg-white/25 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 border-2 border-white/30 hover:border-white/50 inline-flex items-center gap-3"
            >
              <Phone size={24} className="group-hover:rotate-12 transition-transform" />
              Позвонить нам
            </button>
          </div>

          {/* Additional info */}
          <p 
            className={`text-center text-white/70 mt-8 text-sm transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Мы ценим ваше время и гарантируем конфиденциальность личных данных
          </p>
        </div>
      </div>

      <PhoneSelectModal isOpen={phoneModalOpen} onClose={() => setPhoneModalOpen(false)} />
    </section>
  )
}