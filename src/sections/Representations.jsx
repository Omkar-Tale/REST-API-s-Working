import { ArrowDown } from 'lucide-react'
import Section from '../components/Section'
import ChapterHeading from '../components/ChapterHeading'
import Reveal from '../components/Reveal'
import CodeBlock from '../components/CodeBlock'

const jsonBody = `{
  "id": 42,
  "name": "Ava Studio",
  "email": "ava@studio.io"
}`

export default function Representations() {
  return (
    <Section id="representations" alt>
      <ChapterHeading
        number="03"
        title="Representations"
        deck="A resource itself never leaves the server. What travels is a representation of it — most often JSON."
      />

      <div className="flex flex-col items-center gap-5">
        <Reveal delay={0}>
          <span className="rounded-full border border-line-strong bg-paper-raised px-5 py-2 font-mono text-sm text-ink">
            GET /users/42
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <ArrowDown size={18} className="text-ink-faint" aria-hidden="true" />
        </Reveal>
        <Reveal delay={0.3} className="w-full max-w-sm">
          <CodeBlock code={jsonBody} label="representation · json" language="json" />
        </Reveal>
      </div>

      <p className="mx-auto mt-10 max-w-lg text-center text-sm leading-relaxed text-ink-muted">
        Same resource, different shapes on request — JSON is the common default, but the
        same identity could just as easily be represented as XML.
      </p>
    </Section>
  )
}
