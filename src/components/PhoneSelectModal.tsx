import { useEffect } from 'react'
import { X, ArrowRight, Phone as PhoneIcon } from 'lucide-react'
import { contactInfo } from '../data/services'

export interface PhoneSelectModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PhoneSelectModal({ isOpen, onClose }: PhoneSelectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-fade-in border-2 border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-black text-primary">
            Выберите номер
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-primary transition-all hover:rotate-90 duration-300"
            aria-label="Закрыть"
          >
            <X size={24} />
          </button>
        </div>

        <p className="text-gray-600 mb-6 font-medium">На какой номер позвонить?</p>

        <div className="space-y-3">
          {contactInfo.phones.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone.replace(/\s/g, '').replace(/[()]/g, '')}`}
              className="flex items-center justify-between p-5 bg-primary/5 hover:bg-primary rounded-2xl transition-all duration-300 group border-2 border-transparent hover:border-primary shadow-md hover:shadow-xl transform hover:scale-105"
              onClick={onClose}
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary group-hover:bg-white p-3 rounded-xl transition-all shadow-lg">
                  <PhoneIcon size={22} className="text-white group-hover:text-primary transition-colors" />
                </div>
                <span className="text-lg font-bold text-primary group-hover:text-white transition-colors">
                  {phone}
                </span>
              </div>
              <ArrowRight className="w-6 h-6 text-primary group-hover:text-white transition-all group-hover:translate-x-1" />
            </a>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 py-3 text-gray-600 hover:text-primary transition font-bold rounded-xl hover:bg-gray-50"
        >
          Отмена
        </button>
      </div>
    </div>
  )
}
