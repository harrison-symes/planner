import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import AdminNav from './AdminNav'

export default class Admin extends React.Component {
  render() {
    let {user} = this.props.auth
    return (
      <div>
        {user.is_admin == true &&
          <Router>
            <div>
              <AdminNav />
              <Route exact path="/my/admin/create/cohort" component={() => <h1>Create Cohort</h1>} />
            </div>
          </Router>
        }
      </div>
    )
  }
}
