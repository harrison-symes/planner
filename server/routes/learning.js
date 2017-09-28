const router = require('express').Router()

const {decode} = require('../auth/token')
const {insertLearningObjective, getObjectivesByUserIds, getJoinedObjectivesByUserIds, getLearningPlansByUser, getObjectivesByPlanId} = require('../db/learning')
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

const purgeDuplicateObjectives = (objectives) => {
  let singles = []
  objectives.forEach((objective) => {
    if (!singles.find(single => single.id == objective.id)) singles.push(objective)
  })
  return singles
}

router.get('/', (req, res) => {
  getLearningPlansByUser(getDb(req), 1)
    .then(plans => {
      res.json(plans)
    })
    .catch(err => console.log(err))
})

router.get('/suggestions', decode, (req, res) => {
  getUserCohorts(getDb(req), req.user.id)
    .then(cohorts => {
      getUsersToInvite(getDb(req), cohorts.map(c => c.id))
        .then(users => {
          users = purgeDuplicate(users).map(u => u.user_id)
          getObjectivesByUserIds(getDb(req), users)
            .then(objectives => {
              getJoinedObjectivesByUserIds(getDb(req), users)
                .then(joinedObjectives => {
                  res.json(purgeDuplicateObjectives(objectives.concat(joinedObjectives)))
                })
            })
        })
    })
})

router.get('/:id', (req, res) => {
  getObjectivesByPlanId(getDb(req), req.params.id)
    .then(objectives => res.json(objectives))
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  res.json('posted learning')
})

router.post('/objectives', decode, (req, res) => {
  req.body.user_id = req.user.id
  insertLearningObjective(getDb(req), req.body)
    .then(objective => res.json(objective))
    .catch(err => console.log(err))
})

module.exports = router
