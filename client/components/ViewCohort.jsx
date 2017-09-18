import React from 'react'

export default class ViewCohort extends React.Component {
  render() {
    console.log(this.props);
    let {cohort} = this.props
    return (
      <div>
        <h1>{cohort.name}</h1>
        <p>{cohort.description}</p>
      </div>
    )
  }
}
