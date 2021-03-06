import request from '../utils/api'

export function recieveUserAction (user) {
  return {
    type: 'RECEIVE_USER_IN_COHORT',
    user
  }
}

export function getUserRequest (user_id) {
  return (dispatch) => {
    request('get', `users/${user_id}`)
      .then(res => dispatch(recieveUserAction(res.body)))
      .catch(err => console.log(err))
  }
}

export function receiveUsersToInviteAction (users) {
  return {
    type: 'RECEIVE_USERS_TO_INVITE',
    users
  }
}

export function getUsersToInviteRequest (conversation_id) {
  return (dispatch) => {
    request('get', `users/inviteable/${conversation_id}`)
      .then(res => dispatch(receiveUsersToInviteAction(res.body)))
      .catch(err => console.log(err))
  }
}
