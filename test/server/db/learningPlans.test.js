var test = require('ava')

var createServer = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,createServer)

const learningDb = require('../../../server/db/learning')

test('Learning plans Db Tests Working', t => {
  t.pass()
})


//Plans

//getLearningPlanById
test.cb('getLearningPlanById', t => {
  const expected = {
    id: 1, user_id: 1, plan: "I wanna make tech gym", created_at: "2017-10-2 01:40:22", is_reflected: 0, is_reviewed: 0
  }

  learningDb.getLearningPlanById(t.context.db, expected.id)
    .then(actual => {
      t.true(actual !== null)
      for (let key in expected) {
        t.true(actual.hasOwnProperty(key))
        t.is(actual[key], expected[key])
      }
      t.end()
    })
})

test.cb('getLearningPlanById (2)', t => {
  const expected = {
    id: 5, user_id: 1, plan: "I want to practice the EDA stack by building a project in the tech we teach", is_reflected: 1, is_reviewed: 1, created_at: "2017-09-13 01:40:22"
  }

  learningDb.getLearningPlanById(t.context.db, expected.id)
    .then(actual => {
      t.true(actual !== null)
      for (let key in expected) {
        t.true(actual.hasOwnProperty(key))
        t.is(actual[key], expected[key])
      }
      t.end()
    })
})

//getLearningPlansByUser
test.cb('getLearningPlansByUser', t => {
  const user_id = 1
  const expectedArr = [
    {id: 1, user_id: 1, plan: "I wanna make tech gym", created_at: "2017-10-2 01:40:22", is_reflected: 0, is_reviewed: 0},
    {id: 4, user_id: 1, plan: "I want to practice the EDA stack by building a project in the tech we teach", is_reflected: 1, is_reviewed: 0, created_at: "2017-09-21 01:40:22"},
    {id: 5, user_id: 1, plan: "I want to practice the EDA stack by building a project in the tech we teach", is_reflected: 1, is_reviewed: 1, created_at: "2017-09-13 01:40:22"},
    {id: 6, user_id: 1, plan: "I want to practice the EDA stack by building a project in the tech we teach", is_reflected: 0, is_reviewed: 0, created_at: "2017-08-30 01:40:22"}
  ]
  learningDb.getLearningPlansByUser(t.context.db, user_id)
    .then(actualArr => {
      actualArr.forEach(actual => {
        t.true(actual != null)
        const expected = expectedArr.find(exp => exp.id == actual.id)
        t.true(expected != null)
        for (let key in expected) {
          t.true(actual.hasOwnProperty(key))
          t.is(actual[key], expected[key])
        }
      })
      t.end()
    })
})

//insertLeaningPlan
test.cb('insertLeaningPlan', t => {
  const plan = {
    user_id: 1,
    plan: "I want to practice the EDA stack by building a project in the tech we teach"
  }
  const expected = {
    ...plan,
    id: 7,
    is_reflected: 0,
    is_reviewed: 0
  }
  const expectedLength = 7
  learningDb.insertLeaningPlan(t.context.db, plan)
    .then(actual => {
      t.true(actual != null)
      t.is(actual[0], expected.id)
      t.context.db('learningPlans')
      .then(actualArr => {
        t.is(actualArr.length, expectedLength)
        t.context.db('learningPlans')
          .where('id', expected.id)
          .first()
          .then(actual => {
            for (let key in expected) {
              t.true(actual.hasOwnProperty(key))
              t.is(actual[key], expected[key])
            }
            t.end()

          })
      })
    })
})
