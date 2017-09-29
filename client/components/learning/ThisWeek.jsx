import React from 'react'
import {Link} from 'react-router-dom'
import {getWeekSpan, getDaysLeft} from '../../utils/moment'

export default class ThisWeek extends React.Component {
  componentWillMount() {
    // this.props.getObjectives()
  }
  render() {
    const {learningPlan} = this.props
    console.log(getDaysLeft() < 3 ? (getDaysLeft() < 2 ? "is-danger" :  "is-waning") : "is-success");
    return (
      <div className="column">
        <h1 className="subtitle is-1">This Week</h1>
        <hr />
        <div className="content">
          {learningPlan
            ? <div className="content">
              <p className="is-large is-primary is-3 subtitle">{getWeekSpan(learningPlan.created_at)} </p>
              <p className={`tag is-large ${getDaysLeft() < 3 ? (getDaysLeft() < 2 ? "is-danger" :  "is-warning") : "is-success"}`}>{getDaysLeft()} Days Left</p>
              <p className="content box">{learningPlan.plan}</p>
            </div>
            : <div>
              <p className="tag is-warning is-large">You haven't made a learning objective this week!</p>
              <Link className="button is-success is-large" to="/my/learning/new">Create Learning Objective</Link>
            </div>
          }
        </div>
      </div>
    )
  }
}
