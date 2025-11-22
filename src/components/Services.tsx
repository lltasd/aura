import { useState } from 'react'
import { alexandriteServices, diodeServices } from '../data/services'
import type { ServiceItem } from '../data/services'

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
    <section id="services" className="py-20 bg-gradient-to-b from-white to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            ЦЕНЫ НА УСЛУГИ СТУДИИ КРАСОТЫ АУРА
          </h2>
          <p className="text-xl text-gray-600">Лазерная эпиляция</p>
        </div>

        {/* Laser type selector */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveLaser('alexandrite')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeLaser === 'alexandrite'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-primary border-2 border-primary hover:bg-primary/10'
            }`}
          >
            АЛЕКСАНДРИТОВЫЙ ЛАЗЕР
          </button>
          <button
            onClick={() => setActiveLaser('diode')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeLaser === 'diode'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-primary border-2 border-primary hover:bg-primary/10'
            }`}
          >
            ДИОДНЫЙ ЛАЗЕР
          </button>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as keyof typeof alexandriteServices)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeCategory === key
                  ? 'bg-accent text-primary'
                  : 'bg-white text-gray-700 hover:bg-accent/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Services table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Длительность</th>
                  <th className="px-6 py-4 text-left font-semibold">Зона процедуры</th>
                  <th className="px-6 py-4 text-right font-semibold">Стоимость</th>
                </tr>
              </thead>
              <tbody>
                {currentServices[activeCategory].map((service: ServiceItem, index: number) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-accent/10 transition"
                  >
                    <td className="px-6 py-4 text-gray-700">{service.duration}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{service.zone}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-primary font-bold text-lg">{service.price}</span>
                      <span className="text-gray-500 ml-1">руб.</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note about male pricing */}
        <div className="mt-6 bg-silver/10 border-l-4 border-silver p-4 rounded">
          <p className="text-gray-700">
            <strong>Примечание:</strong> Мужская лазерная эпиляция +25% от прайса
          </p>
        </div>
      </div>
    </section>
  )
}

