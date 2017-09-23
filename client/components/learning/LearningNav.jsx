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
        <Link to="/my/learning/new">Create Learning Objective</Link>
      </div>
    )
  }
}
