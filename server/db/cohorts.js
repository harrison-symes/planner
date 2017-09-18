module.exports = {
  getCohorts: (db) => db('cohorts').select('*')
}
