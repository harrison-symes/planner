const router = require('express').Router()

const {decode} = require('../auth/token')
const {insertLearningObjective, getObjectivesByUserIds} = require('../db/learning')
const {getUserCohorts} = require('../db/cohorts')
const {getUsersToInvite} = require('../db/users')

const getDb = (req) => req.app.get('db')

const purgeDuplicate = (users) => {
  let singles = []
  users.forEach((user) => {
    if (!singles.find(single => single.user_id == user.user_id)) singles.push(user)
  })
  return singles
}

router.get('/', (req, res) => {
  res.json('my learning')
})

router.post('/', (req, res) => {
  res.json('posted learning')
})

router.get('/suggestions', (req, res) => {
  // getDb(req)('learningObjectives')
  // .then(objectives => res.json(objectives))
  getUserCohorts(getDb(req), 1)
    .then(cohorts => {
      cohorts = cohorts.map(c => c.id)
      console.log({cohorts});
      getUsersToInvite(getDb(req), cohorts)
        .then(users => {
          users = purgeDuplicate(users)
          console.log({users});

          users = users.map(u => u.user_id)
          console.log({users});
          getObjectivesByUserIds(getDb(req), users)
            .then(objectives => {
              res.json(objectives)
            })
        })
    })
})

router.post('/objectives', decode, (req, res) => {
  req.body.user_id = req.user.id
  insertLearningObjective(getDb(req), req.body)
    .then(objective => res.json(objective))
    .catch(err => console.log(err))
})

module.exports = router
