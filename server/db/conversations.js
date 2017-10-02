const getMessageById = (db, id) => db('messages') .join('conversations',
'messages.conversation_id', 'conversations.id') .join('users',
'messages.user_id', 'users.id') .where('messages.id', id)
.select('conversations.*', 'messages.*', 'users.user_name', 'users.first_name')
.first()

const getOutgoingInviteById = (db, invite_id) => db
.select('users.first_name', 'users.user_name', 'users.id as user_id')
.from('users')
.join('conversationInvites', 'users.id', 'conversationInvites.to_user_id')
.select("conversationInvites.*")
.where('conversationInvites.id', invite_id)
.first()

const addUserToConversation = (db, conversation_id, user_id) => db('usersInConversations')
  .insert({conversation_id, user_id},'id')

const getConversationById = (db, conversation_id) => db('conversations')
  .where('id', conversation_id)
  .first()

const deleteInviteById = (db, invite_id) => db('conversationInvites')
  .where('conversationInvites.id', invite_id)
  .del()

module.exports = {
  getMessageById,
  getOutgoingInviteById,
  addUserToConversation,
  getConversationById,
  deleteInviteById,
  getConversations: (db, user_id) => db('usersInConversations')
    .join('conversations', 'usersInConversations.conversation_id', 'conversations.id')
    .where('user_id', user_id),
  getUsersInConversation: (db, conversation_id) => db
    .select('first_name', 'last_name', 'user_name', 'id as user_id')
    .from('users')
    .join('usersInConversations', 'users.id', 'usersInConversations.user_id')
    .where('usersInConversations.conversation_id', conversation_id),
  createConversation: (db, name) => db('conversations')
    .insert({name}, 'id'),
  getMessagesByConversation: (db, conversation_id) => db('messages')
    .join('conversations', 'messages.conversation_id', 'conversations.id')
    .join('users', 'messages.user_id', 'users.id')
    .where('conversations.id', conversation_id)
    .select('conversations.*', 'messages.*', 'users.user_name', 'users.first_name'),
  createMessage: (db, message) => db('messages')
    .insert(message, 'id')
    .then(message_id => getMessageById(db, message_id[0])),
  createInvite: (db, invite) => db('conversationInvites')
    .insert(invite, 'id')
    .then(invite_id => getOutgoingInviteById(db, invite_id[0]) ),
  getOutgoingInvites: (db, conversation_id) => db
    .select('users.first_name', 'users.user_name', 'users.id as user_id')
    .from('users')
    .join('conversationInvites', 'users.id', 'conversationInvites.to_user_id')
    .select("conversationInvites.*")
    .where('conversation_id', conversation_id),
  getIncomingInvites: (db, user_id) => db
    .select('users.first_name', 'users.user_name', 'users.id as user_id')
    .from('users')
    .join('conversationInvites', 'users.id', 'conversationInvites.from_user_id')
    .join('conversations', 'conversationInvites.conversation_id', 'conversations.id')
    .select('conversationInvites.*', 'conversations.*', 'conversationInvites.id as conversation_id', 'conversationInvites.id as invite_id')
    .where('conversationInvites.to_user_id', user_id),
  acceptConversationInvite: (db, invite_id) => getOutgoingInviteById(db, invite_id)
    .then(({user_id, conversation_id}) => {
      return addUserToConversation(db, conversation_id, user_id)
      .then(() => deleteInviteById(db, invite_id))
      .then(() => getConversationById(db, conversation_id))
    })
}
