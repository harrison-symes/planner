import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import MyCohorts from '../../containers/cohorts/MyCohorts'
import ViewCohort from '../../containers/cohorts/ViewCohort'
import FindCohort from '../../containers/cohorts/FindCohort'

export default function CohortRouter (props) {
  return (
    <Router>
      <div>
        <Route exact path="/my/cohorts" component={MyCohorts} />
        <Route exact path="/my/cohorts/find/new" component={FindCohort} />
        <Route exact path="/my/cohorts/:cohort_id" component={(props) => <ViewCohort id={props.match.params.cohort_id} {...props} />} />
      </div>
    </Router>
  )
}
