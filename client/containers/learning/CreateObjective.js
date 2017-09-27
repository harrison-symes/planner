import {connect} from 'react-redux'

import CreateObjective from '../../components/learning/CreateObjective'

import {createLearningObjectiveRequest} from '../../actions/learningPlan'

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createObjective: (objective) => dispatch(createLearningObjectiveRequest(objective))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateObjective)
