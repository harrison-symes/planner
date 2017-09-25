import {connect} from 'react-redux'

import MessageSingle from '../../components/conversations/MessageSingle'

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps)(MessageSingle)
