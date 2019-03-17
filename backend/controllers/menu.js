// импорт сущностей
const Menu = require('../models/Menu')

// импорт унифицированного обработчика ошибок
const errorHandler = require('../utils/errorHandler')

// экспорт наружу логики endpoints
module.exports.getAll = async function (request, response) {
  try {
    const menu = await Menu.find()
    response.status(200).json(menu)
  } catch (error) {
    errorHandler(response, error)
  }
}