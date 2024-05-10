const mongoose = require('mongoose')

const Schema = mongoose.Schema
const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    reqired: true
  }
})

module.exports = mongoose.model('Book', BookSchema)