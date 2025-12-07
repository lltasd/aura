import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { useTypewriter } from '../hooks/useTypewriter'

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const [yearValue, setYearValue] = useState(0)
  const [clientsValue, setClientsValue] = useState(0)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    const targetYear = 2018
    const targetClients = 500
    const duration = 2000

    const element = sectionRef.current
    if (!element) return

    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true
          observer.unobserve(entry.target)

          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            setYearValue(Math.floor(targetYear * progress))
            setClientsValue(Math.floor(targetClients * progress))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.3,
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  const { ref: inViewRef, isInView } = useInView<HTMLElement>({ threshold: 0.2 })
  const typedTitle = useTypewriter('О НАС', {
    speed: 90,
    startDelay: 150,
    enabled: isInView,
  })

  return (
    <section
      ref={(el) => {
        sectionRef.current = el
        inViewRef.current = el
      }}
      className={`py-20 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="px-4">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl max-w-[1400px] mx-auto">
          {/* Декоративный фон - теперь на всю ширину */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-white" />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-slate-200/30 rounded-full blur-3xl" />
          
          <div className="relative grid lg:grid-cols-2 gap-0">
            {/* Левая часть - Изображение */}
            <div className="relative min-h-[400px] lg:min-h-[650px] bg-gradient-to-br from-blue-50/30 via-white to-slate-50/50 overflow-hidden flex items-center justify-center group">
              {/* Декоративные элементы */}
              <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-colors duration-700" />
              <div className="absolute bottom-10 right-10 w-48 h-48 bg-slate-300/20 rounded-full blur-3xl" />
              
              {/* Декоративные круги */}
              <div className="absolute top-1/4 right-10 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse" />
              <div className="absolute bottom-1/3 left-10 w-2 h-2 bg-blue-500 rounded-full opacity-40" />
              
              <img 
                src="/spaa.png" 
                alt="О нас" 
                className="relative z-10 w-[75%] max-w-[450px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* Правая часть - Текст */}
            <div className="p-8 sm:p-12 lg:p-16 flex items-center bg-white relative">
              
              <div className="relative z-10 w-full">
                {/* Заголовок с декоративной линией */}
                <div className="mb-10">
                  <div className="relative">
                    <h3 className="text-4xl md:text-5xl font-black font-display tracking-tight text-blue-900 mb-4">
                      {typedTitle || 'О НАС'}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                  </div>
                </div>

                {/* Текстовые блоки */}
                <div className="space-y-6">
                  <div 
                    className={`relative pl-6 border-l-4 border-blue-500/30 hover:border-blue-600/60 transition-all duration-300 hover:pl-8 transform ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                    style={{ transitionDelay: '200ms' }}
                  >
                    <p className="text-slate-700 leading-relaxed text-base">
                      В студии красоты «Аура» мы объединяем современную косметологию и заботу о клиенте. Работаем с 2018 года, используем сертифицированное оборудование и методики, соответствующие РФ, ЕС и FDA.
                    </p>
                  </div>

                  <div 
                    className={`relative pl-6 border-l-4 border-blue-500/30 hover:border-blue-600/60 transition-all duration-300 hover:pl-8 transform ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                    style={{ transitionDelay: '400ms' }}
                  >
                    <p className="text-slate-700 leading-relaxed text-base">
                      Наша команда — специалисты с медицинским образованием, регулярно повышающие квалификацию. Мы придерживаемся строгих стандартов стерильности, асептики и антисептики.
                    </p>
                  </div>

                  <div 
                    className={`relative pl-6 border-l-4 border-blue-500/30 hover:border-blue-600/60 transition-all duration-300 hover:pl-8 transform ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                    style={{ transitionDelay: '600ms' }}
                  >
                    <p className="text-slate-700 leading-relaxed text-base">
                      Мы верим в индивидуальный подход: подбираем процедуры под ваши задачи и ожидаемые результаты, чтобы вы каждый день чувствовали уверенность и гармонию.
                    </p>
                  </div>
                </div>

                {/* Декоративные элементы внизу текста */}
                <div 
                  className={`mt-12 flex items-center gap-8 transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: '800ms' }}
                >
                  <div className="flex flex-col">
                    <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      {yearValue.toLocaleString('ru-RU')}
                    </span>
                    <span className="text-sm text-slate-600 font-semibold mt-1">Год основания</span>
                  </div>
                  <div className="h-14 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent" />
                  <div className="flex flex-col">
                    <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      {clientsValue.toLocaleString('ru-RU')}+
                    </span>
                    <span className="text-sm text-slate-600 font-semibold mt-1">Довольных клиентов</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}