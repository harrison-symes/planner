import React from 'react'
import {Link} from 'react-router-dom'

export default function MyCohortSingle ({cohort}) {
  return (
    <div>
      <button><Link to={`/cohorts/${cohort.id}`} >{cohort.name}</Link></button>
    </div>
  )
}
