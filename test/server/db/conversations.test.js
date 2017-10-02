var test = require('ava')
var request = require('supertest')

var createServer = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,createServer)

test('Conversations Db Tests Working', t => {
  t.pass()
})

//CONVERSATIONS ---

//getConversations

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
