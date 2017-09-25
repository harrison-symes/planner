import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from '../containers/auth/Login'
import HomeNav from '../containers/HomeNav'
import Register from '../containers/auth/Register'

import CohortRouter from '../containers/cohorts/CohortRouter'

import MyProfile from '../containers/profiles/MyProfile'
import UserProfile from '../containers/profiles/UserProfile'

import LearningRouter from '../containers/learning/LearningRouter'

import MyConversations from '../containers/conversations/MyConversations'
import Conversation from '../containers/conversations/Conversation'

import Admin from '../containers/admin/Admin'

import Welcome from '../components/Welcome'


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
    let {auth} = this.props
    let {user} = auth
    return <Router>
      <div className="hero is-info is-bold is-fullheight">
        <div className="hero-head">
          <HomeNav />
        </div>
        <div className="hero-body has-text-centered">
          <div className="container">
            <Route path="/login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route exact path="/" component={(props) => <Welcome auth={auth} {...props} />} />
            <Route path="/my/cohorts" component={CohortRouter} />
            <Route exact path="/my/profile" component={MyProfile}/>
            <Route path={"/my/learning"} component={LearningRouter}/>
            {user && user.is_admin == true && <Route path="/my/admin" component={Admin}/>}
            <Route exact path="/my/conversations" component={MyConversations} />
            <Route exact path="/my/conversations/:id" component={(props) => <Conversation {...props} />} />
            <Route path="/users/:id/profile" component={(props) => <UserProfile {...props} /> } />
          </div>
        </div>
        <div className="hero-foot">
          Hello
        </div>
    </div>
  </Router>
  }
}
