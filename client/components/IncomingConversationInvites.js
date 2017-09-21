import React from 'react'

export default class IncomingConversationInvites extends React.Component {
  componentDidMount() {
    this.props.getInvites()
  }
  render() {
    let {incomingInvites} = this.props
    console.log(this.props);
    const renderInvite = (invite, i) => <div key={i}>
      <p>{invite.first_name} ({invite.user_name}) wants you to join "{invite.name}"</p>
      <button>Accept</button>
      <button>Decline</button>
    </div>
    return (
      <div>
        {incomingInvites.length != 0 && <div>
          {incomingInvites.map(renderInvite)}
        </div>}
      </div>
    )
  }
}
