import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const validate = ({user_name, password, confirm_password, first_name, last_name}) => {
  let answer = {success:false}
  if (user_name.length < 6) answer.message = "User Name Too Short"
  else if (password.length < 6) answer.message = "Password Must Be 6 Characters"
  else if (password != confirm_password) answer.message = "Passwords Don't Match"
  else if (!first_name || !last_name) answer.message = "Please Enter Your Names"
  else answer.success = true
  return answer
}

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      password: '',
      confirm_password: '',
      first_name: '',
      last_name: '',
      about: '',
      isLoading: false
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
    let validation = validate(this.state)
    if (!validation.success) this.props.error(validation.message)
    else {
      this.setState({isLoading: true})
      this.props.registerUser({...this.state}, (err) => {
        if (err) this.props.error(validation.message)
        this.setState({isLoading: false})
      })
    }
  }
  render() {
    let {user_name, password, confirm_password, isLoading} = this.state
    let labelClass = "label control has-icons-left "
    let inputClass = "input " + (isLoading ? "isloading" : " ")
    return (
      <div className="container">
        <h1 className="title is-1">Register</h1>
        <hr />
        <form className="Register" onSubmit={this.submit}>
          <h1 className="is-danger">{this.props.auth.errorMessage}</h1>
          <label className={`${labelClass}`}>Username:
            <input className={`${inputClass} ${user_name.length > 6 ? "is-success" : "is-danger"}`} type="text" name="user_name" placeholder="User Name" onChange={this.updateDetails}/>
          </label>
          <label className={`${labelClass}`}>Password:
            <input className={`${inputClass} ${password.length >= 6 ? "is-success" : "is-danger"}`}  type="password" name="password" placeholder="Password" onChange={this.updateDetails}/>
          </label>
          <label className={`${labelClass}`}>Confirm:
            <input className={`${inputClass} ${password == confirm_password && confirm_password.length >= 6 ? "is-success" : "is-danger"}`} placeholder="Confirm Password" type="password" name="confirm_password" onChange={this.updateDetails}/>
          </label>
          <label className={`${labelClass}`}>First Name:
            <input className={`${inputClass}`} placeholder="First Name" type="text" name="first_name" onChange={this.updateDetails}/>
          </label>
          <label className={`${labelClass}`}>Last Name:
            <input className={`${inputClass}`} placeholder="Last Name" type="text" name="last_name" onChange={this.updateDetails}/>
          </label>
          <label className={`${labelClass}`}>About Me:
            <input className={`${inputClass} is-dark`} placeholder="About Me" type="textarea" name="about" onChange={this.updateDetails}/>
          </label><br/>
            <Link className="button is-large is-warning" to="/">Back</Link>
            <input className={`is-large button is-success`} type="submit" value="Register"/>
        </form>
      </div>
    )
  }
}
