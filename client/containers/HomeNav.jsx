import {connect} from 'react-redux'

import HomeNav from '../components/HomeNav'

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav)
