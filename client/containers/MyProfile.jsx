import {connect} from 'react-redux'

import MyProfile from '../components/MyProfile'

import {getCohortsRequest} from '../actions/cohorts'

const mapStateToProps = ({auth, joinedCohorts}) => {
  return {
    auth,
    cohorts: joinedCohorts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCohorts: () => dispatch(getCohortsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)
