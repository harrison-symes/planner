import {connect} from 'react-redux'

import ViewCohort from '../components/ViewCohort'

const mapStateToProps = ({joinedCohorts}, {id}) => {
  return {
    cohort: joinedCohorts.find(cohort => cohort.id==id)
  }
}

export default connect(mapStateToProps)(ViewCohort)
