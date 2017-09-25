import React from 'react'

import {Link} from 'react-router-dom'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    let {user_name, password} = this.state
    this.props.loginUser({user_name, password})
  }
  render() {
    let {username, password} = this.state
    return (
      <div className="container">
        <h1 className="content is-large">Login</h1>
        <hr />
        <form className="Login" onSubmit={this.submit}>
          <label className="label is-large control has-icons-left">Username:
            <input className="input is-large is-primary" type="text" name="user_name" placeholder='Joshua Vial' onChange={this.updateDetails}/>
            <span className="icon is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </label>
          <label className="label is-large control has-icons-left">Password:
            <input className="input is-large is-warning"  type="password" name="password" placeholder="Bananas" onChange={this.updateDetails}/>
            <span className="icon is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </label>
          <br/>
          <Link className="button is-large is-warning" to="/">Back</Link>
          <input className="submit button is-large is-success" type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}
