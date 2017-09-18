import React from 'react'
import {connect} from 'react-redux'

import {registerUserRequest} from '../actions/register'

import Register from '../components/Register'

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (creds) => dispatch(registerUserRequest(creds))
  }
}

export default connect(null, mapDispatchToProps)(Register)
