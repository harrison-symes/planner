export default function cohortsReducer (state = [], action) {
  let newState = [...state]
  switch(action.type) {
    case 'RECEIVE_UNJOINED_COHORTS':
      return [...action.cohorts]
    case 'JOIN_COHORT':
      let joined = newState.find(({id}) => id== action.cohort.id)
      joined.is_joined = true
      newState[newState.indexOf(joined)] = {...joined}
      return newState
    default:
      return state
  }
}
