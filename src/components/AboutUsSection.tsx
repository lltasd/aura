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
      className={`py-20 bg-gradient-to-b from-white via-slate-50/30 to-white transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Декоративный фон */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl" />
          
          <div className="relative grid lg:grid-cols-2 gap-0">
            {/* Левая часть - Изображение */}
            <div className="relative min-h-[400px] lg:min-h-[600px] bg-gradient-to-br from-slate-100 via-white to-slate-50 overflow-hidden flex items-center justify-center">
              {/* Декоративные элементы */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-slate-300/30 rounded-full blur-2xl" />
              
              <img 
                src="/spaa.png" 
                alt="О нас" 
                className="relative z-10 w-[75%] max-w-[450px] object-contain drop-shadow-2xl" 
              />
            </div>

            {/* Правая часть - Текст */}
            <div className="p-8 sm:p-12 lg:p-16 flex items-center bg-white/80 backdrop-blur-sm">
              <div className="relative z-10">
                {/* Заголовок с декоративной линией */}
                <div className="mb-8">
                  <div className="inline-block">
                    <h3 className="text-4xl md:text-5xl font-black font-display tracking-tight text-blue-700 mb-3">
                      {typedTitle || 'О НАС'}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                  </div>
                </div>

                {/* Текстовые блоки */}
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-4 border-blue-600/20">
                    <p className="text-slate-700 leading-relaxed text-base">
                      В студии красоты «Аура» мы объединяем современную косметологию и заботу о клиенте. Работаем с 2018 года, используем сертифицированное оборудование и методики, соответствующие РФ, ЕС и FDA.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-blue-600/20">
                    <p className="text-slate-700 leading-relaxed text-base">
                      Наша команда — специалисты с медицинским образованием, регулярно повышающие квалификацию. Мы придерживаемся строгих стандартов стерильности, асептики и антисептики.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-blue-600/20">
                    <p className="text-slate-700 leading-relaxed text-base">
                      Мы верим в индивидуальный подход: подбираем процедуры под ваши задачи и ожидаемые результаты, чтобы вы каждый день чувствовали уверенность и гармонию.
                    </p>
                  </div>
                </div>

                {/* Декоративные элементы внизу текста */}
                <div className="mt-10 flex items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-blue-600 transition-colors duration-300">
                      {yearValue.toLocaleString('ru-RU')}
                    </span>
                    <span className="text-sm text-slate-600 font-medium">Год основания</span>
                  </div>
                  <div className="h-12 w-px bg-slate-300" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-blue-600 transition-colors duration-300">
                      {clientsValue.toLocaleString('ru-RU')}+
                    </span>
                    <span className="text-sm text-slate-600 font-medium">Довольных клиентов</span>
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