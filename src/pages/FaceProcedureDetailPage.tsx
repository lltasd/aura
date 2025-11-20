import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { faceProcedures } from '../data/faceProcedures'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingModal from '../components/BookingModal'

export default function FaceProcedureDetailPage() {
  const { slug } = useParams()
  const item = faceProcedures.find((p) => p.slug === slug)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  if (!item) return <Navigate to="/face-procedures" replace />

  return (
    <div className="min-h-screen bg-white">
      <Header onBookClick={() => setIsBookingModalOpen(true)} />

      {/* HERO */}
      <section className="relative pt-36 md:pt-44">
        <div className="absolute inset-0 -z-10">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link to="/face-procedures" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
              <span>←</span>
              <span>Все процедуры</span>
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-slate-800 bg-clip-text text-transparent leading-tight mt-5">
              {item.title}
            </h1>
            <p className="text-slate-600 text-lg md:text-xl mt-5 max-w-3xl">
              {item.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#overview" className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-bold shadow hover:shadow-md transition-all">Обзор</a>
              {item.details.gallery?.length ? (
                <a href="#gallery" className="px-4 py-2 rounded-full bg-white border text-slate-700 text-sm font-bold hover:bg-slate-50 transition-colors">Галерея</a>
              ) : null}
              <a href="#booking" className="px-4 py-2 rounded-full bg-white border text-slate-700 text-sm font-bold hover:bg-slate-50 transition-colors">Записаться</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <section id="overview" className="relative mt-10">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/70 bg-white/90 backdrop-blur-sm shadow-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-slate-400/10 rounded-3xl" />
              <div className="relative p-6 md:p-10">
                {item.slug === 'vacuum-face-cleaning' ? (
                  <div className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <img src="/first.webp" alt="Вакуумная чистка лица" className="w-full rounded-2xl border" />
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                          В современном мире, где красота и здоровье кожи лица играют важную роль, женщины прибегают к различным косметическим процедурам. Одной из них является вакуумная чистка лица.
                        </p>
                        <p>
                          Этот метод проверенный, относится к безопасному и бережному уходу по очищению кожи и улучшению ее состояния.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                      <h2 className="font-extrabold uppercase text-blue-700 mb-3">ЭФФЕКТ ПОСЛЕ ЧИСТКИ ВАКУУМОМ</h2>
                      <p className="text-gray-700">
                        После профессиональной вакуумной чистки лица кожа становится заметно чище, исчезают сальные пробки, черные точки, уменьшаются комедоны.
                      </p>
                      <p className="text-gray-700 mt-3">
                        Благодаря хорошему кровообращению кожа получает больше кислорода и питательных веществ, что замедляет процессы старения. Лицо выглядит ухоженным и здоровым.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h2 className="font-extrabold uppercase text-blue-700">ПЛЮСЫ ВАКУУМНОЙ ЧИСТКИ ЛИЦА</h2>
                      <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                        <li>
                          <span className="font-bold">Глубокая очистка.</span> С помощью аппарата удаляются загрязнения, которые невозможно устранить обычными методами.
                        </li>
                        <li>
                          <span className="font-bold">Безопасность.</span> При правильном проведении минимизирует риск повреждения кожных покровов и возникновения раздражений.
                        </li>
                        <li>
                          <span className="font-bold">Эффективность.</span> Результат заметен после первого похода к косметологу.
                        </li>
                        <li>
                          <span className="font-bold">Для любых возрастов.</span> Подходит как для молодых людей с проблемной кожей, так и для зрелых клиентов, желающих поддерживать кожу в хорошем состоянии.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h2 className="font-extrabold uppercase text-blue-700">КАК ПРОХОДИТ ВАКУУМНАЯ ЧИСТКА ЛИЦА?</h2>
                      <p className="text-gray-700">
                        Для проведения процедуры нужен вакуумный прибор для чистки лица, который создает отрицательное давление, тем самым вытягивая загрязнения из пор. Этот метод рекомендован для всех типов кожи, эффективен для устранения черных точек, расширенных пор.
                      </p>
                      <p className="text-gray-700">
                        Вакуумная чистка пор лица борется с тусклостью кожи, неровным тоном, отечностью, комедонами. Многие клиенты отмечают, что лицо после аппаратной процедуры становится более гладким, свежим и сияющим.
                      </p>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 space-y-3">
                      <h2 className="font-extrabold uppercase text-blue-700">РЕКОМЕНДАЦИИ КОСМЕТОЛОГА</h2>
                      <p className="text-gray-700">
                        Для получения максимального эффекта косметологи салона «Аура» в Донецке рекомендуют проводить вакуумную чистку лица регулярно, примерно раз в месяц. Также следует соблюдать несколько простых правил по уходу за кожей после процедуры:
                      </p>
                      <ul className="list-decimal pl-5 space-y-1 text-gray-800">
                        <li>Не применять агрессивных косметических средств в первые дни после сеанса.</li>
                        <li>Увлажнять кожу лица каждый день.</li>
                        <li>Использовать солнцезащитные средства для предотвращения пигментных пятен.</li>
                      </ul>
                    </div>

                    <div className="space-y-3 text-gray-700">
                      <p>
                        Студия красоты «Аура» предлагает большой набор услуг по уходу за кожей лица, включая ультразвуковую вакуумную чистку лица. У нас работают высококвалифицированные специалисты, которые используют лучшие аппараты, обеспечивая безопасное и эффективное проведение процедуры.
                      </p>
                      <p>
                        Цена на вакуумную чистку лица зависит от индивидуальных потребностей клиента и объема работы, однако мы предлагаем конкурентные цены и высокое качество услуг.
                      </p>
                    </div>
                  </div>
                ) : item.slug === 'ultrasonic-face-cleaning' ? (
                  <div className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <img src="/kab3.webp" alt="Ультразвуковая чистка лица" className="w-full rounded-2xl border" />
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                          В настоящее время ультразвуковая чистка кожи лица является одной из самых востребованных процедур в косметологии благодаря способности мягко и безболезненно очищать кожу от загрязнений, токсинов, лишнего сала и верхнего ороговевшего эпидермиса.
                        </p>
                        <p>
                          Специалисты рекомендуют ее из-за эффективности, безопасности и минимальной травматичности. Ультразвуковая чистка лица способствует стимуляции кровообращения и выработке коллагена, что приводит к омоложению и повышению упругости кожи.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                      <h2 className="font-extrabold uppercase text-blue-700 mb-3">ЭФФЕКТ ОТ УЛЬТРАЗВУКОВОЙ ЧИСТКИ ЛИЦА</h2>
                      <ul className="list-disc pl-5 space-y-1 text-gray-800">
                        <li>Улучшается цвет лица, уходит жирный блеск.</li>
                        <li>Исчезают чёрные точки и уменьшаются поры.</li>
                        <li>Повышается эластичность кожи.</li>
                        <li>Выравнивается рельеф кожных покровов.</li>
                        <li>Восстанавливается защитный слой.</li>
                      </ul>
                      <p className="text-gray-700 mt-3">
                        Ультразвуковая чистка лица — щадящая процедура, обеспечивающая очищение, увлажнение и омоложение кожи без болевых ощущений и долгого восстановления.
                      </p>
                    </div>

                    <div className="rounded-xl border border-rose-200 bg-rose-50 p-6">
                      <h2 className="font-extrabold uppercase text-rose-700 mb-3">ПРОТИВОПОКАЗАНИЯ</h2>
                      <p className="text-gray-700">Острые воспалительные процессы на коже, раны, повреждения, а также новообразования.</p>
                    </div>

                    <div className="space-y-3">
                      <h2 className="font-extrabold uppercase text-blue-700">КАК ПРОВОДИТСЯ ЧИСТКА УЛЬТРАЗВУКОМ?</h2>
                      <p className="text-gray-700">
                        В основе процедуры — высокочастотные волны, повышающие температуру верхнего слоя ткани на глубине около 0,2 мм.
                      </p>
                      <p className="text-gray-700 font-semibold">Чистка включает стадии:</p>
                      <ol className="list-decimal pl-5 space-y-1 text-gray-800">
                        <li>Очищение кожи: снятие макияжа с лица.</li>
                        <li>Нанесение проводящего геля.</li>
                        <li>Аппаратная чистка: обработка кожи скрабером.</li>
                        <li>Завершающий уход: успокаивающая маска или крем.</li>
                      </ol>
                      <p className="text-gray-700">Процесс занимает 60–90 минут и не вызывает дискомфорта. Количество сеансов определяет специалист.</p>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                      <h2 className="font-extrabold uppercase text-blue-700 mb-3">ПРЕИМУЩЕСТВА</h2>
                      <ul className="list-disc pl-5 space-y-1 text-gray-800">
                        <li>Безболезненность и отсутствие травмирования кожи.</li>
                        <li>Быстрый и заметный эффект.</li>
                        <li>Можно проводить в любое время года.</li>
                        <li>Подходит для разных типов кожи.</li>
                      </ul>
                      <p className="text-gray-600 mt-2">Недостаток: неглубокое воздействие — при выраженных загрязнениях лучше альтернативные методы.</p>
                    </div>

                    <p className="text-gray-700">В студии красоты «Аура» опытные косметологи выполняют ультразвуковую чистку с применением современных аппаратов и качественных средств. Доверьте свою кожу профессионалам!</p>
                  </div>
                ) : item.slug === 'peeling-face' ? (
                  <div className="space-y-10">
                    <img src="/pil.webp" alt="Пилинг" className="w-full rounded-2xl border" />

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                          Пилинг — это косметологическая процедура, направленная на обновление кожи путём удаления ороговевших клеток. Методика улучшает текстуру кожи, устраняет мелкие недостатки и стимулирует процессы регенерации.
                        </p>
                        <p>
                          Существует множество видов пилингов, каждый из которых имеет свои особенности и показания.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h2 className="font-extrabold uppercase text-blue-700">ВИДЫ ПИЛИНГОВ</h2>
                      <p className="text-gray-700">Пилинг делится по глубине воздействия:</p>
                      <ol className="list-decimal pl-5 space-y-1 text-gray-800">
                        <li><span className="font-bold">Поверхностный пилинг</span> — самый щадящий, для всех типов кожи. Освежает цвет лица и улучшает текстуру.</li>
                        <li><span className="font-bold">Срединный пилинг</span> — воздействует на верхние слои дермы, эффективен для устранения более выраженных проблем.</li>
                        <li><span className="font-bold">Глубокий пилинг</span> — наиболее агрессивный, требует длительного восстановления и даёт самые заметные результаты.</li>
                      </ol>
                      <p className="text-gray-700">Популярные виды: кислотный, энзимный, миндальный, химический, карбоновый.</p>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                      <h2 className="font-extrabold uppercase text-blue-700 mb-3">ПРЕИМУЩЕСТВА И ЭФФЕКТ</h2>
                      <ul className="list-disc pl-5 space-y-1 text-gray-800">
                        <li>Улучшение текстуры кожи и цвета лица.</li>
                        <li>Выравнивание тона, уменьшение пор и морщин.</li>
                        <li>Повышение упругости и гладкости.</li>
                      </ul>
                      <p className="text-gray-700 mt-2">Максимальный результат достигается курсом по рекомендации специалиста.</p>
                    </div>

                    <div className="space-y-3">
                      <h2 className="font-extrabold uppercase text-blue-700">РЕКОМЕНДАЦИИ КОСМЕТОЛОГА</h2>
                      <p className="text-gray-700">Перед началом сеансов необходима консультация. Специалист оценит состояние кожи и подберёт оптимальный тип пилинга и домашний уход.</p>
                      <p className="text-gray-700">Возможны кратковременные реакции кожи (покраснение, лёгкое шелушение), поэтому важно соблюдать рекомендации по уходу после процедуры.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-700 text-lg mb-8">{item.details.description}</p>
                    {item.details.gallery?.length ? (
                      <div className="grid gap-4 md:grid-cols-2">
                        {item.details.gallery.map((src, idx) => (
                          <img key={idx} src={src} alt={`${item.title} ${idx + 1}`} className="w-full rounded-2xl border" />
                        ))}
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            </div>
          </section>

          {item.details.gallery?.length ? (
            <section id="gallery" className="mt-14">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-5">Галерея</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {item.details.gallery.map((src, idx) => (
                  <div key={idx} className="group relative rounded-3xl overflow-hidden border shadow hover:shadow-xl transition-all duration-500">
                    <img src={src} alt={`${item.title} ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section id="booking" className="mt-16">
            <div className="relative rounded-3xl overflow-hidden border border-blue-200/60 bg-gradient-to-br from-blue-50 via-white to-blue-100/40 p-8 md:p-10 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-black text-slate-900">Готовы записаться?</h4>
                  <p className="text-slate-600 mt-1">Оставьте заявку, и мы подберём удобное время.</p>
                </div>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black shadow-lg hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-[1.03] active:scale-95"
                >
                  Записаться
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  )
}
