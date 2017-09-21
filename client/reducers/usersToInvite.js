export default function usersToInviteReducer (state = [], action) {
  let newState = [...state]
  switch(action.type) {
    case 'RECEIVE_USERS_TO_INVITE':
      return [...action.users]
    default:
      return state
  }
}
