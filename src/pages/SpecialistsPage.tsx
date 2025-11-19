import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { specialists } from '../data/specialists'
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
      <div className="fixed inset-0 bg-neutral-50 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-300 border-t-slate-800 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-slate-600 font-medium">Загрузка...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header onBookClick={() => {}} />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 py-16 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <div className="container mx-auto px-4">
            {/* Breadcrumbs */}
            <nav className="text-sm text-slate-500 mb-6">
              <Link to="/" className="hover:text-blue-700 transition-colors">Главная</Link>
              <span className="mx-2">›</span>
              <span className="text-slate-700">Команда Аура</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-800 uppercase mb-4">
                Команда Аура
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Наши специалисты — квалифицированные профессионалы с медицинским образованием и многолетним опытом работы
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="mb-12 border-b border-slate-200 opacity-0 animate-fadeIn" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <div className="flex gap-8 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab('all')}
                className={`pb-4 px-2 text-sm font-semibold uppercase tracking-wide transition-all whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'text-slate-900 border-b-2 border-slate-900'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Все специалисты
              </button>
              <button
                onClick={() => setActiveTab('fedora')}
                className={`pb-4 px-2 text-sm font-semibold uppercase tracking-wide transition-all whitespace-nowrap ${
                  activeTab === 'fedora'
                    ? 'text-slate-900 border-b-2 border-slate-900'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Фёдора Зайцева
              </button>
              <button
                onClick={() => setActiveTab('chelyuskintsev')}
                className={`pb-4 px-2 text-sm font-semibold uppercase tracking-wide transition-all whitespace-nowrap ${
                  activeTab === 'chelyuskintsev'
                    ? 'text-slate-900 border-b-2 border-slate-900'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Челюскинцев
              </button>
            </div>
          </div>

          {/* Specialists Grid */}
          <section>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredSpecialists.map((specialist, index) => (
                <article 
                  key={index} 
                  className="group bg-white rounded-none overflow-hidden transition-all duration-300 hover:shadow-2xl opacity-0 animate-fadeInUp cursor-pointer"
                  style={{ 
                    animationDelay: `${300 + index * 50}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="relative aspect-[3/4] bg-neutral-200 overflow-hidden">
                    {specialist.image ? (
                      <>
                        <img 
                          src={specialist.image} 
                          alt={specialist.name} 
                          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500" 
                        />
                        {/* Радиальный градиент по краям - более слабое затемнение */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                             style={{
                               background: 'radial-gradient(circle at center, transparent 50%, rgba(15, 23, 42, 0.15) 75%, rgba(30, 58, 138, 0.2) 100%)'
                             }}
                        />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-neutral-200">
                        <div className="text-6xl text-neutral-400 font-bold">
                          {specialist.name.charAt(0)}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5 bg-white">
                    <h3 className="font-bold text-neutral-900 text-base uppercase leading-tight mb-1.5 tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                      {specialist.name}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {specialist.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <div className="mt-20 pt-16 border-t border-slate-200 opacity-0 animate-fadeIn" style={{ animationDelay: `${300 + filteredSpecialists.length * 50 + 200}ms`, animationFillMode: 'forwards' }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-slate-800 mb-2">50+</div>
                <div className="text-slate-600 text-sm uppercase tracking-wide">Специалистов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-slate-800 mb-2">15+</div>
                <div className="text-slate-600 text-sm uppercase tracking-wide">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-slate-800 mb-2">100%</div>
                <div className="text-slate-600 text-sm uppercase tracking-wide">Сертифицированы</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-slate-800 mb-2">10k+</div>
                <div className="text-slate-600 text-sm uppercase tracking-wide">Довольных клиентов</div>
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