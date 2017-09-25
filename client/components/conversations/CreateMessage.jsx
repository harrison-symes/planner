import React from 'react'

export default class CreateMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: {
        content: ''
      }    }
    this.submitMessage = this.submitMessage.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
  }
  submitMessage (e) {
    e.preventDefault()
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
    let {content} = this.state.message
    return (
      <form className="content" onSubmit={this.submitMessage} >
        <input className="input is-10" autoComplete="off" onChange={this.updateDetails} type="text" name="content" placeholder="Message"/>
        <input className={`button is-2 ${content.length < 8 ? " is-danger is-static" : "is-success"}`}  type="submit" />
      </form>
    )
  }
}
