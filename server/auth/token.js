var jwt = require('jsonwebtoken')
var {getUserByName} = require('../db/users')
var verifyJwt = require('express-jwt')
var {compare} = require('./hash')

function issue (req, res) {
  getUserByName(req.body.user_name.toLowerCase(), req.app.get('db'))
    .then(user => {
      if (!user) res.status(400).json({message: 'User does not exist'})
      else compare(req.body.password, user.hash, (err, match) => {
        if (err) res.status(500).json({message: err.message})
        else if (!match) res.status(400).json({message: 'Password is incorrect'})
        else {
          var token = createToken(user, process.env.JWT_SECRET)
          res.status(200).json({
            message: 'Authentication successful',
            token
          })
        }
      })
    })
}

function createToken (user, secret) {
  return jwt.sign(user, secret, {
    expiresIn: '24h'
  })
}

function getSecret(req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

function decode (req, res, next) {
  verifyJwt({secret: getSecret})(req, res, next)
}

module.exports = {
  issue,
  createToken,
  decode
}
