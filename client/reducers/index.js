import {combineReducers} from 'redux'

import auth from './auth'
import cohorts from './cohorts'
import joinedCohorts from './joinedCohorts'

export default combineReducers({
  auth,
  unjoinedCohorts: cohorts,
  joinedCohorts
})
