import React from 'react'
import MessageSingle from '../../containers/conversations/MessageSingle'
import CreateMessage from '../../containers/conversations/CreateMessage'

export default function Messages ({messages, conversation_id}) {
  const renderSingleMessage = (message, i) => <MessageSingle key={i} message={message} />
  return (
    <div>
      <h3>Messages:</h3>
      <CreateMessage conversation_id={conversation_id}/>
      {messages.map(renderSingleMessage)}
    </div>
  )
}
