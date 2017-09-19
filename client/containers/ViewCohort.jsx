import {connect} from 'react-redux'

import {getUsersInCohortRequest} from '../actions/cohort'

import ViewCohort from '../components/ViewCohort'

const mapStateToProps = ({joinedCohorts}, props) => {
  return {
    cohort: joinedCohorts.find(cohort => cohort.id==props.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (cohort_id) => dispatch(getUsersInCohortRequest(cohort_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCohort)
