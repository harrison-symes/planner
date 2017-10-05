var test = require('ava')
var request = require('supertest')
var headers = require('./token')

var server = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,server)

test('Users Routes Tests Working', t => {
  t.pass()
})

test.cb('GET /users/:id', t => {
  const expected = {
    user_id: 1,
    user_name: 'symeshjb',
    first_name: 'Harrison',
    last_name: 'Symes',
    is_admin: 1,
    about: 'I made dis'
  }
  request(server)
    .get(`/api/users/${expected.user_id}`)
    .set(headers)
    .expect(200)
    .end((err, res) => {
      t.true(err == null)
      t.true(res.body != null)
      for (let key in expected) {
        t.true(res.body.hasOwnProperty(key))
        t.is(res.body[key], expected[key])
      }
      t.end()
    })
})

test.cb('GET /users/inviteable/:conversation_id', t => {
  const expected = {
    user_name: 'don',
    first_name: 'virtual',
    last_name: 'DOM',
    user_id: 3
  }
  const expectedLength = 1
  request(server)
    .get('/api/users/inviteable/1')
    .set(headers)
    .expect(200)
    .end((err, res) => {
      t.true(err == null)
      t.is(res.body.length, expectedLength)
      for (let key in expected) {
        t.true(res.body[0].hasOwnProperty(key))
        t.is(res.body[0][key], expected[key])
      }
      t.end()
    })
})

test.only.cb('GET /users/inviteable/:conversation_id (2)', t => {
  const expected = {
    user_name: 'symeshjb',
    first_name: 'Harrison',
    last_name: 'Symes',
    user_id: 1
  }
  const expectedLength = 1
  request(server)
    .get('/api/users/inviteable/3')
    .set(headers)
    .expect(200)
    .end((err, res) => {
      t.true(err == null)
      t.is(res.body.length, expectedLength)
      for (let key in expected) {
        t.true(res.body[0].hasOwnProperty(key))
        t.is(res.body[0][key], expected[key])
      }
      t.end()
    })
})
