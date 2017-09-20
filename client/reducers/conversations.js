export default function conversationsReducer (state = [], action) {
  let newState = [...state]
  switch(action.type) {
    case 'RECEIVE_CONVERSATIONS':
      return [...action.conversations]
    case 'RECEIVE_CONVERSATION':
    console.log({action});
      return [...state, action.conversation]
    default:
      return state
  }
}
