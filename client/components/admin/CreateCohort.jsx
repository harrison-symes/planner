import React from 'react'

export default class CreateCohort extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.submit = this.submit.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    console.log({e});
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <h1>Create Cohort Form</h1>
        <input type="submit" />
      </form>
    )
  }
}
