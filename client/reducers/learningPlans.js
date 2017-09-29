export default function (state = [], action) {
  switch(action.type) {
    case 'RECEIVE_LEARNING_PLANS':
      return [...action.learningPlans]
    default:
      return state
  }
}
