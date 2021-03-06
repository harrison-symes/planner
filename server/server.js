var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('passport')


var server = express()

server.use(cors('*'))

server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/auth', require('./routes/auth'))
server.use('/api/cohorts', require('./routes/cohorts'))
server.use('/api/conversations', require('./routes/conversations'))
server.use('/api/users', require('./routes/users'))
server.use('/api/learning', require('./routes/learning'))


module.exports = server
