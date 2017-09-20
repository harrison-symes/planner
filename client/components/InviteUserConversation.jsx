import React from 'react'

export default class InviteUserConversation extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getUsersToInvite(this.props.id)
  }
  render() {

    const renderUserToInvite = (user, i) => <div key={i}>
      <h3>{user.first_name} ({user.user_name})</h3>
      <button>Invite</button>
    </div>
    let {users} = this.props
    return (
      <div>
        <h1>Invite a user</h1>
        {users.map(renderUserToInvite)}
      </div>
    )
  }
}
