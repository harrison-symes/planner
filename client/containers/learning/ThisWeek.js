import {connect} from 'react-redux'
import {isThisWeek} from '../../utils/moment'
import ThisWeek from '../../components/learning/ThisWeek'

const mapStateToProps = ({learningPlans}) => {
  return {
    learningPlan: learningPlans.find(p => isThisWeek(p.created_at))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThisWeek)
