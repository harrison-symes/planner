var router = require('express').Router()

var {decode} = require('../auth/token')
var {getConversations, getUsersInConversation} = require('../db/conversations')

var getDb = (req) => req.app.get('db')

router.get('/', decode, (req, res) => {
  getConversations(getDb(req), req.user.id)
    .then(conversations => res.json(conversations))
    .catch(err => console.log(err))
})

router.get('/:conversation_id', (req, res) => {
  getUsersInConversation(getDb(req), req.params.conversation_id)
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

module.exports = router
