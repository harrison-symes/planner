import React from 'react'
import {Link} from 'react-router-dom'

import LearningPlans from '../../containers/learning/LearningPlans'

export default class MyLearning extends React.Component {
  componentWillMount() {
    this.props.getLearningPlans()
  }
  render() {
    return (
      <div className="container">
        <h1 className="title is-1">My Learning</h1>
        <hr />
        <div className="columns">
          <LearningPlans />
          <div className="column">
            <h1 className="subtitle is-1">This Week</h1>
            <hr />
            <div className="content">
              <p className="tag is-warning is-large">You haven't made a learning objective this week!</p>
              <Link className="button is-success is-large" to="/my/learning/new">Create Learning Objective</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
