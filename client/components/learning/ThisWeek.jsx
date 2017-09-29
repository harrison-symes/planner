import React from 'react'
import {Link} from 'react-router-dom'

export default class ThisWeek extends React.Component {
  render() {
    const {learningPlan} = this.props
    return (
      <div className="column">
        <h1 className="subtitle is-1">This Week</h1>
        <hr />
        <div className="content">
          {}
          <p className="tag is-warning is-large">You haven't made a learning objective this week!</p>
          <Link className="button is-success is-large" to="/my/learning/new">Create Learning Objective</Link>
        </div>
      </div>
    )
  }
}
