import { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-json'

// A dark inset code panel — the one deliberately "developer interface"
// surface against the warm paper background, giving the page its
// editorial-meets-technical contrast.
export default function CodeBlock({ code, label, language = 'json' }) {
  const codeRef = useRef(null)

  useEffect(() => {
    if (codeRef.current) Prism.highlightElement(codeRef.current)
  }, [code, language])

  if (!code) return null

  return (
    <div className="overflow-hidden rounded-xl bg-code-bg">
      {label && (
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
          <span className="font-mono text-[11px] tracking-wide text-white/45">{label}</span>
        </div>
      )}
      <pre className="!m-0 overflow-x-auto !bg-transparent p-4 text-[13px] !leading-relaxed">
        <code ref={codeRef} className={`language-${language} font-mono`}>
          {code}
        </code>
      </pre>
    </div>
  )
}
