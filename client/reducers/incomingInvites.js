export default function incomingInvitesReducer (state = [], action) {
  let newState = [...state]
  switch(action.type){
    case 'RECEIVE_INCOMING_INVITES':
      return [...action.invites]
    case 'DELETE_INCOMING_INVITE':
      return [...state].filter(invite => invite.invite_id != action.invite_id)
    default:
      return state
  }
}
