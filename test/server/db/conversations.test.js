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
      t.true(actual != null)
      for (let key in expected) {
        t.is(actual[key], expected[key])
      }
      t.end()
    })
})

test.cb('getConversationById returns the correct data / keys for convo 3', t => {
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

test.cb('createConversation inserts a new row to the conversations table', t => {
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
test.cb('addUserToConversation inserts a new row to the usersInConversations table', t => {
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


//MESSAGES ---

//getMessagesByConversation
test.cb('getMessagesByConversation returns the correct messages', t => {
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
test.cb('createMessage inserts a new row to the messages table', t => {
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

test.cb('getMessageById returns the correct object and format', t => {
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

test.cb('getMessageById returns the correct object and format (2)', t => {
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

//INVITES ---

//getOutgoingInvites
test.cb('getOutgoingInvites returns the correct length / format', t => {
  const expected = [{
    first_name: 'virtual',
    user_id: 3,
    user_name: 'don',
    from_user_id: 1,
    to_user_id: 3,
    conversation_id: 2,
    invite_id: 1
  }]
  conversationsDb.getOutgoingInvites(t.context.db, expected[0].conversation_id)
    .then(actualArr => {
      t.is(actualArr.length, expected.length)
      for (let key in expected[0]) {
        t.true(actualArr[0].hasOwnProperty(key))
        t.is(actualArr[0][key], expected[0][key], `${key}`)
      }
      t.is(actualArr[0].to_user_id, actualArr[0].user_id)
      t.end()
    })
})

//getIncomingInvites
test.cb('getIncomingInvites returns the correct data / format', t => {
  const expected = [{
    first_name: 'Harrison',
    user_id: 1,
    user_name: 'symeshjb',
    from_user_id: 1,
    to_user_id: 3,
    conversation_id: 2,
    invite_id: 1
  }]
  conversationsDb.getIncomingInvites(t.context.db, expected[0].to_user_id)
    .then(actualArr => {
      t.is(actualArr.length, expected.length)
      for (let key in expected[0]) {
        t.true(actualArr[0].hasOwnProperty(key))
        t.is(actualArr[0][key], expected[0][key], `${key}`)
      }
      t.is(actualArr[0].from_user_id, actualArr[0].user_id)
      t.end()
    })
})

//getOutgoingInviteById
test.cb('getOutgoingInviteById returns the correct data / format', t => {
  const expected = {
    first_name: 'virtual',
    user_id: 3,
    user_name: 'don',
    from_user_id: 1,
    to_user_id: 3,
    conversation_id: 2,
    invite_id: 1
  }
  conversationsDb.getOutgoingInviteById(t.context.db, expected.invite_id)
    .then(actual => {
      for (let key in expected) {
        t.true(actual.hasOwnProperty(key))
        t.is(actual[key], expected[key], `${key}`)
      }
      t.is(actual.to_user_id, actual.user_id)
      t.end()
    })
})

//createInvite
test.cb('createInvite adds a row to the conversationInvites table', t => {
  const invite = {
    from_user_id: 3,
    to_user_id: 1,
    conversation_id: 3
  }
  const expected = {
    ...invite,
    user_id: invite.to_user_id,
    first_name: 'Harrison',
    user_name: 'symeshjb',
    invite_id: 2
  }
  conversationsDb.createInvite(t.context.db, invite)
    .then(actual => {
      t.true(actual !== null)
      for (let key in expected) {
        t.true(actual.hasOwnProperty(key))
        t.is(actual[key], expected[key])
      }
      t.end()
    })
})

//deleteInviteById
test.cb('deleteInviteById removes row from the conversationInvites table', t => {
  const invite_id = 1
  t.context.db('conversationInvites')
    .where('id', invite_id)
    .first()
    .then(invite => {
      t.true(invite !== null)
      conversationsDb.deleteInviteById(t.context.db, invite_id)
        .then(actual => {
          t.context.db('conversationInvites')
            .where('id', invite_id)
            .first()
            .then(invite => {
              t.true(invite == null)
              t.end()
            })
        })
    })

})

//acceptConversationInvite
test.cb('acceptConversationInvite deletes a row from conversationInvites, and creates a join row in usersInConversations', t => {
  const expected = {
    id: 2,
    name: "What's for Lunch"
  }
  const invite_id = 1
  conversationsDb.acceptConversationInvite(t.context.db, invite_id)
    .then(actual => {
      for (let key in expected) {
        t.true(actual.hasOwnProperty(key))
        t.is(actual[key], expected[key])
      }
      t.context.db('conversationInvites')
        .then(invites => {
          t.is(invites.length, 0)
          t.context.db('usersInConversations')
            .where('conversation_id', expected.id)
            .then(users => {
              t.is(users.length, 3)
              t.end()
            })
        })
    })
})

test.cb('acceptConversationInvite does nothing for a false invite id', t => {
  const invite_id = 9001
  conversationsDb.acceptConversationInvite(t.context.db, invite_id)
    .then(actual => {
      t.true(!actual);
      t.context.db('conversationInvites')
        .then(invites => {
          t.is(invites.length, 1)
          t.context.db('usersInConversations')
            .then(users => {
              t.is(users.length, 6)
              t.end()
            })
        })
    })
})
