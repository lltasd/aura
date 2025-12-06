import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type SpecialItem = {
  image: string
  title: string
}

export default function SpecialsRow({ items }: { items: SpecialItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    handleScroll()
  }, [])

  // align near the right edge on mount so one card peeks offscreen
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    const vw = el.clientWidth
    const peek = vw >= 1024 ? 220 : vw >= 640 ? 180 : 150
    const target = Math.max(0, maxScroll - peek)
    el.scrollTo({ left: target, behavior: 'auto' })
    handleScroll()
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const delta = 320
    const x = dir === 'left' ? scrollRef.current.scrollLeft - delta : scrollRef.current.scrollLeft + delta
    scrollRef.current.scrollTo({ left: x, behavior: 'smooth' })
  }

  // Create refs and visibility state for each card
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  
  // Initialize visibility array with false values
  useEffect(() => {
    setVisibleCards(Array(items.length).fill(false))
  }, [items.length])
  
  // Set up intersection observer for each card
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    
    cardRefs.current.forEach((card, index) => {
      if (!card) return
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
            observer.disconnect()
          }
        },
        {
          threshold: 0.3, // 30% of the card must be visible
          rootMargin: '0px 0px -50px 0px' // Bottom margin to trigger slightly before scrolled into full view
        }
      )
      
      observer.observe(card)
      observers.push(observer)
    })
    
    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [items.length])

  return (
    <section className="relative mt-20 py-16">
      {/* Full-bleed background */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-blue-50 via-blue-50/70 to-slate-50" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between flex-wrap gap-x-3 gap-y-1">
          <Link 
            to="/specials" 
            className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center gap-2 transition-all shrink-0 order-[-1] w-full justify-end text-right mt-4 mb-0 sm:order-none sm:w-auto sm:justify-start sm:text-inherit sm:mt-0 sm:mb-0"
          >
            Смотреть всё
            <span className="text-base">→</span>
          </Link>
          <h3 className="text-3xl md:text-4xl font-black font-display tracking-tight text-blue-700 uppercase">СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h3>
        </div>

        <div className="relative">
          {/* Container-aligned with slight right overflow */}
          <div className="relative w-full -mr-[6vw] sm:-mr-[8vw] lg:-mr-[10vw]">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide justify-start pr-[6vw] sm:pr-[8vw] lg:pr-[10vw] pl-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <AnimatePresence>
                {items.map((p, i) => (
                  <motion.div 
                    key={i} 
                    ref={el => cardRefs.current[i] = el}
                    className="snap-start w-[280px] sm:w-[300px] md:w-[320px] group flex-shrink-0"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={visibleCards[i] ? { 
                      opacity: 1, 
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1 * (i % 3) // Stagger based on position but in groups of 3
                      }
                    } : {}}
                  >
                    <div className="bg-white/95 border border-blue-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
                      {/* Image container */}
                      <motion.div 
                        className="relative aspect-[3/4] overflow-hidden bg-slate-100"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.img 
                          src={p.image} 
                          alt={p.title}
                          initial={{ scale: 1.05 }}
                          animate={visibleCards[i] ? { 
                            scale: 1,
                            transition: { 
                              duration: 0.8,
                              delay: 0.1 * (i % 3) + 0.1
                            }
                          } : {}}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <motion.div 
                          className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/80 text-slate-800 text-[10px] font-black uppercase tracking-wide shadow-sm"
                          initial={{ x: -10, opacity: 0 }}
                          animate={visibleCards[i] ? { 
                            x: 0, 
                            opacity: 1,
                            transition: { 
                              delay: 0.1 * (i % 3) + 0.2,
                              duration: 0.4 
                            }
                          } : {}}
                        >
                          Акция
                        </motion.div>
                      </motion.div>

                      {/* Info footer */}
                      <div className="p-5 bg-white/95 min-h-[72px]">
                        <motion.h4 
                          className="font-bold text-neutral-900 text-base uppercase leading-tight tracking-tight line-clamp-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={visibleCards[i] ? { 
                            opacity: 1, 
                            y: 0,
                            transition: { 
                              delay: 0.1 * (i % 3) + 0.15,
                              duration: 0.4,
                              ease: "easeOut"
                            }
                          } : {}}
                        >
                          {p.title}
                        </motion.h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Bottom controls aligned to the right, matching padding */}
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

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
