import {connect} from 'react-redux'

import InviteUserConversation from '../components/InviteUserConversation'

import {getUsersToInviteRequest} from '../actions/users'

const mapStateToProps = ({usersToInvite}) => {
  return {
    users: usersToInvite
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersToInvite: (conversation_id) => dispatch(getUsersToInviteRequest(conversation_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteUserConversation)
