import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import MyConversations from '../../containers/conversations/MyConversations'
import Conversation from '../../containers/conversations/Conversation'

export default function CohortRouter (props) {
  return (
    <Router>
      <div>
        <Route exact path="/my/conversations" component={MyConversations} />
        <Route path="/my/conversations/:id" exact component={(props) => <Conversation {...props} />} />
      </div>
    </Router>
  )
}
