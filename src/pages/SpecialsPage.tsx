import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { Link } from 'react-router-dom'
import { bodyProcedures } from '../data/bodyProcedures'
import { faceProcedures } from '../data/faceProcedures'
import { X } from 'lucide-react'

type SpecialItem = {
  image: string
  title: string
  category: string
  discount: string
  description: string
  details: string[]
  validUntil: string
}

export default function SpecialsPage() {
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState<SpecialItem | null>(null)

  const items: SpecialItem[] = [
    {
      image: '/path-to-maldives.jpg',
      title: 'Розыгрыш 3-дневного путешествия на Мальдивы',
      category: 'Путешествие',
      discount: 'Розыгрыш',
      description: 'Примите участие в розыгрыше роскошного 3-дневного тура на Мальдивы. Незабываемый отдых в райском уголке планеты ждет победителя.',
      details: [
        'Проживание в 5-звездочном отеле',
        'Трансфер и перелет включены',
        'Завтраки и ужины',
        'Спа-процедуры в подарок'
      ],
      validUntil: '31.12.2025'
    },
    {
      image: '/path-to-birthday.jpg',
      title: 'День рождения салонов красоты «МильФей» — 18 лет!',
      category: 'Специальное предложение',
      discount: '18%',
      description: 'Празднуем совершеннолетие сети салонов «МильФей». Специальные скидки на все услуги в честь нашего дня рождения.',
      details: [
        'Скидка 18% на все услуги 20-23 ноября',
        'Только 23 ноября скидка 18% на все, включая продукцию для домашнего ухода',
        'Возможность выиграть 3-дневное путешествие на Мальдивы для двоих',
        'Беспроигрышная лотерея с подарками при чеке от 50.000₽'
      ],
      validUntil: '23.11.2025'
    },
    {
      image: '/path-to-fotona.jpg',
      title: 'Скидка -20% на лазерное омоложение Fotona 4D',
      category: 'Лазерные процедуры',
      discount: '-20%',
      description: 'Инновационная процедура лазерного омоложения Fotona 4D теперь доступна со значительной скидкой. Эффективная подтяжка и омоложение кожи без операции.',
      details: [
        'Комплексное воздействие на все слои кожи',
        'Видимый эффект лифтинга после первой процедуры',
        'Стимуляция выработки коллагена',
        'Без периода реабилитации'
      ],
      validUntil: '30.11.2025'
    },
    {
      image: '/path-to-hydrafacial.jpg',
      title: 'Скидка -30% на комплекс HydraFacial+Heleo4',
      category: 'Уход за кожей',
      discount: '-30%',
      description: 'Эксклюзивное предложение на комплексный уход за кожей лица. Сочетание HydraFacial и Heleo4 для максимального эффекта очищения и омоложения.',
      details: [
        'Глубокое очищение и увлажнение кожи',
        'Действует только в салоне МоскваСити',
        'Видимый результат после первой процедуры',
        'Подходит для всех типов кожи'
      ],
      validUntil: '15.12.2025'
    },
    ...faceProcedures.map((p) => ({
      image: p.image,
      title: p.title,
      category: 'Процедуры для лица',
      discount: 'Акция',
      description:
        p.excerpt || 'Профессиональный уход за кожей лица с использованием современных технологий и препаратов премиум-класса.',
      details: [
        'Консультация специалиста',
        'Индивидуальный подход',
        'Сертифицированные препараты',
        'Гарантия результата'
      ],
      validUntil: '31.12.2025'
    })),
    ...bodyProcedures.map((p) => ({
      image: p.image,
      title: p.title,
      category: 'Процедуры для тела',
      discount: 'Акция',
      description:
        p.excerpt || 'Эффективные процедуры для коррекции фигуры и ухода за телом с использованием передовых методик и аппаратуры.',
      details: [
        'Современное оборудование',
        'Опытные специалисты',
        'Комплексный подход',
        'Видимые результаты'
      ],
      validUntil: '31.12.2025'
    })),
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedItem])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-ping opacity-75"></div>
            <div className="absolute inset-0 border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-t-transparent border-r-indigo-600 border-b-transparent border-l-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          </div>
          <div className="text-slate-600 font-medium text-lg tracking-wide animate-pulse">
            Загрузка специальных предложений...
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <Header onBookClick={() => {}} />

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-16 animate-fadeIn">
        <nav className="text-sm text-slate-500 mb-6 opacity-0 animate-slideDown" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <Link to="/" className="hover:text-blue-700 transition-colors">Главная</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-700">Специальные предложения</span>
        </nav>

        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-800 mb-12 uppercase opacity-0 animate-slideDown" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          Специальные предложения
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <article 
              key={i} 
              onClick={() => setSelectedItem(item)}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer opacity-0 animate-slideUp transform hover:-translate-y-2"
              style={{ 
                animationDelay: `${300 + i * 50}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                  {item.discount}
                </div>

                <div className="absolute inset-x-4 bottom-4 text-white">
                  <div className="text-xs uppercase tracking-widest font-bold opacity-90 mb-2 text-blue-300">
                    {item.category}
                  </div>
                  <div className="text-lg font-black leading-tight mb-3 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </div>
                  <div className="text-xs opacity-75 group-hover:opacity-100 transition-opacity">
                    Нажмите для подробностей →
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {selectedItem && (
        <div 
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-96">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-800 rounded-full p-2 transition-all duration-300 hover:rotate-90"
              >
                <X size={24} />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-block bg-blue-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-3">
                  {selectedItem.discount}
                </div>
                <h2 className="text-3xl md:text-4xl font-black leading-tight">
                  {selectedItem.title}
                </h2>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-2">
                  {selectedItem.category}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Условия акции:</h3>
                <ul className="space-y-3">
                  {selectedItem.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <div className="text-sm text-slate-500">
                  Акция действует до: <span className="font-semibold text-slate-700">{selectedItem.validUntil}</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}