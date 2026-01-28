import { Sparkles, Syringe, Activity, Zap } from 'lucide-react'
import {
  cosmetologyServices,
  injectionServices,
  hardwareCosmetologyServices,
  threadLiftingServices,
  type PriceListCategory,
  type ServiceItem,
} from '../data/services'

function PriceListBlock({ title, categories }: { title: string; categories: PriceListCategory[] }) {
  return (
    <section className="py-14 bg-gradient-to-b from-white via-gray-50 to-white scroll-mt-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              {title}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {categories.map((category, idx) => (
              <div key={idx} className="p-4 md:p-5">
                <h3 className="text-sm md:text-base font-semibold text-primary mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-800">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-baseline justify-between gap-3 py-1 border-b last:border-b-0 border-dashed border-gray-100"
                    >
                      <span className="flex-1">{item.name}</span>
                      <span className="whitespace-nowrap font-semibold text-primary text-sm">
                        {item.from && (
                          <span className="text-[11px] text-gray-500 mr-1 align-middle">от</span>
                        )}
                        {item.price}
                        <span className="text-[11px] text-gray-500 ml-0.5 align-middle">руб.</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HardwareTableSection() {
  const groups: { key: keyof typeof hardwareCosmetologyServices; title: string; icon: JSX.Element }[] = [
    { key: 'rfMicroneedling', title: 'Микроигольчатый RF-лифтинг', icon: <Activity className="w-4 h-4" /> },
    { key: 'smasLifting', title: 'SMAS-лифтинг', icon: <Activity className="w-4 h-4" /> },
    { key: 'ledTherapy', title: 'LED-терапия', icon: <Zap className="w-4 h-4" /> },
    { key: 'vascularFace', title: 'Лазерное удаление сосудов на лице', icon: <Activity className="w-4 h-4" /> },
    { key: 'vascularBody', title: 'Лазерное удаление сосудов на теле', icon: <Activity className="w-4 h-4" /> },
    { key: 'pigmentation', title: 'Удаление пигментации', icon: <Activity className="w-4 h-4" /> },
    { key: 'permanentRemoval', title: 'Лазерное удаление перманента', icon: <Activity className="w-4 h-4" /> },
    { key: 'tattooRemoval', title: 'Лазерное удаление татуировок', icon: <Activity className="w-4 h-4" /> },
  ]

  return (
    <section className="py-14 bg-gradient-to-b from-accent/5 via-white to-accent/5 scroll-mt-28">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Activity className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              Аппаратная косметология
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {groups.map(({ key, title, icon }) => {
            const items = hardwareCosmetologyServices[key] as ServiceItem[]
            return (
              <div
                key={key}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 bg-gray-50">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    {icon}
                  </span>
                  <h3 className="text-base font-bold text-primary">{title}</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gradient-to-r from-primary to-primary-dark text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Длительность</th>
                        <th className="px-4 py-3 text-left font-semibold">Зона процедуры</th>
                        <th className="px-4 py-3 text-right font-semibold">Стоимость</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, idx) => (
                        <tr key={idx} className="border-t border-gray-100 hover:bg-accent/5">
                          <td className="px-4 py-2 text-gray-700">{item.duration}</td>
                          <td className="px-4 py-2 text-gray-900 font-medium">{item.zone}</td>
                          <td className="px-4 py-2 text-right text-primary font-semibold whitespace-nowrap">
                            {item.from && <span className="text-xs text-gray-500 mr-1">от</span>}
                            {item.price} <span className="text-xs text-gray-500 ml-0.5">руб.</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ThreadLiftingSection() {
  const items = threadLiftingServices.items as ServiceItem[]

  return (
    <section className="py-14 bg-gradient-to-b from-white via-gray-50 to-white scroll-mt-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-3">
            <Syringe className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              Нитевой лифтинг
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-primary to-primary-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Длительность</th>
                  <th className="px-4 py-3 text-left font-semibold">Зона процедуры</th>
                  <th className="px-4 py-3 text-right font-semibold">Стоимость</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, idx) => (
                  <tr key={idx} className="border-t border-gray-100 hover:bg-accent/5">
                    <td className="px-4 py-2 text-gray-700">{item.duration}</td>
                    <td className="px-4 py-2 text-gray-900 font-medium">{item.zone}</td>
                    <td className="px-4 py-2 text-right text-primary font-semibold whitespace-nowrap">
                      {item.price} <span className="text-xs text-gray-500 ml-0.5">руб.</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ExtendedPricingSections() {
  return (
    <>
      <PriceListBlock title="Косметология" categories={cosmetologyServices} />
      <PriceListBlock title="Инъекционные процедуры" categories={injectionServices} />
      <HardwareTableSection />
      <ThreadLiftingSection />
    </>
  )
}
