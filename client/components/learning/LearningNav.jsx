import React from 'react'

import {Link} from 'react-router-dom'

export default class LearningNav extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Link to="/my/learning/">My Learning</Link>
        <Link to="/my/learning/new">Create LO</Link>
      </div>
    )
  }
}
