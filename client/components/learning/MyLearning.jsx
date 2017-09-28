import React from 'react'
import {Link} from 'react-router-dom'

export default class MyLearning extends React.Component {
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
    return (
      <div className="columns">
        <div className="column">
          <h1 className="subtitle is-1">Review Learning</h1>
          <hr />
          <div onClick={this.addClick} className="content">
            <p className="tag is-large is-inverted" >{this.state.clicks >= 10 ? "I HATE THE TURTLES!!!!" : "No Learning Objectives To Review"}</p>
            {this.state.clicks >= 10 && <img src="https://vignette.wikia.nocookie.net/villains/images/1/13/Krang_80s.png/revision/latest?cb=20161124163608" />}
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
