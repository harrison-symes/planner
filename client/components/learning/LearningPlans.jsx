import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {getWeekSpan, getDayName} from '../../utils/moment'

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
  diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function getNextSunday (d) {
  d = new Date(d)
  var day = d.getDay()
  var diff = d.getDate() + 6
  return new Date(d.setDate(diff))
}

export default class LearningPlans extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: 0
    }
    this.addClick = this.addClick.bind(this)
  }
  addClick() {
    this.setState({clicks: this.state.clicks + 1})
    console.log(this.state.clicks);
  }
  render() {
    const {learningPlans} = this.props
    console.log(getMonday(new Date()));
    const isThisWeek = (date) => getWeekSpan(date) == getWeekSpan(new Date())
    const renderPlanPreview = (plan, i) => <div className={`button ${isThisWeek(plan.created_at) ? "is-primary": (plan.is_reflected ? (plan.is_reviewed ? "is-success" : "is-warning") : "is-danger")}`} key={i}>
      <p>{getWeekSpan(plan.created_at)} ({getDayName(plan.created_at)}) </p>
    </div>
    return (
      <div className="column">
        <h1 className="subtitle is-1">Review Learning</h1>
        <hr />
        <div className="content" onClick={this.addClick}>
          <div className="columns">
            <p className="tag is-small is-primary column">In Progress  </p>
            <p className="tag is-small is-danger column">Needs Reflection</p>
            <p className="tag is-small is-warning column">Reflected</p>
            <p className="tag is-small is-success column">Reviewed + Reflected</p>
          </div>
          {learningPlans.length != 0
            ? learningPlans.map(renderPlanPreview)
            : <p  className="tag is-large is-inverted" >{this.state.clicks >= 10 ? "I HATE THE TURTLES!!!!" : "No Learning Objectives To Review"}</p>
          }
        </div>

          {this.state.clicks >= 10 && <img src="https://vignette.wikia.nocookie.net/villains/images/1/13/Krang_80s.png/revision/latest?cb=20161124163608" />}
          <Link className="button is-success is-large" to="/my/learning/review">Review Past Learning</Link>
      </div>
    )
  }
}
