const {
  books,
  addNewBook,
  updateBook,
  deleteBook,
} = require('./books')

const addBookHandler = (request, h) => {
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

  const added = addNewBook({
    name, year, author, summary, publisher, pageCount, readPage, reading,
  })

  return h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: { bookId: added.id },
  }).code(201)
}

const getAllBooksHandler = (request) => {
  let returnedBooks = [...books]
  const { name, reading, finished } = request.query

  if (name) {
    returnedBooks = returnedBooks.filter((b) => b.name.toLowerCase().includes(name.toLowerCase()))
  }

  if (reading) {
    returnedBooks = returnedBooks.filter((b) => b.reading === Boolean(Number(reading)))
  }

  if (finished) {
    returnedBooks = returnedBooks.filter((b) => b.finished === Boolean(Number(finished)))
  }

  return {
    status: 'success',
    data: {
      books: returnedBooks.map((b) => ({
        id: b.id,
        name: b.name,
        publisher: b.publisher,
      })),
    },
  }
}

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

const editBookByIdHandler = (request, h) => {
  const { id } = request.params
  const index = books.findIndex((b) => b.id === id)

  if (index === -1) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    }).code(404)
  }

  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload

  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    }).code(400)
  }

  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400)
  }

  updateBook({
    name, year, author, summary, publisher, pageCount, readPage, reading,
  }, index)

  return h.response({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  }).code(200)
}

const deleteBookByIdHandler = (request, h) => {
  const { id } = request.params
  const index = books.findIndex((b) => b.id === id)

  if (index === -1) {
    return h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    }).code(404)
  }

  deleteBook(index)

  return ({
    status: 'success',
    message: 'Buku berhasil dihapus',
  })
}

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
}
