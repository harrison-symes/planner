var test = require('ava')
var request = require('supertest')

var createServer = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,createServer)

const conversationsDb = require('../../../server/db/conversations')

test('Conversations Db Tests Working', t => {
  t.pass()
})

//CONVERSATIONS ---

//getConversations
test.cb('getConversations returns the correct converations for user 1', t => {
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


test.cb('getConversations returns the correct converations for user 3', t => {
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
test.cb('getUsersInConversation returns the correct users for conversation 1', t => {
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

test.cb('getUsersInConversation returns the correct users for conversation 3', t => {
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

test.cb('getConversationById returns the correct data / keys for convo 1', t => {
  const expected = {
    id: 1,
    name: 'Harrison and Joshua'
  }
  const conversation_id = 1
  conversationsDb.getConversationById(t.context.db, conversation_id)
    .then(actual => {
      console.log({actual});
      t.true(actual != null)
      for (let key in expected) {
        t.is(actual[key], expected[key])
      }
      t.end()
    })
})

//createConversation

//addUserToConversation


//MESSAGES ---

//getMessagesByConversation

//createMessage

//getMessageById


//INVITES ---

//getOutgoingInvites

//getIncomingInvites

//getOutgoingInviteById

//createInvite

//acceptConversationInvite

//deleteInviteById
