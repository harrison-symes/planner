import {connect} from 'react-redux'

import UserProfile from '../components/UserProfile'

const mapStateToProps = ({usersInCohort}, {match}) => {
  console.log({match});
  return {
    user: usersInCohort.find(user => match.params.id == user.user_id)
  }
}

export default connect(mapStateToProps)(UserProfile)
