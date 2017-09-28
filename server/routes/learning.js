const router = require('express').Router()

const {decode} = require('../auth/token')
const {insertLearningObjective} = require('../db/learning')

const getDb = (req) => req.app.get('db')

router.get('/', (req, res) => {
  res.json('my learning')
})

router.post('/', (req, res) => {
  res.json('posted learning')
})

router.get('/suggestions', (req, res) => {
  getDb(req)('learningObjectives')
    .then(objectives => res.json(objectives))
})

router.post('/objectives', (req, res) => {
  console.log(req.body);
  insertLearningObjective(getDb(req), req.body)
    .then(objective => res.json(objective))
    .catch(err => console.log(err))
})

module.exports = router
