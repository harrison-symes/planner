import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'
import Nav from '../containers/Nav'
import Home from '../containers/Home'

export default function ({auth}) {
  return (
    <Router>
      <div className='app-container'>
        <h1>Hello World</h1>
        <Route path="/" component={Nav} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
        {auth.isAuthenticated
          ? <div>
            <Route path='/' component={Home} />
          </div>
          : <h1>Login to see more information</h1>
        }
      </div>
    </Router>
  )
}
