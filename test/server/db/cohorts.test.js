var test = require('ava')
var request = require('supertest')

var createServer = require('../../../server/server')
var setupDb = require('../setup-db')

setupDb(test,createServer)

const cohortsDb = require('../../../server/db/cohorts')

test('Cohorts Db Tests Working', t => {
  t.pass()
})

//getCohorts
test.cb('Get Cohorts returns correct number of overall cohorts', t => {
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

//joinCohort

//getUserCohorts

//usersInCohorts
