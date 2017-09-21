export default function outgoingInvitesReducer (state=[], action) {
  let newState = [...state]
  switch(action.type) {
    case 'RECEIVE_OUTGOING_INVITES':
      return [...action.invites]
    case 'RECEIVE_OUTGOING_INVITE':
      return [...state, action.invite ]
    default:
      return state
  }
}
