import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

var buttonClass = "nav-item is-primary is-large"

const navbarStart = (auth, burgerToggle, path) => (
  <div onClick={burgerToggle} className="navbar-start">

    <Link className={`${buttonClass} is-primary ${'/my/conversations'.includes(path) ? "is-active" : " "}`} to="/my/conversations">Conversations</Link>
    <Link className={`${buttonClass} is-primary ${'/my/cohorts'.includes(path) ? "is-active" : " "}`} to="/my/cohorts">Cohorts</Link>
    <Link className={`${buttonClass} is-primary ${'/my/learning'.includes(path) ? "is-active" : " "}`} to="/my/learning">Learning</Link>
    <Link className={`${buttonClass} is-primary ${'/my/profile'.includes(path) ? "is-active" : " "}`} to="/my/profile">Profile</Link>
    {auth.user.is_admin==true && <Link className={`${buttonClass} is-success ${'/my/admin'.includes(path) ? "is-active" : " "}`} to="/my/admin">Admin</Link>}
  </div>
)

const navbarEnd = (isAuthenticated, showConfirmLogout, toggleLogout, path) => (
  <div className="navbar-end nav-right">
    <Link className={`${buttonClass} is-success ${'/' === path ? "is-active" : " "}`} to="/">Home</Link>
    {isAuthenticated
      ? showConfirmLogout
        ? <div className="navbar-item align-items is-level">
          <p className="tag is-danger">Logout?</p>
          <a className={`${buttonClass} is-warning is-hoverable`} onClick={() => toggleLogout(true)}>Yes</a>
          <a className={`${buttonClass} is-danger`} onClick={() => toggleLogout(false)}>No</a>
        </div>
        : <Link className={`${buttonClass} is-danger`} to="/" onClick={() => toggleLogout(false)}>Logout</Link>
      : <span className="navbar-item">
        <Link className={`${buttonClass} is-dark ${'/login' === path ? "is-active" : " "}`} to="/login">Login</Link>
        <Link className={`${buttonClass} is-dark ${'/register' === path ? "is-active" : " "}`} to="/register">Register</Link>
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
    console.log(this.props);
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
          <div className={`navbar-menu is-info ${burgerShow ? "is-active" : " "}`} id="navMenu">
            {auth.isAuthenticated && navbarStart(auth, this.burgerToggle, this.props.location.pathname)}
            {navbarEnd(auth.isAuthenticated, showConfirmLogout, this.toggleLogout, this.props.location.pathname)}
          </div>
        </header>
      </section>
    )
  }
}
