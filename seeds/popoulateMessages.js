
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, user_id: 1, conversation_id: 1, content: 'hello josh'},
        {id: 2, user_id: 1, conversation_id: 2, content: 'hello lunch'}
      ]);
    });
};
