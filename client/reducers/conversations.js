export default function conversationsReducer (state = [], action) {
  let newState = [...state]
  switch(action.type) {
    case 'RECEIVE_CONVERSATIONS':
      return [...action.conversations]
    default:
      return state
  }
}
