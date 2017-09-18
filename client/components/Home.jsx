import React from 'react'

import HomeNav from '../containers/HomeNav'
import FindCohort from '../containers/FindCohort'

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
          <Route path="/find/cohort" component={FindCohort} />
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
