import {connect} from 'react-redux'

import UserProfile from '../components/UserProfile'

const mapStateToProps = ({usersInCohort}, {match}) => {
  console.log({match});
  return {
    user: usersInCohort.find(user => match.params.id == user.user_id)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  console.log({props});
  return {
    getUser: () => console.log("getting user stand in")
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
