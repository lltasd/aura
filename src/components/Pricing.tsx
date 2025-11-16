import { useState, useEffect, useRef } from 'react'
import { Search, Filter, Zap, Clock, Sparkles, TrendingUp } from 'lucide-react'
import { alexandriteServices, diodeServices } from '../data/services'
import type { ServiceItem } from '../data/services'

export default function Pricing() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLaser, setSelectedLaser] = useState<'all' | 'alexandrite' | 'diode'>('all')
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)
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

  // Собираем все сервисы
  const allServices: Array<ServiceItem & { category: string; laser: string }> = []

  Object.entries(alexandriteServices).forEach(([category, services]) => {
    services.forEach((service) => {
      allServices.push({ ...service, category, laser: 'alexandrite' })
    })
  })

  Object.entries(diodeServices).forEach(([category, services]) => {
    services.forEach((service) => {
      allServices.push({ ...service, category, laser: 'diode' })
    })
  })

  // Фильтрация по поиску и лазеру
  const filteredServices = allServices.filter((service) => {
    const matchesSearch =
      service.zone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.duration.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLaser =
      selectedLaser === 'all' || service.laser === selectedLaser
    return matchesSearch && matchesLaser
  })

  // Перемешиваем услуги, если выбран "все типы"
  const shuffledServices = selectedLaser === 'all' && !searchTerm
    ? [...filteredServices].sort(() => Math.random() - 0.5)
    : filteredServices

  // Краткая версия списка
  let visibleServices: typeof filteredServices = shuffledServices
  let restCount = 0

  if (!showAll) {
    visibleServices = shuffledServices.slice(0, 10)
    restCount = Math.max(shuffledServices.length - 10, 0)
  }

  const categoryNames: Record<string, string> = {
    faceNeck: 'Лицо и шея',
    backStomach: 'Спина и живот',
    arms: 'Руки',
    legs: 'Ноги',
    intimate: 'Интимные зоны',
  }

  const alexandriteCount = allServices.filter(s => s.laser === 'alexandrite').length
  const diodeCount = allServices.filter(s => s.laser === 'diode').length

  return (
    <section 
      id="pricing" 
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-white scroll-mt-28"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              Прозрачное ценообразование
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Полный прайс-лист
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Найдите нужную услугу быстро и легко
          </p>
        </div>

        {/* Stats Cards */}
        <div 
          className={`grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Александритовый лазер</h3>
                  <p className="text-sm text-gray-600">Эффективная эпиляция</p>
                </div>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-5xl font-bold text-purple-600">{alexandriteCount}</p>
              <p className="text-gray-600 font-medium">процедур</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-300 transition-all shadow-lg hover:shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Диодный лазер</h3>
                  <p className="text-sm text-gray-600">Безопасно и комфортно</p>
                </div>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-5xl font-bold text-blue-600">{diodeCount}</p>
              <p className="text-gray-600 font-medium">процедур</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div 
          className={`bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 mb-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-3">
                <Search className="w-5 h-5 text-primary" />
                Поиск по названию
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setShowAll(false)
                }}
                placeholder="Введите название зоны..."
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-900 font-medium"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-3">
                <Filter className="w-5 h-5 text-primary" />
                Тип лазера
              </label>
              <select
                value={selectedLaser}
                onChange={(e) => {
                  setSelectedLaser(e.target.value as 'all' | 'alexandrite' | 'diode')
                  setShowAll(false)
                }}
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-900 font-medium"
              >
                <option value="all">Все типы лазеров</option>
                <option value="alexandrite">Александритовый</option>
                <option value="diode">Диодный</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t-2 border-gray-100 flex items-center justify-between">
            <span className="text-sm text-gray-600 font-medium">
              Найдено услуг: <strong className="text-primary text-lg">{filteredServices.length}</strong>
            </span>
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedLaser('all')
                  setShowAll(false)
                }}
                className="text-sm text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                Сбросить фильтры
              </button>
            )}
          </div>
        </div>

        {/* Services cards */}
        {filteredServices.length > 0 ? (
          <>
            <div 
              className={`grid gap-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {visibleServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 overflow-hidden group"
                  style={{
                    animation: isVisible ? `fadeInUp 0.4s ease-out ${index * 0.03}s both` : 'none'
                  }}
                >
                  <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Left - Laser badge and category */}
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex-shrink-0">
                        <span
                          className={`px-4 py-2 rounded-xl text-sm font-bold inline-flex items-center gap-2 ${
                            service.laser === 'alexandrite'
                              ? 'bg-purple-100 text-purple-700 border-2 border-purple-200'
                              : 'bg-blue-100 text-blue-700 border-2 border-blue-200'
                          }`}
                        >
                          <Zap className="w-4 h-4" />
                          {service.laser === 'alexandrite' ? 'Александрит' : 'Диод'}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          {categoryNames[service.category] || service.category}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {service.zone}
                        </h3>
                      </div>
                    </div>

                    {/* Right - Duration and price */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-semibold">{service.duration}</span>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-baseline gap-1 justify-end">
                          <span className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform inline-block">
                            {service.price}
                          </span>
                          <span className="text-gray-500 font-medium text-lg">₽</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">за процедуру</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show All Button */}
            {restCount > 0 && !showAll && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl border-2 border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <span>Показать все ({filteredServices.length})</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300"
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
          </>
        ) : (
          <div 
            className={`bg-white rounded-2xl shadow-md p-16 text-center transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={40} className="text-gray-400" />
            </div>
            <p className="text-gray-900 text-xl font-bold mb-2">Ничего не найдено</p>
            <p className="text-gray-500 text-base">Попробуйте изменить параметры поиска</p>
          </div>
        )}

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  )
}