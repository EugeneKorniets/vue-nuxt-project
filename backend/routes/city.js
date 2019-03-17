const express = require('express')

const controller = require('../controllers/city')

// создание экземпляра объекта router
const router = express.Router()

// создание роутов с передачей коллбека обработки реквестов
router.get('/', controller.getAll)

// экспорт наружу router из текущего модуля
module.exports = router