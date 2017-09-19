import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

export default function HomeNav () {
  return (
    <div>
      <Link to="/find/cohorts">Find</Link>
      {" | "}
      <Link to="/my/cohorts">Cohorts</Link>
      {" | "}
      <Link to="/my/learning">Learning</Link>
      {" | "}
      <Link to="/my/profile">Profile</Link>
    </div>
  )
}
