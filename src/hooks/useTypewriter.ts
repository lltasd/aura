import { useEffect, useState } from 'react'

interface UseTypewriterOptions {
  speed?: number // ms per character
  startDelay?: number // ms before typing starts
  enabled?: boolean // whether typing should run
}

export function useTypewriter(fullText: string, options: UseTypewriterOptions = {}) {
  const { speed = 60, startDelay = 300, enabled = true } = options
  const [text, setText] = useState('')

  useEffect(() => {
    if (!enabled) {
      // Ждём, пока enabled станет true, не трогая уже напечатанный текст
      return
    }

    let frame: number | null = null
    let startTime: number | null = null

    const step = (time: number) => {
      if (startTime === null) {
        startTime = time
      }

      const elapsed = time - startTime
      if (elapsed < startDelay) {
        frame = requestAnimationFrame(step)
        return
      }

      const typingElapsed = elapsed - startDelay
      const charsToShow = Math.min(
        fullText.length,
        Math.floor(typingElapsed / speed)
      )

      setText(fullText.slice(0, charsToShow))

      if (charsToShow < fullText.length) {
        frame = requestAnimationFrame(step)
      }
    }

    frame = requestAnimationFrame(step)

    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [fullText, speed, startDelay, enabled])

  return text
}
