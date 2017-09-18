import React from 'react'

export default function FindCohortSingle ({cohort, selected, select, join}) {
  return (
    <div >
      <h1 onClick={() => select(cohort)}>{cohort.name}</h1>
      {selected && <div>
        <h2>{cohort.description}</h2>
        {cohort.is_joined
          ? <h3>You have joined this cohort</h3>
          : <div>
            <button onClick={() => join(cohort.id)}>{cohort.is_private ? "Request to Join" : "Join"}</button>
          </div>
        }
      </div>}
    </div>
  )
}
