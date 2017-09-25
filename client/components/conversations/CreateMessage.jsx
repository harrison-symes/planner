import React from 'react'

export default class CreateMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: {
        content: ''
      },
      err: ''
    }
    this.submitMessage = this.submitMessage.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
  }
  submitMessage (e) {
    e.preventDefault()
    if (this.state.message.content.legth < 8) this.setState({err: 'Message Too Short'})
    else {
      this.props.sendMessage(this.state.message, this.props.conversation_id)
      e.target.reset()
      this.setState({err: '', message: {content: ''}})
    }
  }
  updateDetails (e) {
    let {message} = this.state
    message[e.target.name] = e.target.value
    this.setState({message})
  }
  render() {
    let {content} = this.state.message
    return (
      <form className="form" onSubmit={this.submitMessage} >
        <p className="label is-danger">{this.state.err}</p>
        <input className="input" autoComplete="off" onChange={this.updateDetails} type="text" name="content" placeholder="Message"/>
        <input className={`button is-success ${content.length < 8 ? "is-disabled is-danger" : " "}`} type="submit" />
      </form>
    )
  }
}
