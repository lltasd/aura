import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ContactModal } from '../components/BodyContouring'
import { Link } from 'react-router-dom'
import { bodyProcedures } from '../data/bodyProcedures'
import { faceProcedures } from '../data/faceProcedures'
import { ArrowRight, Sparkles, Award, Shield, Users } from 'lucide-react'

export default function HomePage() {
  const images = ['/kab1.webp', '/kab2.webp', '/kab1.webp', '/kab2.webp']
  const [active, setActive] = useState(0)
  const [isContactOpen, setIsContactOpen] = useState(false)
  
  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % images.length), 3000)
    return () => clearInterval(id)
  }, [])

  const items = [
    ...faceProcedures.map((p) => ({ ...p, kind: 'face' as const })),
    ...bodyProcedures.map((p) => ({ ...p, kind: 'body' as const })),
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header onBookClick={() => setIsContactOpen(true)} />

      <main className="container mx-auto px-4 pt-44 pb-16">
        <section className="grid lg:grid-cols-3 gap-8 items-start">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="lg:col-span-2 space-y-8">
            {/* Слайдер с описанием студии */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-slate-400 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-700" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white">
                <div className="relative h-72 sm:h-96 md:h-[460px] bg-gradient-to-br from-slate-100 to-blue-50/30 overflow-hidden">
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Студия красоты Аура"
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
                  
                  {/* Индикаторы слайдера */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`h-2 rounded-full transition-all duration-500 ${
                          i === active ? 'bg-white w-10 shadow-lg' : 'bg-white/50 w-2 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Декоративный элемент */}
                  <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-xl rounded-2xl px-5 py-2.5 border border-white/30 shadow-xl">
                    <div className="flex items-center gap-2 text-white">
                      <Sparkles className="w-5 h-5" />
                      <span className="font-bold text-sm">Премиум качество</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-5 bg-gradient-to-br from-white via-white to-blue-50/20">
                  <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-slate-800 bg-clip-text text-transparent leading-tight tracking-tight">
                    СТУДИЯ КРАСОТЫ АУРА
                    <span className="block text-2xl md:text-3xl mt-2 opacity-80">ДОНЕЦК ДНР</span>
                  </h2>

                  {/* Ключевые преимущества */}
                  <div className="grid sm:grid-cols-3 gap-4 py-4">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm font-bold text-slate-800">Основана в 2018</div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm font-bold text-slate-800">FDA, ЕС, РФ</div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm font-bold text-slate-800">Два филиала</div>
                    </div>
                  </div>

                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p className="text-lg">Студия красоты «Аура» в Донецке предлагает вам уникальный опыт профессионального ухода за кожей и телом. Вас порадует широкий спектр косметологических процедур, направленных на подчеркивание вашей индивидуальной красоты и сохранение молодости.</p>
                    <p>Мы предоставляем косметологические услуги по уходу за лицом и телом, аппаратной коррекции фигуры и лазерной эпиляции на аппаратах премиум класса. Благодаря персонализированному подходу и современным методам, наши услуги обеспечивают максимальную эффективность и безопасность.</p>
                    <p>Все помещения в нашем салоне соответствуют СанПиН. Мы применяем новейшие аппаратные методики. Наше оборудование сертифицировано в РФ, США (FDA), ЕС.</p>
                    <p>Все сотрудники имеют медицинское образование. Наши специалисты сертифицированы и регулярно проходят переподготовку. Мы гарантируем строгое соблюдение норм стерильности, асептики и антисептики.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Блок о руководителе */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-slate-400 to-blue-400 rounded-3xl opacity-15 group-hover:opacity-30 blur-xl transition-all duration-700" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img src="/kab2.webp" alt="Руководитель студии" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                  
                  {/* Плавающая карточка с контактами */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-white/60 shadow-2xl">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">Светлана Михайловна Химина</h3>
                    <p className="text-blue-700 font-bold mb-2">Руководитель студии красоты «Аура»</p>
                    <a href="tel:+79494154729" className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 font-semibold transition-colors">
                      <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                        <span className="text-white text-sm">📞</span>
                      </span>
                      +7(949)415-47-29
                    </a>
                  </div>
                </div>

                <div className="p-8 space-y-4 text-slate-700 leading-relaxed bg-gradient-to-br from-white via-white to-slate-50">
                  <p className="text-lg font-medium text-slate-800">Я горжусь тем, что на рынке современной косметологии есть такое качество услуг и высокий сервис, как в студии красоты «Аура». Ежедневно я лично проверяю, все ли подготовлено к рабочему дню, начиная от угощений для пациентов и заканчивая внешним видом персонала.</p>
                  <p>Каждое наше достижение — это результат кропотливого труда и глубоких знаний, которые мы с гордостью применяем в своей практике. Мы уверены, что высокое качество услуг невозможно без передовых аппаратов и лучших препаратов, которые мы используем.</p>
                  <p>Мы нацелены на то, чтобы удовлетворить потребности наших клиентов и превзойти их ожидания, создавая прочные отношения, основанные на доверии и взаимопонимании.</p>
                  <p className="text-blue-800 font-medium">Благодарим вас за выбор нашей студии «Аура». Мы уверены, что вместе мы достигнем новых высот! Мы слышим ваши голоса, каждое мнение ценно для нас. Буду рада обратной связи в социальных сетях.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА */}
          <aside className="space-y-6 lg:sticky lg:top-40">
            {/* Специальные предложения */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-200/50 via-blue-100/40 to-transparent rounded-3xl opacity-60 group-hover:opacity-80 blur-xl transition-all duration-700" />
              <div className="relative p-8 rounded-3xl bg-white border border-blue-100 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-200">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-black text-slate-900 uppercase tracking-wide leading-tight text-lg">
                    Специальные<br />предложения
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-5 rounded-2xl bg-white border border-blue-100 hover:bg-blue-50/60 transition-colors">
                    <div className="text-slate-800">
                      <div className="font-bold text-slate-700 mb-2">Первое посещение</div>
                      <div className="text-3xl font-black text-blue-600">-50%</div>
                      <div className="text-sm text-slate-500 mt-1">от прайса</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-blue-100 hover:bg-blue-50/60 transition-colors">
                    <div className="text-slate-800">
                      <div className="font-bold text-slate-700 mb-2">Приведи подругу</div>
                      <div className="text-3xl font-black text-blue-600">-50%</div>
                      <div className="text-sm text-slate-500 mt-1">двоим</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-blue-100 hover:bg-blue-50/60 transition-colors">
                    <div className="text-slate-800">
                      <div className="font-bold text-slate-700 mb-2">День рождения</div>
                      <div className="text-3xl font-black text-blue-600">-% возраста</div>
                      <div className="text-sm text-slate-500 mt-1">3 дня до и после</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-blue-100 hover:bg-blue-50/60 transition-colors">
                    <div className="text-slate-800">
                      <div className="font-bold text-slate-700 mb-2">Абонемент</div>
                      <div className="text-3xl font-black text-blue-600">-30%</div>
                      <div className="text-sm text-slate-500 mt-1">от 5 процедур</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <span className="font-bold text-blue-700">⚠️ Важно:</span> Скидки не суммируются
                  </p>
                  <p className="text-slate-700 text-sm mt-3 leading-relaxed">
                    У нас можно приобрести <span className="font-bold text-slate-900">сертификаты</span> на услуги студии
                  </p>
                </div>

                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black rounded-2xl shadow-xl hover:shadow-2xl transition-all text-lg"
                >
                  ЗАПИСАТЬСЯ СЕЙЧАС
                </button>
              </div>
            </div>
          </aside>
        </section>

        {/* УСЛУГИ */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-slate-800 bg-clip-text text-transparent mb-3 tracking-tight">
              НАШИ УСЛУГИ
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Профессиональный уход за лицом и телом с использованием современного оборудования</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((p, index) => (
              <article
                key={`${p.kind}-${p.slug}`}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-slate-400 rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-700" />
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-700 border border-slate-200/60 h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />
                    
                    {/* Категория */}
                    <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white text-xs font-bold uppercase tracking-wide">
                      {p.kind === 'face' ? 'Лицо' : 'Тело'}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col bg-gradient-to-br from-white via-white to-slate-50/50">
                    <h4 className="text-xl font-black text-slate-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1 line-clamp-4">{p.excerpt}</p>
                    
                    <Link
                      to={p.kind === 'face' ? `/face-procedures/${p.slug}` : `/body-procedures/${p.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all group-hover:gap-3"
                    >
                      <span>ПОДРОБНЕЕ</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ПОЧЕМУ МЫ */}
        <section className="mt-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-gradient-to-br from-white via-white to-blue-50/30 p-8 sm:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-600/5 rounded-full blur-3xl" />
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight">
                ПОЧЕМУ НАШИ КЛИЕНТЫ ВЫБИРАЮТ СТУДИЮ КРАСОТЫ «АУРА»?
              </h3>
              
              <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
                <p>Каждый клиент для нас ценен, поэтому мы разрабатываем индивидуальные программы ухода в зависимости от ваших пожеланий и потребностей. Наши квалифицированные специалисты проведут консультацию и подбор оптимальных процедур для достижения желаемых результатов.</p>
                <p>Студия красоты «Аура» в Донецке сочетает профессионализм, комфорт и современные технологии. Все наши специалисты - врачи с высшим медицинским образованием, которые регулярно проходят дополнительное обучение на курсах повышения квалификации и изучают самые передовые технологии.</p>
                <p>Мы используем самое современное оборудование для косметологии, которое на сегодня в Донецке есть только у нас. Используем только проверенные материалы, чтобы каждая процедура была безопасной и максимально эффективной.</p>
                <p>Здесь вы сможете не только ухаживать за своей внешностью, но и расслабиться в уютной атмосфере. Доверьте свою красоту специалистам студии «Аура». Мы поможем вам выглядеть великолепно каждый день!</p>
                <p className="text-slate-500 text-base pt-4 border-t border-slate-200">Информация на сайте не является публичной офертой и требует уточнения у менеджера.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}