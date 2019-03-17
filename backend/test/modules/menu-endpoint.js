// подключение dependencies
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = 'http://localhost:3030/api'
const expect = chai.expect;

chai.use(chaiHttp)

describe('MENU endpoint', () => {
  describe('/GET menu', () => {
    it('Запрос структуры меню (GET)', (done) => {
      chai.request(server)
        .get('/menu')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.a('array')
          done()
        })
    })
  })
})