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
    const RenderStats = () => (
      <div className="tile is-3 is-ancestor has-text-centered">
        <div className="tile is-vertical is-parent">
          <span className="tile is-child level is-mobile" >
            <p className="subtitle is-3 level-item ">Cohorts Joined: </p>
            <p className="tag is-static is-large is-success level-item">{cohorts.length}</p>
          </span>
          <span className="tile is-child level is-mobile" >
            <p className="subtitle is-3 level-item">Messages Sent: </p>
            <p className="tag is-static is-large is-success level-item">{cohorts.length}</p>
          </span>
          <span className="tile is-child level is-mobile" >
            <p className="subtitle is-3 level-item">Learning Fufilled: </p>
            <p className="tag is-static is-large is-success level-item">{cohorts.length}</p>
          </span>
        </div>
      </div>
    )
    return (
      <div className="container">
        <h1 className="title is-1">My Profile</h1>
        <hr />
        <div className="columns is-desktop">
          <div className="column is-6">
            <p className="subtitle is-2"><strong>{first_name} {last_name} ({user_name})</strong></p>
            <p className="subtitle is-4">{about}</p>
            <hr />
            <div className="is-pulled-left">
              <RenderStats />
            </div>
            <div className="is-pulled-right column is-one-half">
              <h3 className="subtitle is-3">My Cohorts</h3>
              <hr />
              {cohorts.map(renderCohort)}
            </div>
          </div>
          <div className="column is-6">
            Edit Account Here
          </div>
        </div>
      </div>
    )
  }
}
