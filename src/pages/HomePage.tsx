import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ContactModal } from '../components/BodyContouring'
import { Link } from 'react-router-dom'
import { bodyProcedures } from '../data/bodyProcedures'
import { faceProcedures } from '../data/faceProcedures'
import { ArrowRight } from 'lucide-react'

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
          {/* ЛЕВАЯ КОЛОНКА - 2/3 ширины */}
          <div className="lg:col-span-2 space-y-6">
            {/* Слайдер с описанием студии */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/70 bg-white">
              <div className="relative h-72 sm:h-96 md:h-[420px] bg-slate-100">
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Студия красоты Аура"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === active ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <span key={i} className={`h-1.5 w-6 rounded-full ${i === active ? 'bg-white' : 'bg-white/50'}`} />
                  ))}
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-slate-800 bg-clip-text text-transparent leading-tight">СТУДИЯ КРАСОТЫ АУРА ДОНЕЦК ДНР</h2>
                <p className="text-slate-700">Студия красоты «Аура» в Донецке предлагает вам уникальный опыт профессионального ухода за кожей и телом. Вас порадует широкий спектр косметологических процедур, направленных на подчеркивание вашей индивидуальной красоты и сохранение молодости.</p>
                <p className="text-slate-700">Мы предоставляем косметологические услуги по уходу за лицом и телом, аппаратной коррекции фигуры и лазерной эпиляции на аппаратах премиум класса. Благодаря персонализированному подходу и современным методам, наши услуги обеспечивают максимальную эффективность и безопасность.</p>
                <p className="text-slate-700">Студия красоты «Аура» основана в 2018 году. У нас отличная репутация и уже два филиала в Донецке. Мы работаем с пациентами честно и открыто. Удобное расположение в центре города.</p>
                <p className="text-slate-700">Все помещения в нашем салоне соответствуют СанПиН. Мы применяем новейшие аппаратные методики. Наше оборудование сертифицировано в РФ, США (FDA), ЕС.</p>
                <p className="text-slate-700">Все сотрудники имеют медицинское образование. Наши специалисты сертифицированы и регулярно проходят переподготовку. Мы гарантируем строгое соблюдение норм стерильности/асептики и антисептики. Руководство студии полностью доверяет свою красоту специалистам и лично контролирует качество услуг и уровень сервиса.</p>
              </div>
            </div>

            {/* Блок о руководителе - СРАЗУ ПОД СЛАЙДЕРОМ */}
            <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <img src="/kab2.webp" alt="Руководитель студии" className="w-full h-56 object-cover" />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-black text-slate-900">Светлана Михайловна Химина</h3>
                <p className="text-slate-700">Руководитель студии красоты «Аура»</p>
                <p className="text-slate-700">+7(949)415-47-29</p>
                <p className="text-slate-700">Я горжусь тем, что на рынке современной косметологии есть такое качество услуг и высокий сервис, как в студии красоты «Аура». Ежедневно я лично проверяю, все ли подготовлено к рабочему дню, начиная от угощений для пациентов и заканчивая внешним видом персонала.</p>
                <p className="text-slate-700">Каждое наше достижение — это результат кропотливого труда и глубоких знаний, которые мы с гордостью применяем в своей практике. Мы уверены, что высокое качество услуг невозможно без передовых аппаратов и лучших препаратов, которые мы используем.</p>
                <p className="text-slate-700">Мы нацелены на то, чтобы удовлетворить потребности наших клиентов и превзойти их ожидания, создавая прочные отношения, основанные на доверии и взаимопонимании.</p>
                <p className="text-slate-700">Благодарим вас за выбор нашей студии «Аура». Мы уверены, что вместе мы достигнем новых высот! Мы слышим ваши голоса, каждое мнение ценно для нас. Буду рада обратной связи в соц сетях.</p>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА - 1/3 ширины */}
          <aside className="space-y-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-600/15 via-slate-200/20 to-blue-400/10 backdrop-blur-md border border-blue-300/40 shadow-xl">
              <h3 className="font-extrabold text-blue-800 mb-3 uppercase tracking-wide">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ ПО ЛАЗЕРНОЙ ЭПИЛЯЦИИ</h3>
              <ul className="space-y-2 text-slate-800 text-sm">
                <li>1-е посещение — <span className="font-bold">-50%</span> от прайса.</li>
                <li>Приведи подругу — <span className="font-bold">-50%</span> двоим.</li>
                <li>3 дня до и после дня рождения — <span className="font-bold">-% возраста</span> от прайса.</li>
                <li>Абонемент от 5 процедур — <span className="font-bold">-30%</span> от прайса.</li>
                <li className="text-slate-600">Скидки не суммируются.</li>
              </ul>
              <p className="mt-4 text-slate-800 text-sm">У нас можно приобрести сертификаты на услуги студии.</p>
            </div>
          </aside>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-black text-slate-900 uppercase mb-6">НАШИ УСЛУГИ</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((p) => (
              <article
                key={`${p.kind}-${p.slug}`}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-slate-400 rounded-3xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-slate-200/60 h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-95" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-lg font-black text-slate-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1 line-clamp-5">{p.excerpt}</p>
                    <div className="flex justify-end pt-2">
                      <Link
                        to={p.kind === 'face' ? `/face-procedures/${p.slug}` : `/body-procedures/${p.slug}`}
                        className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all"
                      >
                        <span>ПОДРОБНЕЕ</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-black text-slate-900 uppercase mb-3">ПОЧЕМУ НАШИ КЛИЕНТЫ ВЫБИРАЮТ СТУДИЮ КРАСОТЫ «АУРА»?</h3>
          <div className="space-y-3 text-slate-700">
            <p>Каждый клиент для нас ценен, поэтому мы разрабатываем индивидуальные программы ухода в зависимости от ваших пожеланий и потребностей. Наши квалифицированные специалисты проведут консультацию и подбор оптимальных процедур для достижения желаемых результатов.</p>
            <p>Студия красоты «Аура» в Донецке сочетает профессионализм, комфорт и современные технологии. Все наши специалисты - врачи с высшим медицинским образованием, которые регулярно проходят дополнительное обучение на курсах повышения квалификации и изучают самые передовые технологии.</p>
            <p>Мы используем самое современное оборудование для косметологии, которое на сегодня в Донецке есть только у нас. Используем только проверенные материалы, чтобы каждая процедура была безопасной и максимально эффективной.</p>
            <p>Здесь вы сможете не только ухаживать за своей внешностью, но и расслабиться в уютной атмосфере. Доверьте свою красоту специалистам студии «Аура». Мы поможем вам выглядеть великолепно каждый день!</p>
            <p className="text-slate-600">Информация на сайте не является публичной офертой и требует уточнения у менеджера.</p>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}