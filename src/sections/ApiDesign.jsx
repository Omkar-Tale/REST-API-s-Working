import { Check, X } from 'lucide-react'
import Section from '../components/Section'
import ChapterHeading from '../components/ChapterHeading'
import Reveal from '../components/Reveal'
import { bestPractices } from '../data/bestPractices'

export default function ApiDesign() {
  return (
    <Section id="api-design">
      <ChapterHeading
        number="08"
        title="API design practices"
        deck="Consistency is what makes an API predictable. A handful of habits do most of the work."
      />

      <div className="space-y-4">
        {bestPractices.map((item, index) => (
          <Reveal key={item.principle} delay={Math.min(index * 0.06, 0.3)}>
            <div className="rounded-xl border border-line bg-paper-raised p-6">
              <p className="mb-4 font-display text-lg text-ink">{item.principle}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-2.5 rounded-lg border border-line px-4 py-3">
                  <X size={16} className="mt-0.5 shrink-0 text-ink-faint" aria-hidden="true" />
                  <span className="font-mono text-sm text-ink-muted">{item.bad}</span>
                </div>
                <div className="flex items-start gap-2.5 rounded-lg border border-success/30 bg-success-soft px-4 py-3">
                  <Check size={16} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                  <span className="font-mono text-sm text-ink">{item.good}</span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
