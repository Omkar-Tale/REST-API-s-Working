import { createContext, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollContext = createContext({
  scrollTo: (target) => {
    const el = typeof target === 'string' ? document.querySelector(target) : target
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  },
})

export function useSmoothScroll() {
  return useContext(ScrollContext)
}

// Wraps the app, drives Lenis off GSAP's ticker (the recommended
// pairing so Lenis and ScrollTrigger agree on scroll position every
// frame), and skips smoothing entirely when the visitor has asked
// for reduced motion — native scroll takes over instead.
export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    function update(time) {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollTo = (target, options) => {
    const el = typeof target === 'string' ? document.querySelector(target) : target
    if (!el) return
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: 0, ...options })
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return <ScrollContext.Provider value={{ scrollTo }}>{children}</ScrollContext.Provider>
}
