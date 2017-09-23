import React from 'react'
import {Link} from 'react-router-dom'

const renderUser = ({user_name, first_name, is_admin, user_id}, i) => (
  <div key={i}>
    <Link to={`/users/${user_id}/profile`}><p>{first_name} ({user_name}) {is_admin ? 'A' : ""}</p></Link>
  </div>
)

export default function UsersInCohort ({users}) {
  return (
    <div>
      {users.map(renderUser)}
    </div>
  )
}
