import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { specials, SpecialItem } from '../data/specials'

export default function SpecialsPage() {
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState<SpecialItem | null>(null)

  const items: SpecialItem[] = specials

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedItem])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-ping opacity-75"></div>
            <div className="absolute inset-0 border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-t-transparent border-r-indigo-600 border-b-transparent border-l-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          </div>
          <div className="text-slate-600 font-medium text-lg tracking-wide animate-pulse">
            Загрузка специальных предложений...
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <Header onBookClick={() => {}} variant="dark" />

      <main className="pt-28 sm:pt-32 pb-16">
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 min-h-screen flex items-center animate-fadeIn overflow-hidden -mt-32" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-3xl"></div>

          <img
            src="/rose.png"
            alt=""
            aria-hidden
            className="block absolute left-[-30px] top-[-30px] md:left-[-40px] md:top-[-60px] opacity-15 h-[30%] md:h-[65%] -rotate-6 pointer-events-none select-none"
            loading="lazy" decoding="async"
          />

          <div className="container mx-auto px-4 relative z-10 py-20 sm:py-32">
            <nav className="text-sm text-slate-400 mb-12 animate-fadeIn" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <Link to="/" className="hover:text-blue-400 transition-colors">Главная</Link>
              <span className="mx-2 text-slate-600">›</span>
              <span className="text-slate-300">Специальные предложения</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                <div className="inline-block mb-6 px-5 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
                  <span className="text-blue-300 text-sm font-bold uppercase tracking-wider">Лучшие акции месяца</span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase mb-6 sm:mb-8 leading-none md:text-balance md:hyphens-none md:break-keep">
                  Специальные<br />предложения
                </h1>
                <p className="text-slate-300 text-base sm:text-2xl leading-relaxed mb-6 sm:mb-8 font-light md:text-pretty md:hyphens-none md:break-keep">
                  Актуальные акции и выгодные комплексы для вашей красоты
                </p>
                <p className="text-slate-400 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-10 md:text-pretty md:hyphens-none md:break-keep">
                  Выбирайте предложение и записывайтесь — количество мест ограничено.
                </p>
                <button onClick={() => window.scrollTo({ top: window.innerHeight + 80, behavior: 'smooth' })} className="group px-6 py-3 sm:px-8 sm:py-4 bg-white text-slate-900 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  Смотреть акции
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              <div className="animate-fadeInUp lg:justify-self-end" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl max-w-xl lg:ml-auto">
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-6 sm:mb-8 flex items-center">
                    <span className="w-2 h-10 bg-blue-400 mr-4 rounded-full"></span>
                    Как воспользоваться
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Выберите предложение и оставьте заявку на сайте или в мессенджере</p>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414л5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414л5-5A2 2 0 009 10.172В5L8 4z" /></svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Подтвердите запись у администратора и приходите в удобное время</p>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8m-8 4h6" /></svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Условия действия акции уточняйте при записи — скидки не суммируются</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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

        

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <article
                key={i}
                onClick={() => setSelectedItem(item)}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer opacity-0 animate-slideUp"
                style={{
                  animationDelay: `${300 + i * 50}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).onerror = null; (e.currentTarget as HTMLImageElement).src = '/slider1.png' }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                    {item.discount}
                  </div>
                  <div className="absolute inset-x-4 bottom-4 text-white">
                    <div className="text-xs uppercase tracking-widest font-bold opacity-90 mb-2 text-blue-300">
                      {item.category}
                    </div>
                    <div className="text-lg font-black leading-tight mb-3 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {selectedItem && (
        <div 
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-96">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-800 rounded-full p-2 transition-all duration-300 hover:rotate-90"
              >
                <X size={24} />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-block bg-blue-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-3">
                  {selectedItem.discount}
                </div>
                <h2 className="text-3xl md:text-4xl font-black leading-tight">
                  {selectedItem.title}
                </h2>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-2">
                  {selectedItem.category}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Условия акции:</h3>
                <ul className="space-y-3">
                  {selectedItem.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <div className="text-sm text-slate-500">
                  Акция действует до: <span className="font-semibold text-slate-700">{selectedItem.validUntil}</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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
        .animate-fadeIn { animation: fadeIn 0.6s ease-out both; }
        .animate-slideDown { animation: slideDown 0.6s ease-out both; }
        .animate-slideUp { animation: slideUp 0.6s ease-out both; }
        .animate-scaleIn { animation: scaleIn 0.4s ease-out both; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out both; }
      `}</style>
    </div>
  )
}