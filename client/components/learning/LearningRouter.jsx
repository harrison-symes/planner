import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import LearningNav from '../../containers/learning/LearningNav'
import MyLearning from '../../containers/learning/MyLearning'

export default function LearningRouter (props) {
  return (
    <Router>
      <div>
        <LearningNav />
        <Route exact path="/my/learning" component={MyLearning} />
        <Route path="/my/learning/new" component={() => <h1>Create LO</h1>} />
      </div>
    </Router>
  )
}
