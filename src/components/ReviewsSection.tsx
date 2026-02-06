import { Star, ChevronLeft, ChevronRight, ThumbsUp } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

export default function ReviewsSection() {

  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  const statsRef = useRef<HTMLDivElement | null>(null)
  const [reviewsCount, setReviewsCount] = useState(0)
  const [ratingValue, setRatingValue] = useState(0)
  const [recommendPercent, setRecommendPercent] = useState(0)
  const [yearsOnMarket, setYearsOnMarket] = useState(0)
  const statsAnimatedRef = useRef(false)

  // Импортируйте reviews из вашего файла данных
  // import { reviews } from './data/reviews'
  
  const reviewsData = [
    {
      name: "София",
      level: "Знаток города 2 уровня",
      date: "25 октября",
      text: "Остались самые приятные впечатления от посещения салона «Аура». Решила совместить две процедуры: лазерную эпиляцию и массаж. Обе процедуры выполнены на высшем уровне. Мастер по лазеру Елена профессионал своего дела, работает аккуратно и внимательно.",
      rating: 5,
    },
    {
      name: "Света Иванеева",
      level: "Знаток города 3 уровня",
      date: "18 октября",
      text: "Посещаю салон красоты \"Аура\" уже год. Прохожу курс лазерной эпиляции. Салон расположен в удобном месте, с хорошей транспортной доступностью. Внутри царит приятная атмосфера: уютный интерьер, вежливый и внимательный персонал. Меня встретили с улыбкой и профессионализмом.",
      rating: 5,
      likes: 2,
    },
    {
      name: "Рина Кутоманова",
      level: "Знаток города 3 уровня",
      date: "18 октября",
      text: "Недавно пришла по рекомендации кумы на курс лазерной эпиляции в этом салоне и осталась в полном восторге! 💖 Персонал очень внимательный и приветливый — всё подробно объяснили, ответили на все вопросы и создали комфортную атмосферу. Результат превзошел ожидания!",
      rating: 5,
      likes: 5,
    },
    {
      name: "вита г.",
      level: "Знаток города 2 уровня",
      date: "23 июня",
      text: "Очень внимательный и профессиональный персонал – делают процедуры аккуратно и с заботой. Интерьер уютный и приятный, создает хорошее настроение. Особенно хочу отметить мастерство мастеров — результат всегда устраивает полностью. Цены радуют своей разумностью.",
      likes: 1,
      rating: 5,
    },
    {
      name: "Алина Мурулина",
      level: "Знаток города 5 уровня",
      date: "29 сентября",
      text: "Долго решалась попробовать лазерную эпиляцию, было очень много сомнений и стеснения. Данную студию выбирала по огромному количеству отзывов от друзей и знакомых. Первый визит была в напряжении, но всё прошло идеально. Мастер всё объяснила, показала, рассказала. Жалею, что раньше не решалась прийти в эту студию.",
      rating: 5,
      likes: 3,
    },
    {
      name: "Анастасия Чайка",
      level: "Знаток города 3 уровня",
      date: "22 июля",
      text: "Обслуживание прекрасное, всегда предлагают чай/кофе, вежливый персонал, атмосфера добра и уюта. Я делаю лазерную эпиляцию у мастера Елены, она не только мастер своего дела, но и чудесный человек, очень располагающая к себе, позитивная.",
      rating: 5,
    },
    {
      name: "Валерия Маруева",
      level: "Знаток города 3 уровня",
      date: "18 октября",
      text: "Аура — это место, куда хочется вновь возвращаться. Уютная атмосфера, по-домашнему тепло и уютно. Персонал — вежливые, приветливые работники. Ну а профессионализм врачей — на высоте!",
      rating: 5,
      likes: 4,
    },
    {
      name: "Elza Ahmedova",
      level: "Знаток города 2 уровня",
      date: "19 октября",
      text: "Хожу сюда на лазерную эпиляцию уже не первый раз. Очень довольна результатом — процедура проходит быстро и без боли, мастер аккуратная и внимательная. В салоне чисто и уютно, персонал всегда приветливый.",
      rating: 5,
    },
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 360
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 10)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    handleScroll()
  }, [])

  useEffect(() => {
    const targetReviews = 52
    const targetRating = 5
    const targetRecommend = 98
    const targetYears = 3
    const duration = 2000

    const element = statsRef.current
    if (!element) return

    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !statsAnimatedRef.current) {
          statsAnimatedRef.current = true
          observer.unobserve(entry.target)

          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            setReviewsCount(Math.floor(targetReviews * progress))
            setRatingValue(targetRating * progress)
            setRecommendPercent(Math.floor(targetRecommend * progress))
            setYearsOnMarket(Math.floor(targetYears * progress))

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

  // Генерация цвета аватара на основе имени
  const getAvatarColor = (name: string) => {
    const colors = [
      'from-purple-400 to-pink-400',
      'from-blue-400 to-cyan-400',
      'from-green-400 to-emerald-400',
      'from-orange-400 to-red-400',
      'from-indigo-400 to-purple-400',
      'from-pink-400 to-rose-400',
      'from-teal-400 to-green-400',
      'from-yellow-400 to-orange-400',
    ]
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }

  const { ref: sectionInViewRef, isInView: sectionInView } = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section
      ref={sectionInViewRef}
      className={`mt-24 pb-24 bg-gradient-to-b from-slate-50 to-white transition-all duration-700 ease-out ${
        sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-blue-900 uppercase mb-3">
            отзывы
          </h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
          </div>
          <p className="text-slate-600 text-lg">Что говорят наши клиенты</p>
        </div>

        <div className="relative">
          {/* Навигационные стрелки */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white hover:bg-slate-50 shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 border border-slate-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" strokeWidth={2.5} />
            </button>
          )}
          
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white hover:bg-slate-50 shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 border border-slate-200"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-slate-700" strokeWidth={2.5} />
            </button>
          )}

          {/* Градиентные тени по краям */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-2 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviewsData.map((review, i) => (
              <div key={i} className="snap-start min-w-[300px] sm:min-w-[340px] md:min-w-[380px]">
                <div className="bg-white rounded-3xl border-2 border-slate-100 p-7 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:border-slate-200 hover:-translate-y-1 group">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${getAvatarColor(review.name)} flex items-center justify-center text-lg font-bold text-white shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {review.name.split(' ').filter(Boolean).slice(0, 2).map((s) => s[0]).join('')}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 text-lg truncate">{review.name}</h4>
                      <div className="flex items-center gap-1 mt-1.5">
                        {[...Array(5)].map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className={`w-4 h-4 transition-all ${
                              starIdx < (review.rating ?? 5)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-slate-200 text-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                      {review.level && (
                        <div className="text-xs text-slate-500 mt-1.5 font-medium">{review.level}</div>
                      )}
                      <div className="text-xs text-slate-400 mt-1">{review.date}</div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="flex-1 mb-4">
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {expanded.has(i)
                        ? review.text
                        : (review.text.length > 200 ? review.text.slice(0, 200) + '…' : review.text)}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    {review.text.length > 200 ? (
                      <button
                        onClick={() => {
                          setExpanded((prev) => {
                            const next = new Set(prev)
                            if (next.has(i)) next.delete(i)
                            else next.add(i)
                            return next
                          })
                        }}
                        className="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors flex items-center gap-1 group/btn"
                      >
                        {expanded.has(i) ? 'Свернуть' : 'Читать полностью'}
                        <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                      </button>
                    ) : (
                      <div />
                    )}
                    
                    {review.likes && review.likes > 0 && (
                      <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                        <ThumbsUp className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-sm font-semibold text-slate-700">{review.likes}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Статистика внизу */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <div className="text-3xl font-black text-slate-900 mb-1">
              {reviewsCount}
            </div>
            <div className="text-sm text-slate-600 font-medium">Отзыва</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <div className="text-3xl font-black text-slate-900 mb-1 flex items-center justify-center gap-1">
              {ratingValue.toFixed(1)}{' '}
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="text-sm text-slate-600 font-medium">Средний рейтинг</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <div className="text-3xl font-black text-slate-900 mb-1">{recommendPercent}%</div>
            <div className="text-sm text-slate-600 font-medium">Рекомендуют</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <div className="text-3xl font-black text-slate-900 mb-1">{yearsOnMarket} года</div>
            <div className="text-sm text-slate-600 font-medium">На рынке</div>
          </div>
        </div>

      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}