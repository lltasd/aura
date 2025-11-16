import { useState } from 'react'
import Services from '../components/Services'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import DiscountPackages from '../components/DiscountPackages'
import BodyContouring from '../components/BodyContouring'
import Pricing from '../components/Pricing'
import Booking from '../components/Booking'
import WhatsAppButton from '../components/WhatsAppButton'
import BookingModal from '../components/BookingModal'

export default function PricingPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10">
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
