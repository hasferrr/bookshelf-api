const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler')

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addNoteHandler,
  },
]

module.exports = routes
