import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

import NewYearPromoModal from '../components/NewYearPromoModal'

import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ConsultationFormSection from '../components/ConsultationFormSection'
import ReviewsSection from '../components/ReviewsSection'
import AboutUsSection from '../components/AboutUsSection'
import SpecialistsSection from '../components/SpecialistsSection'
import GiftCertificateSection from '../components/GiftCertificateSection'
import SpecialsRow from '../components/SpecialsRow'

import { specialists } from '../data/specialists'

import { ContactModal } from '../components/BodyContouring'
import { Link } from 'react-router-dom'
import { bodyProcedures } from '../data/bodyProcedures'
import { faceProcedures } from '../data/faceProcedures'
import { ArrowRight, Sparkles, Award, Shield, Users, Phone } from 'lucide-react'
import { specials } from '../data/specials'
import { useTypewriter } from '../hooks/useTypewriter'

export default function HomePage() {

  const images = ['/slider5.png', '/slider1.png', '/slider2.png']
  const [active, setActive] = useState(0)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [showPromo, setShowPromo] = useState(false)

  const [visibleServices, setVisibleServices] = useState(5)

  const specialsItems = Array.from(
    new Map(
      specials.map((s) => [s.title, { image: s.image, title: s.title } as { image: string; title: string }])
    ).values()
  )

  const directorBlockRef = useRef<HTMLDivElement>(null)
  const [isDirectorInView, setIsDirectorInView] = useState(false)
  const [isSpecialOffersInView, setIsSpecialOffersInView] = useState(false)
  
  const servicesTitleRef = useRef<HTMLDivElement>(null)
  
  // Ref for special offers section
  const specialOffersRef = useRef<HTMLDivElement>(null)
  
  // Check if director block is in view
  useEffect(() => {
    const checkIfInView = () => {
      if (directorBlockRef.current) {
        const rect = directorBlockRef.current.getBoundingClientRect()
        setIsDirectorInView(rect.top < window.innerHeight * 0.8 && rect.bottom > 0)
      }
      
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

  const typedDirectorName = useTypewriter('Светлана Михайловна\nХимина', {
    speed: 70,
    startDelay: 300,
    enabled: isDirectorInView,
  })

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
    } catch {}
  }, [])

  useEffect(() => {
    const updateVisible = () => {
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches // lg breakpoint
      setVisibleServices(isDesktop ? 9 : 5)
    }
    updateVisible()
    window.addEventListener('resize', updateVisible)
    return () => window.removeEventListener('resize', updateVisible)
  }, [])

  const items = [
    ...faceProcedures.map((p) => ({ ...p, kind: 'face' as const })),
    ...bodyProcedures.map((p) => ({ ...p, kind: 'body' as const })),
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <Header onBookClick={() => setIsContactOpen(true)} />
      <NewYearPromoModal isOpen={showPromo} onClose={() => setShowPromo(false)} />

      <main className="container mx-auto px-4 pt-36 sm:pt-44 pb-16">
        <section className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-start">

          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="lg:col-span-2 space-y-8">
            {/* Слайдер с описанием студии */}
            <div className="group relative animate-fade-in">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 rounded-[2rem] opacity-20 sm:opacity-30 group-hover:opacity-40 sm:group-hover:opacity-50 blur-md sm:blur-2xl transition-all duration-1000" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg sm:shadow-2xl border border-slate-200 bg-white">

                <div className="relative h-72 sm:h-96 md:h-[480px] bg-gradient-to-br from-blue-100/50 via-white to-slate-100/50 overflow-hidden">
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
                      className={`absolute inset-0 w-full h-full object-cover transition-all sm:duration-[1500ms] duration-500 ease-in-out ${i === active ? 'opacity-100 scale-100' : 'opacity-0 sm:scale-110 scale-105'}`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Индикаторы слайдера */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`h-2.5 rounded-full transition-all duration-500 backdrop-blur-sm ${
                          i === active
                            ? 'bg-white w-12 shadow-lg shadow-white/50'
                            : 'bg-white/60 w-2.5 hover:bg-white/90 hover:w-8'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Декоративный элемент */}
                  <div className="absolute top-8 right-8 bg-white/10 sm:bg-white/15 backdrop-blur-0 sm:backdrop-blur-2xl rounded-2xl px-6 py-3 border border-white/40 shadow-lg sm:shadow-2xl sm:animate-float">
                    <div className="flex items-center gap-2.5 text-white">
                      <Sparkles className="w-5 h-5 sm:animate-pulse" />
                      <span className="font-bold text-sm tracking-wide">Премиум качество</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-12 space-y-6 bg-gradient-to-br from-white via-blue-50/20 to-white">
                  <h2 className="text-3xl md:text-5xl font-black font-display bg-gradient-to-r from-blue-600 to-blue-700 sm:via-blue-500 sm:to-slate-700 bg-clip-text text-transparent leading-tight tracking-tight">
                    СТУДИЯ КРАСОТЫ АУРА
                    <span className="block text-2xl md:text-3xl mt-3 font-display font-black bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">ДОНЕЦК ДНР</span>
                  </h2>

                  {/* Ключевые преимущества */}
                  <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 py-2">

                    {[
                      { icon: Award, text: 'Основана в 2018', delay: '0ms' },
                      { icon: Shield, text: 'FDA, ЕС, РФ', delay: '100ms' },
                      { icon: Users, text: 'Два филиала', delay: '200ms' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200/50 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 group/card"
                        style={{ transitionDelay: item.delay }}
                      >
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center border border-blue-300/50 shadow-lg group-hover/card:scale-110 transition-transform duration-500">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-sm font-bold text-slate-800">{item.text}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-5 text-slate-700 leading-relaxed">
                    <p className="text-lg font-medium">Студия красоты «Аура» в Донецке предлагает вам уникальный опыт профессионального ухода за кожей и телом. Вас порадует широкий спектр косметологических процедур, направленных на подчеркивание вашей индивидуальной красоты и сохранение молодости.</p>
                    <p>Мы предоставляем косметологические услуги по уходу за лицом и телом, аппаратной коррекции фигуры и лазерной эпиляции на аппаратах премиум класса. Благодаря персонализированному подходу и современным методам, наши услуги обеспечивают максимальную эффективность и безопасность.</p>
                    <p>Все помещения в нашем салоне соответствуют СанПиН. Мы применяем новейшие аппаратные методики. Наше оборудование сертифицировано в РФ, США (FDA), ЕС.</p>
                    <p>Все сотрудники имеют медицинское образование. Наши специалисты сертифицированы и регулярно проходят переподготовку. Мы гарантируем строгое соблюдение норм стерильности, асептики и антисептики.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* БЛОК О РУКОВОДИТЕЛЕ - ОБНОВЛЕННЫЙ */}
            <div className="group relative animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 rounded-[2rem] opacity-30 group-hover:opacity-50 blur-2xl transition-all duration-1000" />
              <div className="relative bg-white rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-slate-200">

                <div className="grid md:grid-cols-5 gap-0">
                  {/* Левая колонка с фото */}
                  <div className="md:col-span-2 relative">
                    <div className="h-full min-h-[500px] md:min-h-[600px] relative overflow-hidden">
                      <img
                        src="/svet.webp"
                        alt="Светлана Михайловна Химина"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                      {/* Информация поверх фото */}
                      <div
                        ref={directorBlockRef}
                        className="absolute bottom-0 left-0 right-0 p-8 text-white"
                      >
                        <h3 className="text-3xl font-black mb-2 font-display">
                          {typedDirectorName
                            ? typedDirectorName.split('\n').map((line, idx) => (
                                <span key={idx} className="block">
                                  {line}
                                </span>
                              ))
                            : (
                                <>
                                  <span className="block">Светлана Михайловна</span>
                                  <span className="block">Химина</span>
                                </>
                              )}
                        </h3>

                        <p className="text-blue-200 font-semibold text-lg mb-4">
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
                  <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                    {/* Иконка статуса */}
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg mb-6">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Основная цитата */}
                      <div className="relative mb-8">
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
                        <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed pl-6 italic relative">
                          Я горжусь тем, что на рынке современной косметологии есть такое качество услуг и высокий сервис, как в студии красоты «Аура».
                        </p>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed mb-4">
                        Каждое наше достижение — это результат кропотливого труда и глубоких знаний, которые мы с гордостью применяем в своей практике. Мы уверены, что высокое качество услуг невозможно без передовых аппаратов и лучших препаратов, которые мы используем.
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        Мы нацелены на то, чтобы удовлетворить потребности наших клиентов и превзойти их ожидания, создавая прочные отношения, основанные на доверии и взаимопонимании.
                      </p>
                    </div>

                    {/* Выделенное сообщение */}
                    <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border-l-4 border-blue-500">
                      <p className="text-slate-800 font-semibold leading-relaxed">
                        Благодарим вас за выбор нашей студии «Аура». Мы уверены, что вместе мы достигнем новых высот! Мы слышим ваши голоса, каждое мнение ценно для нас. Буду рада обратной связи в социальных сетях.
                      </p>
                    </div>

                    {/* Подпись */}
                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent"></div>
                      <span className="text-slate-500 font-semibold italic">С. М. Химина</span>
                      <div className="flex-1 h-px bg-gradient-to-l from-slate-300 to-transparent"></div>
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
                    <Sparkles className="w-6 h-6 text-blue-600 animate-pulse" />
                  </div>
                  <h3 className="font-black text-slate-900 uppercase tracking-wide leading-tight text-lg">
                    Специальные<br />предложения
                  </h3>
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

        {/* УСЛУГИ */}
        <section className="mt-20" ref={servicesTitleRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-14 will-change-transform"
          >
            <motion.h3 
              className="text-4xl md:text-5xl font-black font-display bg-gradient-to-r from-blue-600 to-blue-700 sm:via-blue-500 sm:to-slate-700 bg-clip-text text-transparent mb-4 tracking-tight"
            >
              НАШИ УСЛУГИ
            </motion.h3>

            <motion.p 
              className="text-slate-600 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Профессиональный уход за лицом и телом с использованием современного оборудования
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {items.slice(0, visibleServices).map((p, index) => {
              // Calculate row and column for staggered animation
              const row = Math.floor(index / 3);
              const col = index % 3;
              const delay = 0.1 * col + 0.2 * row;
              
              return (
                <motion.article
                  key={`${p.kind}-${p.slug}`}
                  className="group relative"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      delay: delay,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 rounded-[2rem] opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700" />
                  <div className="relative bg-white/95 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-lg sm:shadow-xl group-hover:shadow-2xl transition-all duration-700 border border-slate-200 h-full flex flex-col sm:hover:scale-[1.02]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover transition-all duration-700 sm:duration-1000 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                      {/* Категория */}
                      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white/20 backdrop-blur-md sm:backdrop-blur-2xl border border-white/40 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wide shadow-lg flex items-center gap-2">
                        <img
                          src={p.kind === 'face' ? '/face.svg' : '/body.svg'}
                          alt={p.kind === 'face' ? 'face' : 'body'}
                          className="w-4 h-4 drop-shadow"
                          loading="lazy"
                        />
                        <span>{p.kind === 'face' ? 'Лицо' : 'Тело'}</span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-7 flex-1 flex flex-col bg-gradient-to-br from-white via-blue-50/30 to-white">
                      <h4 className="text-lg sm:text-xl font-black text-slate-800 mb-2 sm:mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                        {p.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6 flex-1 line-clamp-4">{p.excerpt}</p>

                      <Link
                        to={p.kind === 'face' ? `/face-procedures/${p.slug}` : `/body-procedures/${p.slug}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-500 group-hover:gap-3 sm:hover:scale-105 active:scale-95"
                      >
                        <span>ПОДРОБНЕЕ</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {items.length > visibleServices && (
            <div className="flex justify-center mt-8 sm:mt-10">
              <Link
                to="/procedures"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold shadow-lg hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 active:scale-95 sm:hover:scale-[1.03]"
              >
                Смотреть больше
              </Link>
            </div>
          )}
        </section>

        {/* РАЗДЕЛЫ ДО ПОЧЕМУ МЫ */}
        <AboutUsSection />
        <SpecialistsSection items={specialists} />
        <GiftCertificateSection onSubmit={() => setIsContactOpen(true)} />
        <ReviewsSection />

        <ConsultationFormSection />

        <SpecialsRow items={specialsItems} />

        {/* ПОЧЕМУ МЫ */}
        <section className="mt-20 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/80 bg-white/95 backdrop-blur-xl p-8 sm:p-12">

            <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="hidden sm:block absolute bottom-0 left-0 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-700 sm:via-blue-500 sm:to-slate-700 bg-clip-text text-transparent mb-8 tracking-tight leading-tight">
                ПОЧЕМУ НАШИ КЛИЕНТЫ ВЫБИРАЮТ СТУДИЮ КРАСОТЫ «АУРА»?
              </h3>
              
              <div className="space-y-5 text-slate-700 leading-relaxed text-lg">
                <p>Каждый клиент для нас ценен, поэтому мы разрабатываем индивидуальные программы ухода в зависимости от ваших пожеланий и потребностей. Наши квалифицированные специалисты проведут консультацию и подбор оптимальных процедур для достижения желаемых результатов.</p>
                <p>Студия красоты «Аура» в Донецке сочетает профессионализм, комфорт и современные технологии. Все наши специалисты - врачи с высшим медицинским образованием, которые регулярно проходят дополнительное обучение на курсах повышения квалификации и изучают самые передовые технологии.</p>
                <p>Мы используем самое современное оборудование для косметологии, которое на сегодня в Донецке есть только у нас. Используем только проверенные материалы, чтобы каждая процедура была безопасной и максимально эффективной.</p>
                <p>Здесь вы сможете не только ухаживать за своей внешностью, но и расслабиться в уютной атмосфере. Доверьте свою красоту специалистам студии «Аура». Мы поможем вам выглядеть великолепно каждый день!</p>
              </div>
            </div>
          </div>
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