
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cohorts', (table) => {
    table.increments('id')
    table.string('name')
    table.text('description')
    table.boolean('is_private').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts')
};
