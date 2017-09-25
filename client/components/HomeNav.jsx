import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

var buttonClass = "nav-item is-primary is-large"

const navbarStart = (auth) => (
  <div className="navbar-start">

    <Link className={`${buttonClass} is-primary`} to="/my/conversations">Conversations</Link>
    <Link className={`${buttonClass} is-primary`} to="/my/cohorts/">Cohorts</Link>
    <Link className={`${buttonClass} is-primary`} to="/my/learning">Learning</Link>
    <Link className={`${buttonClass} is-primary`} to="/my/profile">Profile</Link>
    {auth.user.is_admin==true && <Link className={`${buttonClass} is-success is-large`} to="/my/admin">Admin</Link>}
  </div>
)

const navbarEnd = (isAuthenticated, showConfirmLogout, toggleLogout) => (
  <div className="navbar-end nav-right">
    {isAuthenticated
      ? showConfirmLogout
        ? <p className="navbar-item align-items is-level">
          <p>Logout?</p>
          <a className={`${buttonClass} is-warning`} onClick={() => toggleLogout(true)}>Yes</a>
          <a className={`${buttonClass} is-danger`} onClick={() => toggleLogout(false)}>No</a>
        </p>
        : <Link className={`${buttonClass} is-danger`} to="/" onClick={() => toggleLogout(false)}>Logout</Link>
      : <span className="navbar-item">
        <Link className={`${buttonClass} is-dark`} to="/login">Login</Link>
        <Link className={`${buttonClass} is-dark`} to="/register">Register</Link>
      </span>
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
    console.log("toggle burger");
    this.setState({burgerShow: !this.state.burgerShow})
  }
  render() {
    let {auth, logout} = this.props
    let {showConfirmLogout, burgerShow} = this.state
    return (
      <section className="section is-info has-text-centered">
        <header className="nav" role="navigation" aria-label="main navigations">
          <div className="navbar-brand ">
            <a className="navbar-item" href="#">
              <img src="http://bulma.io/images/bulma-logo.png" />
            </a>
          </div>
          <div onClick={this.burgerToggle} className={`navbar-burger burger button is-success ${burgerShow ? "is-active" : " "}`} data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div onClick={this.burgerToggle} className={`navbar-menu is-info ${burgerShow ? "is-active" : " "}`} id="navMenu">
            {auth.isAuthenticated && navbarStart(auth, this.burgerToggle)}
            {navbarEnd(auth.isAuthenticated, showConfirmLogout, this.toggleLogout)}
          </div>
        </header>
      </section>
    )
  }
}
