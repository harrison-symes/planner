import React from 'react'
// 
// export default function ({suggestions, isSelected, selectSuggestion, show, toggle}) {
//   const buttonDisplay = isSelected ? "Suggestions" : "Selected"
//   return suggestions.length != 0
//     ? (<span className="column">
//       <button onClick={toggle} className={`button ${show ? "is-danger" : "is-info is-large"} is-inverted`}>{show ? `Hide ${buttonDisplay}`: `See ${buttonDisplay}`}</button>
//       <div className="section columns is-multiline is-mobile">
//         {show && suggestions.map((suggestion, i) => <p key={i} onClick={() => selectSuggestion(suggestion)} className={`button column ${isSelected ? "is-info is-inverted" : 'is-success '} `}>{suggestion.title}</p>)}
//       </div>
//     </span>)
//     : <div></div>
// }


export default class LearningSuggestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({show: !this.state.show})
  }
  render() {
    const {suggestions, isSelected, selectSuggestion} = this.props
    const {show} = this.state
    const buttonDisplay = isSelected ? "Suggestions" : "Selected"
    return suggestions.length != 0
      ? <span className="column">
        <button onClick={this.toggle} className={`button ${show ? "is-danger" : "is-info is-large"} is-inverted`}>{show ? `Hide ${buttonDisplay}`: `See ${buttonDisplay}`}</button>
        <div className="section columns is-multiline is-mobile">
          {show && suggestions.map((suggestion, i) => <p key={i} onClick={() => selectSuggestion(suggestion)} className={`button column ${isSelected ? "is-info is-inverted" : 'is-success '} `}>{suggestion.title}</p>)}
        </div>
      </span>
      : <div></div>
  }
}
