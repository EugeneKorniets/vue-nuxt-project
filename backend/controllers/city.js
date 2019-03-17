// импорт сущностей
const City = require('../models/City')

// импорт унифицированного обработчика ошибок
const errorHandler = require('../utils/errorHandler')

// экспорт наружу логики endpoints
module.exports.getAll = async function (request, response) {
  try {
    const cities = await City.find()
    response.status(200).json(cities)
  } catch (error) {
    errorHandler(response, error)
  }
}
