var test = require('ava')
var request = require('supertest')

var server = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,server)

test('Auth Routes Tests Working', t => {
  t.pass()
})

test.cb('Register Route for new user', t => {
  const newUser = {
    first_name: 'Sarrah',
    last_name: 'Jane',
    user_name: 'S-jane',
    password: 'empathy',
    about: 'I Dive Deep into emotions'
  }
  const expectedMessage = "Authentication successful"
  request(server)
    .post('/api/auth/register')
    .send(newUser)
    .end((err, res) => {
      t.is(res.body.message, expectedMessage)
      t.true(res.body.hasOwnProperty('token'))
      t.end()
    })
})
