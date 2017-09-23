import React from 'react'

export default class InviteUserConversation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedUser: null
    }
    this.sendInvite = this.sendInvite.bind(this)
  }
  componentDidMount() {
    this.props.getUsersToInvite(this.props.id)
    this.props.getInvites(this.props.id)
  }
  sendInvite(user_id) {
    this.props.sendInvite(user_id, this.props.id)
  }
  selectUser(selectedUser) {
    this.setState({selectedUser})
  }
  render() {
    const renderUserToInvite = (user, i) => <div key={i} onClick={() => this.selectUser(user)}>
      <h3>{user.first_name} ({user.user_name})</h3>
      {!user.is_invited
        ? user == this.state.selectedUser
          ? <button onClick={() => this.sendInvite(user.user_id)}>Invite</button>
          : <div></div>
        : <p>Invite Sent</p>
      }
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
