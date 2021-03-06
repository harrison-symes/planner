var test = require('ava')

var createServer = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,createServer)

var usersDb = require('../../../server/db/users')

test('Auth Db Tests Working', t => {
  t.pass()
})

//userExists
test.cb('userExists (success)', t => {
   usersDb.userExists('symeshjb', t.context.db)
    .then(exists => {
      t.true(exists)
      t.end()
    })
})

test.cb('userExists (fails)', t => {
   usersDb.userExists('mrMemeMan', t.context.db)
    .then(exists => {
      t.false(exists)
      t.end()
    })
    .catch(() => t.fail())
})




//getUserByName
test.cb('getUserByName (success)', t => {
   usersDb.getUserByName('symeshjb', t.context.db)
    .then(user => {
      t.true(user.hasOwnProperty('user_name'))
      t.true(user.hasOwnProperty('id'))
      t.true(user.hasOwnProperty('about'))
      t.true(user.hasOwnProperty('first_name'))
      t.true(user.hasOwnProperty('last_name'))
      t.true(user.hasOwnProperty('hash'))
      t.true(user.hasOwnProperty('is_private'))
      t.true(user.hasOwnProperty('is_admin'))
      t.end()
    })
    .catch(() => t.fail())
})

test.cb('getUserByName (fails)', t => {
   usersDb.getUserByName('mrMemeMan', t.context.db)
    .then(user => {
      t.true(!user)
      t.end()
    })
    .catch((err) => {
      t.faiL()
      t.end()
    })
})


//createUser

test.cb('createUser (success)', t => {
  const fakeUser = {user_name: 'lilTibbs', password: 'memeMan', first_name: 'Harrison', last_name: 'Symes', about: 'NOTHING'}
  const expected = 4
  usersDb.createUser(fakeUser, t.context.db)
    .then( actual => {
      t.is(actual[0], expected, 'Creates a user with an id of 4')
      t.end()
    })
    .catch(err => {
      t.end()
    })
})
