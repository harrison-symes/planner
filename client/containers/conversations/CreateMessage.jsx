import {connect} from 'react-redux'

import CreateMessage from '../../components/conversations/CreateMessage'

import {postMessageRequest} from '../../actions/conversations'

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message, id) => dispatch(postMessageRequest(message, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMessage)
