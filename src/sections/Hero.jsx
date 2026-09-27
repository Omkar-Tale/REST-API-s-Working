import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ChevronDown } from 'lucide-react'
import ApiFlowDiagram from '../components/ApiFlowDiagram'
import { useSmoothScroll } from '../components/SmoothScroll'

// The one deliberately orchestrated moment on the page: a single
// page-load sequence rather than scattered per-element effects.
// Everything else on the site earns its motion through scroll or
// interaction — this is the exception, used once.
export default function Hero() {
  const rootRef = useRef(null)
  const { scrollTo } = useSmoothScroll()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = rootRef.current
    if (!el) return undefined

    const targets = el.querySelectorAll('[data-hero-reveal]')

    if (prefersReducedMotion) {
      gsap.set(targets, { opacity: 1, y: 0 })
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: 26 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.to('[data-hero-eyebrow]', { opacity: 1, y: 0, duration: 0.7 }, 0.1)
        .to('[data-hero-title]', { opacity: 1, y: 0, duration: 1 }, 0.25)
        .to('[data-hero-sub]', { opacity: 1, y: 0, duration: 0.8 }, 0.55)
        .to('[data-hero-body]', { opacity: 1, y: 0, duration: 0.8 }, 0.7)
        .to('[data-hero-diagram]', { opacity: 1, y: 0, duration: 0.9 }, 0.8)
        .to('[data-hero-cue]', { opacity: 1, y: 0, duration: 0.6 }, 1)
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-paper px-6 pb-16 pt-28 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        <div>
          <p data-hero-reveal data-hero-eyebrow className="chapter-eyebrow mb-6">
            Interactive REST API learning experience
          </p>
          <h1
            data-hero-reveal
            data-hero-title
            className="text-[clamp(3.2rem,10vw,7rem)] font-medium leading-[0.95] text-ink"
          >
            REST APIs
          </h1>
          <p
            data-hero-reveal
            data-hero-sub
            className="mt-6 font-display text-[clamp(1.35rem,3vw,2rem)] leading-snug text-ink"
          >
            Understand how the web talks.
          </p>
          <p
            data-hero-reveal
            data-hero-body
            className="mt-6 max-w-md text-base leading-relaxed text-ink-muted md:text-lg"
          >
            A guided walkthrough of resources, representations, HTTP methods and status
            codes — told through one API, one request at a time.
          </p>
          <button
            type="button"
            data-hero-reveal
            data-hero-cue
            onClick={() => scrollTo('#what-is-rest')}
            className="group mt-12 flex items-center gap-2 font-mono text-sm text-ink-muted transition-colors duration-300 hover:text-accent"
          >
            Begin
            <ChevronDown
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </button>
        </div>
        <div data-hero-reveal data-hero-diagram>
          <ApiFlowDiagram className="w-full" />
        </div>
      </div>
    </section>
  )
}
