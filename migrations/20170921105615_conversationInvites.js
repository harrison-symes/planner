
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('conversationInvites', (table) => {
    table.increments('id')
    table.integer('to_user_id')
    table.integer('from_user_id')
    table.integer('conversation_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('conversationInvites')
};
