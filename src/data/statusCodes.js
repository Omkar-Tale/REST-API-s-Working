// Source: REST-API.pdf, "HTTP Status Codes" + "Common Status Codes" tables.
export const statusClasses = [
  {
    range: '2xx',
    name: 'Success',
    tone: 'success',
    meaning: 'The request was successfully received, understood and accepted.',
  },
  {
    range: '3xx',
    name: 'Redirection',
    tone: 'accent',
    meaning: 'Further action needs to be taken by the client to fulfil the request.',
  },
  {
    range: '4xx',
    name: 'Client error',
    tone: 'warning',
    meaning: 'The client sent a request with invalid syntax, or one that could not be fulfilled.',
  },
  {
    range: '5xx',
    name: 'Server error',
    tone: 'danger',
    meaning: 'The server failed to fulfil an apparently valid request — usually a backend problem.',
  },
]

export const statusCodes = [
  { code: 200, range: '2xx', name: 'OK', description: 'The request was successful.', useCase: 'A successful GET request.' },
  { code: 201, range: '2xx', name: 'Created', description: 'A new resource has been created.', useCase: 'A successful POST request.' },
  { code: 204, range: '2xx', name: 'No content', description: "The request was successful, but there's no content to return.", useCase: 'A DELETE request once the resource is removed.' },
  { code: 301, range: '3xx', name: 'Moved permanently', description: 'The resource has moved to a new URL.', useCase: 'Redirecting an old URL to a new one.' },
  { code: 302, range: '3xx', name: 'Found', description: 'The resource is temporarily at a different URL.', useCase: 'A temporary redirect to a different URL.' },
  { code: 304, range: '3xx', name: 'Not modified', description: "The resource hasn't changed since the last request.", useCase: 'A conditional GET, to avoid re-sending unchanged data.' },
  { code: 400, range: '4xx', name: 'Bad request', description: 'The request was malformed or invalid.', useCase: 'An invalid request body or missing parameters.' },
  { code: 401, range: '4xx', name: 'Unauthorized', description: 'The user is not authenticated.', useCase: 'Accessing a resource that requires an API key or login.' },
  { code: 403, range: '4xx', name: 'Forbidden', description: 'The user is authenticated but lacks permission.', useCase: 'A logged-in user without the required access level.' },
  { code: 404, range: '4xx', name: 'Not found', description: 'The resource could not be found.', useCase: 'An invalid URL, or a resource that no longer exists.' },
  { code: 405, range: '4xx', name: 'Method not allowed', description: 'This HTTP method is not supported here.', useCase: 'Sending POST to a read-only endpoint.' },
  { code: 409, range: '4xx', name: 'Conflict', description: 'The request conflicts with the current state of the resource.', useCase: 'Deleting an entity that other records still depend on.' },
  { code: 422, range: '4xx', name: 'Unprocessable entity', description: 'The syntax is valid, but the data fails semantic checks.', useCase: 'Creating a user with an email that already exists.' },
  { code: 500, range: '5xx', name: 'Internal server error', description: 'Something went wrong on the server.', useCase: 'A generic, unhandled server-side failure.' },
  { code: 501, range: '5xx', name: 'Not implemented', description: 'The server does not support the requested functionality.', useCase: 'Calling an operation the server was never built to do.' },
  { code: 503, range: '5xx', name: 'Service unavailable', description: 'The server is temporarily unable to handle the request.', useCase: 'The server is overloaded or down for maintenance.' },
]
