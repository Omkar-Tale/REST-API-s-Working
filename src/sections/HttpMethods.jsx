import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Section from '../components/Section'
import ChapterHeading from '../components/ChapterHeading'
import MethodDetail from '../components/MethodDetail'
import { methods } from '../data/methods'

export default function HttpMethods() {
  const [active, setActive] = useState(0)
  const detailRef = useRef(null)
  const current = methods[active]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !detailRef.current) return undefined
    gsap.fromTo(
      detailRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
    )
  }, [active])

  return (
    <Section id="http-methods" alt>
      <ChapterHeading
        number="05"
        title="HTTP methods"
        deck="Five verbs cover almost everything a REST API does. Choose one to see it act on the same resource."
      />

      <div role="tablist" aria-label="HTTP methods" className="mb-10 flex flex-wrap gap-2">
        {methods.map((m, index) => (
          <button
            key={m.method}
            type="button"
            role="tab"
            aria-selected={active === index}
            onClick={() => setActive(index)}
            className={`rounded-full border px-5 py-2 font-mono text-sm transition-colors duration-300 ease-editorial ${
              active === index
                ? 'border-accent bg-accent text-white'
                : 'border-line-strong text-ink-muted hover:border-ink/30 hover:text-ink'
            }`}
          >
            {m.method}
          </button>
        ))}
      </div>

      <div ref={detailRef}>
        <MethodDetail data={current} />
      </div>
    </Section>
  )
}
