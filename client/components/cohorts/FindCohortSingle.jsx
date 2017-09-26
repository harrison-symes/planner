import React from 'react'
import {Link} from 'react-router-dom'

export default function FindCohortSingle ({cohort, selected, select, join}) {
  return (
    <div className="content">
      <button className="button is-inverted is-info is-6" onClick={() => select(cohort)}>{cohort.name}</button>
      {cohort.is_joined
        && <h3 className="subtitle is-6">You have joined this cohort: <Link to={`/my/cohorts/${cohort.id}` } className="button is-info is-inverted is-small">View Now</Link></h3>
      }
      {selected && <div>
        <p className="content is-1">{cohort.description}</p>
        {!cohort.is_joined && <div>
          <a className="button is-small is-success" onClick={() => join(cohort.id)}>{cohort.is_private ? "Request to Join" : "Join"}</a>
        </div>
        }
      </div>
      }
    </div>
  )
}
