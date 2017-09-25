import React from 'react'

export default class MessageSingle extends React.Component {
  render() {
    let {message, auth} = this.props
    console.log(this.props);
    return (
      <article className={`message is-small ${message.user_id==auth.user.id ? "is-dark" : "is-primary"}`}>
        <div className="message-header">
          <p>{message.first_name} ({message.user_name})</p>
          {message.user_id==auth.user.id && <button className="delete" aria-label="delete"></button>}
        </div>
        <div className="message-body">
          <p className="is-large"><strong>{message.content}</strong></p>
        </div>

      </article>
    )
  }
}
