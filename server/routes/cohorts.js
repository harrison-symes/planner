var router = require('express').Router()
var {getCohorts, getCohort, joinCohort, getUserCohorts} = require('../db/cohorts')
var {decode} = require('../auth/token')

const getDb = (req) => req.app.get('db')

router.get('/find', decode, (req, res) => {
  getUserCohorts(getDb(req), req.user.id)
  .then(userCohorts => {
    getCohorts(getDb(req), req.user.id)
    .then(cohorts => {
      let notJoined = cohorts.filter(cohort => !userCohorts.find(({id}) => cohort.id==id))
      console.log({userCohorts, cohorts, notJoined});
      res.json(notJoined)
    })
    .catch(err => console.error(err))
  })
  .catch(err => console.log(err))
})

router.get('/', decode, (req, res) => {
  getUserCohorts(getDb(req), req.user.id)
  .then(userCohorts => {
    res.status(200).json(userCohorts)
  })
  .catch(err => console.error(err))
})

router.post('/:id', decode, (req, res) => {
  console.log(req.params.id);
  getCohort(getDb(req), req.params.id)
    .then(cohort => {
      console.log({cohort});
      if (cohort.is_private) res.status('201').json({message: 'cohort is private, functionality not added yet'})
      else joinCohort(getDb(req), req.params.id, req.user.id)
        .then(() => res.status(201).json(cohort))
    })
})

module.exports = router
