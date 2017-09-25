import React from 'react'
import {Link} from 'react-router-dom'

import MyCohortSingle from './MyCohortSingle'

export default class MyCohorts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this)
  }
  componentDidMount() {
    this.props.getCohorts()
  }
  updateSearch(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    let {cohorts} = this.props
    let {search} = this.state
    const renderCohort = (cohort, i) => <MyCohortSingle key={i} cohort={cohort} />
    return (
      <div className="container">
        <h1 className="title">My Cohorts</h1>
        <hr />
        {cohorts.length != 0
          ? <div>
            <Link to="/my/cohorts/find/new">Find a Cohort</Link>
            <br />
            <input type="text" name="search" onChange={this.updateSearch} value={search} />
            {cohorts.filter(c => c.name.toLowerCase().includes(search)).map(renderCohort)}
          </div>
          : <p>You haven't joined any cohorts yet!
              <Link to="/my/cohorts/find/new"> Click Here </Link>
            To find one!</p>
        }
      </div>
    )
  }
}
