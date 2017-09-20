import {connect} from 'react-redux'

import InviteUserConversation from '../components/InviteUserConversation'

const mapStateToProps = ({usersToInvite}) => {
  return {
    users: usersToInvite
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inviteUser: (user_id, conversation_id) => console.log({user_id, conversation_id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteUserConversation)
