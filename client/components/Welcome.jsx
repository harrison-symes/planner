import React from 'react'
import {Link} from 'react-router-dom'

export default function Welcome ({auth}) {
  return (
    <div className="content has-text-centered">
      <h1 className="title">Welcome To EDA Planner</h1>
      <hr ></hr>
      {auth.isAuthenticated
        ? <div>
        </div>
        : <div>
          <Link to="/login" className="button is-success is-large">Login</Link>
          <hr className="navbar-divider"></hr>
          <Link to="/register" className="button is-warning is-large">Register</Link>
        </div>}
    </div>
  )
}
