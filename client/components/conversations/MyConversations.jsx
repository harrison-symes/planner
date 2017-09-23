import React from 'react'
import {Link} from 'react-router-dom'

import IncomingConversationInvites from '../../containers/conversations/IncomingConversationInvites'

export default class MyConversations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddConversation: false,
      name: ''
    }
    this.toggleCreateConversation = this.toggleCreateConversation.bind(this)
    this.submitConversation = this.submitConversation.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
  }
  componentDidMount() {
    this.props.getConversations()
  }
  toggleCreateConversation() {
    this.setState({showAddConversation: !this.state.showAddConversation})
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submitConversation(e) {
    e.preventDefault()
    e.target.reset()
    this.props.createConversation(this.state.name)
    this.setState({showAddConversation: false, name: ''})
  }
  render() {
    let {conversations} = this.props
    let {showAddConversation, name} = this.state
    const renderConversationSingle = ({name, id}, i) => <div key={i}>
      <h3><Link to={`/my/conversations/${id}`}>{name}</Link></h3>
    </div>
    const createConversation = () => {
      return (
        <form onSubmit={this.submitConversation} >
          <input type='text' name="name" onChange={this.updateDetails}/>
          <input type="submit"/>
        </form>
      )
    }
    return (
      <div>
        <h1>Conversations</h1>
        <button onClick={this.toggleCreateConversation}>{showAddConversation ? "Cancel" : "Create Conversation"}</button>
        <IncomingConversationInvites />
        {showAddConversation && createConversation()}
        {conversations.map(renderConversationSingle)}
      </div>
    )
  }
}
