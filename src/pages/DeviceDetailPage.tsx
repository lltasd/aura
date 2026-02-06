import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { devices } from '../data/devices'

export default function DeviceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const device = useMemo(() => devices.find(d => d.slug === slug), [slug])

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Header onBookClick={() => {}} variant="dark" />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-blue-600">Главная</Link>
            <span className="mx-2 text-slate-400">›</span>
            <Link to="/hardware-cosmetology" className="hover:text-blue-600">Аппаратная косметология</Link>
            {device ? (<>
              <span className="mx-2 text-slate-400">›</span>
              <span className="text-slate-700">{device.title}</span>
            </>) : null}
          </nav>

          <div className="max-w-7xl mx-auto px-4 py-12">
            {slug === 'rf-lifting-volnewmer' ? (
              <>
                {/* Hero Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                  {/* Image Gallery */}
                  <div className="space-y-8">
                    <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                      <img 
                        src="/Volnew.png" 
                        alt="VOLNEWMER главное изображение" 
                        className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                        <img 
                          src="/Volnew.png" 
                          alt="VOLNEWMER детали" 
                          className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                        <img 
                          src="/Volnew.png" 
                          alt="VOLNEWMER применение" 
                          className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Introduction */}
                  <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-10 shadow-xl border border-slate-100">
                    <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
                      Инновационная технология
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                      VOLNEWMER
                    </h1>
                    <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                      <p>
                        Совершенная система монополярного RF-лифтинга — инновационная разработка от создателей Ultraformer.
                      </p>
                      <p>
                        VOLNEWMER представляет собой новейшую неинвазивную радиочастотную процедуру для подтяжки, омоложения и уплотнения кожи. Аппарат сочетает в себе высокочастотную энергию и передовые технологии, обеспечивая комплексный уход за кожей с максимальной эффективностью и безопасностью.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                  {/* Advantages */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">Преимущества VOLNEWMER</h2>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'Неинвазивная монополярная RF система',
                        'Запатентованная технология HIDDEN EDGE',
                        'Встроенная система биоимпеданс анализа в режиме реального времени',
                        'Высокая мощность — 6,78 МГц',
                        'Непрерывная система контактного водяного охлаждения',
                        'Уникальная форма RF наконечника устраняет риск перегрева тканей',
                        'Работа со всеми слоями кожи одновременно',
                        'Возможность работы с тонкой и деликатной кожей, включая область век',
                        'Омолаживающий эффект заметен сразу после процедуры, максимальный результат достигается в течение 6 месяцев'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-slate-700">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Indications */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">Показания к применению</h2>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'Дряблость кожи, включая область век',
                        'Гравитационный птоз, второй подбородок',
                        'Морщины и заломы',
                        'Нечёткий контур лица',
                        'Провисания в области живота, рук, коленей и ягодиц'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-slate-700">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How it works */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">Принцип работы</h2>
                    </div>
                    <ul className="space-y-4">
                      {[
                        'Непрерывный поток радиочастотных импульсов достигает целевых слоёв — дермы и гиподермы. Тепловое RF-воздействие сокращает волокна коллагена и эластина, стимулирует синтез фибробластов, обеспечивая эффект омоложения.',
                        'Встроенная импеданс-система мгновенно реагирует на любые изменения и регулирует поток электродов в режиме реального времени, предотвращая побочные эффекты.',
                        'Контактное водное охлаждение устраняет болевые ощущения и защищает эпидермальный слой, обеспечивая максимальный комфорт во время процедуры.'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-slate-700">
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-purple-500 text-white rounded-full mr-3 flex-shrink-0 text-sm font-semibold">
                            {index + 1}
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">Результаты процедур</h2>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'Улучшение текстуры и качества кожи',
                        'Восполнение объёмов, контурирование лица',
                        'Выравнивание рельефа кожи, сужение пор',
                        'Омоложение и уплотнение кожи',
                        'Повышение эластичности и тургора кожи',
                        'Выраженный волюмизирующий эффект',
                        'Моделирование контуров тела, локальная коррекция проблемных зон'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-slate-700">
                          <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Contraindications */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 shadow-lg border border-red-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Противопоказания</h2>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {[
                      'Беременность и лактация',
                      'Обострение хронических заболеваний',
                      'Злокачественные новообразования',
                      'Нарушение целостности кожных покровов',
                      'Терапия фотосенсибилизирующими препаратами',
                      'Наличие кардиостимулятора'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-slate-700">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <section className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                  <img 
                    src={device?.image || '/placeholder.png'} 
                    alt={device?.title} 
                    className="w-full h-auto object-contain" 
                  />
                </div>
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-10 shadow-xl border border-slate-100">
                  <p className="text-slate-700 text-lg leading-relaxed">{device?.excerpt}</p>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
