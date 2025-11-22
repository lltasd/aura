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
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-3xl"></div>

          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>

          {/* Subtle rose background image */}
          <img
            src="/rose.png"
            alt=""
            aria-hidden
            className="block absolute left-[-30px] top-[-30px] md:left-[-40px] md:top-[-60px] opacity-15 h-[30%] md:h-[65%] -rotate-6 pointer-events-none select-none"
            loading="lazy" decoding="async"
          />

          <div className="container mx-auto px-4 relative z-10 py-32">
            {/* Breadcrumbs */}
            <nav className="text-sm text-slate-400 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <Link to="/" className="hover:text-blue-400 transition-colors">Главная</Link>
              <span className="mx-2 text-slate-600">›</span>
              <span className="text-slate-300">Аппаратная косметология</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                <div className="inline-block mb-6 px-5 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
                  <span className="text-blue-300 text-sm font-bold uppercase tracking-wider">Современные технологии ухода</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white uppercase mb-8 leading-none">
                  Аппаратная<br />косметология
                </h1>
                <p className="text-slate-300 text-2xl leading-relaxed mb-8 font-light">
                  Эффективные аппаратные методики для лифтинга, омоложения и улучшения качества кожи
                </p>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                  Подберём оптимальный аппарат и программу, исходя из задач вашей кожи и желаемого результата.
                </p>
                <button onClick={() => window.scrollTo({ top: window.innerHeight + 80, behavior: 'smooth' })} className="group px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  Смотреть аппараты
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Right Content - Features */}
              <div className="opacity-0 animate-fadeInUp lg:justify-self-end" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl max-w-xl lg:ml-auto">
                  <h2 className="text-3xl font-black text-white uppercase mb-8 flex items-center">
                    <span className="w-2 h-10 bg-blue-400 mr-4 rounded-full"></span>
                    Преимущества
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Проверенные, безопасные и сертифицированные технологии</p>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Современные аппараты и деликатные режимы воздействия</p>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8m-8 4h6" /></svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Персональные протоколы под ваши задачи</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fadeIn" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
              <div className="flex flex-col items-center gap-2 text-slate-400">
                <span className="text-xs uppercase tracking-wider">Листайте вниз</span>
                <div className="w-6 h-10 border-2 border-slate-400/30 rounded-full flex justify-center p-1">
                  <div className="w-1 h-3 bg-slate-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {devices.map((d, index) => (
              <article
                key={d.slug}
                className="group relative animate-slide-up-fade"
                style={{ animationDelay: `${index * 0.12}s`, animationFillMode: 'both' }}
              >
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl transition-all duration-500 border border-slate-200/60 h-full flex flex-col">
                  <div className="p-6 flex-1 flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-black text-slate-800 mb-2 leading-tight">
                          {d.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {d.excerpt}
                        </p>
                        {d.tags?.length ? (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {d.tags.map((t) => (
                              <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                                {t}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      <div className="w-40 shrink-0">
                        <img src={d.image} alt={d.title} className="w-full h-auto object-contain" />
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={() => setIsContactOpen(true)}
                        className="inline-flex items-center justify-center rounded-xl bg-white border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-all"
                      >
                        Подробнее
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}
