import {connect} from 'react-redux'

import FindCohortSingle from '../components/FindCohortSingle'
import {joinCohortRequest} from '../actions/cohorts'

const mapDispatchToProps = (dispatch) => {
  return {
    join: (cohort_id) => dispatch(joinCohortRequest(cohort_id))
  }
}

export default connect (null, mapDispatchToProps)(FindCohortSingle)
