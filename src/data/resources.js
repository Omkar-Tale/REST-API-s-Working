// Source: REST-API.pdf — "resources, which can be anything from users
// and products to documents." Each carries a URI and an example
// representation, used to bridge into the Representations chapter.
export const resources = [
  {
    name: 'users',
    uri: '/users/42',
    representation: `{
  "id": 42,
  "name": "Ava Studio",
  "email": "ava@studio.io"
}`,
  },
  {
    name: 'products',
    uri: '/products/118',
    representation: `{
  "id": 118,
  "name": "Field jacket",
  "price": 128.00,
  "inStock": true
}`,
  },
  {
    name: 'documents',
    uri: '/documents/doc_9f3',
    representation: `{
  "id": "doc_9f3",
  "title": "Q3 report",
  "pages": 12
}`,
  },
]
