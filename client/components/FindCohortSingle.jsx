import React from 'react'
import {Link} from 'react-router-dom'

export default function FindCohortSingle ({cohort, selected, select, join}) {
  return (
    <div>
      <button onClick={() => select(cohort)}>{cohort.name}</button>
      {cohort.is_joined
        && <h3>You have joined this cohort: <Link to={`/my/cohorts/${cohort.id}`}>View Now</Link></h3>
      }
      {selected && <div>
        <p>{cohort.description}</p>
        {!cohort.is_joined && <div>
          <a href="#" onClick={() => join(cohort.id)}>{cohort.is_private ? "Request to Join" : "Join"}</a>
        </div>
        }
      </div>
      }
    </div>
  )
}
