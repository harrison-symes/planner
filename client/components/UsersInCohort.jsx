import React from 'react'
import {Link} from 'react-router-dom'

const renderUser = ({user_name, is_admin, user_id}, i) => (
  <div key={i}>
    <p>{user_name} {is_admin ? 'A' : ""}</p>
    <Link to={`/users/${user_id}/profile`}>View Profile</Link>
  </div>
)

export default function UsersInCohort ({users}) {
  return (
    <div>
      {users.map(renderUser)}
    </div>
  )
}
