import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, Gift, Sparkles, Star, Snowflake } from 'lucide-react'

export default function NewYearPromoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false)

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

      {/* Backdrop with blur */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Floating snowflakes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const left = Math.random() * 100
          const size = Math.random() * 16 + 10
          const fallDur = Math.random() * 8 + 10 // 10-18s
          const swayDur = Math.random() * 3 + 3   // 3-6s
          const delay = Math.random() * 5
          const blur = Math.random() > 0.5 ? 'blur-[1px]' : 'blur-0'
          const opacity = Math.random() * 0.4 + 0.5
          return (
            <Snowflake
              key={i}
              className={`absolute text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] ${blur}`}
              style={{
                left: `${left}%`,
                top: `-8%`,
                opacity,
                fontSize: `${size}px`,
                animation: `fall ${fallDur}s linear ${delay}s infinite, sway ${swayDur}s ease-in-out ${delay}s infinite`
              }}
            />
          )
        })}
      </div>

      <style>{`
        @keyframes fall {
          0% { transform: translate3d(0, -5vh, 0) rotate(0deg); }
          100% { transform: translate3d(0, 105vh, 0) rotate(360deg); }
        }
        @keyframes sway {
          0% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
          100% { transform: translateX(-10px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
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
        className={`relative w-full max-w-md md:max-w-3xl transition-all duration-700 ${
          mounted 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-90 translate-y-8'
        }`}
      >
        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-3xl shadow-2xl overflow-hidden border border-white/20">

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-30">
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                backgroundSize: '1000px 100%',
                animation: 'shimmer 3s infinite',
              }}
            />
          </div>

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
          
          {/* Floating stars */}
          <Star className="absolute top-8 right-32 w-6 h-6 text-yellow-300/60" style={{ animation: 'float 3s ease-in-out infinite' }} />
          <Star className="absolute top-20 left-20 w-4 h-4 text-yellow-300/40" style={{ animation: 'float 4s ease-in-out infinite 1s' }} />
          <Sparkles className="absolute bottom-32 right-20 w-5 h-5 text-blue-300/50" style={{ animation: 'float 3.5s ease-in-out infinite 0.5s' }} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all duration-300 hover:rotate-90"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative">
            {/* Promo content */}
            <div className="p-6 md:p-14 text-white flex flex-col justify-center">

              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 w-fit border border-white/30">
                <Gift className="w-4 h-4" />
                <span className="text-sm font-bold">Новогодняя акция 2025</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4 pr-4">
                Волшебство начинается здесь!
              </h2>

              <p className="text-white/95 text-lg leading-relaxed mb-8 pr-4">
                Участвуйте в новогоднем розыгрыше и получите шанс выиграть праздничные подарки и специальные предложения.
              </p>

              <div className="space-y-4 hidden md:block">
                {[
                  { icon: Gift, text: 'Подарочные сертификаты' },
                  { icon: Star, text: 'Эксклюзивные скидки' },
                  { icon: Sparkles, text: 'Праздничные призы' },
                ].map(({ icon: Icon, text }, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 opacity-0"
                    style={{
                      animation: mounted ? 'slideUp 0.6s ease-out forwards' : 'none',
                      animationDelay: `${0.3 + i * 0.15}s`,
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-white/95">{text}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={handlePrimary}
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-white to-blue-100 text-blue-700 font-extrabold shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group"
                  style={{ animation: mounted ? 'pulse-glow 2s ease-in-out infinite' : 'none' }}
                >
                  <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Смотреть специальные предложения</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-7 py-4 rounded-xl bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/20 transition-all"
                >
                  Закрыть
                </button>
              </div>

              <p className="text-xs text-white/80 mt-4">Акция действует до 31 декабря 2025</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}