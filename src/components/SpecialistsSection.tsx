import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
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

  // align near the right edge on mount and on resize so only one card peeks offscreen
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    // choose a fixed peek approximating one card slice depending on viewport
    const vw = el.clientWidth
    const peek = vw >= 1024 ? 220 : vw >= 640 ? 180 : 150
    const target = Math.max(0, maxScroll - peek)
    el.scrollTo({ left: target, behavior: 'auto' })
    handleScroll()

    const onResize = () => {
      const el2 = scrollRef.current
      if (!el2) return
      const maxScroll2 = el2.scrollWidth - el2.clientWidth
      const vw2 = el2.clientWidth
      const peek2 = vw2 >= 1024 ? 220 : vw2 >= 640 ? 180 : 150
      const target2 = Math.max(0, maxScroll2 - peek2)
      el2.scrollTo({ left: target2, behavior: 'auto' })
      handleScroll()
    }
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

  return (
    <>
      {/* Specialists Section */}
      <section className="relative mt-20 py-16">
        {/* Full-bleed background */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-neutral-100" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="mb-10 flex items-center justify-between">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-700 uppercase">
                  Наши специалисты
                </h3>
                <Link 
                  to="/specialists" 
                  className="text-neutral-600 hover:text-neutral-800 font-medium text-sm inline-flex items-center gap-2 transition-all"
                >
                  Смотреть всё
                  <span className="text-base">→</span>
                </Link>
              </div>

              <div className="relative">
                {/* Container-aligned track with slight right overflow so only one card peeks */}
                <div className="relative w-full -mr-[6vw] sm:-mr-[8vw] lg:-mr-[10vw]">
                  <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide justify-start pr-[6vw] sm:pr-[8vw] lg:pr-[10vw] pl-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {items.map((specialist, index) => (
                      <div
                        key={index}
                        className="snap-start min-w-[280px] sm:min-w-[300px] md:min-w-[320px] group flex-shrink-0"
                      >
                        <div className="bg-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-lg">
                          {/* Image container */}
                          <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
                            {specialist.image ? (
                              <img 
                                src={specialist.image} 
                                alt={specialist.name} 
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
                          <div className="p-5 bg-white">
                            <h4 className="font-bold text-neutral-900 text-base uppercase leading-tight mb-1.5 tracking-tight">
                              {specialist.name}
                            </h4>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                              {specialist.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Bottom controls aligned to the right, matching inner padding */}
                  <div className="mt-4 flex justify-end gap-3 pr-[6vw] sm:pr-[8vw] lg:pr-[10vw]">
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