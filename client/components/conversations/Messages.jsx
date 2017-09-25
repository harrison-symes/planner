import React from 'react'
import MessageSingle from '../../containers/conversations/MessageSingle'
import CreateMessage from '../../containers/conversations/CreateMessage'

export default function Messages ({messages, conversation_id}) {
  const renderSingleMessage = (message, i) => <MessageSingle key={i} message={message} />
  return (
    <div className="column is-6">
      <h3 className="subtitle">Messages:</h3>
      <CreateMessage conversation_id={conversation_id}/>
      <div className="" style={{height: "40vh", overflowY: 'scroll'}}>
        {messages.map(renderSingleMessage)}
      </div>
    </div>
  )
}
