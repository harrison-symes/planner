
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('usersInCohorts', (table) => {
    table.integer('user_id')
    table.integer('cohort_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('usersInCohorts')
};
