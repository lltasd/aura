import { useEffect, useState } from 'react'
import NewYearPromoModal from '../components/NewYearPromoModal'

import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import SpecialsRow from '../components/SpecialsRow'
import ConsultationFormSection from '../components/ConsultationFormSection'
import ReviewsSection from '../components/ReviewsSection'
import AboutUsSection from '../components/AboutUsSection'
import SpecialistsSection from '../components/SpecialistsSection'
import GiftCertificateSection from '../components/GiftCertificateSection'

import { specialists } from '../data/specialists'

import { ContactModal } from '../components/BodyContouring'
import { Link } from 'react-router-dom'
import { bodyProcedures } from '../data/bodyProcedures'
import { faceProcedures } from '../data/faceProcedures'
import { ArrowRight, Sparkles, Award, Shield, Users, Phone } from 'lucide-react'

export default function HomePage() {

  const images = ['/slider5.png', '/slider1.png', '/slider2.png', '/slider4.png']
  const [active, setActive] = useState(0)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [showPromo, setShowPromo] = useState(false)

  const [visibleServices, setVisibleServices] = useState(5)

  useEffect(() => {

    const id = setInterval(() => setActive((p) => (p + 1) % images.length), 3000)
    return () => clearInterval(id)
  }, [])

  // Show New Year promo once per day
  useEffect(() => {
    const key = 'ny_promo_seen_at'
    const last = localStorage.getItem(key)
    const now = Date.now()
    const dayMs = 24 * 60 * 60 * 1000
    if (!last || now - Number(last) > dayMs) {
      setShowPromo(true)
      localStorage.setItem(key, String(now))
    }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <Header onBookClick={() => setIsContactOpen(true)} />
      <NewYearPromoModal isOpen={showPromo} onClose={() => setShowPromo(false)} />

      <main className="container mx-auto px-4 pt-44 pb-16">
        <section className="grid lg:grid-cols-3 gap-8 items-start">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="lg:col-span-2 space-y-8">
            {/* Слайдер с описанием студии */}
            <div className="group relative animate-fade-in">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 rounded-[2rem] opacity-30 group-hover:opacity-50 blur-2xl transition-all duration-1000" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/80 bg-white backdrop-blur-xl">
                <div className="relative h-72 sm:h-96 md:h-[480px] bg-gradient-to-br from-blue-100/50 via-white to-slate-100/50 overflow-hidden">
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Студия красоты Аура"
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out ${i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
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
                  <div className="absolute top-8 right-8 bg-white/15 backdrop-blur-2xl rounded-2xl px-6 py-3 border border-white/40 shadow-2xl animate-float">
                    <div className="flex items-center gap-2.5 text-white">
                      <Sparkles className="w-5 h-5 animate-pulse" />
                      <span className="font-bold text-sm tracking-wide">Премиум качество</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-12 space-y-6 bg-gradient-to-br from-white via-blue-50/20 to-white">
                  <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-blue-500 to-slate-700 bg-clip-text text-transparent leading-tight tracking-tight">
                    СТУДИЯ КРАСОТЫ АУРА
                    <span className="block text-2xl md:text-3xl mt-3 bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">ДОНЕЦК ДНР</span>
                  </h2>

                  {/* Ключевые преимущества */}
                  <div className="grid sm:grid-cols-3 gap-4 py-2">
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

  {/* Блок о руководителе */}
      <div className="group relative animate-fade-in max-w-5xl w-full" style={{ animationDelay: '200ms' }}>
        <div className="relative rounded-[2rem] bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl overflow-hidden transition-shadow duration-500 hover:shadow-3xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start p-6 sm:p-10">
            <div className="space-y-4 self-start">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/svet.webp"
                  alt="Руководитель студии"
                  className="w-full h-[320px] sm:h-[420px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Светлана Михайловна Химина</h3>
                <p className="text-blue-600 font-bold mt-1">Руководитель студии красоты «Аура»</p>
                <a
                  href="tel:+79494154729"
                  className="mt-4 inline-flex items-center gap-3 text-slate-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:gap-4 group/phone"
                >
                  <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover/phone:shadow-xl group-hover/phone:scale-110 transition-all duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-lg">+7 (949) 415-47-29</span>
                </a>
              </div>
            </div>

                  <div className="space-y-4 text-slate-700 leading-relaxed self-start">
                    <p className="text-base sm:text-lg font-medium text-slate-800">Я горжусь тем, что на рынке современной косметологии есть такое качество услуг и высокий сервис, как в студии красоты «Аура». Ежедневно я лично проверяю, все ли подготовлено к рабочему дню, начиная от угощений для пациентов и заканчивая внешним видом персонала.</p>
                    <p>Каждое наше достижение — это результат кропотливого труда и глубоких знаний, которые мы с гордостью применяем в своей практике. Мы уверены, что высокое качество услуг невозможно без передовых аппаратов и лучших препаратов, которые мы используем.</p>
                    <p>Мы нацелены на то, чтобы удовлетворить потребности наших клиентов и превзойти их ожидания, создавая прочные отношения, основанные на доверии и взаимопонимании.</p>
                    <p className="text-blue-700 font-medium bg-blue-50/50 p-4 rounded-xl border border-blue-100">Благодарим вас за выбор нашей студии «Аура». Мы уверены, что вместе мы достигнем новых высот! Мы слышим ваши голоса, каждое мнение ценно для нас. Буду рада обратной связи в социальных сетях.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ПРАВАЯ КОЛОНКА */}
          <aside className="hidden lg:block space-y-6 lg:sticky lg:top-40 animate-fade-in" style={{ animationDelay: '300ms' }}>
            {/* Специальные предложения */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-400/60 via-blue-300/40 to-blue-500/60 rounded-[2rem] opacity-50 group-hover:opacity-70 blur-2xl transition-all duration-1000" />
              <div className="relative p-8 rounded-[2rem] bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl">
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
              </div>
            </div>
          </aside>
        </section>

        {/* УСЛУГИ */}
        <section className="mt-20">
          <div className="text-center mb-14 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-blue-500 to-slate-700 bg-clip-text text-transparent mb-4 tracking-tight">
              НАШИ УСЛУГИ
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Профессиональный уход за лицом и телом с использованием современного оборудования</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.slice(0, visibleServices).map((p, index) => (
              <article
                key={`${p.kind}-${p.slug}`}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 rounded-[2rem] opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700" />
                <div className="relative bg-white/95 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-700 border border-white/80 h-full flex flex-col hover:scale-[1.02]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                    
                    {/* Категория */}
                    <div className="absolute top-5 left-5 px-4 py-2.5 rounded-full bg-white/20 backdrop-blur-2xl border border-white/40 text-white text-xs font-bold uppercase tracking-wide shadow-lg flex items-center gap-2">
                      <img
                        src={p.kind === 'face' ? '/face.svg' : '/body.svg'}
                        alt={p.kind === 'face' ? 'face' : 'body'}
                        className="w-4 h-4 drop-shadow"
                        loading="lazy"
                      />
                      <span>{p.kind === 'face' ? 'Лицо' : 'Тело'}</span>
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col bg-gradient-to-br from-white via-blue-50/30 to-white">
                    <h4 className="text-xl font-black text-slate-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {p.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1 line-clamp-4">{p.excerpt}</p>
                    
                    <Link
                      to={p.kind === 'face' ? `/face-procedures/${p.slug}` : `/body-procedures/${p.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-500 group-hover:gap-3 hover:scale-105 active:scale-95"
                    >
                      <span>ПОДРОБНЕЕ</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {items.length > visibleServices && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setVisibleServices(items.length)}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold shadow-lg hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-[1.03]"
              >
                Смотреть больше
              </button>
            </div>
          )}
        </section>

        {/* ПОЧЕМУ МЫ */}
        
        
        {/* <SpecialsRow items={items.map(({ image, title }) => ({ image, title })).slice(0,6)} /> */}
        <ConsultationFormSection />
        <ReviewsSection />
        <AboutUsSection />
        <SpecialistsSection items={specialists.slice(0,6)} />
        <GiftCertificateSection onSubmit={() => setIsContactOpen(true)} />

<section className="mt-20 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/80 bg-white/95 backdrop-blur-xl p-8 sm:p-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 via-blue-500 to-slate-700 bg-clip-text text-transparent mb-8 tracking-tight leading-tight">
                ПОЧЕМУ НАШИ КЛИЕНТЫ ВЫБИРАЮТ СТУДИЮ КРАСОТЫ «АУРА»?
              </h3>
              
              <div className="space-y-5 text-slate-700 leading-relaxed text-lg">
                <p>Каждый клиент для нас ценен, поэтому мы разрабатываем индивидуальные программы ухода в зависимости от ваших пожеланий и потребностей. Наши квалифицированные специалисты проведут консультацию и подбор оптимальных процедур для достижения желаемых результатов.</p>
                <p>Студия красоты «Аура» в Донецке сочетает профессионализм, комфорт и современные технологии. Все наши специалисты - врачи с высшим медицинским образованием, которые регулярно проходят дополнительное обучение на курсах повышения квалификации и изучают самые передовые технологии.</p>
                <p>Мы используем самое современное оборудование для косметологии, которое на сегодня в Донецке есть только у нас. Используем только проверенные материалы, чтобы каждая процедура была безопасной и максимально эффективной.</p>
                <p>Здесь вы сможете не только ухаживать за своей внешностью, но и расслабиться в уютной атмосфере. Доверьте свою красоту специалистам студии «Аура». Мы поможем вам выглядеть великолепно каждый день!</p>
                <p className="text-slate-500 text-base pt-5 border-t border-slate-200/60">Информация на сайте не является публичной офертой и требует уточнения у менеджера.</p>
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