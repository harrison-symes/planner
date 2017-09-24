import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const navbarStart = (auth) => (
  <div className="navbar-start">
    <Link className="navbar-item is-active" to="/my/conversations">Conversations</Link>
    {" | "}
    <Link className="navbar-item" to="/my/cohorts/find/new">Find Cohort</Link>
    {" | "}
    <Link className="navbar-item" to="/my/learning">Learning</Link>
    {" | "}
    <Link className="navbar-item" to="/my/profile">Profile</Link>
    {auth.user.is_admin==true && <span>
      {" | "}
      <Link className="navbar-item" to="/my/admin">Admin</Link>
    </span>}
  </div>
)

const navbarEnd = (isAuthenticated, showConfirmLogout, toggleLogout) => (
  <div className="navbar-end">
    {console.log(this)}
    {isAuthenticated
      ? showConfirmLogout
        ? <p className="navbar-item align-items is-level">
          <p>Logout?</p>
          <button className="button level-item" onClick={() => toggleLogout(true)}>Yes</button>
          <button className="button level-item" onClick={() => toggleLogout(false)}>No</button>
        </p>
        : <Link className="navbar-item" to="/" onClick={() => toggleLogout(false)}>Logout</Link>
      : <div>
        <Link className="navbar-item" to="/login">Login</Link>
        {" | "}
        <Link className="navbar-item" to="/register">Register</Link>
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
    this.burgerToggle = this.burgerToggle.bind(this)
  }
  toggleLogout(bool) {
    this.setState({showConfirmLogout: !this.state.showConfirmLogout})
    if (bool) this.props.logout()
  }
  burgerToggle () {
    this.setState({burgerShow: !this.state.burgerShow})
  }
  render() {
    let {auth, logout} = this.props
    let {showConfirmLogout, burgerShow} = this.state
    return (
      <nav className="navbar" role="navigation" aria-label="main navigations">
        <div className="navbar-brand">
          <button onClick={this.burgerToggle} className={`button navbar-burger ${burgerShow ? "is-active" : " "}`} data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`navbar-menu ${burgerShow ? "is-active" : " "}`} id="navMenu">
          {auth.isAuthenticated && navbarStart(auth)}
          {navbarEnd(auth.isAuthenticated, showConfirmLogout, this.toggleLogout)}
        </div>
      </nav>
    )
  }
}
