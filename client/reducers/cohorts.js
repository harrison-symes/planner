export default function cohortsReducer (state = [], action) {
  let newState = [...state]
  switch(action.type) {
    case 'RECEIVE_COHORTS':
      return [...action.cohorts]
    default:
      return state
  }
}
