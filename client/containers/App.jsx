import {connect} from 'react-redux'

import App from '../components/App'

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
