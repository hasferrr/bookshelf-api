const { getAllNotesHandler, addNoteHandler } = require('./handler')

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllNotesHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addNoteHandler,
  },
]

module.exports = routes
