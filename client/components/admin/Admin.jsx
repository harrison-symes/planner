import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import AdminNav from './AdminNav'
import CreateCohort from '../../containers/admin/CreateCohort'

export default class Admin extends React.Component {
  render() {
    let {user} = this.props.auth
    return (
      <div className="container">
        {user.is_admin == true &&
          <Router>
            <div>
              <h1 className="title is-1">Admin</h1>
              <hr />
              <AdminNav />
              <Route path="/my/admin/cohorts/create" component={CreateCohort} />
            </div>
          </Router>
        }
      </div>
    )
  }
}
