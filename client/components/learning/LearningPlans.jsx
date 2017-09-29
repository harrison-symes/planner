import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {getWeekSpan, getDayName, isThisWeek} from '../../utils/moment'

export default class LearningPlans extends React.Component {
  render() {
    const {learningPlans} = this.props
    const renderPlanPreview = (plan, i) => <div className={`button is-large content has-text-centered column is-12 ${isThisWeek(plan.created_at) ? "is-primary": (plan.is_reflected ? (plan.is_reviewed ? "is-success" : "is-warning") : "is-danger")}`} key={i}>
      <p>{getWeekSpan(plan.created_at)}</p>
    </div>
    return (
      <div className="column">
        <h1 className="subtitle is-1">Past Learning</h1>
        <hr />
        <div className=" has-text-centered">
          {learningPlans.filter(p => !isThisWeek(p.created_at)).map(renderPlanPreview)}
          <hr />
        </div>
      </div>
    )
  }
}
