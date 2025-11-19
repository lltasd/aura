import { useState } from 'react'
import { contactInfo } from '../data/services'
import { MessageCircle, Send, Phone, Calendar, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  const actions = [
    {
      key: 'whatsapp',
      href: contactInfo.socialMedia.whatsapp,
      label: 'WhatsApp',
      Icon: MessageCircle,
    },
    {
      key: 'telegram',
      href: contactInfo.socialMedia.telegram,
      label: 'Telegram',
      Icon: Send,
    },
    {
      key: 'phone',
      href: `tel:${contactInfo.phones?.[0]?.replace(/[^+\d]/g, '') ?? ''}`,
      label: 'Позвонить',
      Icon: Phone,
    },
    {
      key: 'calendar',
      href: '/contacts',
      label: 'Запись',
      Icon: Calendar,
    },
  ]

  return (
    <>
      {/* Клик по подложке закрывает меню */}
      {open && (
        <button
          aria-label="Закрыть меню записи"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-transparent"
        />
      )}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
        {/* Список действий */}
        <div className="flex flex-col items-end gap-3 transition-all duration-300">
          {actions.map((a, idx) => (
            <a
              key={a.key}
              href={a.href}
              target={a.href?.startsWith('http') ? '_blank' : undefined}
              rel={a.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`
                relative w-12 h-12 sm:w-14 sm:h-14 rounded-full
                bg-gradient-to-br from-slate-600 to-slate-500 border border-white/20 text-white
                shadow-xl flex items-center justify-center
                transition-all duration-300 hover:from-slate-700 hover:to-slate-600
                ${open ? 'opacity-100 translate-y-0 translate-x-[-12px] scale-100' : 'opacity-0 translate-y-3 scale-95 pointer-events-none'}
              `}
              style={{ transitionDelay: open ? `${(actions.length - idx) * 40}ms` : '0ms' }}
              aria-label={a.label}
            >
              <a.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>

        {/* Главная увеличенная кнопка */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню записи'}
          className="relative w-20 h-20 sm:w-20 sm:h-20 rounded-full group focus:outline-none"
        >
          {/* Пульсирующее внешнее кольцо */}
          <span className="absolute inset-0 rounded-full bg-slate-400/60 blur-[2px] animate-soft-pulse" />

          {/* Внутренняя кнопка */}
          <span className={`absolute inset-1 rounded-full border border-white/20 shadow-2xl flex items-center justify-center text-white font-black tracking-wide transition-all duration-300 ${open ? 'bg-slate-800' : 'bg-gradient-to-br from-slate-600 to-slate-500 group-hover:from-slate-700 group-hover:to-slate-600'}`}> 
            <span className="text-xs sm:text-sm">{open ? <X className="w-6 h-6" /> : 'ЗАПИСЬ'}</span>
          </span>
        </button>
      </div>

      {/* Локальные стили для мягкой пульсации каждые 3 секунды */}
      <style>{`
        @keyframes soft-pulse {
          0% { transform: scale(1); opacity: 0.7; }
          30% { transform: scale(1.18); opacity: 0.5; }
          60% { transform: scale(1.42); opacity: 0.22; }
          80% { transform: scale(1.55); opacity: 0.12; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .animate-soft-pulse {
          animation: soft-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}

