import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { ContactModal } from '../components/BodyContouring'
import { devices } from '../data/devices'

export default function HardwareCosmetologyPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [selectedSalon, setSelectedSalon] = useState<string>('')
  const [selectedPurpose, setSelectedPurpose] = useState<string>('')

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-slate-600 border-t-blue-400 rounded-full animate-spin mx-auto mb-6"></div>
          <div className="text-white font-bold text-lg tracking-wide">Загрузка...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onBookClick={() => setIsContactOpen(true)} variant="dark" />

      <main className="pt-32 pb-20">
        {/* Hero Section - Full Screen */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 min-h-screen flex items-center opacity-0 animate-fadeIn overflow-hidden -mt-32" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          {/* Decorative elements with enhanced animations */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-500/15 rounded-full blur-3xl animate-pulse-slower"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-300/10 rounded-full blur-2xl animate-float"></div>

          {/* Enhanced animated grid pattern */}
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.15) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1.5px, transparent 1.5px)',
            backgroundSize: '60px 60px',
            animation: 'gridMove 30s linear infinite'
          }}></div>

          {/* Subtle rose background image */}
          <img
            src="/rose.png"
            alt=""
            aria-hidden
            className="block absolute left-[-30px] top-[-30px] md:left-[-40px] md:top-[-60px] opacity-20 h-[30%] md:h-[65%] -rotate-6 pointer-events-none select-none"
            loading="lazy" decoding="async"
          />

          <div className="container mx-auto px-4 relative z-10 py-32">
            {/* Breadcrumbs */}
            <nav className="text-sm text-slate-400 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <Link to="/" className="hover:text-blue-300 transition-colors duration-300">Главная</Link>
              <span className="mx-2 text-slate-600">›</span>
              <span className="text-slate-300">Аппаратная косметология</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                <div className="inline-block mb-6 px-6 py-2.5 bg-gradient-to-r from-blue-500/25 to-blue-600/25 border border-blue-400/40 rounded-full backdrop-blur-sm shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <span className="text-blue-200 text-sm font-bold uppercase tracking-wider">Современные технологии ухода</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white uppercase mb-8 leading-none drop-shadow-2xl">
                  Аппаратная<br />косметология
                </h1>
                <p className="text-slate-200 text-2xl leading-relaxed mb-8 font-light">
                  Эффективные аппаратные методики для лифтинга, омоложения и улучшения качества кожи
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-10">
                  Подберём оптимальный аппарат и программу, исходя из задач вашей кожи и желаемого результата.
                </p>
                <button 
                  onClick={() => window.scrollTo({ top: window.innerHeight + 80, behavior: 'smooth' })} 
                  className="group px-10 py-5 bg-gradient-to-r from-white to-blue-50 text-slate-900 font-bold uppercase tracking-wide rounded-xl hover:from-blue-50 hover:to-white transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 hover:scale-105 border border-white/20"
                >
                  Смотреть аппараты
                  <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>

              {/* Right Content - Features */}
              <div className="opacity-0 animate-fadeInUp lg:justify-self-end" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl max-w-xl lg:ml-auto hover:bg-white/[0.12] transition-all duration-500 hover:shadow-blue-500/20">
                  <h2 className="text-3xl font-black text-white uppercase mb-10 flex items-center">
                    <span className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-500 mr-4 rounded-full shadow-lg shadow-blue-500/50"></span>
                    Преимущества
                  </h2>
                  <div className="space-y-7">
                    <div className="flex gap-5 group cursor-default">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-600/30 group-hover:scale-110 transition-all duration-300 border border-blue-400/30 shadow-lg shadow-blue-500/10">
                        <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <p className="text-slate-200 pt-3 leading-relaxed text-lg">Проверенные, безопасные и сертифицированные технологии</p>
                    </div>
                    <div className="flex gap-5 group cursor-default">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-600/30 group-hover:scale-110 transition-all duration-300 border border-blue-400/30 shadow-lg shadow-blue-500/10">
                        <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                      </div>
                      <p className="text-slate-200 pt-3 leading-relaxed text-lg">Современные аппараты и деликатные режимы воздействия</p>
                    </div>
                    <div className="flex gap-5 group cursor-default">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-600/30 group-hover:scale-110 transition-all duration-300 border border-blue-400/30 shadow-lg shadow-blue-500/10">
                        <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 8h10M7 12h8m-8 4h6" /></svg>
                      </div>
                      <p className="text-slate-200 pt-3 leading-relaxed text-lg">Персональные протоколы под ваши задачи</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fadeIn" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
              <div className="flex flex-col items-center gap-2 text-slate-300 group cursor-pointer">
                <span className="text-xs uppercase tracking-wider group-hover:text-blue-300 transition-colors">Листайте вниз</span>
                <div className="w-6 h-10 border-2 border-slate-400/40 rounded-full flex justify-center p-1 group-hover:border-blue-400/60 transition-colors">
                  <div className="w-1.5 h-3 bg-slate-300 rounded-full animate-bounce group-hover:bg-blue-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Небольшой отступ */}
          <div className="mt-12" />

          {/* Фильтры */}
          <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Салон</label>
              <select
                value={selectedSalon}
                onChange={(e) => setSelectedSalon(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-300 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
              >
                <option value="">Все салоны</option>
                <option value="Фёдора Зайцева">Фёдора Зайцева</option>
                <option value="Челюскинцев">Челюскинцев</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Назначение</label>
              <select
                value={selectedPurpose}
                onChange={(e) => setSelectedPurpose(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-300 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
              >
                <option value="">Все назначения</option>
                <option value="Для лица">Для лица</option>
                <option value="Для тела">Для тела</option>
              </select>
            </div>
          </div>

          {/* Сетка устройств с учётом фильтров */}
          {(() => {
            const salons = ['Фёдора Зайцева', 'Челюскинцев'] as const
            const deviceSalonMap: Record<string, readonly typeof salons[number][]> = {
              // По умолчанию все устройства доступны в обоих салонах
            }
            const inSalon = (slug: string) => deviceSalonMap[slug] ?? salons
            const filtered = devices.filter((dev) => {
              const salonOk = selectedSalon ? inSalon(dev.slug).includes(selectedSalon as any) : true
              const purposeOk = selectedPurpose ? (dev.tags || []).includes(selectedPurpose) : true
              return salonOk && purposeOk
            })
            return (
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
                {filtered.map((dev, index) => (
                  <article
                    key={dev.slug}
                    className="group relative animate-slide-up-fade"
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                  >
                    <div className="relative bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/80 hover:border-blue-200 h-full flex flex-col group-hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="p-8 flex-1 flex flex-col gap-5 relative z-10">
                        <div className="flex items-start justify-between gap-6">
                          <div className="flex-1">
                            <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-blue-900 transition-colors duration-300">
                              {dev.title}
                            </h3>
                            <p className="text-base text-slate-600 leading-relaxed">
                              {dev.excerpt}
                            </p>
                            {dev.tags?.length ? (
                              <div className="flex flex-wrap gap-2 mt-5">
                                {dev.tags.map((t) => (
                                  <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 border border-slate-200 font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </div>
                          <div className="w-44 shrink-0 group-hover:scale-105 transition-transform duration-500">
                            <img src={dev.image} alt={dev.title} className="w-full h-auto object-contain drop-shadow-xl" />
                          </div>
                        </div>
                        <div className="mt-4">
                          <button
                            onClick={() => setIsContactOpen(true)}
                            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-white to-slate-50 border-2 border-slate-300 px-6 py-3.5 text-sm font-bold text-slate-800 hover:from-blue-50 hover:to-white hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 uppercase tracking-wide"
                          >
                            Подробнее
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )
          })()}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.08); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes slide-up-fade {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up-fade {
          animation: slide-up-fade 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}