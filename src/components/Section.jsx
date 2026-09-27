export default function Section({ id, alt = false, className = '', children }) {
  return (
    <section
      id={id}
      data-chapter={id}
      className={`relative px-6 py-24 md:px-10 md:py-32 ${alt ? 'bg-paper-alt' : 'bg-paper'} ${className}`}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  )
}
