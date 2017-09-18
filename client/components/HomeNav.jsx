import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

export default function HomeNav () {
  return (
    <div>
      <Link to="/find/cohort">Find a Cohort</Link>
      <Link to="/cohorts">My Cohorts</Link>
    </div>
  )
}
