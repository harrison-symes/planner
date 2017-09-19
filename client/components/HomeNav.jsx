import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

export default function HomeNav () {
  return (
    <div>
      <Link to="/cohorts/new/find">Find</Link>
      {" | "}
      <Link to="/cohorts">Cohorts</Link>
      {" | "}
      <Link to="/learning">Learning</Link>
      {" | "}
      <Link to="/profile">Profile</Link>
    </div>
  )
}
