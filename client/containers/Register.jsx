import {connect} from 'react-redux'

import {registerUserRequest, registerErrorAction} from '../actions/register'

import Register from '../components/Register'

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (creds) => dispatch(registerUserRequest(creds)),
    error: (message) => dispatch(registerErrorAction(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
