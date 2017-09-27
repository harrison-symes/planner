export default function (state = [{title: 'Hello'}], action) {
  switch(action.type) {
    case 'SELECT_LEARNING_SUGGESTION':
      return [...state, action.suggestion]
    case 'CANCEL_LEARNING_SUGGESTION':
      return [...state].filter(c => c != action.suggestion)
    default:
      return state
  }
}