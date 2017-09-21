import React from 'react'

export default class InviteUserConversation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.sendInvite = this.sendInvite.bind(this)
  }
  componentDidMount() {
    console.log(this.props);
    this.props.getUsersToInvite(this.props.id)
    this.props.getInvites(this.props.id)
  }
  sendInvite(user_id) {
    this.props.sendInvite(user_id, this.props.id)
  }
  render() {
    const renderUserToInvite = (user, i) => <div key={i}>
      <h3>{user.first_name} ({user.user_name})</h3>
      {user.is_invited
        ? <p>Invite Sent</p>
        : <button onClick={() => this.sendInvite(user.user_id)}>Invite</button>

      }
    </div>
    let {users} = this.props
    console.log({users});
    return (
      <div>
        <h1>Invite a user</h1>
        {users.map(renderUserToInvite)}
      </div>
    )
  }
}
