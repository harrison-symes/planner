import React from 'react'
import {Link} from 'react-router-dom'

export default class Conversation extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    //get users in conversation
    this.props.getUsers(this.props.conversation.id)
    //get messages in conversation
  }
  render() {
    let {conversation, users} = this.props
    if (!conversation) {
      this.props.history.push('/my/conversations')
      return <div>Conversation Not Found</div>
    }
    const renderUser = ({user_id, first_name, user_name}, i) => <h4 key={i}><Link to={`/users/${user_id}/profile`}>{first_name} | ({user_name})</Link></h4>
    return (
      <div>
        <h1>Conversation: {conversation.name}</h1>
        <div>
          <h3>Users in this conversation: </h3>
          {users.map(renderUser)}
        </div>
      </div>
    )
  }
}
