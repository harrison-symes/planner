import {connect} from 'react-redux'

import IncomingConversationInvites from '../components/IncomingConversationInvites'

import {getIncomingInvitesRequest} from '../actions/conversations'

const mapStateToProps = ({incomingInvites}) => {
  return {
    incomingInvites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInvites: () => dispatch(getIncomingInvitesRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomingConversationInvites)
