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
    const renderConversationSingle = ({name, id}, i) => <div className="subtitle" key={i}>
      <h3><Link to={`/my/conversations/${id}`}> {name}</Link></h3>
    </div>
    const createConversation = () => {
      return (
        <form className="form" onSubmit={this.submitConversation} >
          <input className="input " placeholder="Conversation Name" type='text' name="name" onChange={this.updateDetails}/>
          <input className="button is-success " type="submit"/>
        </form>
      )
    }
    return (
      <div className="container">
        <h1 className="title">Conversations</h1>
        <hr />
        <div className="columns">
          <div className="column is-4">
            <button className={`button ${showAddConversation ? "is-danger" : "is-info"} is-inverted`} onClick={this.toggleCreateConversation}>{showAddConversation ? "Cancel" : "Create Conversation"}</button>
            {showAddConversation && createConversation()}
          </div>
          <div className="column is-4">
            {conversations.map(renderConversationSingle)}
          </div>
          <IncomingConversationInvites />
        </div>
        <hr />
      </div>
    )
  }
}
