import {combineReducers} from 'redux'

import auth from './auth'
import cohorts from './cohorts'

export default combineReducers({
  auth,
  cohorts
})
