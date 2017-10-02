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

//getUsersInConversation

//getConversationById

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
