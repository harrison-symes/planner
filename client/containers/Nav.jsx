import {connect} from 'react-redux'

import {logoutUser} from '../actions/logout'

import Nav from '../components/Nav'

const mapStateToProps = ({auth}) => {
  return {auth}
}

const mapDispatchToProps = (dispatch) => {
  return {logout: () => dispatch(logoutUser())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
