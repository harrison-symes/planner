import request from '../utils/api'

export function receiveCohortsAction (cohorts) {
  console.log({cohorts});
  return {
    type: 'RECEIVE_COHORTS',
    cohorts
  }
}

export function receiveUnjoinedCohortsAction (cohorts) {
  return {
    type: 'RECEIVE_UNJOINED_COHORTS',
    cohorts
  }
}

export function joinCohortAction (cohort) {
  console.log("joined", {cohort});
  return {
    type: 'JOIN_COHORT',
    cohort
  }
}

export function getCohortsRequest () {
  return (dispatch) => {
    request('get', 'cohorts')
      .then(res => dispatch(receiveCohortsAction(res.body)))
      .catch(err => console.log(err))
  }
}

export function getUnjoinedCohortsRequest () {
  return (dispatch) => {
    request('get', 'cohorts/find')
    .then(res => dispatch(receiveUnjoinedCohortsAction(res.body)))
    .catch(err => console.log({err}))
  }
}

export function joinCohortRequest (cohort_id) {
  return (dispatch) => {
    request('post', `cohorts/${cohort_id}`)
      .then(res => dispatch(joinCohortAction(res.body)))
      .catch(err => console.log({err}))
  }
}
