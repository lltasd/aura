import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { faceProcedures } from '../data/faceProcedures'
import { bodyProcedures } from '../data/bodyProcedures'
import { devices } from '../data/devices'
import { specialists } from '../data/specialists'

export type SearchModalProps = {
  isOpen: boolean
  onClose: () => void
}

type SearchItem = {
  id: string
  type: 'Лицо' | 'Тело' | 'Аппарат' | 'Специалист'
  title: string
  subtitle?: string
  path: string
}

function normalize(text: string) {
  return text.toLowerCase().trim()
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement | null>(null)

  // Build index once
  const index: SearchItem[] = useMemo(() => {
    const face = faceProcedures.map(p => ({
      id: `face:${p.slug}`,
      type: 'Лицо' as const,
      title: p.title,
      subtitle: p.excerpt,
      path: `/face-procedures/${p.slug}`
    }))
    const body = bodyProcedures.map(p => ({
      id: `body:${p.slug}`,
      type: 'Тело' as const,
      title: p.title,
      subtitle: p.excerpt,
      path: `/body-procedures/${p.slug}`
    }))
    const dev = devices.map(d => ({
      id: `device:${d.slug}`,
      type: 'Аппарат' as const,
      title: d.title,
      subtitle: d.excerpt,
      path: `/hardware-cosmetology/${d.slug}`
    }))
    const team = specialists.map((s, i) => ({
      id: `spec:${i}:${s.name}`,
      type: 'Специалист' as const,
      title: s.name,
      subtitle: s.role,
      path: `/specialists`
    }))
    return [...face, ...body, ...dev, ...team]
  }, [])

  const results = useMemo(() => {
    const q = normalize(query)
    if (!q) return [] as SearchItem[]
    return index.filter(item => {
      const h = `${item.title} ${item.subtitle ?? ''}`.toLowerCase()
      return h.includes(q)
    })
  }, [index, query])

  // focus when open
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 0)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  // esc to close
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Enter' && results[0]) {
        e.preventDefault()
        navigate(results[0].path)
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, results, navigate, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[200] bg-slate-900/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-[210] flex justify-center items-start pt-16 px-4"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          >
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/90">
              <div className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b border-white/10">
                <Search size={18} className="text-accent shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Поиск по процедурам, аппаратам и специалистам..."
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40 text-sm sm:text-base"
                />
                <button onClick={onClose} className="text-white/70 hover:text-accent p-1">
                  <X size={20} />
                </button>
              </div>
              <div className="max-h-[60vh] overflow-y-auto">
                {query.trim().length === 0 && (
                  <div className="px-5 py-6 text-white/60 text-sm">
                    Введите запрос для поиска
                  </div>
                )}
                {query.trim().length > 0 && results.length === 0 && (
                  <div className="px-5 py-6 text-white/60 text-sm">
                    Ничего не найдено
                  </div>
                )}
                {results.length > 0 && (
                  <ul className="divide-y divide-white/10">
                    {results.slice(0, 50).map(item => (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            navigate(item.path)
                            onClose()
                          }}
                          className="w-full text-left px-5 py-4 hover:bg-white/10 transition flex flex-col gap-1"
                        >
                          <div className="text-[11px] uppercase tracking-wider text-accent font-semibold">{item.type}</div>
                          <div className="text-white font-medium leading-snug">{item.title}</div>
                          {item.subtitle && (
                            <div className="text-white/70 text-sm line-clamp-2">{item.subtitle}</div>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
