import React from 'react'

import LearningSuggestions from '../../containers/learning/LearningSuggestions'
import SelectedSuggestions from '../../containers/learning/SelectedSuggestions'
import CreateObjective from '../../containers/learning/CreateObjective'

export default class CreateLearning extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      plan: '',
    }
    this.submit = this.submit.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <h1 className="subtitle is-1">Create Learning Plan</h1>
        <hr />
        <div className="columns">
          <SelectedSuggestions />
          <LearningSuggestions />
          <CreateObjective />
        </div>
        <hr />
        <form onSubmit={this.submit}>
          <label className="label">Describe Plan:
            <input className="textarea is-primary has-text-centered" type="textarea" placeholder="Describe your plan" name="plan" />
          </label>
          <input className="button is-success is-large" type="submit" value="Submit Learning Plan"/>
        </form>
      </div>
    )
  }
}
