import Section from '../components/Section'
import ChapterHeading from '../components/ChapterHeading'
import ResourceCard from '../components/ResourceCard'
import Reveal from '../components/Reveal'
import { resources } from '../data/resources'

export default function Resources() {
  return (
    <Section id="resources">
      <ChapterHeading
        number="02"
        title="Resources"
        deck="Everything a RESTful API exposes — a user, a product, a document — is a resource. Each one gets a unique address: its URI."
      />
      <Reveal className="grid gap-4 sm:grid-cols-3" y={16}>
        {resources.map((resource) => (
          <ResourceCard key={resource.name} resource={resource} />
        ))}
      </Reveal>
      <p className="mt-6 font-mono text-xs text-ink-faint">
        Open a resource to see its representation.
      </p>
    </Section>
  )
}
