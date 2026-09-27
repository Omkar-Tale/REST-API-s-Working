// Source: REST-API.pdf, "RESTful API Design Best Practices" — turned
// into good/bad comparisons per the plan's chapter 08 direction.
export const bestPractices = [
  {
    principle: 'Name resources with nouns, not actions',
    bad: 'POST /createUser',
    good: 'POST /users',
    note: 'The HTTP method already carries the action — the URL only needs to name the thing.',
  },
  {
    principle: 'Pluralize collections',
    bad: 'GET /user/42',
    good: 'GET /users/42',
    note: 'A consistent plural makes every collection endpoint predictable.',
  },
  {
    principle: 'Let the method carry the verb',
    bad: 'GET /users/delete/42',
    good: 'DELETE /users/42',
    note: 'Use HTTP methods according to their semantics instead of encoding the action in the path.',
  },
  {
    principle: 'Return the status code that matches reality',
    bad: '200 OK, with an error message in the body',
    good: '404 Not Found, when the resource genuinely is missing',
    note: 'Status codes exist so clients can react correctly without parsing prose.',
  },
  {
    principle: 'Stay consistent across the whole API',
    bad: '/getProducts alongside /users and /order-list',
    good: '/products, /users and /orders',
    note: 'One naming convention, applied everywhere, is what makes an API predictable.',
  },
  {
    principle: 'Design for statelessness',
    bad: "Server remembers which user searched last",
    good: 'Every request carries everything the server needs to fulfil it',
    note: 'No client session is stored between requests — each one stands alone.',
  },
]
