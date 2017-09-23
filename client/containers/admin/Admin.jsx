import {connect} from 'react-redux'

import Admin from '../../components/admin/Admin'

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Admin)
