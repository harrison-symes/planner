import {connect} from 'react-redux'

import {getUsersInCohortRequest} from '../actions/cohort'

import ViewCohort from '../components/ViewCohort'

const mapStateToProps = ({joinedCohorts}, props) => {
  let cohort = joinedCohorts.find(cohort => cohort.id==props.id)
  console.log({props});
  return {
    cohort
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (cohort_id) => dispatch(getUsersInCohortRequest(cohort_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCohort)
