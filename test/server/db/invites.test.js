var test = require('ava')

var createServer = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,createServer)

const conversationsDb = require('../../../server/db/conversations')


test('Invites Db Tests Working', t => {
  t.pass()
})


//INVITES ---

//getOutgoingInvites
test.cb('getOutgoingInvites', t => {
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
test.cb('getIncomingInvites', t => {
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
test.cb('getOutgoingInviteById', t => {
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
test.cb('createInvite', t => {
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
test.cb('deleteInviteById', t => {
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
test.cb('acceptConversationInvite (success)', t => {
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

test.cb('acceptConversationInvite (fails)', t => {
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
