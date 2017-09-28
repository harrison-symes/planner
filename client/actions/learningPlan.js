import request from '../utils/api'

export function selectLearningSuggestionAction (suggestion) {
  console.log({suggestion});
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
