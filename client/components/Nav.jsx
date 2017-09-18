import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav ({auth, logout}) {
  return (
    <div className="Nav">
      <Link to="/">Home</Link>{" | "}
      {auth.isAuthenticated
        ? <button onClick={() => logout()}>Logout</button>
        : <div>
          <Link to="/login">Login</Link>{" | "}
          <Link to="/register">Register</Link>
        </div>
      }
    </div>
  )
}
