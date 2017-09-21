
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conversationInvites').del()
    .then(function () {
      // Inserts seed entries
      return knex('conversationInvites').insert([
        {id: 1, from_user_id: 1, to_user_id: 3, conversation_id: 2}
      ]);
    });
};
