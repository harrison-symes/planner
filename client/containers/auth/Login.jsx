import {connect} from 'react-redux'

import {loginUser} from '../../actions/login'

import Login from '../../components/auth/Login'


const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (creds) => dispatch(loginUser(creds))
  }
}

export default connect(null, mapDispatchToProps)(Login)
