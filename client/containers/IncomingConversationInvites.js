import {connect} from 'react-redux'

import IncomingConversationInvites from '../components/IncomingConversationInvites'

import {getIncomingInvitesRequest, acceptIncomingInviteRequest} from '../actions/conversations'

const mapStateToProps = ({incomingInvites}) => {
  return {
    incomingInvites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInvites: () => dispatch(getIncomingInvitesRequest()),
    acceptInvite: (invite_id) => dispatch(acceptIncomingInviteRequest(invite_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomingConversationInvites)
