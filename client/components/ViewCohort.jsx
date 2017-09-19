import React from 'react'
import {Link} from 'react-router-dom'
import UsersInCohort from '../containers/UsersInCohort'

export default class ViewCohort extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showUsers: false
    }
    if (!props.cohort) {
      props.history.push('/cohorts')
      // document.location = '/#/cohorts'
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
    console.log(this.props);
    let {cohort} = this.props
    let {showUsers} = this.state
    if (!cohort) {
      this.props.history.push('/cohorts')
      // document.location = '/#/cohorts'
      return <div>No Cohort Found</div>
    }
    return (
      <div>
        <h1>{cohort.name}</h1>
        <Link to="/cohorts">Back to Cohorts</Link>
        <p>{cohort.description}</p>
        <button onClick={this.toggleUsers}>{showUsers ? "Hide Members" : "Show Members"}</button>
        {showUsers && <UsersInCohort />}
      </div>
    )
  }
}
