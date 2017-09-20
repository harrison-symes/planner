import React from 'react'

export default class InviteUserConversation extends React.Component {
  componentDidMount() {
    console.log(this.props);
    // this.props.getUsers(this.props.id)
  }
  render() {
    return (
      <div>Invite Users</div>
    )
  }
}
