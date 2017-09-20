var router = require('express').Router()

var {getUserById} = require('../db/users')
var {decode} = require('../auth/token')

const getDb = (req) => req.app.get('db')


router.get('/:id', decode, (req, res) => {
  getUserById(getDb(req), req.params.id)
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

module.exports = router
