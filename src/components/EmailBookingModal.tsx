import { useEffect, useMemo, useState } from 'react'
import { X, Mail, Send, ShieldCheck, CheckCircle2, Timer } from 'lucide-react'

export interface EmailBookingModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export default function EmailBookingModal({ isOpen, onClose, title }: EmailBookingModalProps) {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [step, setStep] = useState<'email' | 'code' | 'done'>('email')
  const [sending, setSending] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [error, setError] = useState('')
  const [secLeft, setSecLeft] = useState(0)
  const [token, setToken] = useState('')
  const apiBase = (import.meta as any)?.env?.VITE_API_BASE || ''

  const isEmailValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email || ''), [email])
  const isCodeValid = useMemo(() => /^\d{4,6}$/.test(code), [code])

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  useEffect(() => {
    if (secLeft <= 0) return
    const t = setInterval(() => setSecLeft((s) => Math.max(0, s - 1)), 1000)
    return () => clearInterval(t)
  }, [secLeft])

  if (!isOpen) return null

  const handleSendCode = async () => {
    if (!isEmailValid) {
      setError('Пожалуйста, введите корректный e-mail')
      return
    }
    setError('')
    setSending(true)
    try {
      const resp = await fetch(`${apiBase}/api/email/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, subject: title || 'Код подтверждения' })
      })
      const data = await resp.json().catch(() => ({}))
      if (!resp.ok || !data?.ok || !data?.token) {
        const msg = [data?.error, data?.details].filter(Boolean).join(': ')
        throw new Error(msg || 'Не удалось отправить письмо')
      }
      setToken(data.token)
      setSecLeft(60)
      setStep('code')
    } catch (e: any) {
      setError(e?.message || 'Ошибка отправки письма')
    } finally {
      setSending(false)
    }
  }

  const handleVerify = async () => {
    if (!isCodeValid) {
      setError('Введите код из 4-6 цифр')
      return
    }
    setError('')
    setVerifying(true)
    try {
      const resp = await fetch(`${apiBase}/api/email/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, code })
      })
      const data = await resp.json().catch(() => ({}))
      if (!resp.ok || !data?.ok) {
        const msg = [data?.error, data?.details].filter(Boolean).join(': ')
        throw new Error(msg || 'Неверный код')
      }
      setStep('done')
      setTimeout(() => {
        onClose()
        setEmail('')
        setCode('')
        setToken('')
        setStep('email')
        setSecLeft(0)
      }, 1500)
    } catch (e: any) {
      setError(e?.message || 'Ошибка подтверждения кода')
    } finally {
      setVerifying(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50" aria-modal>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md animate-fadeIn" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md sm:max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-scaleIn border border-gray-100" onClick={(e) => e.stopPropagation()}>
          <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 p-6 sm:p-7 text-white">
            <button onClick={onClose} className="absolute top-5 right-5 text-white/90 hover:text-white hover:rotate-90 transition-all" aria-label="Закрыть">
              <X size={24} />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-200">Онлайн запись</div>
                <h3 className="text-xl sm:text-2xl font-black leading-tight">{title || 'Подтверждение по e-mail'}</h3>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            {step === 'email' && (
              <div className="space-y-5">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wide">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-300 focus:border-blue-700 focus:outline-none transition-all text-gray-900 font-semibold placeholder:text-gray-400 hover:border-gray-400"
                />
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button
                  onClick={handleSendCode}
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all disabled:opacity-60"
                >
                  <Send size={18} />
                  {sending ? 'Отправка...' : 'Отправить код на e-mail'}
                </button>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <ShieldCheck size={16} />
                  <span>Ваш e-mail используется только для подтверждения записи</span>
                </div>
              </div>
            )}

            {step === 'code' && (
              <div className="space-y-5">
                <div>
                  <div className="text-sm text-gray-600 mb-2">Мы отправили код на</div>
                  <div className="font-bold text-gray-900 break-all">{email}</div>
                </div>
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wide">Код</label>
                <input
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="••••"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-300 focus:border-blue-700 focus:outline-none transition-all text-gray-900 font-semibold placeholder:text-gray-400 tracking-widest text-center text-lg"
                />
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button
                  onClick={handleVerify}
                  disabled={verifying || !isCodeValid}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all disabled:opacity-60"
                >
                  {verifying ? 'Проверка...' : 'Подтвердить'}
                </button>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="inline-flex items-center gap-1.5">
                    <Timer size={16} />
                    {secLeft > 0 ? (
                      <span>Повторная отправка через {secLeft}с</span>
                    ) : (
                      <button type="button" onClick={handleSendCode} className="text-blue-700 font-semibold hover:underline">
                        Отправить код ещё раз
                      </button>
                    )}
                  </div>
                  <button type="button" onClick={() => setStep('email')} className="text-gray-500 hover:text-gray-700">
                    Изменить e-mail
                  </button>
                </div>
              </div>
            )}

            {step === 'done' && (
              <div className="py-10 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 size={32} />
                </div>
                <div className="text-2xl font-black text-gray-900">Заявка принята</div>
                <div className="text-gray-600">Мы свяжемся с вами в ближайшее время для подтверждения записи</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .animate-fadeIn { animation: fadeIn 0.3s ease-out both; }
        .animate-scaleIn { animation: scaleIn 0.2s ease-out both; }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(.98) } to { opacity: 1; transform: scale(1) } }
      `}</style>
    </div>
  )
}
