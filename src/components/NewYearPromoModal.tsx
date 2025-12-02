import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { X, Gift, Calendar, Users } from 'lucide-react'
import EmailBookingModal from './EmailBookingModal'

export default function NewYearPromoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false)
  const [regOpen, setRegOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => setMounted(true), 10)
    } else {
      setMounted(false)
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handlePrimary = () => {
    onClose()
    navigate('/specials')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Modal */}
      <div 
        className={`relative z-20 w-full max-w-4xl max-h-[92vh] transition-all duration-500 ${
          mounted 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95'
        }`}
      >
        <div className="relative bg-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh]">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-lg bg-slate-700/80 hover:bg-slate-700 text-slate-200 hover:text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative overflow-y-auto max-h-[92vh]">
            <div className="grid md:grid-cols-5 gap-0">
              
              {/* Left side - Image */}
              <div className="relative md:col-span-3 h-[21.5rem] md:h-auto">
                <img
                  src="/newyear.jpg"
                  alt="Розыгрыш к Новому году"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/newyear.jpeg' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-blue-900/20" />
              </div>

              {/* Right side - Content */}
              <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center bg-slate-800">
                
                <div className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-200 px-4 py-2 rounded-lg mb-6 w-fit font-semibold text-sm border border-blue-700/30">
                  <Gift className="w-4 h-4" />
                  Специальное предложение
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                  Розыгрыш набора посуды к Новому году
                </h2>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                  Участвуйте в розыгрыше от Aypa и получите шанс выиграть эксклюзивный набор посуды Tefal. Сохраняйте чеки от 8.000 сом с 15 ноября по 30 декабря.
                </p>

                {/* Info cards */}
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Gift, title: 'Главный приз', text: 'Набор посуды Tefal' },
                    { icon: Users, title: 'Количество победителей', text: '3 счастливчика' },
                    { icon: Calendar, title: 'Подведение итогов', text: '30 декабря 2024' },
                  ].map(({ icon: Icon, title, text }, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-xl opacity-0 border border-slate-600/30"
                      style={{
                        animation: mounted ? 'slideUp 0.5s ease-out forwards' : 'none',
                        animationDelay: `${0.2 + i * 0.1}s`,
                      }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center flex-shrink-0 border border-blue-700/30">
                        <Icon className="w-5 h-5 text-blue-300" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm mb-1">{title}</div>
                        <div className="text-slate-400 text-sm">{text}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setRegOpen(true)}
                    className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Зарегистрироваться
                  </button>
                  <button
                    onClick={handlePrimary}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Узнать подробности</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold transition-all duration-200 border border-slate-600"
                  >
                    Закрыть
                  </button>
                </div>

                <p className="text-xs text-slate-500 mt-6">
                  * Акция действует с 15.11 по 30.12. Подробности уточняйте у персонала.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <EmailBookingModal isOpen={regOpen} onClose={() => setRegOpen(false)} />
    </div>
  )
}