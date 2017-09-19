var router = require('express').Router()

var {userExists, createUser} = require('../db/users')
var token = require('../auth/token')

router.post('/register', register, token.issue)

function register (req, res, next) {
  const {user_name, password} = req.body
  userExists(user_name.toLowerCase(), req.app.get('db'))
    .then(exists => {
      if (exists) return res.status(400).send({message: "Username already taken!"})
      createUser(user_name.toLowerCase(), password, req.app.get('db'))
        .then(() => next())
    })
    .catch(err => res.status(500).send({message: err.message}))
}



router.post('/login', token.issue)

module.exports = router
