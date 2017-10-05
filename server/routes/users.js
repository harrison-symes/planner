var router = require('express').Router()

var {getUserById, getUsersToInvite} = require('../db/users')
var {getUserCohorts} = require('../db/cohorts')
var {getUsersInConversation} = require('../db/conversations')
var purgeDuplicate = require('./purgeDuplicates')

var {decode} = require('../auth/token')

const getDb = (req) => req.app.get('db')

const filterInvited = (users, usersInConversation) => {
  return users.filter(user => !usersInConversation.find(convoUser => user.user_id == convoUser.user_id))
}

router.get('/inviteable/:conversation_id', decode, (req, res) => {
  const mapId = (cohort) => cohort.id
  const mapIds = (cohorts) => cohorts.map(mapId)
  getUserCohorts(getDb(req), req.user.id)
    .then(userCohorts => {
      let cohort_ids = mapIds(userCohorts)
      getUsersToInvite(getDb(req), cohort_ids)
        .then(users => {
          getUsersInConversation(getDb(req), req.params.conversation_id)
            .then(usersInConversation => {
              res.status(200).json(filterInvited(purgeDuplicate(users, 'user_id'), usersInConversation))
            })
          // res.json(users)
        })
    })
})

router.get('/:id', decode, (req, res) => {
  getUserById(getDb(req), req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => console.log(err))
})


module.exports = router
