import React from 'react'

export default class CreateLearning extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewSuggestions: false,
      plan: '',
      pendingObjective: '',
      objectives: []
    }
    this.submit = this.submit.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
    this.addObjective = this.addObjective.bind(this)
    this.submitPendingObjective = this.submitPendingObjective.bind(this)
  }
  addObjective (objective) {
    const {objectives} = this.state
    objectives.push(objective)
    this.setState({objectives})
  }
  submitPendingObjective () {
    const {pendingObjective} = this.state
    addObjective(pendingObjective)
    this.setState({pendingObjective: ''})
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    console.log(this.state);
  }
  render() {
    const {viewSuggestions, pendingObjective, objectives} = this.state
    console.log({objectives});
    return (
      <div className="container">
        <h1 className="subtitle is-1">Create Learning Plan</h1>
        <form onSumbit={this.submit}>
        <button className="button is-large is-info is-inverted">See Suggestions</button>
        {viewSuggestions && <LearningSuggestions />}
        <hr />
        <label className="label">New Objective:
          <input className="input is-success" type="text" name="pendingObjective" placeholder="New Objective" onChange={this.updateDetails} value={pendingObjective}/>
          <button className="button is-success" onClick={this.submitPendingObjective}>Add Objective</button>
        </label>
        <label className="label">Describe Plan:
          <input className="textarea is-primary" type="textarea" placeholder="Describe your plan" name="plan" />
        </label>
        <input className="button is-success is-large" type="submit" value="Submit Learning Plan"/>
      </form>
      </div>
    )
  }
}
