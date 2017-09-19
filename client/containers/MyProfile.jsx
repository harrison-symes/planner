import {connect} from 'react-redux'

import MyProfile from '../components/MyProfile'

const mapStateToProps = ({auth, joinedCohorts}) => {
  return {
    auth,
    joinedCohorts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps)(MyProfile)
