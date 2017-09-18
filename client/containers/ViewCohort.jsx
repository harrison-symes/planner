import {connect} from 'react-redux'

import ViewCohort from '../components/ViewCohort'

const mapStateToProps = ({joinedCohorts}, {id}) => {
  let cohort = joinedCohorts.find(cohort => cohort.id==id)
  if (!cohort) {
    document.location = '/#/cohorts'
    return
  }
  return {
    cohort
  }
}

export default connect(mapStateToProps)(ViewCohort)
