import { Link } from 'react-router-dom'

export default function PricingCta() {
  return (
    <section className="mt-16 sm:mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-blue-50/30 to-white shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10" />
          <div className="relative p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              Цены на все услуги
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Актуальный прайс-лист и стоимость процедур смотрите в разделе «Цены на услуги».
            </p>
            <Link
              to="/pricing#pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 active:scale-95"
            >
              Перейти к прайсу
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
