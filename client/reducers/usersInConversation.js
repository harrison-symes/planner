export default function usersInConversation (state = [], action) {
  let newState = [...state]
  switch(action.type) {
    case 'RECEIVE_USERS_IN_CONVERSATION':
      return [...action.users]
    default:
      return state
  }
}
