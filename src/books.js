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
const books = [
  {
    id: 'dummy',
    name: 'SICP 2nd edition',
    year: 1996,
    author: 'Harold Abelson, Gerald Jay Sussman, Julie Sussman',
    summary: 'Introduction to computer programming',
    publisher: 'MIT Press',
    pageCount: 657,
    readPage: 100,
    reading: true,
    finished: false,
    insertedAt: '2021-03-04T09:11:44.598Z',
    updatedAt: '2021-03-04T09:11:44.598Z',
  },
]

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

module.exports = { books, addNewBook }
