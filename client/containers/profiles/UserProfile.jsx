import {connect} from 'react-redux'

import UserProfile from '../../components/profiles/UserProfile'

import {getUserRequest} from '../../actions/users'

const mapStateToProps = ({usersInCohort, auth}, {match}) => {
  return {
    user: usersInCohort.find(user => match.params.id == user.user_id),
    auth
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getUser: () => dispatch(getUserRequest(props.match.params.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
