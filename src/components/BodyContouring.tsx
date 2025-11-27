import { useState, useEffect, useRef } from 'react'
import { Sparkles, Clock, Zap, X, Mail, User, MessageSquare, Send, Activity, Droplets, Wind, Radio, Waves } from 'lucide-react'
import { bodyContouringServices } from '../data/services'
import type { ServiceItem } from '../data/services'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const mailtoLink = `mailto:info@aura-dn.ru?subject=Консультация от ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Имя: ${formData.name}\nEmail: ${formData.email}\n\nСообщение:\n${formData.message}`
    )}`

    window.location.href = mailtoLink

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({ name: '', email: '', message: '' })
        onClose()
      }, 2000)
    }, 500)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-dark p-8 rounded-t-3xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
                aria-label="Закрыть"
              >
                <X size={28} />
              </button>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold text-sm">Бесплатная консультация</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Свяжитесь с нами
                </h2>
                <p className="text-white/90 text-lg">
                  Напишите нам, и мы подберём идеальную программу под ваши цели
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="px-8 py-6 bg-gradient-to-r from-primary/5 to-primary/10 border-b border-primary/20">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2.5 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Наша почта</p>
                  <a href="mailto:info@aura-dn.ru" className="text-lg font-bold text-primary hover:text-primary-dark transition-colors">
                    info@aura-dn.ru
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 text-primary" />
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900 font-medium"
                  placeholder="Как к вам обращаться?"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900 font-medium"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Ваше сообщение
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none text-gray-900 font-medium"
                  placeholder="Расскажите, какая процедура вас интересует или какие у вас цели..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Отправить
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                Нажимая "Отправить", откроется ваш почтовый клиент для отправки сообщения
              </p>
            </form>
          </>
        ) : (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Отлично!</h3>
            <p className="text-gray-600">Ваш почтовый клиент должен открыться для отправки сообщения</p>
          </div>
        )}
      </div>
    </div>
  )
}

const categoryIcons: Record<string, JSX.Element> = {
  subdermalMassage: <Activity className="w-5 h-5" />,
  lpgMassage: <Waves className="w-5 h-5" />,
  bodyContouring: <Activity className="w-5 h-5" />,
  cavitation: <Droplets className="w-5 h-5" />,
  rfLifting: <Radio className="w-5 h-5" />,
  pressotherapy: <Wind className="w-5 h-5" />,
  indiba: <Zap className="w-5 h-5" />,
  indibaComplexes: <Sparkles className="w-5 h-5" />
}

export default function BodyContouring() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof bodyContouringServices>(
    'subdermalMassage'
  )
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in {
        animation: fade-in 0.4s ease-out forwards;
        opacity: 0;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const categories = {
    subdermalMassage: 'Субдермальный массаж',
    lpgMassage: 'LPG-массаж',
    bodyContouring: 'Контуринг тела',
    cavitation: 'Кавитация',
    rfLifting: 'RF-лифтинг',
    pressotherapy: 'Прессотерапия',
    indiba: 'Лифтинг INDIBA',
    indibaComplexes: 'Комплексы INDIBA',
  }

  const currentServices = bodyContouringServices[activeCategory]
  const displayedServices = showAll ? currentServices : currentServices.slice(0, 4)
  const hasMoreServices = currentServices.length > 4

  return (
    <section 
      id="body-contouring" 
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-white scroll-mt-28"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              Премиум процедуры
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Аппаратная коррекция фигуры
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Современные технологии для коррекции фигуры и улучшения состояния кожи
          </p>
        </div>

        {/* Category tabs with improved design */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(key as keyof typeof bodyContouringServices)
                setShowAll(false)
              }}
              className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 border ${
                activeCategory === key
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30 scale-105'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary'
              }`}
            >
              <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg ${
                activeCategory === key ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
              }`}>
                {categoryIcons[key as keyof typeof categoryIcons]}
              </span>
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Services cards with modern design */}
        <div 
          className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="grid gap-4">
            {displayedServices.map((service: ServiceItem, index: number) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-primary/30 transition-all duration-300 overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Left side - Service info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all">
                        <div className="text-primary group-hover:text-white transition-colors">
                          {categoryIcons[activeCategory]}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {service.zone}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Price */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-baseline gap-1 justify-end">
                        <span className="text-3xl font-extrabold text-primary group-hover:scale-110 transition-transform inline-block">
                          {service.price}
                        </span>
                        <span className="text-gray-500 font-medium">₽</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1 justify-end">
                        <Zap className="w-3 h-3" />
                        <span>за процедуру</span>
                      </div>
                    </div>
                    <button className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show All Button */}
          {hasMoreServices && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/90 backdrop-blur text-primary font-bold rounded-2xl border border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span>{showAll ? 'Скрыть' : `Показать все (${currentServices.length})`}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Bottom info card */}
          <div className="mt-10 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary p-2.5 rounded-xl shadow-sm">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Не нашли нужную процедуру?</h4>
                  <p className="text-sm text-gray-600">
                    Запишитесь на бесплатную консультацию — подберём программу под ваши цели
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 whitespace-nowrap"
              >
                Получить консультацию
              </button>
            </div>
          </div>

        </div>
      </div>
  
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
