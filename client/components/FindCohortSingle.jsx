import React from 'react'

export default function FindCohortSingle ({cohort, selected, select, join}) {
  return (
    <div onClick={() => select(cohort)}>
      <h1>{cohort.name}</h1>
      {selected && <div>
        <h2>{cohort.description}</h2>
        <div>
          <button onClick={() => join(cohort.id)}>{cohort.private ? "Request to Join" : "Join"}</button>
        </div>
      </div>}
    </div>
  )
}
