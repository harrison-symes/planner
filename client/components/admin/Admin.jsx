import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import AdminNav from './AdminNav'
import CreateCohort from '../../containers/admin/CreateCohort'

export default class Admin extends React.Component {
  render() {
    let {user} = this.props.auth
    return (
      <div>
        {user.is_admin == true &&
          <Router>
            <div>
              <AdminNav />
              <Route path="/my/admin/cohorts/create" component={CreateCohort} />
            </div>
          </Router>
        }
      </div>
    )
  }
}
