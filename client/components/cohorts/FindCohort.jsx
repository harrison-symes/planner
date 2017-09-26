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
  }
  componentDidMount() {
    if (!this.props.auth.user.cohort_id) this.props.getCohorts()
  }
  selectCohort(selectedCohort) {
    if (this.state.selectedCohort === selectedCohort) selectedCohort = null
    this.setState({selectedCohort})
  }
  render() {
    let {selectedCohort} = this.state
    let {auth, cohorts, search} = this.props
    let filtered = cohorts.filter(c => c.name.toLowerCase().includes(search))
    const renderCohort = (cohort, i) => <FindCohortSingle selected={cohort === selectedCohort} select={this.selectCohort} cohort={cohort} key={i} />
    if (cohorts.length == 0) return <div></div>
    return (
      <div className="column is-one-third">
        <h1 className="subtitle is-1">Find Cohorts</h1>
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
