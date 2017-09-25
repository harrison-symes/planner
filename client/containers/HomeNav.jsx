import {connect} from 'react-redux'

import HomeNav from '../components/HomeNav'

import {logoutUser} from '../actions/logout'

const mapStateToProps = ({auth, loading}) => {
  return {
    auth,
    loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav)
