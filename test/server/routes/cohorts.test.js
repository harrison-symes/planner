var test = require('ava')
var request = require('supertest')

var server = require('../../../server/server')
var setupDb = require('../setup-db')
var headers = require('./token')

setupDb(test,server)

test('Cohorts Routes Tests Working', t => {
  t.pass()
})

test.cb('GET /cohorts', t => {
  const expectedArr = [
    {id: 1, name: 'Tech_Gym', description: 'Dummy', is_private: 1},
    {id: 2, name: 'Miromiro-2017', description: 'Dummy', is_private: 0}
  ]
  request(server)
    .get('/api/cohorts')
    .set(headers)
    .expect(200)
    .end((err, res) => {
      t.true(err == null)
      t.true(res.body != null)
      t.is(res.body.length, expectedArr.length)
      expectedArr.forEach(expected => {
        let actual = res.body.find(actual => actual.id == expected.id)
        t.true(actual != null)
        for (let key in expected) {
          t.true(actual.hasOwnProperty(key))
          t.is(actual[key], expected[key])
        }
      })
      t.end()
    })
})

test.cb('GET /cohorts/find', t => {
  const expectedArr = [
    {id: 3, name: 'Kahu-2018', description: 'Dummy', is_private: 0},
    {id: 4, name: 'Harakeke-2018', description: 'Dummy', is_private: 0},
    {id: 5, name: 'Kokako-2018', description: 'Dummy', is_private: 0}
  ]
  request(server)
    .get('/api/cohorts/find')
    .set(headers)
    .expect(200)
    .end((err, res) => {
      t.true(err == null)
      t.true(res.body != null)
      t.is(res.body.length, expectedArr.length)
      expectedArr.forEach(expected => {
        let actual = res.body.find(actual => actual.id == expected.id)
        t.true(actual != null)
        for (let key in expected) {
          t.true(actual.hasOwnProperty(key))
          t.is(actual[key], expected[key])
        }
      })
      t.end()
    })

})

test.cb('GET /cohorts/:cohort_id/users', t=> {
  const cohort_id = 1
  const expectedArr = [
    {user_id: 1, user_name: 'symeshjb', first_name: 'Harrison', last_name: 'Symes', about: 'I made dis', is_admin: 0, is_private: 0, cohort_id },
    {user_id: 2, user_name: 'joshua', first_name: 'Joshua', last_name: 'Vial', is_private: 0, is_admin: 0, cohort_id },
    {user_id: 3, user_name: 'don', first_name: 'virtual', last_name: 'DOM', is_admin: 0, is_private: 0, cohort_id}
  ]
  request(server)
    .get(`/api/cohorts/${cohort_id}/users`)
    .set(headers)
    .expect(200)
    .end((err, res) => {
      t.true(err == null)
      t.true(res.body != null)
      t.is(res.body.length, expectedArr.length)
      expectedArr.forEach(expected => {
        let actual = res.body.find(actual => actual.user_id == expected.user_id)
        t.true(actual != null)
        for (let key in expected) {
          t.true(actual.hasOwnProperty(key))
          t.is(actual[key], expected[key])
        }
      })
      t.end()
    })
})

test.cb('POST /cohorts/:cohort_id', t => {
  const expected = {
    id: 3,
    name: 'Kahu-2018',
    description: 'Dummy',
    is_private: 0
  }
  request(server)
    .post(`/api/cohorts/${expected.id}`)
    .set(headers)
    .expect(201)
    .end((err, res) => {
      t.true(err == null)
      t.true(res.body != null)
      for (let key in expected) {
        t.true(res.body.hasOwnProperty(key))
        t.is(res.body[key], expected[key])
      }
      t.end()
    })
})
