const { books, addNewBook } = require('./books')

const addBookHandler = (request, h) => {
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

const getAllBooksHandler = () => ({
  status: 'success',
  data: { books },
})

const getBookByIdHandler = (request, h) => {
  const { id } = request.params

  const bookFound = books.find((b) => b.id === id)

  if (bookFound) {
    return {
      status: 'success',
      data: { book: bookFound },
    }
  }

  return h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }).code(404)
}

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
}
