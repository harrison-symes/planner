var test = require('ava')
var request = require('supertest')

var createServer = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,createServer)

const learningDb = require('../../../server/db/learning')

test('Learning Db Tests Working', t => {
  t.pass()
})


//Objectives


//getLearningObjectiveById
test.cb('getLearningObjectiveById', t => {
  const expected = {
    title: 'Full Stack Project',
    user_id: 1,
    id: 1
  }
  learningDb.getLearningObjectiveById(t.context.db, expected.id)
    .then(actual => {
      t.true(actual != null)
      for (let key in expected) {
        t.true(actual.hasOwnProperty(key))
        t.is(actual[key], expected[key])
      }
      t.end()
    })
})

//getObjectivesByUserIds
test.cb('getObjectivesByUserIds', t => {
  const expectedArr = [
    {title: 'Use Postgresql locally', id: 2},
    {title: 'Vue.js', id: 3}
  ]
  const user_ids = [2, 3]
  learningDb.getObjectivesByUserIds(t.context.db, user_ids)
    .then(actualArr => {
      actualArr.forEach(actual => {
        let expected = expectedArr.find(exp => exp.id == actual.id)
        t.true(expected != null)
        for (let key in expected) {
          t.true(actual.hasOwnProperty(key))
          t.is(actual[key], expected[key])
        }
      })
      t.end()
    })
})

test.cb('getObjectivesByUserIds (2)', t => {
  const expectedArr = [
    {title: 'Full Stack Project', id: 1},
    {title: 'Vue.js', id: 3}
  ]
  const user_ids = [1, 3]
  learningDb.getObjectivesByUserIds(t.context.db, user_ids)
    .then(actualArr => {
      actualArr.forEach(actual => {
        let expected = expectedArr.find(exp => exp.id == actual.id)
        t.true(expected != null)
        for (let key in expected) {
          t.true(actual.hasOwnProperty(key))
          t.is(actual[key], expected[key])
        }
      })
      t.end()
    })
})

//getJoinedObjectivesByUserIds

//getObjectivesByPlanId

//insertLearningObjective

//insertObjectivesArray






//Plans

//getLearningPlanById

//getLearningPlansByUser

//insertLeaningPlan
