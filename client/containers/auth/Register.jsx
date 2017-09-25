import {connect} from 'react-redux'

import {registerUserRequest, registerErrorAction} from '../../actions/register'

import Register from '../../components/auth/Register'

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (creds, cb) => dispatch(registerUserRequest(creds, cb)),
    error: (message) => dispatch(registerErrorAction(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
