import {combineReducers} from 'redux'

import auth from './auth'
import cohorts from './cohorts'
import joinedCohorts from './joinedCohorts'
import usersInCohort from './usersInCohort'
import conversations from './conversations'
import usersInConversation from './usersInConversation'
import messagesInConversation from './messagesInConversation'

export default combineReducers({
  auth,
  unjoinedCohorts: cohorts,
  joinedCohorts,
  usersInCohort,
  conversations,
  usersInConversation,
  messages: messagesInConversation
})
