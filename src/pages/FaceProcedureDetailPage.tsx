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
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/30 to-white">
      <Header onBookClick={() => setIsBookingModalOpen(true)} variant="dark" />

      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link to="/face-procedures" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-all hover:gap-3 mb-8">
              <span className="text-xl">←</span>
              <span>Все процедуры</span>
            </Link>
            <div className="relative">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-600 via-blue-800 to-slate-900 bg-clip-text text-transparent leading-[1.1] mb-6">
                {item.title}
              </h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-6" />
            </div>
            <p className="text-slate-600 text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
              {item.excerpt}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#overview" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:scale-105 transition-all">
                Обзор
              </a>
              {item.details.gallery?.length ? (
                <a href="#gallery" className="px-6 py-3 rounded-2xl bg-white/80 backdrop-blur border-2 border-slate-200 text-slate-700 font-bold hover:bg-white hover:border-blue-300 hover:scale-105 transition-all">
                  Галерея
                </a>
              ) : null}
              <a href="#booking" className="px-6 py-3 rounded-2xl bg-white/80 backdrop-blur border-2 border-slate-200 text-slate-700 font-bold hover:bg-white hover:border-blue-300 hover:scale-105 transition-all">
                Записаться
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="container mx-auto px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <section id="overview" className="relative mt-4">
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl shadow-slate-200/50 border border-slate-100">
              <div className="relative p-8 md:p-12 lg:p-16">
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
                      <img src="/ffsa.webp" alt="Ультразвуковая чистка лица" className="w-full rounded-2xl border" />
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
                ) : item.slug === 'alginate-masks' ? (
                  <div className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <img src={item.image} alt={item.title} className="w-full rounded-2xl border" />
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <h2 className="text-2xl font-black text-slate-900">Альгинатные маски: профессиональный уход для здоровья и красоты кожи</h2>
                        <p>
                          Альгинатные маски — уникальные средства на основе натуральных компонентов морского происхождения. Они обеспечивают интенсивное увлажнение и комплексно улучшают состояние кожи: укрепляют сосуды, уменьшают капиллярную сетку, снимают раздражение и отёчность, дарят свежесть и упругость.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 space-y-3">
                      <h3 className="font-extrabold uppercase text-blue-700">Почему альгинатные маски так популярны?</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-800">
                        <li><span className="font-bold">Натуральный состав.</span> Альгинат из бурых водорослей удерживает молекулы воды, создавая эффект глубокого увлажнения.</li>
                        <li><span className="font-bold">Мгновенный результат.</span> Уже после первой процедуры кожа более свежая и подтянутая.</li>
                        <li><span className="font-bold">Комплексное действие.</span> Укрепляет сосуды, снимает раздражение, уменьшает отёки, улучшает тонус.</li>
                        <li><span className="font-bold">Универсальность.</span> Подходит для разных типов кожи, включая сухую и чувствительную.</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-extrabold uppercase text-blue-700">Состав альгинатной маски</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-800">
                        <li><span className="font-bold">Морские водоросли.</span> Источник альгината, минералов и микроэлементов. Стимулируют обмен и восстановление.</li>
                        <li><span className="font-bold">Диатомовая земля.</span> Богата кремнием, укрепляет кожу и выравнивает текстуру.</li>
                        <li><span className="font-bold">Экстракт черники.</span> Антиоксидантная защита, укрепление сосудов и микроциркуляции.</li>
                        <li><span className="font-bold">Витамин C.</span> Сияние, осветление и стимуляция синтеза коллагена.</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                        <h3 className="font-extrabold uppercase text-blue-700 mb-3">Эффекты от применения</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-800">
                          <li>Глубокое увлажнение, мягкость и комфорт.</li>
                          <li>Снижение выраженности сосудистой сетки.</li>
                          <li>Свежий, отдохнувший вид кожи.</li>
                          <li>Уменьшение раздражений и покраснений.</li>
                          <li>Повышение тонуса и упругости, легкий лифтинг.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                        <h3 className="font-extrabold uppercase text-emerald-700 mb-3">Кому подходит</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-800">
                          <li>Сухая кожа, нуждающаяся в интенсивном увлажнении.</li>
                          <li>Склонность к куперозу и видимая сосудистая сетка.</li>
                          <li>Отёки, усталость, тусклый цвет лица.</li>
                          <li>Потребность в лифтинг-эффекте без инвазивных процедур.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-extrabold uppercase text-blue-700">Как проходит процедура</h3>
                      <ol className="list-decimal pl-5 space-y-1 text-gray-800">
                        <li>Очищение кожи от макияжа и загрязнений.</li>
                        <li>Смешивание порошка альгината с водой/активатором до пасты.</li>
                        <li>Нанесение по всему лицу, включая зоны вокруг глаз и губ.</li>
                        <li>Формирование эластичной плёнки по мере застывания.</li>
                        <li>Снятие маски единым слоем через 20–30 минут.</li>
                        <li>Завершающий уход: сыворотка или крем.</li>
                      </ol>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                      <h3 className="font-extrabold uppercase text-blue-700 mb-2">Результат после курса</h3>
                      <p className="text-gray-700">Кожа становится более упругой, увлажнённой и сияющей, сосудистая сетка менее заметна, внешний вид здоровый и ухоженный.</p>
                    </div>
                  </div>
                ) : item.slug === 'rf-microneedling' ? (
                  <div className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <img src={item.image} alt={item.title} className="w-full rounded-2xl border" />
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <h2 className="text-2xl font-black text-slate-900">Микроигольчатый РФ-лифтинг: инновационное омоложение кожи</h2>
                        <p>
                          Микроигольчатый радиочастотный лифтинг сочетает воздействие радиоволн и микроигольчатой терапии, стимулируя регенерацию и выработку коллагена и эластина. Кожа становится более упругой, гладкой и молодой, а эффект сохраняется длительно.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 space-y-3">
                      <h3 className="font-extrabold uppercase text-blue-700">Как работает методика</h3>
                      <p className="text-gray-700">Тончайшие иглы проникают на глубину до 4 мм и проводят радиочастотные импульсы в дерму, активируя неоколлагенез, микроциркуляцию и обновление клеток.</p>
                    </div>

                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                      <h3 className="font-extrabold uppercase text-emerald-700 mb-3">Преимущества</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-800">
                        <li>Глубокое омоложение, повышение плотности и упругости.</li>
                        <li>Коррекция морщин, рубцов и постакне, сужение пор.</li>
                        <li>Выраженный лифтинг-эффект и чёткие контуры.</li>
                        <li>Короткая реабилитация: покраснение 1–3 дня.</li>
                        <li>Длительный результат до 1,5 лет.</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-extrabold uppercase text-blue-700">Как проходит сеанс</h3>
                      <ol className="list-decimal pl-5 space-y-1 text-gray-800">
                        <li>Очищение кожи.</li>
                        <li>Анестезия гелем для комфорта.</li>
                        <li>Воздействие аппаратом: микроиглы передают радиочастотные импульсы.</li>
                        <li>Завершающий уход с успокаивающими средствами.</li>
                      </ol>
                      <p className="text-gray-700">Длительность: 40–60 минут.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="rounded-xl border border-rose-200 bg-rose-50 p-6">
                        <h3 className="font-extrabold uppercase text-rose-700 mb-3">Показания</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-800">
                          <li>Возрастные изменения, снижение тонуса.</li>
                          <li>Неровный рельеф и тусклый цвет лица.</li>
                          <li>Постакне и рубцы.</li>
                          <li>Расширенные поры и первые признаки старения.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl border border-rose-200 bg-rose-50 p-6">
                        <h3 className="font-extrabold uppercase text-rose-700 mb-3">Противопоказания</h3>
                        <p className="text-gray-700">Беременность, онкологические заболевания, острые воспалительные процессы и ряд хронических патологий. Обязательная консультация специалиста.</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 space-y-2">
                      <h3 className="font-extrabold uppercase text-blue-700">Почему «Аура»</h3>
                      <p className="text-gray-700">Студия красоты «Аура» в Донецке работает на современном оборудовании, с опытными косметологами и индивидуальным подходом — безопасность и высокий результат.</p>
                      <p className="text-gray-700 font-semibold">Результат</p>
                      <p className="text-gray-700">После курса кожа подтянутая и упругая, уменьшаются морщины и рубцы, выравнивается тон. Эффект — до 1,5 лет.</p>
                    </div>
                  </div>
                ) : item.slug === 'smas-lifting' ? (
                  <div className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <img src={item.image} alt={item.title} className="w-full rounded-2xl border" />
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <h2 className="text-2xl font-black text-slate-900">СМАС-лифтинг: инновационная технология омоложения</h2>
                        <p>
                          Нейнвазивное воздействие на поверхностную мышечно-апоневротическую систему (SMAS) обеспечивает стойкий лифтинг без разрезов и длительного восстановления. Первые изменения заметны сразу, максимальный эффект — в течение нескольких месяцев.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                      <h3 className="font-extrabold uppercase text-blue-700 mb-3">Как проходит процедура</h3>
                      <p className="text-gray-700">Сфокусированный ультразвук проникает на глубину 1,5–13 мм и нагревает ткани до 65–70 °C, вызывая сокращение волокон и запуск регенерации: активируется синтез коллагена и эластина.</p>
                      <p className="text-gray-700 mt-2">Длительность — 40–90 минут в зависимости от зоны. Дискомфорт минимальный, без покраснений и отёков.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                        <h3 className="font-extrabold uppercase text-emerald-700 mb-3">Преимущества</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-800">
                          <li>Глубокий лифтинг SMAS-слоя.</li>
                          <li>Коррекция морщин, носогубных складок, второго подбородка.</li>
                          <li>Выраженное улучшение контуров лица.</li>
                          <li>Безопасность, без анестезии и разрезов.</li>
                          <li>Длительный результат до 2 лет.</li>
                          <li>Естественность без эффекта «маски».</li>
                        </ul>
                      </div>
                      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                        <h3 className="font-extrabold uppercase text-blue-700 mb-3">Стоимость и рекомендации</h3>
                        <p className="text-gray-700">Цена зависит от зоны (например, нижняя треть лица дешевле комплекса лицо+шея). Рекомендуется не чаще 1 раза в год, с учётом индивидуальных особенностей. Оптимальную программу подберёт специалист.</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                      <h3 className="font-extrabold uppercase text-blue-700 mb-3">Результаты</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-800">
                        <li>Подтянутые щёки и улучшенный овал лица.</li>
                        <li>Сокращение носогубных складок.</li>
                        <li>Устранение второго подбородка.</li>
                        <li>Повышение плотности и упругости кожи.</li>
                      </ul>
                      <p className="text-gray-700 mt-2">Процедура в «Ауре» выполняется на современном оборудовании опытными косметологами с индивидуальным подходом.</p>
                    </div>
                  </div>
                ) : item.slug === 'indiba-face-lifting' ? (
                  <div className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <img src={item.image} alt={item.title} className="w-full rounded-2xl border" />
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <h2 className="text-2xl font-black text-slate-900">Аппаратный лифтинг лица INDIBA</h2>
                        <p>
                          Радиочастотная терапия INDIBA (система Proionic®) бережно прогревает ткани, улучшает микроциркуляцию и лимфоток, стимулирует выработку коллагена. Процедура комфортная, безболезненная и подходит для любого типа кожи.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                      <h3 className="font-extrabold uppercase text-blue-700 mb-3">Результаты и эффекты</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-800">
                        <li>Восстановление чёткого овала лица.</li>
                        <li>Уменьшение носогубных складок и мимических морщин.</li>
                        <li>Снижение объёма жировой ткани в зоне подбородка.</li>
                        <li>Свежий, ровный тон и улучшение текстуры кожи.</li>
                        <li>Уменьшение отёков и тёмных кругов под глазами.</li>
                      </ul>
                      <p className="text-gray-700 mt-2">Курсовой подход (5–10 сеансов) усиливает и закрепляет эффект.</p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-extrabold uppercase text-blue-700">Как проходит процедура</h3>
                      <ol className="list-decimal pl-5 space-y-1 text-gray-800">
                        <li>Очищение кожи и нанесение проводящего геля.</li>
                        <li>Проработка зон лица аппликатором INDIBA по траектории.</li>
                        <li>Комфортные ощущения приятного тепла, без боли.</li>
                        <li>Улучшение микроциркуляции и лимфотока, стимуляция коллагена и эластина.</li>
                      </ol>
                      <p className="text-gray-700">Длительность — 30–60 минут. Рекомендуемый курс — 5–10 процедур.</p>
                    </div>

                    <div className="rounded-xl border border-rose-200 bg-rose-50 p-6">
                      <h3 className="font-extrabold uppercase text-rose-700 mb-3">Противопоказания</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-800">
                        <li>Беременность.</li>
                        <li>Острые воспалительные процессы на лице.</li>
                        <li>Онкологические заболевания.</li>
                        <li>Наличие кардиостимулятора.</li>
                        <li>Аутоиммунные заболевания кожи.</li>
                        <li>Активный герпес.</li>
                      </ul>
                      <p className="text-gray-700 mt-2">Перед началом курса необходима консультация специалиста студии красоты.</p>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                      <h3 className="font-extrabold uppercase text-blue-700 mb-2">Почему «Аура»</h3>
                      <p className="text-gray-700">Мы используем сертифицированное оборудование INDIBA и подбираем индивидуальные протоколы. Качественная процедура премиум-класса по разумной стоимости.</p>
                    </div>
                  </div>
                ) : item.slug === 'laser-pigmentation-removal' ? (
                  <div className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <img src={item.image} alt={item.title} className="w-full rounded-2xl border" />
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <h2 className="text-2xl font-black text-slate-900">Удаление пигментации лазером</h2>
                        <p>
                          Удаление пигментации — актуальная процедура для избавления от пятен, вызванных возрастом, солнцем и гормональными изменениями. Лазер — эффективный и востребованный способ коррекции с быстрыми результатами.
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                        <h3 className="font-extrabold uppercase text-blue-700 mb-3">Плюсы лазерного удаления</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-800">
                          <li><span className="font-bold">Быстрый и безопасный эффект.</span> Точечное воздействие на пигмент без повреждения окружающих тканей. Видимый результат за несколько сеансов.</li>
                          <li><span className="font-bold">Комфорт и без реабилитации.</span> Ощущение лёгкого покалывания, без длительного восстановления.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                        <h3 className="font-extrabold uppercase text-emerald-700 mb-3">Результаты</h3>
                        <p className="text-gray-700">Пятна светлеют и исчезают, внешний вид заметно улучшается. Обычно требуется 1–3 сеанса в зависимости от глубины и типа пигментации.</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-extrabold uppercase text-blue-700">Как проходит процедура</h3>
                      <ol className="list-decimal pl-5 space-y-1 text-gray-800">
                        <li>Осмотр косметолога и план лечения.</li>
                        <li>Очищение и дезинфекция кожи.</li>
                        <li>Лазерное воздействие: разрушение меланина в пятне.</li>
                        <li>Завершение: успокаивающий крем для снижения покраснения.</li>
                      </ol>
                      <p className="text-gray-700">Первые результаты видны через несколько дней после процедуры.</p>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                      <h3 className="font-extrabold uppercase text-blue-700 mb-2">Рекомендации косметолога</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-800">
                        <li>Избегать солнца и использовать SPF.</li>
                        <li>Не применять агрессивную косметику и скрабы.</li>
                        <li>Следовать рекомендациям специалиста.</li>
                      </ul>
                      <p className="text-gray-700 mt-2">Стоимость зависит от типа лазера и сложности случая. В «Ауре» вы получите качественный уход и отличный результат.</p>
                    </div>
                  </div>
                ) : item.slug === 'vascular-removal-face' ? (
                  <div className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <img src={item.image} alt={item.title} className="w-full rounded-2xl border" />
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <h2 className="text-2xl font-black text-slate-900">Удаление сосудов лазером</h2>
                        <p>
                          Современная и безопасная методика для устранения видимых капилляров, сеточек и сосудистых образований на лице и теле. В «Ауре» процедуры выполняются на аппарате Lumenis Splendor (США) — высокая точность и комфорт.
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                        <h3 className="font-extrabold uppercase text-blue-700 mb-3">Результаты</h3>
                        <p className="text-gray-700">Часто видимы после первого сеанса (особенно при поверхностных сосудах). Может потребоваться 2–3 процедуры с интервалом 3–4 недели.</p>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                        <h3 className="font-extrabold uppercase text-emerald-700 mb-3">Преимущества</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-800">
                          <li>Минимальная реабилитация и безболезненность.</li>
                          <li>Без риска рубцевания.</li>
                          <li>Высокая эффективность даже при сложных проявлениях.</li>
                          <li>Селективная безопасность для окружающих тканей.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-extrabold uppercase text-blue-700">Как проходит процедура</h3>
                      <p className="text-gray-700">Лазерный луч воздействует на гемоглобин, нагревает сосуд и вызывает его коагуляцию. Со временем сосуд перестаёт быть видимым и рассасывается.</p>
                      <p className="text-gray-700">Длительность — 15–40 минут в зависимости от площади. Предварительно проводится осмотр и подбор параметров.</p>
                    </div>

                    <div className="rounded-xl border border-rose-200 bg-rose-50 p-6">
                      <h3 className="font-extrabold uppercase text-rose-700 mb-3">Противопоказания</h3>
                      <p className="text-gray-700">Беременность, лактация, кожные заболевания, онкология, нарушение целостности кожного покрова. Обязательная консультация специалиста перед началом курса.</p>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                      <h3 className="font-extrabold uppercase text-blue-700 mb-2">Почему мы</h3>
                      <p className="text-gray-700">Индивидуальный подход, опытные специалисты и премиальное оборудование Lumenis — точность, безопасность и стабильный результат. Поможем подобрать оптимальную схему процедур.</p>
                    </div>
                  </div>
                ) : item.slug === 'vascular-stars-removal' ? (
                  <div className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <img src={item.image} alt={item.title} className="w-full rounded-2xl border" />
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <h2 className="text-2xl font-black text-slate-900">Удаление сосудистых звёздочек</h2>
                        <p>
                          Сосудистые звёздочки — видимые капилляры на лице и ногах. В «Ауре» мы удаляем их лазером Lumenis SPLENDOR (США): эффективно, бережно и с минимальной травматичностью.
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                        <h3 className="font-extrabold uppercase text-blue-700 mb-3">Результат и восстановление</h3>
                        <p className="text-gray-700">Выраженность сетки уменьшается уже после первого сеанса. Полный эффект — 1–3 процедуры. Восстановление: избегать солнца, агрессивной косметики, бань/саун 7–10 дней.</p>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                        <h3 className="font-extrabold uppercase text-emerald-700 mb-3">Преимущества</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-800">
                          <li>Улучшение микроциркуляции и выравнивание тона кожи.</li>
                          <li>Быстро, без инъекций и разрезов.</li>
                          <li>Комфорт за счёт системы охлаждения в лазере SPLENDOR.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-extrabold uppercase text-blue-700">Как проходит процедура</h3>
                      <p className="text-gray-700">После консультации подбираются параметры, лазер прогревает стенку сосуда и вызывает её склеивание. Постепенно «звёздочка» исчезает, тон кожи выравнивается.</p>
                      <p className="text-gray-700">Сеанс длится 15–40 минут. Возможное лёгкое покраснение проходит в течение нескольких часов.</p>
                    </div>

                    <div className="rounded-xl border border-rose-200 bg-rose-50 p-6">
                      <h3 className="font-extrabold uppercase text-rose-700 mb-3">Противопоказания</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-800">
                        <li>Беременность и лактация.</li>
                        <li>Кожные заболевания в зоне обработки.</li>
                        <li>Онкологические заболевания.</li>
                        <li>Приём фотосенсибилизаторов.</li>
                        <li>Загар менее чем за 2 недели до процедуры.</li>
                        <li>Кардиостимулятор, хронические заболевания в стадии обострения.</li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                      <h3 className="font-extrabold uppercase text-blue-700 mb-2">Где сделать в Донецке</h3>
                      <p className="text-gray-700">Салон «Аура» — сертифицированное американское оборудование, опытные специалисты и честные цены. Уточните стоимость и запишитесь на консультацию — подберём курс под ваши задачи.</p>
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
            <section id="gallery" className="mt-20">
              <h3 className="text-3xl font-black text-slate-900 mb-8 text-center">Галерея</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {item.details.gallery.map((src, idx) => (
                  <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
                    <img src={src} alt={`${item.title} ${idx + 1}`} className="relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section id="booking" className="mt-20">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 p-10 md:p-14 shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white">
                  <h4 className="text-3xl md:text-4xl font-black mb-3">Готовы записаться?</h4>
                  <p className="text-blue-100 text-lg font-light">Оставьте заявку, и мы подберём удобное время.</p>
                </div>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="px-10 py-5 rounded-2xl bg-white text-blue-700 font-black text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all active:scale-95"
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
