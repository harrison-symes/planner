import React from 'react'
import {Link} from 'react-router-dom'

export default class MyConversations extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getConversations()
  }
  render() {
    let {conversations} = this.props
    const renderConversationSingle = ({name, id}, i) => <div key={i}>
      <h3><Link to={`/my/conversations/${id}`}>{name}</Link></h3>
    </div>
    return (
      <div>
        <h1>Conversations</h1>
        {conversations.map(renderConversationSingle)}
      </div>
    )
  }
}
