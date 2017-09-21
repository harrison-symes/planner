import React from 'react'
import {connect} from 'react-redux'

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      password: '',
      confirm_password: '',
      first_name: '',
      last_name: '',
      about: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    this.props.error(null)
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    let {user_name, password, confirm_password, first_name} = this.state
    let flag = false
    if (password != confirm_password) {
      flag = true
      this.props.error('Passwords do not match')
      return
    }
    for (var key in this.state) {
      if (key != 'about' && this.state[key] == '') flag = true
    }
    if (!flag) {
      this.props.registerUser({...this.state})
      e.target.reset()
    }
    else this.props.error('Please complete all required fields')
  }
  render() {
    return (
      <form className="Register" onSubmit={this.submit}>
        <h1>{this.props.auth.errorMessage}</h1>
        <label>Username:
          <input type="text" name="user_name" onChange={this.updateDetails}/>
        </label>*<br/>
        <label>Password:
          <input type="password" name="password" onChange={this.updateDetails}/>
        </label>*<br/>
        <label>Confirm:
          <input type="password" name="confirm_password" onChange={this.updateDetails}/>
        </label>*<br/>
        <label>First Name:
          <input type="text" name="last_name" onChange={this.updateDetails}/>
        </label>*<br/>
        <label>Last Name:
          <input type="text" name="first_name" onChange={this.updateDetails}/>
        </label>*<br/>
        <label>About Me:
          <input type="text" name="about" onChange={this.updateDetails}/>
        </label><br/>
        <p>* Requied Field</p>
          <input type="submit" />
      </form>
    )
  }
}
