import { FormEvent, useState } from 'react'
import { User, Phone, Mail, Sparkles, CheckCircle2, CreditCard } from 'lucide-react'

export default function GiftCertificateSection({ onSubmit }: { onSubmit: () => void }) {
  const [focused, setFocused] = useState<string | null>(null)
  const [checked, setChecked] = useState({ news: false, privacy: false })
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', nominal: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <section className="mt-20 mb-20 relative px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 rounded-3xl opacity-60" />
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-400/20 rounded-full blur-3xl" />

      <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl border-2 border-white/60 shadow-2xl overflow-hidden max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden order-1 lg:order-1">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Подарок</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">ПОДАРОЧНЫЙ СЕРТИФИКАТ</h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">Лучший способ порадовать близкого человека — подарить ему время и заботу. Сертификаты студии «Аура» — это самый желанный презент. Просто выберите номинал и способ получения.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Идея для любого случая</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Удобно и быстро</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Без скрытых платежей</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 lg:p-16 bg-white/60 backdrop-blur-sm order-2 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Выберите номинал <span className="text-red-500">*</span></label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <select
                    value={formData.nominal}
                    onChange={(e) => setFormData({ ...formData, nominal: e.target.value })}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-300 focus:border-blue-600 focus:outline-none bg-white shadow-sm transition-all hover:shadow-md"
                  >
                    <option value="">Выберите номинал</option>
                    <option value="3000">3000 ₽</option>
                    <option value="5000">5000 ₽</option>
                    <option value="10000">10000 ₽</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Ваше имя <span className="text-red-500">*</span></label>
                <div className="relative">
                  <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focused === 'name' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Введите ваше имя"
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-300 focus:border-blue-600 focus:outline-none bg-white shadow-sm transition-all hover:shadow-md"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Номер телефона <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focused === 'phone' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-300 focus:border-blue-600 focus:outline-none bg-white shadow-sm transition-all hover:shadow-md"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email (необязательно)</label>
                <div className="relative">
                  <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focused === 'email' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <input
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    type="email"
                    placeholder="example@mail.com"
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-300 focus:border-blue-600 focus:outline-none bg-white shadow-sm transition-all hover:shadow-md"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input type="checkbox" checked={checked.news} onChange={(e) => setChecked({ ...checked, news: e.target.checked })} className="peer sr-only" />
                    <div className={`w-6 h-6 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${checked.news ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-200' : 'bg-white border-slate-300 group-hover:border-blue-400'}`}>
                      {checked.news && (
                        <svg className="w-4 h-4 text-white" fill="none" strokeWidth="3" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors leading-relaxed">Хочу получать новости и специальные предложения</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input type="checkbox" checked={checked.privacy} onChange={(e) => setChecked({ ...checked, privacy: e.target.checked })} className="peer sr-only" />
                    <div className={`w-6 h-6 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${checked.privacy ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-200' : 'bg-white border-slate-300 group-hover:border-blue-400'}`}>
                      {checked.privacy && (
                        <svg className="w-4 h-4 text-white" fill="none" strokeWidth="3" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors leading-relaxed">Согласен на обработку персональных данных <span className="text-red-500">*</span></span>
                </label>
              </div>

              <button type="submit" className="w-full mt-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group">
                <CreditCard className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Купить</span>
              </button>

              <div className="flex items-start gap-2 mt-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  Нажимая на кнопку, вы соглашаетесь с{' '}
                  <span className="text-blue-600 hover:text-blue-700 font-medium underline cursor-pointer">Политикой конфиденциальности</span>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
