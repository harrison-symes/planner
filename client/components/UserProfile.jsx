import React from 'react'
import {Link} from 'react-router-dom'

export default function UserProfile ({user, history}) {
  if (!user) return <h1>User not found ;-; <Link to="/my/cohorts">Back</Link></h1>
  return (
    <div>{user.user_name}{"'s Profile"}</div>
  )
}
