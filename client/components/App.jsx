import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'
import Nav from '../containers/Nav'

export default function () {
  return (
    <Router>
      <div className='app-container'>
        <h1>Hello World</h1>
        <Route path="/" component={Nav} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
      </div>
    </Router>
  )
}
