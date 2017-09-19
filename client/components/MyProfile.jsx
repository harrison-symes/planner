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
    console.log(auth.user);
    return (
      <div>
        <h1>Hello {auth.user.first_name}</h1>
      </div>
    )
  }
}
