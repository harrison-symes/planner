
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', table => {
    table.increments('id')
    table.string('user_name')
    table.string('hash')
    table.boolean('is_admin').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
