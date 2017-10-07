var test = require('ava')

var server = require('../../../server/server')
var setupDb = require('../setup-db')
var request = require('supertest')

setupDb(test,server)

test('Protected Routes Tests Working', t => {
  t.pass()
})

const assertProtected = (t, path) => {
  request(server)
    .get(path)
    .end((err, res) => {
      console.log({err, res: res.body});
      t.end()
    })
}

// test.only.cb('/users/inviteable/:conversation_id', t => assertProtected(t, '/api/users/inviteable/1'))
