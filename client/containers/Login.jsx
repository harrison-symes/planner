import React from 'react'
import {connect} from 'react-redux'

import Login from '../components/Login'
import {loginUser} from '../actions/login'


const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (creds) => dispatch(loginUser(creds))
  }
}

export default connect(null, mapDispatchToProps)(Login)
