
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', table => {
    table.increments('id')
    table.string('user_name')
    table.string('first_name').defaultTo('john')
    table.string('last_name').defaultTo('doe')
    table.text('about').defaultTo('This user has no bio yet')
    table.string('hash')
    table.boolean('is_private').defaultTo(false)
    table.boolean('is_admin').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
