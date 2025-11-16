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
      <div className="container mx-auto px-4 pt-36 pb-16 max-w-5xl">
        <Link to="/face-procedures" className="text-primary font-semibold hover:text-primary-dark">← Все процедуры</Link>
        <h1 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-4">{item.title}</h1>
        <p className="text-gray-700 text-lg mb-8">{item.details.description}</p>
        {item.details.gallery?.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {item.details.gallery.map((src, idx) => (
              <img key={idx} src={src} alt={`${item.title} ${idx + 1}`} className="w-full rounded-2xl border" />
            ))}
          </div>
        ) : null}
      </div>
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  )
}
