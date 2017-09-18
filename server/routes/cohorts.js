var router = require('express').Router()
var {getCohorts} = require('../db/cohorts')
var {decode} = require('../auth/token')

const getDb = (req) => req.app.get('db')

router.get('/', decode, (req, res) => {
  getCohorts(getDb(req), req.user.id)
    .then(cohorts => res.json(cohorts))
    .catch(err => console.error(err))
})

module.exports = router
