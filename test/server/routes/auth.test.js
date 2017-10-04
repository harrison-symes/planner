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
    .expect(200)
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
    .expect(400)
    .end((err, res) => {
      t.is(err, null)
      t.is(res.body.message, expectedMessage)
      t.end()
    })
})

test.cb('Login returns token for existing user', t => {
  const user = {
    user_name: 'symeshjb',
    password: 'password'
  }
  const expectedMessage = 'Authentication successful'
  request(server)
    .post('/api/auth/login')
    .send(user)
    .expect(200)
    .end((err, res) => {
      t.is(err, null)
      t.true(res.body.hasOwnProperty('token'))
      t.is(res.body.message, expectedMessage)
      t.end()
    })
})

test.cb('Login fails with incorrect password', t => {
  const user = {
    user_name: 'symeshjb',
    password: 'wrongpassword'
  }
  const expectedMessage = 'Password is incorrect'
  request(server)
    .post('/api/auth/login')
    .send(user)
    .expect(400)
    .end((err, res) => {
      t.is(err, null)
      t.true(!res.body.hasOwnProperty('token'))
      t.is(res.body.message, expectedMessage)
      t.end()
    })
})

test.cb('Login fails with incorrect username', t => {
  const user = {
    user_name: 'symemeshjb',
    password: 'password'
  }
  const expectedMessage = 'User does not exist'
  request(server)
    .post('/api/auth/login')
    .send(user)
    .expect(400)
    .end((err, res) => {
      t.is(err, null)
      console.log(res.body);
      t.true(!res.body.hasOwnProperty('token'))
      t.is(res.body.message, expectedMessage)
      t.end()
    })
})
