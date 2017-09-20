
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('usersInConversations').del()
    .then(function () {
      // Inserts seed entries
      return knex('usersInConversations').insert([
        {conversation_id: 1, user_id: 1},
        {conversation_id: 1, user_id: 2},
        {conversation_id: 2, user_id: 1},
        {conversation_id: 2, user_id: 2}
      ]);
    });
};
