import request from '../utils/api'

export function recieveUserAction (user) {
  console.log(user);
  return {
    type: 'RECEIVE_USER_IN_COHORT',
    user
  }
}

export function getUserRequest (user_id) {
  return (dispatch) => {
    console.log("making request", user_id);
    request('get', `users/${user_id}`)
      .then(res => dispatch(recieveUserAction(res.body)))
      .catch(err => console.log(err))
  }
}
