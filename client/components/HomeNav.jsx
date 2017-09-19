import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

export default function HomeNav ({auth, logout}) {
  return (
    <div>
      {auth.isAuthenticated
        ? <div>
          <Link to="/find/cohorts">Find</Link>
          {" | "}
          <Link to="/my/cohorts">Cohorts</Link>
          {" | "}
          <Link to="/my/learning">Learning</Link>
          {" | "}
          <Link to="/my/profile">Profile</Link>
          {" | "}
          <Link to="/" onClick={() => logout()}>Logout</Link>
        </div>
        : <div>
          <Link to="/login">Login</Link>
          {" | "}
          <Link to="/register">Register</Link>
        </div>
      }
    </div>
  )
}
