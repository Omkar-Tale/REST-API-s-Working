import { useEffect, useRef } from 'react'

// A hairline progress indicator across the very top of the viewport —
// the "compact floating progress system" the plan asks for, visible
// on every breakpoint (FloatingNav below adds the chapter-level detail
// on wider screens).
export default function ProgressBar() {
  const barRef = useRef(null)

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-transparent" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full origin-left bg-accent"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
