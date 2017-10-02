var hash = require('../auth/hash')

function createUser ({user_name, password, first_name, last_name, about}, db) {
  return new Promise ((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err)
      db('users')
        .insert({user_name, first_name, last_name, about, hash}, 'id')
        .then(id => resolve(id))
    })
  })
}

function userExists (user_name, db) {
  return db('users')
    .count('id as n')
    .where('user_name', user_name)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (user_name, db) {
  return db('users')
    .where('user_name', user_name)
    .first()
}

module.exports = {
  createUser,
  userExists,
  getUserByName,
  getUserById: (db, id) => db
    .select('user_name', 'first_name', 'last_name', 'id as user_id', 'about', 'is_admin')
    .from('users')
    .where('id', id)
    .first(),
  getUsersToInvite: (db, cohort_ids) => db
    .select('user_name', 'first_name', 'last_name', 'id as user_id')
    .from('users')
    .join('usersInCohorts', 'users.id', 'usersInCohorts.user_id')
    .whereIn('usersInCohorts.cohort_id', cohort_ids)
}
