import {connect} from 'react-redux'
import FindCohort from '../components/FindCohort'

import {getCohortsRequest} from '../actions/cohorts'

const mapStateToProps = ({auth, cohorts}) => {
  return {
    auth,
    cohorts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCohorts: () => dispatch(getCohortsRequest())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FindCohort)
