var test = require('ava')
var request = require('supertest')

var createServer = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,createServer)

var usersDb = require('../../../server/db/users')

test('Users Db Tests Working', t => {
  t.pass()
})

//getUserById
test.cb('getUserById returns the correct user without hash', t => {
  const expected = {
    user_id: 1,
    user_name: 'symeshjb',
    first_name: 'Harrison',
    last_name: 'Symes',
    'is_admin': 1,
    about: 'I made dis'
  }
  usersDb.getUserById(t.context.db, expected.user_id)
    .then(actual => {
      t.false(actual.hasOwnProperty('hash'))
      t.false(actual.hasOwnProperty('password'))
      for (let key in expected) {
        t.true(actual.hasOwnProperty(key))
        t.is(actual[key], expected[key])
      }
      t.end()
    })
})

test.cb('getUserById can get second user', t => {
  const expected = {
    user_id: 2,
    user_name: 'joshua'
  }
  usersDb.getUserById(t.context.db, expected.user_id)
    .then(actual => {
      t.false(actual.hasOwnProperty('hash'))
      t.false(actual.hasOwnProperty('password'))
      for (let key in expected) {
        t.true(actual.hasOwnProperty(key))
        t.is(actual[key], expected[key])
      }
      t.end()
    })
})

//getUsersToInvite
