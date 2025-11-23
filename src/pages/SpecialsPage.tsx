import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { Link } from 'react-router-dom'
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
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
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
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
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
      image: 'https://images.unsplash.com/photo-1604881981053-c8913a3c8763?auto=format&fit=crop&w=1200&q=80',
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
      image: '/second.webp',
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
    {
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      title: 'Новогодний бьюти-бокс в подарок',
      category: 'Праздничная акция',
      discount: 'Подарок',
      description: 'Получите новогодний бьюти-бокс при записи на любую процедуру от 5000 ₽. Внутри — мини-набор профессионального ухода.',
      details: [
        'Подарок при чеке от 5000 ₽',
        'Количество бьюти-боксов ограничено',
        'Состав может отличаться',
        'Только при предварительной записи'
      ],
      validUntil: '31.12.2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      title: 'Счастливые часы -25% на уходы',
      category: 'Новогодние скидки',
      discount: '-25%',
      description: 'Скидка -25% на уходовые процедуры по будням с 11:00 до 15:00. Идеально, чтобы подготовиться к праздникам.',
      details: [
        'Действует по будням 11:00–15:00',
        'Только на уходовые процедуры',
        'По предварительной записи',
        'Скидки не суммируются'
      ],
      validUntil: '29.12.2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1606311841544-27f1b2e0d5b9?auto=format&fit=crop&w=1200&q=80',
      title: '2+1 на лазерную эпиляцию',
      category: 'Новогодние пакеты',
      discount: '2+1',
      description: 'Оплатите две зоны лазерной эпиляции — третью получите в подарок. Подходит для составления индивидуального пакета.',
      details: [
        'Подарочная зона — меньшей стоимости',
        'Можно комбинировать зоны',
        'Доступно для новых и текущих клиентов',
        'По предварительной консультации'
      ],
      validUntil: '15.01.2026'
    },
    {
      image: 'https://images.unsplash.com/photo-1511963210422-040fac6e2a4a?auto=format&fit=crop&w=1200&q=80',
      title: 'Сертификаты +10% номинала',
      category: 'Подарочные сертификаты',
      discount: '+10%',
      description: 'Приобретайте подарочные сертификаты и получайте +10% к номиналу в качестве новогоднего бонуса.',
      details: [
        '+10% начисляется сверху номинала',
        'Можно дарить и использовать по частям',
        'Действует на все услуги',
        'Не суммируется с другими акциями'
      ],
      validUntil: '10.01.2026'
    },
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

      <main className="pt-32 pb-16">
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 min-h-screen flex items-center opacity-0 animate-fadeIn overflow-hidden -mt-32" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-3xl"></div>

          <img
            src="/rose.png"
            alt=""
            aria-hidden
            className="block absolute left-[-30px] top-[-30px] md:left-[-40px] md:top-[-60px] opacity-15 h-[30%] md:h-[65%] -rotate-6 pointer-events-none select-none"
            loading="lazy" decoding="async"
          />

          <div className="container mx-auto px-4 relative z-10 py-32">
            <nav className="text-sm text-slate-400 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <Link to="/" className="hover:text-blue-400 transition-colors">Главная</Link>
              <span className="mx-2 text-slate-600">›</span>
              <span className="text-slate-300">Специальные предложения</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                <div className="inline-block mb-6 px-5 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
                  <span className="text-blue-300 text-sm font-bold uppercase tracking-wider">Лучшие акции месяца</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white uppercase mb-8 leading-none">
                  Специальные<br />предложения
                </h1>
                <p className="text-slate-300 text-2xl leading-relaxed mb-8 font-light">
                  Актуальные акции и выгодные комплексы для вашей красоты
                </p>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                  Выбирайте предложение и записывайтесь — количество мест ограничено.
                </p>
                <button onClick={() => window.scrollTo({ top: window.innerHeight + 80, behavior: 'smooth' })} className="group px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  Смотреть акции
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              <div className="opacity-0 animate-fadeInUp lg:justify-self-end" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl max-w-xl lg:ml-auto">
                  <h2 className="text-3xl font-black text-white uppercase mb-8 flex items-center">
                    <span className="w-2 h-10 bg-blue-400 mr-4 rounded-full"></span>
                    Как воспользоваться
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Выберите предложение и оставьте заявку на сайте или в мессенджере</p>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414л5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414л5-5A2 2 0 009 10.172В5L8 4z" /></svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Подтвердите запись у администратора и приходите в удобное время</p>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/20">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8m-8 4h6" /></svg>
                      </div>
                      <p className="text-slate-300 pt-2 leading-relaxed">Условия действия акции уточняйте при записи — скидки не суммируются</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fadeIn" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
              <div className="flex flex-col items-center gap-2 text-slate-400">
                <span className="text-xs uppercase tracking-wider">Листайте вниз</span>
                <div className="w-6 h-10 border-2 border-slate-400/30 rounded-full flex justify-center p-1">
                  <div className="w-1 h-3 bg-slate-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-200/60">
            <p className="text-slate-700 text-lg leading-relaxed">
              Здесь мы собрали самые выгодные акции и сезонные комплексы — от уходов до аппаратных методик. 
              Выбирайте предложение, оставляйте заявку и закрепляйте цену на период действия акции.
            </p>
            <ul className="mt-4 text-slate-600 text-sm space-y-2 list-disc pl-5">
              <li>Индивидуальный подбор процедур под ваши задачи</li>
              <li>Честные условия — без скрытых доплат</li>
              <li>Количество мест ограничено — предварительная запись обязательна</li>
            </ul>
            <p className="mt-4 text-slate-500 text-sm">
              Примечание: скидки не суммируются. Подробные условия уточняйте у администратора при записи.
            </p>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <article
                key={i}
                onClick={() => setSelectedItem(item)}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer opacity-0 animate-slideUp"
                style={{
                  animationDelay: `${300 + i * 50}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).onerror = null; (e.currentTarget as HTMLImageElement).src = '/slider1.png' }}
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
                referrerPolicy="no-referrer"
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