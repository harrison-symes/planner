const router = require('express').Router()

const {decode} = require('../auth/token')
const {insertLearningObjective, getObjectivesByUserIds, getJoinedObjectivesByUserIds, getLearningPlansByUser, getObjectivesByPlanId, insertObjectivesArray, insertLeaningPlan, getLearningPlanById} = require('../db/learning')
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
const purgeDuplicateObjectives2 = (objectives) => {
  let singles = []
  objectives.forEach((objective) => {
    if (!singles.find(single => single.objective_id == objective.objective_id)) singles.push(objective)
  })
  return singles
}



router.get('/', decode, (req, res) => {
  getLearningPlansByUser(getDb(req), req.user.id)
    .then(plans => {
      res.json(plans)
    })
    .catch(err => console.log(err))
})

router.get('/objectives/:plan_id', decode, (req, res) => {
  getObjectivesByPlanId(getDb(req), req.params.plan_id)
    .then(objectives => res.json(purgeDuplicateObjectives2(objectives)))
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

router.post('/', decode, (req, res) => {
  const plan = {plan: req.body.plan, user_id: req.user.id}
  insertLeaningPlan(getDb(req), plan)
    .then(plan_id => {
      const objectives = (req.body.objectives || []).map(obj =>  ({objective_id: obj.id, learning_plan_id: plan_id[0]}) )
      if (objectives.length != 0) {
        insertObjectivesArray(getDb(req), objectives)
        .then(() => getLearningPlanById(getDb(req), plan_id[0])
        .then(plan => res.json(plan)))
      } else getLearningPlanById(getDb(req), plan_id[0])
        .then(plan => res.json(plan))
    })
})

router.post('/objectives', decode, (req, res) => {
  req.body.user_id = req.user.id
  insertLearningObjective(getDb(req), req.body)
    .then(objective => res.json(objective))
    .catch(err => console.log(err))
})

module.exports = router
