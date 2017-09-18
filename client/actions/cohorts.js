import request from '../utils/api'

export function receiveCohortsAction (cohorts) {
  console.log({cohorts});
  return {
    type: 'RECEIVE_COHORTS',
    cohorts
  }
}

export function getCohortsRequest () {
  return (dispatch) => {
    request('get', 'cohorts')
    .then(res => dispatch(receiveCohortsAction(res.body)))
    .catch(err => console.log(err))
  }
}
