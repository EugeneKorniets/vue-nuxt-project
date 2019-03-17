// импорт dependencies
const mongoose = require('mongoose')

// инициализация конструктора Schema для формирования модели
const Schema = mongoose.Schema

// инициализация схемы текущей модели
const menuSchema = new Schema({
  sectionName: {
    type: String,
    required: true
  },
  categories: {
    type: Array,
    required: true
  }
})

// экспорт наружу текущей модели
module.exports = mongoose.model('menu', menuSchema)