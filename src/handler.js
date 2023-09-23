const books = require('./books')

const getAllNotesHandler = () => ({
  status: 'success',
  data: { books },
})

module.exports = {
  getAllNotesHandler,
}
