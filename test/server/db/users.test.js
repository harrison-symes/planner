var test = require('ava')

var createServer = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,createServer)

var usersDb = require('../../../server/db/users')

test('Users Db Tests Working', t => {
  t.pass()
})

//getUserById
test.cb('getUserById (1)', t => {
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

test.cb('getUserById (2)', t => {
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

test.cb('getUsersToInvite (1)', t => {
  const cohort_ids = [1]
  const expectedArr = [
    {user_id: 1, user_name: 'symeshjb'},
    {user_id: 2, user_name: 'joshua'},
    {user_id: 3, user_name: 'don'}
  ]
  const expectedKeys = [
    'user_name',
    'first_name',
    'last_name',
    'user_id'
  ]
  usersDb.getUsersToInvite(t.context.db, cohort_ids)
    .then(actualArr => {
      actualArr.forEach((actual, idx) => {
        let expected = expectedArr.find(expected => expected.user_id === actual.user_id)
        t.true(expected !== null)
        expectedKeys.forEach(key => {
          t.true(actual.hasOwnProperty(key))
        })
        for (let key in expected) {
          t.true(actual[key] === expected[key])
        }
      })
      t.end()
    })
})

test.cb('getUsersToInvite (2)', t => {
  const cohort_ids = [2]
  const expectedLength = 1
  const expected = {
    user_id: 1,
    user_name: 'symeshjb'
  }
  usersDb.getUsersToInvite(t.context.db, cohort_ids)
    .then(actualArr => {
      t.is(actualArr.length, expectedLength)
      for (let key in expected) {
        t.true(actualArr[0].hasOwnProperty(key))
        t.is(actualArr[0][key], expected[key])
      }
      t.end()
    })
})

test.cb('getUsersToInvite (3)', t => {
  const cohort_ids = [1, 2, 3]
  const expectedLength = 4
  const expectedFilterLength = 2
  usersDb.getUsersToInvite(t.context.db, cohort_ids)
    .then(actualArr => {
      t.is(actualArr.length, expectedLength)
      t.is(actualArr.filter(actual => actual.user_id == 1).length, expectedFilterLength)
      t.end()
    })
})
