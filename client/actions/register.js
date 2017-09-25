import request from 'superagent'
import {saveUserToken} from '../utils/auth'
import {receiveLogin} from './login'

import {loadingOffAction, loadingOnAction} from './loading'

export function registerErrorAction (errorMessage) {
  return {
    type: 'REGISTER_ERROR',
    errorMessage
  }
}

export function registerUserRequest ({user_name, password, first_name, last_name, about}, cb) {
  return (dispatch) => {
    dispatch(loadingOnAction())
    request
      .post('/api/auth/register')
      .send({
        user_name, password,
        first_name, last_name,
        about
      })
      .end((err, res) => {
        dispatch(loadingOffAction())
        if (err) {
          cb(err.response.body.message)
        }
        else {
          const userInfo = saveUserToken(res.body.token)
          cb(null)
          dispatch(receiveLogin(userInfo))
          document.location = "/#/"
        }
      })
  }
}
