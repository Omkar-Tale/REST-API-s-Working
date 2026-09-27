import Section from '../components/Section'
import ChapterHeading from '../components/ChapterHeading'
import Reveal from '../components/Reveal'

const requests = [
  { line: 'GET /orders/18', header: 'Authorization: Bearer a91f…e3' },
  { line: 'DELETE /orders/42', header: 'Authorization: Bearer 7b2c…9f' },
]

export default function Stateless() {
  return (
    <Section id="stateless">
      <ChapterHeading
        number="04"
        title="Stateless communication"
        deck="The server keeps no memory of who asked what last. Every request has to stand on its own."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {requests.map((req, index) => (
          <Reveal key={req.line} delay={index * 0.15}>
            <div className="h-full rounded-xl border border-line bg-paper-raised px-5 py-4">
              <p className="font-mono text-sm text-ink">{req.line}</p>
              <p className="mt-2 font-mono text-xs text-ink-faint">{req.header}</p>
              <p className="mt-4 text-xs leading-relaxed text-ink-muted">
                Self-contained — nothing here depends on a request that came before it.
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-lg text-center text-base leading-relaxed text-ink-muted md:text-lg">
        Each request from client to server carries everything the server needs. No
        session, no memory of the conversation — just this call, in full.
      </p>
    </Section>
  )
}
