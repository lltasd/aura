import { useMemo, useState, useEffect, useRef } from 'react'
import { Sparkles, ArrowRight, Zap, ChevronDown, Check } from 'lucide-react'

import { Link } from 'react-router-dom'
import { bodyProcedures } from '../data/bodyProcedures'
import { faceProcedures } from '../data/faceProcedures'
import { devices } from '../data/devices'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { ContactModal } from '../components/BodyContouring'
import WhatsAppButton from '../components/WhatsAppButton'

export default function ProceduresOverviewPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [selectedSalon, setSelectedSalon] = useState<string>('')
  const [selectedDevice, setSelectedDevice] = useState<string>('')
  const [selectedType, setSelectedType] = useState<string>('')
  const [isSalonOpen, setIsSalonOpen] = useState<boolean>(false)
  const [isDeviceOpen, setIsDeviceOpen] = useState<boolean>(false)
  const [isTypeOpen, setIsTypeOpen] = useState<boolean>(false)
  const [deviceQuery, setDeviceQuery] = useState<string>('')
  const [salonIndex, setSalonIndex] = useState<number>(0)
  const [deviceIndex, setDeviceIndex] = useState<number>(0)

  const salonRef = useRef<HTMLDivElement>(null)
  const deviceRef = useRef<HTMLDivElement>(null)
  const typeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (salonRef.current && !salonRef.current.contains(target)) setIsSalonOpen(false)
      if (deviceRef.current && !deviceRef.current.contains(target)) setIsDeviceOpen(false)
      if (typeRef.current && !typeRef.current.contains(target)) setIsTypeOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSalonOpen(false)
        setIsDeviceOpen(false)
        setIsTypeOpen(false)
        return
      }

      // Keyboard navigation for Salon
      const salonOpts: string[] = ['', 'Фёдора Зайцева', 'Челюскинцев']
      if (isSalonOpen) {
        if (e.key === 'ArrowDown') { e.preventDefault(); setSalonIndex(i => Math.min(i + 1, salonOpts.length - 1)) }
        if (e.key === 'ArrowUp')   { e.preventDefault(); setSalonIndex(i => Math.max(i - 1, 0)) }
        if (e.key === 'Enter')     { e.preventDefault(); setSelectedSalon(salonOpts[salonIndex] || ''); setIsSalonOpen(false) }
      }
      // Keyboard navigation for Device
      if (isDeviceOpen) {
        const deviceOpts = [{ slug: '', title: 'Все аппараты', image: '' } as any, ...devices]
          .filter(d => !deviceQuery || d.title.toLowerCase().includes(deviceQuery.toLowerCase()))
        if (e.key === 'ArrowDown') { e.preventDefault(); setDeviceIndex(i => Math.min(i + 1, deviceOpts.length - 1)) }
        if (e.key === 'ArrowUp')   { e.preventDefault(); setDeviceIndex(i => Math.max(i - 1, 0)) }
        if (e.key === 'Enter')     { e.preventDefault(); const opt = deviceOpts[deviceIndex]; if (opt) { setSelectedDevice(opt.slug); setIsDeviceOpen(false) } }
      }
      // Keyboard navigation for Type
      if (isTypeOpen) {
        const typeOpts: string[] = ['', 'Лазерная эпиляция', 'Косметология', 'Аппаратная коррекция фигуры']
        if (e.key === 'ArrowDown') { e.preventDefault(); setSalonIndex(i => Math.min(i + 1, typeOpts.length - 1)) }
        if (e.key === 'ArrowUp')   { e.preventDefault(); setSalonIndex(i => Math.max(i - 1, 0)) }
        if (e.key === 'Enter')     { e.preventDefault(); setSelectedType(typeOpts[salonIndex] || ''); setIsTypeOpen(false) }
      }
    }

    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [isSalonOpen, isDeviceOpen, salonIndex, deviceIndex, deviceQuery, devices])

  const selectedDeviceObj = useMemo(() => devices.find(d => d.slug === selectedDevice), [selectedDevice])

  const laserEpilationSlugs = useMemo(() => ['alexandrite-laser-epilation','diode-laser-epilation'], [])
  const bodyCorrectionSlugs = useMemo(() => ['vibration-massage','cavitation','lpg-massage','pressotherapy','body-modeling','indiba-lifting'], [])

  const sectionsData = useMemo(() => {
    const laser = bodyProcedures
      .filter(p => laserEpilationSlugs.includes(p.slug))
      .map(p => ({
        kind: 'body' as const,
        section: 'Лазерная эпиляция',
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        image: p.image,
        path: `/body-procedures/${p.slug}`
      }))

    const cosmetology = faceProcedures
      .map(p => ({
        kind: 'face' as const,
        section: 'Косметология',
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        image: p.image,
        path: `/face-procedures/${p.slug}`
      }))

    const bodyCorr = bodyProcedures
      .filter(p => bodyCorrectionSlugs.includes(p.slug))
      .map(p => ({
        kind: 'body' as const,
        section: 'Аппаратная коррекция фигуры',
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        image: p.image,
        path: `/body-procedures/${p.slug}`
      }))

    // Include other body procedures into cosmetology to ensure all procedures appear
    const otherBody = bodyProcedures
      .filter(p => !laserEpilationSlugs.includes(p.slug) && !bodyCorrectionSlugs.includes(p.slug))
      .map(p => ({
        kind: 'body' as const,
        section: 'Косметология',
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        image: p.image,
        path: `/body-procedures/${p.slug}`
      }))

    const cosmetologyAll = [...cosmetology, ...otherBody]

    return {
      laser,
      cosmetology: cosmetologyAll,
      bodyCorr,
      combined: [...laser, ...cosmetologyAll, ...bodyCorr]
    }
  }, [laserEpilationSlugs, bodyCorrectionSlugs])

  // mapping: device slug -> array of procedure slugs (face/body) supported by the device
  const deviceProcedureMap = useMemo(() => ({
    'inmode-diolaze-xl': ['diode-laser-epilation'],
    'smas-ultraformer-mpt': ['smas-lifting'],
    'skin-tightening-ultraformer': ['smas-lifting'],
    'morpheus8': ['rf-microneedling'],
    'rf-lifting-volnewmer': ['indiba-lifting'],
    'geneo-plus': ['vacuum-face-cleaning','ultrasonic-face-cleaning','peeling-face','alginate-masks'],
    'lasemd': ['laser-pigmentation-removal'],
    'bbl-hero': ['laser-pigmentation-removal','vascular-stars-removal','pigmentation-removal'],
    'heleo4-led-pro': ['alginate-masks'],
    'laser-rejuvenation-fotona-4d': ['laser-pigmentation-removal'],
  } as Record<string, string[]>), [])

  const filteredSectionsData = useMemo(() => {
    if (!selectedDevice) return sectionsData
    const allowed = new Set(deviceProcedureMap[selectedDevice] || [])
    const filterList = (arr: typeof sectionsData.combined) => arr.filter(p => allowed.has(p.slug))
    return {
      laser: filterList(sectionsData.laser),
      cosmetology: filterList(sectionsData.cosmetology),
      bodyCorr: filterList(sectionsData.bodyCorr),
      combined: filterList(sectionsData.combined)
    }
  }, [sectionsData, selectedDevice, deviceProcedureMap])

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <Header onBookClick={() => setIsContactOpen(true)} variant="dark" />

      <main className="pt-32 pb-20 relative">
        {/* Hero Section - Full Screen */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 min-h-screen flex items-center opacity-0 animate-fadeIn overflow-hidden -mt-32" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-500/15 rounded-full blur-3xl animate-pulse-slower"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-300/10 rounded-full blur-2xl animate-float"></div>

          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.15) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1.5px, transparent 1.5px)',
            backgroundSize: '60px 60px',
            animation: 'gridMove 30s linear infinite'
          }}></div>

          <img
            src="/rose.png"
            alt=""
            aria-hidden
            className="block absolute left-[-30px] top-[-30px] md:left-[-40px] md:top-[-60px] opacity-20 h-[30%] md:h-[65%] -rotate-6 pointer-events-none select-none"
            loading="lazy" decoding="async"
          />

          <div className="container mx-auto px-4 relative z-10 py-32">
            <nav className="text-sm text-slate-400 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <Link to="/" className="hover:text-blue-300 transition-colors duration-300">Главная</Link>
              <span className="mx-2 text-slate-600">›</span>
              <span className="text-slate-300">Виды процедур</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                <div className="inline-block mb-6 px-6 py-2.5 bg-gradient-to-r from-blue-500/25 to-blue-600/25 border border-blue-400/40 rounded-full backdrop-blur-sm shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <span className="text-blue-200 text-sm font-bold uppercase tracking-wide">Наши услуги</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white uppercase mb-6 leading-tight md:leading-none break-words drop-shadow-2xl">
                  Подберите<br />идеальную процедуру
                </h1>
                <p className="text-slate-200 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 font-light">
                  От быстрого бьюти-ухода до комплексного курса
                </p>
                <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                  Мы собрали проверенные методики по трём направлениям: косметология, лазерная эпиляция и аппаратная коррекция фигуры. Фильтры помогут сузить выбор по салону и доступному оборудованию. Нужна подсказка? Наш специалист бесплатно проконсультирует и составит персональный план.
                </p>
                <button 
                  onClick={() => window.scrollTo({ top: window.innerHeight + 80, behavior: 'smooth' })}
                  className="group px-6 py-4 md:px-10 md:py-5 bg-gradient-to-r from-white to-blue-50 text-slate-900 font-bold uppercase tracking-wide rounded-xl hover:from-blue-50 hover:to-white transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 hover:scale-105 border border-white/20 text-base md:text-lg"
                >
                  Смотреть направления
                  <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>

              <div className="opacity-0 animate-fadeInUp lg:justify-self-end" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl max-w-xl lg:ml-auto hover:bg-white/[0.12] transition-all duration-500 hover:shadow-blue-500/20">
                  <h2 className="text-3xl font-black text-white uppercase mb-10 flex items-center">
                    <span className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-500 mr-4 rounded-full shadow-lg shadow-blue-500/50"></span>
                    Направления
                  </h2>
                  <div className="space-y-4 text-slate-200">
                    <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-400"></span> Косметология лица</div>
                    <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-400"></span> Лазерная эпиляция</div>
                    <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-400"></span> Аппаратная коррекция фигуры</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4 mb-8 md:mb-16">
          <div
            className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto
                       bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-slate-200
                       md:bg-transparent md:backdrop-blur-0 md:rounded-none md:p-0 md:shadow-none md:border-0
                       sticky top-24 z-30 md:static"
          >

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Салон</label>
              <div className="relative" ref={salonRef}>
                <button
                  type="button"
                  onClick={() => { setIsSalonOpen(v => !v); setSalonIndex(Math.max(0, ['', 'Фёдора Зайцева', 'Челюскинцев'].indexOf(selectedSalon))) }}
                  className={`w-full text-left px-5 pr-12 py-4 rounded-2xl border-2 bg-white transition-all duration-300 shadow-sm hover:shadow-md font-medium focus:outline-none ${isSalonOpen ? 'border-blue-500 ring-4 ring-blue-100' : 'border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'}`}
                  aria-haspopup="listbox"
                  aria-expanded={isSalonOpen}
                >
                  {selectedSalon || 'Все салоны'}
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </button>
                {isSalonOpen && (
                  <div className="absolute left-0 right-0 mt-2 z-50">
                    <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
                      <ul role="listbox" className="py-1 max-h-60 overflow-auto">
                        {['', 'Фёдора Зайцева', 'Челюскинцев'].map((opt, idx) => {
                          const label = opt || 'Все салоны'
                          const active = selectedSalon === opt
                          return (
                            <li
                              key={label}
                              role="option"
                              aria-selected={active}
                              onClick={() => { setSelectedSalon(opt); setIsSalonOpen(false) }}
                              className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-700' : salonIndex === idx ? 'bg-slate-100' : 'text-slate-700 hover:bg-slate-50'}`}
                            >
                              <span className="truncate">{label}</span>
                              {active ? <Check className="w-4 h-4 text-blue-600" /> : <span className="w-4 h-4" />}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Аппарат</label>
              <div className="relative" ref={deviceRef}>
                <button
                  type="button"
                  onClick={() => { setIsDeviceOpen(v => !v); setDeviceIndex(0) }}
                  className={`w-full text-left px-5 pr-12 py-4 rounded-2xl border-2 bg-white transition-all duration-300 shadow-sm hover:shadow-md font-medium focus:outline-none ${isDeviceOpen ? 'border-blue-500 ring-4 ring-blue-100' : 'border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'}`}
                  aria-haspopup="listbox"
                  aria-expanded={isDeviceOpen}
                >
                  {selectedDeviceObj?.title || 'Все аппараты'}
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </button>

                {isDeviceOpen && (
                  <div className="absolute left-0 right-0 mt-2 z-50">
                    <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
                      <div className="p-2 border-b border-slate-100 bg-slate-50/50">
                        <input
                          value={deviceQuery}
                          onChange={(e) => { setDeviceQuery(e.target.value); setDeviceIndex(0) }}
                          placeholder="Поиск аппарата..."
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <ul role="listbox" className="py-1 max-h-72 overflow-auto">
                        {[{ slug: '', title: 'Все аппараты', image: '' } as any, ...devices]
                          .filter(d => !deviceQuery || d.title.toLowerCase().includes(deviceQuery.toLowerCase()))
                          .map((d, idx) => {
                            const active = selectedDevice === d.slug
                            return (
                              <li
                                key={d.slug || 'all'}
                                role="option"
                                aria-selected={active}
                                onClick={() => { setSelectedDevice(d.slug); setIsDeviceOpen(false) }}
                                className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-700' : deviceIndex === idx ? 'bg-slate-100' : 'text-slate-700 hover:bg-slate-50'}`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  {d.slug ? (
                                    <img src={d.image} alt={d.title} className="w-8 h-8 rounded-lg object-cover border border-slate-200" />
                                  ) : (
                                    <span className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200" />
                                  )}
                                  <span className="truncate">{d.title}</span>
                                </div>
                                {active ? <Check className="w-4 h-4 text-blue-600" /> : <span className="w-4 h-4" />}
                              </li>
                            )
                          })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Тип</label>
              <div className="relative" ref={typeRef}>
                <button
                  type="button"
                  onClick={() => setIsTypeOpen(v => !v)}
                  className={`w-full text-left px-5 pr-12 py-4 rounded-2xl border-2 bg-white transition-all duration-300 shadow-sm hover:shadow-md font-medium focus:outline-none ${isTypeOpen ? 'border-blue-500 ring-4 ring-blue-100' : 'border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'}`}
                  aria-haspopup="listbox"
                  aria-expanded={isTypeOpen}
                >
                  {selectedType || 'Все типы'}
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </button>
                {isTypeOpen && (
                  <div className="absolute left-0 right-0 mt-2 z-50">
                    <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
                      <ul role="listbox" className="py-1 max-h-60 overflow-auto">
                        {['', 'Лазерная эпиляция', 'Косметология', 'Аппаратная коррекция фигуры'].map((opt) => {
                          const label = opt || 'Все типы'
                          const active = selectedType === opt
                          return (
                            <li
                              key={label}
                              role="option"
                              aria-selected={active}
                              onClick={() => { setSelectedType(opt); setIsTypeOpen(false) }}
                              className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
                            >
                              <span className="truncate">{label}</span>
                              {active ? <Check className="w-4 h-4 text-blue-600" /> : <span className="w-4 h-4" />}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {(selectedSalon || selectedDevice || selectedType || deviceQuery) ? (
            <div className="max-w-5xl mx-auto mt-3 md:mt-4 flex justify-end">
              <button
                onClick={() => {
                  setSelectedSalon('')
                  setSelectedDevice('')
                  setSelectedType('')
                  setDeviceQuery('')
                  setIsSalonOpen(false)
                  setIsDeviceOpen(false)
                  setIsTypeOpen(false)
                  setSalonIndex(0)
                  setDeviceIndex(0)
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-slate-300 bg-white text-slate-700 font-semibold shadow-sm hover:shadow-md hover:border-blue-400 hover:text-blue-700 transition-all active:scale-95"
              >
                Сбросить фильтры
              </button>
            </div>
          ) : null}
        </div>

        {/* Sections grouped by type */}
        <div className="container mx-auto px-4 max-w-7xl space-y-20">
          {(!selectedType) ? (
            <section>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredSectionsData.combined.map((p, index) => (
                  <article
                    key={`${p.section}-${p.slug}`}
                    className="group relative animate-slide-up-fade"
                    style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-slate-400 rounded-3xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
                    <div className="relative bg-white/95 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-slate-200 group-hover:border-blue-300/80 h-full flex flex-col transform sm:group-hover:-translate-y-1">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent opacity-60 sm:opacity-70 group-hover:opacity-50 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-transparent w-0 group-hover:w-full transition-all duration-1000" />
                        <span className="absolute top-3 left-3 z-20 inline-flex items-center px-3 py-1 text-xs font-bold rounded-full bg-white/90 text-slate-800 border border-slate-200">{p.section}</span>
                      </div>
                      <div className="p-4 sm:p-6 flex-1 flex flex-col relative">
                        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                        <h3 className="text-base sm:text-lg font-black text-slate-800 mb-2 sm:mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 pt-2">{p.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6 flex-1 line-clamp-5">{p.excerpt}</p>
                        <div className="flex justify-end pt-2">
                          <Link to={p.path} className="relative inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-300 z-20 active:scale-95">
                            <span className="relative z-10 tracking-wide">ПОДРОБНЕЕ</span>
                            <ArrowRight className="relative z-10 w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block" />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : (
            (() => {
              const groups = [
                { name: 'Лазерная эпиляция', items: filteredSectionsData.laser },
                { name: 'Косметология', items: filteredSectionsData.cosmetology },
                { name: 'Аппаратная коррекция фигуры', items: filteredSectionsData.bodyCorr }
              ]
              const ordered = groups.sort((a, b) => (a.name === selectedType ? -1 : b.name === selectedType ? 1 : 0))
              return (
                <>
                  {ordered.map(group => (
                    <section key={group.name}>
                      <div className="mb-8 md:mb-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{group.name}</h2>
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {group.items.map((p, index) => (
                          <article
                            key={`${group.name}-${p.slug}`}
                            className="group relative animate-slide-up-fade"
                            style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
                          >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-slate-400 rounded-3xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
                            <div className="relative bg-white/95 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-slate-200 group-hover:border-blue-300/80 h-full flex flex-col transform sm:group-hover:-translate-y-1">
                              <div className="relative aspect-[16/10] overflow-hidden">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent opacity-60 sm:opacity-70 group-hover:opacity-50 transition-opacity duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-transparent w-0 group-hover:w-full transition-all duration-1000" />
                                <span className="absolute top-3 left-3 z-20 inline-flex items-center px-3 py-1 text-xs font-bold rounded-full bg-white/90 text-slate-800 border border-slate-200">{group.name}</span>
                              </div>
                              <div className="p-4 sm:p-6 flex-1 flex flex-col relative">
                                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                                <h3 className="text-base sm:text-lg font-black text-slate-800 mb-2 sm:mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 pt-2">{p.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6 flex-1 line-clamp-5">{p.excerpt}</p>
                                <div className="flex justify-end pt-2">
                                  <Link to={p.path} className="relative inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-300 z-20 active:scale-95">
                                    <span className="relative z-10 tracking-wide">ПОДРОБНЕЕ</span>
                                    <ArrowRight className="relative z-10 w-5 h-5" />
                                  </Link>
                                </div>
                              </div>
                              <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block" />
                            </div>
                          </article>
                        ))}
                      </div>
                    </section>
                  ))}
                </>
              )
            })()
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="relative group/cta">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-500 to-slate-700 rounded-3xl blur-2xl opacity-25 group-hover/cta:opacity-40 transition-opacity duration-300" />
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-blue-600 to-slate-800 rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
              
              {/* Content */}
              <div className="relative z-10">
                <Sparkles className="w-16 h-16 text-white mx-auto mb-6 animate-bounce-slow" />
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                  Не знаете, что выбрать?
                </h3>
                <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-medium">
                  Получите бесплатную консультацию и персональный подбор процедур
                </p>
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="group/btn inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-700 font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform duration-200"
                >
                  <span>Записаться на консультацию</span>
                  <Zap className="w-6 h-6 group-hover/btn:rotate-12 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.08); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}