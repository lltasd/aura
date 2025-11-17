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
    <div className="min-h-screen bg-white">
      <Header onBookClick={() => setIsBookingModalOpen(true)} />
      <div className="container mx-auto px-4 pt-36 pb-16 max-w-6xl">
        <Link to="/face-procedures" className="text-primary font-semibold hover:text-primary-dark">← Все процедуры</Link>
        <h1 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-6">{item.title}</h1>

        {item.slug === 'vacuum-face-cleaning' ? (
          <div className="space-y-10">
            {/* Top section: image left, intro text right */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <img src="/kab1.webp" alt="Вакуумная чистка лица" className="w-full rounded-2xl border" />
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  В современном мире, где красота и здоровье кожи лица играют важную роль, женщины прибегают к различным косметическим процедурам. Одной из них является вакуумная чистка лица.
                </p>
                <p>
                  Этот метод проверенный, относится к безопасному и бережному уходу по очищению кожи и улучшению ее состояния.
                </p>
              </div>
            </div>

            {/* Effect box */}
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h2 className="font-extrabold uppercase text-blue-700 mb-3">ЭФФЕКТ ПОСЛЕ ЧИСТКИ ВАКУУМОМ</h2>
              <p className="text-gray-700">
                После профессиональной вакуумной чистки лица кожа становится заметно чище, исчезают сальные пробки, черные точки, уменьшаются комедоны.
              </p>
              <p className="text-gray-700 mt-3">
                Благодаря хорошему кровообращению кожа получает больше кислорода и питательных веществ, что замедляет процессы старения. Лицо выглядит ухоженным и здоровым.
              </p>
            </div>

            {/* Advantages */}
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

            {/* How it works */}
            <div className="space-y-3">
              <h2 className="font-extrabold uppercase text-blue-700">КАК ПРОХОДИТ ВАКУУМНАЯ ЧИСТКА ЛИЦА?</h2>
              <p className="text-gray-700">
                Для проведения процедуры нужен вакуумный прибор для чистки лица, который создает отрицательное давление, тем самым вытягивая загрязнения из пор. Этот метод рекомендован для всех типов кожи, эффективен для устранения черных точек, расширенных пор.
              </p>
              <p className="text-gray-700">
                Вакуумная чистка пор лица борется с тусклостью кожи, неровным тоном, отечностью, комедонами. Многие клиенты отмечают, что лицо после аппаратной процедуры становится более гладким, свежим и сияющим.
              </p>
            </div>

            {/* Recommendations box */}
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

            {/* Outro */}
            <div className="space-y-3 text-gray-700">
              <p>
                Студия красоты «Аура» предлагает большой набор услуг по уходу за кожей лица, включая ультразвуковую вакуумную чистку лица. У нас работают высококвалифицированные специалисты, которые используют лучшие аппараты, обеспечивая безопасное и эффективное проведение процедуры.
              </p>
              <p>
                Цена на вакуумную чистку лица зависит от индивидуальных потребностей клиента и объема работы, однако мы предлагаем конкурентные цены и высокое качество услуг.
              </p>
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
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  )
}
