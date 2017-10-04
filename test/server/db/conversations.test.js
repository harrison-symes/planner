var test = require('ava')

var createServer = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,createServer)

const conversationsDb = require('../../../server/db/conversations')

test('Conversations Db Tests Working', t => {
  t.pass()
})

//CONVERSATIONS ---

//getConversations
test.cb('getConversations (1)', t => {
  const expectedArr = [
    {user_id: 1, conversation_id: 1, name: 'Harrison and Joshua'},
    {user_id: 1, conversation_id: 2, name: "What's for Lunch"}
  ]
  const user_id = 1
  conversationsDb.getConversations(t.context.db, user_id)
    .then(actualArr => {
      t.is(actualArr.length, expectedArr.length)
      actualArr.forEach(actual => {
        let expected = expectedArr.find(exp => exp.conversation_id === actual.conversation_id)
        t.true(expected !== null)
        for (let key in expected) {
          t.true(actual.hasOwnProperty(key))
          t.is(actual[key], expected[key])
        }
      })
      t.end()
    })
})


test.cb('getConversations (2)', t => {
  const expectedArr = [
    {user_id: 3, conversation_id: 3, name: 'Teacher Secret'}
  ]
  const user_id = 3
  conversationsDb.getConversations(t.context.db, user_id)
    .then(actualArr => {
      t.is(actualArr.length, expectedArr.length)
      actualArr.forEach(actual => {
        let expected = expectedArr.find(exp => exp.conversation_id === actual.conversation_id)
        t.true(expected !== null)
        for (let key in expected) {
          t.true(actual.hasOwnProperty(key))
          t.is(actual[key], expected[key])
        }
      })
      t.end()
    })
})

//getUsersInConversation
test.cb('getUsersInConversation (1)', t => {
  const expectedArr = [
    {user_id: 1, user_name: 'symeshjb'},
    {user_id: 2, user_name: 'joshua'}
  ]
  const conversation_id = 1
  conversationsDb.getUsersInConversation(t.context.db, conversation_id)
    .then(actualArr => {
      t.is(actualArr.length, expectedArr.length)
      actualArr.forEach(actual => {
        let expected = expectedArr.find(exp => exp.user_id === actual.user_id)
        t.true(expected !== null)
        for (let key in expected) {
          t.true(actual.hasOwnProperty(key))
          t.is(actual[key], expected[key])
        }
      })
      t.end()
    })
})

test.cb('getUsersInConversation (2)', t => {
  const expectedArr = [
    {user_id: 2, user_name: 'joshua'},
    {user_id: 3, user_name: 'don'}
  ]
  const conversation_id = 3
  conversationsDb.getUsersInConversation(t.context.db, conversation_id)
    .then(actualArr => {
      t.is(actualArr.length, expectedArr.length)
      actualArr.forEach(actual => {
        let expected = expectedArr.find(exp => exp.user_id === actual.user_id)
        t.true(expected !== null)
        for (let key in expected) {
          t.true(actual.hasOwnProperty(key))
          t.is(actual[key], expected[key])
        }
      })
      t.end()
    })
})

//getConversationById

test.cb('getConversationById (1)', t => {
  const expected = {
    id: 1,
    name: 'Harrison and Joshua'
  }
  const conversation_id = 1
  conversationsDb.getConversationById(t.context.db, conversation_id)
    .then(actual => {
      t.true(actual != null)
      for (let key in expected) {
        t.is(actual[key], expected[key])
      }
      t.end()
    })
})

test.cb('getConversationById (2)', t => {
  const expected = {
    id: 3,
    name: 'Teacher Secret'
  }
  const conversation_id = 3
  conversationsDb.getConversationById(t.context.db, conversation_id)
    .then(actual => {
      t.true(actual != null)
      for (let key in expected) {
        t.is(actual[key], expected[key])
      }
      t.end()
    })
})

//createConversation

test.cb('createConversation', t => {
  const name = 'test convo'
  const expectedLength = 4
  conversationsDb.createConversation(t.context.db, name)
    .then(actual => {
      t.is(actual[0], expectedLength)
      t.context.db('conversations')
        .then(actualArr => {
          t.is(actualArr.length, expectedLength)
          t.true(actualArr.find(act => act.name == name) != null)
          t.end()
        })
    })
})

//addUserToConversation
test.cb('addUserToConversation', t => {
  const user_id = 1
  const conversation_id = 3
  const expectedLength = 7
  conversationsDb.addUserToConversation(t.context.db, conversation_id, user_id)
    .then(actual => {
      t.is(actual[0], expectedLength)
      t.context.db('usersInConversations')
        .then(actualArr => {
          t.is(actualArr.length, expectedLength)
          t.true(actualArr.find(act => act.user_id == user_id) != null)
          t.end()
        })
    })
})
