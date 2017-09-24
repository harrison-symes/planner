import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const navbarStart = (auth) => (
  <div className="navbar-start">
    <div className="navbar-item">
      <Link className="navbar-link is-active" to="/my/conversations">Conversations</Link>
    </div>
    {" | "}
    <div className="navbar-item has-dropdown is-hoverable">
      <Link className="navbar-link is-active" to="/my/cohorts">Cohorts</Link>
      <div className="navbar-dropdown">
        <Link className="navbar-item" to="/my/cohorts/find/new">Find Cohort</Link>
      </div>
    </div>
    {" | "}
    <Link className="navbar-item" to="/my/learning">Learning</Link>
    {" | "}
    <Link className="navbar-item" to="/my/profile">Profile</Link>
    {" | "}
    {auth.user.is_admin==true && <span>
      <Link to="/my/admin">Admin</Link>
      {" | "}
    </span>}
  </div>
)

const navbarEnd = (isAuthenticated, showConfirmLogout, toggleLogout) => (
  <div className="navbar-end">
    {console.log(this)}
    {isAuthenticated
      ? showConfirmLogout
        ? <span>Are you sure?
          <button onClick={() => toggleLogout(true)}>Yes</button>
          <button onClick={() => toggleLogout(false)}>No</button>
        </span>
        : <Link to="/" onClick={() => toggleLogout(false)}>Logout</Link>
      : <div>
        <Link to="/login">Login</Link>
        {" | "}
        <Link to="/register">Register</Link>
      </div>
    }
  </div>
)

export default class HomeNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfirmLogout: false
    }
    this.toggleLogout = this.toggleLogout.bind(this)
  }
  toggleLogout(bool) {
    this.setState({showConfirmLogout: !this.state.showConfirmLogout})
    if (bool) this.props.logout()
  }
  render() {
    let {auth, logout} = this.props
    let {showConfirmLogout} = this.state
    return (
      <nav className="navbar" role="navigation" aria-label="dropdown navigations">
        <div className="navbar-brand">
        </div>
        <div className="navbar-menu">
          {auth.isAuthenticated && navbarStart(auth)}
          {navbarEnd(auth.isAuthenticated, showConfirmLogout, this.toggleLogout)}
        </div>
      </nav>
    )
  }
}
