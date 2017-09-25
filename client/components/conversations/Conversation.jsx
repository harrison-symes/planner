import React from 'react'
import {Link} from 'react-router-dom'

import Messages from '../../containers/conversations/MessagesInConversation'
import InviteUserConversation from '../../containers/conversations/InviteUserConversation'
import IncomingConversationInvites from '../../containers/conversations/IncomingConversationInvites'

export default class Conversation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showUsers: false,
      showAddUser: false
    }
    this.toggleUsers = this.toggleUsers.bind(this)
    this.toggleInviteUsers = this.toggleInviteUsers.bind(this)
  }
  toggleUsers() {
    this.setState({showUsers: !this.state.showUsers})
  }
  toggleInviteUsers() {
    this.setState({showAddUser: !this.state.showAddUser})
  }
  componentDidMount() {
    //get users in conversation
    this.props.getUsers(this.props.conversation.id)
    this.props.getMessages(this.props.conversation.id)
    // this.props.getUsersToInvite(this.props.conversation.id)
    //get messages in conversation
  }
  render() {
    let {conversation, users, match} = this.props
    let {showUsers, showAddUser} = this.state
    if (!conversation) {
      this.props.history.push('/my/conversations')
      return <div>Conversation Not Found</div>
    }
    const renderUser = ({user_id, first_name, user_name}, i) => <h4 key={i}><Link to={`/users/${user_id}/profile`}>{first_name} | ({user_name})</Link></h4>
    return (
      <div className="container">
        <h1 className="title">Conversation: {conversation.name}</h1>
        <Link className="button is-warning" to="/my/conversations">Back</Link>
        <div className="columns">
          <div className="column is-3">
            <button className={`button is-inverted ${showUsers ? 'is-danger' : 'is-info is-large'}`} onClick={this.toggleUsers}>{showUsers ? "Hide Members" : "Show Members"}</button>
            {showUsers && users.map(renderUser)}
          </div>
          <Messages conversation_id={match.params.id} {...this.props}/>
          <div className="column is-3">
            <button className={`button is-inverted ${showAddUser ? 'is-danger' : 'is-info is-large'}`} onClick={this.toggleInviteUsers}>{showAddUser ? "Close" : "Invite a User"}</button>
            {showAddUser && <InviteUserConversation id={conversation.id} /> }
          </div>
        </div>
      </div>
    )
  }
}
