export default function joinedCohortsRedcuer (state = [], action) {
  let newState = [...state]
  switch(action.type) {
    case 'JOIN_COHORT':
      return [...state, action.cohort]
    default:
      return state
  }
}
