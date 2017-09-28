import React from 'react'

export default class CreateObjective extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      err: null,
      showAddObjective: false,
      title: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submitObjective = this.submitObjective.bind(this)
    this.toggleAddObjective = this.toggleAddObjective.bind(this)
  }
  toggleAddObjective() {
    this.setState({showAddObjective: !this.state.showAddObjective})
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submitObjective(e) {
    e.preventDefault()
    const {title} = this.state
    this.props.createObjective({title}, (err) => {
      if (!err) this.setState({title: '', showAddObjective: false, err: null})
      else this.setState({title: '', err})
    })
  }
  render() {
    const {title, showAddObjective} = this.state
    return (
      <span className="column">
        <button onClick={this.toggleAddObjective} className={`button ${showAddObjective ? "is-danger" : "is-info is-large"} is-inverted`}>{showAddObjective ? "Cancel": "Create Objective"}</button>
        {showAddObjective && <form className="form" onSubmit={this.submitObjective}>
          <label className="label column">New Objective:
            <input className="input is-success has-text-centered" type="text" name="title" placeholder="New Objective" onChange={this.updateDetails} value={title}/>
            <input className="button is-success" type="submit" value="Create Objective"/>
          </label>
        </form>}
      </span>
    )
  }
}
