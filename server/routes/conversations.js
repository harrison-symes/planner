var router = require('express').Router()

var {decode} = require('../auth/token')
var {getConversations, getUsersInConversation, createConversation, addUserToConversation, getConversationById, getMessagesByConversation, createMessage, createInvite, getOutgoingInvites, getIncomingInvites} = require('../db/conversations')

var getDb = (req) => req.app.get('db')

router.get('/test', (req, res) => {
  getMessagesByConversation(getDb(req), 1)
    .then(messages => res.json(messages))
})

router.get('/invites', (req, res) => {
  getIncomingInvites(getDb(req), 3)
    .then(invites => res.json(invites))
})

router.get('/', decode, (req, res) => {
  getConversations(getDb(req), req.user.id)
    .then(conversations => res.json(conversations))
    .catch(err => console.log(err))
})

router.get('/:conversation_id', decode, (req, res) => {
  getUsersInConversation(getDb(req), req.params.conversation_id)
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

router.post('/', decode, (req, res) => {
  createConversation(getDb(req), req.body.name)
    .then(conversation_id => {
      addUserToConversation(getDb(req), conversation_id[0], req.user.id)
        .then(() => {
          getConversationById(getDb(req), conversation_id[0])
            .then((conversation) => res.status(201).json(conversation))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

router.get('/:conversation_id/messages', decode, (req, res) => {
  getMessagesByConversation(getDb(req), req.params.conversation_id)
    .then(messages => res.json(messages))
    .catch(err => console.log(err))
})

router.post('/:conversation_id/messages', decode, (req, res) => {
  req.body.conversation_id = req.params.conversation_id
  req.body.user_id = req.user.id
  createMessage(getDb(req), req.body)
    .then(message => res.json(message))
    .catch(err => console.log(err))
})

router.get('/:conversation_id/invites', (req, res) => {
  console.log(req.params);
  getOutgoingInvites(getDb(req), req.params.conversation_id)
    .then(invites => res.json(invites))
})

router.post('/:conversation_id/invites/', decode, (req, res) => {
  createInvite(getDb(req), {from_user_id: req.user.id, to_user_id: req.body.user_id, conversation_id: req.params.conversation_id})
    .then(invite => res.json(invite))
})


module.exports = router
