const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const compression = require('compression')

// импорт роутов сущностей из соответствующих модулей
const menuRoute = require('./routes/menu')
const cityRoute = require('./routes/city')

// импорт ключей из конфига
const keys = require('./config/keys')

// создание экземпляра приложения
const app = express()

// подключение к БД
mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
  .then(function() {
    console.log('MongoDB connected')
  })
  .catch(function (error) {
    console.log(error)
  })

// логирование сервера
app.use(morgan('dev'))

// подключение плагина bodyParser для защиты url от запрещенных символов и парсинга json
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(compression())

// регистрация роутов в приложении
app.use('/api/menu', menuRoute)
app.use('/api/city', cityRoute)

module.exports = app