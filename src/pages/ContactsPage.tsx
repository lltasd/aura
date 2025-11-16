import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactsSection from '../components/ContactsSection';
import WhatsAppButton from '../components/WhatsAppButton';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';

export default function ContactsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onBookClick={() => setIsBookingModalOpen(true)} />
      <main className="pt-20">
        <ContactsSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}
