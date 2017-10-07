var test = require('ava')
var request = require('supertest')

var server = require('../../../server/server')
var setupDb = require('../setup-db')
var headers = require('./token')

setupDb(test,server)

test('Cohorts Routes Tests Working', t => {
  t.pass()
})

test.only.cb('/cohorts', t => {
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

test.cb('/cohorts/find', t => {
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
