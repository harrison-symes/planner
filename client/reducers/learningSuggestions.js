export default function (state = [], action) {
  switch(action.type) {
    case 'RECEIVE_LEARNING_SUGGESTIONS':
      return [...action.suggestions]
    case 'SELECT_LEARNING_SUGGESTION':
      return [...state].filter(c => c != action.suggestion)
    case 'CANCEL_LEARNING_SUGGESTION':
      return [...state, action.suggestion]
    default:
      return state
  }
}
