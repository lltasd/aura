import { useState } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import BookingModal from '../components/BookingModal'

export default function AboutPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onBookClick={() => setIsBookingModalOpen(true)} />

      <About onBookClick={() => setIsBookingModalOpen(true)} />

      <Footer />
      <WhatsAppButton />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  )
}