module.exports = {
  getConversations: (db, user_id) => db('usersInConversations')
    .join('conversations', 'usersInConversations.conversation_id', 'conversations.id')
    .where('user_id', user_id),
  getUsersInConversation: (db, conversation_id) => db
    .select('first_name', 'last_name', 'user_name', 'id as user_id')
    .from('users')
    .join('usersInConversations', 'users.id', 'usersInConversations.user_id')
    .where('usersInConversations.conversation_id', conversation_id),
  addUserToConversation: (db, conversation_id, user_id) => db('usersInConversations')
    .insert({conversation_id, user_id}),
  createConversation: (db, name) => db('conversations')
    .insert({name}, 'id'),
  getConversationById: (db, conversation_id) => db('conversations')
    .where('id', conversation_id)
    .first()
}
