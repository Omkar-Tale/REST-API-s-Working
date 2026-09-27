import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import CodeBlock from './CodeBlock'

// Click reveals the JSON representation behind a resource's URI —
// the doc's "hover/click can reveal an example representation."
// Click rather than hover so it works the same on touch devices.
export default function ResourceCard({ resource }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-paper-raised">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div>
          <p className="font-mono text-sm text-ink">{resource.uri}</p>
          <p className="mt-1 text-sm text-ink-muted">/{resource.name}</p>
        </div>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`shrink-0 text-ink-faint transition-transform duration-300 ease-editorial ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-editorial ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden px-5 pb-5">
          <CodeBlock code={resource.representation} label="representation · json" language="json" />
        </div>
      </div>
    </div>
  )
}
