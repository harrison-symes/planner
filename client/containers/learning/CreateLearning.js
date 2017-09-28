import {connect} from 'react-redux'

import CreateLearning from '../../components/learning/CreateLearning'

import {getLearningSuggestionsRequest, postLearningPlanRequest} from '../../actions/learningPlan'

const mapStateToProps = ({selectedLearningSuggestions}) => {
  return {
    objectives: selectedLearningSuggestions
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getSuggestions: () => dispatch(getLearningSuggestionsRequest()),
    submitPlan: (plan) => dispatch(postLearningPlanRequest(plan))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLearning)
