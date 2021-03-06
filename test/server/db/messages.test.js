var test = require('ava')

var createServer = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,createServer)

const conversationsDb = require('../../../server/db/conversations')


test('Messages Db Tests Working', t => {
  t.pass()
})

//MESSAGES ---

//getMessagesByConversation
test.cb('getMessagesByConversation', t => {
  const conversation_id = 1
  const expectedKeys = [
    'content',
    'user_name',
    'first_name',
    'message_id',
    'conversation_id',
    'user_id'
  ]
  const expectedLength = 2
  conversationsDb.getMessagesByConversation(t.context.db, conversation_id)
    .then(actualArr => {
      t.is(actualArr.length, expectedLength)
      actualArr.forEach(actual => {
        expectedKeys.forEach(key => {
          t.true(actual.hasOwnProperty(key))
        })
      })
      t.end()
    })
})

//createMessage
test.cb('createMessage', t => {
  const message = {
    user_id: 1,
    conversation_id: 1,
    content: "Hello Sir"
  }
  const expectedLength = 4
  const expected = {
    ...message,
    id: expectedLength,
  }
  conversationsDb.createMessage(t.context.db, message)
    .then(actual => {
      t.is(actual.id, expectedLength)
      t.context.db('messages')
        .then(actualArr => {
          t.is(actualArr.length, expectedLength)
          let addedMessage = actualArr.find(message => message.id === actual.id)
          t.true(addedMessage != null)
          for (let key in expected) {
            t.true(addedMessage.hasOwnProperty(key))
            t.is(addedMessage[key], expected[key])
          }

          t.end()
        })
    })
})

//getMessageById

test.cb('getMessageById (1)', t => {
  const expected = {
    id: 1,
    user_id: 1,
    conversation_id: 1,
    content: 'hello josh',
    first_name: 'Harrison',
    user_name: 'symeshjb'
  }
  conversationsDb.getMessageById(t.context.db,expected.id)
    .then(actual => {
      t.true(actual !== null)
      for (let key in expected) {
        t.true(actual.hasOwnProperty(key))
        t.is(actual[key],expected[key])
      }
      t.end()
    })
})

test.cb('getMessageById (2)', t => {
  const expected = {
    id: 3,
    user_id: 2,
    conversation_id: 1,
    content: 'hello sir',
    user_name: 'joshua'
  }
  conversationsDb.getMessageById(t.context.db,expected.id)
    .then(actual => {
      t.true(actual !== null)
      for (let key in expected) {
        t.true(actual.hasOwnProperty(key))
        t.is(actual[key],expected[key])
      }
      t.end()
    })
})
