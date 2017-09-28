import request from '../utils/api'

export function selectLearningSuggestionAction (suggestion) {
  return {
    type: 'SELECT_LEARNING_SUGGESTION',
    suggestion
  }
}
export function cancelLearningSuggestionAction (suggestion) {
  return {
    type: 'CANCEL_LEARNING_SUGGESTION',
    suggestion
  }
}

export function receiveLearningSuggestionsAction (suggestions) {
  return {
    type: 'RECEIVE_LEARNING_SUGGESTIONS',
    suggestions
  }
}

export function getLearningSuggestionsRequest () {
  return (dispatch) => {
    request('get', 'learning/suggestions')
      .then(res => dispatch(receiveLearningSuggestionsAction(res.body)))
      .catch(err => console.log(err))
  }
}

export function postLearningObjectiveRequest (objective, cb) {
  return (dispatch) => {
    request('post', 'learning/objectives', objective)
      .then(res => {
        dispatch(selectLearningSuggestionAction(res.body))
        cb(null)
      })
      .catch(err => {
        console.log(err)
        cb(err)
      })
  }
}
export function postLearningPlanRequest (plan) {
  return (dispatch) => {
    request('post', 'learning', plan)
      .then(res => {
        console.log({res});
        // dispatch(selectLearningSuggestionAction(res.body))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
