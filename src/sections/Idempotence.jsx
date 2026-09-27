import { useState } from 'react'
import Section from '../components/Section'
import ChapterHeading from '../components/ChapterHeading'
import { safeMethods } from '../data/methods'

const allMethodNames = ['GET', 'HEAD', 'OPTIONS', 'POST', 'PUT', 'PATCH', 'DELETE']

export default function Idempotence() {
  const [putCount, setPutCount] = useState(0)
  const [postCount, setPostCount] = useState(0)

  return (
    <Section id="idempotence">
      <ChapterHeading
        number="06"
        title="Idempotence & safe methods"
        deck="Idempotent means calling it once or a hundred times leaves the same result. Send the same request repeatedly and watch what actually changes."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-paper-raised p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full border border-ink/25 px-3 py-1 font-mono text-xs text-ink">
              PUT /users/42
            </span>
            <span className="font-mono text-xs text-success">idempotent</span>
          </div>
          <button type="button" onClick={() => setPutCount((c) => c + 1)} className="btn-editorial">
            Send request
          </button>
          <p className="mt-4 font-mono text-xs text-ink-faint">
            Sent {putCount} time{putCount === 1 ? '' : 's'}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Resource state: <span className="text-ink">id 42, ava@newdomain.io</span>
            {putCount > 1 && ' — unchanged, no matter how many times you send it.'}
          </p>
        </div>

        <div className="rounded-xl border border-line bg-paper-raised p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full border border-ink/25 px-3 py-1 font-mono text-xs text-ink">
              POST /users
            </span>
            <span className="font-mono text-xs text-ink-muted">not idempotent</span>
          </div>
          <button type="button" onClick={() => setPostCount((c) => c + 1)} className="btn-editorial">
            Send request
          </button>
          <p className="mt-4 font-mono text-xs text-ink-faint">
            Sent {postCount} time{postCount === 1 ? '' : 's'}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Users created: <span className="text-ink">{postCount}</span>
            {postCount > 1 && ' — every call adds another one.'}
          </p>
        </div>
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <p className="chapter-eyebrow mb-5">Safe methods</p>
        <p className="mb-6 max-w-lg text-sm leading-relaxed text-ink-muted">
          A safe method goes further still — it never modifies data on the server at all,
          it only reads.
        </p>
        <div className="flex flex-wrap gap-2">
          {allMethodNames.map((name) => {
            const isSafe = safeMethods.includes(name)
            return (
              <span
                key={name}
                className={`rounded-full border px-4 py-1.5 font-mono text-xs ${
                  isSafe
                    ? 'border-success/40 bg-success-soft text-success'
                    : 'border-line-strong text-ink-muted'
                }`}
              >
                {name}
              </span>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
