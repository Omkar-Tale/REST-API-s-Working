import { ArrowUp, CheckCircle2 } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { useSmoothScroll } from '../components/SmoothScroll'

export default function Closing() {
  const { scrollTo } = useSmoothScroll()

  return (
    <Section id="closing" className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <Reveal>
        <CheckCircle2 size={30} className="mx-auto mb-6 text-success" aria-hidden="true" />
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.08]">That&rsquo;s the whole model.</h2>
      </Reveal>
      <Reveal delay={0.2} as="p" className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
        A resource, addressed by a URI. Represented as JSON. Reached through a stateless
        request. Acted on by a method that means what it says. Confirmed — or explained —
        by a status code. That&rsquo;s REST.
      </Reveal>
      <Reveal delay={0.3}>
        <button type="button" onClick={() => scrollTo('#hero')} className="btn-editorial mt-10">
          <ArrowUp size={15} aria-hidden="true" />
          Back to the top
        </button>
      </Reveal>
    </Section>
  )
}
