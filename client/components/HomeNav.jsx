import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

export default class HomeNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfirmLogout: false
    }
  }
  toggleLogout(bool) {
    this.setState({showConfirmLogout: !this.state.showConfirmLogout})
    if (bool) this.props.logout()
  }
  render() {
    let {auth, logout} = this.props
    let {showConfirmLogout} = this.state
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
            {showConfirmLogout
              ? <span>Are you sure?
                <button onClick={() => this.toggleLogout(true)}>Yes</button>
                <button onClick={() => this.toggleLogout(false)}>No</button>
              </span>
              : <Link to="/" onClick={() => this.toggleLogout(false)}>Logout</Link>
            }
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
}
