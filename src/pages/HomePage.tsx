import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

import NewYearPromoModal from '../components/NewYearPromoModal'

import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ReviewsSection from '../components/ReviewsSection'
import AboutUsSection from '../components/AboutUsSection'
import SpecialistsSection from '../components/SpecialistsSection'
import GiftCertificateSection from '../components/GiftCertificateSection'
import SpecialsRow from '../components/SpecialsRow'
import { ContactModal } from '../components/BodyContouring'
import { Sparkles, Award, Shield, Users, Phone, MapPin } from 'lucide-react'
import { specialists } from '../data/specialists'
import { specials } from '../data/specials'

// Компонент WhyUsSection с анимацией при скролле
function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
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
    <div ref={sectionRef} className="px-4 py-6 sm:px-6 md:px-8 lg:px-0 lg:py-8">
      <div 
        className={`group relative overflow-hidden 
          rounded-xl sm:rounded-2xl lg:rounded-[2rem]
          shadow-lg sm:shadow-xl lg:shadow-2xl
          border border-[#BFDBFE]/60 sm:border-[#DBEAFE]/60
          bg-white sm:bg-gradient-to-br sm:from-white sm:via-[#EFF6FF]/40 sm:to-slate-50/50
          p-6 sm:p-8 md:p-10 lg:p-12
          transition-all duration-700
          hover:shadow-xl sm:hover:shadow-2xl lg:hover:shadow-[#1E40AF]/10
          transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        style={{ transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {/* Фоновые элементы - ТОЛЬКО на планшетах и выше */}
        <div className="hidden sm:block absolute -top-24 -right-24 w-80 h-80 lg:w-[30rem] lg:h-[30rem] 
          bg-gradient-to-br from-[#2563EB]/12 via-[#1E40AF]/8 to-transparent 
          rounded-full blur-3xl opacity-70" 
        />
        <div className="hidden sm:block absolute -bottom-16 -left-16 w-72 h-72 lg:w-[28rem] lg:h-[28rem] 
          bg-gradient-to-tr from-slate-300/15 via-[#BFDBFE]/15 to-transparent 
          rounded-full blur-3xl opacity-60
          group-hover:from-[#2563EB]/20 group-hover:via-[#1E40AF]/15 
          transition-all duration-1000" 
        />
        
        {/* Золотой акцент - только десктоп */}
        <div className="hidden lg:block absolute top-0 right-0 w-32 h-32 
          bg-gradient-to-bl from-amber-400/5 to-transparent rounded-bl-full" 
        />
        
        {/* Hover эффект - только на больших экранах */}
        <div className="hidden sm:block absolute inset-0 
          bg-gradient-to-t from-[#DBEAFE]/20 via-transparent to-[#EFF6FF]/10 
          opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
        />
        
        {/* Сетка - только десктоп */}
        <div className="hidden lg:block absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: 'radial-gradient(circle, #1E40AF 1px, transparent 1px)', 
            backgroundSize: '28px 28px'
          }} 
        />
        
        <div className="relative z-10">
          {/* Заголовок */}
          <div className="mb-6 sm:mb-7 lg:mb-8">
            <h2
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
              font-extrabold sm:font-black font-display 
              text-[#1E40AF] 
              leading-snug sm:leading-tight sm:tracking-tight 
              mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s' }}
            >
              ПОЧЕМУ ВЫБИРАЮТ СТУДИЮ КРАСОТЫ «АУРА»?
            </h2>
            
            {/* Декоративная линия с анимацией удлинения */}
            <div className="flex items-center gap-2 overflow-hidden">
              <div
                className={`h-1 sm:h-1.5 
                  bg-gradient-to-r from-[#2563EB] via-[#1E40AF] to-[#1D4ED8] 
                  rounded-full shadow-md shadow-[#2563EB]/20
                  transition-all duration-1000 ease-out
                  ${isVisible ? 'w-32 sm:w-40 lg:w-48' : 'w-0'}
                  group-hover:w-40 sm:group-hover:w-52 lg:group-hover:w-64`}
                style={{
                  transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                }}
              />
              <div
                className={`hidden sm:block h-1 bg-gradient-to-r from-amber-400/50 to-transparent rounded-full
                  transition-all duration-1000 ease-out
                  ${isVisible ? 'w-8 lg:w-12 opacity-100' : 'w-0 opacity-0'}`}
                style={{
                  transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s, opacity 0.6s ease-out 0.8s'
                }}
              />
            </div>
          </div>
          
          {/* Текстовые блоки */}
          <div className="space-y-5 sm:space-y-5 lg:space-y-6">
            {[
              {
                text: 'Каждый клиент для нас ценен, поэтому мы разрабатываем индивидуальные программы ухода в зависимости от ваших пожеланий и потребностей. Наши квалифицированные специалисты проведут консультацию и подбор оптимальных процедур для достижения желаемых результатов.',
                delay: '0.5s'
              },
              {
                text: 'Студия красоты «Аура» в Донецке сочетает профессионализм, комфорт и современные технологии. Все наши специалисты - врачи с высшим медицинским образованием, которые регулярно проходят дополнительное обучение на курсах повышения квалификации и изучают самые передовые технологии.',
                delay: '0.7s'
              },
              {
                text: 'Мы используем самое современное оборудование для косметологии, которое на сегодня в Донецке есть только у нас. Используем только проверенные материалы, чтобы каждая процедура была безопасной и максимально эффективной.',
                delay: '0.9s'
              },
              {
                text: 'Здесь вы сможете не только ухаживать за своей внешностью, но и расслабиться в уютной атмосфере. Доверьте свою красоту специалистам студии «Аура». Мы поможем вам выглядеть великолепно каждый день!',
                delay: '1.1s'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`relative
                  pl-4 sm:pl-5 lg:pl-6
                  border-l-[3px] sm:border-l-[3px] lg:border-l-4
                  transition-all duration-700
                  ${
                    isVisible
                      ? 'border-[#2563EB]/60 opacity-100 translate-x-0'
                      : 'border-[#2563EB]/0 opacity-0 translate-x-4'
                  }
                  sm:hover:border-[#2563EB]/90
                  sm:hover:pl-6 lg:hover:pl-8
                  sm:transform sm:hover:scale-[1.01] sm:origin-left`}
                style={{
                  transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${item.delay}`
                }}
              >
                {/* Золотой акцент при ховере - только десктоп */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 
                  bg-gradient-to-b from-amber-400/0 via-amber-400/40 to-amber-400/0 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                />
                
                <p className="text-[15px] sm:text-base lg:text-lg 
                  text-slate-700 
                  sm:hover:text-[#1E40AF]
                  leading-relaxed
                  transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          
          {/* Декоративный элемент - только десктоп */}
          <div className="hidden lg:flex items-center gap-3 mt-8 pt-6 border-t border-[#DBEAFE]/30">
            <div className="h-2 w-2 rounded-full bg-[#2563EB]/60 animate-pulse" />
            <div
              className={`h-1 bg-gradient-to-r from-[#BFDBFE]/30 via-[#2563EB]/10 to-transparent rounded-full
              transition-all duration-1000 ${isVisible ? 'flex-1' : 'w-0'}`}
              style={{ transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1) 1.3s' }}
            />
            <div className="h-1.5 w-1.5 rounded-full bg-amber-400/40" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const images = ['/slider5.png', '/slider1.png', '/slider2.png']
  const [active, setActive] = useState(0)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [showPromo, setShowPromo] = useState(false) 

  const specialsItems = Array.from(
    new Map(
      specials.map((s) => [s.title, { image: s.image, title: s.title } as { image: string; title: string }])
    ).values()
  )

  const directorBlockRef = useRef<HTMLDivElement>(null)
  const [isSpecialOffersInView, setIsSpecialOffersInView] = useState(false)
  
  // Ref for special offers section
  const specialOffersRef = useRef<HTMLDivElement>(null)
  
  // Check if director block is in view
  useEffect(() => {
    const checkIfInView = () => {
      // Check if special offers section is in view
      if (specialOffersRef.current) {
        const rect = specialOffersRef.current.getBoundingClientRect()
        setIsSpecialOffersInView(rect.top < window.innerHeight * 0.8 && rect.bottom > 0)
      }
    }

    // Initial check
    checkIfInView()

    // Set up scroll listener
    window.addEventListener('scroll', checkIfInView, { passive: true })
    return () => window.removeEventListener('scroll', checkIfInView)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % images.length), 3000)
    return () => clearInterval(id)
  }, [])

  // Show New Year promo once per day (2025), allow ?promo=1 to force show
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      if (params.get('promo') === '1') {
        setShowPromo(true)
        return
      }
      const key = 'ny_promo_seen_at_2025'
      const last = localStorage.getItem(key)
      const now = Date.now()
      const dayMs = 24 * 60 * 60 * 1000
      if (!last || now - Number(last) > dayMs) {
        setShowPromo(true)
        localStorage.setItem(key, String(now))
      }
    } catch (e) {}
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <Header onBookClick={() => setIsContactOpen(true)} variant="dark" />

      <NewYearPromoModal isOpen={showPromo} onClose={() => setShowPromo(false)} />

      <main className="container mx-auto px-4 pt-32 sm:pt-40 md:pt-44 pb-14 md:pb-16">
        <section className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="lg:col-span-2 space-y-8">
            {/* Слайдер с описанием студии */}
            <div className="group relative">
              {/* Светящийся фон - адаптивный */}
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#2563EB]/20 via-[#1E40AF]/15 to-[#2563EB]/20 rounded-2xl sm:rounded-[2rem] opacity-30 sm:opacity-40 group-hover:opacity-50 sm:group-hover:opacity-60 blur-xl sm:blur-2xl transition-all duration-1000" />

              <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-xl sm:shadow-2xl border border-[#BFDBFE]/60 bg-white">
                {/* СЛАЙДЕР */}
                <div className="relative h-64 sm:h-80 md:h-[480px] bg-gradient-to-br from-[#EFF6FF]/50 via-white to-slate-50 overflow-hidden">
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Студия красоты Аура"
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={i === 0 ? 'high' : 'low'}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                      aria-hidden={i !== active}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 sm:duration-[1200ms] ease-in-out ${
                        i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105 sm:scale-110'
                      }`}
                    />
                  ))}

                  {/* Градиент снизу */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E40AF]/70 via-transparent to-transparent" />

                  {/* Индикаторы слайдера - улучшенные */}
                  <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 sm:py-2.5 border border-white/20">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        aria-label={`Перейти к слайду ${i + 1}`}
                        className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 ${
                          i === active
                            ? 'bg-white w-8 sm:w-12 shadow-lg shadow-white/40'
                            : 'bg-white/50 w-2 sm:w-2.5 hover:bg-white/80 hover:w-5 sm:hover:w-8'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Бейдж "Премиум качество" */}
                  <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 border border-white/30 shadow-lg sm:shadow-2xl hover:bg-white/25 transition-all duration-300">
                    <div className="flex items-center gap-2 sm:gap-2.5 text-white">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-bold text-xs sm:text-sm tracking-wide">Премиум качество</span>
                    </div>
                  </div>
                </div>

                {/* КОНТЕНТНАЯ ЧАСТЬ */}
                <div className="p-5 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8 bg-gradient-to-br from-white via-[#EFF6FF]/30 to-white">
                  {/* ЗАГОЛОВОК - Адаптивный */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* Мобильная версия */}
                    <div className="sm:hidden">
                      <h2 className="text-2xl font-black font-display text-blue-900 leading-tight tracking-tight">
                        СТУДИЯ КРАСОТЫ АУРА
                      </h2>
                      <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg border border-slate-200">
                        <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span className="text-base font-display font-bold text-slate-700">ДОНЕЦК ДНР</span>
                      </div>
                    </div>

                    {/* Десктопная версия */}
                    <div className="hidden sm:block text-center">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-blue-900 leading-tight tracking-tight">
                        СТУДИЯ КРАСОТЫ АУРА
                      </h2>

                      {/* Анимированная линия */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={showPromo ? { scaleX: 0 } : { scaleX: 1 }}
                        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                        className="mx-auto mt-4 h-1 sm:h-1.5 w-3/4 max-w-md bg-gradient-to-r from-[#2563EB] via-[#1E40AF] to-[#1D4ED8] rounded-full origin-center shadow-md shadow-[#2563EB]/20"
                      />

                      {/* Золотой акцент */}
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={showPromo ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.8 }}
                        className="mx-auto mt-2 h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent rounded-full origin-center"
                      />
                    </div>
                  </div>

                  {/* КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА - Улучшенные */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {[
                      { icon: Award, text: 'Основана в 2018', delay: '0ms' },
                      { icon: Shield, text: 'FDA, ЕС, РФ', delay: '100ms' },
                      { icon: Users, text: 'Два филиала', delay: '200ms' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 sm:gap-3.5 p-4 sm:p-5 rounded-xl sm:rounded-2xl 
                    bg-gradient-to-br from-primary via-primary-light to-primary-dark
                    border border-white/20 
                    shadow-lg hover:shadow-xl 
                    hover:scale-[1.03] sm:hover:scale-105 
                    transition-all duration-500 
                    group/card"
                        style={{ transitionDelay: item.delay }}
                      >
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-md group-hover/card:scale-110 group-hover/card:bg-white/30 transition-all duration-500">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-sm sm:text-base font-bold text-white leading-tight">{item.text}</div>
                      </div>
                    ))}
                  </div>

                  {/* ТЕКСТОВЫЙ КОНТЕНТ - Улучшенная типографика */}
                  <div className="space-y-4 sm:space-y-5 text-slate-700 leading-relaxed">
                    <p className="text-base sm:text-lg font-semibold text-slate-800 border-l-4 border-[#2563EB] pl-4 bg-gradient-to-r from-[#EFF6FF]/50 to-transparent py-2 rounded-r-lg">
                      Студия красоты «Аура» в Донецке предлагает вам уникальный опыт профессионального ухода за кожей и телом. Вас порадует широкий спектр косметологических процедур, направленных на подчеркивание вашей индивидуальной красоты и сохранение молодости.
                    </p>

                    <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                      <p className="hover:text-slate-900 transition-colors duration-300">
                        Мы предоставляем косметологические услуги по уходу за лицом и телом, аппаратной коррекции фигуры и лазерной эпиляции на аппаратах премиум класса. Благодаря персонализированному подходу и современным методам, наши услуги обеспечивают максимальную эффективность и безопасность.
                      </p>

                      <p className="hover:text-slate-900 transition-colors duration-300">
                        Все помещения в нашей студии соответствуют СанПиН. Мы применяем новейшие аппаратные методики. Наше оборудование сертифицировано в РФ, США (FDA), ЕС.
                      </p>

                      <p className="hover:text-slate-900 transition-colors duration-300">
                        Все сотрудники имеют медицинское образование. Наши специалисты сертифицированы и регулярно проходят переподготовку. Мы гарантируем строгое соблюдение норм стерильности, асептики и антисептики.
                      </p>
                    </div>

                    {/* Декоративный разделитель */}
                    <div className="hidden sm:flex items-center gap-3 pt-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#BFDBFE]/50 to-transparent" />
                      <div className="h-1.5 w-1.5 rounded-full bg-[#2563EB]/40" />
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#BFDBFE]/50 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* БЛОК О РУКОВОДИТЕЛЕ */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 rounded-[2rem] opacity-30 group-hover:opacity-50 blur-2xl transition-all duration-1000" />
              <div className="relative bg-white rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-slate-200">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Левая колонка с фото */}
                  <div className="md:col-span-2 relative">
                    <div className="h-full min-h-[420px] md:min-h-[600px] relative overflow-hidden">
                      <img
                        src="/svet.webp"
                        alt="Светлана Михайловна Химина"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                      {/* Информация поверх фото */}
                      <div
                        ref={directorBlockRef}
                        className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white"
                      >
                        <h3 className="text-2xl md:text-3xl font-black mb-1 md:mb-2 font-display">
                          <span className="block">Светлана Михайловна</span>
                          <span className="block">Химина</span>
                        </h3>

                        <p className="text-blue-200 font-semibold text-base sm:text-lg mb-3 md:mb-4">
                          Руководитель студии красоты «Аура»
                        </p>
                        <a
                          href="tel:+79494154729"
                          className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md hover:bg-white/30 px-5 py-3 rounded-xl transition-all duration-300 border border-white/30"
                        >
                          <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                            <Phone className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold">+7 (949) 415-47-29</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Правая колонка с текстом */}
                  <div className="md:col-span-3 p-6 md:p-12 flex flex-col justify-center">
                    {/* Иконка статуса */}
                    <div className="mb-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg mb-5 md:mb-6">
                        <Award className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>

                      {/* Основная цитата */}
                      <div className="relative mb-8">
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
                        <p className="text-base sm:text-lg md:text-2xl font-medium text-slate-800 leading-relaxed pl-6 italic relative">
                          Я горжусь тем, что на рынке современной косметологии есть такое качество услуг и высокий сервис, как в студии красоты «Аура».
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                        Каждое наше достижение — это результат кропотливого труда и глубоких знаний, которые мы с гордостью применяем в своей практике. Мы уверены, что высокое качество услуг невозможно без передовых аппаратов и лучших препаратов, которые мы используем.
                      </p>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Мы нацелены на то, чтобы удовлетворить потребности наших клиентов и превзойти их ожидания, создавая прочные отношения, основанные на доверии и взаимопонимании.
                      </p>
                    </div>

                    {/* Выделенное сообщение */}
                    <div className="mt-6 md:mt-8 p-5 md:p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border-l-4 border-blue-500">
                      <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed">
                        Благодарим вас за выбор нашей студии «Аура». Мы уверены, что вместе мы достигнем новых высот! Мы слышим ваши голоса, каждое мнение ценно для нас. Буду рада обратной связи в социальных сетях.
                      </p>
                    </div>

                    {/* Подпись */}
                    <div className="mt-6 md:mt-8 flex items-center gap-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent" />
                      <span className="text-slate-500 font-semibold italic">С. М. Химина</span>
                      <div className="flex-1 h-px bg-gradient-to-l from-slate-300 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА */}
          <aside className="hidden lg:block space-y-6 lg:sticky lg:top-40" style={{ animationDelay: '300ms' }}>
            {/* Специальные предложения */}
            <motion.div 
              ref={specialOffersRef}
              className="group relative"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ 
                opacity: isSpecialOffersInView ? 1 : 0, 
                filter: isSpecialOffersInView ? 'blur(0)' : 'blur(10px)'
              }}
              transition={{ 
                duration: 0.8, 
                ease: 'easeOut',
                delay: 0.3
              }}
            >
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-br from-blue-400/60 via-blue-300/40 to-blue-500/60 rounded-[2rem] opacity-50 group-hover:opacity-70 blur-2xl transition-all duration-1000"
                initial={{ opacity: 0 }}
                animate={{ opacity: isSpecialOffersInView ? 0.5 : 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.div 
                className="relative p-8 rounded-[2rem] bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl"
                initial={{ y: 20 }}
                animate={{ y: isSpecialOffersInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >

                <div className="flex items-center gap-3 mb-7">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center border border-blue-300/50 shadow-lg">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 uppercase tracking-wide leading-tight text-lg">
                      Специальные<br />предложения
                    </h3>
                    <div className={`h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-2 transition-all duration-700 ${isSpecialOffersInView ? 'w-48' : 'w-0'}`} />
                  </div>
                </div>

                <div className="space-y-4 mb-7">
                  {[
                    { title: 'Первое посещение', discount: '-50%', subtitle: 'от прайса', delay: '0ms' },
                    { title: 'Приведи подругу', discount: '-50%', subtitle: 'двоим', delay: '100ms' },
                    { title: 'День рождения', discount: '-% возраста', subtitle: '3 дня до и после', delay: '200ms' },
                    { title: 'Абонемент', discount: '-30%', subtitle: 'от 5 процедур', delay: '300ms' }
                  ].map((offer, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 border border-blue-200/60 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100/50 hover:border-blue-300 transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer group/offer"
                      style={{ transitionDelay: offer.delay }}
                    >
                      <div className="text-slate-800">
                        <div className="font-bold text-slate-700 mb-2.5 group-hover/offer:text-blue-700 transition-colors">{offer.title}</div>
                        <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent group-hover/offer:scale-110 transition-transform inline-block">{offer.discount}</div>
                        <div className="text-sm text-slate-500 mt-1.5">{offer.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/60 backdrop-blur-sm">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <span className="font-bold text-blue-700">⚠️ Важно:</span> Скидки не суммируются
                  </p>
                  <p className="text-slate-700 text-sm mt-3.5 leading-relaxed">
                    У нас можно приобрести <span className="font-bold text-slate-900 bg-white/60 px-2 py-0.5 rounded">сертификаты</span> на услуги студии
                  </p>
                </div>

                <button
                  onClick={() => setIsContactOpen(true)}
                  className="w-full mt-7 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 text-lg hover:scale-105 active:scale-95"
                >
                  ЗАПИСАТЬСЯ СЕЙЧАС
                </button>
              </motion.div>
            </motion.div>
          </aside>
        </section>

        {/* РАЗДЕЛЫ ДО ПОЧЕМУ МЫ */}
        <SpecialsRow items={specialsItems} />
        
        <ReviewsSection />
        <SpecialistsSection items={specialists} />
        <GiftCertificateSection onSubmit={() => setIsContactOpen(true)} />
        <AboutUsSection />

        {/* ПОЧЕМУ МЫ */}
        <section className="mt-8 sm:mt-17">
          <WhyUsSection />
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}