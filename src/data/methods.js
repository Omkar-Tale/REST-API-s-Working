// One resource — /users/42 — followed through all five methods, so the
// chapter reads as a single continuous story rather than five isolated
// facts. Source: REST-API.pdf, "HTTP Methods" table.
export const methods = [
  {
    method: 'GET',
    action: 'Retrieve',
    description: 'Retrieves a resource or a list of resources. Should not modify data on the server.',
    idempotent: true,
    safe: true,
    endpoint: 'GET /users/42',
    request: null,
    status: '200 OK',
    response: `{
  "id": 42,
  "name": "Ava Studio",
  "email": "ava@studio.io"
}`,
  },
  {
    method: 'POST',
    action: 'Create',
    description: 'Creates a new resource. The request body contains the data for the new resource.',
    idempotent: false,
    safe: false,
    endpoint: 'POST /users',
    request: `{
  "name": "Julien Reyes",
  "email": "julien@studio.io"
}`,
    status: '201 Created',
    response: `{
  "id": 43,
  "name": "Julien Reyes",
  "email": "julien@studio.io"
}`,
  },
  {
    method: 'PUT',
    action: 'Replace',
    description: 'Updates a resource by replacing it with new data. Requires a complete new representation in the request body.',
    idempotent: true,
    safe: false,
    endpoint: 'PUT /users/42',
    request: `{
  "name": "Ava Studio",
  "email": "ava@newdomain.io"
}`,
    status: '200 OK',
    response: `{
  "id": 42,
  "name": "Ava Studio",
  "email": "ava@newdomain.io"
}`,
  },
  {
    method: 'PATCH',
    action: 'Modify',
    description: 'Updates a resource by partially modifying it. Requires only the fields that changed in the request body.',
    idempotent: true,
    safe: false,
    endpoint: 'PATCH /users/42',
    request: `{
  "email": "ava@newdomain.io"
}`,
    status: '200 OK',
    response: `{
  "id": 42,
  "name": "Ava Studio",
  "email": "ava@newdomain.io"
}`,
  },
  {
    method: 'DELETE',
    action: 'Remove',
    description: 'Deletes a resource.',
    idempotent: true,
    safe: false,
    endpoint: 'DELETE /users/42',
    request: null,
    status: '204 No Content',
    response: null,
  },
]

export const safeMethods = ['GET', 'HEAD', 'OPTIONS']
