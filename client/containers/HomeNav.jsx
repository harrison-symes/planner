import {connect} from 'react-redux'

import HomeNav from '../components/HomeNav'

import {logoutUser} from '../actions/logout'

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav)
