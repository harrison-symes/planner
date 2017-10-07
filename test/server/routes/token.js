const {createToken} = require('../../../server/auth/token')

const user = {
  id: 1, user_name: 'symeshjb', first_name: 'Harrison', last_name: 'Symes', about: 'I made dis', is_admin: true
}

let token = createToken(user, "TEST_SECRET")
module.exports = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/json'
}
