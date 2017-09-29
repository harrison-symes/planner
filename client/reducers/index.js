import {combineReducers} from 'redux'

import auth from './auth'
import cohorts from './cohorts'
import joinedCohorts from './joinedCohorts'
import usersInCohort from './usersInCohort'
import conversations from './conversations'
import usersInConversation from './usersInConversation'
import messagesInConversation from './messagesInConversation'
import usersToInvite from './usersToInvite'
import outgoingInvites from './outgoingInvites'
import incomingInvites from './incomingInvites'
import loading from './loading'
import learningSuggestions from './learningSuggestions'
import selectedLearningSuggestions from './selectedLearningSuggestions'
import learningPlans from './learningPlans'

export default combineReducers({
  auth,
  unjoinedCohorts: cohorts,
  joinedCohorts,
  usersInCohort,
  conversations,
  usersInConversation,
  messages: messagesInConversation,
  usersToInvite,
  outgoingInvites,
  incomingInvites,
  loading,
  learningSuggestions,
  selectedLearningSuggestions,
  learningPlans
})
