export default function usersInCohortsReducer (state = [], action) {
  let newState = [...state]
  switch(action.type) {
    case 'RECEIVE_USERS_IN_COHORT':
      return [...action.users]
    case 'RECEIVE_USER_IN_COHORT':
      return [...state, action.user]
    default:
      return state
  }
}
