var test = require('ava')
var request = require('supertest')

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
test.cb('Get Cohorts returns all cohorts', t => {
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
test.cb('Get Cohort returns a single cohort by an id (1)', t => {
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

test.cb('Get Cohort returns a single cohort by an id (2)', t => {
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

test.cb('Get Cohort returns null for an id that doesnt exist', t => {
  cohortsDb.getCohort(t.context.db, 9001)
    .then(actual => {
      t.true(actual == null)
      t.end()
    })
})

//joinCohort

//getUserCohorts
test.cb('Get User Cohorts by user id gets cohorts joined by user', t => {
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

test.cb('getUserCohorts returns an empty array for a non-existing user_id / no user/cohort relationship', t => {
  cohortsDb.getUserCohorts(t.context.db, 9001)
    .then(actual => {
      t.is(actual.length, 0)
      t.end()
    })
})

//usersInCohorts
test.cb('usersInCohorts returns correct users by cohort_id', t => {
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

test.cb('usersInCohorts has only one user in cohort_id: 2', t => {
  cohortsDb.usersInCohorts(t.context.db, 2)
    .then(actualArr => {
      t.is(actualArr.length, 1)
      t.end()
    })
})

// tess
