import {connect} from 'react-redux'

import Messages from '../components/Messages'

const mapStateToProps = ({messages}) => {
  return {
    messages
  }
}

export default connect(mapStateToProps)(Messages)
