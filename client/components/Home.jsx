import React from 'react'

import HomeNav from '../containers/HomeNav'
import FindCohort from '../containers/FindCohort'
import MyCohorts from '../containers/MyCohorts'
import ViewCohort from '../containers/ViewCohort'

import {HashRouter as Router, Route} from 'react-router-dom'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    //load cohorts that you are a part of
  }
  render () {
    return <div>
      <h1>This is the home page :)</h1>
      <HomeNav />
      <Router>
        <div>
          <Route exact path="/cohorts" component={MyCohorts} />
          <Route exact path="/cohorts/new/find" component={FindCohort} />
          <Route exact path="/cohorts/:cohort_id" component={(props) => <ViewCohort id={props.match.params.cohort_id} />} />
        </div>
      </Router>
    </div>
  }
}


// export default function Home ({auth}) {
//   return (
//     <div>
//       <h1>This is the home page :)</h1>
//
//     </div>
//   )
// }
