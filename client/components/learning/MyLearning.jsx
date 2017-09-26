import React from 'react'
import {Link} from 'react-router-dom'

export default class MyLearning extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <h1 className="subtitle is-1">Review Learning</h1>
          <hr />
          <div className="content">
            <p className="tag is-large is-inverted">No Learning Objectives To Review</p>
            <Link className="button is-success is-large" to="/my/learning/review">Review Past Learning</Link>
          </div>
        </div>
        <div className="column">
          <h1 className="subtitle is-1">This Week</h1>
          <hr />
          <div className="content">
            <p className="tag is-warning is-large">You haven't made a learning objective this week!</p>
            <Link className="button is-success is-large" to="/my/learning/new">Create Learning Objective</Link>
          </div>
        </div>
      </div>
    )
  }
}
