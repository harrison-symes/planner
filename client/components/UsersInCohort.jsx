import React from 'react'

const renderUser = ({user_name, is_admin}, i) => (
  <div>
    <p>{user_name} {isAdmin && 'A'}</p>
  </div>
)

export default function UsersInCohort ({users}) {

  return (
    <div>
      {users.map(renderUser)}
    </div>
  )
}
