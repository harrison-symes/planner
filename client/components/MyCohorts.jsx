import React from 'react'
import MyCohortSingle from '../components/MyCohortSingle'

export default class MyCohorts extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getCohorts()
  }
  render() {
    const renderCohort = (cohort, i) => <MyCohortSingle key={i} cohort={cohort} />
    return (
      <div>
        {this.props.cohorts.map(renderCohort)}
      </div>
    )
  }
}
