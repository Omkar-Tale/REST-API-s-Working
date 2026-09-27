import { useEffect, useState } from 'react'
import { chapters } from '../data/chapters'
import { useSmoothScroll } from './SmoothScroll'

// A compact right-edge dot rail rather than a documentation sidebar.
// Each chapter is a small pill that grows and labels itself when
// active; inactive ones reveal their label on hover only.
export default function FloatingNav() {
  const [active, setActive] = useState(chapters[0].id)
  const [visible, setVisible] = useState(false)
  const { scrollTo } = useSmoothScroll()

  useEffect(() => {
    const heroEl = document.getElementById('hero')
    const heroObserver = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.3 },
    )
    if (heroEl) heroObserver.observe(heroEl)

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-42% 0px -50% 0px', threshold: 0 },
    )
    chapters.forEach((chapter) => {
      const el = document.getElementById(chapter.id)
      if (el) sectionObserver.observe(el)
    })

    return () => {
      heroObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  return (
    <nav
      aria-label="Chapter navigation"
      className={`fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 transition-opacity duration-500 lg:flex ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {chapters.map((chapter) => {
        const isActive = active === chapter.id
        return (
          <button
            key={chapter.id}
            type="button"
            onClick={() => scrollTo(`#${chapter.id}`)}
            className="group flex items-center gap-3"
            aria-current={isActive ? 'true' : undefined}
          >
            <span
              className={`whitespace-nowrap font-mono text-[11px] transition-all duration-300 ease-editorial ${
                isActive
                  ? 'translate-x-0 text-ink opacity-100'
                  : 'translate-x-1 text-ink-muted opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
              }`}
            >
              {chapter.number} — {chapter.title}
            </span>
            <span
              className={`h-1.5 rounded-full transition-all duration-300 ease-editorial ${
                isActive ? 'w-7 bg-accent' : 'w-1.5 bg-ink/20 group-hover:bg-ink/40'
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
