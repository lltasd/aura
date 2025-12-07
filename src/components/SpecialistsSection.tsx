import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'

import { ChevronLeft, ChevronRight } from 'lucide-react'

type Specialist = {
  name: string
  role: string
  image: string
}

export default function SpecialistsSection({ items }: { items: Specialist[] }) {

  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // initialize scroll state and update on resize
  useEffect(() => {
    handleScroll()
    const onResize = () => handleScroll()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <>
      {/* Specialists Section */}
      <section
        ref={sectionRef}
        className={`relative mt-20 py-16 transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        {/* Full-bleed background */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-blue-50 via-blue-50/70 to-slate-50" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="mb-10 flex items-center justify-between flex-wrap gap-x-3 gap-y-1">
                <Link 
                  to="/specialists" 
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center gap-2 transition-all shrink-0 order-[-1] w-full justify-end text-right mt-4 mb-0 sm:order-none sm:w-auto sm:justify-start sm:text-inherit sm:mt-0 sm:mb-0"
                >
                  Смотреть всё
                  <span className="text-base">→</span>
                </Link>
                <div className="flex flex-col items-start sm:items-start">
                  <h3 className="text-3xl md:text-4xl font-black font-display tracking-tight text-blue-900 uppercase">
                    Наши специалисты
                  </h3>
                  <div className="mt-2 h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                </div>
              </div>

              <div className="relative">
                <div
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide px-1"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {items.map((specialist, index) => (
                    <div
                      key={index}
                      className="snap-start w-[300px] group flex-shrink-0"
                    >
                      <div className="bg-white/95 border border-blue-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">

                        {/* Image container */}
                        <div className="relative h-[400px] overflow-hidden bg-slate-100">

                          {specialist.image ? (
                            <img 
                              src={specialist.image} 
                              alt={specialist.name} 
                              onError={(e) => { (e.currentTarget as HTMLImageElement).onerror = null; (e.currentTarget as HTMLImageElement).src = '/first.webp' }}
                              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-neutral-200">
                              <div className="text-6xl text-neutral-400 font-bold">
                                {specialist.name.charAt(0)}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Info section */}
                        <div className="p-5 min-h-[120px] bg-white/90">

                          <h4
                            className="font-bold text-neutral-900 text-base uppercase leading-tight mb-1.5 tracking-tight overflow-hidden"
                            style={{
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical' as any
                            }}
                          >
                            {specialist.name}
                          </h4>
                          <p
                            className="text-neutral-600 text-sm leading-relaxed overflow-hidden"
                            style={{
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical' as any
                            }}
                          >
                            {specialist.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Bottom controls */}
                <div className="mt-4 flex justify-end gap-3 px-1">
                  <button
                    onClick={() => scroll('left')}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-700 shadow-md hover:shadow-lg hover:bg-neutral-50 transition-all disabled:opacity-40"
                    aria-label="Scroll left"
                    disabled={!canScrollLeft}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-700 shadow-md hover:shadow-lg hover:bg-neutral-50 transition-all disabled:opacity-40"
                    aria-label="Scroll right"
                    disabled={!canScrollRight}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  )
}