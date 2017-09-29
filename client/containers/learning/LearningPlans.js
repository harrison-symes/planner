import {connect} from 'react-redux'

import LearningPlans from '../../components/learning/LearningPlans'

const mapStateToProps = ({learningPlans}) => {
  return {
    learningPlans
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearningPlans)
