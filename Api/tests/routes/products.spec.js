const { expect } = require('chai')
const session = require('supertest-session')
const app = require('../../src/app')

let agent = null


describe('Product routes', () => {
  beforeEach(function() {
    agent = session(app)
  })

  describe('GET /products', () => {
    it('Sould get 200', (done) => {
      agent.get('/products').expect(200)
      done()
    })
  })

  describe('GET /products/:id', () => {
    xit('Sould get 200', (done) => {
      //agent.get('/products').expect(200)
      done()
    })
  })

  describe('PUT /products/:id', () => {
    xit('Sould get 200', (done) => {
      //agent.get('/products').expect(200)
      done()
    })
  })

  describe('POST /create', () => {
    xit('Sould get 200', (done) => {
      //agent.post('/create').expect(200)
      done()
    })
  })
})
