import request from '../utils/api'

export function receiveUsersInCohortAction (users) {
  console.log({users});
  return {
    type: 'RECEIVE_USERS_IN_COHORT',
    users
  }
}

export function getUsersInCohortRequest (cohort_id) {
  return (dispatch) => {
    request('get', `cohorts/${cohort_id}/users`)
      .then(res => dispatch(receiveUsersInCohortAction(res.body)))
      .catch(err => console.log(err))
  }
}
