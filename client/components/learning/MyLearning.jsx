import React from 'react'
import {Link} from 'react-router-dom'

import LearningPlans from '../../containers/learning/LearningPlans'
import ThisWeek from '../../containers/learning/ThisWeek'

export default class MyLearning extends React.Component {
  componentWillMount() {
    this.props.getLearningPlans()
  }
  render() {
    return (
      <div className="container">
        <h1 className="title is-1">My Learning</h1>
        <div className="columns section is-mobile">
          <p className="tag is-large is-primary column">In Progress</p>
          <p className="tag is-large is-danger column">Needs Reflection</p>
          <p className="tag is-large is-warning column">Reflected</p>
          <p className="tag is-large is-success column">Reviewed + Reflected</p>
        </div>
        <hr />
        <div className="columns">
          <LearningPlans />
          <ThisWeek />
          {/* <div className="column">
            <h1 className="subtitle is-1">This Week</h1>
            <hr />
            <div className="content">
              <p className="tag is-warning is-large">You haven't made a learning objective this week!</p>
              <Link className="button is-success is-large" to="/my/learning/new">Create Learning Objective</Link>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}
