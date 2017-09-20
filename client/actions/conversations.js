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

export function receiveConversationAction (conversation) {
  return {
    type: 'RECEIVE_CONVERSATION',
    conversation
  }
}

export function postConversationRequest (name) {
  return (dispatch) => {
    request('post', 'conversations', {name})
      .then(res => dispatch(receiveConversationAction(res.body)))
      .catch(err => console.log(err))
  }
}

export function receiveMessagesAction (messages) {
  return {
    type: 'RECEIVE_MESSAGES',
    messages
  }
}

export function getMessagesByConversationRequest (id) {
  return (dispatch) => {
    request('get', `conversations/${id}/messages`)
      .then(res => dispatch(receiveMessagesAction(res.body)))
      .catch(err => console.log(err))
  }
}


export function createMessageAction (message) {
  return {
    type: 'CREATE_MESSAGE',
    message
  }
}

export function postMessageRequest (message, conversation_id) {
  return (dispatch) => {
    request('post', `conversations/${conversation_id}/messages`, message)
    .then(res => dispatch(createMessageAction(res.body)))
    .catch(err => console.log(err))
  }
}
