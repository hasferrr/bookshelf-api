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
    ...bookProperties,
    id: nanoid(16),
    finished: bookProperties.pageCount === bookProperties.readPage,
    insertedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  books.push(book)
  return book
}

module.exports = { books, addNewBook }
