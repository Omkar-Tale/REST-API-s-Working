import Section from '../components/Section'
import ChapterHeading from '../components/ChapterHeading'
import Reveal from '../components/Reveal'
import ApiFlowDiagram from '../components/ApiFlowDiagram'

const words = [
  {
    word: 'Representational',
    gloss: 'A resource is represented as data — like JSON — not sent as the resource itself.',
  },
  {
    word: 'State',
    gloss: "That representation captures the resource's condition at the moment of the request.",
  },
  {
    word: 'Transfer',
    gloss: 'The representation moves between client and server, over HTTP.',
  },
]

export default function WhatIsRest() {
  return (
    <Section id="what-is-rest" alt>
      <ChapterHeading
        number="01"
        title="What is REST?"
        deck="Three words explain the whole idea. Pulled apart, REST stops feeling abstract."
      />

      <div className="grid gap-10 border-y border-line py-12 sm:grid-cols-3">
        {words.map((item, index) => (
          <Reveal key={item.word} delay={index * 0.15}>
            <p className="font-display text-2xl text-ink md:text-[1.75rem]">{item.word}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.gloss}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <p className="max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
          REST is an architectural style for designing networked applications. It relies
          on stateless, client-server communication over HTTP, using standard methods and
          status codes. RESTful APIs are built around resources — which can be anything
          from users and products to documents.
        </p>
        <div>
          <ApiFlowDiagram className="w-full max-w-sm" />
          <p className="mt-3 font-mono text-xs text-ink-faint">
            Every resource is reached the same way: a request out, a response back.
          </p>
        </div>
      </div>
    </Section>
  )
}
