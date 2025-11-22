import { useState, useEffect } from 'react'
import { alexandritePackages, diodePackages } from '../data/services'
import type { DiscountPackage } from '../data/services'
import { Sparkles, Check, Zap, TrendingDown } from 'lucide-react'

export default function DiscountPackages() {
  const [activeLaser, setActiveLaser] = useState<'alexandrite' | 'diode'>('alexandrite')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const packages = activeLaser === 'alexandrite' ? alexandritePackages : diodePackages

  return (
    <section className="py-16 bg-gradient-to-b from-accent/10 via-white to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div 
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-silver/20 to-silver/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="text-silver-dark" size={18} />
            <span className="text-primary font-semibold text-sm">ПАКЕТЫ СКИДОЧНЫЕ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
            Специальные предложения
          </h2>
          <p className="text-lg text-gray-600">
            {activeLaser === 'alexandrite' ? 'Александритовый лазер' : 'Диодный лазер'}
          </p>
        </div>

        {/* Laser type selector */}
        <div 
          className={`flex justify-center gap-3 mb-10 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <button
            onClick={() => setActiveLaser('alexandrite')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeLaser === 'alexandrite'
                ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg scale-105'
                : 'bg-white text-primary border-2 border-primary hover:bg-primary/5'
            }`}
          >
            <Zap size={18} />
            Александритовый лазер
          </button>
          <button
            onClick={() => setActiveLaser('diode')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeLaser === 'diode'
                ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg scale-105'
                : 'bg-white text-primary border-2 border-primary hover:bg-primary/5'
            }`}
          >
            <Zap size={18} />
            Диодный лазер
          </button>
        </div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg: DiscountPackage, index: number) => {
            const discount = pkg.originalPrice - pkg.discountedPrice
            const discountPercent = Math.round((discount / pkg.originalPrice) * 100)
            const isBest = index === packages.length - 1

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] flex flex-col group ${
                  isBest ? 'ring-2 ring-silver' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Best offer badge */}
                {isBest && (
                  <div className="bg-gradient-to-r from-silver to-silver-light text-primary px-4 py-2 text-center font-bold text-sm">
                    ⭐ ЛУЧШЕЕ ПРЕДЛОЖЕНИЕ
                  </div>
                )}

                {/* Package header */}
                <div className={`${
                  isBest 
                    ? 'bg-gradient-to-br from-silver via-silver-light to-silver text-primary' 
                    : 'bg-gradient-to-br from-primary via-primary-dark to-primary text-white'
                } p-6 text-center transition-all duration-200 group-hover:shadow-lg`}>
                  <h3 className="text-xl font-bold mb-1 group-hover:scale-105 transition-transform duration-200">{pkg.name}</h3>
                  <div className="flex items-center justify-center gap-1 text-sm opacity-90">
                    <TrendingDown size={14} />
                    <span>Экономия {discountPercent}%</span>
                  </div>
                </div>

                {/* Services included - фиксированная высота */}
                <div className="p-6 bg-gradient-to-b from-primary/5 to-white flex-grow">
                  <h4 className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                    Входит в пакет:
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-gray-700 group/item">
                        <Check className="text-silver-dark flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-150" size={16} />
                        <span className="text-sm leading-snug group-hover/item:text-primary transition-colors duration-150">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing - фиксированная высота */}
                <div className="p-6 bg-gradient-to-b from-accent/10 to-accent/20 border-t border-gray-100 mt-auto">
                  <div className="text-center mb-3">
                    <div className="text-gray-500 line-through text-sm mb-1">
                      {pkg.originalPrice} ₽
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-primary font-bold text-3xl">
                        {pkg.discountedPrice}
                      </span>
                      <span className="text-primary font-semibold text-lg">₽</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1.5 bg-silver text-primary px-3 py-1.5 rounded-full text-xs font-bold">
                      <TrendingDown size={12} />
                      Скидка {discount} ₽
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Info text */}
        <div 
          className={`mt-10 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-gray-600 text-sm">
            * Цены указаны в рублях. Уточняйте актуальность предложений у администратора
          </p>
        </div>
      </div>
    </section>
  )
}