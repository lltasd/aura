import { useState } from 'react'
import { X, Send, CheckCircle, Calendar, Clock, User, Phone, MessageSquare, Sparkles } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    comments: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'Лазерная эпиляция (Александритовый лазер)',
    'Лазерная эпиляция (Диодный лазер)',
    'Аппаратная коррекция фигуры',
    'Консультация',
    'Другое',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        comments: '',
      })
    }, 2000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 animate-fadeIn"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
        <div 
          className="bg-white rounded-3xl shadow-2xl max-w-lg sm:max-w-xl md:max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white p-6 sm:p-8 rounded-t-3xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>
            
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/90 hover:text-white hover:rotate-90 transition-all duration-300 z-10"
              aria-label="Закрыть"
            >
              <X size={28} strokeWidth={2.5} />
            </button>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-5 border border-white/30">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-sm tracking-wide">Онлайн запись</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
                Заказать звонок
              </h2>
              <p className="text-white/95 text-base sm:text-lg font-medium leading-relaxed">
                Заполните форму, и мы свяжемся с вами в ближайшее время для подтверждения записи
              </p>
            </div>
          </div>

          {!isSubmitted ? (
            <div className="p-5 sm:p-8 space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  <User className="w-4 h-4 text-blue-700" />
                  Ваше имя *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-300 focus:border-blue-700 focus:outline-none transition-all text-gray-900 font-semibold placeholder:text-gray-400 hover:border-gray-400"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  <Phone className="w-4 h-4 text-blue-700" />
                  Телефон *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-300 focus:border-blue-700 focus:outline-none transition-all text-gray-900 font-semibold placeholder:text-gray-400 hover:border-gray-400"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-blue-700" />
                  Услуга
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-300 focus:border-blue-700 focus:outline-none transition-all text-gray-900 font-semibold hover:border-gray-400 bg-white"
                >
                  <option value="">Выберите услугу</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                    <Calendar className="w-4 h-4 text-blue-700" />
                    Дата
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-300 focus:border-blue-700 focus:outline-none transition-all text-gray-900 font-semibold hover:border-gray-400"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                    <Clock className="w-4 h-4 text-blue-700" />
                    Время
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-300 focus:border-blue-700 focus:outline-none transition-all text-gray-900 font-semibold hover:border-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  <MessageSquare className="w-4 h-4 text-blue-700" />
                  Комментарии
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-300 focus:border-blue-700 focus:outline-none transition-all resize-none text-gray-900 font-semibold placeholder:text-gray-400 hover:border-gray-400"
                  placeholder="Оставьте ваши пожелания или вопросы..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto order-2 sm:order-1 px-6 py-4 rounded-2xl border-2 border-gray-400 text-gray-800 font-bold hover:bg-gray-200 hover:border-gray-500 transition-all"
                >
                  Отмена
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full sm:flex-1 order-1 sm:order-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 text-white font-black hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="w-5 h-5" />
                  Отправить заявку
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center font-medium pt-2">
                Нажимая кнопку "Отправить заявку", вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          ) : (
            <div className="p-12 sm:p-16 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                <CheckCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Спасибо!</h3>
              <p className="text-gray-600 font-semibold text-lg leading-relaxed">
                Ваша заявка принята. Мы свяжемся с вами в ближайшее время для подтверждения записи.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}