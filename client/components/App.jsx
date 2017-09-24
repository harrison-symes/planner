import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from '../containers/auth/Login'
import Register from '../containers/auth/Register'
import Home from '../containers/Home'

export default function ({auth}) {
  return (
    <Router>
      <div className='app-container'>
        <Route path='/' component={Home} />
        {!auth.isAuthenticated && <h1 className="title">Login to see more information</h1>}
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
      </div>
    </Router>
  )
}
