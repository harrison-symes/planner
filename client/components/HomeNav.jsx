import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const navbarStart = (auth) => (
  <div className="navbar-start">
    <Link className="navbar-item button is-inverted is-primary is-large" to="/my/conversations">Conversations</Link>
    <Link className="navbar-item button is-inverted is-primary is-large" to="/my/cohorts/find/new">Find Cohort</Link>
    <Link className="navbar-item button is-inverted is-primary is-large" to="/my/learning">Learning</Link>
    <Link className="navbar-item button is-inverted is-primary is-large" to="/my/profile">Profile</Link>

    {auth.user.is_admin==true && <Link className="navbar-item button is-inverted is-success is-large" to="/my/admin">Admin</Link>}
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
        : <Link className="navbar-item button is-danger is-inverted is-large" to="/" onClick={() => toggleLogout(false)}>Logout</Link>
      : <span className="navbar-item">
        <Link className="button is-primary is-inverted is-large" to="/login">Login</Link>
        <Link className="button is-info is-inverted is-large" to="/register">Register</Link>
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
    this.setState({burgerShow: !this.state.burgerShow})
  }
  render() {
    let {auth, logout} = this.props
    let {showConfirmLogout, burgerShow} = this.state
    return (
      <section className="section is-info">
        <nav className="navbar" role="navigation" aria-label="main navigations">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img style={{width: '20vw'}}src="http://bulma.io/images/bulma-logo.png" />
            </a>
            <div onClick={this.burgerToggle} className={`navbar-burger burger ${burgerShow ? "is-active" : " "}`} data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={`navbar-menu is-info ${burgerShow ? "is-active" : " "}`} id="navMenu">
            {auth.isAuthenticated && navbarStart(auth)}
            {navbarEnd(auth.isAuthenticated, showConfirmLogout, this.toggleLogout)}
          </div>
        </nav>
      </section>
    )
  }
}
