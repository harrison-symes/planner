import React from 'react'

import HomeNav from '../containers/HomeNav'
import FindCohort from '../containers/FindCohort'
import MyCohorts from '../containers/MyCohorts'
import ViewCohort from '../containers/ViewCohort'
import MyProfile from '../containers/MyProfile'
import MyLearning from '../containers/MyLearning'
import UserProfile from '../containers/UserProfile'
import MyConversations from '../containers/MyConversations'
import Conversation from '../containers/Conversation'

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
      <HomeNav />
      <Router>
        <div>
          <Route exact path="/my/cohorts" component={MyCohorts} />
          <Route exact path="/my/profile" component={MyProfile}/>
          <Route exact path="/my/learning" component={MyLearning}/>
          <Route exact path="/my/conversations" component={MyConversations} />
          <Route exact path="/my/conversations/:id" component={(props) => <Conversation {...props} />} />
          <Route exact path="/my/cohorts/:cohort_id" component={(props) => <ViewCohort id={props.match.params.cohort_id} {...props} />} />
          <Route exact path="/find/cohorts" component={FindCohort} />
          <Route path="/users/:id/profile" component={(props) => <UserProfile {...props} /> } />
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
