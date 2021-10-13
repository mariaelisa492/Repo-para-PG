const { expect } = require('chai')
const session = require('supertest-session')
const app = require('../../src/app')

let agent = null


describe('Users routes', () => {
  beforeEach(function() {
    agent = session(app)
  })

  describe('GET /users', () => {
    it('Sould get 200', (done) => {
      agent.get('/users').expect(200)
      done()
    })
  })

  describe('POST /users/signup', () => {
    xit('Sould get 200', (done) => {
      //agent.post('/users/signup').expect(200)
      done()
    })
  })

  describe('POST /users/login', () => {
    xit('Sould get 200', (done) => {
      //agent.post('/users/login').expect(200)
      done()
    })
  })

  describe('GET /users/:id', () => {
    xit('Sould get 200', (done) => {
      //agent.get('/users/:id').expect(200)
      done()
    })
  })

  describe('PUT /users/:id', () => {
    xit('Sould get 200', (done) => {
      //agent.put('/users/:id').expect(200)
      done()
    })
  })
})
