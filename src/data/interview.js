// Source: REST-API.pdf, "Interview Questions and Answers" (Q1–Q10).
export const interviewQuestions = [
  {
    question: 'What is a REST API?',
    answer: 'REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on stateless client-server communication using standard HTTP methods and status codes. RESTful APIs are built around resources, accessed through methods like GET, POST, PUT, PATCH and DELETE.',
  },
  {
    question: 'What are the common HTTP methods used in REST APIs, and what do they mean?',
    answer: [
      'GET — retrieve a resource or a list of resources.',
      'POST — create a new resource.',
      'PUT — update a resource by replacing it entirely.',
      'PATCH — update a resource by modifying part of it.',
      'DELETE — remove a resource.',
    ],
  },
  {
    question: 'Explain the difference between PUT and PATCH.',
    answer: 'PUT completely replaces a resource — it expects the full representation in the request body. PATCH partially modifies a resource — it only needs the fields that are actually changing.',
  },
  {
    question: 'What are HTTP status codes, and why are they important in REST APIs?',
    answer: "HTTP status codes are three-digit numbers the server sends back to describe the outcome of a request. They let a client know whether a request succeeded, failed, or needs further action — and they make APIs far easier to debug.",
  },
  {
    question: 'Give some examples of common HTTP status codes and when they are used.',
    answer: [
      '200 OK — the request succeeded (e.g. reading a resource).',
      '201 Created — a new resource was created (e.g. a POST request).',
      '400 Bad request — the request was invalid.',
      '401 Unauthorized — the client needs to authenticate.',
      '403 Forbidden — authenticated, but not permitted.',
      '404 Not found — the resource doesn\u2019t exist.',
      '500 Internal server error — a server-side failure.',
    ],
  },
  {
    question: 'What does it mean for a method to be idempotent? Which HTTP methods are idempotent?',
    answer: "An idempotent method produces the same result no matter how many times it's called with the same request. GET, PUT, PATCH and DELETE are all idempotent. POST is usually not — calling it twice can create two resources.",
  },
  {
    question: 'What does it mean for a method to be safe? Which HTTP methods are safe?',
    answer: "A safe method never modifies data on the server — it only reads. GET, HEAD and OPTIONS are the safe methods.",
  },
  {
    question: 'If an API operation fails, should the API return an error status code?',
    answer: 'Yes — always. An API should return a proper error status code with a descriptive message, for example 400 Bad request for invalid data, 404 Not found for a missing resource, or 500 Internal server error for an unexpected failure.',
  },
  {
    question: 'What are some best practices for designing RESTful APIs?',
    answer: [
      'Use nouns for resources, and pluralize collections.',
      'Use HTTP methods according to their semantics.',
      'Use status codes appropriately to convey the outcome.',
      'Keep the API consistent and predictable.',
      'Design it to be stateless.',
    ],
  },
  {
    question: 'How do you handle errors in RESTful APIs?',
    answer: [
      'Use proper HTTP status codes to indicate the type of error.',
      'Include a descriptive error message in the response body, typically as JSON.',
      'Log errors server-side for debugging.',
    ],
  },
]
