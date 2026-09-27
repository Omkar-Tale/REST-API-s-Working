import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// One consistent entrance — eyebrow, title and deck rise in with a
// short stagger the first time each chapter reaches the upper third
// of the viewport. Used at the top of every chapter for rhythm.
export default function ChapterHeading({ number, title, deck, center = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = ref.current
    if (!el || prefersReducedMotion) return undefined

    const targets = el.querySelectorAll('[data-reveal]')
    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: 22 })
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className={`mb-14 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {number && <p data-reveal className="chapter-eyebrow mb-4">{`Chapter ${number}`}</p>}
      <h2 data-reveal className="text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.08]">
        {title}
      </h2>
      {deck && (
        <p data-reveal className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
          {deck}
        </p>
      )}
    </div>
  )
}
