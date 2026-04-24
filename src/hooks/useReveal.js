import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y:        options.y        ?? 60,
        opacity:  0,
        duration: options.duration ?? 0.9,
        delay:    options.delay    ?? 0,
        ease:     'expo.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: el,
          start:   'top 90%',
          once:    true,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}
