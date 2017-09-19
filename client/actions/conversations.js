import request from '../utils/api'

export function receiveConversationsAction (conversations) {
  return {
    type: 'RECEIVE_CONVERSATIONS',
    conversations
  }
}

export function getConversationsRequest () {
  return (dispatch) => {
    request('get', 'conversations')
    .then(res => dispatch(receiveConversationsAction(res.body)))
    .catch(err => console.log({err}))
  }
}

export function receiveUsersInConversation (users) {
  return {
    type: 'RECEIVE_USERS_IN_CONVERSATION',
    users
  }
}

export function getUsersInConversationRequest (conversation_id) {
  return (dispatch) => {
    request('get', `conversations/${conversation_id}`)
      .then(res => dispatch(receiveUsersInConversation(res.body)))
      .catch(err => console.log({err}))
  }
}
