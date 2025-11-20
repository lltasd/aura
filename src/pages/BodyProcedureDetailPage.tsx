import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { bodyProcedures } from '../data/bodyProcedures'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingModal from '../components/BookingModal'

export default function BodyProcedureDetailPage() {
  const { slug } = useParams()
  const item = bodyProcedures.find((p) => p.slug === slug)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  if (!item) return <Navigate to="/body-procedures" replace />

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
            <Link to="/body-procedures" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
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
          {/* Overview */}
          <section id="overview" className="relative mt-10">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/70 bg-white/90 backdrop-blur-sm shadow-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-slate-400/10 rounded-3xl" />
              <div className="relative p-6 md:p-10">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-5">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900">Описание процедуры</h2>
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                      {item.details.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                      <div className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-slate-700 font-semibold">Комфортно и безопасно</p>
                        <p className="text-slate-500 text-sm mt-1">Современное оборудование и бережные методики</p>
                      </div>
                      <div className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-slate-700 font-semibold">Видимый результат</p>
                        <p className="text-slate-500 text-sm mt-1">Курс процедур по рекомендации специалиста</p>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black shadow-lg hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-[1.02] active:scale-95"
                      >
                        Записаться на процедуру
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 rounded-3xl opacity-20 blur-2xl" />
                    <img src={item.image} alt={item.title} className="relative w-full rounded-3xl border shadow-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery */}
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

          {/* Booking CTA */}
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
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  )
}
