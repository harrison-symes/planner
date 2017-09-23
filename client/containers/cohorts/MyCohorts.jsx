import {connect} from 'react-redux'

import MyCohorts from '../../components/cohorts/MyCohorts'

import {getCohortsRequest} from '../../actions/cohorts'

const mapStateToProps = ({joinedCohorts}) => {
  return {
    cohorts: joinedCohorts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCohorts: () => dispatch(getCohortsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCohorts)
