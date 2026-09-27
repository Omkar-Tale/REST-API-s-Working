import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// A single looping moment: a request travels client → server (accent),
// turns into a response, and travels back (success green). Kept as
// plain attribute tweens on a straight line — no motion-path plugin
// needed for a diagram this simple.
export default function ApiFlowDiagram({ className = '' }) {
  const dotRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dot = dotRef.current
    if (!dot || prefersReducedMotion) return undefined

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power1.inOut' } })
    tl.set(dot, { attr: { cx: 118 }, fill: '#3A54E4' })
      .to(dot, { attr: { cx: 282 }, duration: 1.1 })
      .to(dot, { fill: '#1F8F5F', duration: 0.2 }, '-=0.05')
      .to({}, { duration: 0.55 })
      .to(dot, { attr: { cx: 118 }, duration: 1.1 })
      .to(dot, { fill: '#3A54E4', duration: 0.2 }, '-=0.05')
      .to({}, { duration: 0.55 })

    return () => tl.kill()
  }, [])

  return (
    <svg
      viewBox="0 0 400 120"
      className={className}
      role="img"
      aria-label="Diagram: a request travels from the client to the server, and a response returns"
    >
      <title>Client and server exchanging a request and response over HTTP</title>
      <rect x="20" y="40" width="98" height="40" rx="10" fill="none" stroke="#15140F" strokeOpacity="0.2" />
      <text x="69" y="65" textAnchor="middle" fontSize="13" fontFamily="'Space Grotesk', sans-serif" fill="#15140F">
        Client
      </text>
      <rect x="282" y="40" width="98" height="40" rx="10" fill="none" stroke="#15140F" strokeOpacity="0.2" />
      <text x="331" y="65" textAnchor="middle" fontSize="13" fontFamily="'Space Grotesk', sans-serif" fill="#15140F">
        Server
      </text>
      <line x1="118" y1="60" x2="282" y2="60" stroke="#15140F" strokeOpacity="0.16" strokeDasharray="3 5" />
      <text x="200" y="30" textAnchor="middle" fontSize="11" fontFamily="'JetBrains Mono', monospace" fill="#948D78">
        HTTP
      </text>
      <circle ref={dotRef} cx="118" cy="60" r="5" fill="#3A54E4" />
    </svg>
  )
}
