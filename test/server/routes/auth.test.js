var test = require('ava')
var request = require('supertest')

var server = require('../../../server/server')
var setupDb = require('../setup-db')
const decode = require('jwt-decode')

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
  const expected = {
    ...newUser,
    user_name: "s-jane",
    id: 4,
    is_private: 0,
    is_admin: 0
  }
  delete expected.password
  const expectedMessage = "Authentication successful"
  request(server)
    .post('/api/auth/register')
    .send(newUser)
    .end((err, res) => {
      t.is(err, null)
      t.is(res.body.message, expectedMessage)
      t.true(res.body.hasOwnProperty('token'))
      const user = decode(res.body.token)
      for (let key in expected) {
        t.true(user.hasOwnProperty(key))
        t.is(user[key], expected[key])
      }
      t.true(user.hasOwnProperty('hash'))
      t.true(user.hasOwnProperty('iat'))
      t.true(user.hasOwnProperty('exp'))
      t.end()
    })
})

test.cb('Register fails for existing username', t => {
  const newUser = {
    user_name: 'symeshjb',
    first_name: "Doesn't",
    last_name: 'Matter',
    about: 'I forgot that I already Registered',
    password: 'illforgetthistoo'
  }
  const expectedMessage = "Username already taken!"
  request(server)
    .post('/api/auth/register')
    .send(newUser)
    .end((err, res) => {
      t.is(err, null)
      t.is(res.body.message, expectedMessage)
      t.end()
    })
})
