import React from 'react'

export default class IncomingConversationInvites extends React.Component {
  componentDidMount() {
    this.props.getInvites()
  }
  render() {
    let {incomingInvites} = this.props
    const renderInvite = (invite, i) => <div className="content" key={i}>
      <p className="subtitle"><strong>{invite.first_name} ({invite.user_name})</strong> wants you to join <strong>{invite.name}</strong></p>
      <div className="has-text-centered">
        <button className="button is-small is-success is-level" onClick={() => this.props.acceptInvite(invite.conversation_id)}>Accept</button>
        <button className="button is-small is-danger is-level">Decline</button>
      </div>
    </div>
    return (
      <div className="column is-3">
        <h1 className="title is-3">Invites <p className={`tag ${incomingInvites.length != 0 ? "is-danger is-large" : " is-small"}`}>{incomingInvites.length}</p></h1>
        <hr />
        {incomingInvites.map(renderInvite)}
      </div>
    )
  }
}
