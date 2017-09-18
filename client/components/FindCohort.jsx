import React from 'react'
import FindCohortSingle from '../containers/FindCohortSingle'

export default class findCohort extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCohort: null
    }
    this.selectCohort = this.selectCohort.bind(this)
  }
  componentDidMount() {
    if (!this.props.auth.user.cohort_id )this.props.getCohorts()
    //list of cohorts to request a join tot
  }
  selectCohort(selectedCohort) {
    if (this.state.selectedCohort === selectedCohort) selectedCohort = null
    this.setState({selectedCohort})
  }
  render() {
    let {selectedCohort} = this.state
    let {auth, cohorts} = this.props
    const renderCohort = (cohort, i) => <FindCohortSingle selected={cohort === selectedCohort} select={this.selectCohort} cohort={cohort} key={i} />
    return (
      <div>
        <h1>Find a cohort</h1>
        {auth.user.cohort_id
          ? <h1>You are in a cohort (Congratulations, by the way), You will need to leave it before you can join another</h1>
          : <div>
            {cohorts.map(renderCohort)}
          </div>
        }
      </div>
    )
  }
}
