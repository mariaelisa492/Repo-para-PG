const { expect } = require('chai')
const session = require('supertest-session')
const app = require('../../src/app')

let agent = null


describe('Order routes', () => {
  beforeEach(function() {
    agent = session(app)
  })

  describe('GET /orders', () => {
    it('Sould get 200', (done) => {
      agent.get('/orders').expect(200)
      done()
    })
  })

  describe('GET /orders/userOrders', () => {
    it('Sould get 200', (done) => {
      agent.get('/orders/userOrders').expect(200)
      done()
    })
  })

  describe('POST /orders/create', () => {
    xit('Sould get 200', (done) => {
      //agent.post('/orders/create').expect(200)
      done()
    })
  })

  describe('PUT /orders/:id', () => {
    xit('Sould get 200', (done) => {
      //agent.put('/orders/:id').expect(200)
      done()
    })
  })

  describe('DELETE /orders/:id', () => {
    xit('Sould get 200', (done) => {
      //agent.delete('/orders/:id').expect(200)
      done()
    })
  })
})
