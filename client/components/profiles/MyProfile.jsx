import React from 'react'
import {Link} from 'react-router-dom'

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getCohorts()
  }
  render() {
    let {auth, cohorts} = this.props
    let {id, user_name, first_name, last_name, about} = auth.user
    const renderCohort = ({name, id}, i) => <h3 key={i}><Link to={`/my/cohorts/${id}`} >{name}</Link></h3>

    return (
      <div className="container">
        <h1 className="title is-1">My Profile</h1>
        <hr />
        <h1>Hello {first_name}</h1>
        <p>Name: {first_name} {last_name} / ({user_name})</p>
        <p>About Me: {about}</p>
        <div>
          <h3>My Cohorts:</h3>
          {cohorts.map(renderCohort)}
          {cohorts.length == 0 && <Link to="/my/cohorts/find/new">Find a Cohort</Link>}
        </div>
      </div>
    )
  }
}