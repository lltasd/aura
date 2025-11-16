import { contactInfo } from '../data/services'

export default function WhatsAppButton() {
  return (
    <a
      href={contactInfo.socialMedia.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 animate-bounce"
      aria-label="Написать в WhatsApp"
    >
      <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
    </a>
  )
}

