import {connect} from 'react-redux'

import FindCohortSingle from '../components/FindCohortSingle'

const mapDispatchToProps = (dispatch) => {
  return {
    join: (cohort_id) => console.log(cohort_id)
  }
}

export default connect (null, mapDispatchToProps)(FindCohortSingle)
