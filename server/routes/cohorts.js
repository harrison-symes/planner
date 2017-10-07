var router = require('express').Router()
var {getCohorts, getCohort, joinCohort, getUserCohorts, usersInCohorts} = require('../db/cohorts')
var {decode} = require('../auth/token')

const getDb = (req) => req.app.get('db')

router.get('/', decode, (req, res) => {
  getUserCohorts(getDb(req), req.user.id)
  .then(userCohorts => {
    res.status(200).json(userCohorts)
  })
  .catch(err => console.error(err))
})

router.get('/find', decode, (req, res) => {
  getUserCohorts(getDb(req), req.user.id)
  .then(userCohorts => {
    getCohorts(getDb(req), req.user.id)
    .then(cohorts => {
      let notJoined = cohorts.filter(cohort => !userCohorts.find(({id}) => cohort.id==id))
      res.status(200).json(notJoined)
    })
    .catch(err => console.error(err))
  })
  .catch(err => console.log(err))
})

router.get('/:cohort_id/users', (req, res) => {
  usersInCohorts(getDb(req), req.params.cohort_id)
    .then(users => res.json(users))
})

router.post('/:cohort_id', decode, (req, res) => {
  getCohort(getDb(req), req.params.cohort_id)
    .then(cohort => {
      if (cohort.is_private) res.status('201').json({message: 'cohort is private, functionality not added yet'})
      else joinCohort(getDb(req), req.params.cohort_id, req.user.id)
        .then(() => res.status(201).json(cohort))
    })
})

module.exports = router
