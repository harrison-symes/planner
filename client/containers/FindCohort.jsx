import {connect} from 'react-redux'
import FindCohort from '../components/FindCohort'

import {getUnjoinedCohortsRequest} from '../actions/cohorts'

const mapStateToProps = ({auth, unjoinedCohorts}) => {
  return {
    auth,
    cohorts: unjoinedCohorts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCohorts: () => dispatch(getUnjoinedCohortsRequest())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FindCohort)
