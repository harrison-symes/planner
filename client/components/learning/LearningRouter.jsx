import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import LearningNav from '../../containers/learning/LearningNav'
import MyLearning from '../../containers/learning/MyLearning'
import CreateLearning from '../../containers/learning/CreateLearning'

export default function LearningRouter (props) {
  return (
    <Router className="container">
      <div>
        <h1 className="title is-1">My Learning Objectives</h1>
        <hr />
        <LearningNav />
        <Route exact path="/my/learning" component={MyLearning} />
        <Route path="/my/learning/new" component={CreateLearning} />
      </div>
    </Router>
  )
}
