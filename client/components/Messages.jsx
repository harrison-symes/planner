import React from 'react'
import MessageSingle from '../containers/MessageSingle'
import CreateMessage from '../containers/CreateMessage'

export default function Messages ({messages, conversation_id}) {
  const renderSingleMessage = (message, i) => <MessageSingle key={i} message={message} />
  console.log({messages});
  return (
    <div>
      <h3>Messages:</h3>
      <CreateMessage conversation_id={conversation_id}/>
      {messages.map(renderSingleMessage)}
    </div>
  )
}
