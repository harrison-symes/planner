import {connect} from 'react-redux'

import InviteUserConversation from '../components/InviteUserConversation'

import {postOutgoingInviteRequest, getOutgoingInvitesRequest} from '../actions/conversations'
import {getUsersToInviteRequest} from '../actions/users'

const mapStateToProps = ({usersToInvite, outgoingInvites}) => {
  console.log({outgoingInvites});
  return {
    users: usersToInvite.map(user => {
      if (outgoingInvites.find(outgoing => outgoing.user_id == user.user_id)) user.is_invited = true
      else user.is_invited = false
      return user
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersToInvite: (conversation_id) => dispatch(getUsersToInviteRequest(conversation_id)),
    sendInvite: (user_id, conversation_id) => dispatch(postOutgoingInviteRequest(user_id, conversation_id)),
    getInvites: (conversation_id) => dispatch(getOutgoingInvitesRequest(conversation_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteUserConversation)
