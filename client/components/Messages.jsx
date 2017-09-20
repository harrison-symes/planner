import React from 'react'
import MessageSingle from '../containers/MessageSingle'

export default function Messages ({messages}) {
  const renderSingleMessage = (message, i) => <MessageSingle key={i} message={message} />
  console.log({messages});
  return (
    <div>
      <h3>Messages:</h3>
      {messages.map(renderSingleMessage)}
    </div>
  )
}
