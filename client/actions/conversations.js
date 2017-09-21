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

export function receiveOutgoingInvitesAction(invites) {
  console.log({invites});
  return {
    type: 'RECEIVE_OUTGOING_INVITES',
    invites
  }
}

export function getOutgoingInvitesRequest (conversation_id) {
  return (dispatch) => {
    request('get', `conversations/${conversation_id}/invites`)
      .then(res => dispatch(receiveOutgoingInvitesAction(res.body)))
      .catch(err => console.log(err))
  }
}

export function receiveOutgoingInviteAction (invite) {
  return {
    type: 'RECEIVE_OUTGOING_INVITE',
    invite
  }
}

export function postOutgoingInviteRequest (user_id, conversation_id) {
  return (dispatch) => {
    request('post', `conversations/${conversation_id}/invites`,  {user_id})
      .then(res => dispatch(receiveOutgoingInviteAction(res.body)))
      .catch(err => console.log(err))
  }
}

export function receiveIncomingInvitesAction (invites) {
  console.log({invites});
  return {
    type: 'RECEIVE_INCOMING_INVITES',
    invites
  }
}

export function getIncomingInvitesRequest () {
  return (dispatch) => {
    console.log("getting invites");
    request('get', 'conversations/invites')
    .then(res => dispatch(receiveIncomingInvitesAction(res.body)))
    .catch(err => console.log(err))
  }
}

export function deleteIncomingInviteAction (invite_id) {
  return {
    type: 'DELETE_INCOMING_INVITE',
    invite_id
  }
}

export function acceptIncomingInviteRequest (invite_id) {
  return (dispatch) => {
    console.log({invite_id});
    request('post', `conversations/invites/${invite_id}`)
      .then(res => {
        dispatch(deleteIncomingInviteAction(invite_id))
        dispatch(receiveConversationAction(res.body))
      })
      .catch(err => console.log({err}))
  }
}
