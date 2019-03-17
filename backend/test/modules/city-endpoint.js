// подключение dependencies
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = 'http://localhost:3030/api'
const expect = chai.expect;

chai.use(chaiHttp)

describe('CITY endpoint', () => {
  describe('/GET cities', () => {
    it('Запрос списка городов (GET)', (done) => {
      chai.request(server)
        .get('/city')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.a('array')
          done()
        })
    })
  })
})