import request from '../utils/api'
import { saveUserToken } from '../utils/auth'

import {loadingOnAction, loadingOffAction} from './loading'

function requestLogin () {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false
  }
}

export function receiveLogin (user) {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

function loginError (message) {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser (creds) {
  return dispatch => {
    dispatch(requestLogin(creds))
    dispatch(loadingOnAction())
    return request('post', 'auth/login', creds)
      .then((response) => {
        dispatch(loadingOffAction())
        if (response.status === 403) {
          alert("Try Again!")
          dispatch(loginError(response.body.message))
          return Promise.reject(response.body.message)
        } else {
          const userInfo = saveUserToken(response.body.token)
          dispatch(receiveLogin(userInfo))
          document.location = "/#/"
        }
      }).catch(err => alert("Try Again!")

      )
  }
}
