const {
  books,
  addNewBook,
  updateBook,
  deleteBook,
} = require('./books')

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
    message: 'Gagal menambahkan buku. Masukkan semua property buku',
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

const editBookByIdHandler = (request, h) => {
  const { id } = request.params
  const index = books.findIndex((b) => b.id === id)

  if (index === -1) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    }).code(404)
  }

  if (request.payload) {
    const {
      name, year, author, summary, publisher, pageCount, readPage, reading,
    } = request.payload

    if (!name) {
      return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      }).code(400)
    }

    if (readPage > pageCount || readPage > books[index].pageCount) {
      return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      }).code(400)
    }

    if (name && year && author && summary && publisher && pageCount && readPage && typeof reading === 'boolean') {
      updateBook({
        name, year, author, summary, publisher, pageCount, readPage, reading,
      }, index)

      return h.response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      }).code(200)
    }
  }

  return h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Masukkan semua property buku',
  }).code(400)
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
