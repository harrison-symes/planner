var test = require('ava')
var request = require('supertest')
var token = require('./token')

var server = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,server)

test('Users Routes Tests Working', t => {
  t.pass()
})

test.cb('/users/:id', t => {
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
    .set(token)
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
