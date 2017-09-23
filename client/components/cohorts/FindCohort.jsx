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
    if (!this.props.auth.user.cohort_id )this.props.getCohorts()
    //list of cohorts to request a join tot
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
    const renderCohort = (cohort, i) => <FindCohortSingle selected={cohort === selectedCohort} select={this.selectCohort} cohort={cohort} key={i} />
    return (
      <div>
        <h1>Find a cohort</h1>
        <Link to="/my/cohorts">Back</Link>
        <br />
        <input type="text" onChange={this.updateSearch} name="search" placeholder="Search Cohorts" value={search}/>
        <div>
          {cohorts.filter(c => c.name.toLowerCase().includes(search)).map(renderCohort)}
        </div>
      </div>
    )
  }
}
