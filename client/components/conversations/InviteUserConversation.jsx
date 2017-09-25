import React from 'react'

export default class InviteUserConversation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  render() {
    const renderUserToInvite = (user, i) => <div className="level" key={i}>
      <span className="level-item">
        <h3 className="subtitle is-5">{user.first_name} <strong>({user.user_name})</strong></h3>
      </span>
      {!user.is_invited
        ? <button className="button is-success level-item" onClick={() => this.sendInvite(user.user_id)}>Invite</button>
        : <p className="button is-success level-item" disabled="Disabled">Invite Sent</p>
      }
    </div>
    let {users} = this.props
    return (
      <div>
        <hr />
        <h1 className="subtitle is-4">Invite a User</h1>
        {users.map(renderUserToInvite)}
      </div>
    )
  }
}
