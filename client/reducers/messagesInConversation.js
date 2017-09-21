export default function messagesReducer (state = [], action) {
  let newState = [...state]
  switch(action.type) {
    case 'RECEIVE_MESSAGES':
      return [...action.messages]
    case 'CREATE_MESSAGE':
      return [...state, action.message]
    default:
      return state
  }
}
