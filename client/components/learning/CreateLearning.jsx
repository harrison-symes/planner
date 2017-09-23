import React from 'react'

export default class CreateLearning extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

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
      <form onSumbit={this.submit}>
        
        <input type="submit" />
      </form>
    )
  }
}
