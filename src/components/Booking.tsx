import { useState, useEffect, useRef } from 'react'
import { Calendar, Clock, User, MessageSquare, Sparkles, CheckCircle, Phone, Star, Zap } from 'lucide-react'
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
      className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-silver/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/30 shadow-lg">
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">
                Начните преображение сегодня
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white drop-shadow-lg">
              Запишитесь на процедуру
            </h2>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-accent"></div>
              <Star size={16} className="text-accent fill-accent" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Оставьте заявку, и мы подберём для вас идеальное время
            </p>
          </div>

          {/* Benefits cards */}
          <div 
            className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl shadow-blue-500/40">
                  <User className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Бесплатная консультация</h3>
                <p className="text-white/80 leading-relaxed">
                  Наши специалисты помогут подобрать процедуры под ваши цели
                </p>
              </div>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl shadow-emerald-500/40">
                  <Calendar className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Удобное время</h3>
                <p className="text-white/80 leading-relaxed">
                  Работаем без выходных с 8:00 до 20:00 для вашего комфорта
                </p>
              </div>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl shadow-violet-500/40">
                  <Clock className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Быстрая запись</h3>
                <p className="text-white/80 leading-relaxed">
                  Оставьте заявку онлайн — ответим в течение 15 минут
                </p>
              </div>
            </div>
          </div>

          {/* Additional benefits */}
          <div 
            className={`bg-gradient-to-r from-white/10 via-white/15 to-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/30 shadow-xl transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center group-hover:bg-accent/50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white font-semibold">Современное оборудование</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center group-hover:bg-accent/50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white font-semibold">Опытные специалисты</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center group-hover:bg-accent/50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white font-semibold">Гарантия результата</span>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={onBookClick}
              className="group relative bg-gradient-to-r from-silver to-silver-light hover:from-silver-light hover:to-white text-primary px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-silver/50 inline-flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <MessageSquare size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Записаться онлайн</span>
              <Zap size={20} className="relative z-10 text-primary/70 group-hover:text-primary transition-colors" />
            </button>

            <button
              type="button"
              onClick={() => setPhoneModalOpen(true)}
              className="group relative bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-white/40 hover:border-white/60 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <Phone size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Позвонить нам</span>
            </button>
          </div>

          {/* Additional info */}
          <div 
            className={`mt-10 text-center transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <p className="text-white/80 text-sm font-medium">
                Мы ценим ваше время и гарантируем конфиденциальность личных данных
              </p>
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <PhoneSelectModal isOpen={phoneModalOpen} onClose={() => setPhoneModalOpen(false)} />
    </section>
  )
}