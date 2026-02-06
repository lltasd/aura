import { useEffect, useRef, useState } from 'react'

interface UseParallaxOptions {
  strength?: number // 0–1, how strong the movement is
}

export function useParallax({ strength = 0.2 }: UseParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame: number | null = null

    const handleScroll = () => {
      if (frame !== null) return
      frame = requestAnimationFrame(() => {
        frame = null
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight || 1
        const progress = rect.top / vh
        setOffset(progress * strength * 40) // up to ~40px shift
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [strength])

  const style: React.CSSProperties = {
    transform: `translateY(${offset}px)`,
    transition: 'transform 0.05s linear',
    willChange: 'transform',
  }

  return { ref, style }
}
