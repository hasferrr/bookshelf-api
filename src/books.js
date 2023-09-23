const { nanoid } = require('nanoid')

/**
 * @typedef {Object} Book
 * @property {string} id
 * @property {string} name
 * @property {number} year
 * @property {string} author
 * @property {string} summary
 * @property {string} publisher
 * @property {number} pageCount
 * @property {number} readPage
 * @property {boolean} finished
 * @property {boolean} reading
 * @property {string} insertedAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} BookProperties
 * @property {string} name
 * @property {number} year
 * @property {string} author
 * @property {string} summary
 * @property {string} publisher
 * @property {number} pageCount
 * @property {number} readPage
 * @property {boolean} reading
 */

/**
 * @type {Book[]}
 */
const books = []

/**
 * @param {BookProperties} bookProperties
 * @returns Book
 */
const addNewBook = (bookProperties) => {
  const book = {
    id: nanoid(16),
    ...bookProperties,
    finished: bookProperties.pageCount === bookProperties.readPage,
    insertedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  books.push(book)
  return book
}

/**
 * @param {BookProperties} bookProperties
 * @param {number} index
 * @returns void
 */
const updateBook = (bookProperties, index) => {
  books[index] = {
    ...books[index],
    ...bookProperties,
    updatedAt: new Date().toISOString(),
  }
}

/**
 * @param {number} index
 * @returns void
 */
const deleteBook = (index) => {
  books.splice(index, 1)
}

module.exports = {
  books,
  addNewBook,
  updateBook,
  deleteBook,
}
