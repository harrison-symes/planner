import React from 'react'
import {Link} from 'react-router-dom'

const renderUser = ({user_name, is_admin, user_id}, i) => (
  <div>
    <p>{user_name} {is_admin ? 'A' : ""}</p>
    <Link to={`/users/profile/${user_id}`}>View Profile</Link>
  </div>
)

export default function UsersInCohort ({users}) {
  return (
    <div>
      {users.map(renderUser)}
    </div>
  )
}
