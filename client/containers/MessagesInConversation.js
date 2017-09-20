import {connect} from 'react-redux'

import Messages from '../components/Messages'

const mapStateToProps = ({messages}) => {
  console.log({messages});
  return {
    messages
  }
}

export default connect(mapStateToProps)(Messages)
