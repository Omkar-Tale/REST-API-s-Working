import { useState } from 'react'
import Section from '../components/Section'
import ChapterHeading from '../components/ChapterHeading'
import { statusClasses, statusCodes } from '../data/statusCodes'

const toneClasses = {
  neutral: { border: 'border-ink/25', bg: 'bg-paper-raised', text: 'text-ink' },
  success: { border: 'border-success/40', bg: 'bg-success-soft', text: 'text-success' },
  accent: { border: 'border-accent/40', bg: 'bg-accent-soft', text: 'text-accent' },
  warning: { border: 'border-warning/40', bg: 'bg-warning-soft', text: 'text-warning' },
  danger: { border: 'border-danger/40', bg: 'bg-danger-soft', text: 'text-danger' },
}

const toneByRange = Object.fromEntries(statusClasses.map((c) => [c.range, c.tone]))

export default function StatusCodes() {
  const [selected, setSelected] = useState(null)
  const visibleCodes = selected ? statusCodes.filter((c) => c.range === selected) : statusCodes

  return (
    <Section id="status-codes" alt>
      <ChapterHeading
        number="07"
        title="HTTP status codes"
        deck="Five classes, one meaning each. Select a class to filter the examples below it."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {statusClasses.map((cls) => {
          const tone = toneClasses[cls.tone]
          const isActive = selected === cls.range
          return (
            <button
              key={cls.range}
              type="button"
              aria-pressed={isActive}
              onClick={() => setSelected(isActive ? null : cls.range)}
              className={`rounded-xl border p-4 text-left transition-all duration-300 ease-editorial ${
                isActive ? `${tone.border} ${tone.bg}` : 'border-line bg-paper-raised hover:border-line-strong'
              }`}
            >
              <p className={`font-display text-2xl ${isActive ? tone.text : 'text-ink'}`}>{cls.range}</p>
              <p className="mt-1 text-xs font-medium text-ink-muted">{cls.name}</p>
            </button>
          )
        })}
      </div>

      {selected && (
        <button
          type="button"
          onClick={() => setSelected(null)}
          className="mt-4 font-mono text-xs text-ink-faint underline decoration-dotted underline-offset-4 hover:text-accent"
        >
          Clear filter
        </button>
      )}

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCodes.map((code) => {
          const tone = toneClasses[toneByRange[code.range]]
          return (
            <div key={code.code} className="rounded-xl border border-line bg-paper-raised p-5">
              <div className="mb-2 flex items-baseline gap-2">
                <span className={`font-display text-xl ${tone.text}`}>{code.code}</span>
                <span className="text-sm font-medium text-ink">{code.name}</span>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">{code.description}</p>
              <p className="mt-2 font-mono text-xs text-ink-faint">{code.useCase}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
