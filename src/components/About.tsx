import { useState, useEffect, useRef } from 'react'
import { X, Award, Users, Sparkles, Phone, Calendar, Star } from 'lucide-react'
import PhoneSelectModal from './PhoneSelectModal'

interface LightboxProps {
  image: string | null
  onClose: () => void
}

function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (image) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-white/80 hover:text-white transition z-10 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 border border-white/30 hover:rotate-90 duration-300"
        onClick={onClose}
        aria-label="Закрыть"
      >
        <X size={32} />
      </button>
      <img
        src={image}
        alt="Увеличенное изображение"
        className="max-w-full max-h-[90vh] object-contain rounded-3xl shadow-2xl border-4 border-white/10"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

interface ImageGalleryProps {
  images: string[]
  onImageClick: (image: string) => void
}

function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] bg-white border border-gray-200 hover:border-primary/60"
        >
          <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center relative">
            {imageErrors.has(index) ? (
              <div className="text-gray-400 text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-semibold text-gray-600">Изображение не найдено</p>
              </div>
            ) : (
              <>
                <img
                  src={image}
                  alt={`Изображение ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  loading="lazy"
                  onError={() => handleImageError(index)}
                  onClick={() => !imageErrors.has(index) && onImageClick(image)}
                />
                <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/40 transition-all duration-500 rounded-3xl pointer-events-none"></div>
              </>
            )}
          </div>
          {!imageErrors.has(index) && (
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
              <span className="text-white font-bold text-sm bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border-2 border-white/40 flex items-center gap-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <Sparkles className="w-4 h-4" />
                Нажмите для увеличения
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

interface AboutProps {
  onBookClick?: () => void
}

export default function About({ onBookClick }: AboutProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const [phoneModalOpen, setPhoneModalOpen] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const observeSection = (key: string) => {
      const element = sectionRefs.current[key]
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set(prev).add(key))
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(element)
      observers.push(observer)
    }

    observeSection('hero')
    observeSection('cabinet')
    observeSection('equipment')
    observeSection('specialists')
    observeSection('cta')

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const handleImageClick = (image: string) => {
    setCurrentImage(image)
    setLightboxOpen(true)
  }

  const handleCloseLightbox = () => {
    setLightboxOpen(false)
    setTimeout(() => setCurrentImage(null), 300)
  }

  const setSectionRef = (key: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[key] = el
  }

  const studioImages = ['/145-5665.webp', '/145-6131.webp']
  const cabinetImages = [
    '/kab1.webp',
    '/kab2.webp',
    '/kab3.webp',
    '/kab4.webp',
    '/kab5.webp',
    '/kab6.webp',
  ]
  const equipmentImages = [
    '/spec1.webp',
    '/spec2.webp',
    '/spec3.webp',
    '/spec4.webp',
    '/spec5.webp',
    '/spec6.webp',
    '/spec7.webp',
    '/spec8.webp',
  ]

  return (
    <section id="about" className="pt-32 pb-16 md:pt-44 md:pb-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 scroll-mt-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-primary-dark/10 to-transparent rounded-full blur-3xl translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={setSectionRef('hero')}
          className={`mb-20 md:mb-32 transition-all duration-1000 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-14 md:mb-20 relative">
            <div className="flex items-center justify-center gap-4 mb-7 md:mb-10">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <Star className="w-6 h-6 text-accent fill-accent animate-pulse" />
              <div className="h-px w-24 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
            </div>
            
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-primary-dark/10 to-accent/10 px-5 py-3 md:px-8 md:py-4 rounded-full mb-7 md:mb-10 border-2 border-primary/30 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <span className="text-primary font-bold text-base uppercase tracking-widest">
                Узнайте больше о нас
              </span>
              <Sparkles className="w-6 h-6 text-primary-dark animate-pulse" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent leading-tight pb-1 md:pb-2">
              О студии красоты «Аура»
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-accent to-accent rounded-full"></div>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <Sparkles className="w-8 h-8 text-accent" />
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <div className="h-1 w-32 bg-gradient-to-l from-transparent via-accent to-accent rounded-full"></div>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Место комфорта и заботы о вашей красоте<br />в центре Донецка
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {studioImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-[2rem] shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.04] border-2 border-white hover:border-accent/60 bg-white"
                onClick={() => handleImageClick(image)}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                  <img
                    src={image}
                    alt={index === 0 ? 'Внешний вид студии' : 'Интерьер студии'}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                  />
                  <div className="absolute inset-4 border-4 border-white/0 group-hover:border-white/50 transition-all duration-700 rounded-3xl pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/0 group-hover:from-primary/40 via-transparent to-transparent transition-all duration-700"></div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-8 py-4 rounded-full border-2 border-accent/60 shadow-2xl">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-gray-800 font-bold text-base">Нажмите для увеличения</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-accent rounded-tl-3xl"></div>
            <div className="absolute -top-6 -right-6 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-4 border-l-4 border-primary-dark rounded-bl-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-accent rounded-br-3xl"></div>
            
            <div className="bg-gradient-to-br from-white via-white to-primary/5 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border-2 border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary-dark/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="flex justify-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary-dark to-accent rounded-full"></div>
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg md:text-2xl text-gray-700 leading-relaxed text-center font-light relative">
                  Студия красоты «Аура» в Донецке — место комфорта и заботы о красоте. Мы предлагаем
                  широкий выбор косметологических услуг, которые помогут подчеркнуть вашу
                  индивидуальность, сохранить молодость и здоровье кожи.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={setSectionRef('cabinet')}
          className={`mb-24 md:mb-32 transition-all duration-1000 delay-100 ${
            visibleSections.has('cabinet') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center rotate-45 shadow-xl">
                <Sparkles className="w-6 h-6 text-white -rotate-45" />
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-accent to-transparent"></div>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 bg-gradient-to-r from-primary via-accent to-accent bg-clip-text text-transparent leading-tight">
              Наши кабинеты
            </h3>
            <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Современное оснащение и комфортная атмосфера<br />для вашего удобства
            </p>
          </div>
          <ImageGallery images={cabinetImages} onImageClick={handleImageClick} />
        </div>

        <div
          ref={setSectionRef('equipment')}
          className={`mb-24 md:mb-32 transition-all duration-1000 delay-200 ${
            visibleSections.has('equipment') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Star className="w-6 h-6 text-accent fill-accent" />
              <div className="h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full"></div>
              <Sparkles className="w-7 h-7 text-primary animate-pulse" />
              <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>
              <Star className="w-6 h-6 text-primary-dark fill-primary-dark" />
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-10 bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent leading-tight">
              Современные технологии<br />и оборудование
            </h3>
            
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-white via-primary/5 to-primary-dark/5 rounded-3xl p-8 md:p-12 lg:p-14 border-2 border-primary/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary-dark/20 to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative">
                <div className="flex justify-center mb-6">
                  <Award className="w-16 h-16 text-accent" />
                </div>
                <p className="text-base sm:text-lg md:text-2xl text-gray-700 leading-relaxed font-light">
                  Студия «Аура» оснащена современным высокотехнологичным оборудованием, чтобы каждая
                  процедура была и эффективной, и безопасной. Каждый специалист студии подходит к
                  клиенту с вниманием, предлагая персонализированные решения, основанные на
                  потребностях и пожеланиях.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {equipmentImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white border-2 border-gray-100 hover:border-accent/60"
                onClick={() => handleImageClick(image)}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                  <img
                    src={image}
                    alt={`Оборудование ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    loading="lazy"
                  />
                  <div className="absolute inset-2 border-2 border-white/0 group-hover:border-white/60 transition-all duration-500 rounded-2xl"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/0 group-hover:from-primary/60 via-transparent to-transparent transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <div className="text-white text-sm font-bold bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border-2 border-white/40 shadow-xl flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Увеличить
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={setSectionRef('specialists')}
          className={`mb-24 md:mb-32 transition-all duration-1000 delay-300 ${
            visibleSections.has('specialists') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center bg-gradient-to-br from-white via-primary/5 to-primary-dark/5 rounded-[2rem] p-8 md:p-14 lg:p-16 shadow-2xl border-2 border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary-dark/15 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="bg-gradient-to-br from-primary to-primary-dark p-4 rounded-2xl shadow-xl transform hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Наши специалисты
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 font-light">
                Наша команда — это специалисты-профессионалы. Все сотрудники студии имеют
                медицинское образование и большой опыт работы. Регулярное обучение новым и
                современным техникам и процедурам, прохождение сертификации, следование трендам в
                индустрии красоты позволяет идти в ногу со временем и предлагать самые качественные
                услуги.
              </p>
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl border-2 border-accent/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Award className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
                <p className="text-base text-gray-700 font-medium leading-relaxed">
                  Больше информации о специалистах студии — на странице нашей косметологии
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-white hover:border-accent/60 z-10">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                <img
                  src="/team-photo.jpg"
                  alt="Наша команда специалистов"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-4 border-4 border-white/0 group-hover:border-white/50 transition-all duration-700 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={setSectionRef('cta')}
          className={`bg-gradient-to-br from-primary via-primary-dark to-accent rounded-[2.5rem] p-8 md:p-16 lg:p-20 text-white text-center shadow-2xl relative overflow-hidden transition-all duration-1000 delay-400 ${
            visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/50 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
              <Star className="w-6 h-6 text-accent fill-accent animate-pulse" />
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/40 shadow-xl">
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                <span className="text-white font-bold text-base uppercase tracking-widest">
                  Готовы начать?
                </span>
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              </div>
              <Star className="w-6 h-6 text-accent fill-accent animate-pulse" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">
              Доверьте свою красоту<br />профессионалам
            </h3>
            
            <div className="flex justify-center mb-10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <div className="w-24 h-1.5 bg-white/40 rounded-full"></div>
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-2xl text-white/95 mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Мы поможем вам выглядеть великолепно и всегда чувствовать себя уверенно! Записаться на
              косметологические процедуры можно прямо сейчас.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
              <button
                onClick={onBookClick}
                className="group bg-accent hover:bg-silver-light text-primary px-8 py-4 md:px-12 md:py-6 rounded-2xl font-black text-base sm:text-lg md:text-xl transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-4 border-2 border-accent/20"
              >
                <Calendar size={24} className="md:size-7 group-hover:rotate-12 transition-transform duration-300" />
                Заказать звонок
              </button>
              <button
                type="button"
                onClick={() => setPhoneModalOpen(true)}
                className="group bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl font-black text-base sm:text-lg md:text-xl transition-all transform hover:scale-110 border-3 border-white/50 hover:border-white/70 inline-flex items-center gap-4 shadow-2xl hover:shadow-3xl"
              >
                <Phone size={24} className="md:size-7 group-hover:rotate-12 transition-transform duration-300" />
                Позвонить сейчас
              </button>
            </div>
            
            
          </div>
        </div>
      </div>

      {lightboxOpen && <Lightbox image={currentImage} onClose={handleCloseLightbox} />}
      <PhoneSelectModal isOpen={phoneModalOpen} onClose={() => setPhoneModalOpen(false)} />
    </section>
  )
}