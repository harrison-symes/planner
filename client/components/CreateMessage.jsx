import React from 'react'

export default class CreateMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: {
        content: ''
      }
    }
    this.submitMessage = this.submitMessage.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
  }
  submitMessage (e) {
    e.preventDefault()
    console.log(this.props);
    this.props.sendMessage(this.state.message, this.props.conversation_id)
    e.target.reset()
    this.setState({message: {content: ''}})
  }
  updateDetails (e) {
    let {message} = this.state
    message[e.target.name] = e.target.value
    this.setState({message})
  }
  render() {
    return (
      <form onSubmit={this.submitMessage} >
        <input onChange={this.updateDetails} type="text" name="content" placeholder="message here :)"/>
        <input type="submit" />
      </form>
    )
  }
}
