import {connect} from 'react-redux'

import CreateObjective from '../../components/learning/CreateObjective'

import {postLearningObjectiveRequest} from '../../actions/learningPlan'

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createObjective: (objective, cb) => dispatch(postLearningObjectiveRequest(objective, cb))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateObjective)
