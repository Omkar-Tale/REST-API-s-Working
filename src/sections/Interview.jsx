import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Section from '../components/Section'
import ChapterHeading from '../components/ChapterHeading'
import { interviewQuestions } from '../data/interview'

export default function Interview() {
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const total = interviewQuestions.length
  const current = interviewQuestions[index]

  function goTo(nextIndex) {
    setIndex((nextIndex + total) % total)
    setRevealed(false)
  }

  return (
    <Section id="interview" alt>
      <ChapterHeading
        number="09"
        title="Interview mode"
        deck="Ten questions that come up again and again. Try answering before you reveal each one."
      />

      <div className="mx-auto max-w-xl">
        <p className="chapter-eyebrow mb-4">
          Question {index + 1} of {total}
        </p>
        <div className="min-h-[220px] rounded-2xl border border-line bg-paper-raised p-8">
          <p className="font-display text-xl leading-snug text-ink md:text-2xl">{current.question}</p>

          {revealed ? (
            <div className="mt-6 border-t border-line pt-6">
              {Array.isArray(current.answer) ? (
                <ul className="space-y-2">
                  {current.answer.map((line) => (
                    <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-relaxed text-ink-muted md:text-base">{current.answer}</p>
              )}
            </div>
          ) : (
            <button type="button" onClick={() => setRevealed(true)} className="btn-editorial mt-8">
              Reveal answer
            </button>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="flex items-center gap-1.5 font-mono text-xs text-ink-muted transition-colors duration-300 hover:text-accent"
          >
            <ChevronLeft size={14} aria-hidden="true" />
            Previous
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="flex items-center gap-1.5 font-mono text-xs text-ink-muted transition-colors duration-300 hover:text-accent"
          >
            Next
            <ChevronRight size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </Section>
  )
}
