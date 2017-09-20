import {connect} from 'react-redux'

import MyConversations from '../components/MyConversations'

import {getConversationsRequest, postConversationRequest} from '../actions/conversations'

const mapStateToProps = ({conversations}) => {
  return {
    conversations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getConversations: () => dispatch(getConversationsRequest()),
    createConversation: (name) => dispatch(postConversationRequest(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyConversations)
