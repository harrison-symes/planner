import React from 'react'
import {Link} from 'react-router-dom'

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
    const renderPlanPreview = (plan, i) => <div className={`button ${plan.is_reflected ? (plan.is_reviewed ? "is-success" : "is-warning") : "is-danger"}`} key={i}>
      {plan.created_at}
    </div>
    return (
      <div className="column">
        <h1 className="subtitle is-1">Review Learning</h1>
        <hr />
        <div className="content" onClick={this.addClick}>
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
