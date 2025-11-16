import { useState } from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { bodyProcedures } from '../data/bodyProcedures'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ContactModal } from '../components/BodyContouring'
import WhatsAppButton from '../components/WhatsAppButton'

export default function BodyProceduresPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100 relative overflow-hidden">
      <div className="fixed inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-blue-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-slate-400/25 to-blue-300/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-slate-300/25 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDuration: '4s'}} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent animate-shimmer" />
      <div className="fixed left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-blue-600/30 to-transparent" />
      <div className="fixed right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-blue-600/30 to-transparent" />

      <Header onBookClick={() => setIsContactOpen(true)} />

      <main className="container mx-auto px-4 pt-44 pb-16 relative z-10">
        <div className="mb-16 text-center animate-fade-in-down">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-slate-800 bg-clip-text text-transparent leading-tight mb-4 animate-gradient">
            Процедуры для тела
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Современные аппаратные методики для здоровья и красоты вашего тела
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bodyProcedures.map((p, index) => (
            <article
              key={p.slug}
              className="group relative animate-slide-up-fade"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-slate-400 rounded-3xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-slate-200/60 group-hover:border-blue-300/80 h-full flex flex-col transform group-hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 
              
                  <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 via-blue-400 to-transparent w-0 group-hover:w-full transition-all duration-1000" />
                </div>
                <div className="p-6 flex-1 flex flex-col relative">
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  <h3 className="text-lg font-black text-slate-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 pt-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1 line-clamp-5">
                    {p.excerpt}
                  </p>
                  <div className="flex justify-end pt-2">
                    <Link to={`/body-procedures/${p.slug}`} className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-300 z-20">
                      <span className="relative z-10 tracking-wide">ПОДРОБНЕЕ</span>
                      <ArrowRight className="relative z-10 w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 text-center animate-fade-in-up" style={{animationDelay: '1s', animationFillMode: 'both'}}>
          <div className="relative inline-flex flex-col items-center gap-6 p-10 bg-gradient-to-br from-blue-600/15 via-slate-200/20 to-blue-400/10 backdrop-blur-md rounded-3xl border border-blue-300/40 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <Sparkles className="w-12 h-12 text-blue-600" />
            <div className="space-y-2">
              <p className="text-2xl font-black text-slate-800">Не нашли подходящую процедуру?</p>
              <p className="text-slate-600">Получите персональную консультацию от наших специалистов</p>
            </div>
            <button onClick={() => setIsContactOpen(true)} className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              <span>Получить консультацию</span>
              <Sparkles className="w-6 h-6" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <style>{`
        @keyframes fade-in-down { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-up-fade { from { opacity: 0; transform: translateY(50px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes float { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(30px, -30px) scale(1.1); } }
        @keyframes float-delayed { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-40px, 40px) scale(1.15); } }
        @keyframes float-slow { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(20px, -20px) rotate(5deg); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes gradient { 0%, 100% { background-size: 200% 200%; background-position: left center; } 50% { background-size: 200% 200%; background-position: right center; } }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-slide-up-fade { animation: slide-up-fade 0.8s ease-out; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-shimmer { background-size: 200% 100%; animation: shimmer 3s linear infinite; }
        .animate-gradient { animation: gradient 5s ease infinite; }
      `}</style>
    </div>
  )
}
