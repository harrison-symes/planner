import React from 'react'
import {Link} from 'react-router-dom'

export default class UserProfile extends React.Component {
  componentDidMount() {
    if (!this.props.user) this.props.getUser()
  }
  render() {
    let {user, auth, history} = this.props
    if (!user) return <h1>User not found ;-; <Link to="/my/cohorts">Back</Link></h1>
    if (user.user_id == auth.user.id) {
      history.push('/my/profile')
      return <div>Redirecting to my profile</div>
    }
    return (
      <div>{user.user_name}{"'s Profile"}</div>
    )
  }
}
