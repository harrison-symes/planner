import {connect} from 'react-redux'

import Conversation from '../components/Conversation'

import {getUsersInConversationRequest} from '../actions/conversations'

const mapStateToProps = ({conversations, usersInConversation}, {match}) => {
  console.log({usersInConversation});
  return {
    conversation: conversations.find(c => match.params.id == c.id),
    users: usersInConversation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (conversation_id) => dispatch(getUsersInConversationRequest(conversation_id))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Conversation)
