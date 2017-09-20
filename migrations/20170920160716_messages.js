
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('messages', (table) => {
    table.increments('id')
    table.string('content')
    table.integer('user_id')
    table.integer('conversation_id')
    table.timestamp('create_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('messages')
};
