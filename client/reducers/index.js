import {combineReducers} from 'redux'

import auth from './auth'
import cohorts from './cohorts'
import joinedCohorts from './joinedCohorts'
import usersInCohort from './usersInCohort'

export default combineReducers({
  auth,
  unjoinedCohorts: cohorts,
  joinedCohorts,
  usersInCohort
})
