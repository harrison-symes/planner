import request from 'superagent'
import {saveUserToken} from '../utils/auth'
import {receiveLogin} from './login'

export function registerErrorAction (errorMessage) {
  return {
    type: 'REGISTER_ERROR',
    errorMessage
  }
}

export function registerUserRequest ({user_name, password, first_name, last_name, about}, cb) {
  return (dispatch) => {
    request
      .post('/api/auth/register')
      .send({
        user_name, password,
        first_name, last_name,
        about
      })
      .end((err, res) => {
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
