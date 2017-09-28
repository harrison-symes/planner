import {connect} from 'react-redux'

import MyLearning from '../../components/learning/MyLearning'

import {getLearningPlansRequest} from '../../actions/learningPlan'

const mapDispatchToProps = (dispatch) => {
  return {
    getLearningPlans: () => dispatch(getLearningPlansRequest())
  }
}

export default connect(null, mapDispatchToProps)(MyLearning)
