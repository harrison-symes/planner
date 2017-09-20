import React from 'react'
import {Link} from 'react-router-dom'

import Messages from '../containers/MessagesInConversation'

export default class Conversation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showUsers: false
    }
    this.toggleUsers = this.toggleUsers.bind(this)
  }
  toggleUsers() {
    this.setState({showUsers: !this.state.showUsers})
  }
  componentDidMount() {
    //get users in conversation
    this.props.getUsers(this.props.conversation.id)
    this.props.getMessages(this.props.conversation.id)
    //get messages in conversation
  }
  render() {
    let {conversation, users, match} = this.props
    let {showUsers} = this.state
    console.log("conversation", this.props);
    if (!conversation) {
      this.props.history.push('/my/conversations')
      return <div>Conversation Not Found</div>
    }
    const renderUser = ({user_id, first_name, user_name}, i) => <h4 key={i}><Link to={`/users/${user_id}/profile`}>{first_name} | ({user_name})</Link></h4>
    return (
      <div>
        <h1>Conversation: {conversation.name}</h1>
        <Link to="/my/conversations">Back</Link>
        <div>
          <button onClick={this.toggleUsers}>{showUsers ? "Hide Members" : "Show Members"}</button>
          {showUsers && users.map(renderUser)}
          <Messages conversation_id={match.params.id} {...this.props}/>
        </div>
      </div>
    )
  }
}
