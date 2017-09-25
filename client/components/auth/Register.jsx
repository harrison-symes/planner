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
    let {user_name, password, confirm_password} = this.state
    let labelClass = "label is-large control has-icons-left"
    let inputClass = "input is-medium"
    return (
      <form className="Register" onSubmit={this.submit}>
        <h1 className="is-danger">{this.props.auth.errorMessage}</h1>
        <label className={`${labelClass}`}>Username:
          <input className={`${inputClass} ${user_name.length > 6 ? "is-primary" : "is-danger"}`} type="text" name="user_name" onChange={this.updateDetails}/>
        </label>
        <label className={`${labelClass}`}>Password:
          <input className={`${inputClass} ${password.length >= 8 ? "is-primary" : "is-danger"}`}  type="password" name="password" onChange={this.updateDetails}/>
        </label>
        <label className={`${labelClass}`}>Confirm:
          <input className={`${inputClass} ${password == confirm_password && confirm_password.length >= 8 ? "is-primary" : "is-danger"}`} type="password" name="confirm_password" onChange={this.updateDetails}/>
        </label>
        <label className={`${labelClass}`}>First Name:
          <input className={`${inputClass}`} type="text" name="first_name" onChange={this.updateDetails}/>
        </label>
        <label className={`${labelClass}`}>Last Name:
          <input className={`${inputClass}`}  type="text" name="last_name" onChange={this.updateDetails}/>
        </label>
        <label className={`${labelClass}`}>About Me:
          <input className={`${inputClass} is-dark`} type="textarea" name="about" onChange={this.updateDetails}/>
        </label><br/>
          <input className={`is-large button is-success`} type="submit" />
      </form>
    )
  }
}
