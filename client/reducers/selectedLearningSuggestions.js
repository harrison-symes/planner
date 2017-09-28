export default function (state = [], action) {
  switch(action.type) {
    case 'RECEIVE_LEARNING_SUGGESTIONS':
      return []
    case 'SELECT_LEARNING_SUGGESTION':
      return [...state, action.suggestion]
    case 'CANCEL_LEARNING_SUGGESTION':
      return [...state].filter(c => c != action.suggestion)
    default:
      return state
  }
}
