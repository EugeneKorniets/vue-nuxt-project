// импорт dependencies
const mongoose = require('mongoose')

// инициализация конструктора Schema для формирования модели
const Schema = mongoose.Schema

// инициализация схемы текущей модели
const citySchema = new Schema({
	cityName: {
    type: String,
    required: true
  }
})

// экспорт наружу текущей модели
module.exports = mongoose.model('city', citySchema)