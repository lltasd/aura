import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop({ behavior = 'auto' }: { behavior?: ScrollBehavior }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // Defer to allow the target element to mount
      const t = window.setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior, block: 'start' })
        } else {
          window.scrollTo({ top: 0, left: 0, behavior })
        }
      }, 50)
      return () => window.clearTimeout(t)
    }

    // Always scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior })
  }, [pathname, hash, behavior])

  return null
}
