import React from 'react'
import {Link} from 'react-router-dom'

export default function MyCohortSingle ({cohort}) {
  return (
    <div className="content">
      <Link className="button is-inverted is-info is-6" to={`/my/cohorts/${cohort.id}`} >{cohort.name}</Link>
    </div>
  )
}
