// Chapter registry — drives the floating nav, the progress indicator,
// and each section's eyebrow label. Numbering follows the plan's
// chapter-by-chapter breakdown (01 What is REST? through 09 Interview
// mode); Hero and Closing bookend the journey without numbers, the
// same way the plan treats "Opening" and "Completion" as framing
// moments rather than chapters.
export const chapters = [
  { id: 'what-is-rest', number: '01', title: 'What is REST?' },
  { id: 'resources', number: '02', title: 'Resources' },
  { id: 'representations', number: '03', title: 'Representations' },
  { id: 'stateless', number: '04', title: 'Stateless communication' },
  { id: 'http-methods', number: '05', title: 'HTTP methods' },
  { id: 'idempotence', number: '06', title: 'Idempotence & safe methods' },
  { id: 'status-codes', number: '07', title: 'HTTP status codes' },
  { id: 'api-design', number: '08', title: 'API design practices' },
  { id: 'interview', number: '09', title: 'Interview mode' },
]
