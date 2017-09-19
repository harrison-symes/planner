import {connect} from 'react-redux'

import MyConversations from '../components/MyConversations'

import {getConversationsRequest} from '../actions/conversations'

const mapStateToProps = ({conversations}) => {
  console.log(conversations);
  return {
    conversations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getConversations: () => dispatch(getConversationsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyConversations)
