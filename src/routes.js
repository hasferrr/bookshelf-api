const { getAllNotesHandler } = require('./handler')

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllNotesHandler,
  },
]

module.exports = routes
