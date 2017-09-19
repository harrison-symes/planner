import request from 'superagent'
import {saveUserToken} from '../utils/auth'
import {receiveLogin} from './login'

export function registerErrorAction (errorMessage) {
  console.log({errorMessage});
  return {
    type: 'REGISTER_ERROR',
    errorMessage
  }
}

export function registerUserRequest ({user_name, password}) {
  return (dispatch) => {
    request
      .post('/api/auth/register')
      .send({
        user_name, password
      })
      .end((err, res) => {
        if (err) {
          console.log({err});
          dispatch(registerErrorAction(err.response.body.message))
        }
        else {
          const userInfo = saveUserToken(res.body.token)
          dispatch(receiveLogin(userInfo))
          document.location = "/#/"
        }
      })
  }
}
