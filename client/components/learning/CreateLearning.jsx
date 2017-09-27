import React from 'react'

export default class CreateLearning extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddObjective: false,
      viewSuggestions: false,
      suggestionCount: 1,
      plan: '',
      pendingObjective: '',
      objectives: [],
      suggested: [],
      suggestions: [{title: 'Stop Procrastinating'}, {title: 'Use Postgres'}, {title: 'TDD'}, {title: 'Angular'}, {title: 'Watch Lectures'}, {title: 'Group Project'}, {title: 'Full Stack Project'}, {title: 'hello'}, {title: 'memes'}, {title: 'hello'}, {title: 'memes'}, {title: 'hello'}]
    }
    this.submit = this.submit.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
    this.addObjective = this.addObjective.bind(this)
    this.submitPendingObjective = this.submitPendingObjective.bind(this)
    this.toggleSuggestions = this.toggleSuggestions.bind(this)
    this.addSuggested = this.addSuggested.bind(this)
    this.toggleAddObjective = this.toggleAddObjective.bind(this)
    setInterval(() => {
      if (this.state.suggestionCount < this.state.suggestions.length && this.state.viewSuggestions) this.incrementSuggestion()
    },300)
  }
  incrementSuggestion () {
    this.setState({suggestionCount: this.state.suggestionCount+1})
  }
  toggleAddObjective () {
    this.setState({showAddObjective: !this.state.showAddObjective})
  }
  toggleSuggestions () {
    this.setState({viewSuggestions: !this.state.viewSuggestions, suggestionCount: 1})
  }
  addSuggested (suggestion) {
    let {suggested, suggestions} = this.state
    if (suggested.find(s => s == suggestion)) {
      suggested = suggested.filter(s => s != suggestion)
      suggestions.push(suggestion)
    } else {
      suggested.push(suggestion)
      suggestions = [...this.state.suggestions].filter((s) => s!=suggestion)
    }
    this.setState({suggestions, suggested})
  }
  addObjective (objective) {
    const {objectives} = this.state
    objectives.push(objective)

    this.setState({objectives})
  }
  submitPendingObjective () {
    const {pendingObjective} = this.state
    this.addObjective(pendingObjective)
    this.setState({pendingObjective: ''})
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    console.log(this.state);
  }
  render() {
    const {viewSuggestions, pendingObjective, objectives, suggestions, suggestionCount, suggested, showAddObjective} = this.state
    const renderSuggestions = (suggestions, isSelected) => {
      const renderSuggestion = (suggestion, i) => {
        return ((suggestionCount >= (i+1)) || !isSelected )?
        <p key={i} onClick={() => this.addSuggested(suggestion)} className={`button column ${isSelected ? "is-info is-inverted" : 'is-success '} `}>{suggestion.title}</p>
        : <p key={i}></p>
      }
      return <div className="section columns is-8 is-multiline is-mobile">
        {suggestions.map(renderSuggestion, false)}
      </div>
    }
    return (
      <div className="container">
        <h1 className="subtitle is-1">Create Learning Plan</h1>
        <hr />
        <div className="columns">
          {suggestions.length != 0 && <span className="column">
            <button onClick={this.toggleSuggestions} className={`button ${viewSuggestions ? "is-danger" : "is-info is-large"} is-inverted`}>{viewSuggestions ? "Hide Suggestions": "See Suggestions"}</button>
            {viewSuggestions && renderSuggestions(suggestions, true)}
          </span>}
          {suggested.length != 0 && <span className='column'>
            <p className="subtitle is-3">Selected Objectives:</p>
            {renderSuggestions(suggested)}
          </span>}
          {showAddObjective}
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
