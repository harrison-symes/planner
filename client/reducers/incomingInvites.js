export default function incomingInvitesReducer (state = [], action) {
  let newState = [...state]
  console.log({action});
  switch(action.type){
    case 'RECEIVE_INCOMING_INVITES':
      return [...action.invites]
    default:
      return state
  }
}
