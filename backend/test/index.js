// установка переменной окружения
process.env.NODE_ENV = 'test'

require('./modules/city-endpoint')
require('./modules/menu-endpoint')
