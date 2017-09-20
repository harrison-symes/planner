var router = require('express').Router()

var {decode} = require('../auth/token')
var {getConversations, getUsersInConversation, createConversation, addUserToConversation, getConversationById} = require('../db/conversations')

var getDb = (req) => req.app.get('db')

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



module.exports = router
