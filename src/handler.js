const { books, addNewBook } = require('./books')

const addNoteHandler = (request, h) => {
  if (request.payload) {
    const {
      name, year, author, summary, publisher, pageCount, readPage, reading,
    } = request.payload

    if (!name) {
      return h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      }).code(400)
    }

    if (readPage > pageCount) {
      return h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      }).code(400)
    }

    if (name && year && author && summary && publisher && pageCount && readPage && typeof reading === 'boolean') {
      const added = addNewBook({
        name, year, author, summary, publisher, pageCount, readPage, reading,
      })

      return h.response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: { bookId: added.id },
      }).code(201)
    }
  }

  return h.response({
    status: 'fail',
    message: 'Gagal menambahkan buku',
  }).code(400)
}

const getAllNotesHandler = () => ({
  status: 'success',
  data: { books },
})

module.exports = {
  addNoteHandler,
  getAllNotesHandler,
}
