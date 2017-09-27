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

export function createLearningSuggestionRequest (suggestion) {
  return (dispatch) => {
    request('get', 'learning/suggestions', suggestion)
      .then(res => dispatch(selectLearningSuggestionAction(res.body)))
      .catch(err => console.log(err))
  }
}
