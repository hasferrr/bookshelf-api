/**
 * @typedef {Object} Book
 * @property {string} name
 * @property {number} year
 * @property {string} author
 * @property {string} summary
 * @property {string} publisher
 * @property {number} pageCount
 * @property {number} readPage
 * @property {boolean} reading
 * @property {string} insertedAt
 * @property {string} updatedAt
 */

/**
 * @type {Book[]}
 */
const books = [
  {
    name: 'SICP 2nd edition',
    year: 1996,
    author: 'Harold Abelson, Gerald Jay Sussman, Julie Sussman',
    summary: 'Introduction to computer programming',
    publisher: 'MIT Press',
    pageCount: 657,
    readPage: 100,
    reading: true,
    insertedAt: '2021-03-04T09:11:44.598Z',
    updatedAt: '2021-03-04T09:11:44.598Z',
  },
]

module.exports = books
