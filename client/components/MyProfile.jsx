import React from 'react'
import {Link} from 'react-router-dom'

import MyCohorts from '../containers/MyCohorts'

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    let {auth} = this.props
    return (
      <div>
        <h1>My Profile : {auth.user.user_name}</h1>
      </div>
    )
  }
}
