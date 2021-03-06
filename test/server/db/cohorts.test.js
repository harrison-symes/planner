var test = require('ava')

var createServer = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,createServer)

const cohortsDb = require('../../../server/db/cohorts')

test('Cohorts Db Tests Working', t => {
  t.pass()
})


const testCohort1 = {
  id: 1,
  name: 'Tech_Gym',
  is_private: true,
  description: 'Dummy'
}

const testCohort2 = {
  id: 2,
  name: 'Miromiro-2017',
  is_private: false,
  description: 'Dummy'
}

//getCohorts
test.cb('getCohorts', t => {
  var expected = 5
   cohortsDb.getCohorts(t.context.db)
    .then(actual => {
      t.is(actual.length, expected)
      t.end()
    })
    .catch(err => {
      t.fail()
      t.end()
    })
})

//getCohort
test.cb('GetCohort (1)', t => {
  var expected = {...testCohort1}
  cohortsDb.getCohort(t.context.db, expected.id)
    .then(actual => {
      t.true(actual != null)
      for(var key in expected) {
        t.true(actual[key] == expected[key])
      }
      t.end()
    })
})

test.cb('getCohort (2)', t => {
  var expected = {...testCohort2}
  cohortsDb.getCohort(t.context.db, expected.id)
    .then(actual => {
      t.true(actual != null)
      for(var key in expected) {
        t.true(actual[key] == expected[key])
      }
      t.end()
    })
})

test.cb('getCohort (fails)', t => {
  cohortsDb.getCohort(t.context.db, 9001)
    .then(actual => {
      t.true(actual == null)
      t.end()
    })
})

//joinCohort
test.cb('joinCohort', t => {
  const cohort_id = 2
  const user_id = 2
  const expectedLength = 5
  cohortsDb.joinCohort(t.context.db, cohort_id, user_id)
    .then(() =>
      t.context.db('usersInCohorts')
        .then(usersInCohorts => {
          t.is(usersInCohorts.length, expectedLength)
          t.true(usersInCohorts.find(join => join.user_id === user_id) != null)
          t.end()
        })
    )
})

//getUserCohorts
test.cb('getUserCohorts (success)', t => {
  const expectedArray = [{...testCohort1}, {...testCohort2}]
  const expected_id = 1
  cohortsDb.getUserCohorts(t.context.db, expected_id)
    .then(actual => {
      t.is(actual.length, expectedArray.length)
      expectedArray.forEach((expected, i) => {
        for(var key in expected) {
          t.true(actual[i][key] == expected[key])
        }
        t.true(actual[i].hasOwnProperty('user_id'))
        t.is(actual[i].user_id, expected_id)
      })
      t.end()
    })

})

test.cb('getUserCohorts (fails)', t => {
  cohortsDb.getUserCohorts(t.context.db, 9001)
    .then(actual => {
      t.is(actual.length, 0)
      t.end()
    })
})

//usersInCohorts
test.cb('usersInCohorts (1)', t => {
  const expectedKeys = [
    'user_name',
    'first_name',
    'last_name',
    'about',
    'is_private',
    'user_id',
    'cohort_id'
  ]
  cohortsDb.usersInCohorts(t.context.db, 1)
    .then(actualArr => {
      t.is(actualArr.length, 3)
      actualArr.forEach(actual => {
        expectedKeys.forEach(expected => {
          t.true(actual.hasOwnProperty(expected))
        })
      })
      t.end()
    })
})

test.cb('usersInCohorts (2)', t => {
  cohortsDb.usersInCohorts(t.context.db, 2)
    .then(actualArr => {
      t.is(actualArr.length, 1)
      t.end()
    })
})
