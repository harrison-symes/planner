import {connect} from 'react-redux'

import MyCohorts from '../components/MyCohorts'

import {getCohortsRequest} from '../actions/cohorts'

const mapStateToProps = ({joinedCohorts}) => {
  return {
    cohorts: joinedCohorts
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch map");
  return {
    getCohorts: () => dispatch(getCohortsRequest())
  }
}

export default connect(mapStateToProps)(MyCohorts)
