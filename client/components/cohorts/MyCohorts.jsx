import React from 'react'
import {Link} from 'react-router-dom'

import MyCohortSingle from './MyCohortSingle'
import FindCohort from '../../containers/cohorts/FindCohort'

export default class MyCohorts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this)
    this.toggleFindCohort = this.toggleFindCohort.bind(this)
  }
  toggleFindCohort () {
    this.setState({showFindCohort: !this.state.showFindCohort})
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
    let filtered = cohorts.filter(c => c.name.toLowerCase().includes(search))
    const renderCohort = (cohort, i) => <MyCohortSingle key={i} cohort={cohort} />
    return (
      <div className="container">
        <h1 className="title is-1">Cohorts</h1>
        <hr />
        <div className="content columns">
          <FindCohort />
          <div className="column">
            <h1 className="subtitle is-1">My Cohorts</h1>
            <input className={`input ${filtered.length == 0 ? "is-danger" : "is-primary"} ${search.length > 0 ? "is-focused" : "is-small"}`} type="text" name="search" placeholder="Search My Cohorts" onChange={this.updateSearch} value={search} />
            <hr />
            {filtered.length > 0
              ? filtered.map(renderCohort)
              : <p className="tag is-danger is-large">No Matches</p>
            }
          </div>
        </div>
      </div>
    )
  }
}
