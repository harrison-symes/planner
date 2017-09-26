import React from 'react'
import {Link} from 'react-router-dom'
import FindCohortSingle from '../../containers/cohorts/FindCohortSingle'

export default class findCohort extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCohort: null,
      search: ''
    }
    this.selectCohort = this.selectCohort.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
  }
  componentDidMount() {
    if (!this.props.auth.user.cohort_id) this.props.getCohorts()
  }
  selectCohort(selectedCohort) {
    if (this.state.selectedCohort === selectedCohort) selectedCohort = null
    this.setState({selectedCohort})
  }
  updateSearch(e) {
    this.setState({[e.target.name.toLowerCase()]: e.target.value})
  }
  render() {
    let {selectedCohort, search} = this.state
    let {auth, cohorts} = this.props
    let filtered = cohorts.filter(c => c.name.toLowerCase().includes(search))
    const renderCohort = (cohort, i) => <FindCohortSingle selected={cohort === selectedCohort} select={this.selectCohort} cohort={cohort} key={i} />
    if (cohorts.length == 0) return <div></div>
    return (
      <div className="column is-6">
        <h1 className="subtitle is-1">Find Cohorts</h1>
        <input className={`input ${filtered.length == 0 ? "is-danger" : "is-primary"} ${search.length > 0 ? "is-focused" : "is-small"}`} type="text" onChange={this.updateSearch} name="search" placeholder="Search Cohorts" value={search}/>
        <hr />
        <div>
          {filtered.length > 0 || search.length === 0
            ? filtered.map(renderCohort)
            : <p className="tag is-danger is-large">No Matches</p>
          }

        </div>
      </div>
    )
  }
}
