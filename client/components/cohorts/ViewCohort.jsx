import React from 'react'
import {Link} from 'react-router-dom'

import UsersInCohort from '../../containers/cohorts/UsersInCohort'

export default class ViewCohort extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showUsers: false
    }
    this.toggleUsers = this.toggleUsers.bind(this)
  }
  componentDidMount() {
    this.props.getUsers(this.props.id)
  }
  toggleUsers() {
    this.setState({showUsers: !this.state.showUsers})
  }
  render() {
    let {cohort} = this.props
    let {showUsers} = this.state
    if (!cohort) {
      this.props.history.push('/my/cohorts')
      return <div>No Cohort Found</div>
    }
    return (
      <div>
        <h1>{cohort.is_admin ? "Admin" : "Member"} of {cohort.name}</h1>
        <Link to="/my/cohorts">Back to Cohorts</Link>
        <p>{cohort.description}</p>
        <button onClick={this.toggleUsers}>{showUsers ? "Hide Members" : "Show Members"}</button>
        {showUsers && <UsersInCohort />}
      </div>
    )
  }
}
