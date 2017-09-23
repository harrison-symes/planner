import React from 'react'

export default class MessageSingle extends React.Component {
  render() {
    let {message} = this.props
    return (
      <div>
        {message.content} | {message.user_name}
      </div>
    )
  }
}
