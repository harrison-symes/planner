import React from 'react'

import HomeNav from '../containers/HomeNav'
import CohortRouter from '../containers/cohorts/CohortRouter'
import MyProfile from '../containers/MyProfile'
import LearningRouter from '../containers/learning/LearningRouter'
import UserProfile from '../containers/UserProfile'
import MyConversations from '../containers/conversations/MyConversations'
import Conversation from '../containers/conversations/Conversation'
import Admin from '../containers/admin/Admin'
import Welcome from '../components/Welcome'

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
    let {user} = this.props.auth
    return <div>
      <HomeNav />
      <Router>
        <div>
          <Route exact path="/" component={Welcome} />
          <Route path="/my/cohorts" component={CohortRouter} />
          <Route exact path="/my/profile" component={MyProfile}/>
          <Route path={"/my/learning"} component={LearningRouter}/>
          {user && user.is_admin == true && <Route path="/my/admin" component={Admin}/>}
          <Route exact path="/my/conversations" component={MyConversations} />
          <Route exact path="/my/conversations/:id" component={(props) => <Conversation {...props} />} />
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
