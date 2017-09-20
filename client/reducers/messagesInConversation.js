export default function messagesReducer (state = [], action) {
  let newState = [...state]
  console.log({action});
  switch(action.type) {
    case 'RECEIVE_MESSAGES':
      return [...action.messages]
    default:
      return state
  }
}
