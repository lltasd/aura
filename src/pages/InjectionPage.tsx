import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { ContactModal } from '../components/BodyContouring'
import PricingCta from '../components/PricingCta'

export default function InjectionPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onBookClick={() => setIsContactOpen(true)} variant="dark" />

      <main className="pt-32 pb-20 relative">
        <div
          className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 min-h-screen flex items-center opacity-0 animate-fadeIn overflow-hidden -mt-32"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-500/15 rounded-full blur-3xl animate-pulse-slower" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-300/10 rounded-full blur-2xl animate-float" />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(59, 130, 246, 0.15) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1.5px, transparent 1.5px)',
              backgroundSize: '60px 60px',
              animation: 'gridMove 30s linear infinite'
            }}
          />

          <img
            src="/rose.png"
            alt=""
            aria-hidden
            className="block absolute left-[-30px] top-[-30px] md:left-[-40px] md:top-[-60px] opacity-20 h-[30%] md:h-[65%] -rotate-6 pointer-events-none select-none"
            loading="lazy"
            decoding="async"
          />

          <div className="container mx-auto px-4 relative z-10 py-32">
            <nav className="text-sm text-slate-400 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <Link to="/" className="hover:text-blue-300 transition-colors duration-300">Главная</Link>
              <span className="mx-2 text-slate-600">›</span>
              <span className="text-slate-300">Инъекционные процедуры</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                <div className="inline-block mb-6 px-6 py-2.5 bg-gradient-to-r from-blue-500/25 to-blue-600/25 border border-blue-400/40 rounded-full backdrop-blur-sm shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <span className="text-blue-200 text-sm font-bold uppercase tracking-wide">Наши услуги</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white uppercase mb-6 leading-tight md:leading-none break-words drop-shadow-2xl">
                  Инъекционные<br />процедуры
                </h1>
                <p className="text-slate-200 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 font-light">
                  Восстановление, увлажнение и поддержка молодости
                </p>
                <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                  Подберём процедуру и курс индивидуально после консультации. Окончательная стоимость зависит от протокола и препарата.
                </p>
                <button
                  onClick={() => window.scrollTo({ top: window.innerHeight + 80, behavior: 'smooth' })}
                  className="group px-6 py-4 md:px-10 md:py-5 bg-gradient-to-r from-white to-blue-50 text-slate-900 font-bold uppercase tracking-wide rounded-xl hover:from-blue-50 hover:to-white transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 hover:scale-105 border border-white/20 text-base md:text-lg"
                >
                  Смотреть процедуры
                  <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>

              <div className="opacity-0 animate-fadeInUp lg:justify-self-end" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl max-w-xl lg:ml-auto hover:bg-white/[0.12] transition-all duration-500 hover:shadow-blue-500/20">
                  <h2 className="text-3xl font-black text-white uppercase mb-10 flex items-center">
                    <span className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-500 mr-4 rounded-full shadow-lg shadow-blue-500/50" />
                    Важно
                  </h2>
                  <div className="space-y-4 text-slate-200">
                    <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-400" /> Консультация перед процедурой</div>
                    <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-400" /> Индивидуальный подбор протокола</div>
                    <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-400" /> Рекомендации по уходу после</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mt-12">
            <p className="text-slate-600 text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto leading-relaxed">
              Страница в разработке. Скоро добавим перечень процедур и подробное описание.
            </p>
          </div>

          <PricingCta />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.05); } }
        @keyframes pulse-slower { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.25; transform: scale(1.08); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes gridMove { 0% { transform: translateY(0); } 100% { transform: translateY(60px); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 10s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
