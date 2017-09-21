import {connect} from 'react-redux'

import Admin from '../components/Admin'

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Admin)
