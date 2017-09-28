import {connect} from 'react-redux'

import CreateLearning from '../../components/learning/CreateLearning'

import {getLearningSuggestionsRequest} from '../../actions/learningPlan'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSuggestions: () => dispatch(getLearningSuggestionsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLearning)
