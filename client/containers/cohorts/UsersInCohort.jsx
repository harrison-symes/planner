import {connect} from 'react-redux'

// import {getUsersInCohortRequest} from '../actions/cohort'

import UsersInCohort from '../../components/cohorts/UsersInCohort'

const mapStateToProps = ({usersInCohort}) => {
  return {
    users: usersInCohort
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUsers: (cohort_id) => dispatch(getUsersInCohortRequest(cohort_id))
//   }
// }

export default connect(mapStateToProps)(UsersInCohort)
