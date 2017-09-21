import {connect} from 'react-redux'

import Conversation from '../components/Conversation'

import {getUsersInConversationRequest, getMessagesByConversationRequest} from '../actions/conversations'
import {getUsersToInviteRequest} from '../actions/users'

const mapStateToProps = ({conversations, usersInConversation}, {match}) => {
  return {
    conversation: conversations.find(c => match.params.id == c.id),
    users: usersInConversation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (conversation_id) => dispatch(getUsersInConversationRequest(conversation_id)),
    getMessages: (conversation_id) => dispatch(getMessagesByConversationRequest(conversation_id)),
    getUsersToInvite: (conversation_id) => dispatch(getUsersToInviteRequest(conversation_id))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Conversation)
