
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('usersInCohorts', (table) => {
    table.integer('user_id')
    table.integer('cohort_id')
    table.boolean('is_admin').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('usersInCohorts')
};
