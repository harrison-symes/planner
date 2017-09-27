import React from 'react'

import LearningSuggestions from '../../containers/learning/LearningSuggestions'
import SelectedSuggestions from '../../containers/learning/SelectedSuggestions'

export default class CreateLearning extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddObjective: false,
      showSuggestions: false,
      plan: '',
      pendingObjective: '',
    }
    this.submit = this.submit.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
    this.submitPendingObjective = this.submitPendingObjective.bind(this)
    this.toggleSuggestions = this.toggleSuggestions.bind(this)
    this.toggleAddObjective = this.toggleAddObjective.bind(this)
  }
  toggleAddObjective () {
    this.setState({showAddObjective: !this.state.showAddObjective})
  }
  toggleSuggestions () {
    this.setState({showSuggestions: !this.state.showSuggestions})
  }
  submitPendingObjective () {
    console.log(pendingObjective);
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    console.log(this.state);
  }
  render() {
    const {showSuggestions, pendingObjective, showAddObjective} = this.state
    return (
      <div className="container">
        <h1 className="subtitle is-1">Create Learning Plan</h1>
        <hr />
        <div className="columns">
          <span className="column">
            <button onClick={this.toggleSuggestions} className={`button ${showSuggestions ? "is-danger" : "is-info is-large"} is-inverted`}>{showSuggestions ? "Hide Suggestions": "See Suggestions"}</button>
            {showSuggestions && <SelectedSuggestions toggle={this.toggleSuggestions} show={showSuggestions}/>}
          </span>
          <span className='column'>
            <p className="subtitle is-3">Selected Objectives:</p>
            <LearningSuggestions />
          </span>
          <span className="column">
            <button onClick={this.toggleAddObjective} className={`button ${showAddObjective ? "is-danger" : "is-info is-large"} is-inverted`}>{showAddObjective ? "Cancel": "Create Objective"}</button>
            {showAddObjective && <label className="label column">New Objective:
              <input className="input is-success has-text-centered" type="text" name="pendingObjective" placeholder="New Objective" onChange={this.updateDetails} value={pendingObjective}/>
              <button className="button is-success" onClick={this.submitPendingObjective}>Add Objective</button>
            </label>}
          </span>
        </div>
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
