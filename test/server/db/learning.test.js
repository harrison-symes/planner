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
test.cb('getJoinedObjectivesByUserIds', t => {
  const user_ids = [1]
  const expectedArr = [
    {title:  'Full Stack Project', id: 1},
    {title: 'Use Postgresql locally', id: 2},
    {title: 'Vue.js', id: 3}
  ]
  const expectedDuplicates = 4
  learningDb.getJoinedObjectivesByUserIds(t.context.db, user_ids)
    .then(actualArr => {
      //expecting exponential double ups due to many to manys, should be 4 instances of each object here
      expectedArr.forEach(expected => {
        let copies = actualArr.filter(actual => actual.id == expected.id)
        t.is(copies.length, expectedDuplicates, 'expecting duplicates')
      })

      //purge duplicates
      const hash = actualArr.reduce((table, item) => {
       table[item.id] = item
       return table
       }, {})
       actualArr = Object.keys(hash).map(id => actualArr.find(act => act.id == id))

      //check that there are now no duplicates
      expectedArr.forEach(expected => {
        let copies = actualArr.filter(actual => actual.id == expected.id)
        t.is(copies.length, 1, 'no duplicates after purging')
        for (let key in expected) {
          t.true(copies[0].hasOwnProperty(key))
          t.is(copies[0][key], expected[key])
        }
      })
      t.end()
    })
})

test.cb('getJoinedObjectivesByUserIds (2)', t => {
  const user_ids = [2, 3]
  const expectedArr = [
    {title: 'Use Postgresql locally', id: 2},
    {title: 'Vue.js', id: 3}
  ]
  learningDb.getJoinedObjectivesByUserIds(t.context.db, user_ids)
    .then(actualArr => {
      //purge duplicates
      const hash = actualArr.reduce((table, item) => {
        table[item.id] = item
        return table
      }, {})
        actualArr = Object.keys(hash).map(id => actualArr.find(act => act.id == id))
      //check that there are now no duplicates
      expectedArr.forEach(expected => {
        let copies = actualArr.filter(actual => actual.id == expected.id)
        t.is(copies.length, 1, 'no duplicates after purging')
        for (let key in expected) {
          t.true(copies[0].hasOwnProperty(key))
          t.is(copies[0][key], expected[key])
        }
      })
      t.end()
    })
})

//getObjectivesByPlanId
test.cb('getObjectivesByPlanId', t => {
  const plan_id = 1
  const expectedArr = [
    {title:  'Full Stack Project', id: 1},
    {title: 'Use Postgresql locally', id: 2},
    {title: 'Vue.js', id: 3}
  ]
  learningDb.getObjectivesByPlanId(t.context.db, plan_id)
    .then(actualArr => {
      expectedArr.forEach(expected => {
        const actual = actualArr.find(actual => actual.id == expected.id)
        for (let key in expected) {
          t.true(actual.hasOwnProperty(key))
          t.is(actual[key], expected[key])
        }
      })
      t.end()
    })
})

test.cb('getObjectivesByPlanId (2)', t => {
  const plan_id = 2
  const expectedArr = [
    {title: 'Use Postgresql locally', id: 2}
  ]
  learningDb.getObjectivesByPlanId(t.context.db, plan_id)
    .then(actualArr => {
      expectedArr.forEach(expected => {
        const actual = actualArr.find(actual => actual.id == expected.id)
        for (let key in expected) {
          t.true(actual.hasOwnProperty(key))
          t.is(actual[key], expected[key])
        }
      })
      t.end()
    })
})

//insertLearningObjective
test.cb('insertLearningObjective', t => {
  const objective = {
    title: 'test objective',
    user_id: 1
  }
  const expected = {
    ...objective,
    id: 4,
  }
  const expectedLength = expected.id
  learningDb.insertLearningObjective(t.context.db, objective)
    .then(actual => {
      for (let key in expected) {
        t.true(actual.hasOwnProperty(key))
        t.is(actual[key], expected[key])
      }
      t.context.db('learningObjectives')
        .then(actualArr => {
          t.true(actualArr.length, expectedLength)
        })
        t.end()
    })

})

//insertObjectivesArray
test.cb('insertLearningObjectivesArray', t => {
  const objectiveArray = [
    {title: 'test objective', user_id: 1},
    {title: 'test 2', user_id: 1}
  ]
  const expectedArr = [4, 5]
  learningDb.insertLearningObjective(t.context.db, objectiveArray)
    .then(actualArr => {
      t.context.db('learningObjectives')
        .then(actualArr => {
          t.is(actualArr.length, 3 + expectedArr.length)
          t.end()
        })
    })
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
