
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('usersInConversations', (table) => {
    table.integer('conversation_id')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('usersInConversations')
};
