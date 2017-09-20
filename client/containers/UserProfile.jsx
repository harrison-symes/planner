import {connect} from 'react-redux'

import UserProfile from '../components/UserProfile'

import {getUserRequest} from '../actions/users'

const mapStateToProps = ({usersInCohort}, {match}) => {
  console.log({match});
  return {
    user: usersInCohort.find(user => match.params.id == user.user_id)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  console.log({props});
  return {
    getUser: () => dispatch(getUserRequest(props.match.params.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
