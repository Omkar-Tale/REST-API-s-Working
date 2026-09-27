import CodeBlock from './CodeBlock'

export default function MethodDetail({ data }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-8">
      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full border border-ink/25 px-3 py-1 font-mono text-xs text-ink">
            {data.method}
          </span>
          <span className="text-sm text-ink-muted">{data.action.toLowerCase()}s a resource</span>
        </div>
        <p className="text-base leading-relaxed text-ink-muted md:text-lg">{data.description}</p>
        <dl className="mt-8 flex gap-10">
          <div>
            <dt className="chapter-eyebrow mb-1.5">Idempotent</dt>
            <dd className={`font-display text-xl ${data.idempotent ? 'text-success' : 'text-ink'}`}>
              {data.idempotent ? 'Yes' : 'No'}
            </dd>
          </div>
          <div>
            <dt className="chapter-eyebrow mb-1.5">Safe</dt>
            <dd className={`font-display text-xl ${data.safe ? 'text-success' : 'text-ink'}`}>
              {data.safe ? 'Yes' : 'No'}
            </dd>
          </div>
        </dl>
      </div>
      <div className="space-y-4">
        {data.request ? (
          <CodeBlock code={data.request} label={`request  →  ${data.endpoint}`} language="json" />
        ) : (
          <div className="rounded-xl border border-line bg-paper-raised px-4 py-3.5 font-mono text-sm text-ink-muted">
            {data.endpoint}
          </div>
        )}
        {data.response ? (
          <CodeBlock code={data.response} label={`response  ·  ${data.status}`} language="json" />
        ) : (
          <div className="rounded-xl border border-dashed border-line-strong px-4 py-3.5 font-mono text-sm text-ink-faint">
            {data.status} — no response body
          </div>
        )}
      </div>
    </div>
  )
}
