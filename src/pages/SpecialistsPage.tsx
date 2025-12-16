import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { specialistsFull as specialists } from '../data/specialistsFull'
import { Link } from 'react-router-dom'

export default function SpecialistsPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const filteredSpecialists = activeTab === 'all' 
    ? specialists 
    : specialists.filter(s => s.location === activeTab)

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
      <Header onBookClick={() => {}} variant="dark" />

      <main className="pt-28 sm:pt-32 pb-16 md:pb-20">
        {/* Hero Section - Full Screen */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 min-h-[80vh] sm:min-h-screen flex items-center opacity-0 animate-fadeIn overflow-hidden -mt-32" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
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
              <span className="text-slate-300">Команда Аура</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>

                <div className="inline-block mb-4 sm:mb-6 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
                  <span className="text-blue-300 text-xs sm:text-sm font-bold uppercase tracking-wider">Профессионалы своего дела</span>
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight text-white uppercase mb-6 md:mb-8 leading-none">
                  Команда<br />Аура
                </h1>
                <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-6 md:mb-8 font-light">
                  Квалифицированные профессионалы с медицинским образованием и многолетним опытом
                </p>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 md:mb-10">
                  Каждый специалист искренне увлечён косметологией и стремится, чтобы каждая процедура приносила не только видимый результат, но и удовольствие от заботы о себе.
                </p>
                
                {/* CTA Button */}
                <button onClick={() => window.scrollTo({ top: 940, behavior: 'smooth' })} className="group px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  Выбрать специалиста
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Right Content - Features */}
              <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-6 sm:mb-8 flex items-center">
                    <span className="w-2 h-10 bg-blue-400 mr-4 rounded-full"></span>
                    Почему выбирают нас
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Опытные и сертифицированные косметологи с медицинским образованием</p>
                    </div>
                    
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Отлично оборудованные кабинеты с постоянным внедрением инноваций</p>
                    </div>
                    
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Современное оборудование, проверенные методики, безопасность</p>
                    </div>
                    
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Персонализированный подход с тщательной диагностикой кожи</p>
                    </div>
                    
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Уютная атмосфера и комфорт для каждого клиента</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-slate-400 leading-relaxed text-xs sm:text-sm mb-4">
                      Мы знаем, как важно доверять специалисту, особенно когда речь идёт о лице и теле. В студии «Аура» вы можете быть уверены: вас обслужат бережно, профессионально и с вниманием к деталям.
                    </p>
                    <p className="text-slate-400 leading-relaxed text-sm mb-4">
                      Наши косметологи помогут вам достичь желаемого результата — будь то гладкая кожа после лазерной эпиляции, лифтинг-эффект или сияющий цвет лица после курса процедур.
                    </p>
                    <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                      <p className="text-blue-200 font-medium text-sm">
                        Записаться на процедуры можно по телефонам на сайте
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mx-auto px-4">

          {/* Tabs */}
          <div className="mb-12 bg-white rounded-xl shadow-lg p-2 opacity-0 animate-fadeIn" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab('all')}
                className={`flex-1 min-w-fit py-3 px-6 text-sm font-bold uppercase tracking-wide transition-all rounded-lg ${
                  activeTab === 'all'
                    ? 'bg-gradient-to-r from-slate-800 to-blue-900 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                Все специалисты
              </button>
              <button
                onClick={() => setActiveTab('fedora')}
                className={`flex-1 min-w-fit py-3 px-6 text-sm font-bold uppercase tracking-wide transition-all rounded-lg ${
                  activeTab === 'fedora'
                    ? 'bg-gradient-to-r from-slate-800 to-blue-900 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                Фёдора Зайцева
              </button>
              <button
                onClick={() => setActiveTab('chelyuskintsev')}
                className={`flex-1 min-w-fit py-3 px-6 text-sm font-bold uppercase tracking-wide transition-all rounded-lg ${
                  activeTab === 'chelyuskintsev'
                    ? 'bg-gradient-to-r from-slate-800 to-blue-900 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                Челюскинцев
              </button>
            </div>
          </div>

          {/* Specialists Grid */}
          <section id='scrol'>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSpecialists.map((specialist, index) => (
                <article 
                  key={index} 
                  className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-fadeInUp cursor-pointer border border-slate-100"
                  style={{ 
                    animationDelay: `${300 + index * 50}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
                    {specialist.image ? (
                      <>
                        <img 
                          src={specialist.image} 
                          alt={specialist.name} 
                          onError={(e) => { (e.currentTarget as HTMLImageElement).onerror = null; (e.currentTarget as HTMLImageElement).src = '/first.webp' }}
                          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105" 
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                        <div className="text-6xl text-slate-400 font-bold">
                          {specialist.name.charAt(0)}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 bg-white relative">
                    {/* Decorative line */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <h3 className="font-black text-slate-900 text-base uppercase leading-tight mb-2 tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                      {specialist.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {specialist.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <div className="mt-24 pt-0 opacity-0 animate-fadeIn" style={{ animationDelay: `${300 + filteredSpecialists.length * 50 + 200}ms`, animationFillMode: 'forwards' }}>
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-2xl p-12 relative overflow-hidden shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Наши достижения</h3>
                  <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center group">
                    <div className="flex items-center justify-center transition-all duration-300">
                      <div className="text-4xl sm:text-5xl font-black text-white">50<span className="text-blue-300">+</span></div>
                    </div>
                    <div className="text-slate-300 text-sm uppercase tracking-wider font-semibold">Специалистов</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="backdrop-blur flex items-center justify-center transition-all duration-300">
                      <div className="text-4xl sm:text-5xl font-black text-white">15<span className="text-blue-300">+</span></div>
                    </div>
                    <div className="text-slate-300 text-sm uppercase tracking-wider font-semibold">Лет опыта</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="flex items-center justify-center transition-all duration-300">
                      <div className="text-4xl sm:text-5xl font-black text-white">100<span className="text-blue-300">%</span></div>
                    </div>
                    <div className="text-slate-300 text-sm uppercase tracking-wider font-semibold">Сертифицированы</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="flex items-center justify-center transition-all duration-300">
                      <div className="text-4xl sm:text-5xl font-black text-white">10k<span className="text-blue-300">+</span></div>
                    </div>
                    <div className="text-slate-300 text-sm uppercase tracking-wider font-semibold">Довольных клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />

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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}