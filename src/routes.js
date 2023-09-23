const books = require('./books')

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: () => ({
      status: 'success',
      data: { books },
    }),
  },
]

module.exports = routes
