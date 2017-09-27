export default function (state = [{title: 'Stop Procrastinating'}, {title: 'Use Postgres'}], action) {
  switch(action.type) {
    case 'SELECT_LEARNING_SUGGESTION':
      return [...state].filter(c => c != action.suggestion)
    case 'CANCEL_LEARNING_SUGGESTION':
      return [...state, action.suggestion]
    default:
      return state
  }
}
