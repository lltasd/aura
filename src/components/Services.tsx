import { useState } from 'react'
import { alexandriteServices, diodeServices } from '../data/services'
import type { ServiceItem } from '../data/services'
import { Sparkles, Clock, MapPin, Zap } from 'lucide-react'

interface ServicesProps {}

export default function Services({}: ServicesProps) {
  const [activeLaser, setActiveLaser] = useState<'alexandrite' | 'diode'>('alexandrite')
  const [activeCategory, setActiveCategory] = useState<keyof typeof alexandriteServices>('faceNeck')

  const categories = {
    faceNeck: 'Лицо и шея',
    backStomach: 'Спина и живот',
    arms: 'Руки',
    legs: 'Ноги',
    intimate: 'Интимные зоны',
  }

  const currentServices = activeLaser === 'alexandrite' ? alexandriteServices : diodeServices

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-accent/5 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Sparkles size={18} className="text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Наши услуги</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight">
            ЦЕНЫ НА УСЛУГИ<br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              СТУДИИ КРАСОТЫ АУРА
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent"></div>
            <p className="text-xl text-gray-600 font-light">Лазерная эпиляция</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
        </div>

        {/* Laser type selector with enhanced design */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 max-w-2xl mx-auto">
          <button
            onClick={() => setActiveLaser('alexandrite')}
            className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
              activeLaser === 'alexandrite'
                ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-xl'
                : 'bg-white text-primary border-2 border-primary/30 hover:border-primary hover:shadow-lg'
            }`}
          >
            <Zap size={20} className={activeLaser === 'alexandrite' ? 'text-accent' : 'text-primary'} />
            <span>АЛЕКСАНДРИТОВЫЙ ЛАЗЕР</span>
            {activeLaser === 'alexandrite' && (
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            )}
          </button>
          
          <button
            onClick={() => setActiveLaser('diode')}
            className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
              activeLaser === 'diode'
                ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-xl'
                : 'bg-white text-primary border-2 border-primary/30 hover:border-primary hover:shadow-lg'
            }`}
          >
            <Zap size={20} className={activeLaser === 'diode' ? 'text-accent' : 'text-primary'} />
            <span>ДИОДНЫЙ ЛАЗЕР</span>
            {activeLaser === 'diode' && (
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            )}
          </button>
        </div>

        {/* Category tabs with modern design */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as keyof typeof alexandriteServices)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-accent to-accent/80 text-primary shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-accent/30 border border-gray-200 hover:border-accent'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Services table with enhanced styling */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
                <tr>
                  <th className="px-6 py-5 text-left font-semibold flex items-center gap-2">
                    <Clock size={18} className="text-accent" />
                    Длительность
                  </th>
                  <th className="px-6 py-5 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-accent" />
                      Зона процедуры
                    </div>
                  </th>
                  <th className="px-6 py-5 text-right font-semibold">Стоимость</th>
                </tr>
              </thead>
              <tbody>
                {currentServices[activeCategory].map((service: ServiceItem, index: number) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent transition-all duration-200 group"
                  >
                    <td className="px-6 py-4 text-gray-600 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        {service.duration}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold">{service.zone}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex items-baseline gap-1">
                        <span className="text-primary font-bold text-xl">{service.price}</span>
                        <span className="text-gray-500 text-sm font-medium">руб.</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Enhanced note about male pricing */}
        <div className="mt-8 max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-silver/20 to-transparent border-l-4 border-silver p-6 rounded-xl backdrop-blur-sm">
            <div className="absolute top-4 right-4 opacity-10">
              <Sparkles size={32} className="text-silver" />
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-silver/30 flex items-center justify-center mt-1">
                <span className="text-primary font-bold text-sm">!</span>
              </div>
              <div>
                <p className="text-gray-800 font-medium">
                  <strong className="text-primary">Примечание:</strong> Мужская лазерная эпиляция +25% от прайса
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}