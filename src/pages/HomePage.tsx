import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import DiscountPackages from '../components/DiscountPackages'
import BodyContouring from '../components/BodyContouring'
import Pricing from '../components/Pricing'
import Booking from '../components/Booking'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import BookingModal from '../components/BookingModal'

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onBookClick={() => setIsBookingModalOpen(true)} />
      <Hero onBookClick={() => setIsBookingModalOpen(true)} />
      <Services />
      <DiscountPackages />
      <BodyContouring />
      <Pricing />
      <Booking onBookClick={() => setIsBookingModalOpen(true)} />
      <Footer />
      <WhatsAppButton />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  )
}

