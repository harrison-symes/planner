module.exports = {
  getCohorts: (db) => db('cohorts'),
  getCohort: (db, id) => db('cohorts')
    .where('id', id)
    .first(),
  joinCohort: (db, cohort_id, user_id) => db('usersInCohorts')
    .insert({cohort_id, user_id}),
  getUserCohorts: (db, user_id) => db('cohorts')
    .join('usersInCohorts', 'cohorts.id', "usersInCohorts.cohort_id")
    .where('usersInCohorts.user_id', user_id),
  usersInCohorts: (db, cohort_id) => db
    .select('user_name')
    .from('users')
    .join('usersInCohorts', 'users.id', 'usersInCohorts.user_id')
    .select('usersInCohorts.*')
    .where('usersInCohorts.cohort_id', cohort_id)
}
